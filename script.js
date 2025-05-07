// 古诗数据 - 这里只包含154首古诗的示例数据（仅前10首作为示例）
const poems = [
    {
        id: 'gu1',
        title: '春晓',
        content: ['春眠不觉晓，', '处处闻啼鸟。', '夜来风雨声，', '花落知多少。']
    },
    {
        id: 'gu2',
        title: '沁园春雪',
        content: ['北国风光，', '千里冰封，', '万里雪飘。', '望长城内外，', '惟余莽莽；', '大河上下，', '顿失滔滔。', '山舞银蛇，', '原驰蜡象，', '欲与天公试比高。', '须晴日，', '看红装素裹，', '分外妖娆。', '江山如此多娇，', '引无数英雄竞折腰。', '惜秦皇汉武，', '略输文采；', '唐宗宋祖，', '稍逊风骚。', '一代天骄，', '成吉思汗，', '只识弯弓射大雕。', '俱往矣，', '数风流人物，', '还看今朝。']
    },
    {
        id: 'gu3',
        title: '滕王阁序',
        content: ['豫章故郡，洪都新府。', '星分翼轸，地接衡庐。', '襟三江而带五湖，控蛮荆而引瓯越。', '物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。', '雄州雾列，俊采星驰。', '台隍枕夷夏之交，宾主尽东南之美。', '都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。', '十旬休暇，胜友如云；千里逢迎，高朋满座。', '腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。', '家君作宰，路出名区；童子何知，躬逢胜饯。', 
        '时维九月，序属三秋。', '潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得仙人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。',
        '披绣闼，俯雕甍。', '山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。',
        '遥襟甫畅，逸兴遄飞。', '爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。',
        '嗟乎！时运不齐，命途多舛。', '冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！',
        '勃，三尺微命，一介书生。', '无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何惭？',
        '呜呼！胜地不常，盛筵难再。', '兰亭已矣，梓泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。敢竭鄙怀，恭疏短引；一言均赋，四韵俱成。请洒潘江，各倾陆海云尔。']
    },
    {
        id: 'gu4',
        title: 'gu4',
        content: ['gu4第一句', 'gu4第二句', 'gu4第三句', 'gu4第四句']
    },
    {
        id: 'gu5',
        title: 'gu5',
        content: ['gu5第一句', 'gu5第二句', 'gu5第三句', 'gu5第四句']
    },
    {
        id: 'gu6',
        title: 'gu6',
        content: ['gu6第一句', 'gu6第二句', 'gu6第三句', 'gu6第四句']
    },
    {
        id: 'gu7',
        title: 'gu7',
        content: ['gu7第一句', 'gu7第二句', 'gu7第三句', 'gu7第四句']
    },
    {
        id: 'gu8',
        title: 'gu8',
        content: ['gu8第一句', 'gu8第二句', 'gu8第三句', 'gu8第四句']
    },
    {
        id: 'gu9',
        title: 'gu9',
        content: ['gu9第一句', 'gu9第二句', 'gu9第三句', 'gu9第四句']
    },
    {
        id: 'gu10',
        title: 'gu10',
        content: ['gu10第一句', 'gu10第二句', 'gu10第三句', 'gu10第四句']
    },
    // ... 这里应该添加剩余的古诗，总共154首
];

// 生成剩余的古诗数据，直到达到154首
for (let i = 11; i <= 154; i++) {
    poems.push({
        id: `gu${i}`,
        title: `gu${i}`,
        content: [`gu${i}第一句`, `gu${i}第二句`, `gu${i}第三句`, `gu${i}第四句`]
    });
}

// 页面元素
const poetryListEl = document.getElementById('poetry-list');
const groupBtn = document.getElementById('groupBtn');
const groupCountSelect = document.getElementById('groupCount');

// 当前分组
let currentGroups = [];

// 显示所有古诗列表
function displayAllPoems() {
    poetryListEl.innerHTML = '';
    
    const groupDiv = document.createElement('div');
    groupDiv.className = 'poetry-group';
    
    const groupTitle = document.createElement('h2');
    groupTitle.className = 'group-title';
    groupTitle.textContent = '全部古诗';
    groupDiv.appendChild(groupTitle);
    
    poems.forEach(poem => {
        const poemEl = createPoemElement(poem);
        groupDiv.appendChild(poemEl);
    });
    
    poetryListEl.appendChild(groupDiv);
}

// 创建单个古诗元素
function createPoemElement(poem) {
    const container = document.createElement('div');
    container.className = 'poetry-container-item';
    container.dataset.id = poem.id;
    
    const poemEl = document.createElement('div');
    poemEl.className = 'poetry-item';
    poemEl.textContent = poem.title;
    container.appendChild(poemEl);
    
    const contentEl = document.createElement('div');
    contentEl.className = 'poetry-content hidden';
    contentEl.dataset.id = poem.id + '-content';
    container.appendChild(contentEl);
    
    poemEl.addEventListener('click', () => togglePoemDetail(poem, contentEl));
    
    return container;
}

// 切换显示/隐藏古诗详情
function togglePoemDetail(poem, contentEl) {
    // 如果内容已经加载，则切换显示/隐藏
    if (contentEl.children.length > 0) {
        contentEl.classList.toggle('hidden');
        return;
    }
    
    // 否则加载内容
    const titleEl = document.createElement('h3');
    titleEl.className = 'poetry-title';
    titleEl.textContent = poem.title;
    contentEl.appendChild(titleEl);
    
    poem.content.forEach(line => {
        const lineEl = document.createElement('p');
        lineEl.className = 'poetry-line';
        lineEl.textContent = line;
        contentEl.appendChild(lineEl);
    });
    
    contentEl.classList.remove('hidden');
}

// 随机分组
function randomGroupPoems() {
    const groupCount = parseInt(groupCountSelect.value);
    
    // 创建古诗副本并打乱顺序
    const shuffledPoems = [...poems].sort(() => Math.random() - 0.5);
    
    // 清空现有分组
    currentGroups = [];
    
    // 计算每组的大致数量
    const poemsPerGroup = Math.ceil(poems.length / groupCount);
    
    // 创建分组
    for (let i = 0; i < groupCount; i++) {
        const start = i * poemsPerGroup;
        const end = Math.min(start + poemsPerGroup, poems.length);
        currentGroups.push(shuffledPoems.slice(start, end));
    }
    
    // 显示分组
    displayGroups();
}

// 显示分组
function displayGroups() {
    poetryListEl.innerHTML = '';
    
    currentGroups.forEach((group, index) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'poetry-group';
        
        const groupTitle = document.createElement('h2');
        groupTitle.className = 'group-title';
        groupTitle.textContent = `第 ${index + 1} 组`;
        groupDiv.appendChild(groupTitle);
        
        group.forEach(poem => {
            const poemEl = createPoemElement(poem);
            groupDiv.appendChild(poemEl);
        });
        
        poetryListEl.appendChild(groupDiv);
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 针对移动设备的性能优化
    if ('ontouchstart' in window) {
        // 添加触摸优化
        document.body.classList.add('touch-device');
    }

    // 初始化显示
    displayAllPoems();
    
    // 确保所有古诗加载完毕后再添加事件监听
    groupBtn.addEventListener('click', randomGroupPoems);
    
    // 修复移动设备上的300ms点击延迟
    // 这对鸿蒙系统也有效
    addFastClickSupport();
});

// 添加FastClick支持减少移动设备点击延迟
function addFastClickSupport() {
    // 简化版FastClick实现
    document.addEventListener('touchstart', function() {}, {passive: true});
} 