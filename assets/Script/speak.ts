import AudioEngine from "./AudioEngine";
const {ccclass, property} = cc._decorator;

@ccclass
export default class speak extends cc.Component {


    speakbook(){


        cc.resources.load("preb/speak_book", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;
            let speak = cc.instantiate(prefab);
            let name = this.node.name;

            speak.setParent(cc.find("Canvas/home"));

                    cc.resources.load(`speak/book`, cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        speak.getComponent(cc.Sprite).spriteFrame = pt;
                    });
 
            
        });}
    speakmade(){


        cc.resources.load("preb/speak_made ", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;
            let speak = cc.instantiate(prefab);
            let name = this.node.name;

            speak.setParent(cc.find("Canvas/home"));

                    cc.resources.load(`speak/made`, cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        speak.getComponent(cc.Sprite).spriteFrame = pt;
                    });
    
            
        });}
    speakwrite(){


        cc.resources.load("preb/speak_write", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;
            let speak = cc.instantiate(prefab);
            let name = this.node.name;

            speak.setParent(cc.find("Canvas/home"));

                    cc.resources.load(`speak/write`, cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        speak.getComponent(cc.Sprite).spriteFrame = pt;
                    });
    
            
        });}
        
}
