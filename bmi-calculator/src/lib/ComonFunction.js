export const resultHandleBmrMale = (weight, height, age) => {
  if (age === "") {
    return 0;
  }
  const w = 13.397 * weight;
  const h = 4.799 * height;
  const a = 5.677 * age;
  const bmrOut = 88.362 + w + h - a;
  const BMR = parseFloat(bmrOut);
  if (Number.isNaN(BMR)) {
    return "";
  }
  const output = Math.round(BMR * 100) / 100;

  return output;
};

export const resultHandlerBmiFemale = (weight, height, age) => {
  if (age === "") {
    return 0;
  }
  const w = 9.247 * weight;
  const h = 3.098 * height;
  const a = 4.33 * age;
  const bmrOut = 447.593 + w + h - a;
  const BMR = parseFloat(bmrOut);
  if (Number.isNaN(BMR)) {
    return "";
  }
  const output = Math.round(BMR * 100) / 100;

  return output;
  //447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
};

export const resultHandleBmi = (weight, height) => {
  if (height === "") {
    return 0;
  }
  const w = weight * 10000;
  const h = height * height;
  const finalBMI = w / h;
  if (Number.isNaN(finalBMI)) {
    return "";
  }
  const output = Math.round(finalBMI * 100) / 100;
  return output;
};
