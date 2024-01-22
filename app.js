const body = document.querySelector("body");
// import arrow from "./arro5.jpeg";

addEventListener("click", (e) => {

  const containerCursor = document.createElement("div");
  containerCursor.classList.add("containerCursor");
  containerCursor.style.left = e.clientX + "px";
  containerCursor.style.top = e.clientY + "px";
  body.appendChild(containerCursor);

  const customCursor = document.createElement("div");
  customCursor.classList.add("customCursor");
  containerCursor.appendChild(customCursor);
  
  const cursorTopFace = document.createElement("div");
  cursorTopFace.classList.add("cursorTopFace");
  const imgTop = document.createElement("img");
  imgTop.src = "IMG_0005.jpeg";
  imgTop.style.rotate = "180deg";
  cursorTopFace.appendChild(imgTop);
  customCursor.appendChild(cursorTopFace);
  
  const cursorBotFace = document.createElement("div");
  cursorBotFace.classList.add("cursorBotFace");
  const imgBot = document.createElement("img");
  imgBot.src = "IMG_0005.jpeg";
  imgBot.style.rotate = "0deg";
  cursorBotFace.appendChild(imgBot);
  customCursor.appendChild(cursorBotFace);
  
  const cursorRightFace = document.createElement("div");
  cursorRightFace.classList.add("cursorRightFace");
  const imgRight = document.createElement("img");
  imgRight.src = "IMG_0005.jpeg";
  imgRight.style.rotate = "-90deg";
  cursorRightFace.appendChild(imgRight);
  customCursor.appendChild(cursorRightFace);
  
  const cursorLeftFace = document.createElement("div");
  cursorLeftFace.classList.add("cursorLeftFace");
  const imgLeft = document.createElement("img");
  imgLeft.src = "IMG_0005.jpeg";
  imgLeft.style.rotate = "90deg";
  cursorLeftFace.appendChild(imgLeft);
  customCursor.appendChild(cursorLeftFace);

  const ring = document.createElement("div");
  ring.classList.add("ring");
  customCursor.appendChild(ring);


  setTimeout(() => {
    ring.style.transitionDuration = "10.2s";
    ring.style.scale = 0;
    setTimeout(() => {
      ring.remove();
    }, 10500)
  }, 10210)

  setTimeout(() => {
    cursorTopFace.style.transitionDuration = "10.5s";
    cursorTopFace.style.rotate = "x 90deg";
    cursorTopFace.style.translate = "0 5rem -10rem";
    
    cursorBotFace.style.transitionDuration = "10.5s";
    cursorBotFace.style.translate = "0 -5rem -10rem";
    cursorBotFace.style.rotate = "x -90deg";
    
    cursorRightFace.style.transitionDuration = "10.5s";
    cursorRightFace.style.rotate = "y 90deg";
    cursorRightFace.style.translate = "-5rem 0";
    
    cursorLeftFace.style.transitionDuration = "10.5s";
    cursorLeftFace.style.rotate = "y -90deg";
    cursorLeftFace.style.translate = "5rem 0";
    
    setTimeout(() => {
      // cursorTopFace.style.scale = "0 1";
      // cursorLeftFace.style.scale = "1 0";
      // cursorRightFace.style.scale = "1 0";
      // cursorBotFace.style.scale = "0 1";
    }, 10050)
  }, 20000);
})