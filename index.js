document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page
  
    const selectedPower = document.getElementById("superpower").value;
    const result = superpowers[selectedPower];
  
    const img = document.getElementById("power-image");
    const desc = document.getElementById("power-description");
    const resultContainer = document.querySelector(".result-container");

    if (result) {
        img.src = result.image;
        img.alt = selectedPower;
        desc.textContent = result.description;
        resultContainer.style.display = "block";
    }
});

// Close functionality
document.getElementById("close-btn").addEventListener("click", function () {
    document.querySelector(".result-container").style.display = "none";
});
