const colors = ["green", "red", "pink", "white", "purple", "virgo", "yellow", "#211C6A", "#59B4C3", "#74E291", "#EFF396", "#FFE4C9", "#E78895","#0D9276", "#12372A", "#1F2544","#81689D", "#474F7A", "#F28585","#561C24", "#FE7A36", "#3652AD","#280274", "#0C2D57", "#FC6736","#FFB0B0", "#6C22A6", "#D04848","#6895D2", "#96E9C6", "#6962AD","#F54291", "#1D1B38", "#336D88","#F6BF4F", "#AAAAAA", "#300532","#FFA87B", "#5C3E84", "#E14D2A","#001253", "#FFAD84", "#EEA1EB","#221F3B", "#72B896", "#26191B","#AF8BAF", "#C70D3A", "#C4FB6D"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// console.log(colors.length)

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber]
})
