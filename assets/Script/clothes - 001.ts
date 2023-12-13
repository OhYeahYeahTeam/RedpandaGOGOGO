const { ccclass, property } = cc._decorator;
import { clothes } from './global';
import { unlock } from './global';
@ccclass
export default class ChangeClothes extends cc.Component {
    private isCloth1: boolean = false;
    private isCloth2: boolean = false;
    private isCloth3: boolean = false;
    private isCloth4: boolean = false;
    private isCloth5: boolean = false;
    private isCloth6: boolean = false;

    private lastLoadedNode: cc.Node = null; // 保存上次加载的图片节点

    // ... 其他代码 ...
    onLoad () {

        if(unlock.cloth2 ==1 ){
        cc.find("Canvas/Main Camera/衣柜1/4/未解锁").destroy();}
        if(unlock.cloth1 ==1 ){
        cc.find("Canvas/Main Camera/衣柜1/5/未解锁").destroy();}
    }
    // 在每个 setClothX 方法调用之前销毁上次加载的图片节点
    private destroyLastLoadedNode() {
        if (this.lastLoadedNode) {
            this.lastLoadedNode.destroy();
        }
    }

    setCloth1() {
        this.destroyLastLoadedNode();
        this.isCloth1 = true;
        console.log('Cloth 1 is selected.');
        this.resetOtherCloths(1);
        this.checkCurrentCloth();
    }

    setCloth2() {
        this.destroyLastLoadedNode();
        this.isCloth2 = true;
        console.log('Cloth 2 is selected.');
        this.resetOtherCloths(2);
        this.checkCurrentCloth();
    }

    setCloth3() {
        this.destroyLastLoadedNode();
        this.isCloth3 = true;
        console.log('Cloth 3 is selected.');
        this.resetOtherCloths(3);
        this.checkCurrentCloth();
    }

    setCloth4() {
        this.destroyLastLoadedNode();
        this.isCloth4 = true;
        console.log('Cloth 4 is selected.');
        this.resetOtherCloths(4);
        this.checkCurrentCloth();
    }

    setCloth5() {
        this.destroyLastLoadedNode();
        this.isCloth5 = true;
        console.log('Cloth 5 is selected.');
        this.resetOtherCloths(5);
        this.checkCurrentCloth();
    }

    setCloth6() {
        this.destroyLastLoadedNode();
        this.isCloth6 = true;
        console.log('Cloth 6 is selected.');
        this.resetOtherCloths(6);
        this.checkCurrentCloth();
    }

    // 重置除了指定布尔变量之外的其他布尔变量为 false
    private resetOtherCloths(currentClothNumber: number) {
        for (let i = 1; i <= 6; i++) {
            if (i !== currentClothNumber) {
                this[`isCloth${i}`] = false;
            }
        }
    }

    checkCurrentCloth() {
        cc.resources.load("preb/bigskin", cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) return;

            let skinsIntro = cc.instantiate(prefab);
            let name = this.node.name;

            skinsIntro.setParent(cc.find("Canvas/Main Camera/衣柜1"));
            this.lastLoadedNode = skinsIntro; // 保存当前加载的图片节点

            for (let i = 1; i <= 6; i++) {
                if (this[`isCloth${i}`]) {
                    cc.resources.load(`skinsIntro/skin/大立绘/${i}`, cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                        if (err) return;
                        skinsIntro.getComponent(cc.Sprite).spriteFrame = pt;
                    });
                }
            }
        });
    }
    chooseCloth() {
        let selectedCloth = 0;
        for (let i = 1; i <= 6; i++) {
            if (this[`isCloth${i}`]) {
                clothes.cloth = i;
                selectedCloth = i;
            }
        }
        if(selectedCloth==1 && unlock.cloth5 ==1){
            cc.director.loadScene("scene/home")
            console.log(`Cloth ${selectedCloth} is selected.`);}
        else if(selectedCloth==2 && unlock.cloth4 ==1){
            cc.director.loadScene("scene/home")
            console.log(`Cloth ${selectedCloth} is selected.`);}
        else if(selectedCloth==3 && unlock.cloth3 ==1){
            cc.director.loadScene("scene/home")
            console.log(`Cloth ${selectedCloth} is selected.`);}
        else if(selectedCloth==4 && unlock.cloth2 ==1){
            cc.director.loadScene("scene/home")
            console.log(`Cloth ${selectedCloth} is selected.`);}
        else if(selectedCloth==5 && unlock.cloth1 ==1){
            cc.director.loadScene("scene/home")
            console.log(`Cloth ${selectedCloth} is selected.`);}
        else if(selectedCloth==6 ){
            cc.director.loadScene("scene/home")
            console.log(`Cloth ${selectedCloth} is selected.`);}         
    else{
                clothes.cloth = 6;
                cc.resources.load("preb/warning", cc.Prefab, (err, prefab: cc.Prefab) => {
                    if (err) return;
        
                    let warning = cc.instantiate(prefab);
                    let name = this.node.name;
        
                    warning.setParent(cc.find("Canvas/Main Camera/衣柜1"));
        
                            cc.resources.load("skinsIntro/warning/shizhuang", cc.SpriteFrame, (err, pt: cc.SpriteFrame) => {
                                if (err) return;
                                warning.getComponent(cc.Sprite).spriteFrame = pt;
                            });
                        
                    
                });
            }
    
        }
    goTochange(){
        cc.director.loadScene("scene/changeclothes")
    }
    goTochange2(){
        cc.director.loadScene("scene/changeclothes 2")
    }
}