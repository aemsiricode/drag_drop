// DOM ELEMENT'
const boxes = document.querySelectorAll(".box"),
      image = document.querySelector(".image")

// Loop through each boxes element
boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered")
  })

  // When a draggable element leaves box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered")
  })

  // When a draggable element is dropped on a box element
  box.addEventListener("drop", () => {
    box.appendChild(image)
    box.classList.remove("hovered")
  })
})