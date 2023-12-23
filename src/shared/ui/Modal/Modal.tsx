import { ReactNode, useCallback, useEffect } from "react";
import { Portal } from "../Portal/Portal";
import clsx from "clsx";
import CrossSvg from "../../assets/icons/cross.svg?react";
import { Button } from "../Button/Button";

interface ModalProps {
  title?: string;
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const { className, title, children, isOpen, onClose } = props;

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    isOpen && (
      <Portal element={document.getElementById("modals") ?? document.body}>
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className={clsx(
                  "relative p-6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-11/12",
                  className && className
                )}
              >
                <div className="flex justify-between items-center pb-4">
                  <h3 className="text-5xl leading-tight">{title}</h3>
                  <Button
                    onClick={onClose}
                    addonLeft={<CrossSvg width={20} height={20} />}
                  />
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </Portal>
    )
  );
};
