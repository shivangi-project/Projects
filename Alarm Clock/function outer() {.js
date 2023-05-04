for (var i = 0; i < 3; i++) {
    setTimeout ( (function log (closureI) {
    console.log (closureI);
    } (i)), 1000) ;
}    