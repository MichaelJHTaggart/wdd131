const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

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
	templeName: "Bakersfield California",
	location: "Bakersfield, California, United States",
	dedicated: "Planning and approval phase.",
	area: 30000,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bakersfield-california-temple/bakersfield-california-temple-44187.jpg"
  },
  {
	templeName: "Oakland California",
	location: "Oakland, California, United States",
	dedicated: "1964, November 17",
	area: 80157,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-1731.jpg"
  },
  {
	templeName: "Colorado Springs Colorado",
	location: "Colorado Springs, Colorado, United States",
	dedicated: "Planning and approval phase.",
	area: 45000,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/colorado-springs-colorado-temple/colorado-springs-colorado-temple-59991-main.jpg"
  }
];

function createTempleCard(list) {
  const container = document.querySelector("#temples");
  container.innerHTML = "";
  
  list.forEach(temple => {
    let figure = document.createElement("figure");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);
    img.setAttribute("loading", "lazy");
    img.setAttribute("height", 400);
    img.setAttribute("width", 400);

    figure.appendChild(name);
    figure.appendChild(location);
    figure.appendChild(dedication);
    figure.appendChild(area);
    figure.appendChild(img);

    container.appendChild(figure);
  });
}

function filterTemples(filter) {
  let result;

  switch (filter) {
    case "old":
      result = temples.filter(temple => {
        const year = parseInt(temple.dedicated);
        return !isNaN(year) && year < 1900;
      });
      break;

    case "new":
      result = temples.filter(temple => {
        const year = parseInt(temple.dedicated);
        return !isNaN(year) && year > 2000;
      });
      break;

    case "large":
      result = temples.filter(temple => temple.area > 90000);
      break;

    case "small":
      result = temples.filter(temple => temple.area < 10000);
      break;

    default:
      result = temples;
  }

  createTempleCard(result);
}

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filterText = link.textContent.toLowerCase();
    const filter = filterText === "home" ? "all" : filterText;
    filterTemples(filter);
  });
});

createTempleCard(temples);