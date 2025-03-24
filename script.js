document.addEventListener("scroll", (e) => {
    console.log("scroll : ", window.scrollY);

    document.querySelector(".bg-text-animation").style.transform = 'translaterY(${window.scroll}px'
})