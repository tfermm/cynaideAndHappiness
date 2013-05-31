var url = "";
var images = document.getElementById("maincontent").getElementsByTagName("img");
for (var i = 0; i < images.length; i++){
	if (images[i].getAttribute("alt") != null && images[i].getAttribute("alt") != undefined ){
		url = images[i].getAttribute("src");
		break;
	}
}
var divs = document.body.childNodes
for (var i = 0; i < divs.length; i++){
	element = divs[i];
	element.parentNode.removeChild(element);
}
var title = document.head.getElementsByTagName('title');
var comicNum = Number(title[0].innerHTML.match(/\d+\.?\d*/g));

var img = document.createElement('img');
var script = document.createElement('script');
var next = document.createElement('a');
var prev = document.createElement('a');
var br = document.createElement('div');
var div = document.createElement('div');

div.setAttribute('style', 'margin-top:2em;');

script.setAttribute('type', 'text/javascript');
// same script from explosm.net
var js = document.createTextNode('<script type="text/javascript">document.onkeydown = function(e) {e = e || window.event;switch (e.keyCode) {case 37:document.location.href = "/comics/' + (comicNum - 1) + '/";break;case 39:document.location.href = "/comics/' + (comicNum+1) + '/";break;}};</script>');

br.setAttribute('style', 'margin-top:2em;margin-bottom:2em;');

next.setAttribute('href',"http://www.explosm.net/comics/" + comicNum + 1 + "/" );
prev.setAttribute('href',"http://www.explosm.net/comics/" + (comicNum - 1) + "/" );

prev.setAttribute('style','margin-right:1em;padding: 10px 15px;background: #4479BA;color: #FFF;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;border: solid 1px #20538D;text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);-moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);');
next.setAttribute('style','margin-left:1em;padding: 10px 15px;background: #4479BA;color: #FFF;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;border: solid 1px #20538D;text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);-moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);');

var nextText = document.createTextNode("Next");
var prevText = document.createTextNode("Prev");

next.appendChild(nextText);
prev.appendChild(prevText);

img.setAttribute('src',url);

div.appendChild(br);
div.appendChild(prev);
div.appendChild(next);
div.appendChild(br);
div.appendChild(img);

document.body.appendChild(div);
