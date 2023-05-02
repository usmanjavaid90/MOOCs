const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    if (choice == "circle") {
        if (radius >= 0) {
            area = pi * radius * radius;
        }
        else {
            return -1;
        }
    }

    else if (choice == "square") {
        if (side >= 0) {
            area = side * side;
        }
        else {
            return -1;
        }
    }

    else if (choice == "rectangle") {
        if (length >= 0 && breadth >= 0) {
            area = length * breadth;
        }
        else {
            return -1;
        }
    }

    else {
        return -1
    }

    return area;
}
module.exports = {calculateArea}
