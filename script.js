async function handleClick(){
    let counter= 0
    if(option==-1){
        let container = document.getElementById("score")
    container.innerHTML = `<h1>Please Choose Any Option `
    return
    }
    while(counter<10){
        console.log(counter)
        await delay(100)
        showAnimation()
        counter++
    }
    let a  = choose()
    if(a==true){
        score++
    }else if(a=="t"){
        compScore++
    }
    let container = document.getElementById("score")
    if(score>2 || compScore>2){
        container.innerHTML =  `<h1>${score>2?"You Win":"Computer Win"}</h1>`
    await delay(3000) 
    score = 0
    compScore = 0
container.innerHTML = `<h1>Your score : ${score}</h1> <h1>Computer Score : ${compScore}</h1>`
        return
    }
    container.innerHTML = `<h1>Your score : ${score}</h1> <h1>Computer Score : ${compScore}</h1>`
}
let score  = 0
let compScore = 0
function choose(){

    let rand =Math.floor( Math.random()*3)
    let container = document.getElementById("computer")
    container.innerHTML  = ""
    let img = document.createElement('img')
    console.log(rand)
    img.src = arr[rand]
    curr=(curr+1)%3
    container.appendChild(img)
    if(option == 0){
        if(rand==1){
            return true
        }else if(rand!==0){
            return 't'
        }
    }else if(option == 1){
        if(rand==2){
            return true
        }else if(rand!==1){
            return 't'
        }
    }else if(option==2) {
        if(rand==0){
            return true
        }else if(rand!==2){
            return 't'
        }
    }
    return false
}
function delay(time){ 
   return  new Promise((res)=>setTimeout(()=>res("Resolved"),time))
}
let option = -1
let curr = 0
let arr = ['paper.png','rock.png','scissors.png']
function showAnimation(){
    let container = document.getElementById("computer")
    container.innerHTML  = ""
    let img = document.createElement('img')
    img.src = arr[curr]
    curr=(curr+1)%3
    container.appendChild(img)
}
let imgs = document.getElementsByClassName('option')
Array.from(imgs).forEach((ee)=>{
    ee.addEventListener("click",(e)=>{
        Array.from(imgs)[0].classList.remove("active")
        
        Array.from(imgs)[1].classList.remove("active")
        Array.from(imgs)[2].classList.remove("active")
        ee.classList.add("active")
        if(e.target.id==1){
            option= 0
        }else if(e.target.id==2){
            option =1
        }else{
            option = 2
        }
    })
})
let hour = null
let minute=  null
let set = new Set()
function stopTime(){
    let tone = document.getElementById("tone")
        tone.pause()
        document.getElementById("stop-time").style.display = "none"
}
let time1 = document.getElementById("input-time")
time1.value =""
function handleSetAlarm(){
    
    let time12 = document.getElementById("input-time")
   let  time1 = time12.value
    if(time1){
         [hour,minute] = time1.split(":")
         
         set.add(`${hour.length>1 ? hour:"0" + hour}-${minute.length>1 ? minute : "0" + minute}`)
         time12.value =""
        }
        
    }
    function checkAlarm(){
        let currTime = new Date()
        let min =String(currTime.getMinutes())
        let hour =String( currTime.getHours()) 
        console.log(set,`${hour.length>1 ?hour:"0" + hour}-${min.length>1 ? min :"0" + min}`,min.length)
        if(set.has(`${hour.length>1 ?hour:"0" + hour}-${min.length>1 ?min:"0" + min}`)){
            let tone = document.getElementById("tone")
          tone.play()
            set.delete(`${hour.length>1 ?hour:"0" + hour}-${min.length>1 ?min:"0" + min}`)
            tone.loop = true
            document.getElementById("stop-time").style.display = "block"
         
    }
}
document.getElementById("stop-time").style.display = "none"
setInterval(()=>{
    let clock = document.getElementById("time")
    clock.innerHTML = ""
    let currTime = new Date()
    let hourNode = document.createElement("p")
    hourNode.className = "inner-time"
    hourNode.innerHTML = `${currTime.getHours()} : ${currTime.getMinutes()} : ${currTime.getSeconds()}`
    clock.appendChild(hourNode)
    checkAlarm()
},1000)

