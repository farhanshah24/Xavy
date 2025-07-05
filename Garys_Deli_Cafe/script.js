window.addEventListener("load", function () {
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500); // matches the CSS transition
  }, 0); // No artificial delay
});

const foodImages = [
  "assets/gallery1.jpg",
  "assets/gallery2.jpg",
  "assets/gallery3.jpg",
  "assets/gallery4.jpg",
  "assets/gallery5.jpg",
  "assets/gallery6.jpg",
  "assets/gallery7.jpg",
  "assets/gallery8.jpg",
  "assets/gallery9.jpg",
  "assets/gallery10.jpg",
  "assets/gallery11.jpg",
  "assets/gallery12.jpg",
];

// Create the masonry gallery
function createGallery() {
  const gallery = document.getElementById("gallery");

  foodImages.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item loading";

    const img = document.createElement("img");
    img.src = image;
    img.alt = `Delicious dish ${index + 1}`;
    img.loading = "lazy";

    galleryItem.appendChild(img);

    // Remove loading animation when image loads
    img.onload = () => {
      galleryItem.classList.remove("loading");
    };

    gallery.appendChild(galleryItem);
  });
}

// Initialize gallery when page loads
document.addEventListener("DOMContentLoaded", createGallery);

// Add scroll reveal animation
const observerOptions = {
  root: null,
  rootMargin: "50px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe gallery items after creation
setTimeout(() => {
  document.querySelectorAll(".gallery-item").forEach((item) => {
    observer.observe(item);
  });
}, 100);

function toggleNav() {
  document.querySelector(".nav-links").classList.toggle("show");
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav-links").classList.remove("show");
  });
});

const navbar = document.querySelector(".navbar"); // Adjust selector as needed
document.documentElement.style.setProperty(
  "--navbar-height",
  navbar.offsetHeight + "px"
);
