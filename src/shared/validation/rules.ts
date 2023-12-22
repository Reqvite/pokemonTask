export const nameRule = (value: string) => {
  return {
    required: `${value} name is required`,
    minLength: {
      value: 2,
      message: `${value} name must be at least 2 characters long`,
    },
    maxLength: {
      value: 12,
      message: `${value} name must be at most 12 characters long`,
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: `Only characters from a-z and A-Z are accepted`,
    },
  };
};
