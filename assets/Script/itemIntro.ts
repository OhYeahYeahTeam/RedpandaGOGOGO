const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    clickOnItems(){
        cc.resources.load("preb/item",cc.Prefab,(err,prefab:cc.Prefab)=>{
            if(err) return

            let itemIntro=cc.instantiate(prefab);
            let name=this.node.name;
            if(name=="brifecase"||name=="bonsai"||name=="dragonCoral"||name=="jade"||name=="picture"){
                itemIntro.setParent(cc.find("Canvas/home"))
            }
            if(name=="flower"||name=="mashroom"){
                itemIntro.setParent(cc.find("Canvas/stage/Stage Camera"))
            }

            
            switch(name){
                case "brifecase":{
                    cc.resources.load("itemIntro/home/brifecase",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        itemIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "bonsai":{
                    cc.resources.load("itemIntro/home/bonsai",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        itemIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "dragonCoral":{
                    cc.resources.load("itemIntro/home/dragonCoral",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        itemIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "jade":{
                    cc.resources.load("itemIntro/home/jade",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        itemIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "picture":{
                    cc.resources.load("itemIntro/home/picture",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        itemIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "flower":{
                    cc.resources.load("itemIntro/garden/flower",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        itemIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "mashroom":{
                    cc.resources.load("itemIntro/garden/mashroom",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        itemIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
            }
        });
    }

    clickOnClosebtn(){
        this.node.getParent().destroy()
    }
   
}
