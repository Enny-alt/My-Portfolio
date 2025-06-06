import React, { useEffect } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-900 rounded-lg shadow-lg w-[90%] sm:w-[50%] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-3 px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-3 px-4 py-2 border rounded resize-none"
            rows={7}
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black/70 px-8 py-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;

