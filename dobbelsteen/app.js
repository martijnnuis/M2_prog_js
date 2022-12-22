class App
{
    runApplication()
    {
        let button = document.getElementById("rerol");
        button.addEventListener('click', (e)=>{

            let stat1 = this.rollState();
            console.log(stat1);
            let headerl1 = document.getElementById("s1");
            headerl1.innerHTML = stat1;
    
            let stat2 = this.rollState();
            console.log(stat2);
            let headerl2 = document.getElementById("s2");
            headerl2.innerHTML = stat2;
    
            let stat3 = this.rollState();
            console.log(stat3);
            let headerl3 = document.getElementById("s3");
            headerl3.innerHTML = stat3;
    
            let stat4 = this.rollState();
            console.log(stat4);
            let headerl4 = document.getElementById("s4");
            headerl4.innerHTML = stat4;
    
            let stat5 = this.rollState();
            console.log(stat5);
            let headerl5 = document.getElementById("s5");
            headerl5.innerHTML = stat5;
            
            let stat6 = this.rollState();
            console.log(stat6);
            let headerl6 = document.getElementById("s6");
            headerl6.innerHTML = stat6;

        } );



    }
    rollDice(){
        return Math.floor(Math.random() * 6 + 1);
    }

    rollState(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();
        let dicearray = [d1, d2, d3 ,d4];
        dicearray.sort();
        let som = dicearray[1] + dicearray[2] + dicearray[3];
        return som;
    }
    

}
let app = new App();
app.runApplication();