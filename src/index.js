document.addEventListener("DOMContentLoaded", () => {
});

//Write a function that fetches dog API
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
function fetchDog(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => eachDog(data))
}
//Function that parses each index of the data array and pushes it to the img element
function eachDog(data){
    data.message.forEach(dogUrl => {
        const dogImage = document.createElement('img')
        dogImage.src = dogUrl
        document.body.appendChild(dogImage)
    })
}

fetchDog()

//Function that fetches dog breeds
const breedUrl = "https://dog.ceo/api/breeds/list/all";
function fetchBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(dogBreed => addBreed(dogBreed))
}

//Function that makes lists of the dog breeds from a fetch
function addBreed(dogBreed){
    const breedList = document.getElementById('dog-breeds')
    const breedNames = Object.keys(dogBreed.message)
    const breedDropdown = document.getElementById('breed-dropdown')
    //Dropdowns event added to change the list for the starting letter of the breed name
    breedDropdown.addEventListener('change', () =>{
        const selectedLetter = breedDropdown.value;
        const filteredBreeds = breedNames.filter(breed => breed.startsWith(selectedLetter))

        breedList.innerHTML = ''
        //filtered list definition, still changes color blue too!
        filteredBreeds.forEach(filteredBreed => {
            const listItem = document.createElement('li');
            listItem.textContent = filteredBreed;
            listItem.addEventListener('click', () => {
                listItem.style.color = 'blue';
            });
            breedList.appendChild(listItem);
        })
    })
    //Shows full list of breed names
    breedNames.forEach(breedName => {
        const listItem = document.createElement('li')
        listItem.textContent = breedName
        listItem.addEventListener('click', () => {
            listItem.style.color = 'blue'
        })
        breedList.appendChild(listItem)
    })
}
fetchBreeds()