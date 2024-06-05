function recursiveDec (num){ 
    if( num > 0 ){ 
        console.log(num + ''); 
        recursiveDec(num-1); 
    }
    return; 
}

var n = 10; 
recursiveDec(n); 