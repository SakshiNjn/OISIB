let conbtn = document.querySelector('#button');
let input = document.querySelector('#inp');
let output = document.querySelector('#out');
let from = document.querySelector('#from');
let to = document.querySelector('#to');

conbtn.addEventListener
(
	"click",
	() =>
	{
        if(from.value=="Celsius" && to.value=="Celsius")
            output.value = (parseFloat(input.value));
		else if(from.value=="Celsius" && to.value=="Fahrenheit")
			output.value = (parseFloat(input.value) * 1.8) + 32;
		else if (from.value=="Celsius" && to.value=="Kelvin")
			output.value = (parseFloat(input.value) + 273.15);
        else if(from.value=="Fahrenheit" && to.value=="Fahrenheit")
			output.value = (parseFloat(input.value));
		else if (from.value=="Fahrenheit" && to.value=="Celsius")
			output.value = (parseFloat(input.value) - 32) / 1.8;
        else if (from.value=="Fahrenheit" && to.value=="Kelvin")
			output.value = ((parseFloat(input.value) - 32)/ 1.8 ) + 273.15;
		else if (from.value=="Kelvin" && to.value=="Kelvin")
			output.value = (parseFloat(input.value));
		else if (from.value=="Kelvin" && to.value=="Celsius")
			output.value = (parseFloat(input.value) - 273.15);
		else 
			output.value = ((parseFloat(input.value) - 273.15) * 1.8) + 32;	
	}
);