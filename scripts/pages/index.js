// Récupération de l'url du JSON et fetch des datas
let url = "./data/photographers.json"

function getData() {
    return fetch(url)
    .then((res) => res.json())

}

// Function pour récupérer les datas photographers
async function getPhotographers() {
        let datas = await getData()
        console.log(datas)

        let photographers = datas.photographers

        return ({
            photographers: [...photographers]})
    }

// Function pour display les datas en html
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };
    
// Function pour initier le tout
    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
