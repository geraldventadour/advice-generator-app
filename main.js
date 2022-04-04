const generateAdvice = async () => {
  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data.slip;
  };

  const advice = await getAdvice();

  const render = ({ id, advice }) => {
    const adviceID = document.querySelector(".advice-id");
    const adviceText = document.querySelector(".advice__text");
    adviceID.textContent = id;
    adviceText.textContent = advice;
  };

  render(advice);
};

generateAdvice();

const dice = document.querySelector(".advice__button");

dice.addEventListener("click", generateAdvice);
