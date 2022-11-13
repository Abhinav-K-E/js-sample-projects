function change(){
    let randomColor;

    randomColor = Math.floor(Math.random()*16777215).toString(16); // 16-for 16bit colour

    document.getElementById("wrapp").style.background="#"+randomColor;
    document.getElementById("display").innerHTML="#"+randomColor;

}

copy = () =>{
    let copyText = document.getElementById("display").innerHTML;

    navigator.clipboard.writeText(copyText); // coping into clipboard.
    
    console.log(copyText);
}
