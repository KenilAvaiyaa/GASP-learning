gsap.from("#box1 #squar",{
    scale : 0,
    obecity : 0,
    delay : 1,
    duration: 2,
    rotate:360
})

gsap.from("#box2 #squar",{
    scale : 0,
    obecity : 0,
    duration: 2,
    rotate:360,
    scrollTrigger:{
        trigger:"#box2 #squar",
        scroller: "body",
        start : "top 60%",
        markers: true,
        end: "top 30%",
        scrub: 2
    }
})

gsap.from("#box3 #squar",{
    height: "600px",
    width: "600px",
    delay: 2,
    obecity : 0,
    duration: 2,
    // rotate:360,
    scrollTrigger:{
        trigger:"#box3 #squar",
        scroller: "body",
        start : "top 20%",
        markers: true,
        // end: "top 20%",
        scrub: 2
    }
})

gsap.to(gsap.from("#box4 #squar",{
    height: "600px",
    width: "600px",
    delay: 2,
    obecity : 0,
    duration: 2,
    // rotate:360,
    scrollTrigger:{
        trigger:"#box4 #squar",
        scroller: "body",
        start : "top 20%",
        // markers: true,   use to show where animation state and end
        // end: "top 20%",
        scrub: 2
    }
}))