function getgrade(){
	var physics = Number(document.getElementById("Physics").value);
	var chemistry = Number(document.getElementById("Chemistry").value);
	var maths = Number(document.getElementById("Mathematics").value);
	var biology = Number(document.getElementById("Biology").value);
	var english = Number(document.getElementById("English").value);
	var hindi = Number(document.getElementById("Hindi").value);
	var total= eval(physics+chemistry+maths+biology+english+hindi);
	var percentage= Number(eval(total/600*100));
	if(percentage>=90){
		document.getElementById("result").innerHTML="Out of 600 your total is "+total+". Your percentage is "+percentage+". Your grade is A and you are pass.";
	}
	else if(percentage>=75 && percentage<90){
		document.getElementById("result").innerHTML="Out of 600 your total is "+total+". Your percentage is "+percentage+". Your grade is B and you are pass.";
	}
	else if(percentage>=50 && percentage<75){
		document.getElementById("result").innerHTML="Out of 600 your total is "+total+". Your percentage is "+percentage+". Your grade is C and you are pass.";
	}
	else if(percentage>=35 && percentage<50){
		document.getElementById("result").innerHTML="Out of 600 your total is "+total+". Your percentage is "+percentage+". Your grade is D and you are pass.";
	}
	else if(percentage<35 && percentage>0){
		document.getElementById("result").innerHTML="Out of 600 your total is "+total+". Your percentage is "+percentage+". Your grade is E0 and you are fail.";
	}
	else{
		document.getElementById("result").innerHTML="Invalid credentials";
	}
}