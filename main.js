let userName = ["Nexia2" , "Malibu2" , "Zeekr" , "Cobalt" , "Gentra"]
 console.log(userName);
let lengh = alert(` Длина Array ${userName.length}`)
let tekshirish = confirm("Хотите ли вы уокротить Array");
if(tekshirish == true){
    console.log(userName.pop());
    console.log(userName);
}else{
    let lengh = alert(` Длина Array ${userName.length}`)
    console.log(userName);
}
