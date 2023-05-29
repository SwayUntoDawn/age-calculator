const btnEl = document.getElementById("btn")   // this gives us access to the button in the HTML:

const birthdayEl = document.getElementById("birthday")  // so this created an element for birthday similar to the button element above

const resultEl = document.getElementById("result")



function calculateAge (){
    console.log("clicked");     // so this makes it so when I click inspect on the browser for the page , when i go to console and clear it and press calculate age it shows "Clicked" and how many times i clicked it
    const birthdayValue = birthdayEl.value;
    console.log(birthdayValue);       //when i added the const and the console.log it made it so now whenever select date of birth in calender and then press calculate age it shows the date in the console

    if(birthdayValue === ""){
        alert("please enter your birthday")  // this created a prompt that comes up on the screen saying "please enter your birthday"

    }else{


    const age = getAge(birthdayValue)          // this section i added result element which is the paragraph section in the HTMl that says your age is 21 year olds this syntax changes that to reflect whatever your birthday is to the current year and date so i put my birthday again and press calculate age and it showed "you age is 30 years old"
    resultEl.innerText= `Your age is ${age} ${age > 1 ? "years" : "year"} old`;   
    }


}







function getAge(birthdayValue) {      //this fuction and everything underneath is giving the current date that you logged in the calender

    const currentDate =new Date()
    const birthdayDate = new Date (birthdayValue)  // this section changed so from current year whatever year the person was born i test a date/year in 2006 it showed in the console 2006
            //the  console.log(currentDate);  gives the date you chose with year and what day of the week and timezone
    console.log(birthdayDate.getFullYear());  //this gives the year of when the person was born
    
    
    let age = currentDate.getFullYear() -birthdayDate.getFullYear();   // this is syntax to show the current age of that person from when they were born till 2023 so i put my birthdate in the calendar press calculate age and it showed 30
    
    
    const month = currentDate.getFullYear() -birthdayDate.getMonth();

    if( month< 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){

        age--        // age-- is a decremental value so if im 30 it goes down by 1 the opposite would be true if i put age++ which is a incremental value which means id be 31
    }



    return age 
}


btnEl.addEventListener("click", calculateAge)   //this is the calculate age button to make it say click