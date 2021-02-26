var names = ["Koose!", "Koko", "Awaakye", "Diehuo", "Jollof", "Rice and Stew"];
function breakfast(today, yesterday){
    if (yesterday == 2) {
        return names[0]
    }   else if (yesterday <= today -2){
        return names[1]
    }   else if (yesterday == today-1){
        return names[2]
    }   else if (yesterday == today){
        return names[3]
    }   else if (yesterday == today + 1){
        return names[4]
    }   else if (yesterday == today + 2){
        return names[5]
    }   
}

console.log(breakfast(4,1));