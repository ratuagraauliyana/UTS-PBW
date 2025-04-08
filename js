// Event listener untuk tombol "Back to Home"
document.querySelectorAll(".back-button .button").forEach(button => {
    button.addEventListener("click", function() {
        // Memberikan alert sederhana
        alert("Kembali ke halaman Home!");
    });
});
