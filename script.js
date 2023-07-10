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
    result = result.toFixed(2) + " Mg";
  } else if (unitCount == "above8") {
    result = (factor * dm) / 20;
    result = result.toFixed(2) + " Mg";
  } else if (unitCount == "weight") {
    result = (factor * dm) / 70;
    result = result.toFixed(2) + " Mg";
  } else if (unitCount == "percent") {
    result = (dl * 100) / dm;
    result = result.toFixed(2) + " %";
    fixedResult = parseFloat(result.replace("%", ""));
    if (fixedResult > 100) {
      resultStatement = "Overdosis Cokk!!";
    } else if (fixedResult >= 80 && fixedResult <= 100) {
      resultStatement = "Bolehlah";
    } else if (fixedResult < 79) {
      resultStatement = "Kurang Dosis!!";
    } else {
      resultStatement = "kosong njirr";
    }
    const resultStatementOutput = document.getElementById("result-statement");
    resultStatementOutput.innerText = resultStatement;
  } else if (unitCount == "month") {
    result = (factor * dm) / 150;
    result = result.toFixed(2) + " Mg";
  } else {
    result = "000";
  }
  fixedResult = parseFloat(result.replace("%", ""));
  if (fixedResult >= 0) {
    resultElement.innerText = result;
  } else {
    resultElement.innerText = "Diisi dongg!!";
  }
  const statementOutput = document.getElementById("result-statement");
  if (unitCount != "percent") {
    statementOutput.style.display = "none";
  } else {
    statementOutput.style.display = "block";
  }
}

function toggleDarkTheme() {
  let icon = document.getElementById("sun-icon");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/moon.png";
  } else {
    icon.src = "assets/sun.png";
  }
}
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme:dark)").matches
) {
  toggleDarkTheme();
}
