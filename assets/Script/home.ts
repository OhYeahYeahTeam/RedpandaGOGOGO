import Game from './game';
import { clothes } from './global';
const {ccclass, property} = cc._decorator;

@ccclass
export default class Home extends cc.Component {

    @property([cc.Prefab])
    rolePreb:cc.Prefab[]=[];

    game:Game=null;

    role:cc.Node=null;
    

    onLoad () {
        
    }

    start () {
        this.render();
    }

    render(){
        this.renderCandle();     
        this.createRole();
    }

    renderCandle(){
        let h=new Date().getHours();

        if(h>=18||h<6){
            this.node.getChildByName("candle1").active=true;
            this.node.getChildByName("candle2").active=true;
        }else{
            this.node.getChildByName("candle1").active=false;
            this.node.getChildByName("candle2").active=false;
        }
    }

    createRole(){
        if(this.role) this.role.destroy();
        this.role=cc.instantiate(this.getRoleAction());
        this.role.setParent(this.node);
    }

    getRoleAction():cc.Prefab{
        if(clothes.cloth==1){
            let n=~~(Math.random()*3)+3;
        return this.rolePreb[n];}
        if(clothes.cloth==2){
            let n=~~(Math.random()*3)+3+3;
            return this.rolePreb[n];}
        if(clothes.cloth==3){
            let n=~~(Math.random()*3)+3+3+3;
        return this.rolePreb[n];}
        if(clothes.cloth==4){
            let n=~~(Math.random()*3)+3+3+3+3;
        return this.rolePreb[n];}
        if(clothes.cloth==5){
            let n=~~(Math.random()*3)+3+3+3+3+3;
        return this.rolePreb[n];}
        if(clothes.cloth==6){
            let n=~~(Math.random()*3);
            return this.rolePreb[n];}
    }

    // update (dt) {}
}
