export type FormState = {
  name: string;
  email: string;
  newsletter: boolean;
};

export type Action =
  | { type: "SET_FIELD"; field: keyof FormState; value: string | boolean }
  | { type: "RESET_FORM" };
