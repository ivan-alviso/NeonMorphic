import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface TechCornerProps {
  children: ReactNode;
  className?: string;
}

export const TechCorner = ({ children, className = "" }: TechCornerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`tech-corner group p-6 ${className}`}
    >
      {/* Corner Brackets are handled by CSS classes defined in index.css */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-neon/30 group-hover:border-brand-neon transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-neon/30 group-hover:border-brand-neon transition-colors" />
      {children}
    </motion.div>
  );
};
