let box = document.querySelector("#box");
var boxsize = 480;
let slider = document.querySelector("#slider")
let sizeVal = document.querySelector("#sizeValue")
let colorPicker = document.querySelector("#colorPicker");

function createGrid(size){
    box.innerHTML = ""
    sizeVal.textContent = size;
    for(let i = 0; i < size * size; i++){
    const ele = document.createElement("div");
    ele.classList.add("ele");
    ele.dataset.dark = 0;
    ele.style.width = `${boxsize / size}px`;
    ele.style.height = `${boxsize / size}px`;
    box.appendChild(ele);
}
}


let type = "black";
box.addEventListener("mouseover" , (e) => {
    if(!e.target.classList.contains("ele")) return;
    const ele = e.target;
    if(type == "rainbow"){
        ele.style.backgroundColor = `hsl(${Math.random() * 360} , 100% , 50%)`;
    }
    else if(type == "black"){
        ele.style.backgroundColor = `black`;
    }
    else if(type == "grayscale"){
        let dark = Number(ele.dataset.dark);
        if(dark < 10) dark++;
        ele.dataset.dark = dark;
        ele.style.backgroundColor = `rgba(0 , 0, 0, ${dark / 10})`;
    }
    else if(type == "eraser"){
        ele.style.backgroundColor = "white";
        ele.dataset.dark = 0;
    }
    else{
        ele.style.backgroundColor = type;
    }
})

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
button.addEventListener("click" , (e) =>{
    type = e.target.className;
    const elements = document.querySelectorAll("button");

    elements.forEach(element => {
        if(element.className == type) element.style.backgroundColor = "lightcoral";
        else element.style.backgroundColor = "black";
    })

    if(type == "pick"){
        colorPicker.click();

        colorPicker.addEventListener("input" , (e) => {
            type = e.target.value;
        })
    }
})
})



createGrid(slider.value)

slider.addEventListener("input", () => {
    createGrid(slider.value);
})
