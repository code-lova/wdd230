const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


function alertBox(){
    alert("Please input a value");
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
});



function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}


//Display list of BOM chapters 
function displayList(item){

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = item;
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("button");

    li.appendChild(deleteBtn);
    list.appendChild(li);

    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Define the setChapterList function to set the localStorage item
function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}


// Define the getChapterList function to get the localStorage item.
function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

//click button event to add a new item to the list
button.addEventListener("click", () => {
    const item = input.value;
    if(item === "")
    {
       alertBox();
    }
    else{

        displayList(input.value)
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }

});