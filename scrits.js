var key = new Boolean(false)
var names;


function buton() {
if(key==true){
Swal.fire('Я это сделал, а ' + names + ' тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”')
}
else{
Swal.fire({
title: 'Введите имя',
input: 'text', inputAttributes: {
autocapitalize: 'off'
},
showCancelButton: true,
cancelButtonText: 'Отмена',
confirmButtonText: 'Ввести',
allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
if (result.isConfirmed) {
Swal.fire('Я это сделал, а ' + result.value + ' тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”')
names=result.value;
}
})
key=true;
}
}