

cc.Class({
    extends: cc.Component,

    properties: {
        //判断箭头指向用的变量  (Use to confirm the direction of the arrow)
        LR:0
    },


    onLoad () {
        //获取主角节点  (Get player node)
        this.player = cc.find("Canvas/player")
        //获取主角脚本  (Get player script)
        this.playerScript = this.player.getComponent('player')
        //获取主角sprite节点    (Get player sprite)
        this.playerSprite = cc.find("Canvas/player/sprite")
        //获取sprite节点动画组件    (Get animation component of the sprite)
        this.Anim = this.playerSprite.getComponent(cc.Animation)
        //获取sprite脚本    (Get script of sprite)
        this.spriteScript= this.playerSprite.getComponent('playerSprite')
        //获取跳跃脚本  (Get jump button script)
        this.jbS = this.node.parent.getChildByName("btnJump").getComponent('btnJump')
        

        //添加键盘输入监听 (Add keyboard input monitoring)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

    },

    //这个键盘输入事件需要的,请看官方文档"玩家输入事件"的示例   (This keyboard input event needs, please see the official document "Input event" example)
    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    //键盘按下  (Keys press event)
    onKeyDown(event) {
        switch(event.keyCode) {
            //按下A键时  (when "A" pressed)
            case cc.macro.KEY.a:
                if(this.LR == -1) {
                    if(this.playerScript.dir == 0 && this.spriteScript.state  == "stand"){
                        if(this.jbS.jumpCount ==0){
                        this.Anim.play("run")}
                    }
                    this.playerScript.dir = -1
                    this.node.scaleX = 1.5 * this.LR
                    this.node.scaleY = 1.5 
                }              
                    this.playerSprite.scaleX = -1
                break;
            //按下D键时  (when "D" pressed)
            case cc.macro.KEY.d:
                if(this.LR == 1) {
                    if(this.playerScript.dir == 0 && this.spriteScript.state  == "stand"){
                        if(this.jbS.jumpCount ==0){
                            this.Anim.play("run")}
                    }
                    this.playerScript.dir = 1
                    this.node.scaleX = 1.5 * this.LR
                    this.node.scaleY = 1.5 
                }           
                    this.playerSprite.scaleX = 1
                break;
        }
    },
    //键盘释放  (Key release)
    onKeyUp(event) {
        switch(event.keyCode) {
            case cc.macro.KEY.a:
            //按钮缩小
            this.node.scaleX = 1.3 * this.LR
            this.node.scaleY = 1.3 

            //角色移动方向 0 ,角色不移动    (The direction of the character movement is 0, the character does not move)
            this.playerScript.dir = 0
            //此时非攻击状态即播放待机动画  (At this time, the standby animation is played in the non-attack state)
            if(this.spriteScript.state  == "stand"){
                
                this.Anim.play("stand")
            }
                break;
            case cc.macro.KEY.d:
            //按钮缩小
            this.node.scaleX = 1.3 * this.LR
            this.node.scaleY = 1.3 

            //角色移动方向 0 ,角色不移动    (The direction of the character movement is 0, the character does not move)
            this.playerScript.dir = 0
            //此时非攻击状态即播放待机动画  (At this time, the standby animation is played in the non-attack state)
            if(this.spriteScript.state  == "stand"){
                
                this.Anim.play("stand")
            }
                break;
        }
    },

    start () {
        //点击事件  (Click event)
        this.node.on(cc.Node.EventType.TOUCH_START,function(){
            //放大按钮  (Button gets bigger)
            this.node.scaleX = 1.5 * this.LR
            this.node.scaleY = 1.5 

            //给主角传入移动方向    (movement direction)
            if(this.LR == 1) {
                this.playerScript.dir = 1
                
            }else if(this.LR == -1){
                this.playerScript.dir = -1
            }

            //非攻击状态下播放跑步动画  (Play running animation in non-attack state)
            if(this.spriteScript.state == "stand"){
                if(this.jbS.jumpCount ==0){
                    this.Anim.play("run")}
            }
            //顺便改下角色动画的朝向    (Change the direction of the character animation)
            this.playerSprite.scaleX = this.LR
        },this)

        //点击事件结束  (End of Click event)
        this.node.on(cc.Node.EventType.TOUCH_END,function(){
            //按钮缩小
            this.node.scaleX = 1.3 * this.LR
            this.node.scaleY = 1.3 

            //角色移动方向 0 ,角色不移动    (The direction of the character movement is 0, the character does not move)
            this.playerScript.dir = 0
            //此时非攻击状态即播放待机动画  (At this time, the standby animation is played in the non-attack state)
            if(this.spriteScript.state == "stand"){
                
                this.Anim.play("stand")
            }
            
        },this)

        //Touch event end
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){
            this.node.scaleX = 1.3 * this.LR
            this.node.scaleY = 1.3 

            this.playerScript.dir = 0
            if(this.spriteScript.state  == "stand"){
                this.Anim.play("stand")
            }

        },this)
    },

    // update (dt) {},
});
