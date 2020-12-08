let selector = ".benefits_subtitle";

function rangeRandom(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

$(selector).lettering()
$(selector + " span").css("display", "inline-block");

document.querySelectorAll(selector).forEach(item => item.addEventListener("mouseover", animStart))

function animStart(e) {
    if (e.target.tagName === "SPAN") {
        gsap.timeline()
            .to(e.target, {
                rotation: rangeRandom(-360, 360),
                x: rangeRandom(-50, 50),
                y: rangeRandom(-50, 50),
                scale: rangeRandom(0, 5),
                duration: 1,
                ease: "power4.out",
            }).to(e.target, {
                rotation: 0,
                x: 0,
                y: 0,
                scale: 1,
                duration: 1,
            }, "+=0.5")
    }
}
