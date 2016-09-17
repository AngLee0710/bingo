var a = getBingoMathFunc();
var gameArray = new Array(25);
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
    	for (var i = 24 ; i >= 0 ; i--)
    	{
    		gameArray[i] = a.pop()-1;
    	}
    	this.startToGame();
    },
    startToGame: function() {
    	for (var i = 0 ; i < 25 ; i++)
    	{
    		
    		$("#gameStart").append("<a class='bingoBtn' id='bingoBtn_" + (i+1) +"'>" + gameArray[i] + "</a>");
    	
    		if ((i == 4) || (i == 9) || (i == 14) || (i == 19) || (i == 24))
    			$("#gameStart").append("<br />");
    	}
   	}
}
app.initialize();

function getBingoMathFunc() {
	var arg = new Object();

	var query = location.search.substring(1);

	var pairs = query.split(","); ;
	
   return pairs; 
}