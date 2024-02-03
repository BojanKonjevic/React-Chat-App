import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="fixed w-full h-full flex items-center justify-center bg-primary bg-opacity-75">
      {children}
    </div>
  );
};

export default Modal;
