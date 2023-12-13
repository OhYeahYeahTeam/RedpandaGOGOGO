import { system } from "./global";
const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioEngine extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    current: number = null;

    playBgm() {
        if (!system.bgmPlaying) {
            this.current = cc.audioEngine.playMusic(this.bgm, true);
            // 将音量设置为0.5
            cc.audioEngine.setVolume(this.current, 0.5);
            system.bgmPlaying = true;
        }
        return;
    }

    stopBgm() {
        cc.audioEngine.stop(this.current);
    }

}
