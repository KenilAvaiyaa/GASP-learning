const time = gsap.timeline({
    repeat : -1
});

time.to(".images", {
        width:"100%",
        ease : Expo.easeInOut,
        duration: 2 ,
        stagger: 2
    },"a")
.to(".text h1", {
    top: "0",
    delay: 0.9,
    ease : Expo.easeInOut,
    stagger: 2
},"a")
.to(".text h1", {
    delay: 2,
    top: "-100%",
    ease : Expo.easeInOut,
    stagger: 2
},"a")