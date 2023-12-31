﻿**REDPANDA GOGOGO软件设计**

**一. 项目介绍**

**1.1 项目概述**

` `**Redpanda GoGoGo**是一款集探险、换装、经营、旅行为一体的休闲小游戏。在游戏中，玩家可以通过经营或游戏赚取货币，兑换服装，给主角小熊猫换上好看的装扮，也可以帮助主角小熊猫踏上他的中国之旅，认识更多的朋友们。

**1.2项目成员**

组长：袁思祺

组员：徐政宇，金宇枫，刘清扬，张东生，余梦洋，曹枨

|代码组|`              `美工组|
| :-: | - |
|`  `徐政宇 曹枨  余梦洋  金宇枫 |`      `张东生 刘清扬 袁思祺 |

**1.3项目目标**

此游戏从轻松休闲的特点出发，致力于在繁琐忙碌的21世纪打造一片可以放松下来的私密空间。在这里，玩家不必为生存烦忧，为竞争内卷。自给自足的经营模式在顺应天时的法则下，安定下来浮躁的心，平添几分禅意，得以让用户从现实脱身，跟随小熊猫的步伐，去更远的地方。不必担忧冲突的时间安排，不必烦心预算的拮据。

**二．软件功能**

**2.1 主要功能**

下图为本游戏功能的思维导图。

![c067b60cabcce68250353920ad65e38](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.001.png)

**（1）探险系统**

游戏提供探险地图，玩家可以从上海出发，在地图上选择城市作为目的地进行探险。探险游戏一共有两关，成功通关可以获取竹子，有几率获得该城市对应的明信片。

**（2）货币系统**

竹子作为主要货币，可通过探险游戏通关和在花园里养殖这两种方式获得。竹子可用于在商城中兑换服装。

**（3）明信片系统**

玩家在探险游戏成功通关后，有几率获得明信片（第一次通关一定获取，后面随机获取，明信片数量不叠加）。通关后如获得明信片，则明信片自动存放在邮箱里，点击即可查看。玩家在邮箱查看明信片后，明信片自动存储进背包，此后可在背包中查看。

**（4）服装系统**

在商城中，竹子可用于兑换不同的皮肤，兑换成功后，可在换装界面更换小熊猫的皮肤。成功更换皮肤后，小熊猫的动图也会自动替换为相应的皮肤动图。

**（5）经营系统**

玩家可以通过养殖竹子获得额外的竹子资源。

玩家可点击家中物品查看物品介绍。

**（6）场景系统**

思维导图

7. **互动系统**

   可通过点击室内的小熊猫，实现与小熊猫的互动。

可通过点击室内或室外特定物品，查看物品相关故事。

3. **美术设计**

   **3.1 主界面**

**（1）主界面（室外）**

室外主界面将房屋与小熊猫生活的自然环境相结合，以绿色为主色调。房屋的设计采用了木头材质，和室外景色融合得更加自然。庭院内还有由篱笆围成的种植区，爬满爬山虎的石头等等，画面丰富。

同时针对不同季节，也设计出两款对应的室外主页面。冬季的室外主界面铺满雪花，还有圣诞树，雪人等元素，十分具有节日氛围。用户可以通过切换按钮自由切换自己喜爱的主界面。

![2d9e616e9577717dc9acdbb0d98ee8e](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.002.jpeg)![374f788648e1adc53ea66606ee53431](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.003.png)

春夏                                    秋冬

**（2）主界面（室内）**

室内主界面的设计采用了双层公寓的形式，视觉上呈现出简约大方的特点。在这样的基础上又添加了许多精心设计的细节，比如床边的风景照，小熊猫爪子形状的地毯，盆栽等等......使得室内整体风格更加可爱，也更贴合游戏主体小熊猫的形象。同时对于屋内不同的摆件，也设计了一些物品介绍，增强用户的交互感与游戏的沉浸感。

![15a75f74aaa7e4e5281c06ff7ddf35c](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.004.jpeg)

