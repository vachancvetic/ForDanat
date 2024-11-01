const containers = document.querySelectorAll(".cards");

containers.forEach((container) => {
  container.addEventListener("wheel", (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение прокрутки
    const scrollSpeed = 4; // Коэффициент скорости прокрутки
    container.scrollBy({
      left: event.deltaY * scrollSpeed, // Увеличиваем скорость прокрутки
      behavior: "smooth", // Плавная прокрутка
    });
  });
});

const burgerButton = document.getElementById("burgerMenuButton");
const menu = document.getElementById("burgerMenu");
burgerButton.addEventListener("click", function () {
  menu.classList.toggle("active");
});
