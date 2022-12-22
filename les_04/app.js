class App
{
    runApplication()
    {
        console.log(this.som(5,6));
        console.log(this.bwahaha("bwahaha"));
        this.mario();
        console.log(this.hello());
    }

    mario(){
        console.log("Mario!");
    }

    bwahaha(bericht){
        return bericht;
    }

    som(x, y){
        return x+y
    }

    hello(){
        return "ghello"
    }

    
}
let app = new App();
app.runApplication();
