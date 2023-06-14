var notify = document.querySelector(".notify"); //1+1+1
var btn = document.querySelector(".btn");

btn.addEventListener("click", active);

function active() {
  var add = Number(notify.getAttribute("data-count") || 0); //0  1  2
  notify.setAttribute("data-count", add + 1);
  if (add === 0) {
    notify.classList.add("add-numb");
  }
}
