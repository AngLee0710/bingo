var a = getBingoMathFunc(); //抓取亂數Func
var userArray = new Array(25); //player選取的數字
var computerArray = new Array(25); //電腦抓取到的亂數
var chioseArray = new Array(25); //電腦選號的位置
var tempcheck = 0; //暫存player選取的數字
var autoMove = true;
var autoTemp = 0; //暫存computer選取的數字
var judgeForUser = new Array(25);
var app = {
    initialize: function() {
        var abc = getRandomArrayByAuto();
        for (var i = 0 ; i < 25 ; i ++)
            judgeForUser[i] = 0;
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
        if(judgeForUser[0] == -1)
            app.chioseMath();
        else{
            judgeForUser[0] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_2: function() {
        tempcheck = userSlefBtn_2.innerHTML;
        
        userSlefBtn_2.innerHTML = "";
        autoMove = true;
        if(judgeForUser[1] == -1)
            app.chioseMath();
        else{
            judgeForUser[1] = -1;
            app.judgeWithPlayer();           
        }

    },
    calc_3: function() {
        tempcheck = userSlefBtn_3.innerHTML;
        
        userSlefBtn_3.innerHTML = "";
        autoMove = true;
        if(judgeForUser[2] == -1)
            app.chioseMath();
        else{
           judgeForUser[2] = -1;
            app.judgeWithPlayer(); 
        }
    },
    calc_4: function() {
        tempcheck = userSlefBtn_4.innerHTML;
        
        userSlefBtn_4.innerHTML = "";
        autoMove = true;
        if(judgeForUser[3] == -1)
            app.chioseMath();
        else{
            judgeForUser[3] = -1;
            app.judgeWithPlayer();
        }

    },
    calc_5: function() {
        tempcheck = userSlefBtn_5.innerHTML;
        
        userSlefBtn_5.innerHTML = "";
        autoMove = true;
        if(judgeForUser[4] == -1)
            app.chioseMath();
        else{
            judgeForUser[4] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_6: function() {
        tempcheck = userSlefBtn_6.innerHTML;
        
        userSlefBtn_6.innerHTML = "";
        autoMove = true;
        if(judgeForUser[5] == -1)
            app.chioseMath();
        else{
            judgeForUser[5] = -1;
            app.judgeWithPlayer();            
        }

    },
    calc_7: function() {
        tempcheck = userSlefBtn_7.innerHTML;
        
        userSlefBtn_7.innerHTML = "";
        autoMove = true;
        if(judgeForUser[6] == -1)
            app.chioseMath();
        else{
            judgeForUser[6] = -1;
            app.judgeWithPlayer();
        }

    },
    calc_8: function() {
        tempcheck = userSlefBtn_8.innerHTML;
        
        userSlefBtn_8.innerHTML = "";
        autoMove = true;
        if(judgeForUser[7] == -1)
            app.chioseMath();
        else{
            judgeForUser[7] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_9: function() {
        tempcheck = userSlefBtn_9.innerHTML;
        
        userSlefBtn_9.innerHTML = "";
        autoMove = true;
        if(judgeForUser[8] == -1)
            app.chioseMath();
        else{
            judgeForUser[8] = -1;
            app.judgeWithPlayer();
        }
        
    },
    calc_10: function() {
        tempcheck = userSlefBtn_10.innerHTML;
        
        userSlefBtn_10.innerHTML = "";
        autoMove = true;
        if(judgeForUser[9] == -1)
            app.chioseMath();
        else{
            judgeForUser[9] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_11: function() {
        tempcheck = userSlefBtn_11.innerHTML;
        
        userSlefBtn_11.innerHTML = "";
        autoMove = true;
        if(judgeForUser[10] == -1)
            app.chioseMath();
        else{
            judgeForUser[10] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_12: function() {
        tempcheck = userSlefBtn_12.innerHTML;
        
        userSlefBtn_12.innerHTML = "";
        autoMove = true;
        if(judgeForUser[11] == -1)
            app.chioseMath();
        else{
            judgeForUser[11] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_13: function() {
        tempcheck = userSlefBtn_13.innerHTML;
        
        userSlefBtn_13.innerHTML = "";
        autoMove = true;
        if(judgeForUser[12] == -1)
            app.chioseMath();
        else{
            judgeForUser[12] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_14: function() {
        tempcheck = userSlefBtn_14.innerHTML;
        
        userSlefBtn_14.innerHTML = "";
        autoMove = true;
        if(judgeForUser[13] == -1)
            app.chioseMath();
        else{
            judgeForUser[13] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_15: function() {
        tempcheck = userSlefBtn_15.innerHTML;
        
        userSlefBtn_15.innerHTML = "";
        autoMove = true;
        if(judgeForUser[14] == -1)
            app.chioseMath();
        else{
            judgeForUser[14] = -1;
            app.judgeWithPlayer();        
        }
    },
    calc_16: function() {
        tempcheck = userSlefBtn_16.innerHTML;
        
        userSlefBtn_16.innerHTML = "";
        autoMove = true;
        if(judgeForUser[15] == -1)
            app.chioseMath();
        else{
            judgeForUser[15] = -1;
            app.judgeWithPlayer();            
        }
    },
    calc_17: function() {
        tempcheck = userSlefBtn_17.innerHTML;
        
        userSlefBtn_17.innerHTML = "";
        autoMove = true;
        if(judgeForUser[16] == -1)
            app.chioseMath();
        else{
            judgeForUser[16] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_18: function() {
        tempcheck = userSlefBtn_18.innerHTML;
        
        userSlefBtn_18.innerHTML = "";
        autoMove = true;
        if(judgeForUser[17] == -1)
            app.chioseMath();
        else{
            judgeForUser[17] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_19: function() {
        tempcheck = userSlefBtn_19.innerHTML;
        
        userSlefBtn_19.innerHTML = "";
        autoMove = true;
        if(judgeForUser[18] == -1)
            app.chioseMath();
        else{
            judgeForUser[18] = -1;
            app.judgeWithPlayer(); 
        }

    },
    calc_20: function() {
        tempcheck = userSlefBtn_20.innerHTML;
        
        userSlefBtn_20.innerHTML = "";
        autoMove = true;
        if(judgeForUser[19] == -1)
            app.chioseMath();
        else{
            judgeForUser[19] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_21: function() {
        tempcheck = userSlefBtn_21.innerHTML;
        
        userSlefBtn_21.innerHTML = "";
        autoMove = true;
        if(judgeForUser[20] == -1)
            app.chioseMath();
        else{
           judgeForUser[20] = -1;
            app.judgeWithPlayer(); 
        }   
    },
    calc_22: function() {
        tempcheck = userSlefBtn_22.innerHTML;
        
        userSlefBtn_22.innerHTML = "";
        autoMove = true;
        if(judgeForUser[21] == -1)
            app.chioseMath();
        else{
            judgeForUser[21] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_23: function() {
        tempcheck = userSlefBtn_23.innerHTML;
        
        userSlefBtn_23.innerHTML = "";
        autoMove = true;
        if(judgeForUser[22] == -1)
            app.chioseMath();
        else{
            judgeForUser[22] = -1;
            app.judgeWithPlayer();
        }
        
    },
    calc_24: function() {
        tempcheck = userSlefBtn_24.innerHTML;
        
        userSlefBtn_24.innerHTML = "";
        autoMove = true;
        if(judgeForUser[23] == -1)
            app.chioseMath();
        else{
            judgeForUser[23] = -1;
            app.judgeWithPlayer();
        }
    },
    calc_25: function() {
        tempcheck = userSlefBtn_25.innerHTML;
        
        userSlefBtn_25.innerHTML = "";
        autoMove = true;
        if(judgeForUser[24] == -1)
            app.chioseMath();
        else{
            judgeForUser[24] = -1;
            app.judgeWithPlayer();            
        }
    },
    computerMove: function() {
        //player選號 電腦紅背景
        for(var i = 1 ; i <26 ; i++)
        {
            if(computerArray[i-1] == tempcheck)
            {
                $("#computerBtn_" + i).css("background" , "red");
                computerArray[i-1] = -1;
            }
           
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
                break;
            }
        }
        for(var i = 1 ; i < 26 ; i++)
        {
            if(computerArray[i-1] == autoTemp)
            {
                $("#computerBtn_" + i).css("background" , "red");
                computerArray[i-1] = -1;
            }
        }
        for(var i = 1 ; i < 26 ; i++)
        {
            if(document.getElementById("userSlefBtn_" + i).innerHTML == autoTemp)
            {
                document.getElementById("userSlefBtn_" + i).innerHTML ="";
                judgeForUser[i-1] = -1;
                break; 
            }
        }
        autoMove = false;
        app.judgeWithComputer();
    },
    judgeWithComputer: function() {
        var temp_1 = 0;
        var temp_2 = 0;
        var temp_3 = 0;
        var temp_4 = 0;
        var temp_5 = 0;
        var temp_6 = 0;
        var temp_7 = 0;
        var temp_8 = 0;
        var temp_9 = 0;
        var temp_10 = 0;
        var temp_11 = 0;
        var temp_12 = 0;
        var combo_1 = 0;
        var combo_2 = 0;
        var combo_3 = 0;
        var combo_4 = 0;
        var combo_5 = 0;
        var combo_6 = 0;
        var combo_7 = 0;
        var combo_8 = 0;
        var combo_9 = 0;
        var combo_10 = 0;
        var combo_11 = 0;
        var combo_12 = 0;
        for(var i = 0 ; i < 5 ; i++)
        {
            if(computerArray[i] == -1)
                temp_1++;
        }
        if (temp_1 == 5)
            combo_1 = 1;
        for(var i = 5 ; i < 10 ; i++)
        {
            if(computerArray[i] == -1)
                temp_2++;
        }
        if (temp_2 == 5)
            combo_2 = 1;
        for(var i = 10 ; i < 15 ; i++)
        {
            if(computerArray[i] == -1)
                temp_3++;
        }
        if (temp_3 == 5)
            combo_3 = 1;
        for(var i = 15 ; i < 20 ; i++)
        {
            if(computerArray[i] == -1)
                temp_4++;
        }
        if (temp_4 == 5)
            combo_4 = 1;
        for(var i = 20 ; i < 25 ; i++)
        {
            if(computerArray[i] == -1)
                temp_5++;
        }
        if (temp_5 == 5)
            combo_5 = 1;
        for(var i = 0 ; i < 21 ; i+=5)
        {
            if(computerArray[i] == -1)
                temp_6++;
        }
        if (temp_6 == 5)
            combo_6 = 1;
        for(var i = 1 ; i < 22 ; i+=5)
        {
            if(computerArray[i] == -1)
                temp_7++;
        }
        if (temp_7 == 5)
            combo_7 = 1;
        for(var i = 2 ; i < 23 ; i+=5)
        {
            if(computerArray[i] == -1)
                temp_8++;
        }
        if (temp_8 == 5)
            combo_8 = 1;
        for(var i = 3 ; i < 24 ; i+=5)
        {
            if(computerArray[i] == -1)
                temp_9++;
        }
        if (temp_9 == 5)
            combo_9 = 1;
        for(var i = 4 ; i < 25 ; i+=5)
        {
            if(computerArray[i] == -1)
                temp_10++;
        }
        if (temp_10 == 5)
            combo_10 = 1;
        for(var i = 0 ; i < 25 ; i+=6)
        {
            if(computerArray[i] == -1)
                temp_11++;
        }
        if (temp_11 == 5)
            combo_11 = 1;
        for(var i = 4 ; i < 21 ; i+=4)
        {
            if(computerArray[i] == -1)
                temp_12++;
        }
        if (temp_12 == 5)
            combo_12 = 1;
        var comboAltogetherByComputer = combo_1 + combo_2 + combo_3 + combo_4 + combo_5 + combo_6 +combo_7 +
                                combo_8 + combo_9 + combo_10 + combo_11 + combo_12;
        if (comboAltogetherByComputer >= 3){
            alert("電腦獲勝!!遊戲結束!");
            alert("遊戲即將跳回初始頁面!!!");
            app.gout();
        }
        else
            app.chioseMath();
    },
    judgeWithPlayer: function() {
        var temp_1 = 0;
        var temp_2 = 0;
        var temp_3 = 0;
        var temp_4 = 0;
        var temp_5 = 0;
        var temp_6 = 0;
        var temp_7 = 0;
        var temp_8 = 0;
        var temp_9 = 0;
        var temp_10 = 0;
        var temp_11 = 0;
        var temp_12 = 0;
        var combo_1 = 0;
        var combo_2 = 0;
        var combo_3 = 0;
        var combo_4 = 0;
        var combo_5 = 0;
        var combo_6 = 0;
        var combo_7 = 0;
        var combo_8 = 0;
        var combo_9 = 0;
        var combo_10 = 0;
        var combo_11 = 0;
        var combo_12 = 0;
        for(var i = 0 ; i < 5 ; i++)
        {
            if(judgeForUser[i] == -1)
                temp_1++;
        }
        if (temp_1 == 5)
            combo_1 = 1;
        for(var i = 5 ; i < 10 ; i++)
        {
            if(judgeForUser[i] == -1)
                temp_2++;
        }
        if (temp_2 == 5)
            combo_2 = 1;
        for(var i = 10 ; i < 15 ; i++)
        {
            if(judgeForUser[i] == -1)
                temp_3++;
        }
        if (temp_3 == 5)
            combo_3 = 1;
        for(var i = 15 ; i < 20 ; i++)
        {
            if(judgeForUser[i] == -1)
                temp_4++;
        }
        if (temp_4 == 5)
            combo_4 = 1;
        for(var i = 20 ; i < 25 ; i++)
        {
            if(judgeForUser[i] == -1)
                temp_5++;
        }
        if (temp_5 == 5)
            combo_5 = 1;
        for(var i = 0 ; i < 21 ; i+=5)
        {
            if(judgeForUser[i] == -1)
                temp_6++;
        }
        if (temp_6 == 5)
            combo_6 = 1;
        for(var i = 1 ; i < 22 ; i+=5)
        {
            if(judgeForUser[i] == -1)
                temp_7++;
        }
        if (temp_7 == 5)
            combo_7 = 1;
        for(var i = 2 ; i < 23 ; i+=5)
        {
            if(judgeForUser[i] == -1)
                temp_8++;
        }
        if (temp_8 == 5)
            combo_8 = 1;
        for(var i = 3 ; i < 24 ; i+=5)
        {
            if(judgeForUser[i] == -1)
                temp_9++;
        }
        if (temp_9 == 5)
            combo_9 = 1;
        for(var i = 4 ; i < 25 ; i+=5)
        {
            if(judgeForUser[i] == -1)
                temp_10++;
        }
        if (temp_10 == 5)
            combo_10 = 1;
        for(var i = 0 ; i < 25 ; i+=6)
        {
            if(judgeForUser[i] == -1)
                temp_11++;
        }
        if (temp_11 == 5)
            combo_11 = 1;
        for(var i = 4 ; i < 21 ; i+=4)
        {
            if(judgeForUser[i] == -1)
                temp_12++;
        }
        if (temp_12 == 5)
            combo_12 = 1;
        var comboAltogetherByComputer = combo_1 + combo_2 + combo_3 + combo_4 + combo_5 + combo_6 +combo_7 +
                                combo_8 + combo_9 + combo_10 + combo_11 + combo_12;
        if (comboAltogetherByComputer >= 3){
            alert("玩家獲勝!!遊戲結束!");
            alert("遊戲即將跳回初始頁面!!!");
            app.gout();
        }
        else
            app.computerMove();
    },
    gout: function() {
        document.location.href="index.html";
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