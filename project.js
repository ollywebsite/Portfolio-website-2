// Select all toggle buttons
// Select all toggle buttons
const toggleButtons = document.querySelectorAll(
  ".toggle-btn1, .toggle-btn2, .toggle-btn3"
);

// Loop through each button and add a click event listener
toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Determine which paragraph to toggle based on the button clicked

    let loremParagraph;
    if (this.classList.contains("toggle-btn1")) {
      loremParagraph =
        this.closest(".secondpageright").querySelector(".lorem1");
    } else if (this.classList.contains("toggle-btn2")) {
      loremParagraph =
        this.closest(".secondpageright").querySelector(".lorem2");
    } else if (this.classList.contains("toggle-btn3")) {
      loremParagraph =
        this.closest(".secondpageright").querySelector(".lorem3");
    }

    // Toggle the 'hidden' class
    loremParagraph.classList.toggle("hidden");

    // Optionally, animate the opacity
    if (loremParagraph.classList.contains("hidden")) {
      loremParagraph.style.opacity = "0"; // Fade out
    } else {
      loremParagraph.style.opacity = "1"; // Fade in
    }
  });
});

const testimonials = [
  {
    image: "./images/mark.jpeg",
    text: "Sonali helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
    author: "Mark Zuckerberg",
    role: "Founder Facebook",
  },
  {
    image: "./images/elon.jpg",
    text: "This is another testimonial text for user feedback.",
    author: "../another-author.png",
    role: "../Another Role.png",
  },
  {
    image: "./images/bill.jpg",
    text: "Here’s a third testimonial to showcase our work.",
    author: "../yet-another-author.png",
    role: "../Yet Another Role.png",
  },
];

let currentIndex = 0;

const testimonialImage = document
  .getElementById("testimonialImage")
  .querySelector("img");
const testimonialText = document
  .getElementById("testimonialText")
  .querySelector("img");
const testimonialAuthor = document
  .getElementById("testimonialAuthor")
  .querySelector("img");
const testimonialRole = document
  .getElementById("testimonialRole")
  .querySelector("img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateTestimonial() {
  const currentTestimonial = testimonials[currentIndex];
  testimonialImage.src = currentTestimonial.image;
  // testimonialText.innerText = currentTestimonial.text;
  // testimonialAuthor.innerText = currentTestimonial.author;
  // testimonialRole.innerText = currentTestimonial.role;
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
  updateTestimonial();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
  updateTestimonial();
});

// Initialize the first testimonial
updateTestimonial();

// MOBILE DISPLAY
