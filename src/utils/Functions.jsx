export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const convertDecimetersToFeet = (decimeters) => {
  const feetPerDecimeter = 0.32808398950131;
  const feet = decimeters * feetPerDecimeter;
  const feetInt = Math.floor(feet);
  const inches = Math.round((feet - feetInt) * 12);
  return `${feetInt}' ${inches}"`;
};

export const convertKilogramsToPounds = (kilograms) => {
  const poundsPerKilogram = 2.20462;
  const pounds = kilograms * poundsPerKilogram;
  return pounds.toFixed(2);
};

export const shuffle = (unshuffled) => {
  const shuffled = unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
};
