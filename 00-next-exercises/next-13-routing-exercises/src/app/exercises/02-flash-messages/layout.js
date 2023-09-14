import React from "react";

import "./styles.css";
import ToastProvider from '../../../components/ToastProvider';

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
