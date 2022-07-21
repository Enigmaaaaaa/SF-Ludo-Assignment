var t = 0;

function roll() {
    const img = document.getElementById("img");
    let rn = Math.floor(Math.random() * 6) + 1;
    console.log(rn);
    img.setAttribute("src", `${rn}.png`);
   
    var player = ["Player A", "Player B"];
    {
        if (rn != '6' && t<1) {
            t++;
            var currentplayer = player[t];
            document.getElementById("Turn").innerHTML = currentplayer + "'s turn!";
        }
        else if(rn != '6' && t==1) {
            t--;
            var currentplayer = player[t];
            document.getElementById("Turn").innerHTML = currentplayer + "'s turn!";
        }
        else {document.getElementById("Turn").innerHTML = player[t] + "'s turn!";}
    }

}

function anim() {
    setTimeout(roll, 500);
    const img = document.getElementById("img");
    img.setAttribute("src", "dice.gif");
}

