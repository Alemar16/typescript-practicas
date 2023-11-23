// este es el segundo archivo de la practica de typescript multiplier 2
// se usa Process.argv para obtener los argumentos de la consola y Number para convertirlos a number


const multiplicator2 = (a: number, b: number, prinText: string) => {
  console.log(prinText, a * b);
};
console.log(process.argv);// en este caso imprime los argumentos de la consola que es un array de strings.
/*
 [
  "D:\\ARMANDO\\Escritorio\\typescript-practica\\node_modules\\ts-node\\dist\\bin.js",
  "D:\\ARMANDO\\Escritorio\\typescript-practica\\multiplier2.ts",
  "3",
  "4",
]; 
*/

const a: number = Number(process.argv[2]);// la constante a debe ser un numero en este caso y se usa Number para convertirlo  con process.argv que es un array de strings en este caso
const b: number = Number(process.argv[3]);

multiplicator2(a, b, `The product of ${a} and ${b} is: `);