import { userInfo} from './global';
import { unlock } from './global';
import AudioEngine from "./AudioEngine";
const {ccclass, property} = cc._decorator;

@ccclass
export default class UI extends cc.Component {

    money:cc.Label=null;
    ae:AudioEngine=null;

    onLoad () {
        
        this.money=this.node.getChildByName("sys_clover_window").getChildByName("money").getComponent<cc.Label>(cc.Label);
        if(unlock.cloth1 ==1 ){
        cc.find("Canvas/Main Camera/shopping/buy1").destroy();}
        if(unlock.cloth2 ==1 ){
        cc.find("Canvas/Main Camera/shopping/buy2").destroy();}
        if(unlock.cloth3 ==1 ){
        cc.find("Canvas/Main Camera/shopping/buy3").destroy();}
        if(unlock.cloth4 ==1 ){
        cc.find("Canvas/Main Camera/shopping/buy4").destroy();}
        if(unlock.cloth5 ==1 ){
        cc.find("Canvas/Main Camera/shopping/buy5").destroy();}
        this.upMoney();
    }

    upMoney(){
        this.money.node.runAction(
            cc.sequence(
                cc.moveBy(.05,cc.v2(0,10)),
                cc.callFunc(()=>{
                    this.money.string=`${userInfo.money}`;
                }),
                cc.moveBy(.05,cc.v2(0,-10))
            )
        )
    }
    clover(){            
        userInfo.money += 500;
       

        this.upMoney();
        cc.find("clover").destroy()
       

        }
    happy(){            
            userInfo.money += (Math.floor(Math.random() * 101) + 100) ;
           
    
            this.upMoney();
            cc.find("ui/UI Camera/win/happy").destroy()
           
    
            }
    
    buy1(){

        if(userInfo.money>=150){
        userInfo.money -= 150;
        this.upMoney();
        cc.find("Canvas/Main Camera/shopping/buy1").destroy();
        unlock.cloth1 +=1}
        else
        cc.resources.load("preb/warning", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;

            let warning = cc.instantiate(prefab);
            let name = this.node.name;

            warning.setParent(cc.find("Canvas/Main Camera/shopping"));

                    cc.resources.load(`skinsIntro/warning/zhuzi`, cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        warning.getComponent(cc.Sprite).spriteFrame = pt;
                    });
                
            
        });}
        

    buy2(){ 
        if(userInfo.money>=150){
            userInfo.money -= 150;
        this.upMoney();
        cc.find("Canvas/Main Camera/shopping/buy2").destroy();
        unlock.cloth2 +=1}       
        else
        cc.resources.load("preb/warning", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;

            let warning = cc.instantiate(prefab);
            let name = this.node.name;

            warning.setParent(cc.find("Canvas/Main Camera/shopping"));

                    cc.resources.load(`skinsIntro/warning/zhuzi`, cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        warning.getComponent(cc.Sprite).spriteFrame = pt;
                    });
                
            
        });}
    buy3(){ 
        if(userInfo.money>=150){
         userInfo.money -= 150;
        this.upMoney();
        cc.find("Canvas/Main Camera/shopping/buy3").destroy()
        unlock.cloth3 +=1;}       
        else
        cc.resources.load("preb/warning", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;

            let warning = cc.instantiate(prefab);
            let name = this.node.name;

            warning.setParent(cc.find("Canvas/Main Camera/shopping"));

                    cc.resources.load(`skinsIntro/warning/zhuzi`, cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        warning.getComponent(cc.Sprite).spriteFrame = pt;
                    });
                
            
        });}
    buy4(){ 
        if(userInfo.money>=150){
            userInfo.money -= 150;
        this.upMoney();
        cc.find("Canvas/Main Camera/shopping/buy4").destroy()
        unlock.cloth4 +=1;}       
        else
        cc.resources.load("preb/warning", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;

            let warning = cc.instantiate(prefab);
            let name = this.node.name;

            warning.setParent(cc.find("Canvas/Main Camera/shopping"));

                    cc.resources.load(`skinsIntro/warning/zhuzi`, cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        warning.getComponent(cc.Sprite).spriteFrame = pt;
                    });
                
            
        });}

    buy5(){ 
        if(userInfo.money>=150){
        userInfo.money -= 150;
        this.upMoney();
        cc.find("Canvas/Main Camera/shopping/buy5").destroy()
        unlock.cloth5 +=1;}       
        else
        {cc.resources.load("preb/warning", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;

            let warning = cc.instantiate(prefab);
            let name = this.node.name;

            warning.setParent(cc.find("Canvas/Main Camera/shopping"));

                    cc.resources.load("skinsIntro/warning/zhuzi", cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        warning.getComponent(cc.Sprite).spriteFrame = pt;
                    });
                
            
        });}
    }

    goTobackpack1(){
        cc.director.loadScene("scene/backpack1")
    }
    goTobackpack2(){
        cc.director.loadScene("scene/backpack2")
    }

    goToGarden(){
        cc.director.loadScene("scene/garden")
    }

    goToHome(){
        cc.director.loadScene("scene/home")
    }

    goToMap(){
        cc.director.loadScene("scene/map")
    }
    goToshopping(){
        cc.director.loadScene("scene/shopping")
    }
    goTochange(){
        cc.director.loadScene("scene/changeclothes")
    }
    goTochange2(){
        cc.director.loadScene("scene/changeclothes 2")
    }
}
