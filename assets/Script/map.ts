import AudioEngine from "./AudioEngine";
const {ccclass, property} = cc._decorator;

@ccclass
export default class map extends cc.Component {

    ae:AudioEngine=null;

    onLoad(){
        this.ae=cc.find("AudioEngine").getComponent("AudioEngine")
    }
    goToxishuangbanna(){
        cc.director.loadScene("xishuangbanna_day")
    }
    goTohangzhou(){
        cc.director.loadScene("杭州")
    }
    goTohaerbin(){
        cc.director.loadScene("哈尔滨")
    }
    goTowuhan(){
        cc.director.loadScene("wuhan_day")
    }
    goTochengdu(){
        cc.director.loadScene("chengdu_day")
    }
    goTochangchun(){
        cc.director.loadScene("changchun_day")
    }
}
