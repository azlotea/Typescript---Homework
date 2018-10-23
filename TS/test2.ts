import {BasicCalculator} from "./BasicCalculator";
import {ExpertCalculator} from "./ExpertCalculator";

let calc = new BasicCalculator();
let calcExp = new ExpertCalculator();

console.log("Rezultatul adunarii este: " + calc.add(2,3,4,5,6));
console.log("Rezultatul scaderii este: " + calc.dif(9,2,1,1));
console.log("Rezultatul inmultirii este: " + calc.mlt(2,3,6,1));
console.log("Rezultatul impartirii este: " + calc.div(100,2,2,1));
console.log("Rezultat factorial: " + calcExp.fact(5));
console.log("Rezultat pow: " + calcExp.pow(2,4));
console.log("Rezultat sqrt: " + calcExp.sqrt1(9));
console.log("Rezultat sqrt: " + calcExp.sqrt2(10));