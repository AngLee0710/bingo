/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var i = 1;
var bool_1,bool_2,bool_3,bool_4,bool_5,bool_6,bool_7,
    bool_8,bool_9,bool_10,bool_11,bool_12,bool_13,
    bool_14,bool_15,bool_16,bool_17,bool_18,bool_19,
    bool_20,bool_21,bool_22,bool_23,bool_24,bool_25 = 0;
var tempNumber = new Array(25);
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        bingoBtn_1.addEventListener('click' , this.calc_1, false);
        bingoBtn_2.addEventListener('click' , this.calc_2, false);
        bingoBtn_3.addEventListener('click' , this.calc_3, false);
        bingoBtn_4.addEventListener('click' , this.calc_4, false);
        bingoBtn_5.addEventListener('click' , this.calc_5, false);
        bingoBtn_6.addEventListener('click' , this.calc_6, false);
        bingoBtn_7.addEventListener('click' , this.calc_7, false);
        bingoBtn_8.addEventListener('click' , this.calc_8, false);
        bingoBtn_9.addEventListener('click' , this.calc_9, false);
        bingoBtn_10.addEventListener('click' , this.calc_10, false);
        bingoBtn_11.addEventListener('click' , this.calc_11, false);
        bingoBtn_12.addEventListener('click' , this.calc_12, false);
        bingoBtn_13.addEventListener('click' , this.calc_13, false);
        bingoBtn_14.addEventListener('click' , this.calc_14, false);
        bingoBtn_15.addEventListener('click' , this.calc_15, false);
        bingoBtn_16.addEventListener('click' , this.calc_16, false);
        bingoBtn_17.addEventListener('click' , this.calc_17, false);
        bingoBtn_18.addEventListener('click' , this.calc_18, false);
        bingoBtn_19.addEventListener('click' , this.calc_19, false);
        bingoBtn_20.addEventListener('click' , this.calc_20, false);
        bingoBtn_21.addEventListener('click' , this.calc_21, false);
        bingoBtn_22.addEventListener('click' , this.calc_22, false);
        bingoBtn_23.addEventListener('click' , this.calc_23, false);
        bingoBtn_24.addEventListener('click' , this.calc_24, false);
        bingoBtn_25.addEventListener('click' , this.calc_25, false);
        gameStartBtn.addEventListener('click', this.gmaeStart, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
    },
    calc_1: function() {
        if (bool_1 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_1.innerHTML = '0' + i;
        else
            bingoBtn_1.innerHTML = i;
        i++;

        bool_1 = 1;
        tempNumber[0] = i;
    },
    calc_2: function() {
        if (bool_2 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_2.innerHTML = "0" +  i;
        
        else
            bingoBtn_2.innerHTML = i;
        i++;
        bool_2 = 1;
        tempNumber[1] = i;
    },
    calc_3: function() {
        if (bool_3 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_3.innerHTML = "0" +  i;
        else
         bingoBtn_3.innerHTML = i;
        i++;
        bool_3 = 1; 
        tempNumber[2] = i;
    },
    calc_4: function() {
        if (bool_4 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_4.innerHTML = "0" +  i;
        else
        bingoBtn_4.innerHTML = i;
        i++;
        bool_4 = 1;
        tempNumber[3] = i; 
    },
    calc_5: function() {
        if (bool_5 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_5.innerHTML = "0" +  i;
        else
            bingoBtn_5.innerHTML = i;
        i++;
        bool_5 = 1; 
        tempNumber[4] = i;
    },
    calc_6: function() {
        if (bool_6 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_6.innerHTML = "0" +  i;
        else
            bingoBtn_6.innerHTML = i;
        i++;
        bool_6 = 1; 
        tempNumber[5] = i;
    },
    calc_7: function() {
        if (bool_7 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_7.innerHTML = "0" +  i;
        else
            bingoBtn_7.innerHTML = i;
        i++;
        bool_7 = 1;
        tempNumber[6] = i;
    },
    calc_8: function() {
        if (bool_8 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_8.innerHTML = "0" +  i;
        else
            bingoBtn_8.innerHTML = i;
        i++;
        bool_8 = 1;
        tempNumber[7] = i;
    },
    calc_9: function() {
        if (bool_9 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_9.innerHTML = "0" +  i;
        else
            bingoBtn_9.innerHTML = i;
        i++;
        bool_9 = 1;
        tempNumber[8] = i;
    },
    calc_10: function() {
        if (bool_10 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_10.innerHTML = "0" +  i;
        else
            bingoBtn_10.innerHTML = i;
        i++;
        bool_10 = 1;
        tempNumber[9] = i;
    },
    calc_11: function() {
        if (bool_11 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_11.innerHTML = "0" +  i;
        else
            bingoBtn_11.innerHTML = i;
        i++;
        bool_11 = 1;
        tempNumber[10] = i;
    },
    calc_12: function() {
        if (bool_12 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_12.innerHTML = "0" +  i;
        else
            bingoBtn_12.innerHTML = i;
        i++;
        bool_12 = 1;
        tempNumber[11] = i;
    },
    calc_13: function() {
        if (bool_13 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_13.innerHTML = "0" +  i;
        else
            bingoBtn_13.innerHTML = i;
        i++;
        bool_13 = 1;
        tempNumber[12] = i;
    },
    calc_14: function() {
        if (bool_14 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_14.innerHTML = "0" +  i;
        else
            bingoBtn_14.innerHTML = i;
        i++;
        bool_14 = 1;
        tempNumber[13] = i;
    },
    calc_15: function() {
        if (bool_15 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_15.innerHTML = "0" +  i;
        else
            bingoBtn_15.innerHTML = i;
        i++;
        bool_15 = 1;
        tempNumber[14] = i;
    },
    calc_16: function() {
        if (bool_16 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_16.innerHTML = "0" +  i;
        else
            bingoBtn_16.innerHTML = i;
        i++;
        bool_16 = 1;
        tempNumber[15] = i;
    },
    calc_17: function() {
        if (bool_17 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_17.innerHTML = "0" +  i;
        else
            bingoBtn_17.innerHTML = i;
        i++;
        bool_17 = 1;
        tempNumber[16] = i;
    },
    calc_18: function() {
        if (bool_18 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_18.innerHTML = "0" +  i;
        else
            bingoBtn_18.innerHTML = i;
        i++;
        bool_18 = 1;
        tempNumber[17] = i;
    },
    calc_19: function() {
        if (bool_19 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_19.innerHTML = "0" +  i;
        else
            bingoBtn_19.innerHTML = i;
        i++;
        bool_19 = 1;
        tempNumber[18] = i;
    },
    calc_20: function() {
        if (bool_20 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_20.innerHTML = "0" +  i;
        else
            bingoBtn_20.innerHTML = i;
        i++;
        bool_20 = 1;
        tempNumber[19] = i;
    },
    calc_21: function() {
        if (bool_21 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_21.innerHTML = "0" +  i;
        else
            bingoBtn_21.innerHTML = i;
        i++;
        bool_21 = 1;
        tempNumber[20] = i;
    },
    calc_22: function() {
        if (bool_22 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_22.innerHTML = "0" +  i;
        else
            bingoBtn_22.innerHTML = i;
        i++;
        bool_22 = 1;
        tempNumber[21] = i;
    },
    calc_23: function() {
        if (bool_23 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_23.innerHTML = "0" +  i;
        else
            bingoBtn_23.innerHTML = i;
        i++;
        bool_23 = 1;
        tempNumber[22] = i;
    },
    calc_24: function() {
        if (bool_24 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_24.innerHTML = "0" +  i;
        else
            bingoBtn_24.innerHTML = i;
        i++;
        bool_24 = 1;
        tempNumber[23] = i;
    },
    calc_25: function() {
        if (bool_25 == 1)
        {
            alert("已輸入過數字");
            return;
        }
        if(i <= 9)
            bingoBtn_25.innerHTML = "0" +  i;
        else
            bingoBtn_25.innerHTML = i;
        i++;
        bool_25 = 1;
        tempNumber[24] = i;
    },
    gmaeStart: function() {
        document.location.href="game.html?" + tempNumber;
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();