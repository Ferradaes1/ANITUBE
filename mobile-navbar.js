class MobileNavbar{
    constructor(mobilemenu, navList, navLinks){
        this.mobilemenu = document.querySelector(mobilemenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){ 
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){ 
    this.mobilemenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobilemenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();