import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center py-6 bg-gray-800 text-gray-300"
    >
      <p>© 2025 Phoebe Velma. All rights reserved.</p>
    </motion.footer>
  );
}