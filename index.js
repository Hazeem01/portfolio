alert("For best viewing experience, kindly open the page from a desktop computer. Thanks!");
const navbarContent = document.getElementsByClassName("navbar-content")
const navbarBtn = document.getElementsByClassName("navbar-button")
const displayContent = () => {
    navbarContent[0].style.display = "block"
    navbarBtn[0].style.display = "none"
};

navbarBtn.onclick = displayContent();