import {userInfo} from "./Script/global";
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        next:""
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.ui = cc.find("Canvas/uiCamera/ui")
        this.playerFollower = cc.find("Canvas/playerFollower")
        this.goNext = false
        this.blackmask = cc.find("Canvas/blackmask")
    },

    
    onCollisionEnter(other,self){
        
        if(this.goNext == false){

        this.getPostcard();

        //确保只触发一次
        this.goNext = true

        //屏幕渐暗动画
        this.blackmask.getComponent(cc.Animation).play("blackmask")
                let state = this.blackmask.getComponent(cc.Animation).getAnimationState("blackmask")
        state.speed = 2;
        //保存player当前属性
        cc.find("Canvas/player").getComponent('player').save()
        //3.5秒后切换场景
        setTimeout(() => {
            cc.director.loadScene(this.next)
        }, 3500);
    }
    },

    getPostcard(){
        let sceneName=cc.director.getScene().name;
        switch(sceneName){
            case "changchun_night":{
                //第一次通关
                if(userInfo.firstComplete[0]){
                    //压入一张随机明信片
                    userInfo.postcardReceiveQueue.push(Math.round(Math.random()*3+0.5));
                    userInfo.firstComplete[0]=false;
                }
                else{
                    //20%几率再次获得
                    if(Math.random()<=0.2){
                        let num=Math.round(Math.random()*3+0.5);
                        //明信片重复重roll
                        while(userInfo.postcardThumbnailQueue.indexOf(num)){
                            num=Math.round(Math.random()*3+0.5);
                        }
                        //压入新的明信片
                        userInfo.postcardReceiveQueue.push(num);
                    }
                }
                break;                
            }
            case "chendu_night":{
                if(userInfo.firstComplete[1]){
                    userInfo.postcardReceiveQueue.push(Math.round(Math.random()*3+3.5));
                    userInfo.firstComplete[1]=false;
                }
                else{
                    if(Math.random()<=0.2){
                        let num=Math.round(Math.random()*3+3.5);
                        while(userInfo.postcardThumbnailQueue.indexOf(num)){
                            num=Math.round(Math.random()*3+3.5);
                        }
                        userInfo.postcardReceiveQueue.push(num);
                    }
                }
                break;                
            }
            case "哈尔滨night":{
                if(userInfo.firstComplete[2]){
                    userInfo.postcardReceiveQueue.push(Math.round(Math.random()*3+6.5));
                    userInfo.firstComplete[2]=false;
                }
                else{
                    if(Math.random()<=0.2){
                        let num=Math.round(Math.random()*3+6.5);
                        while(userInfo.postcardThumbnailQueue.indexOf(num)){
                            num=Math.round(Math.random()*3+6.5);
                        }
                        userInfo.postcardReceiveQueue.push(num);
                    }
                }
                break;
            }
            case "杭州night":{
                if(userInfo.firstComplete[3]){
                    userInfo.postcardReceiveQueue.push(Math.round(Math.random()*3+9.5));
                    userInfo.firstComplete[3]=false;
                }
                else{
                    if(Math.random()<=0.2){
                        let num=Math.round(Math.random()*3+9.5);
                        while(userInfo.postcardThumbnailQueue.indexOf(num)){
                            num=Math.round(Math.random()*3+9.5);
                        }
                        userInfo.postcardReceiveQueue.push(num);
                    }
                }
                break;
            }
            case "wuhan_night":{
                if(userInfo.firstComplete[4]){
                    userInfo.postcardReceiveQueue.push(Math.round(Math.random()*3+12.5));
                    userInfo.firstComplete[4]=false;
                }
                else{
                    if(Math.random()<=0.2){
                        let num=Math.round(Math.random()*3+12.5);
                        while(userInfo.postcardThumbnailQueue.indexOf(num)){
                            num=Math.round(Math.random()*3+12.5);
                        }
                        userInfo.postcardReceiveQueue.push(num);
                    }
                }
                break;
            }
            case "xishuangbanna_night":{
                if(userInfo.firstComplete[5]){
                    userInfo.postcardReceiveQueue.push(Math.round(Math.random()*3+15.5));
                    userInfo.firstComplete[5]=false;
                }
                else{
                    if(Math.random()<=0.2){
                        let num=Math.round(Math.random()*3+15.5);
                        while(userInfo.postcardThumbnailQueue.indexOf(num)){
                            num=Math.round(Math.random()*3+15.5);
                        }
                        userInfo.postcardReceiveQueue.push(num);
                    }
                }
                break;
            }
            default: return
        }
    },

    update (dt) {
        if(this.goNext == true){
            this.ui.opacity -= 5
            this.blackmask.x = this.playerFollower.x
        }
    },
});
