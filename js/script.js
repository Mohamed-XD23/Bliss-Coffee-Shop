// Dark Mode Toggle
const toggle = document.querySelector(".toggle");
const body = document.body;
const main = document.querySelector(".main");

// Check if dark mode preference is saved in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  updateToggleIcon();
}

// Toggle dark mode on click
toggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  // Save preference to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }

  updateToggleIcon();
});

// Update toggle icon based on dark mode state
function updateToggleIcon() {
  const icon = toggle.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

// Scroll to top button functionality
const scrollbtn = document.getElementById("scrollbtn");

window.onscroll = () => {
  if (scrollY > +240) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
};

scrollbtn.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// Navbar active link toggle
const navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove("active"));
    // Add active class to the clicked link
    this.classList.add("active");
  });
});

// Open mobile nav
const bars = document.querySelector(".bars");
const navMobile = document.querySelector(".navmobile");
bars.onclick = () => {
  navMobile.style.right = "0";
  bars.style.display = "none";
  scrollbtn.style.display = "none";
};

// Close mobile nav
const closeNav = document.querySelector(".closenav");
closeNav.onclick = () => {
  navMobile.style.right = "-100%";
  bars.style.display = "block";
  scrollbtn.style.display = "block";
};

// Close mobile nav on link click
const navMobileLinks = document.querySelectorAll(".navmobile ul li a");
navMobileLinks.forEach((link) => {
  link.onclick = () => {
    navMobile.style.right = "-100%";
    if (window.innerWidth < 700) {
      bars.style.display = "block";
    }
    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove("active"));
    navMobileLinks.forEach((l) => l.classList.remove("active"));
    // Add active class to the clicked link
    link.classList.add("active");
  };
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 700) {
    bars.style.display = "none";
    navMobile.style.right = "-100%";
  } else {
    if (navMobile.style.right !== "0px") {
      bars.style.display = "block";
    }
  }
});
