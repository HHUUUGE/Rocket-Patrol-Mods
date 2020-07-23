/** @type {import("../typings/phaser")} */

/**
 * Cross Scene Persistent Higschore:                10
 * Implemented Fire UI Text:                        10
 * Speed increase after 30 secs:                    10
 * Randomized ship movement at start of each play:  10
 * New Scrolling tilesprite for background:         10
 * Player controls rocket after firing:             10
 * 4 new explosion sfx randomly called on hit:      15
 * Display time remaining on screen in seconds:     15
 * Added background Music*:                         10
 * -------------------------------------------------------
 * Total:                                          100
 * 
 *      *Background Music is Public domain, but made by someone else (wasn't sure exactly what you meant by copyright free).
 *       Attribution in Menu.js
 */


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