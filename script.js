
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']

let string = '';

for (let i = 0; i < friends.length; i += 1) {
    string += friends[i]
    if (i < friends.length - 1) {
        string += ", ";
    }
}
console.log(string); 



console.log(friends.join(","));



const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]

console.log(cards);


const cardToRemove = 'Карточка-3';

const indexOfElement = cards.indexOf(cardToRemove);
cards.splice(indexOfElement, 1)
console.log(cards);


const cardToInsert = 'Карточка-6'
cards.push(cardToInsert)
console.log(cards);


const update = cards.indexOf('Карточка-4')
const cardToUpdate = 'Kарточка-4';
cards.splice(update, 1, cardToUpdate)
console.log(cards);
