const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


function alertBox(){
    alert("Please input a value");
}

button.addEventListener("click", () => {
    const myInput = input.value;
    if(myInput === "")
    {
       alertBox();
    }
    else{

        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");

        li.textContent = myInput;
        deleteBtn.textContent = "❌";

        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = "";

        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
            input.focus()
        });

    }

});