const swapDigits = (number)=>{
    let swappedNumber = "";
    //write logic here
    if (number < 0) {
        return 0;
    }

    let num = number.toString();
    if (num.length % 2 == 0) {
        let i = 1;
        while (i < num.length) {
            swappedNumber += num[i];
            swappedNumber += num[i - 1];
            i += 2;
        }
    }

    else {
        swappedNumber = num[0];
        let i = 2;
        while (i < num.length) {
            swappedNumber += num[i];
            swappedNumber += num[i - 1];
            i += 2;
        }
    }

    return parseInt(swappedNumber);
    
}

module.exports = swapDigits
