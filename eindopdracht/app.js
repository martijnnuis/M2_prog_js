function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

class App
{
    runApplication()
    {
        console.log("Hello world!");
        let canvas = document.getElementById("CanvasID");
        let g = canvas.getContext("2d");
        this.tekenhuis(g,randInt(150, 100),randInt(100, 100), 20);
        this.tekenhuis(g,randInt(200, 150),randInt(150, 150), 20);
        this.tekenhuis(g,randInt(250, 200),randInt(200, 200), 20);
        this.tekenhuis(g,randInt(300, 250),randInt(250, 250), 20);
        this.tekenhuis(g,randInt(350, 300),randInt(300, 300), 20);
        this.tekenhuis(g,randInt(400, 350),randInt(350, 350), 20);
        this.tekenhuis(g,randInt(450, 400),randInt(400, 400), 20);
        this.tekenhuis(g,randInt(500, 450),randInt(450, 450), 20);
        this.tekenhuis(g,randInt(550, 500),randInt(500, 500), 20);
        this.tekenhuis(g,randInt(600, 550),randInt(550, 550), 20);
        this.tekenhuis(g,randInt(650, 600),randInt(600, 600), 20);
        this.tekenhuis(g,randInt(700, 650),randInt(650, 650), 20);
        this.tekenhuis(g,randInt(750, 700),randInt(700, 700), 20);
        this.tekenhuis(g,randInt(800, 750),randInt(750, 750), 20);
        this.tekenhuis(g,randInt(850, 800),randInt(800, 800), 20);
        this.tekenhuis(g,randInt(900, 850),randInt(850, 850), 20);
        this.Text(g);
    }
    //huis
    tekenhuis(g,x,y,factor){

        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(x+3*factor, y+1*factor);
        g.lineTo(x+7*factor, y+2*factor);
        g.lineTo(x+6*factor, y+4*factor);
        g.lineTo(x+2*factor, y+3*factor);
        g.lineTo(x+3*factor, y+1*factor);
        g.closePath();
        g.stroke();
        g.fill();

        g.moveTo(x+7*factor, y+2*factor);
        g.beginPath();
        g.fillStyle = "brown";
        g.lineTo(x+8*factor, y+3*factor);
        g.lineTo(x+6*factor, y+4*factor);
        g.lineTo(x+7*factor, y+2*factor);
        g.closePath();
        g.stroke();
        g.fill();

        g.moveTo(x+8*factor, y+3*factor);
        g.lineTo(x+8*factor, y+5*factor);
        g.lineTo(x+6*factor, y+6*factor);
        g.lineTo(x+2*factor, y+5*factor);
        g.lineTo(x+2*factor, y+3*factor);
        g.lineTo(x+6*factor, y+4*factor);
        g.lineTo(x+8*factor, y+3*factor);
        g.moveTo(x+6*factor, y+6*factor);
        g.lineTo(x+6*factor, y+4*factor);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "black"
        g.moveTo(x+3*factor, y+5*factor);
        g.lineTo(x+3*factor, y+4.4*factor);
        g.lineTo(x+3.5*factor, y+4.5*factor);
        g.lineTo(x+3.5*factor, y+5.1*factor);
        g.closePath();
        g.stroke(); 
    }

    //tekst
    Text(g){
        g.fillStyle = "red";

        g.beginPath();
        g.font = "35px Arial";

        g.fillText("Vrolijk Kerstfeest mensjes", 500, 100);
    }

}

let app = new App();
app.runApplication();