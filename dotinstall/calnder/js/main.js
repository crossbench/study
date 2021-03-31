'use strict'

console.clear();

{
   const year = 2020;
   const month = 4; //5月

   function getCalnderBody(){
    const dates = []; //date:日付, day:曜日
    const LastDate = new Date(year,month +1, 0).getDate();

    for (let i = 1; i <= LastDate; i++){
        dates.push({
            date: i,
            isToday: false,
            isDisabled: false,
        });
    }

    console.log(dates);
   }

   getCalnderBody();
}