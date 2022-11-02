function check(){
    let str = document.getElementById("txt").value;
    let palian;

    let len = str.length;
    console.log(str.charAt(0));

    let len01 = len-1;

    for(let i=0;i<len;i++){

        if(str.charAt(i) == str.charAt(len01)){
            palian = true;
        }
        else{
            break;
        }

        len01--;
    }

    if(palian == true){
        document.getElementById("result").value ="Yes it is a paliandrome";
    }
    else{
        document.getElementById("result").value ="It is not a paliandrome";
    }
}
