class Product {
  constructor (title, description, price, thumbnail, code, stock) {
   this.title = title;
   this.description = description;
   this.price = price;
   this.thumbnail = thumbnail;
   this.code = code;
   this.stock = stock;
  }
}

class ProductManager {
  constructor () {
    this.products = [];
  }

  addProduct = (obj) => {
    if (this.products.indexOf(this.code) !== "-1") {
      this.products.push(obj);
      obj.id = 1;
    }
  }

  getProducts = () => {
   console.log(this.products);
  }

  getProductById = (id) => {
    const findProd = this.products.find(obj => obj.id === id);
    findProd ? console.log(findProd) : console.error("Ese id no existe");
  }
}

//testeo
let manager = new ProductManager();
let productA = new Product("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
manager.getProducts();
manager.addProduct(productA);
manager.getProducts();
manager.getProductById(1);