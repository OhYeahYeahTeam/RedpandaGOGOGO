import { userInfo } from './global';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    //点击邮件或者缩略图时显示一张明信片
    clickOnMailorThunmbnail(){
        //加载明信片预制体
        cc.loader.loadRes("preb/postcard",(err,prefab:cc.Prefab)=>{
            if(err) return;
            //实例化预制体
            let postcard=cc.instantiate(prefab);
            //初始化明信片编号
            let num=0;
            //检查场景名字
            let name=cc.director.getScene().name;
            if(name=="garden"){
                postcard.setParent(cc.find("Canvas/stage/Stage Camera"));
                //获取接受队列第一个编号
                num=userInfo.postcardReceiveQueue.shift();
                //加入缩略图队列并排序
                userInfo.postcardThumbnailQueue.push(num);
                userInfo.postcardThumbnailQueue=userInfo.postcardThumbnailQueue.sort();
            }
            if(name=="backpack1"||name=="backpack2"){
                postcard.setParent(cc.find("Canvas/Main Camera"));
                //根据缩略图名称获取编号
                let thumbnailName="";
                let thumbnail=["","CC1","CC2","CC3","CD1","CD2","CD3","HEB1","HEB2","HEB3","HZ1","HZ2","HZ3","WH1","WH2","WH3","XSBN1","XSBN2","XSBN3"]
                thumbnailName=this.node.getComponent(cc.Sprite).spriteFrame.name;
                num=thumbnail.indexOf(thumbnailName);
            }
            //按编号加载明信片
            switch(num){
                case 1:{
                    cc.loader.loadRes("postcard/CC/CC1",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 2:{
                    cc.loader.loadRes("postcard/CC/CC2",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 3:{
                    cc.loader.loadRes("postcard/CC/CC3",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    }); 
                    break;  
                }
                case 4:{
                    cc.loader.loadRes("postcard/CD/CD1",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 5:{
                    cc.loader.loadRes("postcard/CD/CD2",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 6:{
                    cc.loader.loadRes("postcard/CD/CD3",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 7:{
                    cc.loader.loadRes("postcard/HEB/HEB1",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 8:{
                    cc.loader.loadRes("postcard/HEB/HEB2",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 9:{
                    cc.loader.loadRes("postcard/HEB/HEB3",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 10:{
                    cc.loader.loadRes("postcard/HZ/HZ1",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 11:{
                    cc.loader.loadRes("postcard/HZ/HZ2",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 12:{
                    cc.loader.loadRes("postcard/HZ/HZ3",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 13:{
                    cc.loader.loadRes("postcard/WH/WH1",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 14:{
                    cc.loader.loadRes("postcard/WH/WH2",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 15:{
                    cc.loader.loadRes("postcard/WH/WH3",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 16:{
                    cc.loader.loadRes("postcard/XSBN/XSBN1",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 17:{
                    cc.loader.loadRes("postcard/XSBN/XSBN2",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
                case 18:{
                    cc.loader.loadRes("postcard/XSBN/XSBN3",cc.SpriteFrame,(err,pt)=>{
                        if(err) return;
                        postcard.getComponent(cc.Sprite).spriteFrame=pt;
                    });
                    break;   
                }
            }
        }); 
        //明信片抽空，不显示邮件提醒
        if(userInfo.postcardReceiveQueue.length==1){
            this.node.active=false;
        }
        
    }

    //再次点击明信片关闭
    clickOnPostcard(){
        this.node.destroy()
    }
}
