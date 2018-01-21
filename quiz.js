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
// console.log(quizObj, 'This is how many items that are in the quiz obj')
$('button').click(function(){
    $('#quizBody').empty();
    $('<h2>').text(quizObj[0].question).appendTo('#quizBody')
    quizObj[0].asked ++;
    console.log('quiz body has been emptied', quizObj[0])
    quizObj[0].answers.forEach((answer,index)=>{
        $('<div>').attr('id','label').appendTo('#quizBody')
        $('<input>').attr('type', 'radio').attr('id','obj0').addClass('radio').appendTo('#label')
        $('<label>').attr('for', 'obj0').text(answer).appendTo('#label')
        
    });
    $('<button>').addClass('btn btn-primary submit').text('Submit').appendTo('#quizBody')

        $('.submit').click(() => {
                    console.log('been clicked')
                    // when the submit button is clicked empty the quiz body 
                    $('#quizBody').empty();
                    $('<h2>').text(quizObj[1].question).appendTo('#quizBody')
                    quizObj[1].asked++;
                    console.log('quiz body has been emptied', quizObj[1])
                    quizObj[1].answers.forEach((answer) => {
                        $('<div>').attr('id', 'label').appendTo('#quizBody')
                        $('<input>').attr('type', 'radio').attr('id', 'obj1').addClass('radio').appendTo('#label')
                        $('<label>').attr('for', 'obj1').text(answer).appendTo('#label')
                    });
                    $('<button>').addClass('btn btn-primary submit1').text('Submit').appendTo('#quizBody')
                    
                    $('.submit1').click(() =>{
                        console.log('been clicked', quizObj[2])
                        $('#quizBody').empty();
                        $('<h2>').text(quizObj[2].question).appendTo('#quizBody');
                        quizObj[2].asked ++;
                        quizObj[2].answers.forEach((answer) => {
                            $('<div>').attr('id', 'label').appendTo('#quizBody')
                            $('<input>').attr('type', 'radio').attr('id', 'obj2').addClass('radio').appendTo('#label')
                            $('<label>').attr('for', 'obj2').text(answer).appendTo('#label')
                        })
                        
                        $('<button>').addClass('btn btn-primary submit2').text('Submit').appendTo('#quizBody')
                        $('.submit2').click(() => {
                            console.log('been clicked', quizObj[3]);
                        $('#quizBody').empty();
                        $('<h2>').text(quizObj[3].question).appendTo('#quizBody');
                        quizObj[3].asked ++
                        quizObj[3].answers.forEach((answer) => {
                            $('<div>').attr('id', 'label').appendTo('#quizBody')
                            $('<input>').attr('type', 'radio').attr('id', 'obj3').addClass('radio').appendTo('#label')
                            $('<label>').attr('for', 'obj3').text(answer).appendTo('#label')
                        })
                        $('<button>').addClass('btn btn-primary submit3').text('Submit').appendTo('#quizBody')
                        $('.submit3').click(()=>{
                            console.log('been clicked', quizObj[4]);
                        $('#quizBody').empty();
                        $('<h2>').text(quizObj[4].question).appendTo('#quizBody');
                        quizObj[4].asked++
                        quizObj[4].answers.forEach((answer) => {
                        $('<div>').attr('id', 'label').appendTo('#quizBody')
                        $('<input>').attr('type', 'radio').attr('id', 'obj4').addClass('radio').appendTo('#label')
                        $('<label>').attr('for', 'obj4').text(answer).appendTo('#label')
                        })
                        $('<button>').addClass('btn btn-primary submit4').text('Submit').appendTo('#quizBody')
                         $('.submit4').click(()=>{
                            console.log('been clicked', quizObj[5]);
                        $('#quizBody').empty();
                        $('<h2>').text(quizObj[5].question).appendTo('#quizBody');
                        quizObj[5].asked++
                        quizObj[5].answers.forEach((answer) => {
                        $('<div>').attr('id', 'label').appendTo('#quizBody')
                        $('<input>').attr('type', 'radio').attr('id', 'obj4').addClass('radio').appendTo('#label')
                        $('<label>').attr('for', 'obj4').text(answer).appendTo('#label')
                        })
                        $('<button>').addClass('btn btn-primary submit4').text('Submit').appendTo('#quizBody')
                        
                        })

                        })
                        })
                    });
                    });
    })
});
