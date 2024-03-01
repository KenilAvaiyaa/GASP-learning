const tl = gsap.timeline({
    opacity:0
});


function time(){
    var x=0;
    setInterval(function(){
        x = x+ Math.floor(Math.random(1,100)*30) ;
        let num=document.querySelector(".loder h1 span");
        
        if (x<100){
            num.innerHTML=(x +"%")
        }
        else{
            x =100;
            num.innerHTML=x +"%"
            
        }
    },150)
}

tl.to(".loder h1",{
    scale:1.5,
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to(".loder",{
    top:"-100vh",
    delay:0.5
    })

tl.from(".nav",{
    y:-100,
    // delay:0.1,
    duration:1
})

.to(".nav",{
    borderBottom: "1px solid white"
})
.from(".intro",{
    opacity:0,
    duration:0.3,
    ease: Expo.easeInOut
})

tl.to(".page1 .intro h1",{
    transform:"translateX(-220%)",
    fontWeight:100,
    scrollTrigger:{
        trigger:".page1",
        scrollBy:"body",
        // markers:true,
        start:"left 0%",
        scrub:1,
        pin:true,
        end:"right -150%"
    }
    
})

