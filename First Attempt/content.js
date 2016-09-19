var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace("Millennial", "Snake People");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            } else {
				replacedText = text.replace("there", "Here")
				
				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				} else {
					replacedText = text.replace("Donald", "Asshole");
					
					if (replacedText !== text) {
						element.replaceChild(document.createTextNode(replacedText), node);
					} else {
						replacedText = text.replace("and", "BAND");
						
						if (replacedText !== text) {
							element.replaceChild(document.createTextNode(replacedText), node);
						}
					}
				}
			}
        }
    }
}