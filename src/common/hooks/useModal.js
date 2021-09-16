import { useCallback, useState } from "react";

const useModal = (props) => {
  const { initialOpen = false } = props || {};
  const [isOpen, setisOpen] = useState(initialOpen);
  const close = useCallback(() => {
    setisOpen(false);
  }, []);
  const open = useCallback(() => {
    setisOpen(true);
  }, []);
  return { close, open, isOpen };
};

export default useModal;
