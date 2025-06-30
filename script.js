// 1
function logItems(array) {
  for (let i = 0; i < array.length; i++ ) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);

  // 2

  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    return words.length * pricePerWord;
  }
  
  console.log(calculateEngravingPrice("Lovely ring for you", 10));
  

// 3
function findLongestWord(string) {
  const words = string.split(' ');
  let longest = words[0];

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}


console.log(findLongestWord("never start playing dota 2"));


// 4

function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + '...';
}


console.log(formatString("Це короткий рядок"));
console.log(formatString("Це дуже довгий рядок, який потрібно буде обрізати, бо він більше сорока символів"));


// 5

function checkForSpam(message) {
  const lowerCaseMsg = message.toLowerCase();
  return lowerCaseMsg.includes("spam") || lowerCaseMsg.includes("sale");
}

console.log(checkForSpam("Забирай пока дешево")); 
console.log(checkForSpam("Здарова")); 

// 6

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число:");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число");
  } else {
    numbers.push(number);
  }

} while (true);

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Нічого не введено.");
}