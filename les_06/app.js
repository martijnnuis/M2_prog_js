class App
{
    runApplication()
    {
        let myCanvas =  document.getElementById("canvasID");
        let g = myCanvas.getContext("2D");

        g.fillStyle = "red";
        g.rect(100, 100, 30, 30);
        g.stroke();
        g.fill();
    }
}

let app = new App();
app.runApplication();