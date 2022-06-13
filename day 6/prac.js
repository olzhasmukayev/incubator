// working with the methods and thi

const subwaySurf = {
    health : 100, 
    currSpeed : 10,
    run() { 
        if (this.currSpeed > 50) {
            this.currSpeed = 50;
            console.log("Maximum speed. Cannot run faster!");
            this.stop();
        } else {
            this.currSpeed += 10;
        }
        console.log(`Current speed is ${this.currSpeed}`);
    }, 
    stop() {
        this.currSpeed -= 10;
        if (this.currSpeed < 0) {
            console.log("The Person stopped! Speed is 0 km/h");
        }
        console.log(`Current speed is ${this.currSpeed}`);
    }, 
    crashed() {
        this.currSpeed -= 30;
        this.health -= 30;
        if (this.health <= 0) {
            console.log("You are dead!");
        }
        console.log(`Current speed is ${this.currSpeed}`);

    }
}


setInterval(() => {
    subwaySurf.run();
}, 2000);