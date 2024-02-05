let apiUrl = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const card = document.querySelector("#cards");



const displayProphets = (prophets)=> {
    prophets.forEach((prophets) => {

        const grid = document.createElement("div");
        grid.className = "display-card";
        
        const section = document.createElement("section");
        // section.classList = "";

        const h2Element =  document.createElement("h2");
        h2Element.innerHTML = `${prophets.name} ${prophets.lastname}`;

        const h4Element1 = document.createElement("h4");
        h4Element1.innerHTML = `Date of Birth: ${prophets.birthdate}`;

        const h4Element2 = document.createElement("h4");
        h4Element2.innerHTML = `Place of Birth: ${prophets.birthplace}`;

        const portrait = document.createElement("img");
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophets.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophets.name} ${prophets.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        portrait.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";

        section.append(h2Element, h4Element1, h4Element2, portrait);
        grid.appendChild(section)
        card.appendChild(grid);

    });
}














const getProphetData = async() => {
    const response = await fetch(apiUrl);
    if(response.ok)
    {
        const data = await response.json();
        //console.table(data.prophets);
        displayProphets(data.prophets)
    }
}


getProphetData();