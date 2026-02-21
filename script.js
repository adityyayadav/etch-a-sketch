let box = document.querySelector("#box");
var size = 4;
var boxsize = 480;
for(let i = 0; i < size * size; i++){
    const ele = document.createElement("div");
    ele.classList.add("ele");
    ele.dataset.dark = 0;
    ele.style.width = `${boxsize / size}px`;
    ele.style.height = `${boxsize / size}px`;
    box.appendChild(ele);
}

const ele = document.querySelectorAll(".ele");
let type = "black";
ele.forEach(ele => {
    ele.addEventListener("mouseover" , () => {
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



