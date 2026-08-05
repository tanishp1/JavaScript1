function canWatchMovie(age, hasParentPermission, isWeekend){
    if(age < 13 || !isWeekend){
        return false;
    }
    return age >= 18 || hasParentPermission;
}
console.log(canWatchMovie(10, true, true))