




// Function to toggle filter dropdown and shift results down
function toggleFilters() {
    const filterSection = document.getElementById("filter-section");
    filterSection.classList.toggle("show");

    // Change button text when toggled on and off 
    const button = document.querySelector(".filter-toggle");
    button.textContent = filterSection.classList.contains("show") ? "Filters ▲" : "Filters ▼"; 
}