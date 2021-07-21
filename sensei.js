class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log ("Health is: " + this.health);
        console.log( "Speed is: " + this.speed);
        console.log("Strength is: " + this.strength);
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health);
    }
}
const ninja1 = new Ninja("Hyabusa", 50);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(wisdom){
        super(wisdom)
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("lololol")
    }
    
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
