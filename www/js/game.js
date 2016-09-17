var a = getBingoMathFunc();

var userArray = new Array(25);
var computerArray = new Array(25);

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
    	for (var i = 24 ; i >= 0 ; i--)
    	{
    		userArray[i] = a.pop()-1;
    	}
    	this.startToGame();
    },
    startToGame: function() {
    	for (var i = 0 ; i < 25 ; i++)
    	{
    		
    		$("#gameStart").append("<a class='bingoBtn' id='bingoBtn_" + (i+1) +"'>" + userArray[i] + "</a>");
    	
    		if ((i == 4) || (i == 9) || (i == 14) || (i == 19) || (i == 24))
    			$("#gameStart").append("<br />");
    	}
        this.computerBuild();
   	},
    computerBuild: function() {
        var b = getRandomArray();
    }
}
app.initialize();

function getBingoMathFunc() {
	var arg = new Object();

	var query = location.search.substring(1);

	var pairs = query.split(","); ;
	
   return pairs; 
}

function getRandomArray() {    //隨機產生不重覆的n個數字
    var rdmArray = new Array(25);     //儲存產生的陣列
 
    for(var i=0; i<25; i++) {
        var rdm = 0;        //暫存的亂數

        do {
            var exist = false;    //此亂數是否已存在
            rdm = Math.floor(Math.random() * (25 - 1 + 1) ) + 1;     //取得亂數
            
            //檢查亂數是否存在於陣列中，若存在則繼續回圈
            if(computerArray.indexOf(rdm) != -1) exist = true;
 
        } while (exist);    //產生沒出現過的亂數時離開迴圈
 
        computerArray[i] = rdm;
    }
    alert("電腦已佈陣完成!");
}