4. **背包**

   背包界面的主要功能是存放明信片。整体采用米色与灰色，下方显示当前页数和背包总页数。

![9a02067aee8ac5bf23f140a1ec5d3ae](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.005.jpeg)

4. ![8c2fab325e912cd78300c627035999c](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.006.jpeg)**商城**

   ![8494130d6fb6b402bf6396d8d7be4ff](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.007.jpeg)










** 商店界面**                                  详情界面

商城设计采用了米色和棕色为主色调。右上角显示出用户目前的竹子数量，页面主体显示不同的服装及套装名。购买按钮设计为了亮眼的黄色，用户可以通过点击下方的按钮直接购买。点击套装图片时则会进入详情页面，详情界面会展示本套服装的全身图与对应的三种姿势，服装简介以及服装价格。

4. **换装**

   换装界面和商店界面保持了统一，分为上下两部分，上部用来展示小熊猫的服装，下部则展示用户拥有的服装。如果为购买某件服装，则会显示为灰色。

![衣柜1](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.008.png)![衣柜2](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.009.png)

**3.2皮肤设计**

1. **皮肤**

   皮肤设计选取了最近的热点作为灵感参考，比如KFC疯狂星期四，圣诞节，赛博朋克2077等等。将小熊猫的服装与用户的日常生活结合起来，增加用户的体验感。

![b7618c1c253ed8391207fa76a785f09](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.010.jpeg)![4](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.011.png)![3](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.012.png)![c9cf4afeeb1fdb4162d59daab4da51a](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.013.jpeg)![6f0406471598e2eab23f6eac7095850](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.014.jpeg)



1. **皮肤对应动图**

   每个皮肤都制作了对应的三个动图，当给小熊猫换装之后，小熊猫在室内的皮肤就会发生对应的变化。

![2f055d21da5ee5bb53121256be4ea1d](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.015.png)

![248ec2413595b94db4318a8e8993be4](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.016.png)

![64cca6cc7743178f2adca74656d4790](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.017.png)

![35fffa307ca858685e0946bce1c3f81](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.018.png)

![e84c4caae3d94b41ffe285c718e8eab](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.019.png)

![b767d23d86bd2e7ca5bfe738a4ff686](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.020.png)![127cd7b4bf77b8cc7321dd9aa43c77c](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.021.png)

![fb4d8368ba8957257d53fe495f28fac](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.022.png)![39999a2824447da70a33ba7dfad32f2](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.023.png)

![2d9427bd87f589026a8ff2c72ccc878](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.024.png)![5894605151cb9f38f102c2a24755d80](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.025.png)

![f7992038b24dff7b6aa02e291ac5c15](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.026.png)![119746848b28bfbce3cde83fb46b434](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.027.png)

![7ff68df4d8e3271d9c5515c943232af](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.028.png)![33fb41e12154813e1169b095932d5b7](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.029.png)

**3.3探险游戏设计**

1. **游戏地图**

   游戏地图采用一张牛皮纸的形式，增加“旅游”与“冒险”的感觉。地图上的每座城市都绘制了对应的标志性景色来作为代表，例如上海的东方明珠，武汉的樱花。右下角有小熊猫的头像。

![cc46619650e510db6b17107ecce9a56](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.030.jpeg)

1. **游戏背景**

   游戏背景随着城市的变化而变化。选取了当地的标志性建筑的照片作为背景，每个城市的关卡分为白天与黑夜，因此游戏背景也选取了一张白天，一张黑夜的照片进行对应。

1. **主控人物**

   主控人物为小熊猫，肩上披着红色的披风，参考了江湖大侠的形象。小熊猫有两种平a动作、一种发射光波的动作、移动、闪避、跳跃、死亡、复活、旋转一共九种动作。着重刻画了不同动作时红色披风的动态，使小熊猫的动作更加真实。

![pintu-fulicat.com-1702290190297](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.031.jpeg)

![pintu-fulicat.com-1702290291576](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.032.jpeg)

![pintu-fulicat.com-1702290344476](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.033.jpeg)

