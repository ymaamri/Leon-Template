let links = document.querySelector(".links");
let ul = document.querySelector(".first-ul");
document.body.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("s1") ||
    e.target.classList.contains("s2") ||
    e.target.classList.contains("s3") ||
    e.target.classList.contains("icon")
  ) {
    ul.style = "display: block;";
  } else {
    ul.style = "display: none;";
  }
});
