export const transformAttedance = (attedance) => ({
    ...attedance,
    signInTime: new Date(attedance.signInTime).toLocaleTimeString(),
  });