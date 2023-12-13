const {ccclass, property} = cc._decorator;

@ccclass
export default class shopping extends cc.Component {

    clickOnskins(){
        cc.resources.load("preb/skin",cc.Prefab,(err,prefab:cc.Prefab)=>{
            if(err) return

            let skinsIntro=cc.instantiate(prefab);
            let name=this.node.name;
            
            skinsIntro.setParent(cc.find("Canvas/Main Camera/shopping"))
            

            
            switch(name){
                case "V50":{
                    cc.resources.load("skinsIntro/V50",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        skinsIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "Christmas":{
                    cc.resources.load("skinsIntro/Christmas",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        skinsIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "painter":{
                    cc.resources.load("skinsIntro/painter",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        skinsIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "kungfu":{
                    cc.resources.load("skinsIntro/kungfu",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        skinsIntro.getComponent(cc.Sprite).spriteFrame=pt;
                    })
                    break;
                }
                case "cyberpunk":{
                    cc.resources.load("skinsIntro/cyberpunk",cc.SpriteFrame,(err,pt:cc.SpriteFrame)=>{
                        if(err) return
                        skinsIntro.getComponent(cc.Sprite).spriteFrame=pt;
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
