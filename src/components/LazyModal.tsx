import { useState, Suspense, lazy } from "react";

const LazyModal = lazy(() => import("./Modal"));

export default function LazyModalExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="font-bold text-4xl text-center">
        React.lazy Modal Example
      </h1>

      <button
        onClick={() => setShowModal(true)}
        className="bg-[#7DF9FF] text-black border-2 border-black rounded-md px-4 py-2 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
      >
        Open Modal
      </button>

      {showModal && (
        <Suspense
          fallback={<div className="text-gray-600">Loading modal...</div>}
        >
          <LazyModal
            title="Modal was Lazy Loaded"
            content="Dynamic import with React.lazy and Suspense"
            onClose={() => setShowModal(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
