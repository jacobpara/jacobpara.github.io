/*
var e = document.getElementById("serve");

function onChange() 
{
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(value, text);
}
e.onchange = onChange;
onChange();
*/


function dropvalid() 
{
	let dropdown = document.getElementByID("serve");   //value is used to change the text at that element
	
	//console.log('Selected value: ' + dropdown);
	
	document.getElementByID("see") = dropdown;
	
	if (dropdown == "select an option") 
	{
		alert("Please select an option from the dropdown.");
		console.log("should return false"); 
		return false;
	}
	console.log("moving to confirmation page"); 
	return true;
}