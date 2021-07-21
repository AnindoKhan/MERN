class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
            this.power = power;
            this.res = res;
    }
    attack(target){
        target.res -=this.power;
    }
}
class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super (name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ){
            if (this.stat == "power"){
                target.power += this.magnitude;
            } else{
                target.res += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
let redBeltNinja = new Unit("Red Belt Ninja", 3, 3,4);
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5,4);
let hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's defense by 3", "resilience", 3);
let unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduces target's defense by 2", "resilience", -2);
let pairProgramming = new Effect("Pair Programming", 3, "increase targets power by 2", "power", 2);

hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja.res);
unhandledPromiseRejection.play(redBeltNinja);
console.log(redBeltNinja.res);
pairProgramming.play(redBeltNinja);
console.log(redBeltNinja.power);
blackBeltNinja.attack(redBeltNinja);
console.log(redBeltNinja.res);
