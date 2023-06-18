const addBtn = document.getElementById("add-btn");
const modal = document.querySelector("#modal-container");
const submitBtn = document.getElementById("submit-btn")
let cardContainer = document.getElementById("card-container")
let input = document.querySelectorAll("input")
let deleteBtn = document.querySelectorAll(".delete-btn")
//let  readBtn = document.querySelectorAll(".read-btn");

console.log(input)
addBtn.onclick =  function(){
    modal.style.display = "flex"

}

let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
 
  
}

function addBookToLibrary() {
  for(let i= myLibrary.length; i >= 0; i--) {
    // for every book  want to add it to the card container
    console.log("length of library", myLibrary.length)
    console.log(myLibrary[i])
    if(i == myLibrary.length-1){
        console.log(i)
    const div = document.createElement("div")
    div.classList.add("card");
    const title = document.createElement("h2");
    title.textContent = myLibrary[i].title;

    const author = document.createElement("h2");
    author.textContent =  myLibrary[i].author;

    const pages = document.createElement("h2");
    pages.textContent =   myLibrary[i].pages;

    const read = document.createElement("button");
    read.classList.add("read-btn")
    read.textContent = myLibrary[i].read;

    if(read.textContent == "No"){
        read.style.backgroundColor = "red"
    } else {
        read.style.backgroundColor ="green"
    }


    const btn = document.createElement("button");
    btn.classList.add("delete-btn");
    btn.textContent = "Delete"
    btn.setAttribute("type", "button")
    
    div.append(title);
    div.append(author);
    div.append(pages);
    
    div.append(read)
    div.append(btn)
   cardContainer.append(div)
}

  }
}

(document.querySelector("form")).addEventListener('submit', function(e) {
    console.log("dajfhgkdajfh")
  e.preventDefault();
    let checkbox = ""
   if((input[3]).checked){
        checkbox = "Yes"
   } else {
    checkbox = "No"
   }
  input[0].setAttribute('required', '');
    const book = new Book(input[0].value, input[1].value, input[2].value, checkbox);
    myLibrary.push(book)   
    addBookToLibrary()
     modal.style.display = "none"
     clearInput()
   
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

function deleteCard(num){
    const card = document.querySelectorAll(".card");
    console.log(card)
    console.log("cards", card)
   card[num].remove()
}

const observer = new MutationObserver(() => {
    const deleteBtn = document.querySelectorAll('.delete-btn'); // Select all delete buttons
     let readBtn = document.querySelectorAll(".read-btn");
    for(let i = 0; i < deleteBtn.length; i++){
        if(deleteBtn[i]){
            deleteBtn[i].addEventListener("click", function(){
            deleteCard(i);
                myLibrary.splice(i, i)
        })
        }

    }

    for(let i = 0; i <= readBtn.length; i++){
        if(readBtn[i]){
            readBtn[i].addEventListener("click", function(){

                let btnContent = readBtn[i].textContent
                if(btnContent == "Yes"){
                    readBtn[i].textContent ="No"
                    readBtn[i].style.backgroundColor = "black"
                }
                
                else if(btnContent == "No") {
                    readBtn[i].textContent = "Yes"
                    readBtn[i].style.backgroundColor = "green"
                }
        })
        }

    }
    
    
  });
  
  observer.observe(document.body, { childList: true, subtree: true }); // Observe changes in the document body and its descendants
 
