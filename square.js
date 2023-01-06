class square{
    constructor(game){
        this.game = game;
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./spritesheet (1).png"),0 , 0, 1200, 1200, 6, 0.2 ,1);
    };
    update(){

    };
    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./spritesheet (1).png"),0 ,0, 240, 20);
        //this.animator.drawFrame(this.game.clockTick, ctx, 10, 10, 480, 60);
    };
}
