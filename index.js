// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
//a is NOT an array, while b is an array.


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i=0;i<5;i++){
    a[i]=a[i]*2;
}
document.write('['+a+']');

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
document.write(colors[0]+' '+colors[1]+' '+colors[2]+' '+colors[3]);
// case 2 output: 'Red+Green+White+Black'
document.write(colors[0]+'+'+colors[1]+'+'+colors[2]+'+'+colors[3]);
// case 3 output: 'Red,Green,White,Black'
document.write(colors);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(let i=1;i<5;i++){
    var temp;
    for(let j=i;j>0;j--){
        if(a[j]>a[j-1]){
            temp=a[j];
            a[j]=a[j-1];
            a[j-1]=temp;
        }
    }
}
document.write(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function mostfrequent(arr) {
    let obj = {};
    for(let i=0;i<arr.length;i++){
        let arr2 = Object.keys(obj);
        if(arr2.indexOf(String(arr[i])) != -1) 
            obj[arr[i]]++;
        else 
            obj[arr[i]] = 1;
    }
    let max = 0;
    let ans = [];
    for(let i in obj){
        if(obj[i]>max){
            max = obj[i];
            ans.length = 0;
            ans.push(i);
        }
        else if(obj[i] == max){
            ans.push(i);
        }
    }
    return ans;
}
document.write(mostfrequent(a));
