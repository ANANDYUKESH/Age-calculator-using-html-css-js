let userinput=document.getElementById("date-input");
userinput.max=new Date().toISOString().split("T")[0];

function calculatorAge(){
    let birthDate = new Date(userinput.value);
    let date=birthDate.getDate();
    let month=birthDate.getMonth()+1;
    let year=birthDate.getFullYear();

    let today = new Date();
    let currentDate = today.getDate();
    let currentMonth = today.getMonth()+1;
    let currentYear = today.getFullYear();

    let d3,m3,y3;
     y3=currentYear-year;
     if(currentMonth>=month){
        m3=currentMonth-month;
     }
     else{
        y3--;
        m3=12+currentMonth-month;
     }
     if(currentDate>=date){
        d3=currentDate-date;
     }
     else{
        // m3--;
        // d3=31+currentDate-date;
        // if(m3<0){
        //     y3--;
        //     m3=12;
        // }
        m3--;
        d3=getDaysINMonth(year,month)+currentDate-date;
     }
     if(m3<0){
        m3=11;
        y3--;
     }
     function getDaysINMonth(y1,m1){
        return new Date(y1, m1, 0).getDate();
     }
     document.getElementById("curyear").innerHTML=y3;
     document.getElementById("curmonth").innerHTML=m3;
     document.getElementById("curday").innerHTML=d3;
 
}