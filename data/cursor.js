const circle = document.querySelector(".cursor-circle");
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  const pointX = e.clientX;
  const pointY = e.clientY;

  circle.animate(
    {
      top: `${pointY}px`,
      left: `${pointX}px`,
    },
    { duration: 200, fill: "forwards" }
  );

  cursor.style.cssText = `
    top: ${pointY}px;
    left: ${pointX}px;
    `;

});
