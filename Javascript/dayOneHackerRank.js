
/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
let length = 7;
let width = 5;
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}
getArea(length, width) 
/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = length + width + length + width;
    return perimeter;
}
getPerimeter(7, 5)
