
let totalPay;

// function to calculate salary
let salary = function(){ 

    //   This  checks for an empty input and an input of more than 24 hours since its on a daily basis.
    let hoursWorked = document.getElementById('hours-worked').value;
    if (hoursWorked == 0 || hoursWorked > 24) {
        alert('Enter the total number of hours you worked for today');

    // This calculates the total pay including extra hours if the hours worked is more than 4 hours
    } else if (hoursWorked > 4){
        totalPay = ((hoursWorked - 4) * 200) + (hoursWorked * 1000);
        return(totalPay);

    // This calculates the total pay if the hours worked is less than 4 hours
    }else {
        totalPay = hoursWorked * 1000
        return(totalPay);
    }
 }

// Calling the salary function on submit
let submitBtn = document.getElementById('submit-btn')
 submitBtn.addEventListener('click', function(){
    salary();
   
    // This displays the total salary calculated
    document.getElementById("total").innerHTML = `Total salary for the day is NGN${totalPay}`
})


 
 
 



