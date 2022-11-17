export const getItem = key => JSON.parse(localStorage.getItem(key));

export const setItem = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));
