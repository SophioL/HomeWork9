var income = prompt("შეიყვანეთ თქვენი ხელფასი")

if (income < 1500) {
    alert("დაბალი ხელფასი")
}
else if (income >= 1500 && income < 2000) {
    alert("საშუალო ხელფასი")
}
else {
    alert("კარგი ხელფასი")
}


var a = [1,4,18,24,15,2,3,19,55]

for(i=0; i<a.length; i++) {
    if (a[i] % 2 == 0) {
     console.log(a[i])
    }
}

var b = [1,3,5,4,7,55,45]

for(i=0; i<a.length; i++){
    if (a[i] % 2 == 1 ) {
    console.log(b[i])
}
}


console.log(Math.max(...b))
console.log(Math.min(...b))
