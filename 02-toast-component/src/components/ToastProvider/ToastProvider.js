import React from "react";
import { useEscapeKey } from '../../hooks/useEscapeKey';



export const ToastContext = React.createContext(undefined);
function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const handleNewToast = (variant, message) => {
    const id = crypto.randomUUID();
    setToasts([...toasts, { id, variant, message }]);
  };

  const handleDismiss = (deleteId) => {
    const newToasts = toasts.filter(({ id }) => id !== deleteId);
    setToasts([...newToasts]);
  };

  const handleDismissAll = () => {
    setToasts([]);
  };

  const value = {
    toasts,
    handleNewToast,
    handleDismiss,
    handleDismissAll
  }

  useEscapeKey(handleDismissAll);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
