/* Initial ID for Animations */
let bannerH1 = "#banner_title_h1"
let logoID = "#header_logo";
let headerNavID = ".header_nav";


/* Header Logo */
gsap.from(logoID, {
    opacity: 0,
    duration: 1,
    scale: 0,
});
gsap.from(headerNavID, {
    opacity: 0,
    duration: 2,
    scale: 0,
});

/* Header H1  */
let chars = $(bannerH1).lettering();
gsap.from(bannerH1 + " span", {
    opacity: 0,
    duration: 2,
    x: 100,
    stagger: 0.2,
})

