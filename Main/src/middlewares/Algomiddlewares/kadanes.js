function getRandomInt(min = -25, max = 51) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function generateRandomArrayFun(arrayLength) {
  const generatedRandomArray = [];
  for (let index = 0; index < arrayLength; index++) {
    const number = getRandomInt();
    generatedRandomArray.push(number);
  }
  return generatedRandomArray;
}

export const createArray = (req, res, next) => {
  const { arrayLength } = req.params;
  // console.log(arrayLength, typeof arrayLength);
  const randomArray = generateRandomArrayFun(Number(arrayLength));
  // console.log(randomArray);

  req.generatedRandomArray = randomArray;
  next();
};
