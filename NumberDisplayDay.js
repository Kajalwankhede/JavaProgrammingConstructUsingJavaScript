//2. Read a Number and Display the week day (Sunday, Monday,...)

let number = Math.floor(Math.random() * 10);
console.log(number);
let day;
switch (number) {
    case 0: 
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;

    default: 
        break;
}

console.log('Day : '+day);
