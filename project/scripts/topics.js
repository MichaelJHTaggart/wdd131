const topics = [
  {
    title: "DOM Manipulation",
    description: "Learn how to dynamically interact with and modify the Document Object Model using JavaScript.",
    imageDesktop: "./images/unsplash-desktop-1.webp",
    imageTablet: "./images/unsplash-tablet-1.webp",
    imageMobile: "./images/unsplash-mobile-1.webp",
    link: "./dom-manipulation.html"
  },
  {
    title: "Local Storage",
    description: "Learn how to store and retrieve data locally in the browser using the localStorage API.",
    imageDesktop: "./images/unsplash-desktop-2.webp",
    imageTablet: "./images/unsplash-tablet-2.webp",
    imageMobile: "./images/unsplash-mobile-2.webp",
    link: "./local-storage.html"
  },
  {
    title: "Image Optimization",
    description: "Learn how to optimize images using Squoosh.app, implement responsive images, and use lazy loading for better performance.",
    imageDesktop: "./images/unsplash-desktop-3.webp",
    imageTablet: "./images/unsplash-tablet-3.webp",
    imageMobile: "./images/unsplash-mobile-3.webp",
    link: "./image-optimization.html"
  }
];

function createTopicCards() {
  const container = document.querySelector("#topics");
  if (!container) return;
  
  container.innerHTML = "";
  
  topics.forEach(topic => {
    let link = document.createElement("a");
    link.setAttribute("href", topic.link);
    
    let figure = document.createElement("figure");
    let picture = document.createElement("picture");
    
    let sourceDesktop = document.createElement("source");
    sourceDesktop.setAttribute("srcset", topic.imageDesktop);
    sourceDesktop.setAttribute("media", "(min-width: 1000px)");
    sourceDesktop.setAttribute("sizes", "1440px");
    
    let sourceTablet = document.createElement("source");
    sourceTablet.setAttribute("srcset", topic.imageTablet);
    sourceTablet.setAttribute("media", "(min-width: 550px)");
    sourceTablet.setAttribute("sizes", "100vw");
    
    let img = document.createElement("img");
    img.setAttribute("src", topic.imageMobile);
    img.setAttribute("alt", topic.title);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", 400);
    img.setAttribute("height", 400);
    
    picture.appendChild(sourceDesktop);
    picture.appendChild(sourceTablet);
    picture.appendChild(img);
    
    let textContainer = document.createElement("div");
    
    let title = document.createElement("h3");
    title.textContent = topic.title;
    
    let description = document.createElement("p");
    description.textContent = topic.description;
    
    textContainer.appendChild(title);
    textContainer.appendChild(description);
    
    figure.appendChild(picture);
    figure.appendChild(textContainer);
    
    link.appendChild(figure);
    container.appendChild(link);
  });
}

document.addEventListener("DOMContentLoaded", createTopicCards);

