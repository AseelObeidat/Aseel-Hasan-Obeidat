 // Exercise #1
function SwapFunction() {
  const product1 = document.getElementById("Element1");
  const product2 = document.getElementById("Element2");
 
  const Actiontest = product1.innerHTML;
  product1.innerHTML = product2.innerHTML;
  product2.innerHTML = Actiontest;
}

//Exercise #2
function assignSection(ticketNumber) {
      if (ticketNumber % 2 === 0) {
        return "Section A";
      } else {
        return "Section B";
      }
    }

    function checkTicket() {
      const ticketNumber = parseInt(document.getElementById("ticketInput").value);
      const result = assignSection(ticketNumber);
      document.getElementById("result").innerText = "You are in: " + result;
    }

    //Exercise #3
    
    function calculatefactorial() {

      const nExercise = parseInt(document.getElementById("CountWork").value);
let fact;

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

if (isNaN(nExercise) || nExercise < 0) {
  fact = "Invalid input. Re-enter the number of exercises!";
} else {
  fact = factorial(nExercise);
}

document.getElementById("output").innerText = `The number of Exercises is: ${fact}`;

    }
//Exercise #4
function isPalindrome(username) {
      const normalized = username.toLowerCase();
      const reversed = normalized.split('').reverse().join('');
      return normalized === reversed;
    }
    function UsernameEncrypt() {
      const username = document.getElementById("usernameInput").value;
      const result = isPalindrome(username)
        ? "❌ Username not allowed: it's a palindrome."
        : "✅ Username accepted.";
      document.getElementById("resultEncrypt").innerText = result;
    }

    //Exercise #5
    function MaxNumber(){
        Num1= document.getElementById("RegionA").value;
        Num2= document.getElementById("RegionB").value;
        Num3= document.getElementById("RegionC").value;
        TopNumber =Math.max(Num1,Num2,Num3);
        document.getElementById("resultMax").innerText =TopNumber
    }


    

//Exercise #7
function sumOfDigits() {    
    const inputString = document.getElementById("purchaseId").value.toString();
    let sum = 0;       
    for (let char of inputString) {
        if (/\d/.test(char)) {
            sum += parseInt(char);
        }
    }
    
    document.getElementById("result1").innerText= sum;
}

