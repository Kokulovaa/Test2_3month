
//3
async function fetchproductTitles() {
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        if(!response.ok){
            throw new Error("Network response was not found")
        }
        const products = await response.json()
        products.forEach(product => {
            console.log(product)
        })
    }
}
//4
const product

//