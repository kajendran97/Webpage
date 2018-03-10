var questions = [
	
	new Question("Bassoon belong to which musical instrument family?", ["Woodwind", "String", "Percussion", "Brass"], "Woodwind"),
	new Question("What was Justin Bieber's first song released?", ["Sorry", "One Time", "What do you mean", "Baby"], "One Time"),
	new Question("Who received Padma Vibhushan award in 2016 for classical vocal sector?", ["Smt.Girijadevi", "M.Balamuralikrishna", "T.Brinda", "T.N.Sheshagopalan"], "Smt.Girijadevi"),
	new Question("Whose band was the Tijuana Bass?", ["Herb Alpert", "Peggy Lee", "Jerry Lee Lewis", "Frankie Laine"], "Herb Alpert"),
	new Question("Which clarinet is commonly used in an orchestra?", ["C Clarinet", "B flat Clarinet", "F Clarinet", "A Clarinet"], "B flat Clarinet"),
	new Question("Who is the father of the Hindustani music?", ["Ameergusru", "Bhimsen Joshi", "Abdhul Kareem Khan", "Kumar Ghandarva"], "Ameergusru"),
	new Question("What is the instrument used for shruthi in hindustani music?", ["Santoor", "Pakhwaj", "Tambura", "Sitar"], "Tambura"),
	new Question("How many lines does a stave notation has?", ["3", "4", "5", "1"], "5"),
	new Question("What is the raaga of the SriLankan National Anthem? ", ["Kalyani", "Hameer Kalyani", "Behag", "Bhairav"], "Hameer Kalyani"),
	new Question("Which of the following is not a Karnatic music instrument?", ["Mridangam", "Veena", "Flute", "Pakhwaj"], "Pakhwaj"),

];



quiz = new Quiz(questions);
console.log(quiz)
var questionNumber=0;
//populate();
var  timerStart = document.getElementById("timer")
timerStart.addEventListener("click",function(){

document.getElementById("startQuiz").style.display="block"
timerStart.style.display="none"



    if (ontime == 0) {
        ontime = 1;
        increase();
    }
    else {
        ontime = 0;

    }

populate()

})

var timer = 0;
var ontime = 0;

function increase(){
	if (ontime == 1) {
            setTimeout(function () {
                timer++;

                var sec = Math.floor(timer / 10);
                var msec = timer % 10;

                document.getElementById("quizTime").innerHTML = sec + ":" + msec;
                increase();
            }, 100);
    }
}

function populate(){
	
	console.log(quiz.score)
	if(quiz.questionIndex < quiz.questions.length){

		var element = document.getElementById("question");
		//console.log(document.getElementById("quiz"))
		//console.log(element)
		//quiz.questionIndex = questionNumber
		//questionNumber = questionNumber + 1
		//console.log(quiz.getQuestionIndex()['text'])
		element.innerHTML = quiz.getQuestionIndex()['text'];

		 //show choices
		 var choices = quiz.getQuestionIndex()['choices'];
		 for(var i = 0; i<choices.length; i++) {
		 	var element = document.getElementById("choice" + i);
		 	element.innerHTML = choices[i];
		 	guess("btn" + i, choices[i]);
		 }
		 showProgress();

	}else{
		showScores();
		if (ontime == 1) {
        clearInterval(timer);
        ontime = 0;
    }
	}

	// if(quiz.isEnded()){
	// 	//showScore();
	// }else{
	// 	//show question

	// }

};

function guess(id, guess){
	//console.log(id)
	var button = document.getElementById(id);
	//console.log(button)
	button.onclick = function() {
		console.log(button.innerText)
		quiz.guess(button.innerText); 
		populate();    
	}
};

 function showProgress(){
 	var currentQuestionNumber = quiz.questionIndex + 1;
 	var element = document.getElementById("progress");
 	//console.log(quiz.questions)
 	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
 	
 	 }

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "<br>Time : " + document.getElementById("quizTime").innerHTML + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML =gameOverHtml;
};

