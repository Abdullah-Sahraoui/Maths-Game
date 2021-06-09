const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateQuiz = () => {
  const operationsList = ["x", "÷", "+", "-"];

  const n1 = getRndInteger(-9, 9);
  const n2 = getRndInteger(-9, 9);
  const operation = operationsList[getRndInteger(0, operationsList.length)];

  return {n1, n2, operation};
}

const question = generateQuiz();

export default question;