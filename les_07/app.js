class LOTR {
    constructor(
        name,
        speed,
        species,
        age,
        weaponType,
        hunger,
        home

    )
    {
        this.name = name;
        this.speed = speed;
        this.species = species;
        this.age = age;
        this.weaponType = weaponType;
        this.hunger = true;
        this.home = home;
    }
    
    run(speed){
        this.speed = speed;
        console.log(this.name + " is running at " + this.speed + " km/h");
    }

    Hunger(hunger){
        this.hunger = hunger;
        console.log(this.name + " has eaten and so hunger is " + this.hunger)
    }

}
    




let legolas = new LOTR("Legolas", 25, "woodElf", 2931, "bow and long white knife", true, "Ithilien");
let gimli = new LOTR("Gimli", 3, "dwarf", 140, "axe", true, "Glittering Caves of Aglarond");
console.log(legolas)
legolas.run(18)
legolas.Hunger(false)
console.log(gimli)
gimli.run(3)
gimli.Hunger(false)
