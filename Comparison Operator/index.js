function getGrade(marks){
    if(marks < 0 || marks > 100){
        return "Invaild marks"
    }
    else if (marks >= 90){
        return "A"
    }
    else if (marks >= 75){
        return "B"
    }
    else if (marks >= 60){
        return "C"
    }
    else if (marks >= 55){
        return "D"
    }
    else if(marks >= 40){
        return "E"
    }
    else{
        return "F"
    }
}
console.log(getGrade(66))