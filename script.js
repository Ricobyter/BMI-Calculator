//bmi formula = [weight (kg) / height (cm) / height (cm)] x 10,000

function calculateBMI(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight/(height*height))*10000;

    document.getElementById('heading').innerHTML="Your BMI is : ";
    document.getElementById("output").innerHTML= bmi.toFixed(1);

    if(bmi<=18.5){
document.getElementById("message").innerHTML = "You are underweight."
    }
    else if(bmi>18.5 && bmi<= 24.9){
document.getElementById("message").innerHTML = "You have a healthy weight."
    }
    if(bmi> 24.9 && bmi<=29.9){
document.getElementById("message").innerHTML = "You are overweight."
    }
    if(bmi> 29.9){
document.getElementById("message").innerHTML = "You are obese. Try losing some weight"
    }

    console.log(bmi);
}

function reload(){
    window.location.reload();
}