document.addEventListener("DOMContentLoaded", function() {
    function convertToFahrenheit() {
        let celsius = document.getElementById("celsius").value;
        if (celsius === "") {
            alert("Masukkan suhu dalam Celsius!");
            return;
        }
        let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
        document.getElementById("fahrenheitOutput").innerHTML = `${fahrenheit.toFixed(2)} °F`;
        document.getElementById("calculation").innerHTML = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    }

    function reverseConversion() {
        let fahrenheit = document.getElementById("celsius").value;
        if (fahrenheit === "") {
            alert("Masukkan suhu dalam Fahrenheit!");
            return;
        }
        let celsius = (parseFloat(fahrenheit) - 32) * 5/9;
        document.getElementById("fahrenheitOutput").innerHTML = `${celsius.toFixed(2)} °C`;
        document.getElementById("calculation").innerHTML = `(${fahrenheit}°F - 32) × (5/9) = ${celsius.toFixed(2)}°C`;
    }

    function resetForm() {
        document.getElementById("celsius").value = "";
        document.getElementById("fahrenheitOutput").innerHTML = "";
        document.getElementById("calculation").innerHTML = "";
    }

    // Assign functions to buttons
    window.convertToFahrenheit = convertToFahrenheit;
    window.reverseConversion = reverseConversion;
    window.resetForm = resetForm;
});
