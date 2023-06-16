import React, { useEffect, useRef } from 'react';

const ModalPatient = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded shadow-lg p-6 w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default ModalPatient;


