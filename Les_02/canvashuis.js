class App
{
    runApplication()
    {
        console.log("Hello world!");
        let canvas = document.getElementById("CanvasID");
        let g = canvas.getContext("2d");
        this.tekenhuis(g,50,50);
        this.tekenhuis(g,300,50);
        this.tekenhuis(g,200,50);
        this.tekenkerstboom(g, 450, 100);
        this.tekenkerstboom(g, 340, 100);
    }

    tekenhuis(g,x,y){

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(x+30, y+10);
        g.lineTo(x+70, y+20);
        g.lineTo(x+60, y+40);
        g.lineTo(x+20, y+30);
        g.lineTo(x+30, y+10);
        g.closePath();
        g.stroke();
        g.fill();   

        g.moveTo(x+70, y+20);
        g.beginPath();
        g.fillStyle = "grey";
        g.lineTo(x+80, y+30);
        g.lineTo(x+60, y+40);
        g.lineTo(x+70, y+20);
        g.closePath();
        g.stroke();
        g.fill();

        g.moveTo(x+80, y+30);
        g.lineTo(x+80, y+50);
        g.lineTo(x+60, y+60);
        g.lineTo(x+20, y+50);
        g.lineTo(x+20, y+30);
        g.lineTo(x+60, y+40);
        g.lineTo(x+80, y+30);
        g.moveTo(x+60, y+60);
        g.lineTo(x+60, y+40);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "black"
        g.moveTo(x+30, y+50);
        g.lineTo(x+30, y+44);
        g.lineTo(x+35, y+45);
        g.lineTo(x+35, y+51);
        g.closePath();
        g.stroke(); 
    }

    tekenkerstboom(g,x,y){
        g.moveTo(x,y);
        g.beginPath();
        g.fillStyle = "green"
        g.lineTo(x-20, y);
        g.lineTo(x,y-80);
        g.lineTo(x+20,y );
        g.lineTo(x,y);
        g.closePath();
        g.stroke();
    }
}
let app = new App();
app.runApplication();