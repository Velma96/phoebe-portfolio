from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from dotenv import load_dotenv
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)
load_dotenv()

def get_db_connection():
    return psycopg2.connect(
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT")
    )

def create_tables():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS messages (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        conn.commit()
    except Exception as e:
        print(f"Error creating tables: {e}")
    finally:
        if conn:
            conn.close()

create_tables()

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    
    # Validate required fields
    if not all(key in data for key in ["name", "email", "message"]):
        return jsonify({"error": "Missing required fields"}), 400
    
    name = data.get("name").strip()
    email = data.get("email").strip()
    message = data.get("message").strip()

    # Validate email format
    if not re.match(r"^[^@]+@[^@]+\.[^@]+$", email):
        return jsonify({"error": "Invalid email format"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        cursor.execute(
            "INSERT INTO messages (name, email, message) VALUES (%s, %s, %s) RETURNING id",
            (name, email, message)
        )
        message_id = cursor.fetchone()[0]
        conn.commit()
        
        return jsonify({
            "message": "Message sent successfully!",
            "id": message_id,
            "timestamp": datetime.now().isoformat()
        }), 200
        
    except Exception as e:
        return jsonify({
            "error": "Failed to send message",
            "details": str(e)
        }), 500
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals():
            conn.close()

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.now().isoformat()
    }), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)