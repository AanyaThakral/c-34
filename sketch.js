var canvas,backgroundImg,playerCount,database,form,player,game;
var gameState=0;

function Setup()
{
    createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}
function draw()
{

}