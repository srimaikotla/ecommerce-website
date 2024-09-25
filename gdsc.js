const products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        description: "Your perfect pack for everyday use and walks in the forest."
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        description: "Slim-fitting style, contrast raglan long sleeve."
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        description: "Great outerwear jackets for Spring/Autumn/Winter."
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        
      },
      {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        
      },
      {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      },
];

let cart = [];

function addToCart(productId) {
   const product = products.find(p => p.id === productId);
   const cartItem = cart.find(item => item.id === productId);
   if (cartItem) {
       cartItem.quantity++;
   } else {
       cart.push({ ...product, quantity: 1 });
   }
   updateCartDisplay();
}

function updateCartDisplay() {
   const cartItemsElement = document.getElementById('cart-items');
   cartItemsElement.innerHTML = '';
   let totalPrice = 0;

   cart.forEach(item => {
       totalPrice += item.price * item.quantity;
       let itemDiv = createProductDisplay(item);
       itemDiv.className = 'products'; // Apply the same class for styling

       let quantityText = document.createElement('p');
       quantityText.textContent = 'Quantity: ' + item.quantity;

       const removeButton = createButton('Remove', function() {
           removeFromCart(item.id);
       });
       itemDiv.appendChild(quantityText);
       itemDiv.appendChild(removeButton);
       cartItemsElement.appendChild(itemDiv);
   });

   document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function createButton(text, onClick) {
   const button = document.createElement('button');
   button.textContent = text; 
   button.onclick = onClick; 
   return button; 
}

function removeFromCart(productId) {
   cart = cart.filter(item => item.id !== productId);
   updateCartDisplay();
}

function displayProducts(productsToDisplay) {
   const productListElement = document.getElementById('product-list');
   
   productsToDisplay.forEach(product => {
       const productDiv = createProductDisplay(product);
       
       const addToCartButton = createButton('Add to Cart', function() {
           addToCart(product.id);
       });

       productDiv.appendChild(addToCartButton);
       productListElement.appendChild(productDiv);
   });
}

function createProductDisplay(product) {
   const productDiv = document.createElement('div');
   productDiv.className = 'product'; 
   const imgElement = document.createElement('img');
   imgElement.src = product.image;
   imgElement.alt = product.title;

   const titleElement = document.createElement('h3');
   titleElement.textContent = product.title;

   const priceElement = document.createElement('p');
   priceElement.textContent = '$' + product.price.toFixed(2);

   productDiv.appendChild(imgElement);
   productDiv.appendChild(titleElement);
   productDiv.appendChild(priceElement);
   return productDiv;
}