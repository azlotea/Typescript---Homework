import {BasicCalculator} from "./BasicCalculator";
import {Calculator} from "./Calculator";


export class  ExpertCalculator extends BasicCalculator{

    fact(numar) {
        var factorial;
        if(numar == 0){
            return factorial = 1;
        }
        else {
            return factorial = numar * this.fact(numar-1);
        }
        return factorial;
    }

    pow(numar,exponent) {
        var pow = numar;
        if(exponent == 0) {
            return pow = 1;
        }

        for(let i = 1; i < exponent; i++ ){
             pow = numar * pow;
        }
        return pow;
    }
//metoda sqrt functioneaza doar pentru patrate perfecte
    sqrt1(numar){
        var radical = 1;
        if(numar < 0) {
            numar = -numar;
        }
        while (radical * radical < numar) {
            radical = radical + 1;
        }
        return radical;
    }

    sqrt2(numar) {
       return Math.sqrt(numar);
    }


}