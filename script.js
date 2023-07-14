function hitung() {
  const dl = document.getElementById("dl").value;
  const dm = document.getElementById("dm").value;
  const unitCount = document.getElementById("unitCount").value;
  let factor = document.getElementById("factor").value;
  const resultElement = document.getElementById("result");

  let result;
  let resultStatement;
  let fixedResult;

  if (unitCount == "under8") {
    result = (factor * dm) / (parseInt(factor) + 12);
  } else if (unitCount == "above8") {
    result = (factor * dm) / 20;
  } else if (unitCount == "weight") {
    result = (factor * dm) / 70;
  } else if (unitCount == "percent") {
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
  } else if (unitCount == "month") {
    result = (factor * dm) / 150;
  } else {
    result = "0";
  }
  if (
    unitCount == "under8" ||
    unitCount == "above8" ||
    unitCount == "weight" ||
    unitCount == "month"
  ) {
    result = result.toFixed(2) + " Mg";
  } else {
    result = result.toFixed(2) + " %";
  }
  fixedResult = parseFloat(result.replace("%", ""));
  if (fixedResult > 0) {
    resultElement.innerText = result;
  } else {
    resultElement.innerText = "Diisi yang benerr!!";
  }
  const resultStatementOutput = document.getElementById("result-statement");
  resultStatementOutput.innerText = resultStatement;
  if (unitCount != "percent") {
    resultStatementOutput.style.display = "none";
  } else {
    resultStatementOutput.style.display = "block";
  }
}

function toggleDarkTheme() {
  let icon = document.getElementById("sun-icon");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/moon.png";
  } else {
    icon.src = "assets/sun_drawing.png";
  }
}
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme:dark)").matches
) {
  toggleDarkTheme();
}
