import { SPECIES } from "./data";

/** The creature names and field notes are authored as Chinese game copy.
 * Stable specimen IDs bind the four fields to their exact English source keys. */
const SPECIES_ZH: Record<string, readonly [string, string, string, string]> = {
  "pearl-lantern": [
    "珍珠灯花",
    "将暮光藏进花心",
    "半透明的花瓣托着一枚温润如珍珠的花心。林冠下，花茎向反射光照来的方向轻轻弯曲。",
    "花朵似乎用蜡质薄膜储存日光，日落后仍为附近的昆虫提供稳定的微光指引。",
  ],
  crownspore: [
    "冠孢菇",
    "悬浮的种子舱",
    "一圈柔软的囊体悬在细长的茎上方。细小颗粒在囊体之间飘动，却始终没有落到地面。",
    "孢子借助高大树木下较为平稳的气流传播。一阵轻风，就可能把整个新菌落带向远方。",
  ],
  "prism-frond": [
    "棱光蕨",
    "让光化作生命的色彩",
    "棱角分明的小叶将漏下的光束折成蓝绿色。叶缘坚挺，中央的叶脉却能灵活摆动。",
    "叶片将光线引向下方受遮蔽的叶层，让植株不同高度的叶子共享能量。",
  ],
  "whisper-reed": [
    "低语芦",
    "聆听林地的细语",
    "纤细的中空茎秆三五成丛。每根茎上都带着一条薄薄的叶带，微风拂过便随之转动。",
    "中空的茎秆沿根床输送水分。熟悉的沙沙声，正是这场隐秘交换留下的动静。",
  ],
  copperfan: [
    "铜扇蕨",
    "一把收集雨水的折扇",
    "宽阔的叶片从紧密的螺旋中展开。铜色的叶尖承接着从林冠落下的水滴。",
    "叶上的沟槽把雨水送回中央根部。这座小小的蓄水池，也滋养着周围的苔藓。",
  ],
  "lumen-moth": [
    "荧光蛾",
    "往返于花灯之间",
    "四片珍珠色翅膀托起一只轻盈的小蛾。它会在发光花朵旁稍作停留，然后再次升起。",
    "翅膀上的粉尘与多种林地植物相吻合。一次次短途飞行，连接起那些见不到直射阳光的花朵。",
  ],
  "heartwood-archive": [
    "心木档案",
    "森林记得每一个季节",
    "活木环抱着一枚悬浮的金色种子。斑驳的外壳下，三条根系通道汇聚到一起。",
    "周围的样本揭示了共同的水分循环。心木保存着这些交换，也记录着整片森林如何相互扶持、延续生命。",
  ],
  "glass-cactus": [
    "琉璃仙人掌",
    "透明棱肋里的蓄水仓",
    "透明的棱肋护着细长的绿色核心。沙粒在低处的分枝旁堆积，却始终没有埋住枝尖。",
    "棱肋散射强烈的阳光，让阴影中的核心留住水分。它生长缓慢，却有着惊人的韧性。",
  ],
  "sun-stone": [
    "日光石",
    "从内部缓缓升温",
    "圆润的琥珀色矿石上有一道明亮的缝隙。缝隙绕着表面延伸，仿佛勾出了更早一层晶体的轮廓。",
    "不同矿层吸收和释放热量的速度各异。缓慢的膨胀，让石头留下了这道独特的缝隙。",
  ],
  "sand-rose": [
    "沙漠玫瑰",
    "风塑成的花瓣",
    "厚实的陶土色花瓣贴地展开，护着一枚浅色的小小花心。细沙积在外层花瓣的褶皱里。",
    "外层花瓣承受着风沙磨蚀，为内层的新生部分挡住侵袭。即使两场雨相隔很久，内层仍能存活。",
  ],
  "dune-memory": [
    "沙丘记忆",
    "旧日路线留下的碎片",
    "细长的碎片内部刻着平行纹路。流动的沙粒将其中一侧磨得光滑。",
    "纹路的间距与当地沙脊相呼应。在风重新排列这些沙丘之前，曾有人绘下过它们的形状。",
  ],
  "wind-needle": [
    "风蚀石针",
    "被风雕成的石帆",
    "一根细长的直立石体从宽阔的底座升起。弯曲的表面看起来几乎柔软，材质却十分致密。",
    "反复吹来的阵风剥去了较软的岩层。留下的石脊，记录着漫长岁月中盛行风的方向。",
  ],
  "ochre-geode": [
    "赭色晶洞",
    "尘土下的静谧内室",
    "开裂的外壳里藏着细小闪亮的晶面。周围的沙粒比开阔沙丘上的更加细腻。",
    "受保护的内室在短暂的湿润时期形成。晶体的生长，像一本记下沙漠罕见暴雨的矿物日记。",
  ],
  "heliograph-dial": [
    "日照仪",
    "测量不断变化的地平线",
    "石制框架围着一枚悬浮圆盘。底座上的三条通道，分别通向磨损的标记。",
    "风、热量与旧刻痕共同指向一种季节节律。日照仪曾用来测量这种节律，帮助旅人寻找水源。",
  ],
  "echo-crystal": [
    "回声晶",
    "传递轻微脉动的晶格",
    "高大的蓝色晶体内部有一条浅色纹线。附近的小晶体也沿着同一方向排列。",
    "振动会沿内部晶格传播。一点微小的扰动，便能传到肉眼所见晶簇之外的远处。",
  ],
  "cave-coral": [
    "洞穴珊瑚",
    "阳光之外的花园",
    "紫色的分枝状生物附着在凉爽的地面上。水分汇聚的地方，圆润的枝尖会变得更明亮。",
    "菌落依靠水中溶解的矿物生长。它们循着地下水路延伸，与周围的晶体共享水源。",
  ],
  "ice-bouquet": [
    "冰晶簇",
    "众多晶面，共同的根",
    "几根短棱柱从同一个基座升起。正面看几乎无色，换到侧面才显出光泽。",
    "这些棱柱生长于同一处溶液囊穴。晶体角度的变化，透露出水流曾如何穿过这片凹地。",
  ],
  "tide-column": [
    "潮纹石柱",
    "流水留下的层层往事",
    "光滑的石柱连接着宽大的柱脚与圆润的柱冠，中段渐渐收窄。浅色条带环绕柱身。",
    "每道条带都对应一段矿物沉积时期。漫长石柱由无数细小水滴慢慢堆成，并非一场巨变的产物。",
  ],
  "hollow-memory": [
    "洞窟记忆",
    "蓝色暗处的刻纹碎片",
    "冰凉的碎片上刻着重复的弧线。图案与附近分枝状的矿物通道十分相似。",
    "弧线描述的或许是共振，而非文字。它们的间隔，与当地晶格传递的脉动相互呼应。",
  ],
  "glimmer-moth": [
    "微光蛾",
    "洞窟里的小小守望者",
    "宽大的蓝色翅膀上排列着一串光点。它常在依靠矿物生长的菌落旁停歇。",
    "翅粉把养分带到彼此隔离的菌落间，连接起洞窟中的生命与矿物网络。",
  ],
  "harmonic-heart": [
    "共鸣之心",
    "整座洞窟一同回应",
    "明亮的核心悬在一圈深色矿物支架中。四周的三条通道在它下方汇合。",
    "晶体、流水与菌落共享着同一种节律。核心揭示的，是一个由共振与暗流共同连接的地下世界。",
  ],
  spirepine: [
    "尖塔松",
    "层层针叶织成树冠",
    "细长的树干上生着层叠的蓝绿色针叶冠。较老的下层枝条在林下铺成宽大的台阶。",
    "层叠的轮廓能在不同高度截住飘来的雾气，让凝成的水滴回到下方受遮蔽的根系。",
  ],
  "silver-birch": [
    "银桦",
    "草甸光影中的浅色树干",
    "浅色的分枝托起一簇簇柔软叶片。旧枝脱落的地方，在树皮上留下暖色环纹。",
    "薄叶在大型树冠之间的空隙中舒展。明亮的树皮反射部分光线，减少树干吸收的热量。",
  ],
  veilwillow: [
    "帘柳",
    "垂下的一帘活雨",
    "长长的带叶枝条从弯曲的树枝上垂落。柔软的叶帘下，地面总有几片湿润的空隙。",
    "水沿着每条垂枝缓缓落入土壤。小片阴凉的蓄水地，让附近的莲叶有了生长的空间。",
  ],
  coralwood: [
    "珊瑚树",
    "宛如珊瑚礁的枝丫",
    "暖玫瑰色的树冠伸出许多圆润的指状枝条。分叉之间藏着小小的芽。",
    "枝间空隙让阳光照到下方的植物。这副独特树冠，也给草甸中的小型飞行生物提供了落脚处。",
  ],
  "cistern-baobab": [
    "蓄水猴面包树",
    "宽阔树冠下的活水库",
    "粗壮圆鼓的树干托着几根低矮、舒展的枝条。树皮包覆着膨大的中央腔室，形成层层褶皱。",
    "树干似乎能在旱季储存水分。浅槽中缓慢渗出的湿气，吸引苔藓沿着树身生长。",
  ],
  spiralwood: [
    "螺旋木",
    "追随光线转动的树",
    "扭转的树干向上伸展，托起错落的扇状叶丛。新旧枝条围着中央螺旋，朝向不同方位。",
    "这样的排列让树冠能够承接不同角度的日光。较小的新叶，恰好填进老叶留下的空隙。",
  ],
  "crown-fern": [
    "冠蕨",
    "从林下长成一把高伞",
    "纤细而有纹理的茎，托起一把宽阔的羽状叶伞。紧卷的幼叶藏在冠顶。",
    "抬高叶冠后，它能接触地被植物上方的湿润空气，同时让新叶留在阴影的保护中。",
  ],
  "sunfan-palm": [
    "日扇棕",
    "沙地上方的绿色罗盘",
    "带着环纹的树干顶端，围着一圈坚挺的扇形叶。松垂的老叶悬在新叶冠下方。",
    "叶上的沟槽把短暂的雨水引向树干。直立的叶扇挡住热风，保护下方的土壤。",
  ],
  starpetal: [
    "星瓣花",
    "洒在草甸上的点点色彩",
    "五片宽阔花瓣围着明亮的花心。小片花丛在草间铺开，像互相叠在一起的星星。",
    "敞开的花朵吸引低矮的食草动物和途经的传粉者。小小的根垫也稳住高大植物之间裸露的土壤。",
  ],
  "dew-bells": [
    "露铃花",
    "为花粉撑起一串小铃",
    "淡紫色的铃形花沿着弯曲花茎低垂。草甸升温之后，花内的阴影仍保持清凉。",
    "朝下的花口让花粉免遭水滴冲刷。一天中光线最强的时候，小型跳兽常躲在花铃下休息。",
  ],
  "ribbon-orchid": [
    "缎带兰",
    "阴影里的一抹轻盈",
    "宽阔的成对花瓣围着折叠的花心，下方是光滑狭长的叶片。花茎朝林冠的一处空隙倾斜。",
    "一缕若有若无的香气，似乎能引来特定的林间飞行生物。对它而言，生长的位置与花色同样重要。",
  ],
  sunburst: [
    "金芒花",
    "给绿洲添上一抹暖色",
    "细长的金色花瓣从深色花心向四周辐射。坚韧的叶片贴近较为凉爽的地面。",
    "外层花瓣在正午为花心遮阳。短根则能迅速吸收阵雨留下的水分。",
  ],
  "moon-lotus": [
    "月莲",
    "根丛上方的一朵浅色花",
    "层叠的浅色花瓣从宽大而低矮的叶丛中展开。光滑的叶片相互交叠，围成一只受遮蔽的内碗。",
    "叶碗留住水分与有机尘埃。在这个虚构生态中，月莲只需湿润土壤便能生长，无须深水池。",
  ],
  "foxglove-spire": [
    "塔状毛地黄",
    "一根花茎上的许多小房间",
    "一列列垂挂的小杯状花攀满高茎。下方的花先开，顶端还留着年轻的花苞。",
    "依次开花让传粉者连续数日都能获得食物。变化的草甸中，它成为一处可靠的停靠点。",
  ],
  amberberry: [
    "琥珀莓",
    "密叶间的明亮果实",
    "密集的圆叶围着一簇簇琥珀色果实。浆果渐熟，外层枝条也被轻轻压弯。",
    "成熟的灌丛附近常有食草动物的足迹。被带走的种子，或许解释了附近空地边缘新生的植株。",
  ],
  "oasis-cycad": [
    "绿洲苏铁",
    "一顶缓慢生长的低冠",
    "坚挺的羽状叶从短粗的基部伸出。较老的叶子在近地处形成一圈保护裙。",
    "紧凑的叶冠减少了干风的侵袭。阴凉的基部为幼苗提供庇护，让它们免于暴露在开阔沙地中。",
  ],
  "silver-aloe": [
    "银叶芦荟",
    "将热量挡在叶丛之外",
    "厚实尖叶绕着紧闭的中心螺旋排列。浅色叶面上刻着几道纵向浅槽。",
    "肉质叶是储水的容器。反光表皮与紧密排列的叶片，减缓了罕见雨水的流失。",
  ],
  "barrel-cactus": [
    "铜球仙人掌",
    "沙丘中的圆形蓄水仓",
    "矮胖的带肋球体顶着一朵暖色小花。短而浅色的刺沿弯曲棱肋排列。",
    "雨后棱肋能够展开，容纳更多储存的水。圆润的形体也减少了与干燥空气接触的表面积。",
  ],
  "prickly-sail": [
    "刺帆仙人掌",
    "沙地上竖起绿色叶桨",
    "椭圆的绿色茎片从紧凑的主茎分出。老茎片边缘长着小小的暖色花苞。",
    "每片扁茎都能储水并吸收光线。掉落的碎片有时会长成新株，在母株周围形成小片群落。",
  ],
  "velvet-puffball": [
    "绒面马勃",
    "凉暗处的圆形孢子室",
    "柔软的圆囊簇拥在低矮菌柄周围。最大的囊体表面散布着细小的深色斑点。",
    "轻轻触碰便能释放一阵孢子粉尘。洞窟飞鳐掀起的气流，或许会把它们送往新的矿物床。",
  ],
  "shelf-colony": [
    "层架菌群",
    "洞窟分解者的层层阶梯",
    "宽阔的半圆菌盖层层交叠。每层边缘都有一道颜色较浅的新生带。",
    "层架增大了菌落在湿润岩面上的取食面积。小甲虫则躲在相对干燥的上层菌盖之间。",
  ],
  "violet-glowcap": [
    "紫光伞菇",
    "地下花园的一盏灯",
    "宽大的紫色菌盖立在纤细浅色的菌柄上。菌盖下方，一排排薄菌褶透出柔和微光。",
    "光线把细小的矿物食者吸引到菌落附近。它们经过时，会把孢子带向彼此隔离的生长地。",
  ],
  mirrorleaf: [
    "镜叶",
    "像漂浮在地面的叶毯",
    "宽大的圆叶贴着湿土铺开。窄小的缺口将收集的水滴引向叶茎。",
    "交叠的叶片在高大帘柳下铺出凉爽的表层。周围土地开始干燥时，翘起的叶缘仍能留住水分。",
  ],
  "balanced-stone": [
    "平衡石",
    "漫长侵蚀堆出的雕塑",
    "圆石叠成一座狭窄而倾斜的石塔。不同的暖色纹带横穿每一块风化石面。",
    "周围较软的岩层先被侵蚀。幸存的石塔，显露出这片地形面对风时各不相同的变化。",
  ],
  "moss-grazer": [
    "苔背兽",
    "林冠下慢悠悠的园丁",
    "圆滚滚的四足动物背上有柔软的脊纹，宽宽的口鼻贴近地面。它在草丛和莓果灌丛间缓缓行走。",
    "慢慢啃食的习惯让草甸空地不至于完全被植被占据。行走时，种子会黏在有纹理的皮毛上。",
  ],
  "fern-hopper": [
    "蕨间跳兽",
    "在叶片之间轻轻一跃",
    "修长的后腿与直立耳朵勾出警觉的轮廓。它会停顿片刻，再俏皮地向前跳上一小段。",
    "灵活转向让它始终待在蕨叶的庇护中。脚上的尘土也把附近的花群连接起来。",
  ],
  "pearl-shellback": [
    "珍珠甲兽",
    "长着小脚的移动庇护所",
    "低矮的身体背着一副宽大浅色的分节甲壳。小小的脑袋从翘起的前缘下探出。",
    "安静的夜里，甲壳会收集露水。沿湿地缓慢行走时，它也传播着细小孢子与叶片碎屑。",
  ],
  "glass-stag": [
    "琉璃鹿",
    "银色林地中的安静身影",
    "纤细的四足动物顶着分枝状的半透明冠角。狭长的头朝林下的动静轻轻转去。",
    "冠角或许帮助它在昏暗处展示自己。较高的身形，让它能够取食小型草甸动物够不到的枝叶。",
  ],
  "dune-runner": [
    "沙丘疾行兽",
    "轻步穿过温热的沙脊",
    "长腿支撑着狭窄的暖色身体，后面拖着长尾。小小的头高出沙漠灌木一截。",
    "抬起的脚减少了接触热地面的时间。两次觅食之间，它循着棕榈和岩石投下的零散阴影前进。",
  ],
  "sand-beetle": [
    "沙甲虫",
    "贴近地面的光滑甲壳",
    "六条短腿围着一副光滑椭圆的甲壳。浅浅的缝隙将背部分成两片亮泽的壳板。",
    "甲壳能滑落磨蚀性的沙粒。足迹聚集在多肉植物周围，说明它依靠沙漠中那些小小的生命聚点觅食。",
  ],
  "crystal-beetle": [
    "晶甲虫",
    "棱柱之间移动的宝石",
    "六条细腿托起一副多面蓝色甲壳。浅色的小脊纹，与邻近晶体的形态相互呼应。",
    "口器会从湿润岩面刮取薄薄的矿物膜。来回行走的甲虫，让洞窟中的微量矿物不断流转。",
  ],
  "cavern-ray": [
    "洞窟飞鳐",
    "蓝暗处的一片静翼",
    "宽阔柔软的双翼从扁平身体两侧展开，尾巴逐渐收细。它漂游在矿物地面上方。",
    "缓慢拍翼推动气流穿过隐蔽洞廊，让原本孤立的菌落能够借风交换孢子。",
  ],
  "meadow-ray": [
    "草甸飞鳐",
    "花朵上方的一张小帆",
    "玫瑰色的宽翼生物低低滑过花丛。每次轻缓转弯，长尾都会随着身体划出弧线。",
    "低空飞行让腹部贴近开放的花朵。它似乎沿着相同的开花路线，在不同栖息地之间往返。",
  ],
  "canopy-swift": [
    "树冠雨燕",
    "树梢上掠过的叉尾剪影",
    "后掠的双翼与深叉尾，让这只小鸟轻快穿梭于上层枝条间。转弯时，浅色腹部会闪过一道亮光。",
    "留意树木之间的空隙。雨燕沿这些通道飞行，不会穿过浓密的树冠。",
  ],
  "suncrest-bird": [
    "日冠鸟",
    "花林中的鲜亮访客",
    "暖色头冠、短弯喙与彩色尾羽，让它和雨燕很容易区分。它常在开花植物上方低低盘旋。",
    "最明亮的花丛，是观察它反复低飞路线的好地方。",
  ],
  "reed-heron": [
    "芦鹭",
    "静水上方舒展的长翼",
    "纤细的水鸟长着长喙，收起的颈部下方拖着修长双腿。宽大的羽翼掠过岸边。",
    "它沿着岸线飞行。站在湖边，比在内陆树林中更容易看清它。",
  ],
  "ribbon-fish": [
    "银带鱼",
    "涟漪下的一缕银色",
    "细长的银色身体带着精巧的鱼鳍，在水面下轻轻转动。明亮的体侧捕捉着穿透水面的光线。",
    "从浅岸向下观察。清澈水面与较近距离，能显露远处岸边看不到的细节。",
  ],
  "glass-koi": [
    "琉璃锦鲤",
    "凉水里的暖色斑纹",
    "宽厚的鱼身两侧，有暖色斑块覆在珍珠般的底色上。圆尾与成对鱼鳍在平静水域中缓缓转动。",
    "较深的水洼为锦鲤转身留出空间。开始勘测时，不妨先找湖中较为平静的区域。",
  ],
  "lantern-eel": [
    "灯鳗",
    "流动的一线微光",
    "修长渐细的身体在暗水中弯曲游动。细薄的鳍脊旁，沿体侧排列着小小的发光结点。",
    "跟着水面下的光点寻找。灯鳗始终潜在水中，靠近干燥河岸前便会转身游回。",
  ],
};

