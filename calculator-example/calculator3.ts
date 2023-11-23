//En este caso se crea una variable global para definir el valor del parametro op de la funcion calculator3
// la idea principal de este procedimiento es que al usar type operations se puede usar como variable global e inclusive se puede exportar para el uso de otros archivos utilizando module.exports




type operation = "multiply" | "add" | "divide";
type Result = number;
const calculator3 = (
  a: number,
  b: number,
  op: operation
): Result => {// se usa Result para definir el tipo de la variable result
  if (op === "multiply") return a * b;
  if (op === "add") return a + b;
  if (op === "divide") {
    if (b === 0) throw new Error("Cannot divide by 0") ;// se usa Error para definir el tipo de la variable remplazanso el "result" anterior
    return a / b;
  }
  throw new Error("Invalid operation");// se coloca un error cuando no se cumple las condiciones anteriores
};
const result11 = calculator3(1, 2, "multiply");
const result12 = calculator3(1, 2, "add");
const result13 = calculator3(1, 2, "divide");
//ejemplo de uso de error en la divicion
const result14 = calculator3(1, 0, "divide");



console.log(result11);
console.log(result12);
console.log(result13);
console.log(result14);


  