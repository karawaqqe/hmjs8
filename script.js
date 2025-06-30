const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']

    // 1
    let string = '';
    for (let i = 0;i < friends.length ; i += 1) {
        string += friends[i]
        if (i < friends.length - 1) {
            string += ", ";
        }
    }
    console.log(string);
    
    console.log("///");
    // 2
    console.log(friends.join(", "));

console.log("2");


const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]

console.log(cards);

console.log("3");
const cardToRemove = 'Карточка-3';

const inde = cards.indexOf(cardToRemove);
cards.splice(inde, 1)

console.log(cards);

console.log("4");

const cardToInsert = 'Карточка-6';
cards.splice(4, 0, cardToInsert)
console.log(cards);

console.log("5");

const update = cards.indexOf('Карточка-4')
const cardToUpdate = 'Kарточка-4';
cards.splice(update, 1, cardToUpdate)
console.log(cards);