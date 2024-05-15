import { motion } from 'framer-motion';

function Spinner() {
  return (
    <motion.div
      className="spinner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      <div className="spinner-circle"></div>
    </motion.div>
  );
}

export default Spinner;