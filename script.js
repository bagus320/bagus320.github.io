function hitung() {
  const dl = document.getElementById("dl").value;
  const dm = document.getElementById("dm").value;
  const unitCount = document.getElementById("unitCount").value;
  let factor = document.getElementById("factor").value;
  let result;

  if (unitCount == "under8") {
  result = (factor * dm) / (parseInt(factor) + 12);
  } else if (unitCount == "above8") {
    result = (factor * dm) / 20;
  } else if (unitCount == "weight") {
    result = (factor * dm) / 70;
  } else if (unitCount == "percent") {
    result = (dl * 100) / dm;
  }
  else {
    result = "000"
  }
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = result.toFixed(2);
}
