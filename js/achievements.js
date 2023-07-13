// * ARIS SECTION

async function loadData(){
  // const response = await fetch('https://raw.githubusercontent.com/Mhmdaris15/SIJA-Website/main/data/alumnus.json');
  const response = await fetch("../data/achievements.json");
  const data = await response.json();
  for (let d of data) {
      let text = `
      <div class="card">
            <img src=${d.img} alt="cat">
            <div class="intro">
                <h1>
                    <center>${d.rank}</center>
                </h1>
                <p>
                    <center>${d.description}</center>
                </p>
            </div>
        </div>
      `;
      let container = document.querySelector('.cat-cards');
      container.insertAdjacentHTML("beforeend", text);
  }
}
loadData();

$(document).ready(function () {
  $(".down-side").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplayspeed: 20,
    speed: 2000,
  });

  $(".my-slick").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplayspeed: 20,
    speed: 1000,
  });

  let menu = document.querySelector(".menu");
  let menuLogo1 = document.getElementById("menuLogo1");
  let menuLogo2 = document.getElementById("menuLogo2");
  let menuLists = document.querySelectorAll("nav-list-menu");
  let imgButtons = document.querySelectorAll(".right-side .slick-dots li");
  // let newDesc;

  menuLogo2.addEventListener("click", (e) => {
    menu.style.display = "block";
  });
  menuLogo1.addEventListener("click", (e) => {
    menu.style.display = "none";
  });
});




// $(".ach-cards").slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });
