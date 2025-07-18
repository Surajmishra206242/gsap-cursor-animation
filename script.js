var main = document.querySelector("#box");

var cursor = document.querySelector("#cursor");

var imagediv = document.querySelector("#image");

main.addEventListener("mousemove", (event)=>{
    gsap.to(cursor,{
        x:event.x,
        y:event.y,
       
    })
})

imagediv.addEventListener("mouseenter",(event)=>{
    cursor.innerHTML = "gsap";
    gsap.to(cursor,{
        scale:5,
        backgroundColor:"#ffffff3c"
    })
})

imagediv.addEventListener("mouseleave",(event)=>{
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})