![pintu-fulicat.com-1702290404144](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.034.jpeg)

![pintu-fulicat.com-1702290454447](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.035.jpeg)

![pintu-fulicat.com-1702290495433](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.036.jpeg)

![pintu-fulicat.com-1702290524742](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.037.jpeg)

![pintu-fulicat.com-1702290552030](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.038.jpeg)

![pintu-fulicat.com-1702290586906](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.039.jpeg)

1. **怪兽**

   怪物设计一定程度上参考了不同地区的特产和风土人情。哈尔滨的怪物设计为雪人，武汉的怪物设计为樱花，西双版纳的怪物设计为大象，杭州的怪物设计为纸伞等等，还融入了异世界常见怪物史莱姆。每一种怪物也有移动、攻击、死亡三种动作。

![31ecc7cb982a00ae05d3b95717f9c95](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.040.jpeg)哈尔滨——雪人

![0770f6068251e0ec94a27998634f339](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.041.jpeg)

史莱姆

![d93a951c9e87e0fa8b678b63dd86ea9](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.042.jpeg)

杭州——纸伞

![2d666e3ec8b79d9dc0a529ab711576c](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.043.jpeg)

西双版纳——大象

![46cda4a6648aa247a5f4357b1378206](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.044.jpeg)武汉——樱花

![b5570f0f1c691ad424a06ade93b4253](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.045.jpeg)

蘑菇怪

1. **明信片**

长春![CC3](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.046.png)

![CC2](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.047.png)![CC1](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.048.png)




![CD1](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.049.png)成都

![CD2](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.050.png)![CD3](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.051.png)






![HEB2](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.052.png)哈尔滨

![HEB1](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.053.png)![HEB3](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.054.png)



![HZ2](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.055.png)![HZ3](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.056.png)![HZ1](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.057.png)杭州




![WH3](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.058.png)武汉

**3.4辅助界面设计**

1. **图标设计**

   图标设计的原则是和游戏画面配合得当。在游戏主界面有商店、背包、地图、切换外景等图标，都采用统一的米色为底色，搭配q版的图画组合而成，给人以可爱，简约的视觉印象。

![ec18e65aeaae97ff203bdbecc1e3245](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.059.jpeg)![59b9876dc27698eb0284f96f74f2239](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.060.jpeg)![8ae1afedc32641e8fdd87ab57b5cf07](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.061.jpeg)![7ac792e9cc20e1a4d4b2a76c3860281](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.062.jpeg)

1. **提示框设计**

   提示框采用统一的设计，橙色的外框，米色的背景。和游戏整体的风格一致。

![948917ab8ffca521fdc3400de55096b](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.063.jpeg)![58f2b49ed4731f46c294a58055fd3c2](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.064.jpeg)

1. **游戏通关界面设计**
   **
   `  `延续了轻松可爱的设计风格，采用小熊猫头作为装饰，下方按钮的功能分别为返回房间和打开地图。

![C:\Users\yuansiqi\Documents\WeChat Files\wxid_bgpe428aczaj22\FileStorage\Temp\80b77f8b9ec9a66ae3d7eed828ddee4.jpg](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.065.jpeg)

**3.5交互界面设计**

1. **与小熊猫交互**

   当点击小熊猫时，小熊猫就会说话。

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.066.png)

**（2）点击物品查看信息**

为丰富游戏细节，增加游戏趣味性，我们选择室内和室外两个场景中的一些特点物品，点击可触发物品介绍。

![C:\Users\yuansiqi\Documents\WeChat Files\wxid_bgpe428aczaj22\FileStorage\Temp\fe9e156368165998da9f5201e714ea3.jpg](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.067.jpeg)![C:\Users\yuansiqi\Documents\WeChat Files\wxid_bgpe428aczaj22\FileStorage\Temp\b8256bc328bcd271e537fd3093742ac.jpg](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.068.jpeg)




室外

