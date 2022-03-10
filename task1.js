//1
const sub =[10,20];

// console.log(isNumberPrime(23));
console.log("prime numbers", sieveOfEratosthenes(sub));


function isNumberPrime(number){
    const squareRoot = Math.sqrt(number);
    for(let i=2; i <= squareRoot; i++){
        // console.log("prime? ", number);
        if(number%i == 0) return false
    };
    return true;
}

function sieveOfEratosthenes(sub){

    let arrayToCheck =[], start, end;
    if(sub[0] > sub[1]){
        start = sub[1];
        end = sub[0];
    }else{
        start = sub[0];
        end = sub[1];
    }
    // 0 symbolised is that number not a prime
    //in start we assume that we have all prime numbers and check it
    for(let i=0; i <= end; i++){ 
        if(i < start || i === 1){
            arrayToCheck.push(0);
        }else{
            arrayToCheck.push(i);
        }
        
    }
    for(i=0; i < arrayToCheck.length; i++){ 
        if(arrayToCheck[i] !== 0 && isNumberPrime(i)){
            // console.log(i)
            let j = i+i;
            while(j <= end){
                arrayToCheck[j]=0;
                j += i;
            }
        }else{
            arrayToCheck[i]=0;
        }
    }
    return arrayToCheck.filter((value) => value !== 0);
}

//2
