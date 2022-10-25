var express = require('express'); //загрузка модуля express
var router = express.Router(); //получаем объект
//Node.js express.Router() позволяет создавать составные модульные
// маршруты без повторного указания повторяющихся частей URL.

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router; //позволяет импортировать файл в app.js

//Стоит отметить, что колбэк-функция имеет третий аргумент - 'next', т. е.
// является не простой колбэк-функцией, а колбэк-функцией промежуточного модуля.
// Пока третий аргумент не используется, но будет полезен в дальнейшем,
// если мы захотим создать несколько обработчиков пути '/'