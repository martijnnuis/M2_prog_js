class App
{
    runApplication()
    {
        let canvas = document.getElementById("huisje");
        let g= canvas.getContext("2d");
        console.log(canvas);
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300, 100);
        g.lineTo(700, 200);
        g.lineTo(600, 400);
        g.lineTo(200, 300);
        g.lineTo(300, 100);
        g.closePath();
        g.stroke();
        g.fill();   

        g.moveTo(700, 200);
        g.beginPath();
        g.fillStyle = "grey";
        g.lineTo(800, 300);
        g.lineTo(600, 400);
        g.lineTo(700, 200);
        g.closePath();
        g.stroke();
        g.fill();

        g.moveTo(800, 300);
        g.lineTo(800, 500);
        g.lineTo(600, 600);
        g.lineTo(200, 500);
        g.lineTo(200, 300);
        g.lineTo(600, 400);
        g.lineTo(800, 300);
        g.moveTo(600, 600);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();

        let randomgetal = Math.random();
        console.log(randomgetal)
        let style;
        if (randomgetal <= 0.5)
        {
            style = "purple";
        }
        else
        {
            style = "yellow";
        }

        g.fillStyle = style;
        g.beginPath();
        g.moveTo(300, 500);
        g.lineTo(300, 440);
        g.lineTo(350, 450);
        g.lineTo(350, 510);
        g.closePath();
        g.stroke();
        g.fill();
    }

}
let app = new App();
app.runApplication();