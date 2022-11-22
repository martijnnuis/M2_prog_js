class App
{
    runApplication()
    {
        let appnaam = "discord";
        let versienummer = 0.9;
        const versiedatum = new Date("2022/11/22") ;
        let autheur = "Martijn Nuis";
        let copyright = "Martijn Nuis";
        let distributeur = "henk Jan";
        let darkmode = false;
        console.log(appnaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }

}
let app = new App();
app.runApplication();