let quizData;
function shuffle(...options){
    let arr = []
    let set = new Set()
    let i=0
    console.log(options)
    while(i<4){
        let rnd = Math.floor(Math.random()*4)
        console.log(rnd)
        if(!set.has(rnd)){
            arr.push(options[rnd])
            set.add(rnd)
            i++
        }
        // break
    }
    return arr
}
window.onload =async  function (){

    let data =await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
    data=await data.json()
    data=data.results
    // let data  = [
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "When was the Playstation 3 released?",
    //     "correct_answer": "November 11, 2006",
    //     "incorrect_answers": [
    //     "January 8, 2007",
    //     "December 25, 2007",
    //     "July 16, 2006"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "Which American-owned brewery led the country in sales by volume in 2015?",
    //     "correct_answer": "D. G. Yuengling and Son, Inc",
    //     "incorrect_answers": [
    //     "Anheuser Busch",
    //     "Boston Beer Company",
    //     "Miller Coors"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
    //     "correct_answer": "Plum",
    //     "incorrect_answers": [
    //     "Apple",
    //     "Peach",
    //     "Pear"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "Earth is located in which galaxy?",
    //     "correct_answer": "The Milky Way Galaxy",
    //     "incorrect_answers": [
    //     "The Mars Galaxy",
    //     "The Galaxy Note",
    //     "The Black Hole"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;",
    //     "correct_answer": "Print",
    //     "incorrect_answers": [
    //     "Digest",
    //     "Look",
    //     "Read"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "Red Vines is a brand of what type of candy?",
    //     "correct_answer": "Licorice",
    //     "incorrect_answers": [
    //     "Lollipop",
    //     "Chocolate",
    //     "Bubblegum"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "What kind of aircraft was developed by Igor Sikorsky in the United States in 1942?",
    //     "correct_answer": "Helicopter",
    //     "incorrect_answers": [
    //     "Stealth Blimp",
    //     "Jet",
    //     "Space Capsule"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "Five dollars is worth how many nickles?",
    //     "correct_answer": "100",
    //     "incorrect_answers": [
    //     "50",
    //     "25",
    //     "69"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "What is the closest planet to our solar system&#039;s sun?",
    //     "correct_answer": "Mercury",
    //     "incorrect_answers": [
    //     "Mars",
    //     "Jupiter",
    //     "Earth"
    //     ]
    //     },
    //     {
    //     "type": "multiple",
    //     "difficulty": "easy",
    //     "category": "General Knowledge",
    //     "question": "The &ldquo;fairy&rdquo; type made it&rsquo;s debut in which generation of the Pokemon core series games?",
    //     "correct_answer": "6th",
    //     "incorrect_answers": [
    //     "2nd",
    //     "7th",
    //     "4th"
    //     ]
    //     }
    //     ]
    console.log(data)
    // shuffle(data[0].correct_answer , ...data[0].incorrect_answers)
    for(let i of data){
        i.options = shuffle(i.correct_answer , ...i.incorrect_answers)
    }
    quizData = data
    loadQuestion()
}
async function update(){
    
    let data =await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    data=await data.json()
    data=data.results
 
    console.log(data)
    for(let i of data){
        i.options = shuffle(i.correct_answer , ...i.incorrect_answers)
    }
    quizData = data
}
let currentQuestionIndex = 0;
let score1 = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    document.getElementById('question-text').innerText = currentQuestion.question;
    
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
        btn.innerHTML = currentQuestion.options[index];
        btn.classList.remove("active-btn")
    });

    document.getElementById('next-btn').disabled = true;
}
let ans = null
function selectAnswer(selectedIndex) {
    ans = selectedIndex
 

    const answerButtons = document.querySelectorAll('.answer-btn');
    console.log(answerButtons)
    answerButtons.forEach((btn,index) => {
        btn.classList.remove("active-btn")
        if(index==selectedIndex){
            btn.classList.add("active-btn")
        }
        console.log(btn.disabled)
    });
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    console.log(currentQuestion)
    if (ans === currentQuestion.options.indexOf(currentQuestion.correct_answer)) {
        score1++;
        ans = null
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('final-score').innerText = score1 + " / " + quizData.length;

}

function restartQuiz() {
    score1 = 0;
    currentQuestionIndex = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('score-container').style.display = 'none';
    update()
    loadQuestion();
}






// script.js
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
const board = document.getElementById('board');

let currentPlayer = 'X';  // 'X' is the human player
let gameBoard = Array(9).fill(null);  // Array to track the game state
let isGameOver = false;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add event listeners to each cell
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Handle player move
function handleCellClick(event) {
    const index = event.target.getAttribute('data-cell-index');
    
    if (gameBoard[index] !== null || isGameOver) return;  // Ignore if the cell is already taken or the game is over
    
    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWinner()) {
        displayWinningLine();
        setTimeout(() => {
            alert(`${currentPlayer} wins!`);
            resetGame();
        }, 500);
    } else if (gameBoard.every(cell => cell !== null)) {
        setTimeout(() => {
            alert('It\'s a draw!');
            resetGame();
        }, 500);
    } else {
        currentPlayer = 'O';  // Switch to computer's turn
        computerMove();
    }
}

// Computer makes its move
function computerMove() {
    const availableCells = gameBoard
        .map((value, index) => value === null ? index : null)
        .filter(value => value !== null);
    
    const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    gameBoard[randomIndex] = 'O';
    cells[randomIndex].textContent = 'O';

    if (checkWinner()) {
        displayWinningLine();
        setTimeout(() => {
            alert('Computer wins!');
            resetGame();
        }, 500);
    } else if (gameBoard.every(cell => cell !== null)) {
        setTimeout(() => {
            alert('It\'s a draw!');
            resetGame();
        }, 500);
    } else {
        currentPlayer = 'X';  
    }
}

function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function displayWinningLine() {
    const winningCombination = winningCombinations.find(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });

    if (winningCombination) {
        const [a, b, c] = winningCombination;
        const line = document.createElement('div');
        line.classList.add('winning-line');
        
        // Calculate position of winning line
        if (a === 0 && b === 1 && c === 2 || a === 3 && b === 4 && c === 5 || a === 6 && b === 7 && c === 8) {
            line.classList.add('horizontal');
        } else if (a === 0 && b === 3 && c === 6 || a === 1 && b === 4 && c === 7 || a === 2 && b === 5 && c === 8) {
            line.classList.add('vertical');
        } else if (a === 0 && b === 4 && c === 8 || a === 2 && b === 4 && c === 6) {
            line.classList.add(a === 0 ? 'diagonal-left' : 'diagonal-right');
        }
        
        board.appendChild(line);
    }
}

resetButton.addEventListener('click', resetGame);

function resetGame() {
    gameBoard = Array(9).fill(null);
    currentPlayer = 'X';  // Player starts first
    isGameOver = false;
    // cells.forEach(cell => cell.textContent = '');
    const line = document.querySelector('.winning-line');
    // if (line) line.remove();
}