const WORLD_ZH: Record<string, string> = {
  "Canopy Forest": "树冠森林",
  "A living network beneath the leaves": "叶幕下生生相连的世界",
  "Pearl blooms and swaying fronds shelter beneath the canopy.":
    "珍珠般的花朵与摇曳蕨叶，生长在林冠的庇护下。",
  "Glass Desert": "琉璃沙漠",
  "Wind, mineral and patient light": "风、矿石与缓慢流转的光",
  "Look for glass flora among the warm stone ridges.":
    "在暖色石脊之间，寻找琉璃般的植物。",
  "Resonant Caverns": "共鸣洞窟",
  "A luminous world of slow echoes": "微光与回声交织的地下世界",
  "Pale crystals and coral-like growths mark the quieter hollows.":
    "浅色晶体与珊瑚状生物，指引你找到较为幽静的洞穴。",
  "Starpetal Meadows": "星瓣草甸",
  "Open grass and layered flower beds draw pollinators into the light.":
    "开阔草地与层层花丛，吸引传粉者来到阳光下。",
  "The Fernwood": "蕨木林",
  "Tall spires, tree ferns and fallen timber shelter a dense understory.":
    "高耸的树冠、树蕨与倒木，为繁密的林下植物提供庇护。",
  "Veilwillow Grove": "帘柳林",
  "Trailing silver-green branches shade quiet lily and bellflower beds.":
    "银绿色的垂枝，为安静的莲叶与铃花丛遮住阳光。",
  "Sporelight Wetlands": "孢光湿地",
  "Reeds, broad leaves and soft fungi follow shallow moisture channels.":
    "芦苇、宽叶与柔软菌菇，沿着浅浅的湿润水路生长。",
  "Sunwell Oasis": "日泉绿洲",
  "Palms, cycads and bright flowers gather where the sand holds moisture.":
    "沙地留得住水分的地方，聚集着棕榈、苏铁与鲜亮花朵。",
  "The Cactus Garden": "仙人掌花园",
  "Branching glass flora and rounded reservoirs form a patient desert garden.":
    "分枝的琉璃植物与圆润的储水植株，组成一座缓慢生长的沙漠花园。",
  "Ochre Badlands": "赭色荒原",
  "Weathered stacks and occasional arches frame sparse pockets of life.":
    "风化石塔与零散石拱之间，藏着稀疏而顽强的生命。",
  "Prism Gardens": "棱晶花园",
  "Dense blue prisms support coral growth and tiny mineral grazers.":
    "密集的蓝色棱晶，滋养着珊瑚状生物与细小的矿物食者。",
  "The Fungal Hollow": "菌菇幽谷",
  "Glowing caps, shelf colonies and round puffballs occupy the damp dark.":
    "发光菌盖、层架菌群与圆形马勃，在湿润暗处悄悄生长。",
  "Echo Vaults": "回声洞厅",
  "Tall mineral columns leave open passages for drifting cavern rays.":
    "高大矿柱之间留出宽敞通道，让洞窟飞鳐悠悠穿行。",
  "Firstlight Grove": "初光林地",
  "Firstlight Root Confluence": "初光根系交汇地",
  "Root Confluence": "根系交汇地",
  "Horizon Observatory": "地平线观测台",
  "Resonance Well": "共鸣井",
  "Scan the three root-linked specimens, then investigate the Heartwood Archive.":
    "扫描三份由根系相连的样本，再调查心木档案。",
  "Scan the three wind-worn specimens, then investigate the Heliograph Dial.":
    "扫描三份受风侵蚀的样本，再调查日照仪。",
  "Scan the three resonant specimens, then investigate the Harmonic Heart.":
    "扫描三份产生共鸣的样本，再调查共鸣之心。",
  "Firstlight Lake": "初光湖",
  "The Willowrun": "柳影河",
  "Saffron Oasis": "金砂绿洲",
  "Opal Pool": "欧泊水潭",
  "Willow Basin": "柳影湖盆",
  Resting: "休息中",
  "Holding in the current": "在水流中停驻",
  Swimming: "游动中",
  "Hovering nearby": "在附近悬停",
  Gliding: "滑翔中",
  "Watching you": "正在观察你",
  Foraging: "觅食中",
  Wandering: "漫步中",
  "Outside suitable water": "离开了适宜水域",
  Arrival: "初来者",
  "Field observer": "野外观察员",
  Pathfinder: "寻路者",
  Naturalist: "博物学者",
  Surveyor: "勘测员",
  Researcher: "研究员",
  Archivist: "档案编录员",
  "Atlas keeper": "图鉴守护者",
  "Research milestone": "研究里程碑",
  "Salvaged alloy": "回收合金",
  "salvaged alloy": "回收合金",
  "Recovered from supply caches. Use it to repair survey probes or build a beacon.":
    "从补给箱回收的合金，可用于修复勘测探针或制作信标。",
  "Lumen resin": "荧光树脂",
  "lumen resin": "荧光树脂",
  "A renewable-looking amber deposit. Binds pulse cells and survey beacons together.":
    "一种琥珀色沉积物，看起来具有再生的潜力。可用于组装脉冲电池和勘测信标。",
  "Conductive crystal": "导电晶体",
  "conductive crystal": "导电晶体",
  "Small charged fragments. Used in probe repairs, pulse cells and beacons.":
    "带有电荷的小块晶体，可用于修复探针、制作脉冲电池和信标。",
  "Pulse cell": "脉冲电池",
  "pulse cell": "脉冲电池",
  "Consume to recharge your survey pulse immediately and reveal nearby specimens. Field supplies are shown on your map.":
    "使用后立即为勘测脉冲充能，标记附近的样本。野外补给会显示在地图上。",
  "An extra survey pulse for when you want to search again without waiting.":
    "额外储存一次勘测脉冲，无须等待冷却即可再次搜索。",
  "Survey beacon": "勘测信标",
  "survey beacon": "勘测信标",
  "Deploy on clear dry ground. Return to this field camp from your backpack; one beacon can be active at a time.":
    "在干燥、开阔的地面部署信标，即可从背包返回这处野外营地。同时只能部署一枚信标。",
  "A reusable return point for longer expeditions.":
    "为远行设置一处可重复使用的返回点。",
  "Supply cache": "补给箱",
  "Lumen resin deposit": "荧光树脂沉积点",
  "Conductive crystal deposit": "导电晶体矿点",
  "Survey probe": "勘测探针",
  "Survey probe restored": "勘测探针已修复",
  "Investigation clue": "调查线索",
  "repair probe": "修复探针",
  "Needs 2 alloy + 1 crystal": "需要 2 份合金和 1 份晶体",
  "Backpack full": "背包已满",
  "craft or use supplies": "制作或使用物品，腾出空间",
  "Repair the survey probe instead of collecting it.":
    "这是一枚勘测探针，需要修复，无法收集。",
  "Already collected.": "已经收集过了。",
  "This expedition has reached its field record limit.":
    "本次远征的野外记录已达到上限。",
  "This deposit has no valid supplies.": "此处没有可收集的有效补给。",
  "Backpack full. Craft or use supplies to make room.":
    "背包已满。制作、使用或丢弃物品，腾出空间后再收集。",
  "Unknown recipe.": "无法识别此配方。",
  "Backpack supplies are invalid.": "背包物品数据无效。",
  "Gather the required supplies first.": "请先收集配方所需的材料。",
  "Backpack full.": "背包已满。",
  "Unknown or invalid supply.": "无法识别此物品，或物品数据无效。",
  "There are none in your backpack.": "背包里没有这个物品。",
  "This object is not a survey probe.": "此物件不是勘测探针。",
  "This probe is already repaired.": "这枚探针已经修复。",
  "Repair needs 2 salvaged alloy and 1 conductive crystal.":
    "修复需要 2 份回收合金和 1 份导电晶体。",
  "A beacon is already active. Return to it from your backpack.":
    "已有一枚信标在使用中。可打开背包返回信标处。",
  "Choose a valid place for the beacon.": "请为信标选择有效的部署位置。",
  "No beacon is deployed.": "尚未部署信标。",
  "Backpack full. Make room before packing the beacon.":
    "背包已满。请先腾出空间，再收起信标。",
  "Touch exploration controls": "触屏探索操作",
  "Movement joystick": "移动摇杆",
  MOVE: "移动",
  Scan: "扫描",
  hold: "按住",
  "Hold to scan": "按住以扫描",
  "Use nearby item": "收集或使用附近物品",
  Use: "交互",
  Jump: "跳跃",
  Pulse: "脉冲",
  Run: "奔跑",
  Bag: "背包",
  Map: "地图",
  Pause: "暂停",
  "Swipe the world to look": "滑动场景以转动视角",
  "Path obstructed": "前方有障碍",
  "Choose a closer spot around the obstacle, or move manually.":
    "请绕过障碍，选择较近的位置，或切换为手动移动。",
  "Choose a closer destination": "请选择较近的目的地",
  "Click visible ground within 80 metres.": "请点击 80 米内看得见的地面。",
  "Destination reached": "已到达目的地",
  "Click another patch of ground to keep exploring.":
    "点击另一处地面，继续探索。",
  "Choose visible ground": "请选择可见的地面",
  "Click the terrain to walk. Right-drag to look around.":
    "点击地面即可移动，按住鼠标右键拖动可转动视角。",
};

