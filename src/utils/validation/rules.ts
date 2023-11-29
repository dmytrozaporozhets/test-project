const validationSchema = {
  username: {
    required: { value: true, message: "Username is required" },
    pattern: { value: /^[a-zA-z\s]+$/, message: "Username is invalid" },
  },
  password: {
    required: { value: true, message: "Password is required" },
    minLength: { value: 8, message: "Minimum length 8 characters" },
  },
  email: {
    required: { value: true, message: "Email is required" },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please enter a valid email",
    },
  },
  required: {
    required: { value: true, message: "Field is required" },
  },
};

export default validationSchema;
