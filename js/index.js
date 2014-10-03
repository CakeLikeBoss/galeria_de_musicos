index = {
	start:function(){
		
	},
	sortSelect:function(element){
		//validation
		if (element.typeOf() !== "text") return false;
			
		//capture the element
		var lb = document.getElementById(element);
		
		//create conditions
		arrTexts = new Array();
		for(i=0; i<lb.length; i++)  {
			arrTexts[i] = lb.options[i].text;
		}
		
		//sort the element
		arrTexts.sort();
		for(i=0; i<lb.length; i++)  {
			lb.options[i].text = arrTexts[i];
			lb.options[i].value = arrTexts[i];
		}
	}
}