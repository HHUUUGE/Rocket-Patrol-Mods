/** @type {import("../typings/phaser")} */

/** All of the credit for this version of the game goes to Nathan Altice, I
 * only did what he showed me. Blame him.
 * http://ex-artist.com/CMPM120/Phaser%203%20Rocket%20Patrol%20Tutorial.html
 * I am Sean Carpenter and I approve this message.
 */
let config = {
    type:Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu,Play],
}

//create new game object
let game = new Phaser.Game(config);


game.settings = {

    spaceshipSpeed: 3,
    gameTimer: 60000
}

//reserve some keyboard bindings

let keyF, keyLEFT, keyRIGHT;