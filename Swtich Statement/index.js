function getDayPlan(day){
   switch(day){
    case 'Monday':
        return "Start of the working day"
    case 'Tuesday':
        return "Keep going"
    case 'Wednesday':
        return "Halfway done"
    case 'Thurday':
        return "Almost done"
    case 'Friday':
        return "Weekend is near"
    case 'Saturday':
        return "It's weekend"
    case 'Sunday':
        return "It's weekend"
    default:
        return "Invalid day"
   }
}
console.log(getDayPlan("Tuesday"))