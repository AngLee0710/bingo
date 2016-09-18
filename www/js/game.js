var a = getBingoMathFunc(); //抓取亂數Func
var userArray = new Array(25); //player選取的數字
var computerArray = new Array(25); //電腦抓取到的亂數
var chioseArray = new Array(25); //電腦選號的位置
var tempcheck = 0; //暫存選取的數字
var autoMove = true;
var autoTemp =0;

var app = {
    initialize: function() {
        var abc = getRandomArrayByAuto();
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
    		$("#userSelf").append("<a class='bingoBtnStyle_" + (i+1) + "' id='userSlefBtn_" + (i+1) +"'>" + userArray[i] + "</a>");    	
    		if ((i == 4) || (i == 9) || (i == 14) || (i == 19) || (i == 24))
    			$("#userSelf").append("<br />");
    	}
        this.computerBuild();
   	},
    computerBuild: function() {
        for (var i = 0 ; i < 25 ; i++)
        {
            $("#anotherPlayer").append("<a class='comBingoBtnStyle_" + (i+1) + "' id='computerBtn_" + (i+1) +"'>" + computerArray[i] + "</a>");

            if ((i == 4) || (i == 9) || (i == 14) || (i == 19) || (i == 24))
                $("#anotherPlayer").append("<br />");
        }
        var b = getRandomArray();
        this.chioseMath();
    },
    chioseMath: function() {
        if (autoMove){
            userSlefBtn_1.addEventListener('click' , this.calc_1, false);
            userSlefBtn_2.addEventListener('click' , this.calc_2, false);
            userSlefBtn_3.addEventListener('click' , this.calc_3, false);
            userSlefBtn_4.addEventListener('click' , this.calc_4, false);
            userSlefBtn_5.addEventListener('click' , this.calc_5, false);
            userSlefBtn_6.addEventListener('click' , this.calc_6, false);
            userSlefBtn_7.addEventListener('click' , this.calc_7, false);
            userSlefBtn_8.addEventListener('click' , this.calc_8, false);
            userSlefBtn_9.addEventListener('click' , this.calc_9, false);
            userSlefBtn_10.addEventListener('click' , this.calc_10, false);
            userSlefBtn_11.addEventListener('click' , this.calc_11, false);
            userSlefBtn_12.addEventListener('click' , this.calc_12, false);
            userSlefBtn_13.addEventListener('click' , this.calc_13, false);
            userSlefBtn_14.addEventListener('click' , this.calc_14, false);
            userSlefBtn_15.addEventListener('click' , this.calc_15, false);
            userSlefBtn_16.addEventListener('click' , this.calc_16, false);
            userSlefBtn_17.addEventListener('click' , this.calc_17, false);
            userSlefBtn_18.addEventListener('click' , this.calc_18, false);
            userSlefBtn_19.addEventListener('click' , this.calc_19, false);
            userSlefBtn_20.addEventListener('click' , this.calc_20, false);
            userSlefBtn_21.addEventListener('click' , this.calc_21, false);
            userSlefBtn_22.addEventListener('click' , this.calc_22, false);
            userSlefBtn_23.addEventListener('click' , this.calc_23, false);
            userSlefBtn_24.addEventListener('click' , this.calc_24, false);
            userSlefBtn_25.addEventListener('click' , this.calc_25, false);
        }
    },
    calc_1: function() {
        tempcheck = userSlefBtn_1.innerHTML;
        
        userSlefBtn_1.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_2: function() {
        tempcheck = userSlefBtn_2.innerHTML;
        
        userSlefBtn_2.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_3: function() {
        tempcheck = userSlefBtn_3.innerHTML;
        
        userSlefBtn_3.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_4: function() {
        tempcheck = userSlefBtn_4.innerHTML;
        
        userSlefBtn_4.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_5: function() {
        tempcheck = userSlefBtn_5.innerHTML;
        
        userSlefBtn_5.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_6: function() {
        tempcheck = userSlefBtn_6.innerHTML;
        
        userSlefBtn_6.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_7: function() {
        tempcheck = userSlefBtn_7.innerHTML;
        
        userSlefBtn_7.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_8: function() {
        tempcheck = userSlefBtn_8.innerHTML;
        
        userSlefBtn_8.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_9: function() {
        tempcheck = userSlefBtn_9.innerHTML;
        
        userSlefBtn_9.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_10: function() {
        tempcheck = userSlefBtn_10.innerHTML;
        
        userSlefBtn_10.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_11: function() {
        tempcheck = userSlefBtn_11.innerHTML;
        
        userSlefBtn_11.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_12: function() {
        tempcheck = userSlefBtn_12.innerHTML;
        
        userSlefBtn_12.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_13: function() {
        tempcheck = userSlefBtn_13.innerHTML;
        
        userSlefBtn_13.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_14: function() {
        tempcheck = userSlefBtn_14.innerHTML;
        
        userSlefBtn_14.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_15: function() {
        tempcheck = userSlefBtn_15.innerHTML;
        
        userSlefBtn_15.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_16: function() {
        tempcheck = userSlefBtn_16.innerHTML;
        
        userSlefBtn_16.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_17: function() {
        tempcheck = userSlefBtn_17.innerHTML;
        
        userSlefBtn_17.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_18: function() {
        tempcheck = userSlefBtn_18.innerHTML;
        
        userSlefBtn_18.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_19: function() {
        tempcheck = userSlefBtn_19.innerHTML;
        
        userSlefBtn_19.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_20: function() {
        tempcheck = userSlefBtn_20.innerHTML;
        
        userSlefBtn_20.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_21: function() {
        tempcheck = userSlefBtn_21.innerHTML;
        
        userSlefBtn_21.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_22: function() {
        tempcheck = userSlefBtn_22.innerHTML;
        
        userSlefBtn_22.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_23: function() {
        tempcheck = userSlefBtn_23.innerHTML;
        
        userSlefBtn_23.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_24: function() {
        tempcheck = userSlefBtn_24.innerHTML;
        
        userSlefBtn_24.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    calc_25: function() {
        tempcheck = userSlefBtn_25.innerHTML;
        
        userSlefBtn_25.innerHTML = "";
        autoMove = true;
        app.computerMove();
    },
    computerMove: function() {
        //player選號 電腦紅背景
        for(var i = 1 ; i <26 ; i++)
        {
            if(computerArray[i-1] == tempcheck)
                $("#computerBtn_" + i).css("background" , "red");
           
            if(chioseArray[i-1] == tempcheck)
                chioseArray[i-1] = -1;
        }
        //電腦選號 player號碼消失 電腦紅背景
        for(var i = 0 ; i < 25 ; i++)
        {
            var k = i+1;
            if(chioseArray[i] != -1)
            {
                autoTemp = chioseArray[i];
                chioseArray[i] = -1;
                alert(autoTemp);
                break;
            }
        }
        for(var i = 1 ; i < 26 ; i++)
        {
            if(computerArray[i-1] == autoTemp)
            {
                $("#computerBtn_" + i).css("background" , "red");
            }
        }
        for(var i = 1 ; i < 26 ; i++)
        {
            if(document.getElementById("userSlefBtn_" + i).innerHTML == autoTemp)
            {
                document.getElementById("userSlefBtn_" + i).innerHTML ="";
                break; 
            }
        }
        autoMove = false;
        app.chioseMath();
    }
}
app.initialize();


//
// 擷取網址的值
//
function getBingoMathFunc() {
	var arg = new Object();

	var query = location.search.substring(1);

	var pairs = query.split(","); ;
	
   return pairs; 
}

function getRandomArray() {    //隨機產生不重覆的n個數字

    for(var i=0; i<25; i++) {
        var rdm = 0;        //暫存的亂數

        do {
            var exist = false;    //此亂數是否已存在
            rdm = Math.floor(Math.random() * (25 - 1 + 1) ) + 1;     //取得亂數,並無條件捨去小數
            
            //檢查亂數是否存在於陣列中，若存在則繼續回圈
            if(computerArray.indexOf(rdm) != -1) exist = true;
 
        } while (exist);    //產生沒出現過的亂數時離開迴圈
 
        computerArray[i] = rdm;
    }
    alert("電腦已佈陣完成!");
}

function getRandomArrayByAuto() {    //隨機產生不重覆的n個數字

    for(var i=0; i<25; i++) {
        var rdmAuto = 0;        //暫存的亂數

        do {
            var existAuto = false;    //此亂數是否已存在
            rdmAuto = Math.floor(Math.random() * (25 - 1 + 1) ) + 1;     //取得亂數,並無條件捨去小數
            
            //檢查亂數是否存在於陣列中，若存在則繼續回圈
            if(chioseArray.indexOf(rdmAuto) != -1) existAuto = true;
 
        } while (existAuto);    //產生沒出現過的亂數時離開迴圈
 
        chioseArray[i] = rdmAuto;
    }
}