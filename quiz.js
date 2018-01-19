$(document).ready(function () {
    $('h1').css('color', 'pink')
    $('body').css('background-color', 'lavender')
    let quizObj = [{
        question: "Who was the legendary Benedictine monk who invented champagne?",
        answers: ['Dom Perignon', 'Perrier Jouet', 'Veuve Clicquot', 'A monk did not invent champagne'],
        correctAnswer: 'Dom Perignon',
        asked: 0 ,
        correct: 0,
        wrong: 0
    },
    {
        question: "What is another word for Lexicon",
        answers: ['Dictionary', 'Directory', 'Map', 'Network'],
        correctAnswer: 'Dictionary',
        asked: 0,
        correct: 0,
        wrong: 0
    },
    {
        question: "Which bulbs were once exchanged as a form of currency?" ,
        answers: ['Light Bulbs', 'Onion Bulbs', 'Tulip Bulbs', 'None Of These'],
        correctAnswer: 'Tulip Bulbs',
        asked: 0,
        correct: 0,
        wrong: 0
    },
    {
        question: 'What colour is a Welsh poppy?',
        answers: ['Blue', 'Green', 'Orange', 'Yellow'],
        correctAnswer: 'Yellow',
        asked: 0,
        correct: 0,
        wrong: 0
    },
    {
        question: 'What colour is a Himalayan poppy?',
        answers: ['Blue', 'White', 'Pink', 'Yellow'],
        correctAnswer: 'Blue',
        asked: 0,
        correct: 0,
        wrong: 0
    },
    {
        question: 'What is allspice alternatively known as?',
        answers: ['Marjoram', 'Pimenta', 'Jicama', 'Cassava'],
        correctAnswer: 'Pimenta',
        asked: 0,
        correct: 0,
        wrong: 0
    }


];
console.log(quizObj.length, 'This is how many items that are in the quiz obj')
});
