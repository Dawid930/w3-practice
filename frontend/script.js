function addTwoIntigers(firstIntiger, secondIntiger) {
    //console.log(firstIntiger + secondIntiger)
    //return firstIntiger + secondIntiger
    // return "Hello"
    if(typeof firstIntiger === "number" && typeof secondIntiger === "number"){
        return firstIntiger + secondIntiger
    } else{
        return "valamelyik argumentum nem szam, ezert a muvelet nem elvegezheto"
    }

}

console.log( addTwoIntigers("12", 13) );
console.log( addTwoIntigers(1920, 85) );
console.log(0 == "0")