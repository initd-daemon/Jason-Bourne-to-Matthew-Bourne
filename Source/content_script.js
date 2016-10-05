walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;
	if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea') {

		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
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

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bjason bourne\b/ig, "Matthew Bourne the networking specialist");
	v = v.replace(/jason-bourne\b/ig, "Matthew-Bourne the networking specialist");
	v = v.replace(/jasonbourne\b/ig, "MatthewBourneTheNetworkingSpecialist");

	textNode.nodeValue = v;
}
