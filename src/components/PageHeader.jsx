import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-slate-600 max-w-3xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
