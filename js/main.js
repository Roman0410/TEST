document.addEventListener("DOMContentLoaded", function () {
  const menuItem = document.querySelectorAll(".nav__item");
  const contentItems = document.querySelectorAll(".content__item");
  function updateActive(target) {
    menuItem.forEach((item) =>
      item.classList.toggle(
        "current",
        item.getAttribute("data-menu") === target
      )
    );
    contentItems.forEach((content) =>
      content.classList.toggle(
        "current",
        content.getAttribute("data-content") === target
      )
    );
  }
  menuItem.forEach((filter) => {
    filter.addEventListener("click", function () {
      updateActive(this.getAttribute("data-menu"));
    });
  });
  const initialContent = document.querySelector(".content__item.current");
  if (initialContent) {
    updateActive(initialContent.getAttribute("data-content"));
  }
});

$(".marquee__line").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  arrows: false,
  buttons: false,
});
