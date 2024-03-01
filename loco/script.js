function call(){
    gsap.registerPlugin(ScrollTrigger);
 
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  smoothMobile: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".data-scroll-container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

call()



var x = gsap.timeline();

x.from(".page1 #box",{
    scale:0,
    duration:2,
    rotate:360
})

x.from(".page2 #box",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:".page2 #box",
        scroller:".main",
        start:"top 60%",
        scrub:2,
        end:"bottom 30%",
        markers:true

    }
})

x.from(".page3 #box",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:".page3 #box",
        scroller:".main",
        start:"top 90%",
        scrub:2,
        end:"bottom 10%",
        markers:true

    }
})