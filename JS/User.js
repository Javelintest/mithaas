function toggleDropdown() {
    document.getElementById("dropdownMenu-a").classList.toggle("active");
}

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("dropdownMenu-a");
    let profileContainer = document.querySelector(".profile-container-a");

    if (!profileContainer.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});