//Exercise #8
function CheckPrime() {
            const num = parseInt(document.getElementById('PrimeNum').value); 
            let isPrime;
            if (num <= 1) {
                isPrime = false;
            } else if (num <= 3) {
                isPrime = true;
            } else if (num % 2 === 0 || num % 3 === 0) {
                isPrime = false;
            } else {
                isPrime = true;
                for (let i = 5; i * i <= num; i += 6) {
                    if (num % i === 0 || num % (i + 2) === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            
            document.getElementById('resultp').textContent = isPrime ? `${num} is prime` : `${num} is not prime`;
        }

// Exercise #9
        function puzzleWord(){
             const input = document.getElementById('wordInput').value;
            const reversed =input.split('').reverse().join('');
            document.getElementById('resultPuzzle').innerText = `"${input}" reversed is "${reversed}"`;
        }

//Exercise #10
        function loopFactorial() {
            const Nfract = parseInt(document.getElementById('CountWork2').value); 
           
            let result = 1;
            for (let i = 2; i <= Nfract; i++) {
                result *= i;            }
            
           
            document.getElementById('outputf').innerText = `${Nfract}! = ${result}`;

  
    }

    //Exercise #11
    function findGCD(){
      const Num1=document.getElementById("Number1").value;
      const Num2=document.getElementById("Number2").value;
      let ResultOfGcd;
      let x = Math.abs(Num1), y = Math.abs(Num2);
        while (y !== 0) {
          let temp = y;
          y = x % y;
          x = temp;
        resultText = `The GCD of ${Num1} and ${Num2} is: ${x}`;
      }

      document.getElementById("gcdResult").innerText = resultText;
    }

    //Exercise #12
    function checkPerfect() {
      const num = parseInt(document.getElementById("PerfectNumber").value);
      let resultP;      
        let sum = 0;
        for (let i = 1; i <= num / 2; i++) {
          if (num % i === 0) {
            sum += i;
          }
        }
        if (sum === num) {
          resultP = `${num} is a Perfect Number.`;
        } else {
          resultP = `${num} is NOT a Perfect Number.`;
        }
    
      document.getElementById("resultPerfect").innerText = resultP;
    }

    
        //Exercise #13
        function findLcm() {
      const num1 = parseInt(document.getElementById("Bus1").value);
      const num2 = parseInt(document.getElementById("Bus2").value);
     
      if (num1 === "" || num2 === "") {
        document.getElementById("lcmResult").innerText = "Please enter correct number.";
        return;
      }
      

      if (num1 <= 0 || num2 <= 0) {
        document.getElementById("lcmResult").innerText = "Enter positive numbers only.";
        return;
      }
     
      function gcd(x, y) {
        while (y !== 0) {
          let temp = y;
          y = x % y;
          x = temp;
        }
        return x;
      }
      
      const lcm = (num1 * num2) / gcd(num1, num2);

      document.getElementById("lcmResult").innerText =`The buses will arrive together every ${lcm} minutes.`;
    }
    // Exercise #14
    function removeduplicate() {
      const rawInput = document.getElementById("inputNumbers").value;      
      const numbers = rawInput
        .split(/[\n,]+/)
        .map(num => num.trim())
        .filter(num => num !== "");      
      const unique = [...new Set(numbers)];      
      document.getElementById("Resultd").innerText = unique.join("\n");
    }

    //Exercise #15
    function getPrices() {
  const input = prompt("Enter item prices separated by commas (e.g. 12.5, 20, 7.25)");

 
  const prices = input
    .split(",")
    .map(p => parseFloat(p.trim()))
    .filter(p => !isNaN(p));

  if (prices.length === 0) {
    document.getElementById("resultPrice").innerText = "Invalid prices.ReEnter";
    return;
  }

  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  document.getElementById("resultPrice").innerText = `Total Price: JOD${sum.toFixed(2)}`;
}

//Exercise #16
function findMaxArr(){
  const input = prompt("Enter Array Numbers separated by commas (e.g. 12, 20, 7)");

  const MaxArr = input
    .split(",")
    .map(p => parseInt(p.trim()))
    .filter(p => !isNaN(p));

  if (MaxArr.length === 0) {
    document.getElementById("resulMax").innerText = "Invalid Data.ReEnter";
    return;
  }

  if (MaxArr.length === 0) return null; 
  let maxSteps = MaxArr[0];
  
  for (let i = 1; i < MaxArr.length; i++) {
    if (MaxArr[i] > maxSteps) {
      maxSteps = MaxArr[i];
    }


  }

  document.getElementById("resulMax").innerText = `The Maximum Number is: ${maxSteps}`;
}
//Exercise #17
function findMinArr(){
  const input = prompt("Enter Array Numbers separated by commas (e.g. 12, 20, 7)");

  const MinArr = input
    .split(",")
    .map(p => parseInt(p.trim()))
    .filter(p => !isNaN(p));

  if (MinArr.length === 0) {
    document.getElementById("resulMin").innerText = "Invalid Data.ReEnter";
    return;
  }

  if (MinArr.length === 0) return null; 
  let minSteps = MinArr[0];
  
  for (let i = 1; i < MinArr.length; i++) {
    if (MinArr[i] < minSteps) {
      minSteps = MinArr[i];
    }


  }

  document.getElementById("resulMin").innerText = `The Minimum Number is: ${minSteps}`;
}

//Exercise #18
function findCommonMovies() {
  const list1 = prompt("Enter first watchlist (comma-separated):");
  const list2 = prompt("Enter second watchlist (comma-separated):");

  const watchlist1 = list1
    .split(",")
    .map(movie => movie.trim().toLowerCase())
    .filter(movie => movie !== "");

  const watchlist2 = list2
    .split(",")
    .map(movie => movie.trim().toLowerCase())
    .filter(movie => movie !== "");

  if (watchlist1.length === 0 || watchlist2.length === 0) {
    document.getElementById("resultCommon").innerText = "Invalid input. Please enter both watchlists.";
    return;
  }

  let commonMovies = [];

  for (let i = 0; i < watchlist1.length; i++) {
    if (watchlist2.includes(watchlist1[i]) && !commonMovies.includes(watchlist1[i])) {
      commonMovies.push(watchlist1[i]);
    }
  }

  if (commonMovies.length > 0) {
    document.getElementById("resultCommon").innerText = 
      `Common movies: ${commonMovies.join(", ")}`;
  } else {
    document.getElementById("resultCommon").innerText = "No common movies found.";
  }
}

//Exercise #19
function countIdsInInventory() {
  const inventoryInput = prompt("Enter inventory product IDs separated by commas (e.g. P1, P2, P3, P1, P2)");

  const inventory = inventoryInput
    .split(",")
    .map(id => id.trim().toUpperCase())
    .filter(id => id !== "");

  if (inventory.length === 0) {
    document.getElementById("productCountResult").innerText = "Invalid input. Please enter inventory product IDs.";
    return;
  }

  const productCounts = {};

  for (let i = 0; i < inventory.length; i++) {
    const product = inventory[i];
    if (productCounts[product]) {
      productCounts[product]++;
    } else {
      productCounts[product] = 1;
    }
  }

 
  let resultText = "Product Counts:\n";
  for (let product in productCounts) {
    resultText += `${product}: ${productCounts[product]} time(s)\n`;
  }

  document.getElementById("productCountResult").innerText = resultText;
}

//Exercise #20
function findSongIndex() {
  const playlistInput = prompt("Enter song titles separated by commas:");
  const targetSong = prompt("Enter the song title you want to find:");

  const playlist = playlistInput
    .split(",")
    .map(song => song.trim().toLowerCase())
    .filter(song => song !== "");

  const searchTitle = targetSong.trim().toLowerCase();

  if (playlist.length === 0 || searchTitle === "") {
    document.getElementById("songResult").innerText = "Invalid input. Please enter valid playlist and song title.";
    return;
  }

  const index = playlist.indexOf(searchTitle);

  if (index !== -1) {
    document.getElementById("songResult").innerText =`The song "${targetSong}" is at position ${index} in the playlist.`;
  } else {
    document.getElementById("songResult").innerText =`The song "${targetSong}" was not found in the playlist.`;
  }
}





