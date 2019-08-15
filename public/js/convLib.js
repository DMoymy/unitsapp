 /*********************
 * Converter Lib     *
* Author: Dah Moymy *
*******************/

var unapp = unapp || {};

unapp = {

tabtext: ["BMI", "Weight", "Length", "Tempperature", "About"],

tabfn: ["unapp.calcBMI()", "unapp.weightConv()", "unapp.lengthConv()", "unapp.tempConv()", "unapp.aboutDev()"],


tabColor: function(tabcol){ 

 var tabs = document.getElementsByClassName("sblnk");

for (var i = 0; i <tabs.length; i++){
 
if(tabcol==unapp.tabtext[i]){    
  tabs[i].style.backgroundColor = "white";
  tabs[i].style.color = "teal";
}else{
      tabs[i].style.backgroundColor = "#006400";
      tabs[i].style.color = "white";
     }
   }
},

bannerMenuCont: function() {

//Banner content

var bc = '<img src="./images/logo.png" alt="Logo" class="logo" align="left" onclick="location.reload()"><p class="adsp">Web and Desktop Applications Development</p>';

document.getElementById("bannerCont").innerHTML = bc;

//Menu content

var mc = '';

for (var i = 0; i <unapp.tabtext.length; i++){
mc += '<a id="'+unapp.tabtext[i]+'" class="sblnk" onclick="'+unapp.tabfn[i]+';unapp.tabColor('+"'"+unapp.tabtext[i]+"'"+')">'+unapp.tabtext[i]+'</a>';
 }
  document.getElementById("convMenu").innerHTML =  mc;
},

//Span content:

spanCont: function() {

var unStr = '';

// Body Mass Index

unStr += '<section class="ab-sections"><h1>Body Mass Index Calculator</h1>';
unStr += '<table class= "ctrl-table" border=0 cellpadding = 1 cellspacing = 1 align="center">';

unStr += '<tr><td id="concl" colspan=6>Check if your weight is healthy</td></tr>';

unStr += '<tr><td class="bmi_label">Height in m:</td><td class="bmictrl" contenteditable=true id="height" onclick="unapp.nullifyHei();">0.00</td>';

unStr += '<td class="bmi_label">Weight in kg:</td>';

unStr += '<td class="bmictrl" contenteditable=true id="weight" onclick="unapp.nullifyWei();">0.00</td>';

unStr += '<td class="bmiBtn" onclick="unapp.getBMI();">Calculate</td>';

unStr += '<td class="bmiBtn" onclick="unapp.spanCont();">Reset</td></tr></table>';

unStr += '<table class= "bmi-table" border = 0 cellpadding = 1 cellspacing = 1 align="center">';

unStr += '<tr><td>0 >=</td>';
unStr += '<td id="bmi016">BMI</td>';
unStr += '<td>< 16</td></tr>';
  
unStr += '<tr><td>16 <=</td>';
unStr += '<td id="bmi1618">BMI</td><td>< 18.5</td></tr>';
  
unStr += '<tr><td>18.5 <=</td>';
unStr += '<td id="bmi1825">BMI</td><td>< 25</td></tr>';

unStr += '<tr><td>25 <=</td>';
unStr += '<td id="bmi2530">BMI</td><td>< 30</td></tr>';
   
unStr += '<tr><td>30 <=</td>';
unStr += '<td id="bmi30inf">BMI</td><td>< Infinity </td></tr></table><br>';

unStr += '</section>';

unStr += '<section class="ab-sections"><h1>How to use BMI Calculator</h1>'; 
unStr += '<notes>To get the correct Body Mass Index, please be sure to enter your height in meters and your weight in kilograms. If you know your weight in pounds and your height in feet you can convert them to kilogramms and meters with weight and length converters in the  next tabs';
unStr += '<strong><u>BMI references</u></strong>:<br>'; 
unStr += 'https://www.cdc.gov/obesity/adult/defining.html</notes></section>';

document.getElementById("contSpan").innerHTML = unStr;
},

//Set height and width value to null;

nullifyHei: function(){
    document.getElementById("height").innerHTML = "";
  },


nullifyWei: function(){
     document.getElementById("weight").innerHTML = "";
 },


// Calculte BMI

getBMI: function(){

var wbmi = document.getElementById("weight").innerHTML,
     hbmi = document.getElementById("height").innerHTML,
     bmi = (wbmi/(hbmi*hbmi)).toFixed(2),
     conc = document.getElementById("concl");

if(bmi<16){
  document.getElementById("bmi016").innerHTML = "<b>"+bmi+"</b>";
  document.getElementById("bmi016").style.backgroundColor = "red";
  document.getElementById("bmi016").style.color = "cyan";
  conc.style.backgroundColor = "red";
  conc.style.color = "cyan";
  conc.innerHTML = "<i><b>Conclusion<hr></b><P style='text-align:left;'>Based on your BMI, You are highly underweight.</P></i>";

 }else if(bmi>=16 && bmi<18.5){

  document.getElementById("bmi1618").innerHTML = "<b>"+bmi+"</b>";
  document.getElementById("bmi1618").style.backgroundColor = "yellow";
  document.getElementById("bmi1618").style.color = "darkBlue";
 
  conc.style.backgroundColor = "yellow";
  conc.style.color = "darkBlue";
  conc.innerHTML = "<i><b>Conclusion<hr></b><P style='text-align:left;'>Based on your BMI, You are underweight.</P></i>";

 }else if(bmi>=18.5 && bmi<25){

  document.getElementById("bmi1825").innerHTML = "<b>"+bmi+"</b>";
  document.getElementById("bmi1825").style.backgroundColor = "green";
  document.getElementById("bmi1825").style.color = "white";

  conc.style.backgroundColor = "green";
  conc.style.color = "white";
  conc.innerHTML = "<i><b>Conclusion<hr></b><P style='text-align:left;'>Based on your BMI, your weight is normal.</P></i>";

 }else if(bmi>=25 && bmi<30){

  document.getElementById("bmi2530").innerHTML = "<b>"+bmi+"</b>";
  document.getElementById("bmi2530").style.backgroundColor = "yellow";
  document.getElementById("bmi2530").style.color = "darkBlue";

  conc.style.backgroundColor = "yellow";
  conc.style.color = "darkBlue";
  conc.innerHTML = "<i><b>Conclusion<hr></b><P style='text-align:left;'>Based on your BMI, You are overweight.</P></i>";

 }else if(bmi>=30){
  document.getElementById("bmi30inf").innerHTML = "<b>"+bmi+"</b>";
  document.getElementById("bmi30inf").style.backgroundColor = "red";
  document.getElementById("bmi30inf").style.color = "cyan";

  conc.style.backgroundColor = "red";
  conc.style.color = "cyan";
  conc.innerHTML = "<i><b>Conclusion<hr></b><P style='text-align:left;'>Based on your BMI, You are highly overweight (obese).</P></i>";

  }
},


// To Celsius

getCels: function() {
   var x = document.getElementById("celsText").value,
xnan = isNaN(x);

if(x == "" || x =="undefined"){
    document.getElementById("fahrtocels").innerHTML = "Enter a value";
}else if(xnan == true){
  document.getElementById("fahrtocels").innerHTML = "Invalid value";
}else{
    document.getElementById("fahrtocels").innerHTML = " " + (((x-32)*5)/9).toFixed(2) + "&#8451;";
  }
},


f_to_c: function() {
  document.getElementById("cels_to_fahr").style.display = "none";
  document.getElementById("fahr_to_cels").style.display = "block"; 
  document.getElementById("fahrText").value = 0;
  unapp.getCels();
},

eraseCels: function() {
  document.getElementById("celsText").value = "";
  document.getElementById("fahrtocels").innerHTML = "Enter a value !";
},

// To Fahren

getFahr: function(){
  var y = document.getElementById("fahrText").value,
ynan = isNaN(y);

if(y==""){
  document.getElementById("celstofahr").innerHTML = "Enter a value !";
}else if(y =="undefined" || ynan == true){
  document.getElementById("celstofahr").innerHTML = "Invalid value !";
}else{
  document.getElementById("celstofahr").innerHTML = " " + (((y * 9) / 5) + 32).toFixed(2) + "&#8457;";
 }
},

c_to_f: function() {
  document.getElementById("cels_to_fahr").style.display = "block";
  document.getElementById("fahr_to_cels").style.display = "none"; 
  document.getElementById("celsText").value = 32;
  unapp.getFahr();
},

eraseFahr: function(){
  document.getElementById("fahrText").value = "";
  document.getElementById("celstofahr").innerHTML = "Enter a value !";
},

// To Kilograms

getKg: function() {
  var x = document.getElementById("kgText").value,
  xnan = isNaN(x);

if(x==""){
 document.getElementById("lbtokg").innerHTML = "Enter a value";
}else if(x =="undefined" || xnan == true){
      document.getElementById("lbtokg").innerHTML = "Invalid value !";
}else{
 document.getElementById("lbtokg").innerHTML = (x/2.20462262).toFixed(2) +" kg";
 }
},

kg_to_lb: function() {
  document.getElementById("lb_to_kg").style.display = "none";
  document.getElementById("kg_to_lb").style.display = "block";
  document.getElementById("lbText").value = 1;
  unapp.getLb(); 
},

eraseKg: function() {
  document.getElementById("kgText").value = "";
  document.getElementById("lbtokg").innerHTML = "Enter a value !";
},

getLb: function() {
  var y = document.getElementById("lbText").value,
  ynan = isNaN(y);

if(y==""){
document.getElementById("kgtolb").innerHTML = "Enter a value !";
}else if(y =="undefined" || ynan == true){
    document.getElementById("kgtolb").innerHTML = "Invalid value !";
}else{
   document.getElementById("kgtolb").innerHTML = (y*2.20462262).toFixed(2)+" lb";
 }
},

lb_to_kg: function() {
  document.getElementById("lb_to_kg").style.display = "block";
  document.getElementById("kg_to_lb").style.display = "none";
  document.getElementById("kgText").value = 2.2;
  unapp.getKg();
 
},

eraseLb: function() {
  document.getElementById("lbText").value = "";
  document.getElementById("kgtolb").innerHTML = "Enter a value !";
},

// To meter 

getMet: function() {
  var x = document.getElementById("mText").value,
  xnan = isNaN(x);

if(x==""){
 document.getElementById("ft-to-m").innerHTML = "Enter a value";
}else if(x =="undefined" || xnan == true){
      document.getElementById("ft-to-m").innerHTML = "Invalid value !";
}else{
 document.getElementById("ft-to-m").innerHTML = (x/3.2808).toFixed(4) +" m";
 }
},

m_to_ft: function() {
  document.getElementById("ft_to_m").style.display = "none";
  document.getElementById("m_to_ft").style.display = "block";
  document.getElementById("ft-Text").value = 1;
  unapp.getFt(); 
},

eraseMet: function() {
  document.getElementById("mText").value = "";
  document.getElementById("ft-to-m").innerHTML = "Enter a value !";
},

getFt: function() {
  var y = document.getElementById("ft-Text").value,
  ynan = isNaN(y);

if(y==""){
document.getElementById("m-to-ft").innerHTML = "Enter a value !";
}else if(y =="undefined" || ynan == true){
    document.getElementById("m-to-ft").innerHTML = "Invalid value !";
}else{
   document.getElementById("m-to-ft").innerHTML = (y*3.2808).toFixed(4)+" ft";
 }
},


ft_to_m: function() {
  document.getElementById("ft_to_m").style.display = "block";
  document.getElementById("m_to_ft").style.display = "none";
  document.getElementById("mText").value = 1;
  unapp.getMet();
 },

eraseFt: function() {
  document.getElementById("ft-Text").value = "";
  document.getElementById("m-to-ft").innerHTML = "Enter a value !";
},


tempConv: function() {

 var tc = '';

tc+= '<table id= "fahr_to_cels" class="dbtable" border = 0 cellpadding = 2>';

tc += '<tr><th>Fahrenheit to Celsius</th></tr>';

tc += '<tr><td class = "fahrtocels"><input type="text" id="celsText" class="txtInput" value="32" onkeyup = "unapp.getCels()" onclick = "unapp.eraseCels()"><b>&#8457;</b></td></tr>';

tc += '<tr><td id="fahrtocels" class = "unitVal"></td></tr>';

tc += '<tr><td  class = "tblfooter" onclick = "unapp.c_to_f();">Reverse: C &#8594; F</td></tr></table>';

tc+= '<table id= "cels_to_fahr" class="dbtable" border = 0 cellpadding = 2 style = "display:none;">';

tc += '<tr><th>Celsius to Fahrenheit</th></tr>';

tc += '<tr><td class = "unitVal"><input type="text" id="fahrText" class="txtInput" value="0" onkeyup = "unapp.getFahr()" onclick = "unapp.eraseFahr()"><b>&#8451;</b></td></tr>';

tc += '<tr><td id="celstofahr" class = "celstofahr"></td></tr>';

tc += '<tr><td class = "tblfooter" onclick = "unapp.f_to_c();">Reverse: F &#8594; C</td></tr></table>\n\n<img src="./images/thermo.png" alt="Scale" class="unit-pic">';

   document.getElementById("contSpan").innerHTML = tc;
   document.getElementById("ulDiv").innerHTML = "Temperature conversion";

  unapp.getCels();
  unapp.getFahr();
},

weightConv: function() {

 var wc = '';

wc += '<table  id="lb_to_kg" class="dbtable" border = 0 cellpadding = 2>';

wc += '<tr><th>Pounds to Kilograms</th></tr>';

wc += '<tr><td class = "unitVal"><input type="text" id="kgText" class="txtInput" value="2.20" onkeyup = "unapp.getKg()" onclick = "unapp.eraseKg()"><b>lb</b></td></tr>';

wc += '<tr><td id="lbtokg" class = "unitVal"></td></tr>';
wc += '<tr><td class = "tblfooter" onclick = "unapp.kg_to_lb();">Reverse: Kg &#8594; Lb</td></tr></table>';

wc+= '<table id= "kg_to_lb" class="dbtable" border = 0 cellpadding = 2 style = "display:none;">';

wc += '<tr><th>Kilograms to Pounds</th></tr>';

wc += '<tr><td class = "unitVal"><input type="text" id="lbText" class="txtInput" value="1" onkeyup = "unapp.getLb()" onclick = "unapp.eraseLb()"><b>kg</b></td></tr>';

wc += '<tr><td id="kgtolb" class = "celstofahr"></td></tr>';
wc += '<tr><td class = "tblfooter" onclick = "unapp.lb_to_kg();">Reverse: Lb &#8594; Kg</td></tr></table><img src="./images/scale.png" alt="Scale" class="unit-pic">'; 

   document.getElementById("contSpan").innerHTML = wc;
   document.getElementById("ulDiv").innerHTML = "Weight conversion";
   unapp.getKg();
   unapp.getLb();
},

//==Length conversion


lengthConv: function() {

 var lc = '';

lc += '<table  id="ft_to_m" class="dbtable" border = 0 cellpadding = 2>';

lc += '<tr><th>Foot to Meter</th></tr>';

lc += '<tr><td class = "unitVal"><input type="text" id="mText" class="txtInput" value="3.2808" onkeyup = "unapp.getMet()" onclick = "unapp.eraseMet()"><b>ft</b></td></tr>';

lc += '<tr><td id="ft-to-m" class = "unitVal"></td></tr>';
lc += '<tr><td class = "tblfooter" onclick = "unapp.m_to_ft();">Reverse: M &#8594; Ft</td></tr></table>';

lc+= '<table id= "m_to_ft" class="dbtable" border = 0 cellpadding = 2 style = "display:none;">';

lc += '<tr><th>Meter to Foot</th></tr>';

lc += '<tr><td class = "unitVal"><input type="text" id="ft-Text" class="txtInput" value="1" onkeyup = "unapp.getFt()" onclick = "unapp.eraseFt()"><b>m</b></td></tr>';

lc += '<tr><td id="m-to-ft" class = "celstofahr"></td></tr>';
lc += '<tr><td class = "tblfooter" onclick = "unapp.ft_to_m();">Reverse: Ft &#8594; M</td></tr></table><img src="./images/ruler.png" alt="Ruler" class="ruler">';

   document.getElementById("contSpan").innerHTML = lc;
   document.getElementById("ulDiv").innerHTML = "Length conversion";
   unapp.getMet();
   unapp.getFt();
},

// Footer 

tFunc: function(){
var d = new Date(),
 lclD  = d.toLocaleDateString();   //Local time and date
document.getElementById("appFooter").innerHTML= '<i>Copyright &copy; Adalemya, 2018 - '+ lclD+'<i>';
},

//About

aboutDev: function(){

var abapp = ''; 

abapp += '<section class="ab-sections"><h1>Units Converter</h1>';

abapp += '<p>&nbsp;&nbsp;Units Converter is an interactive and user friendly Progressive Web Application that allows you to convert temperature and weight units of measurement from one metric system to another.<br> It also provides you with a Body Mass Index calculator for checking your weight.</p></section>';

abapp += '<section class="ab-sections"><h1>Developer</h1>';

abapp += '<p><img class="dev_pic" src="./images/Me.png" alt="Developer" align="left" style="max-width: 80%; max-height: 80%; border-radius: 80%; margin: 10px 10px 5px 10px;"><figcaption><b> Dah Moymy</b></figcaption></p>';

abapp += '<p>&nbsp; Dah Moymy is a Full Stack Developer who is passionate about developing interactive and easy to use desktop and web applictions. He is also an Oracle Business Intelligence certified Specialist.</p></section>';

document.getElementById("ulDiv").innerHTML = "About";
document.getElementById("contSpan").innerHTML = abapp;

},

calcBMI: function(){
  unapp.spanCont();
  document.getElementById("ulDiv").innerHTML = "Body Mass Index";
  document.getElementById("BMI").style.backgroundColor = "white";
  document.getElementById("BMI").style.color = "black";

var x =  navigator.onLine;
  if(x!==true){
  document.getElementById("ulDiv").innerHTML = "Units Converter is now offline";
 }
}

};

//connection Status

onload = (function(){
   unapp.bannerMenuCont();
   unapp.spanCont();
   unapp.calcBMI();
   unapp.tFunc();  
});




