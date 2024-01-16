const zodiac = document.getElementById("zodiac");
const changeColor = document.querySelector(".box");

const changeBackground = () => {
  // console.log(zodiac.value);
  switch (zodiac.value.toLowerCase()) {
    case "aries":
      changeColor.style.backgroundColor = "Red";
      break;
    case "taurus":
      changeColor.style.backgroundColor = "Green";
      break;
    case "gemini":
      changeColor.style.backgroundColor = "Yellow";
      break;
    case "cancer":
      changeColor.style.backgroundColor = "Silver";
      break;
    case "leo":
      changeColor.style.backgroundColor = "Gold";
      break;
    case "virgo":
      changeColor.style.backgroundColor = "Beige";
      break;
    case "libra":
      changeColor.style.backgroundColor = "Pink";
      break;
    case "scorpio":
      changeColor.style.backgroundColor = "Maroon";
      break;
    case "sagittarius":
      changeColor.style.backgroundColor = "Purple";
      break;
    case "capricorn":
      changeColor.style.backgroundColor = "Brown";
      break;
    case "aquarius":
      changeColor.style.backgroundColor = "Blue";
      break;
    case "pisces":
      changeColorstyle.backgroundColor = "Turquoise";
      break;
    default:
      changeColor.style.backgroundColor = "white";
      break;
  }
};
