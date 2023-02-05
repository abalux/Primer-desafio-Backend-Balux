const fs = require('fs')

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
    this.getProducts();
    if (this.products.some(element => element.code === obj.code)) {
      console.log("necesita otro id");
    } else {
      if (Object.values(obj).length > 0) {
        let length = this.products.length;
        obj.id = length + 1;
        this.products.push(obj);
        let writeFile = fs.writeFileSync('./products.json', JSON.stringify(this.products));
      } else {
        console.log("Es obligatorio llenar todos los campos");
      }
    }
  }

  getProducts = () => {
    let readProduct = fs.readFileSync('./products.json');
    JSON.parse(readProduct);
    console.log(this.products);
  }

  getProductById = (id) => {
    this.getProducts();
    const findProd = this.products.find(obj => obj.id === id);
    findProd ? console.log(findProd) : console.error("Ese id no existe");
  }

  updateProduct = (id, title, description, price, thumbnail, code, stock) => {
    this.getProducts();
    const index = this.products.findIndex(obj => obj.id === id );
      this.products[index] = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
        id: id
      }
      let writeFile = fs.writeFileSync('./products.json', JSON.stringify(this.products));
    }
  
    deleteProduct = (id) => {
    this.getProducts();
    const findProd2 = this.products.find(obj => obj.id === id);
    const eliminateProd = this.products.shift(findProd2);
    let writeFile = fs.writeFileSync('./products.json', JSON.stringify(this.products));
    }
}


//testeo
let manager = new ProductManager();
let productA = new Product("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
manager.getProducts();
manager.addProduct(productA);
manager.getProducts();
manager.getProductById(1);
let productB = new Product("Producto prueba b ", "Este es un producto prueba b ", 200, "Sin imagen", "abc124", 25);
manager.addProduct(productB);
manager.getProducts();
manager.deleteProduct(1);
manager.getProducts();
manager.updateProduct(2,"Producto prueba b ", "Este es un producto prueba b ", 400, "Sin imagen", "abc124", 25);
manager.getProducts();