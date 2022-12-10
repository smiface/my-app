export const rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

export const randomiseToken = function () {
  return rand() + rand() + rand(); // to make it longer
};
