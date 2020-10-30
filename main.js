var gizmo45 = {name: "Oleg", age: 24}
var orizel4ik = {name: "Vasul", age: 11}
function test(){
	var login = document.getElementById('log').value
	var password = document.getElementById('pas').value
	if (login == "gizmo45" && password == 12345){
		console.log(gizmo45)
		window.location = 'gizmo45.html'
	}else if (login == "orizel4ik", password == 12345){
		console.log(orizel4ik)
		window.location = 'orizel4ik.html'
	}else{
		console.log("no way")
		document.getElementById("names").innerHTML = "Password or Login is uncorrectly"
	}
}