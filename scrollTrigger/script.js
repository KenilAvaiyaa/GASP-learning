const tl = gsap.timeline({
    opacity:0,
    ease : Expo.easeInOut
});

tl.from(".nav #left img, .nav #left #menu a, .nav #right", {
    y:-100,
    duration: 0.8,
    stagger: 0.5,
    
})
tl.to(".nav",{
    // scale:0,
    // duration: 2,
    stagger: 0.5,
    borderBottom: "1.5px solid white"
})

tl.from(".intro #left h1",{
    x:-100,
    opacity:0,
    duration: 1,
    stagger: 1
    // borderBottom: "1.5px solid white"
})

tl.from(".intro #right",{
    x:-100,
    opacity:0,
    duration: 1,
    stagger: 0.5
    // borderBottom: "1.5px solid white"
})

gsap.from(".page-2 #box",{
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page-2 #box",
        scroller:"body",
        start: "top 60%",
        markers:true,
        end:"top 30%",
        scrub:2
    }

    
})