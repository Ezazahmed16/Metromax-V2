'use client'
import { AnimatePresence, motion } from 'framer-motion'

const AnimationWrapper = ({ children }) => {
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exist={{ opacity: 0, y: 15 }}
                    transition={{ delay: 1.25 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default AnimationWrapper