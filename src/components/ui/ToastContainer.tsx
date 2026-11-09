import { useToast } from '@/context/ToastContext';

export function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] px-5 py-3 text-sm shadow-lg animate-[fadeIn_0.2s_ease-out] pointer-events-auto"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
