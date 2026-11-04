addEventListener("mousemove", (e)=>{
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
})




// window.addEventListener("mousemove", (e) => {
//     document.documentElement.style.setProperty("--x", e.clientX + "px");
//     document.documentElement.style.setProperty("--y", e.clientY + "px");
// });