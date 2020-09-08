const sentence = ['1+1','1-1','1*1','1/1'];
const operations = ['+','-','/','*'];
const j = sentence.length;
const k = operations.length;
//Select operation and compute
var compute = (a,b,operation) => {
	switch(operation){
		case '+' : 
			return a+b;
			break;
		case '-' :
			return a-b;
			break;
		case '*' :
			return a*b;
		case '/' :
			var division = b == 0 ? 'Can\'t divide by 0' :  a/b; 
			return division; 
	}
}
//Split expression, call compute and show results
var result = (sentence,operations,k) => {
	for(var i = 0 ; i<k ; i++){
		if(sentence.indexOf(operations[i]) !== -1){
			var expression = sentence.split(operations[i])
			var operation = operations[i];
		}
	}
	console.log(`${expression[0]} ${operation} ${expression[1]} = ${compute(+expression[0],+expression[1],operation)}`);
}
//Compute everithyng inside sentences array
var computeAll = (sentence,operations,j) => {
	for(var i = 0 ; i<j ; i++)
		result(sentence[i],operations,k);
}
computeAll(sentence,operations,k);
result(sentence[0],operations,k);
document.write("<div class='square'></div>")
