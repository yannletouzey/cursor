const body = document.querySelector("body");
addEventListener("click", (e) => {
  const customCursor = document.createElement("div");
  customCursor.classList.add("customCursor");
  body.appendChild(customCursor);
  customCursor.style.left = e.clientX + "px";
  customCursor.style.top = e.clientY + "px";
  setTimeout(() => {
    customCursor.style.transitionDuration = "0.5s";
    customCursor.style.scale = 0;
    setTimeout(() => {
      customCursor.remove();
    }, 500)
  }, 100)
})