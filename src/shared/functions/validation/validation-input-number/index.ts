export const validationInputNumber = (value: any, min?: number) => {
  if (Number.isNaN(Number(value))) {
    return false;
  }
  if (Number(value) < 0) {
    return false;
  }
  if (Number(value) >= (min ? min : 0)) {
    return true;
  }
};
