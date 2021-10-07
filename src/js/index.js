const buttonLinks = () => {
    const button = document.querySelectorAll('.success-button');

    button.forEach(element => {
        element.addEventListener('click', function(e){
            e.preventDefault();

            alert("action link whatsapp");
        })
    })
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

const scrollEvent = () => {
    window.addEventListener('scroll', function(e){
        const scrollToTOP = document.getElementById('scroll-to-top');
        
        if(window.scrollY > 0){
            scrollToTOP.style.display = 'block';
        }else{
            scrollToTOP.style.display = 'none';
        }
    });
}

window.onload = () => {
    scrollEvent()
    configCollapse()
    buttonLinks()
}
