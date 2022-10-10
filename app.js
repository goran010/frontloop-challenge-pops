const input = document.querySelector("input");
let itemId = 0,
  id;

const eventHandler = () => {
  if (input.value) {
    itemId++;
    document.querySelector(
      ".popsContainer"
    ).innerHTML += `<div id="${itemId}" class="popItem">${input.value}</div>`;
    setIntervalFunction(itemId, input.value);
    setTimeoutFunction(itemId, id, input.value * 1000);
    input.value = "";
  }
};
document.querySelector(".btnAddPop").addEventListener("click", eventHandler);
input.addEventListener("keypress", (e) => {
  e.key === "Enter" ? eventHandler() : false;
});
setIntervalFunction = (itemId, i) => {
  id = setInterval(() => {
    --i;
    document.getElementById(`${itemId}`).textContent = i;
  }, 1000);
};

setTimeoutFunction = (itemId, id, delay) => {
  setTimeout(() => {
    document.getElementById(`${itemId}`).remove();
    clearInterval(id);
  }, delay);
};
