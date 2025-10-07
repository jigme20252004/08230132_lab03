document.addEventListener("DOMContentLoaded", function () {
  const userName = "Hope you would enjoy!"
  let greetingMessage;

  // Get current local time (hour and AM/PM)
  const now = new Date();
  let hour = now.getHours(); // Always returns 0–23

  // ====== GREETING LOGIC ======
  if (hour >= 5 && hour < 12) {
    greetingMessage = `Good Morning, ${userName}! `;
  } else if (hour >= 12 && hour < 18) {
    greetingMessage = `Good Afternoon, ${userName}! `;
  } else {
    greetingMessage = `Good Evening, ${userName}! `;
  }

  // ====== DISPLAY GREETING ======
  const greetingDiv = document.createElement("div");
  greetingDiv.textContent = greetingMessage;
  greetingDiv.classList.add("greeting-banner");

  const mainSection = document.querySelector("main");
  if (mainSection) {
    mainSection.prepend(greetingDiv);
  }

  // ===== DARK MODE =====
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = " Dark Mode";
  toggleBtn.classList.add("toggle-btn");
  document.querySelector(".sidebar").appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? " Light Mode"
      : "Dark Mode";
  });

  // ===== PROJECT HIGHLIGHT =====
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => card.classList.add("highlight"));
    card.addEventListener("mouseleave", () => card.classList.remove("highlight"));
  });

  // ===== SKILL ALERT =====
  document.querySelectorAll(".skill p").forEach(skill => {
    skill.addEventListener("click", () => alert(`You clicked on ${skill.textContent}!`));
  });

  // ===== CONTACT ALERT =====
  document.querySelectorAll(".contact-card a").forEach(link => {
    link.addEventListener("click", e => {
      alert("Opening " + link.textContent + "...");
    });
  });

  // ===== IMAGE OVERLAY =====
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  const overlayImg = document.createElement("img");
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  document.querySelectorAll(".timeline-item img").forEach(img => {
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => overlay.style.display = "none");
});

document.addEventListener("DOMContentLoaded", function () {
  // ===== 1. Typing Animation for Name =====
 const nameElement = document.querySelector(".sidebar h1");
const fullName = "Jigme Wangchuk";
let index = 0;
let forward = true; // true = typing, false = deleting

function typeName() {
  if (forward) {
    // Typing forward
    nameElement.textContent = fullName.slice(0, index);
    index++;
    if (index > fullName.length) {
      forward = false; // start deleting after finished
      setTimeout(typeName, 1000); // pause at end
      return;
    }
  } else {
    // Deleting
    nameElement.textContent = fullName.slice(0, index);
    index--;
    if (index < 0) {
      forward = true; // start typing again
      setTimeout(typeName,500);// pause before typing
      return;
    }
  }
  setTimeout(typeName, 350); // speed of typing/deleting
}

typeName(); // start animation


  // ===== 2. Image Zoom Preview (Modal) =====
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  const overlayImg = document.createElement("img");
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  document.querySelectorAll(".project-card img").forEach(img => {
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  // ===== 3. Active Section Highlight on Scroll =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

