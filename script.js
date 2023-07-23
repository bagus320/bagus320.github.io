const dlLabel = document.querySelector("#dosisLazim");
const dlInput = document.querySelector("#dl");
const dmInput = document.querySelector("#dm");
const dmLabel = document.querySelector("#dmLabel");
const selectorLabel = document.querySelector("#option-label");
const unitLabel = document.querySelector("#unitLabel");
const unitInput = document.querySelector("#factor");
const button = document.querySelector("#operation");

function autoHide() {
  const selector = document.querySelector("#unitCount").value;
  let show = `display: inline-block;
  text-align: center;`;
  let hide = `display: none;`;

  switch (selector) {
    case "under8":
      unitLabel.style = show;
      unitInput.style = show;
      unitLabel.innerHTML = "Umur Anak(Dibawah 8 Tahun)";
      dmLabel.innerHTML = "Dosis Maksimum Dewasa (Farmakope)";
      break;
    case "above8":
      unitLabel.style = show;
      unitInput.style = show;
      unitLabel.innerHTML = "Umur Anak(Diatas 8 Tahun)";
      dmLabel.innerHTML = "Dosis Maksimum Dewasa (Farmakope)";
      break;
    case "weight":
      unitLabel.style = show;
      unitInput.style = show;
      unitLabel.innerHTML = "Berat Badan Anak";
      dmLabel.innerHTML = "Dosis Maksimum Dewasa (Farmakope)";
      break;
    case "month":
      unitLabel.style = show;
      unitInput.style = show;
      unitLabel.innerHTML = "Umur Anak(Dalam Bulan)";
      dmLabel.innerHTML = "Dosis Maksimum Dewasa (Farmakope)";
      break;

    case "percent":
      unitLabel.style = hide;
      unitInput.style = hide;
      dmLabel.innerHTML = "Dosis Maksimum";
      break;

    default:
      break;
  }
}

let result;
let resultStatement;
let fixedResult;
function hitung() {
  const dl = parseFloat(document.querySelector("#dl").value);
  const dm = parseFloat(document.querySelector("#dm").value);
  const unitCount = document.querySelector("#unitCount").value;
  const factor = parseFloat(document.querySelector("#factor").value);
  const resultElement = document.querySelector("#result");
  switch (unitCount) {
    case "under8":
      result = (factor * dm) / (parseInt(factor) + 12);
      break;

    case "above8":
      result = (factor * dm) / 20;
      break;

    case "weight":
      result = (factor * dm) / 70;
      break;

    case "percent":
      result = (dl * 100) / dm;
      if (result > 100) {
        resultStatement = "Overdosis Cokk!!";
      } else if (result >= 80 && result <= 100) {
        resultStatement = "Bolehlah";
      } else if (result < 79) {
        resultStatement = "Kurang Dosis!!";
      } else {
        resultStatement = "kosong njirr";
      }
      break;

    case "month":
      result = (factor * dm) / 150;
      break;

    default:
      result = "0";
  }

  switch (unitCount) {
    case "under8":
    case "above8":
    case "weight":
    case "month":
      result = result.toFixed(2) + " Mg";
      break;
    default:
      result = result.toFixed(2) + " %";
  }

  fixedResult = parseFloat(result.replace("%", ""));
  if (fixedResult > 0) {
    resultElement.innerText = result;
  } else {
    resultElement.innerText = "Diisi yang benerr!!";
  }
  const resultStatementOutput = document.querySelector("#result-statement");
  resultStatementOutput.innerText = resultStatement;
  if (unitCount != "percent") {
    resultStatementOutput.style.display = "none";
  } else {
    resultStatementOutput.style.display = "block";
  }
}

let icon = document.getElementById("sun-icon");
const body = document.body.classList;
const imageCache = {};

function toggleDarkTheme() {
  body.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    if (imageCache["moon"]) {
      icon.src = imageCache["moon"];
    } else {
      const moonImage = new Image();
      moonImage.src = "assets/moon.png";
      imageCache["moon"] = moonImage.src;
      icon.src = moonImage.src;
    }
  } else {
    if (imageCache["sun"]) {
      icon.src = imageCache["sun"];
    } else {
      const sunImage = new Image();
      sunImage.src = "assets/sun_drawing.png";
      imageCache["sun"] = sunImage.src;
      icon.src = sunImage.src;
    }
  }
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme:dark)").matches
) {
  toggleDarkTheme();
}
