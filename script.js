// menyimpan/caching element untuk function autoHide
const mainBody = document.body;
const dlLabel = document.querySelector("#dosisLazim");
const dlInput = document.querySelector("#dl");
const dmInput = document.querySelector("#dm");
const dmLabel = document.querySelector("#dmLabel");
const selectorLabel = document.querySelector("#option-label");
const unitLabel = document.querySelector("#unitLabel");
const unitInput = document.querySelector("#factor");
const selector = document.querySelector("#unitCount");
const button = document.querySelector("#operation");
const resultStatementOutput = document.querySelector("#result-statement");
const resultElement = document.querySelector("#result");

//deklarasi object untuk label yang akan ditampilkan
const labelMap = {
  under8: {
    dmLabel: "Dosis Maksimum Dewasa (Farmakope)",
    unitLabel: "Umur Anak (Dibawah 8 Tahun)",
  },
  above8: {
    dmLabel: "Dosis Maksimum Dewasa (Farmakope)",
    unitLabel: "Umur Anak (Diatas 8 Tahun)",
  },
  weight: {
    dmLabel: "Dosis Maksimum Dewasa (Farmakope)",
    unitLabel: "Berat Badan Anak",
  },
  month: {
    dmLabel: "Dosis Maksimum Dewasa (Farmakope)",
    unitLabel: "Umur Anak (Dalam Bulan)",
  },
  percent: {
    dmLabel: "Dosis Maksimum",
    unitLabel: "", // Empty string for "percent" case
  },
};

// function autoHide yang dipanggil ketika halaman web sudah termuat
autoHide();
// function autoHide yang dipanggil ketika nilai pada selector berubah
selector.addEventListener("change", autoHide);

function autoHide() {
  // mengambil value selector
  const selector = document.querySelector("#unitCount").value;

  switch (selector) {
    case "under8":
    case "above8":
    case "weight":
    case "month":
      //menambahkan dan menghapus element menggunakan css class
      unitLabel.classList.remove("hide");
      unitInput.classList.remove("hide");
      dlLabel.classList.add("hide");
      dlInput.classList.add("hide");
      dmLabel.classList.remove("hide");
      dmInput.classList.remove("hide");
      button.classList.remove("hide");

      //mengubah isi text pada label menggunakan object yang dideklarasikan diatas
      unitLabel.innerHTML = labelMap[selector].unitLabel;
      dmLabel.innerHTML = labelMap[selector].dmLabel;
      if (selector == "month") {
        unitInput.setAttribute("placeholder", "Jumlah umur dalam bulan");
      }
      break;
    case "percent":
      //menambahkan dan menghapus element menggunakan css class
      unitInput.classList.add("hide");
      dlLabel.classList.remove("hide");
      dlInput.classList.remove("hide");
      dmLabel.classList.remove("hide");
      dmInput.classList.remove("hide");
      button.classList.remove("hide");

      //mengubah isi text pada label menggunakan object properties yang dideklarasikan diatas
      unitLabel.innerHTML = labelMap[selector].unitLabel;
      dmLabel.innerHTML = labelMap[selector].dmLabel;
      break;

    default:
      //menyembunyikan semua element input dan label
      unitLabel.classList.add("hide");
      unitInput.classList.add("hide");
      dlLabel.classList.add("hide");
      dlInput.classList.add("hide");
      dmLabel.classList.add("hide");
      dmInput.classList.add("hide");
      button.classList.add("hide");
  }
}
// inisialisasi variable yang akan digunakan dibawah
let result;
let resultStatement;
let fixedResult;

//mengambil element div dari html
const resExp = document.querySelector(".res-exp");

//object yang akan digunakan untuk menambah text pada element resExp
const labelBuilder = {
  under8: (factor) =>
    `Dosis Maksimum Anak Dengan Umur ${factor} Tahun Adalah: `,
  above8: (factor) =>
    `Dosis Maksimum Anak Dengan Umur ${factor} Tahun Adalah: `,
  weight: (factor) => `Dosis Maksimum Anak Dengan Berat ${factor} Kg Adalah: `,
  month: (factor) => `Dosis Maksimum Anak Dengan Umur ${factor} Bulan Adalah: `,
  percent: () => "Persentase dosis adalah: ",
};

//fungsi utama yang akan menghitung hasil dari input,fungsi dipanggil oleh tombol dengan id operation menggunakan onclick event handler

const hitung = () => {
  //mengambil input dari semua input box
  const dl = parseFloat(document.querySelector("#dl").value);
  const dm = parseFloat(document.querySelector("#dm").value);
  const unitCount = document.querySelector("#unitCount").value;
  const factor = parseFloat(document.querySelector("#factor").value);

  switch (unitCount) {
    //melakukan kalkulasi dengan case yang diambil dari value pada setiap input
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

      //menambah string pada variable resultStatement menggunakan kondisional berdasarkan hasil dari kalkulasi diatas
      resultStatementOutput.innerText =
        result > 100
          ? "Overdosis Cokk!!"
          : result >= 80 && result <= 100
          ? "Bolehlah"
          : result < 79
          ? "Kurang Dosis!!"
          : "kosong njirr";

      break;

    case "month":
      result = (factor * dm) / 150;
      break;

    default:
      result = "0";
  }

  //arrow function yang memanggil expLabelMaker object builder untuk menggabungkan string
  const expLabelMaker = (unitCount, factor) => labelBuilder[unitCount](factor);
  const expResult = expLabelMaker(unitCount, factor);

  //menambahkan string dari resExp ke element expResult
  // resExp.innerHTML = isNaN(factor)
  //   ? resExp.classList.add("hide")
  //   : (resExp.classList.remove("hide"), expResult);

  resExp.innerHTML = isNaN(factor)
    ? resExp.classList.add("hide")
    : factor == "percent"
    ? (resExp.classList.remove("hide"), expResult)
    : (resExp.classList.remove("hide"), expResult);

  //ternary operator untuk menambahkan unit satuan pada element result

  result =
    unitCount != "percent"
      ? result.toFixed(2) + " Mg"
      : result.toFixed(2) + " %";

  //menghilangkan string dan mengubah variable result menjadi integer
  fixedResult = parseFloat(result.replace("%", ""));
  //mengecek value dari variable result
  resultElement.classList.remove("hide");
  resultElement.innerHTML = fixedResult > 0 ? result : "Diisi yang benerr!!!";

  //menampilkan statement dari hasil kalkulasi persen
  resultStatementOutput.classList.remove("hide");
};
//event listener untuk button yang akan menjalankan fungsi utama
button.addEventListener("click", hitung);

//menyembunyikan string statement saat mode perhitungan diubah
const hideState = () => {
  resExp.classList.add("hide");
  resultElement.classList.add("hide");
  resultStatementOutput.classList.add("hide");
};
selector.addEventListener("change", hideState);

//caching element untuk function toggleDarkTheme
let icon = document.querySelector("#sun-icon");
const body = document.body.classList;
toggleDarkTheme();
function toggleDarkTheme() {
  //menambahkan class "dark-theme" pada element body
  body.toggle("dark-theme");

  //akan merubah clickable icon sesuai theme yang dipilih
  if (body.contains("dark-theme")) {
    icon.src = "assets/moon.png";
  } else {
    icon.src = "assets/sun_drawing.png";
  }
}
