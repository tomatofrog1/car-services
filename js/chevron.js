const navUp = document.querySelector('.navUp')

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 388){
        navUp.classList.add('open')
    } else {
        navUp.classList.remove('open')
    }
});