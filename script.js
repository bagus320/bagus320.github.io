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
    icon.src = "assets/sun.png";
  }
}
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme:dark)").matches
) {
  toggleDarkTheme();
}
var favicon_images = [
  "anim/frame (1).gif",
  "anim/frame (2).gif",
  "anim/frame (3).gif",
  "anim/frame (4).gif",
  "anim/frame (5).gif",
  "anim/frame (6).gif",
  "anim/frame (7).gif",
  "anim/frame (8).gif",
  "anim/frame (9).gif",
  "anim/frame (10).gif",
  "anim/frame (11).gif",
  "anim/frame (12).gif",
  "anim/frame (13).gif",

  "anim/frame (14).gif",
  "anim/frame (15).gif",
  "anim/frame (16).gif",
  "anim/frame (17).gif",
  "anim/frame (18).gif",
  "anim/frame (19).gif",
  "anim/frame (20).gif",
  "anim/frame (21).gif",
  "anim/frame (22).gif",
  "anim/frame (23).gif",
  "anim/frame (24).gif",
  "anim/frame (26).gif",
  "anim/frame (27).gif",
  "anim/frame (28).gif",
  "anim/frame (29).gif",
  "anim/frame (30).gif",
  "anim/frame (31).gif",
  "anim/frame (32).gif",
  "anim/frame (33).gif",
  "anim/frame (34).gif",
  "anim/frame (35).gif",
  "anim/frame (36).gif",
  "anim/frame (37).gif",
  "anim/frame (38).gif",
  "anim/frame (39).gif",
  "anim/frame (40).gif",
  "anim/frame (41).gif",
  "anim/frame (42).gif",
  "anim/frame (43).gif",
  "anim/frame (44).gif",
  "anim/frame (45).gif",
  "anim/frame (46).gif",
  "anim/frame (47).gif",
  "anim/frame (48).gif",
  "anim/frame (49).gif",
];

image_counter = 0;

setInterval(function () {
  // remove current favicon
  if (document.querySelector("link[rel='icon']") !== null)
    document.querySelector("link[rel='icon']").remove();
  if (document.querySelector("link[rel='shortcut icon']") !== null)
    document.querySelector("link[rel='shortcut icon']").remove();

  // add new favicon image
  document
    .querySelector("head")
    .insertAdjacentHTML(
      "beforeend",
      '<link rel="icon" href="' +
        favicon_images[image_counter] +
        '" type="image/gif">'
    );

  // If last image then goto first image
  // Else go to next image
  if (image_counter == favicon_images.length - 1) image_counter = 0;
  else image_counter++;
}, 55);
