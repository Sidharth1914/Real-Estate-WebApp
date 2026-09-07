import React, { createContext, useCallback, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, WarningCircle, XCircle, X } from '@phosphor-icons/react';

const ToastContext = createContext(null);

const VARIANTS = {
  success: { icon: CheckCircle, classes: 'bg-brand-50 text-brand-800 border-brand-200' },
  error: { icon: XCircle, classes: 'bg-red-50 text-red-700 border-red-200' },
  info: { icon: WarningCircle, classes: 'bg-stone-50 text-stone-700 border-stone-200' },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback((message, variant = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, variant }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-[calc(100vw-2rem)] max-w-sm">
        <AnimatePresence>
          {toasts.map(({ id, message, variant }) => {
            const { icon: Icon, classes } = VARIANTS[variant] || VARIANTS.info;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-start gap-3 rounded-lg border px-4 py-3 shadow-lifted ${classes}`}
                role="status"
              >
                <Icon size={20} weight="fill" className="mt-0.5 shrink-0" />
                <p className="text-sm font-medium flex-1">{message}</p>
                <button onClick={() => dismiss(id)} aria-label="Dismiss" className="shrink-0 opacity-60 hover:opacity-100">
                  <X size={16} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const push = useContext(ToastContext);
  if (!push) throw new Error('useToast must be used within ToastProvider');
  return push;
}
