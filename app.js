//Este es el servidor que estoy runeando.
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('prueba');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Chalk me sirve para cambiarle el color al output (console.log) a los colores que tengo en la brocha;
const chalk = require ("chalk");

console.log(chalk.red('Prueba'));


//Sirve para crear una barra de progreso de algun programa que estemos corriendo.
// const ProgressBar = require('progress')

// const bar = new ProgressBar(':bar', { total: 15 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100);


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your dog name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})

//npm install <package>@<version>.