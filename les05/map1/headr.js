class App
{
    runApplication()
    {
        console.log("hello World!");
        let arr = ["sabaton", "alestorm", "Rob Dekay", "powerwolf", "Majestica", "glory Hammer"];
        let header = document.getElementsByClassName("BandName");
        for(let i = 0; i < header.length; i++){
            header[i].innerHTML = arr[i];
        }
    }
}

let app = new App();
app.runApplication();