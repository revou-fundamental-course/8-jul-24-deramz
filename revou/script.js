// script.js

function hitungBMI() {
  var beratBadan = document.getElementById("berat-badan").value;
  var tinggiBadan = document.getElementById("tinggi-badan").value;

  var tinggiMeter = tinggiBadan / 100;
  var bmi = beratBadan / (tinggiMeter * tinggiMeter);

  document.getElementById("bmi-result").innerHTML = "BMI Anda: " + bmi.toFixed(2);

  if (bmi < 18.5) {
    document.getElementById("bmi-category").innerHTML = "Kategori: Underweight (Kurus)";
    document.getElementById("bmi-advice").innerHTML = "";
    document.getElementById("bmi-risk").innerHTML = "";
  } else if (bmi >= 18.5 && bmi < 25) {
    document.getElementById("bmi-category").innerHTML = "Kategori: Normal";
    document.getElementById("bmi-advice").innerHTML = "";
    document.getElementById("bmi-risk").innerHTML = "";
  } else if (bmi >= 25 && bmi < 30) {
    document.getElementById("bmi-category").innerHTML = "Kategori: Overweight (Berat Badan Berlebih)";
    document.getElementById("bmi-advice").innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
    document.getElementById("bmi-risk").innerHTML = "Resiko kesehatan: Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis";
  } else {
    document.getElementById("bmi-category").innerHTML = "Kategori: Obese (Kegemukan)";
    document.getElementById("bmi-advice").innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
    document.getElementById("bmi-risk").innerHTML = "Resiko kesehatan: Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis";
  }
}

function konsultasiGizi() {
  alert("Konsultasi Ahli Gizi");
}

function konsultasiDokter() {
  alert("Konsultasi Dokter");
}