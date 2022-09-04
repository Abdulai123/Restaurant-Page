import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";


function initelization() {
    const content = document.getElementById("content");

    function CreateNav() {
        //create the nav bar.
        const navBar = document.createElement('div');
        navBar.classList.add('content1');
    
        const h1 = document.createElement('h1');
        h1.textContent = "Big Bites Restaurant";
        const navMenu = document.createElement('div');
        navMenu.classList.add('nav');
    
        
        //create the btns inside the nav.
        const homeButton = document.createElement('button');
        const classesHome = ["home","button-nav"];
        homeButton.classList.add(...classesHome);
        homeButton.addEventListener('click', (e)=>{
            if(e.target.classList == "active") return;
            setActive(homeButton);
            loadHome();
        });
    
        const menuButton = document.createElement('button');
        const classesMenu = ["menu","button-nav"];
        menuButton.classList.add(...classesMenu);
        menuButton.addEventListener('click', (e)=>{
            if(e.target.classList == "active") return;
            setActive(menuButton);
            loadMenu();
        });
    
        const contactButton = document.createElement('button');
        const classesContact = ["contact","button-nav"];
        contactButton.classList.add(...classesContact);
        contactButton.addEventListener('click', (e)=>{
            if(e.target.classList == "active") return;
            setActive(contactButton);
            loadContact();
        });
    
        //appen the home, menu, and contact.
        navMenu.appendChild(homeButton).textContent = "Home";
        navMenu.appendChild(menuButton).textContent = "Menu";
        navMenu.appendChild(contactButton).textContent = "Contact";
    
        navBar.appendChild(h1);
        navBar.appendChild(navMenu);
      
        return navBar;
    };

    function setActive(button) {
        const buttons = document.querySelectorAll(".button-nav");
      
        buttons.forEach((button) => {
          if (button !== this) {
            button.classList.remove("active");
          }
        });
      
        button.classList.add("active");
      };

      function createMain() {
        const main = document.createElement("main");
        main.classList.add("main");
        main.setAttribute("id", "main");
        return main;
      }

      content.appendChild(CreateNav());
      content.appendChild(createMain());
};
export default initelization;