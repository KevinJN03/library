const addBtn = document.getElementById("add-btn");
const modal = document.querySelector("#modal-container");
const submitBtn = document.getElementById("submit-btn")
let cardContainer = document.getElementById("card-container")
let input = document.querySelectorAll("input")
let deleteBtn = document.querySelectorAll(".delete-btn")
addBtn.onclick =  function(){
    modal.style.display = "flex"

}

let myLibrary = [];

class Book {
  constructor(title, author, pages, read){
    this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
  }
}

function clearCards(){
    const cards = document.querySelectorAll(".card");
    for (let i=0; i< cards.length; i++){
        cards[i].remove()
    }
    
}

function addBookToLibrary() {
    
    //if(myLibrary.length != 0){
        clearCards()

  for(let i= 0; i < myLibrary.length; i++) {
    // for every book  want to add it to the card container    
    const div = document.createElement("div")
    div.classList.add("card");
    const title = document.createElement("h2");
    title.textContent = `"${myLibrary[i].title}"`;

    const author = document.createElement("h2");
    author.textContent =  myLibrary[i].author;

    const pages = document.createElement("h2");
    pages.textContent =   myLibrary[i].pages;

    const read = document.createElement("button");
    read.setAttribute("onclick", `changeReadStatus(${i})`)
    read.classList.add("read-btn")
    

    if(myLibrary[i].read == false){
        read.textContent = "No"
      read.classList.add("not-checked")
    } else {
        read.textContent = "Yes"
      read.classList.add("checked")
      
    }

    const btn = document.createElement("button");
    btn.classList.add("delete-btn");
    btn.textContent = "Delete";
    btn.setAttribute("onclick", `removeBook(${i})`)
    btn.setAttribute("type", "button")
    
    div.append(title);
    div.append(author);
    div.append(pages);
    
    div.append(read)
    div.append(btn)
   cardContainer.append(div)
}
//}

  }

  


(document.querySelector("form")).addEventListener('submit', function(e) {
  e.preventDefault();
    let checkbox = ""
   if((input[3]).checked){
        checkbox = true
        input[3].classList.add("checked")
   } else {
    checkbox = false
    input[3].classList.add("not-checked")
   }
    const book = new Book(input[0].value, input[1].value, input[2].value, checkbox);
    myLibrary.push(book)
    myLibrary.reverse()   
    addBookToLibrary()
     modal.style.display = "none"
     clearInput();
    
   
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



function clearInput(){
    input[0].value = ""
    input[1].value = ""
    input[2].value = ""
    input[3].checked = false;
}

function removeBook(index){
 
    myLibrary.splice(index,1)
    addBookToLibrary()
    
 
}


 
const changeReadStatus = (index) => {
    
    if(myLibrary[index].read === false){
        myLibrary[index].read = true
    } else {
        myLibrary[index].read = false 
    }
    addBookToLibrary()
}
