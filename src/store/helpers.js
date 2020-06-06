// creacte action 1 param
export const ca1p = (type, payload) => ({
  type,
  payload,
});

// creacte action 1 param
export const ca2p = (type, n1, v1, n2, v2) => ({
  type,
  [n1]: v1,
  [n2]: v2,
});