![C:\Users\yuansiqi\Documents\WeChat Files\wxid_bgpe428aczaj22\FileStorage\Temp\95a2e43a0585ab3be81db09fe9a0287.jpg](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.069.jpeg)![C:\Users\yuansiqi\Documents\WeChat Files\wxid_bgpe428aczaj22\FileStorage\Temp\2d5191a9bf1c8c9bfecf49e37a87b57.jpg](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.070.jpeg)![C:\Users\yuansiqi\Documents\WeChat Files\wxid_bgpe428aczaj22\FileStorage\Temp\4ebdbb588c2f4b74cb55844e220360c.jpg](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.071.jpeg)![C:\Users\yuansiqi\Documents\WeChat Files\wxid_bgpe428aczaj22\FileStorage\Temp\6accdb7b487ec2050bcf7392b5f599a.jpg](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.072.jpeg)

室内

**三. 代码设计**

**3.1 技术架构**

本游戏采用Cocos Creator引擎开发，其中编译器版本为V2.4.1。开发语言为Typescript。本项目已发布PC网页端，移动网页端。预计在未来构建发布安卓版本与微信小游戏版本。

**3.2代码结构设计**

**（1）模块划分**

本游戏核心模块为两部分。休闲交互游戏部分与<a name="_hlk153297484"></a>平台跳跃探险游戏部分。两部分都有独立的游戏引擎模块、UI管理模块与场景管理模块。除此之外，还有各种功能模块，包括货币系统模块、服装系统模块、明信片系统模块、探险系统模块与交互系统模块等等。

**（2）类与对象设计**

①平台跳跃探险游戏部分：

游戏主类（Game）、玩家类（Player）、怪物类（Monster）、功能平台组件类（Platform、xianjing、cold、quanshui）等

②休闲交互游戏部分：

货币类（Money）、服装类（Cloth）、明信片类（Postcard）、探险类（minigame）等

**3.2游戏逻辑与流程**

**（1）货币系统**

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.073.png)

本代码使用cc.Label类（Cocos中的文本类）以储存用户获得的货币数量，并通过调用upMoney函数更新货币的显示UI。用户在通过关卡后会跳转到通关场景，其中可以点按奖励按钮获随机数量的Money（100-200的随机整数）。

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.074.png)

在之后，用户可以在商场场景消费货币：

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.075.png)

用户将花费150货币购买心仪的服装，并将全局变量unlock.clothx赋值为TRUE，即为解锁该服装。

**（2）服装系统**

用户购买服装后，服装对应的全局变量unlock.clothx将被赋值为TRUE，用户即可进入衣柜场景更换服装。

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.076.png)

用户选择服装后，会将用户的选择isClothx赋值为TRUE

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.077.png)

在衣柜的展示界面，会根据用户的选择展示当前时装的大型立绘。

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.078.png)

当用户选择服装后，对其进行判断，若该时装已解锁，则更换该时装，否则弹出未解锁该时装的弹窗。

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.079.png)

室内场景将根据用户选择更新小熊猫形象，每个服装对应三个形象，随机生成。

1. **明信片系统**

   包括获取明信片和存储明信片，邮箱＋背包







背包加载明信片

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.080.png)

明信片的交互

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.081.png)

**（4）探险体统**

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.082.png)

初始化角色hp与耐力

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.083.png)

通过按键控制角色的移动、攻击、跳跃与冲刺行为。

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.084.png)

Monster与player均有独立的攻击碰撞与受击碰撞，可以进行互相攻击，扣除HP至死亡。![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.085.png)

每个怪物都具有追踪与攻击player的AI系统，可以在一定范围内追踪player并进行攻击操作。

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.086.png)

本游戏同样设计了多种组件以提高游戏多样性，如该xianjing组件会每隔一定时间扣除player1点hp，但不会扣除为0。此外，还有platform、cold、quanshui等等组件，此处不再一一介绍。

**（5）交互系统**

物品交互系统：

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.087.png)

点触物品时，加载该物品对应的文字介绍。

角色交互系统

![](Aspose.Words.f45492f4-d380-45e4-9842-f5b23b34d1a4.088.png)

点触角色时，播放角色语言并加载角色的对话框。
