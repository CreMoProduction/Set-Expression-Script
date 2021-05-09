/*SES.jsx is a 'Set Expression Script' for AE
v.0.2
Указаываю выражение для свойства Opacity от Layer_start до Layer_End слоя с у++ или y-- в активной композии 
*/

var Layer_start=2       //начальный слой
Layer_End=11            //последний слой
Iteration_Up= true;     //y++ когда true, y-- когда false
//----------------------------------------------------------------------------
Switcher_opacity=1;     //переключатель прозрачности, по умполчанию используй 1 

//Здесь твое выражение. Пример:'if (thisComp.layer("CONTROL").effect("Selector")("Slider")>='+y+' && thisComp.layer("CONTROL").effect("Selector")("Slider")<= '+y+'.9) 100 else 0;'; 
var Exp=
	/*
	'if (thisComp.layer("CONTROL TextM").effect("Manual Element")("Checkbox")==0) { \n'+
	'Q=thisComp.layer("Null Contoller TextM").effect("Case Element")("Slider"); \n'+
	'if (Q=='+y+') 100 else 0 \n'+
	'}else {if (thisComp.layer("CONTROL TextM").effect("Element Control")("Slider")>='+y+' && thisComp.layer("CONTROL TextM").effect("Element Control")("Slider")<= '+y+'.9) 100 else 0;};'; 
	*/
	'if (thisComp.layer("CONTROL").effect("Selector")("Slider")>='+y+' && thisComp.layer("CONTROL").effect("Selector")("Slider")<= '+y+'.9) 100 else 0;'; 





//------------------------------------
y=Switcher_opacity;
Q=Layer_End-Layer_start;
if (Iteration_Up==false) {Switcher_opacity=Q+1} else {Q}
app.beginUndoGroup("SES")
for (n=Layer_start; n<=Layer_End; n++) {
	app.project.activeItem.layer(n).property("Opacity").expression=Exp;
	

if (Iteration_Up==true) {y++} else {y--};

}

app.endUndoGroup();

