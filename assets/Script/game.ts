const {ccclass, property} = cc._decorator;
import UI from './UI';
import Home from './home';
import Stage from './stage';
import { system, stageType } from './global';

@ccclass
export default class Game extends cc.Component {

    loadPrebs:string[]=["UI",'home',"stage","bgm","cloverTapAudio","editname"];

    partdata:any={};

    bgm:cc.AudioSource=null;
    stage:Stage=null;
    home:Home=null;
    ui:UI=null;
    cloverTapAudio:cc.AudioSource=null;

    editname:cc.Node=null;

    stageStatus:string=stageType.HOME;

    during:number=0;

    onLoad () {}

    start () {

    }

    createNode(prefab:cc.Prefab):cc.Node{
        let node = cc.instantiate(prefab);
        node.setParent(this.node);
        return node;
    }

    loadComplete(){

        this.stageStatus=stageType.HOME;

        this.bgm=this.createNode(this.partdata["bgm"]).getComponent<cc.AudioSource>(cc.AudioSource);
        this.cloverTapAudio=this.createNode(this.partdata["cloverTapAudio"]).getComponent<cc.AudioSource>(cc.AudioSource);
       

    }



    update (dt) {
        system.time-=dt
        if(system.time<=0){
            system.time=system.fill;
            this.stage.render();        
        }
    }
}
