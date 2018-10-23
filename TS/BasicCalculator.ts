import {Calculator} from "./Calculator";

export class BasicCalculator implements Calculator {
    add (a,b, ... args){
        var sum = a + b;

        args.forEach(elem =>{  //elem => inseamna function (elem)
            sum = sum + elem;
        })
        return sum;
    }
    dif (a,b, ... args){
        var dif = a-b;

        args.forEach(function(elem){
            dif = dif - elem;
        })
        return dif;

    }
    mlt (a,b, ... args){
        var mlt = a*b;

        args.forEach(function(elem){
            mlt = mlt * elem;
        })
        return mlt;

    }
    div (a,b, ... args){
        var div = a/b;

        args.forEach(function(elem){
            div = div/elem;
        })
        return div;

    }

    fact(numar) {
        //
        var x = undefined;
    }
    pow(numar,exponet) {
        console.log("fact is defined in ExpertCalculator")
    }
    sqrt(numar) {
        console.log("fact is defined in ExpertCalculator")
    }


}