import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  title: string;
  content: string;
  onClose: () => void;
};

export default function Modal({ title, content, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-bold text-xl text-center">{title}</h2>
          <p>{content}</p>

          <button
            onClick={onClose}
            className="bg-[#FF4911] text-white border-2 mt-2 border-black rounded-md px-4 py-2 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
