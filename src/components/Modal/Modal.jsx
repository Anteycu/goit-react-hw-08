import { useEffect } from "react";

const Modal = ({ children }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Modal {children}</div>;
};

export default Modal;
