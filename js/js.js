
let up = document.querySelector(".up");



up.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})




// let buttomouther = document.querySelector(".buttomouther");
// let otherlink = document.querySelector(".otherlink");

// buttomouther.addEventListener("click", (e) => {

//     e.stopPropagation()
//     otherlink.classList.toggle("non")

// })
// document.addEventListener("click", (e) => {

//     otherlink.classList.add("non")

// })


$('.buttomouther').click((e) => {
    e.stopPropagation();
    $('.con').toggle(200)

    if (window.matchMedia("(max-width: 668px)").matches) {

        $('.otherlink').css({ "top": "126px", "transition": "0.4s" });
    } else {

        $('.otherlink').css({ "top": "66px", "transition": "0.4s" });
    }



})

$(document).click((e) => {
    $('.con').hide(200)

    if (window.matchMedia("(max-width: 668px)").matches) {

        $('.otherlink').css({ "top": "136px", "transition": "0.4s" });
    } else {

        $('.otherlink').css({ "top": "100px", "transition": "0.4s" });

    }




})

let skils = document.querySelector(".skils");
let stats = document.querySelector(".stats");
let num = document.querySelectorAll(".number");
let started = false;



window.onscroll = function () {

    if (this.scrollY >= 500) {
        up.classList.add("show")

    } else {
        up.classList.remove("show")
    }

    if (window.scrollY >= skils.offsetTop) {

        document.querySelector("#asd").style.transition = "0.4s";
        document.querySelector("#asd").style.width = "80%";
        document.querySelector("#asd1").style.transition = "0.4s";
        document.querySelector("#asd1").style.width = "85%";
        document.querySelector("#asd2").style.transition = "0.4s";
        document.querySelector("#asd2").style.width = "70%";
        document.querySelector("#asd3").style.transition = "0.4s";
        document.querySelector("#asd3").style.width = "90%";

    }
    if (window.scrollY >= stats.offsetTop) {


        if (!started) {
            num.forEach(e => {
                let gool = e.dataset.gool;
                let set = setInterval(() => {
                    e.textContent++
                    if (e.textContent == gool) {
                        clearInterval(set)
                    }
                }, 800 / gool);

            });
        }

        started = true
    }

}


// window.onscroll = function () {
//     if (window.scrollY >= stats.offsetTop) {
//         document.querySelector("#number1").innerHTML = 5000;
//         document.querySelector("#number1").style.transition = "0.4s";

//     }
// }


// addEventListener("scroll", () => {
//     let sct = document.documentElement.scrollTop;
//     if (sct >= 5899.2001953125) {
//     }
// })