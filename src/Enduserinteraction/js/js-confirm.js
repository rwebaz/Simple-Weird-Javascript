var method = new String();
method = "\"Wow! Look at that!\"";

if(confirm("Do you agree 'i' is a wonderful creature? If so, press the OK button.")==true){
	document.write('Alrighty then ... ! Let\'s move forward!');
	}else{
	document.write('I see ... you\'re not ready just yet.<br>Ok, let\'s try this then ...<br>New ' + method +  '<br>Executing ...');
	}
