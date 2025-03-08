import data from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  // Handle Add to Cart button clicks
  const addCartButtons = document.querySelectorAll(".add-cart");

  addCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      // Use event.currentTarget to refer to the button element
      const addCartButton = event.currentTarget;

      // Find the closest product container (.box) for this button
      const itemContainer = addCartButton.closest(".box");
    

      // Select elements within this item container only
      const decrementDiv = itemContainer.querySelector(".decrement");
      const incrementDiv = itemContainer.querySelector(".increment");
      const decrementQuantity = itemContainer.querySelector(".decrement-quantity");
      const incrementQuantity = itemContainer.querySelector(".increment-quantity");
      const cartNoElement = itemContainer.querySelector(".cart-no");
      const cartText = itemContainer.querySelector(".cart");
      const cartImage = itemContainer.querySelector(".cart-image");

      // Update cart display for this specific item
      cartNoElement.textContent = 1;

      // Show the decrement and increment icons
      decrementQuantity.style.visibility = "visible";
      incrementQuantity.style.visibility = "visible";

      // Hide the default cart text and image
      cartText.style.visibility = "hidden";
      cartImage.style.visibility = "hidden";

      // Optionally update styling and add active classes
      addCartButton.style.border = "none";
      addCartButton.classList.add("active");
      decrementDiv.classList.add("active");
      incrementDiv.classList.add("active");
    });
  });


  // Handle decrement button clicks for reducing cart quantity
  const decrementButtons = document.querySelectorAll(".decrement-quantity");

  decrementButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation(); // Prevents the click from triggering the parent add-cart event

      // Find the product container (the closest .box element)
      const productContainer = event.target.closest(".box");


      // Select the cart number element within this product
      const cartNoElement = productContainer.querySelector(".cart-no");

      // Parse the current cart number; default to 0 if it's empty
      let currentCount = parseInt(cartNoElement.textContent) || 0;

      // Decrement the count only if it's greater than 0
      if (currentCount > 0) {
        currentCount--;
        cartNoElement.textContent = currentCount;
      }

      // Optionally hide the decrement container if count reaches 0
      if (currentCount === 0) {
        const decrementDiv = productContainer.querySelector(".decrement");
        const decrementButtons = productContainer.querySelector(".decrement-quantity");
        decrementDiv.style.visibility = "hidden";
        decrementButtons.style.visibility = "hidden";
      }
    });
  });


  // Handle increment button clicks for increasing cart quantity
  const incrementButtons = document.querySelectorAll(".increment-quantity");

  incrementButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation(); // Prevents the click from triggering the parent add-cart event

      // Find the product container (the closest .box element)
      const productContainer = event.target.closest(".box");

      // Select the cart number element within this product
      const cartNoElement = productContainer.querySelector(".cart-no");

      // Parse the current cart number; default to 0 if it's empty
      let currentCount = parseInt(cartNoElement.textContent) || 0;

      // Increment the count
      currentCount++;
      cartNoElement.textContent = currentCount;

      // Optionally, show the decrement container if count is above 0
      const decrementDiv = productContainer.querySelector(".decrement");
      const decrementButtons = productContainer.querySelector(".decrement-quantity");
      decrementDiv.style.visibility = "visible";
      decrementButtons.style.visibility = "visible";
    });
  });

});
































// import data from "./data.js";

// document.addEventListener("DOMContentLoaded", () => {

//   const object = JSON.parse(data);
  
//   const categorySections = document.querySelector(".price");

//   const addCart = document.getElementsByClassName("add-cart");

//   addCart.addEventListener("click", function(event) {
//     event.preventDefault(); 

//     const decrement = document.querySelector(".decrement");

//     const increment = document.querySelector(".increment");

//     const decrementQuantity = document.querySelector(".decrement-quantity");

//     const incrementQuantity = document.querySelector(".increment-quantity");

//     const cartNo = document.querySelector(".cart-no");

//     const addCart = document.querySelector(".add-cart");

//     const cart = document.querySelector(".cart");

//     const cartImage = document.querySelector(".cart-image");
   
//     cartNo.textContent = 1;

//     decrementQuantity.style.visibility = "visible";
//     incrementQuantity.style.visibility = "visible";
//     cart.style.visibility = "hidden";
//     cartImage.style.visibility = "hidden";
//     addCart.style.border = "none";
//     decrement.classList.add("active"); 
//     increment.classList.add("active");
//     addCart.classList.add("active"); 
    
   
//   });





  // // console.log(object[0].price);
  // const printOut = object[6].price;
  // const categoryItem = categorySections
  // categoryItem.innerHTML = `$${printOut}`

  
  // // console.log(Object.keys(object));
  // // const categories = Object.keys(object)
  
  // categorySections.forEach((section, index) =>{
  //   const category = categories
  //    console.log(category)
  //   object[category].forEach(({name, description}) =>{
  //     const categoryItem = document.createElement('li');
  //     categoryItem.innerHTML = `<strong>${name}</strong>: ${description}`
  //     section.appendChild(categoryItem)
  //   })
  // });
  
// });