function hitung() {
  const dl = document.getElementById("dl").value;
  const dm = document.getElementById("dm").value;
  const unitCount = document.getElementById("unitCount").value;
  let factor = document.getElementById("factor").value;
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
  } else if (unitCount == "month") {
    result = (factor * dm) / 150;
    result = result.toFixed(2) + " Mg";
  } else {
    result = "Jangan dikosongin lahh";
  }
  const resultElement = document.getElementById("result");
  resultElement.innerText = result;
  const resultStatementOutput = document.getElementById("result-statement");
  resultStatementOutput.innerText = resultStatement;
}
// Fungsi Untuk Menjalankan Mode Gelap
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.checked = body.classList.contains("dark-mode");
}
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", toggleDarkMode);

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  toggleDarkMode();
}
