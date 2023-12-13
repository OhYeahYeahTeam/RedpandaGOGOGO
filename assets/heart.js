// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 新增属性：用于控制每2秒恢复一点HP的定时器
        hpRecoveryTimer: {
            default: 0,
            visible: false
        },
        hpRecoveryInterval: 0.5, // 恢复HP的时间间隔（秒）
        hpRecoveryAmount: 1, // 恢复的HP值
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 获取主角节点
        this.player = cc.find("Canvas/player");

        // 启动HP恢复定时器
        this.startHpRecoveryTimer();
    },

    // 新增函数：启动HP恢复定时器
    startHpRecoveryTimer() {
        this.hpRecoveryTimer = setInterval(() => {
            // 如果玩家在平台上，并且玩家的hp小于5，则恢复HP
            if (this.player.y > 0 && this.player.getComponent('player').hp < 5) {
                this.player.getComponent('player').hp += this.hpRecoveryAmount;
                // 刷新小心心图标
                // this.HPnST.getComponent('HPnST').HPchange();
            }
        }, this.hpRecoveryInterval * 1000); // 将秒转换为毫秒
    },

    // 新增函数：停止HP恢复定时器
    stopHpRecoveryTimer() {
        clearInterval(this.hpRecoveryTimer);
    },

    // 新增函数：当节点被销毁时停止定时器
    onDestroy() {
        this.stopHpRecoveryTimer();
    },

});