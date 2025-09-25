import { useReducer, useMemo, useState } from "react";
import type { FormState, Action } from "../types/ReducerForm.type";

const initialState: FormState = {
  name: "",
  email: "",
  newsletter: false,
};

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export default function ReducerForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const isValid = useMemo(() => {
    return state.name.trim() !== "" && /\S+@\S+\.\S+/.test(state.email);
  }, [state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormState> = {};

    if (!state.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!/\S+@\S+\.\S+/.test(state.email)) {
      newErrors.email = "Valid email is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`to Submit:\n${JSON.stringify(state, null, 2)}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white rounded-xl shadow-md">
      <h2 className="font-bold text-4xl text-center">Form with useReducer</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            className=" w-full border-black border-2 p-2.5 focus:outline-none 
            focus:shadow-[4px_4px_0px_rgba(0,0,0,1)] 
            focus:bg-[#FFA6F6] 
            active:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          />
          {errors.name && (
            <p className=" mt-2 text-red-600 font-medium text-sm border-2 border-red-600 bg-red-50 px-3 py-2 shadow-[2px_2px_0px_rgba(220,38,38,1)]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
            className="w-full border-black border-2 p-2.5 focus:outline-none 
            focus:shadow-[4px_4px_0px_rgba(0,0,0,1)] 
            focus:bg-[#FFA6F6] 
            active:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          />
          {errors.email && (
            <p className="mt-2 text-red-600 font-medium text-sm border-2 border-red-600 bg-red-50 px-3 py-2 shadow-[2px_2px_0px_rgba(220,38,38,1)]">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="newsletter"
            type="checkbox"
            checked={state.newsletter}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "newsletter",
                value: e.target.checked,
              })
            }
            className="h-4 w-4 text-green-600 border-gray-300 rounded"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-700">
            subscribe to newsletter
          </label>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => dispatch({ type: "RESET_FORM" })}
            className="bg-[#FF4911] text-white border-2 border-black rounded-md px-4 py-2 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
          >
            Reset
          </button>

          <button
            type="submit"
            disabled={!isValid}
            className={` text-white border-2 border-black rounded-md px-4 py-2 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition ${
              isValid ? "bg-[#2FFF2F]" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
