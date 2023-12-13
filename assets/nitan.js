

cc.Class({
    extends: cc.Component,

    properties: {
        //(get node of jump button)
        btnJump: {
           
            default: null,        
                      
            type: cc.Node, 
            
        },
    },

    // LIFE-CYCLE CALLBACKS:

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
        //跳跃按钮脚本  (Get script of jump button)
        this.jumpScript= this.btnJump.getComponent('btnJump')
        //获取btnDash脚本    (Get script of btnDash)
        this.btnDash = cc.find("Canvas/uiCamera/ui/btnDASH").getComponent('btnDash')

        this.HPnST = cc.find("Canvas/uiCamera/ui/HPnST")
        this.onPlatform = false; // 新增属性：用于标识主角是否在平台上
        this.walkSpeedMultiplier = 0.75; // 新增属性：行走速度减慢的倍数
        this.originalWalkSpeed = this.playerScript.walkSpeed; // 新增属性：原始行走速度
        this.startHpDeductionTimer();
        
    },
    //接触  (touch the collider box)
    onBeginContact() {
        if (this.player.y > 0) {
            // 新特性：当主角在平台上行走时，减缓行走速度
            if (this.onPlatform) {
                this.playerScript.walkSpeed = this.originalWalkSpeed * this.walkSpeedMultiplier;
            }
        if(this.player.y > 0){
        //停止下落 (stop falling)
        if(this.spriteScript.state == "jump" ||this.spriteScript.state == "jumpAtk" ||this.spriteScript.state == "dashAtk" || this.spriteScript.state == "dash" ){
        this.btnDash.OnPlatform = true
        this.btnDash.ready = 1

        this.jumpScript.jumpSpd = 0
        this.jumpScript.jumpCount = 0
        this.jumpScript.fall = false

        //动画切换 (change animation)
        if(this.playerScript.dir == 0 ){
            this.Anim.play("landing")
            this.spriteScript.state = "stand"
        }else{
            this.Anim.play("run")
            this.spriteScript.state = "stand"
        }
        
        
        this.btnDash.IsDash = false
        
        }}

    }},
    //分离  (out of the collider box)
    onEndContact() {
        if(this.btnDash.ready ==1){
            // 新特性：当主角不再在平台上时，恢复原始行走速度
            if (this.onPlatform) {
                this.playerScript.walkSpeed = this.originalWalkSpeed;
            }

                 
                
                
        }
      

    },
    update(){
                // 新特性：更新 onPlatform 属性的值，标识主角是否在平台上
        this.onPlatform = this.player.y > 0;

        
    }
});
