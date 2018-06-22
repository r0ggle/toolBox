/*	toolBox.js
	22.jun.2018:
		Written by Ruairi Gann.
*/

var t = {

	/*
		getElement function acts as a shortcut for document.getElementById().
		[0] id = String, id of HTML element.
		return = Object, reference to HTML element.
	*/
	var getElement = function(id)
	{
		'use strict';
		if (typeof id != 'undefined') {
			return document.getElementById(id);
		}
	}, // end of getElement function.


	/*
		setText function is used to update the text of an HTML element.
		[0] element = Object, reference to HTML element.
		[1] message = String/Number, to be set as element content.
	*/
	var setText = function(element, message)
	{
		'use strict';
		if (typeof arguments[0] != 'object') return undefined;
		if (typeof arguments[1] == 'string') {
			if (arguments[1] == '') return undefined;
		} else if (typeof arguments[1] != 'number') return undefined;
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else output.innerText = message;
	} // End of setText() function.

};