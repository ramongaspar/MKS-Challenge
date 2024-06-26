import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react'
function SmoothAppear({children, className}:{children:ReactNode,className:string}) {
  return (
    <AnimatePresence>
    <motion.div
    className={className}
    key="products"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
    </AnimatePresence>
  )
}

export default SmoothAppear