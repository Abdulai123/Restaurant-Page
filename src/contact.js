function createContact() {
        //create new container and append it to the current webpage.
        const container = document.createElement('div');
        container.classList.add("container");

        // const contact = document.getElementsByClassName("contact");
        const ChiefImg = document.createElement('div');
        const p = document.createElement('p');
        const para2 = document.createElement('p');
        const image = document.createElement('img');
        image.setAttribute('src', './map.png');
        ChiefImg.classList.add("chief");
        p.innerText = " 📞 123 456 789";
        para2.innerText = " 🏠 58 King's Street, Freetown, Sierra Leone";
        image.style.borderRadius = "0";
        ChiefImg.appendChild(image);
        container.appendChild(p);
        container.appendChild(para2);
        container.appendChild(ChiefImg);

        return container;
}
function loadContact() {
        const main = document.getElementById("main");
        main.textContent = "";
        main.appendChild(createContact());
      }
export default loadContact;