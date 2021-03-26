const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1

const cat = {
        complain: function() {
            console.log("Meow!");
        }
};


// Question 2 

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";


// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.classList.add("subheading");


// Question 5

const paragraphs = document.querySelectorAll("p");
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}


// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7

function logger(list){
    for(let i= 0; i< list.length; i++){
        console.log(list[i].name);
    }
}

logger(cats);


// Question 8

function createCats(cats){
    let newHTML = ``;
    for(let i = 0; i < cats.length; i++){
        let ageProperty = "Age unknown";
        if(cats[i].age){
            ageProperty = cats[i].age;
        }
        newHTML += `<div>
        <h5>${cats[i].name}</h5>
        <p>${ageProperty}</p>
        </div>`
    }
    return newHTML;
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);