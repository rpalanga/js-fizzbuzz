const grigliaElement = document.querySelector("#griglia")

for (let i = 1 ; i <= 100 ; i++) {
    
    const newElement = document.createElement ("div");
    newElement.className = "CassOne"
    newElement.innerHTML = i ;
    grigliaElement.append(newElement);
    newElement.style.backgroundColor = "#3F87AE";


    if (i % 3 == 0){
        newElement.innerText =
        "Fizz";
        newElement.style.backgroundColor = "#62D3A4";
        
        } else if (i % 5 == 0){
            newElement.innerText =
            "Buzz";
        newElement.style.backgroundColor = "#F8D377";

            
        }
    if (i % 15 == 0){
        newElement.innerText =
            "FizzBuzz";
        newElement.style.backgroundColor = "#DE5471";

    }
        
    console.log(i)
   
}