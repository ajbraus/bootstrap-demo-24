
 // Assuming you have an HTML element with the ID "myElement" that you want to repeat

const stuffItem = document.getElementById("stuff-item");
const stuffList = document.getElementById("stuff-list");
const repeatCount = 10; // How many times you want to repeat the element

for (let i = 0; i < repeatCount; i++) {
  const clonedElement = stuffItem.cloneNode(true); // true to clone all child nodes
  stuffList.appendChild(clonedElement); // Append the clone to the document
}