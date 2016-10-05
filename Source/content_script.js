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

	v = v.replace(/\bJason Bourne\b/g, "Matthew Bourne the networking specialist");
	v = v.replace(/\bJason bourne\b/g, "Matthew bourne the networking specialist");
	v = v.replace(/\bjason Bourne\b/g, "matthew Bourne the networking specialist");
	v = v.replace(/\bjason bourne\b/g, "matthew bourne the networking specialist");

	textNode.nodeValue = v;
}
