let actionTitle = ".benefits_design_title";
let actionListDesign = ".benefits_design_list";
let actionListModes = ".benefits_modes_list";
let imgImgGyro = "#link_benefits > section.benefits_colors > img"
let imgAudiencePrint = ".audience_image_print_svg";

gsap.registerPlugin(ScrollTrigger)

gsap.from(actionTitle, {
    x: -200,
    opacity: 0,
    scale: 0,
    duration: 3,
    scrollTrigger: {
        trigger: actionTitle,
        start: "top 75%",
        toggleActions: "play none none none",
    }
})

gsap.from(actionListDesign, {
    y: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: actionListDesign,
        start: "top 75%",
        toggleActions: "play none none none",
    }
})
gsap.from(actionListModes, {
    y: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: actionListModes,
        start: "top 75%",
        toggleActions: "play none none none",
    }
})

/* Img imgImgGyro */
document.querySelector(imgImgGyro).addEventListener("click", actionGyro);
function actionGyro() {
    gsap.timeline().from(imgImgGyro, {
        x: -1000,
        opacity: 0,
        duration: 2,
    }).to(imgImgGyro, {
        x: 0,
        opacity: 1,
        duration: 1,
    })
}
gsap.from(imgImgGyro, {
    x: -1000,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: imgImgGyro,
        start: "top 75%",
        toggleActions: "play none none none",
    }
})

gsap.from(imgAudiencePrint, {
    opacity: 0,
    duration: 5,
    scrollTrigger: {
        trigger: imgAudiencePrint,
        start: "top 75%",
        toggleActions: "play none none none",
    }
})





/* Smooth Scroll to Links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Animated Links*/
let arr = [
    ["#link_first", "#link_banner"],
    ["#link_second", "#link_benefits"],
    ["#link_third", "#link_modes"],
    ["#link_forth", "#link_audience"]
]
let triggerCustom = {
    start: "top center",
    end: "bottom center",
    //markers: true,
    toggleActions: "play reverse play reverse"
};
arr.forEach(item => {
    gsap.to(item[0], {
        scrollTrigger: {
            trigger: item[1],
            ...triggerCustom,
        },
        scale: 2.5,
    });
});
