Width =1500; // ange bredden på sidan som ska snöas in...
Height =2000; // ange höjden på sidan som ska snöas in...
Count =25; // antal snöflingor OBS! ange inte för stort antal!
MaxStep=3; // max steg i rörelsen
MinStep=1; // min steg i rörelsen
MaxFlake=10; // max storlek på snöflinga
MinFlake=4; // min storlek på snöflinga
 
PosX = new Array();
PosY = new Array();
StepX = new Array();
StepY = new Array();
StarSize=new Array(); 

for (i = 0; i < Count; i++) {
PosX[i] = Math.random()*Width;
PosY[i] = Math.random()*Height;
StepX[i] =MinStep+Math.random()* -MaxStep;
StepY[i] =MinStep+Math.random()* MaxStep;
StarSize[i]=MinFlake+Math.random() * MaxFlake;
 
document.write("<div id='Obj" + i + "' style='position:absolute; left:0px; top:-20px; z-index:10000; visibility:hidden; color:#fff; font-weight:normal; font-family:Verdana; font-size:"+StarSize[i]+"pt'>•</div>");
} 
 

function snowFall() {
    for (i = 0; i < Count; i++) {
    PosY[i] += StepY[i];
    PosX[i] += StepX[i];
     
    document.getElementById("Obj"+i).style.visibility = "visible";
    if (PosY[i] > Width || PosX[i] > Height || PosX[i]<0) { // starta om från toppen av sidan när mitten nås
    PosX[i] = Math.random()*Width; ///2
    PosY[i] = -20;
    StepX[i] = MinStep+Math.random()* -MaxStep;
    StepY[i] = MinStep+Math.random()* MaxStep;
    }
     
    document.getElementById("Obj"+i).style.top = PosY[i] + "px";
    document.getElementById("Obj"+i).style.left = PosX[i] + "px";
    }
    setTimeout("snowFall()", 50);// hastighet
    } 
 
 setTimeout("snowFall()", 1000);  




/* 
 element.onclick = snowFall(); */