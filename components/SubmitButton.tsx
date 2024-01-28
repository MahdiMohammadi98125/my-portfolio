import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex gap-1 items-center justify-center hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
      ) : (
        <>
          {" "}
          send{" "}
          <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
