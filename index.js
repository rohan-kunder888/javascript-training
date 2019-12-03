
	function namecheck(){
		var pattern1 = /^[a-zA-Z\s]+$/;
		var name = (document.getElementById("nameinput").value);
		var result=pattern1.test(name);
		
		if (result)
		{
			document.getElementById("namevalidation").innerHTML = "<span style=\"color:green\">" +" Name Validated" + "</span>" ;
		}
		else{
			document.getElementById("namevalidation").innerHTML = "<span style=\"color:red\">" +"Enter a valid Name" + "</span>" ;
		}
	}


	function agecheck(){
		var pattern2 = /^\S[0-9]{0,3}$/;
		var age = (document.getElementById("ageinput").value);
		var result1=pattern2.test(age);
		
		if (result1){
			document.getElementById("agevalidation").innerHTML = "<span style=\"color:green\">" +"Age Validated" + "</span>" ;
		}
		else{
			document.getElementById("agevalidation").innerHTML = "<span style=\"color:red\">" + "Enter a Valid age" + "</span>" ;
		}
	}


	function resetfields() {
		document.getElementById("namevalidation").innerHTML = " " ;
		document.getElementById("nameinput").innerHTML = " ";

		document.getElementById("agevalidation").innerHTML =  " " ;
		document.getElementById("ageinput").innerHTML=" ";
	}
	

	document.getElementById("addbutton").addEventListener("click" , namecheck);
	document.getElementById("addbutton").addEventListener("click" , agecheck);
	document.getElementById("resetbutton").addEventListener("click" , resetfields);