export const CONTENT_ZH: Record<string, string> = { ...WORLD_ZH };
for (const species of SPECIES) {
  const translated = SPECIES_ZH[species.id];
  if (!translated) continue;
  const fields = ["name", "subtitle", "description", "insight"] as const;
  for (let i = 0; i < fields.length; i++)
    CONTENT_ZH[species[fields[i]]] = translated[i];
}

// Procedural region names have a finite vocabulary. Author all combinations
// here so source world generation remains independent of display language.
const REGION_COMPONENTS: readonly [
  Record<string, string>,
  Record<string, string>,
][] = [
  [
    {
      Pearl: "珍珠",
      Sage: "鼠尾草",
      Dew: "露水",
      Ribbon: "缎带",
      Quiet: "静谧",
      Moss: "苔藓",
    },
    {
      Canopy: "林冠",
      Grove: "林地",
      Garden: "花园",
      Reach: "林域",
      Thicket: "灌丛",
      Vale: "山谷",
    },
  ],
  [
    {
      Amber: "琥珀",
      Glass: "琉璃",
      Ochre: "赭色",
      Copper: "铜色",
      Still: "寂静",
      Saffron: "金砂",
    },
    {
      Dunes: "沙丘",
      Basin: "盆地",
      Expanse: "旷野",
      Ridge: "沙脊",
      Horizon: "地平线",
      Wastes: "荒地",
    },
  ],
  [
    {
      Blue: "湛蓝",
      Echo: "回声",
      Opal: "欧泊",
      Lunar: "月色",
      Silver: "银光",
      Deep: "深邃",
    },
    {
      Hollow: "幽谷",
      Vault: "洞厅",
      Gallery: "洞廊",
      Sanctum: "秘境",
      Chamber: "洞室",
      Passage: "通道",
    },
  ],
];
const siteNames = [
  "Root Confluence",
  "Horizon Observatory",
  "Resonance Well",
] as const;
for (const [prefixes, suffixes] of REGION_COMPONENTS) {
  for (const [prefix, prefixZh] of Object.entries(prefixes))
    for (const [suffix, suffixZh] of Object.entries(suffixes)) {
      const name = `${prefix} ${suffix}`,
        nameZh = `${prefixZh}${suffixZh}`;
      CONTENT_ZH[name] = nameZh;
      for (const site of siteNames)
        CONTENT_ZH[`${name} · ${site}`] = `${nameZh} · ${WORLD_ZH[site]}`;
    }
}
for (const site of siteNames)
  CONTENT_ZH[`Firstlight Grove · ${site}`] = `初光林地 · ${WORLD_ZH[site]}`;
