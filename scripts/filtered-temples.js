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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Los Angeles California",
    location: "Los Angeles, CA, United States",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
  },                                 
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },                                 
  {
    templeName: "Atlanta Georgia",
    location: "Sandy Springs, Georgia",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
  },
];

const templeGrid = document.querySelector(".temple-grid");

function displayTemples(templeList) {
  templeGrid.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("figure");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName} Temple"
        loading="lazy">`;
    
    templeGrid.appendChild(card);

  });
}

displayTemples(temples);

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("h1").textContent = "Large Temples";

  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("h1").textContent = "Small Temples";


  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("h1").textContent = "Old Temples";

  const oldTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  displayTemples(oldTemples);
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("h1").textContent = "New Temples";

  const newTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
}); 

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", (event) => {
  event.preventDefault();

  document.querySelector("h1").textContent = "Home";
  displayTemples(temples);
});

