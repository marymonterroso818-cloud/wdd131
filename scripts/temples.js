const today = new Date();
const currentYear = document.querySelector("#currentyear");

currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#primary-navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
  hamButton.setAttribute("aria-expanded", String(navigation.classList.contains("open"))
  );
})