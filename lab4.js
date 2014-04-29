// JavaScript Document

window.onload = init;
//window.addEventListener('load', init);

	function init(e)
	{
		// collect all anchor tags inside of nav
		// add event handler onto each of them
		var links = document.querySelectorAll('#main a'); 
		for(var i=0; i< links.length; i++)
		{
			links[i].onclick = changePic;
		}
		
	
	}
	
	function changePic(e)
	{
	
	e.preventDefault();
	var pic = document.querySelector('#pic');
	pic.src = e.target.href;
	caption.firstChild.nodeValue = e.target.title;
	
	//alert(e.target);
	//pic.src = e.target.href;
	// change the caption
	//caption.firstChild.nodeValue = e.target.title;

	}
