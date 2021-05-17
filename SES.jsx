/*SES.jsx is a 'Set Expression Script' for AE
v.0.22
Указаываю выражение для свойства Opacity от Layer_start до Layer_End слоя с у++ или y-- в активной композии 
*/

var Layer_start=2       //начальный слой. Работает если Mode=1 !!!
Layer_End=11            //последний слой. Работает если Mode=1 !!!
Iteration_Up= true;     //y++ когда true, y-- когда false
//----------------------------------------------------------------------------
Switcher_opacity=1;     //переключатель прозрачности, по умполчанию используй 1 
Mode=2;                 //Режим работы 1 -- от слоя Layer_start до Layer_End, 2 -- выбранные слои
y="";
//Здесь твое выражение. Пример:'if (thisComp.layer("CONTROL").effect("Selector")("Slider")>='+y+' && thisComp.layer("CONTROL").effect("Selector")("Slider")<= '+y+'.9) 100 else 0;'; 
function Exp(y) {
	var exp=
    /*
	'if (thisComp.layer("CONTROL TextM").effect("Manual Element")("Checkbox")==0) { \n'+
	'Q=thisComp.layer("Null Contoller TextM").effect("Case Element 2")("Slider"); \n'+
	'if (Q=='+y+') 100 else 0 \n'+
	'}else {if (thisComp.layer("CONTROL TextM").effect("Element Control")("Slider")>='+y+' && thisComp.layer("CONTROL TextM").effect("Element Control")("Slider")<= '+y+'.9) 100 else 0;};'; 
	*/
	
	'if (thisComp.layer("CONTROL").effect("Selector")("Slider")>='+y+' && thisComp.layer("CONTROL").effect("Selector")("Slider")<= '+y+'.9) 100 else 0;' 
	//''
	return exp;
}

//------------------------------------
y=Switcher_opacity;
Q=Layer_End-Layer_start;
if (Iteration_Up==false) {Switcher_opacity=Q+1} else {Q}

function Set_expression() {
for (n=Layer_start; n<=Layer_End; n++) {
	app.project.activeItem.layer(n).property("Opacity").expression=Exp(y);	

if (Iteration_Up==true) {y++} else {y--};
}
}


var LayerN= app.project.activeItem.numLayers;
var LayerIndex= new Array();
for (n=1; n<=LayerN; n++) {
	if (app.project.activeItem.layer(n).selected==true) {
		LayerIndex.push(n)}
}
function Set_expression_selected_layers() {
	var LayerIndex_Length= LayerIndex.length;
	Q=LayerIndex_Length-1;
	//alert(LayerIndex_Length)
for (n=0; n<LayerIndex_Length; n++) {
	N=LayerIndex[n];
	//alert(Q+" "+n)
	app.project.activeItem.layer(N).property("Opacity").expression=Exp(y);


if (Iteration_Up==true) {y++} else {y--};
}

}

app.beginUndoGroup("SES")
if (Mode==1) {
Set_expression()
} else {
Set_expression_selected_layers()
}
app.endUndoGroup();



var q=Q+1
alert("Слоев "+q);

//app.project.activeItem.layer(n).selected
