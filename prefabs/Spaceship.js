/** @type {import("../typings/phaser")} */

class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame,pointValue){
        super(scene,x,y,texture,frame); //pass these values to parent class
        scene.add.existing(this);       //add this to the calling scene
        this.points=pointValue;         //assign how much this instance of Spaceship is worth
    }
}