// Get the button and dropdown content
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle the dropdown menu
dropbtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
}

//SUB MENU JS 




// Get all links and content sections
const links = document.querySelectorAll('.dropdown-content a');
const contents = document.querySelectorAll('.content');

// Add event listener to each link
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active class from all content sections
        contents.forEach(content => content.classList.remove('active'));

        // Add active class to the corresponding content section
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');

        // Close the dropdown
        dropdownContent.classList.remove('show');
    });
});




    // Function to refresh the page
    function refreshPage() {
        location.reload();
    }

// here is the code of submenu 

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});