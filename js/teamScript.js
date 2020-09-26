var teamMembers_obj = JSON.parse(teamMembers);
var main = document.getElementById("tableMain");
var text = "<table border='2'><thead><tr id='tableHead'><th>Name</th><th>E-Mail</th><th>Image</th></tr></thead><tbody>";
	
for (var i = 0; i < teamMembers_obj.length; i++) {

	text += `<tr id='tableRow${i}'><td>${teamMembers_obj[i].name}</td><td>${teamMembers_obj[i].email}</td><td><img id="person${i}" src="${teamMembers_obj[i].image}"></td></tr>`
}

text += "</tbody></table>";

document.getElementById("teamMain").innerHTML = text;

function extraInfo(person){
	
	var head = document.getElementById("tableHead");
	var headText = document.createElement('th');
	headText.setAttribute("id", "headText");
	head.appendChild(headText);
	document.getElementById("headText").innerHTML = "Nickname";

	for (var i = 0; i < teamMembers_obj.length; i++) {
		var row = document.getElementById("tableRow" + i);
		var newTD = document.createElement('td');
		newTD.setAttribute("id", `tablaData${i}`);
		row.appendChild(newTD);
		var nickname = String(JSON.parse(teamMembers_obj[i].nickname));
		console.log(typeof(nickname));
		/*document.getElementById(`tablaData${i}`).innerHTML = ;*/
	}

	/*var row = document.getElementById(`tableRow0`);
	var newTD = document.createElement('td');
	newTD.setAttribute("id", `tdPerson${person}`);
	row.appendChild(newTD);*/
}

/*for (var i = 0; i < teamMembers_obj.length; i++) {
	document.getElementById(`person${i}`).addEventListener("click", function(){
		extraInfo(i);
	}, false);
}*/

