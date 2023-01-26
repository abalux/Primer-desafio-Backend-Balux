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
    if (this.products.some(element => element.code === obj.code)) {
       console.log("necesita otro id");
    } else {
      if (Object.values(obj).length > 0) {
        this.products.push(obj);
        function function1(element, id = 0, array1) {
          element.id = id + 1;
        };
        this.products.forEach(function1);
      } else {
        console.log("Es obligatorio llenar todos los campos");
      }
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
let productB = new Product("Producto prueba b ", "Este es un producto prueba b ", 200, "Sin imagen", "abc124", 25);
manager.addProduct(productB);
manager.getProducts();