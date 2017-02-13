var link = document.querySelector(".btn-write-us");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-write-us-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-write-us-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-write-us-show");
});
