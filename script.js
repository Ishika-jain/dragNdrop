const draggables = document.querySelectorAll(".draggable");
const divOne = document.querySelectorAll(".div1");
const droppables = document.querySelectorAll(".container");
const resetButton = document.querySelector(".reset");
const action = document.querySelector(".action");

draggables.forEach((draggable) => {
    //when dragging starts add class dragging so we can change appearance of dragged element
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  //when finished dragging remove the dragging class and print success
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
    action.textContent = "Success";
    //erase success from screen after half second
    setTimeout(() => {

      action.textContent = " ";
    }, 500);
  });
});

//append dragged element to container over which it is 
droppables.forEach((droppable) => {
  droppable.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
 
    droppable.appendChild(draggable);
  });
});

//implement reset functionality
resetButton.addEventListener("click", () => {
  divOne.forEach((div) => {
    document.querySelector(".container").appendChild(div);
   
  });
});
