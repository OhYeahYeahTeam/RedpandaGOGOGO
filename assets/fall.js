

cc.Class({
    extends: cc.Component,

    properties: {
        //(get node of jump button)
        btnJump: {
           
            default: null,        
                      
            type: cc.Node, 
            
        },
        // 新增属性：用于控制每2秒扣除一点HP的定时器
        hpDeductionTimer: {
            default: 0,
            visible: false
        },
        hpDeductionInterval: 2, // 扣除HP的时间间隔（秒
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
        this.startHpDeductionTimer();

        
    },
    // 新增函数：启动HP扣除定时器
    startHpDeductionTimer() {
        // this.hpDeductionTimer = setInterval(() => {
        //     // 如果玩家在平台上，并且玩家的hp大于0，则扣除一点HP
        //     if (this.player.y > 0 && this.player.getComponent('player').hp > 0) {
        //         this.player.getComponent('player').hp -= 1;
        //         // 刷新小心心图标
        //         this.HPnST.getComponent('HPnST').HPchange();
        //     }
        // }, this.hpDeductionInterval * 1000); // 将秒转换为毫秒
    },

    // 新增函数：停止HP扣除定时器
    stopHpDeductionTimer() {
        // clearInterval(this.hpDeductionTimer);
    },

    //接触  (touch the collider box)
    onBeginContact() {
  
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
        this.hpDeductionTimer = setInterval(() => {
            

            if (this.player.y > 0 ) {
this.node.destroy();  
            }
        }, this.hpDeductionInterval * 1000); // 将秒转换为毫秒
    }}

    },
    //分离  (out of the collider box)
    onEndContact() {

        if(this.btnDash.ready ==1){

            this.spriteScript.state = "jump"
            this.btnDash.ready =0
            clearInterval(this.hpDeductionTimer);
                 
                
                
        }
      

    },
    update(){
        
        if(this.spriteScript.state == "dashAtk"){
            this.player.x += this.playerSprite.scaleX*1.5
            if(this.player.y > 0.6){
            this.player.y -= 0.6    }
        } 
        
    }
});
