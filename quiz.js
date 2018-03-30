$(document).ready(function () {
    $('h1').css('color', 'pink')
    $('body').css('background-color', 'lavender')
    let yes = 0;
    let no = 0;
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
        $('<form>').attr('id', 'label').attr('method', 'post').appendTo('#quizBody')
    
    quizObj[0].answers.forEach((answer,index)=>{
        $('<input>').attr('type', 'radio').attr('id','obj0').attr('name','q1').text(answer).addClass('radio').appendTo('#label')
        $('<label>').attr('for', 'obj0').text(answer).appendTo('#label')
        
    });

    $('<button>').addClass('btn btn-primary submit').text('Submit').appendTo('#quizBody')
   

        $('.submit').click(() => {
            var checker = $("form input[name='q1']:checked").text();
            console.log(checker)
            if(quizObj[0].correctAnswer === checker){
                yes ++;
            } else{
                 no ++;

            }
            console.log(yes, no)
        
                    // console.log('been clicked')
                    // when the submit button is clicked empty the quiz body 
                    $('#quizBody').empty();
                    $('<h2>').text(quizObj[1].question).appendTo('#quizBody')
                    quizObj[1].asked++;
                    // console.log('quiz body has been emptied', quizObj[1])
            $('<form>').attr('id', 'label').attr('method', 'post').appendTo('#quizBody')
                    
                    quizObj[1].answers.forEach((answer) => {
                        $('<input>').attr('type', 'radio').attr('id', 'obj1').attr('name', 'q2').text(answer).addClass('radio').appendTo('#label')
                        $('<label>').attr('for', 'obj1').text(answer).appendTo('#label')
                    });
                    $('<button>').addClass('btn btn-primary submit1').text('Submit').appendTo('#quizBody')
                    
                    $('.submit1').click(() =>{
                 var checker = $("form input[name='q2']:checked").text();
            console.log(checker)
            if(quizObj[1].correctAnswer === checker){
                yes ++
            } else{
                no ++
            }
            console.log(quizObj[1])
                        // console.log('been clicked', quizObj[2])
                        $('#quizBody').empty();
                        $('<h2>').text(quizObj[2].question).appendTo('#quizBody');
                        quizObj[2].asked ++;
            $('<form>').attr('id', 'label').attr('method', 'post').appendTo('#quizBody')
                        

                        quizObj[2].answers.forEach((answer) => {
                            $('<input>').attr('type', 'radio').attr('id', 'obj2').attr('name', 'q3').text(answer).addClass('radio').appendTo('#label')
                            $('<label>').attr('for', 'obj2').text(answer).appendTo('#label')
                        })
                        
                        $('<button>').addClass('btn btn-primary submit2').text('Submit').appendTo('#quizBody')
                        $('.submit2').click(() => {
                            var checker = $("form input[name='q3']:checked").text();
                console.log(checker)
            if(quizObj[2].correctAnswer === checker){
                yes ++;
            } else{
                no ++;

            }
                        console.log(quizObj[2])


                            // console.log('been clicked', quizObj[3]);
                        $('#quizBody').empty();
                        $('<h2>').text(quizObj[3].question).appendTo('#quizBody');
                        quizObj[3].asked ++
            $('<form>').attr('id', 'label').attr('method', 'post').appendTo('#quizBody')
                        
                        quizObj[3].answers.forEach((answer) => {
                            $('<input>').attr('type', 'radio').attr('id', 'obj3').attr('name', 'q4').text(answer).addClass('radio').appendTo('#label')
                            $('<label>').attr('for', 'obj3').text(answer).appendTo('#label')
                        })
                        $('<button>').addClass('btn btn-primary submit3').text('Submit').appendTo('#quizBody')
                        $('.submit3').click(()=>{

                            var checker = $("form input[name='q4']:checked").text();
                console.log(checker)
            if(quizObj[3].correctAnswer === checker){
                yes ++;
            } else{
                no ++;

            }
                        console.log(quizObj[3])

                            console.log('been clicked', quizObj[4]);
                        $('#quizBody').empty();
                        $('<h2>').text(quizObj[4].question).appendTo('#quizBody');
                        quizObj[4].asked++
            $('<form>').attr('id', 'label').attr('method', 'post').appendTo('#quizBody')
                        
                        quizObj[4].answers.forEach((answer) => {
                        $('<input>').attr('type', 'radio').attr('id', 'obj4').attr('name', 'q5').addClass('radio').text(answer).appendTo('#label')
                        $('<label>').attr('for', 'obj4').text(answer).appendTo('#label')
                        })
                        $('<button>').addClass('btn btn-primary submit4').text('Submit').appendTo('#quizBody')
                         $('.submit4').click(()=>{
                                  var checker = $("form input[name='q5']:checked").text();
                                  console.log(checker, 'this is checker')
                                  if (quizObj[4].correctAnswer === checker) {
                                      yes ++;
                                  } else {
                                      no ++;

                                  }
                                  console.log(quizObj[4])

                            // console.log('been clicked', quizObj[5]);
                        $('#quizBody').empty();
                        $('<h2>').text(quizObj[5].question).appendTo('#quizBody');
                        quizObj[5].asked++
            $('<form>').attr('id', 'label').attr('method', 'post').appendTo('#quizBody')
                        
                        quizObj[5].answers.forEach((answer) => {
                        $('<input>').attr('type', 'radio').attr('id', 'obj5').attr('name', 'q6').text(answer).addClass('radio').appendTo('#label')
                        $('<label>').attr('for', 'obj5').text(answer).appendTo('#label')
                        })
                        $('<button>').addClass('btn btn-primary submit5').text('Submit').appendTo('#quizBody')
                        $('.submit5').click(()=>{
                            $('#quizBody').empty()
                            $('<h1>').text('Results!').appendTo('#quizBody')
                        let checker = $("form input[name='q6']:checked").text();
                    console.log(checker, 'this is checker')
                    if (quizObj[5].correctAnswer === checker) {
                        quizObj[5].correct ++
                              yes ++;
                           } else {
                               no ++;

                           }
                           $('<h1>').text('Correct ' + yes).appendTo('#quizBody')
                           debugger;
                           let finalCorrect = quizObj.filter((obj) => {
                               if(obj.correct === 1){
                                   finalCorrect.push(obj)
                                    console.log(finalCorrect)
                               }
                                
                           })
                          var tester = $('<h1>').text(quizObj[0].question + quizObj[0].correctAnswer).appendTo('#quizBody')
                          console.log(tester)
                           $('<h1>').text('Wrong ' + no).appendTo('#quizBody')
                           console.log(yes, no, 'this is the final tally')
                           
                        })
                        
                        })


                        })
                        })
                    });
                    });
    })


});
