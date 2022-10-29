function calcu(result){
    form.Result.value=form.Result.value+result;
    
}

// when click-C it clear display
clean = () =>{
    form.Result.value='';
}

// for total evaluation

evalu = () =>{
    form.Result.value = eval(form.Result.value);
}