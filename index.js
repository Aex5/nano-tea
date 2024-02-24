// Fungsi untuk mengonversi suhu dari Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Fungsi untuk mengonversi suhu dari Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Ekspor fungsi-fungsi agar dapat diakses oleh pengguna lain
module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius
};
