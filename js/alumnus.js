async function loadData(){
    const response = await fetch('../data/alumnus.json');
    const data = await response.json();
    for (let d of data) {
        let text = `
        <div class="alumnus-card-parent">
        <div class="top-card"><ul class="dots">
            <li class="dot"></li>
            <li class="dot"></li>
            <li class="dot"></li>
        </ul></div>
        <div class="alumnus-card">
          <div class="photo"><img src=${d.photo} alt="Photo Profile"></div>
          <div class="biodata">
              <div class="name">${d.name}</div>
              <div class="job">${d.job}</div>
              <div class="company"><i class="fa-solid ${d.job.includes('Kuliah')? "fa-school-flag":"fa-building"}"></i> ${d.company}</div>
          </div>
      </div>
      </div>
        `;
        let container = document.querySelector('.alumnus-cards');
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