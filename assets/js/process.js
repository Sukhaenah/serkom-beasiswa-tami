/**
 * Filename: process.js
 * Description: Mengelola logika frontend untuk formulir pendaftaran beasiswa.
 * Author: Bunga
 * Version: 1.1
 * Date: 2-10-2024
 */

/**
 * Fungsi untuk menghasilkan IPK secara acak dan mengatur status form.
 */
function generateIPK() {
    var semester = document.getElementById("semester").value;
    console.log(semester); 
    var ipkMap = {
        "1": 2.82,
        "2": 3.44,
        "3": 2.35,
        "4": 3.82,
        "5": 3.67,
        "6": 3.23,
        "7": 3.48,
        "8": 3.92

    };

    var input = document.getElementById("randomIPK");
    var hiddenInput = document.getElementById("randomIPKInput");
    var jenisBeasiswa = document.getElementById("jenisBeasiswa");
    var inputFile = document.getElementById("inputFile");
    var submitForm = document.getElementById("submitForm");

    var ipkValue = ipkMap[semester] || 0; 
    input.value = ipkValue.toFixed(2);
    hiddenInput.value = ipkValue.toFixed(2);
    input.disabled = true;

    if (ipkValue < 3.0) {
        jenisBeasiswa.disabled = true;
        inputFile.disabled = true;
        submitForm.disabled = true;
        alert('IPK Anda di bawah 3.0, Anda tidak dapat melanjutkan pendaftaran.');
    } else {
        jenisBeasiswa.disabled = false;
        inputFile.disabled = false;
        submitForm.disabled = false;
    }
}


// Form validation
document.getElementById('formDaftar').addEventListener('submit', function(event) {
    var isValid = true;
    var inputs = this.querySelectorAll('input, select');

    inputs.forEach(function(input) {
        if (input.required && !input.value) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (!isValid) {
        event.preventDefault(); 
        alert('Harap lengkapi semua kolom yang diperlukan.');
    }
});

// Input nomor telepon hanya menerima angka
document.getElementById('inputNumber').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});