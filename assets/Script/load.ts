import AudioEngine from "./AudioEngine";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Load extends cc.Component {

    @property(cc.Sprite)
    progressBar:cc.Sprite=null;

    num:number=0;

    ae:AudioEngine=null;

    onLoad(){
        this.ae=cc.find("AudioEngine").getComponent("AudioEngine")
    }

    update(dt){
        let rate=Math.random()
        this.num+=dt*rate
        this.progressBar.fillRange=this.num;
        if(this.progressBar.fillRange==1){
            this.ae.playBgm();      
            cc.director.loadScene("scene/editname");
        }
    }
}

