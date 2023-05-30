const quizData = [
    {
        question: "What is a correct syntax to output 'Hello World' in Python?",
        a: 'echo ("Hello World");',
        b: 'echo "Hello World"',
        c: 'print("Hello World")',
        d: 'p("Hello World")',
        correct: "c",
    },
    {
        question: "What is the correct syntax to declare a variable in Python?",
        a: "var x",
        b: "x = var",
        c: "x = 5",
        d: "int x = 5",
        correct: "c",
    },
    {
        question: "Which data type is used to store a single character in Python?",
        a: "char",
        b: "string",
        c: "character",
        d: "charstring",
        correct: "b",
    },
    {
        question: "What is the result of the following expression: 3 * 2?",
        a: "6",
        b: "5",
        c: "13",
        d: "9",
        correct: "a",
    },
    {
        question: "Which of the following is a valid Python data type?",
        a: "integer",
        b: "float",
        c: "character",
        d: "boolean",
        correct: "b",
    },
    {
        question: "What will be the value of x after the following code is executed? x = 10 + 5 * 2",
        a: "20",
        b: "15",
        c: "30",
        d: "25",
        correct: "d",
    },
    {
        question: "What is the output of the following code? \n numbers = [1, 2, 3, 4, 5] \n total = sum(numbers)\n print(total)",
        a: "125",
        b: "25",
        c: "15",
        d: "55",
        correct: "c",
    },
    {
        question: "How do you check the length of a string in Python?",
        a: "size()",
        b: "length()",
        c: "count()",
        d: "len()",
        correct: "d",
    },
    {
        question: "What does the 'elif' keyword represent in Python?",
        a: "A loop control statement",
        b: "An error handling statement",
        c: "An alternative condition in an if-else statement",
        d: "A built-in function in Python",
        correct: "c",
    },
    {
        question: "Which of the following is the correct syntax for a for loop in Python?",
        a: "for i in range(10):",
        b: "for i = 0; i < 10; i++:",
        c: "for (i = 0; i < 10; i++):",
        d: "for i < 10 in range:",
        correct: "a",
    },
    // {
    //     question: "Which of the following is NOT a valid Python variable name?",
    //     a: "my_variable",
    //     b: "_variable",
    //     c: "2variable",
    //     d: "variable2",
    //     correct: "c",
    // },
    // {
    //     question: "What is the output of the following code? \n for i in range(1, 6): \n  print(i)",
    //     a: "1 2 3 4",
    //     b: "0 1 2 3 4",
    //     c: "1 2 3 4 5",
    //     d: "0 1 2 3",
    //     correct: "c",
    // },
    // {
    //     question: "What is the correct way to define a function in Python?",
    //     a: "function_name()",
    //     b: "def function_name():",
    //     c: "function_name:",
    //     d: "function_name = def():",
    //     correct: "b",
    // },
    // {
    //     question: "Which of the following is a valid way to concatenate two strings in Python?",
    //     a: '"Hello" . "world"',
    //     b: '"Hello" + "world"',
    //     c: '"Hello" & "world"',
    //     d: '"Hello".concat("world")',
    //     correct: "b",
    // },
    // {
    //     question: "Which of the following is the correct way to define a string variable in Python?",
    //     a: "my_string = 'Hello World'",
    //     b: 'my_string = "Hello World"',
    //     c: "my_string = Hello World",
    //     d: "my_string = Hello World",
    //     correct: "d",
    // },
    // {
    //     question: "What is the result of the expression `10 % 3` in Python?",
    //     a: "3",
    //     b: "1",
    //     c: "0.3333333333333333",
    //     d: "10",
    //     correct: "b",
    // },
    // {
    //     question: "What is the result of the expression 3 ** 4 in Python?",
    //     a: "82",
    //     b: "12",
    //     c: "7",
    //     d: "64",
    //     correct: "d",
    // },
    // {
    //     question: "What is the purpose of the else statement in an if-else statement?",
    //     a: "It is used to check multiple conditions.",
    //     b: "It is used to handle exceptions.",
    //     c: "It is executed if the condition in the if statement is true.",
    //     d: "It is executed if none of the conditions in the if statements are true.",
    //     correct: "d",
    // },
    // {
    //     question: "Which operator is used for exponentiation in Python?",
    //     a: "**",
    //     b: "^",
    //     c: "x",
    //     d: "xx",
    //     correct: "a",
    // },
    // {
    //     question: 'What is the output of the following code? \n my_string = "Hello, World!"\n for char in my_string:\n   print(char)',
    //     a: "H, e, l, l, o, ,, , W, o, r, l, d, !",
    //     b: "Hello, World!",
    //     c: "H",
    //     d: "Hello",
    //     correct: "a",
    // },


    

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0


loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        const timestamp = new Date().toLocaleString();
            const scoreData = {
                score: score,
                timestamp: timestamp
            };
            localStorage.setItem('scoreData', JSON.stringify(scoreData));   
            const storedScoreData = localStorage.getItem('scoreData');
            const scoreData1 = JSON.parse(storedScoreData);
            const latestScore = scoreData.score;
            if (latestScore < 8 || latestScore === null || latestScore === 0){
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="clearLocalStorageAndReload()">Try Again?</button>
           `
            }else{
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="navigateToPlayground()">Go to playground</button>
           `
            }

       }
    }
})

function clearLocalStorageAndReload() {
    localStorage.clear();
    location.reload();
  }

  function navigateToPlayground() {
    window.location.href = './playground.html';
  }