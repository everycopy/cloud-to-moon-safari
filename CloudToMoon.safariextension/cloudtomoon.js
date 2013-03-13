// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://stackoverflow.com/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
	// Replace all occurences of 'the cloud' with 'the moon'
	v = v.replace(/\bThe Cloud\b/g, "The Moon");
	v = v.replace(/\bThe cloud\b/g, "The moon");
	v = v.replace(/\bthe Cloud\b/g, "the Moon");
	v = v.replace(/\bthe cloud\b/g, "the moon");
	v = v.replace(/\bTHE CLOUD\b/g, "THE MOON");
	
	// Replace all occurences of 'cloud computing' with 'moon computing'
	v = v.replace(/\bCloud Computing\b/g, "Moon Computing");
	v = v.replace(/\bCloud computing\b/g, "Moon computing");
	v = v.replace(/\bcloud Computing\b/g, "moon Computing");
	v = v.replace(/\bcloud computing\b/g, "moon computing");
	v = v.replace(/\bCLOUD COMPUTING\b/g, "MOON COMPUTING");
	    
	textNode.nodeValue = v;
}
