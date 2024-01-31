const grigliaElement = document.querySelector("#griglia")

for (let i = 1 ; i <= 100 ; i++) {
    
    const newElement = document.createElement ("div");
    newElement.className = "CassOne"
    newElement.innerHTML = i ;
    grigliaElement.append(newElement);

    if (i % 3 == 0){
        newElement.innerText =
        "Fizz";
        
        } else if (i % 5 == 0){
            newElement.innerText =
            "Buzz";
        }
    if (i % 15 == 0){
        newElement.innerText =
            "FizzBuzz";
    }
        
    console.log(i)
   
}