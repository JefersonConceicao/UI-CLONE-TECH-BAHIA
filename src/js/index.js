window.onload = () => {
    configCollapse()
}

const configCollapse = () => {
    const buttonMenu = document.querySelector(".fa-bars");
    
    buttonMenu.onclick = () => {
        const menuMobile = document.querySelector(".mobile-menu");
        menuMobile.classList.toggle('active');

        if(menuMobile.classList.contains('active')){
            menuMobile.style.height = menuMobile.scrollHeight + 'px';
        }else{
            menuMobile.style.height = 0+'px';
        }
    }
}
