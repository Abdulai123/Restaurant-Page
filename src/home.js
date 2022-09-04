    function containerDiv(){
    const container = document.createElement('div');
    container.classList.add("container");

    //create the paras
    const firstP = document.createElement('p');
    const secondP = document.createElement('p');
    const ChiefImg = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', '3c45068af3e021b79f46.jpg');
    ChiefImg.classList.add("chief");

    container.appendChild(firstP).textContent = "Best Burger and Chicken in your country";
    container.appendChild(secondP).textContent = "Made with passion since 1990";
    ChiefImg.appendChild(image);
    container.appendChild(ChiefImg);
    return container;
    };

    //fun to create opend days and hours.
    function daysDiv() {
        const days = document.createElement('div');
        days.classList.add("days");

        //create all p tags
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');
        const p6 = document.createElement('p');
        const p7 = document.createElement('p');

        //add contents
        h2.textContent = "Hours";
        p1.textContent = "Sunday: 8am - 8pm";
        p2.textContent = "Monday: 6am - 6pm";
        p3.textContent = "Tuesday: 6am - 6pm";
        p4.textContent = "Wednesday: 6am - 6pm";
        p5.textContent = "Thursday: 6am - 10pm";
        p6.textContent = "Friday: 6am - 10pm";
        p7.textContent = "Saturday: 8am - 10pm";

        //append all the p tags to the days div.
        days.appendChild(h2);
        days.appendChild(p1);
        days.appendChild(p2);
        days.appendChild(p3);
        days.appendChild(p4);
        days.appendChild(p5);
        days.appendChild(p6);
        days.appendChild(p7);
        return days;
    };

    //fun to create location
    function locDiv(){
        const loc = document.createElement('div');
        loc.classList.add("loc");

        const h2 = document.createElement('h2');
        const address = document.createElement('address');

        h2.textContent = "Location";
        address.textContent = "323 Forest Drive, Forestville, Maine";

        loc.appendChild(h2);
        loc.appendChild(address);
        return loc;
    };

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(containerDiv());
    main.appendChild(daysDiv());
    main.appendChild(locDiv());
  }


export default loadHome;
