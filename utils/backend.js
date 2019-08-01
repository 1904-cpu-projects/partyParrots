// Designed for use in user model
export const authError = (msg, subtype) => {
  const error = new Error(msg);
  error.type = 'Auth';
  error.subtype = subtype;
  error.status = 401;
  return error;
};
