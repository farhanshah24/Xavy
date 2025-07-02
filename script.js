let selectedProject = null;

function selectStyle(projectElement) {
  // Remove previous selection
  if (selectedProject) {
    selectedProject.classList.remove("selected-style");
  }

  // Add selection to current project
  projectElement.classList.add("selected-style");
  selectedProject = projectElement;

  // Smooth scroll to CTA section
  setTimeout(() => {
    document.querySelector(".cta-section").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 300);
}

// Enhanced interactions
document.addEventListener("DOMContentLoaded", function () {
  // Add parallax effect to floating elements
  const floatingElements = document.querySelectorAll(".floating-circle");

  window.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floatingElements.forEach((element, index) => {
      const speed = (index + 1) * 0.3;
      const x = (mouseX - 0.5) * speed * 30;
      const y = (mouseY - 0.5) * speed * 30;

      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, observerOptions);

  // Observe project showcases
  document.querySelectorAll(".project-showcase").forEach((showcase) => {
    observer.observe(showcase);
  });
});
