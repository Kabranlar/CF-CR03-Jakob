function calculateInsurance() {
	var insurance = 0;
	var country = document.getElementById("userCountry").value;
	var age = Number(document.getElementById("userAge").value);
	var horsePower = Number(document.getElementById("userPs").value);
	var name = document.getElementById("userName").value;

	if (country == "Austria") {

		insurance = horsePower * 100 / age + 50;

	}else if (country == "Hungary") {

		insurance = horsePower * 120 / age + 100;

	} else{
		insurance = horsePower * 150 / (age + 3) + 50;
	}

	console.log(insurance);
	document.getElementById("calcResult").innerHTML = name + ", your insurance costs " + Math.round(insurance) + "€";
	document.getElementById("calcResult").style.visibility = "visible";
}

document.getElementById("generate").addEventListener("click", calculateInsurance, false);