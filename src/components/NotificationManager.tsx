'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useNotificationsList, useRemoveNotification } from '@/store';

export default function NotificationManager() {
  const notifications = useNotificationsList();
  const removeNotification = useRemoveNotification();

  return (
    <div className="fixed top-4 right-4 z-[100] space-y-3" aria-live="polite" aria-label="Notifications">
      <AnimatePresence mode="popLayout">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`max-w-sm w-full bg-white shadow-lg border-l-4 p-4 ${
              notification.type === 'success' ? 'border-green-500' :
              notification.type === 'error' ? 'border-red-500' :
              notification.type === 'warning' ? 'border-yellow-500' :
              'border-blue-500'
            }`}
            role="alert"
            aria-labelledby={`notification-title-${notification.id}`}
            aria-describedby={notification.message ? `notification-desc-${notification.id}` : undefined}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center">
                  <div className={`mr-3 text-lg ${
                    notification.type === 'success' ? 'text-green-500' :
                    notification.type === 'error' ? 'text-red-500' :
                    notification.type === 'warning' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`}>
                    {notification.type === 'success' && '✓'}
                    {notification.type === 'error' && '✕'}
                    {notification.type === 'warning' && '⚠'}
                    {notification.type === 'info' && 'ℹ'}
                  </div>
                  <h3 
                    id={`notification-title-${notification.id}`}
                    className="text-sm font-medium text-dark"
                  >
                    {notification.title}
                  </h3>
                </div>
                {notification.message && (
                  <p 
                    id={`notification-desc-${notification.id}`}
                    className="mt-1 text-sm text-dark/70"
                  >
                    {notification.message}
                  </p>
                )}
                {notification.action && (
                  <button
                    onClick={notification.action.onClick}
                    className="mt-2 text-sm text-burgundy hover:text-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
                  >
                    {notification.action.label}
                  </button>
                )}
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-3 text-dark/40 hover:text-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
                aria-label={`Dismiss ${notification.title} notification`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 