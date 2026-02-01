import logic from "../Algorithms/Kadanes/kadanes.js";

export const kadanesMaxArray = (req, res) => {
  const array = req.generatedRandomArray;
  console.log(array);

  const resultObj = logic(array);
  // console.log(resultObj);

  res.status(200).json({
    message: "Success",
    array: String(array),
    resultObj,
  });
};
