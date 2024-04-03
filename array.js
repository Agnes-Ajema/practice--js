//write a javascript function to sort the following array of objects by tittle value.
let books = [{author:"Margret Ogola",title:"The River and the source",libId:234},{author:"Chinwa Achebe",title:"Hope",libId:345},{author:"Ken Walibora",title:"The dark city",libId:987}]
function sortArray(x,y) {
 if (x.title<y.title) 
 return -1;
if (x.title > y.title)  
return 1;
return 0;
}
console.log(books.sort(sortArray))


//write a javascript program to compute the sum and product of an array of integers

let array = [3,4,5,6,8,7],
s = 0,
p = 1
var i;
for (i = 0; i < array.length;i +=1)
{s += array[1];p *= array[i];}
console.log("sum : "+s + "product : " +p);

//write a simple javascript program to join all elements of the following array
myFruits = ["mango","orange","apple","pineapple","berry"];
console.log(myFruits.join());
console.log(myFruits.toString())

//write a javascript function to find an array containing a specific element
function items (arr,element){
    for (var i =0; i< arr.length; i++) {
        if (arr[i] ===element){
            return true;
        }
    }
    return false;
}
arr = [4,5,6,7,8];
console.log(items(arr,5));
console.log(items(arr,2));


function removeDuplicate(num) {
    var i,
    len =num.length,
    out =[],
    obj = {};

    for (i =0;i <len; i++) {
        obj[num[i]] =0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;  
}
let myNumbers = [2,3,3,4,6,7,8,9,7];
result = 
removeDuplicate(myNumbers);
console.log(myNumbers);
console.log(result);