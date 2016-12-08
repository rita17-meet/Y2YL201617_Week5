///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES
var temperature = 98.6;
temperature+=5
temperature*=3
temperature-=20
console.log(temperature);

///2. DATA STRUCTURES
var Days_Of_The_Week = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
 
Days_Of_The_Week[0] = "domingo"
Days_Of_The_Week[1] = "lunes"
Days_Of_The_Week[2] = "martes"
Days_Of_The_Week[3] = "miercoles"
Days_Of_The_Week[4] = "Jueves"
Days_Of_The_Week[5] = "viernes"
Days_Of_The_Week[6] = "sabado"
console.log(Days_Of_The_Week);
 
 var Ice_Cream = {Vanilla: '1.99$' , Chocolate: '2.49$' , Strawberry: '2.25$'};
 Ice_Cream['Chocolate'] = '5$';
 console.log(Ice_Cream);
 
///3. FUNCTIONS & CONDITIONAL STATEMENTS
function DoIHaveToGoToSchoolToday(index){
	if (index==0|| index==6){
		console.log("No , today is " +Days_Of_The_Week[index])
 }
	else
  	console.log("yes, today is" +Days_Of_The_Week[index])
 }

DoIHaveToGoToSchoolToday(0)
///4.  LOOPS
price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52]
for(var i=0;i<price_of_Gasoline.length;i++){
	price_of_Gasoline[i] = price_of_Gasoline[i]*40;
}
console.log(price_of_Gasoline);
//part2- it deletes the form for signing in


