import { userInfo } from './global';
const {ccclass, property} = cc._decorator;

@ccclass
export default class postcard extends cc.Component {

    onLoad(){
        this.loadbackpack();
    }

    loadbackpack(){
        let name = cc.director.getScene().name;
        //检查场景名字
        if (name == "backpack1") {
            //确保按顺序加载
            //加载内容不允许超过第一页
            let length = userInfo.postcardThumbnailQueue.length;
            if(length<=9){
                for(let index=0;index<=length-1;index++){
                    this.loadPostcardThumbnail(index);
                    console.log("队列长度：",length)
                    console.log("当前下标：",index)
                }
            }
            if(length>9){
                for(let index=0;index<=8;index++){
                    this.loadPostcardThumbnail(index);
                    console.log("队列长度：",length)
                    console.log("当前下标：",index)
                }           
            }             
        }
        if(name=="backpack2"){
            let length = userInfo.postcardThumbnailQueue.length;
            if(length>9&&length<=18){                
                for(let index=9;index<=length-1;index++){
                    this.loadPostcardThumbnail(index);
                    console.log("队列长度：",length)
                    console.log("当前下标：",index)
                }
                //第二页后9张尝试加载完毕，下标归零，为重新加载第一页做准备
            }
        }
    }

    loadPostcardThumbnail(index:number){
        //检查缩略图编号合法性
        if(userInfo.postcardThumbnailQueue[index]>=1&&userInfo.postcardThumbnailQueue[index]<=18){
            //加载缩略图预制体
            cc.resources.load("preb/postcardThumbnail",cc.Prefab,(err,prefab:cc.Prefab)=>{
                if(err) return
                //实例化预制体
                let postcardThumbnail = cc.instantiate(prefab);
                postcardThumbnail.setParent(cc.find("Canvas/Main Camera/bg/bg_backpack"));
                //按编号加载缩略图图片
                let num=userInfo.postcardThumbnailQueue[index];
                console.log("当前编号",num)
                switch(num){
                    case 1:{
                        cc.resources.load("postcardThumbnail/CC/CC1",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 2:{
                        cc.resources.load("postcardThumbnail/CC/CC2",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 3:{
                        cc.resources.load("postcardThumbnail/CC/CC3",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 4:{
                        cc.resources.load("postcardThumbnail/CD/CD1",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 5:{
                        cc.resources.load("postcardThumbnail/CD/CD2",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 6:{
                        cc.resources.load("postcardThumbnail/CD/CD3",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 7:{
                        cc.resources.load("postcardThumbnail/HEB/HEB1",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 8:{
                        cc.resources.load("postcardThumbnail/HEB/HEB2",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 9:{
                        cc.resources.load("postcardThumbnail/HEB/HEB3",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 10:{
                        cc.resources.load("postcardThumbnail/HZ/HZ1",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 11:{
                        cc.resources.load("postcardThumbnail/HZ/HZ2",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 12:{
                        cc.resources.load("postcardThumbnail/HZ/HZ3",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 13:{
                        cc.resources.load("postcardThumbnail/WH/WH1",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 14:{
                        cc.resources.load("postcardThumbnail/WH/WH2",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 15:{
                        cc.resources.load("postcardThumbnail/WH/WH3",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 16:{
                        cc.resources.load("postcardThumbnail/XSBN/XSBN1",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 17:{
                        cc.resources.load("postcardThumbnail/XSBN/XSBN2",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                    case 18:{
                        cc.resources.load("postcardThumbnail/XSBN/XSBN3",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                            if(err) return
                            postcardThumbnail.getComponent(cc.Sprite).spriteFrame=pt;
                        })
                        break;
                    }
                }
            })
        } 
    }   
}
