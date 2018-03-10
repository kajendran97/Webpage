function Quiz(question) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex=function() {
	//console.log(this.questionIndex)
	//console.log(this.questions[this.questionIndex])
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
	return this.questions.lenghth === this.questionIndex;
}

Quiz.prototype.guess=function(answer){
	
	console.log(this.getQuestionIndex().answer)
	console.log(answer)
	if(this.getQuestionIndex().answer == answer ){
		console.log("this is in")
		this.score = this.score + 2;
	}else{
		console.log("this is out");
		this.score = this.score - 1;
	}
	this.questionIndex = this.questionIndex + 1;
}