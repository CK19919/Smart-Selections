// Get modal elements
const modal = document.getElementById("locationModal");
const openModalBtn = document.getElementById("openLocationModal");
const closeModalBtn = document.querySelector(".close");

// Open modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when clicking the close button
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});