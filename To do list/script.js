const list = document.querySelector("#list");
const form = document.querySelector("#new-item-form");
const itemInput = document.querySelector("#item-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.createElement("DIV");
  item.innerText = itemInput.value;
  item.classList.add("list-item");
  list.appendChild(item);
  itemInput.value = "";

  item.addEventListener("click", (e) => {
    list.removeChild(item);
  });
});
