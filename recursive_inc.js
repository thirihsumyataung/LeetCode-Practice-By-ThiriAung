function recusiveInc(num){ 
    if ( num > 0){ 
        recusiveInc(num-1); 
        console.log(num + " "); 
    }
}

var n = 10 ; 
recusiveInc(n); 