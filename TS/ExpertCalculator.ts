import {BasicCalculator} from "./BasicCalculator";


class  ExpertCalculator extends BasicCalculator {
    fact (numar);
    //factorial;
    //pow (numar,exponent);
    //sqrt (a,b);

    fact(numar) {
        var factorial;
        if(numar == 0){
            return factorial = 1;
        }
        else {
            return factorial = numar.fact(numar-1);
        }
    }



    // pow(numar,exponent) {
    //     var pow = numar;
    //     if(exponent == 0) {
    //         return pow = 1;
    //     }
    //
    //     for(int i = 1; i < exponent; i++ )v{
    //         pow = pow * numar;
    //     }
    //     return pow;
    // }
}