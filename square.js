class square{
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./spritesheet (1).png"),0 , 0, 120, 120, 6, 0.2 ,1, false , true);

        this.x = 0;
        this.y = 0;
        this.speed = 500;
    };
    update(){
        this.y += this.speed * this.game.clockTick;
        if (this.y >1024) this.y = 0;
    };
    draw(ctx){
        
        //ctx.drawImage(ASSET_MANAGER.getAsset("./spritesheet (1).png"),0 ,0, 240, 20);
        if(1.0>=this.animator.elapsedTime){
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, .5, .5,);
        }else{
            this.animator.drawFrame(0, ctx, this.x, this.y, .5, .5);
            setTimeout(()=>{this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, .5, .5);},5000);
    }
    };
}
