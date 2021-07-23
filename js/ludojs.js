
var player = "<div id='rplayer1'></div>" ;
document.getElementById("rplayerh1").innerHTML = player;
var player = "<div id='rplayer2' ></div>" ;
document.getElementById("rplayerh2").innerHTML = player;
var player = "<div id='rplayer3' ></div>" ;
document.getElementById("rplayerh3").innerHTML = player;
var player = "<div id='rplayer4' ></div>" ;
document.getElementById("rplayerh4").innerHTML = player;

var player = "<div id='bplayer1' ></div>" ;
document.getElementById("bplayerh1").innerHTML = player;
var player = "<div id='bplayer2' ></div>" ;
document.getElementById("bplayerh2").innerHTML = player;
var player = "<div id='bplayer3' ></div>" ;
document.getElementById("bplayerh3").innerHTML = player;
var player = "<div id='bplayer4' ></div>" ;
document.getElementById("bplayerh4").innerHTML = player;

var player = "<div id='yplayer1' ></div>" ;
document.getElementById("yplayerh1").innerHTML = player;
var player = "<div id='yplayer2' ></div>" ;
document.getElementById("yplayerh2").innerHTML = player;
var player = "<div id='yplayer3' ></div>" ;
document.getElementById("yplayerh3").innerHTML = player;
var player = "<div id='yplayer4' ></div>" ;
document.getElementById("yplayerh4").innerHTML = player;

var player = "<div id='gplayer1' ></div>" ;
document.getElementById("gplayerh1").innerHTML = player;
var player = "<div id='gplayer2' ></div>" ;
document.getElementById("gplayerh2").innerHTML = player;
var player = "<div id='gplayer3' ></div>" ;
document.getElementById("gplayerh3").innerHTML = player;
var player = "<div id='gplayer4' ></div>" ;
document.getElementById("gplayerh4").innerHTML = player;

/* 
var player1 = document.getElementById("pl");
var cell = document.getElementById("b12")
cell.appendChild(player1);
console.log(cell); */

function moveahead(plr){

    curp = document.getElementById(plr).parentNode.id;
    console.log(curp);
    

    var nextpostion = (plr,curp) => {

        if(curp[0]!='c'){
            if(curp=='rplayerh1' || curp=='rplayerh2' || curp=='rplayerh3' || curp=='rplayerh4')
                return "c02_41_28_15";
            if(curp=='bplayerh1' || curp=='bplayerh2' || curp=='bplayerh3' || curp=='bplayerh4')
                return "c15_02_41_28";
            if(curp=='yplayerh1' || curp=='yplayerh2' || curp=='yplayerh3' || curp=='yplayerh4')
                return "c28_15_02_41";
            if(curp=='gplayerh1' || curp=='gplayerh2' || curp=='gplayerh3' || curp=='gplayerh4')
                return "c41_28_15_02";
            
        }

        if(curp[0]=='r' || curp[0]=='b' || curp[0]=='y' || curp[0]=='g'){
            return curp[0]+(1 + parseInt(curp[1]));
        }

        if((curp == 'c52_39_26_13' && plr[0]=='r')  || (curp == 'c13_52_39_26' && plr[0]=='b') || (curp == 'c26_13_52_39' && plr[0]=='y') || (curp == 'c39_26_13_52' && plr[0]=='g')){
            return plr[0]+"1";
        }


        var ph1 = parseInt(curp[1]+curp[2]);
        var ph2 = parseInt(curp[4]+curp[5]);
        var ph3 = parseInt(curp[7]+curp[8]);
        var ph4 = parseInt(curp[10]+curp[11]);
        var output = "c";
        output += (ph1==52 || ph1+1 > 0 && ph1+1 <= 9) ? "0"+ ((ph1)%52+1): ((ph1)%52+1) ;
        output += (ph2==52 || ph2+1 > 0 && ph2+1 <= 9) ? "_0"+ ((ph2)%52+1) : "_"+ ((ph2)%52+1) ;
        output += (ph3==52 || ph3+1 > 0 && ph3+1 <= 9) ? "_0"+ ((ph3)%52+1) : "_"+ ((ph3)%52+1) ;
        output += (ph4==52 || ph4+1 > 0 && ph4+1 <= 9) ? "_0"+ ((ph4)%52+1) : "_"+ ((ph4)%52+1) ;
        return output;

    }

    var newp = nextpostion(plr,curp);

    console.log(newp);

    var player1 = document.getElementById(plr);
    var cell = document.getElementById(newp);
    cell.appendChild(player1);





}



function rolldice(player){


    var value = Math.floor(Math.random() * 6) + 1 ;
    console.log(value);


    



    var rolled = false;

    function process_ahead(playerr){
        var a = setInterval(() => {
            moveahead(playerr)
        }, 100);
        setTimeout(() => {
            clearInterval(a);
        }, 100*value);
    }




    if(player=='rplayer'){

        

        var diceimg = document.getElementById('rdiceimage');
        diceimg.setAttribute('src','../images/d'+value+'.png');
        

        console.log('here');
        document.getElementById('rplayer1').onclick = GetbID ;
        document.getElementById('rplayer2').onclick = GetbID ;
        document.getElementById('rplayer3').onclick = GetbID ;
        document.getElementById('rplayer4').onclick = GetbID ;
    }


    if(player=='bplayer'){

        var diceimg = document.getElementById('bdiceimage');
        diceimg.setAttribute('src','../images/d'+value+'.png');

        console.log('here');
        document.getElementById('bplayer1').onclick = GetbID ;
        document.getElementById('bplayer2').onclick = GetbID ;
        document.getElementById('bplayer3').onclick = GetbID ;
        document.getElementById('bplayer4').onclick = GetbID ;
    }

    if(player=='yplayer'){

        var diceimg = document.getElementById('ydiceimage');
        diceimg.setAttribute('src','../images/d'+value+'.png');

        console.log('here');
        document.getElementById('yplayer1').onclick = GetbID ;
        document.getElementById('yplayer2').onclick = GetbID ;
        document.getElementById('yplayer3').onclick = GetbID ;
        document.getElementById('yplayer4').onclick = GetbID ;
    }

    if(player=='gplayer'){

        var diceimg = document.getElementById('gdiceimage');
        diceimg.setAttribute('src','../images/d'+value+'.png');

        console.log('here');
        document.getElementById('gplayer1').onclick = GetbID ;
        document.getElementById('gplayer2').onclick = GetbID ;
        document.getElementById('gplayer3').onclick = GetbID ;
        document.getElementById('gplayer4').onclick = GetbID ;
    }
 
    function GetbID(clicked){
        if(rolled) return ;
        process_ahead(this.id);
        rolled = true;
        return;
    }       



}


