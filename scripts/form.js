const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productNameElement = document.getElementById("product-name")

if (productNameElement) {
    function generateOptions(){
        products.forEach((product) => {
            let newOption = document.createElement("option")
            newOption.setAttribute("value", product.id)
            newOption.textContent = product.name
            productNameElement.appendChild(newOption)
        })
    }
    generateOptions()


    document.querySelector('form').addEventListener('submit', () => {
        let count = parseInt(localStorage.getItem('number_of_product_reviews')) || 0;
        count++
        localStorage.setItem('number_of_product_reviews', count);
    })
}

const numberOfProductReviews = document.getElementById('number_of_product_reviews')
if (numberOfProductReviews) {
    numberOfProductReviews.textContent = localStorage.getItem('number_of_product_reviews')
}