// 毒鸡汤答案库
const answers = [
    "你的愿望很简单，但实现起来需要你加班999天。",
    "别做梦了，现实比梦想更扎心。",
    "你的愿望将在下个假期实现，但你永远没有假期。",
    "这个问题的答案藏在你的工资条里，可惜工资条也在做梦。",
    "你的愿望就像你的发际线，正在慢慢消失。",
    "这个愿望会实现，但会附赠35岁危机。",
    "你的愿望已经在路上了，但堵在了五环。",
    "答案是肯定的，但你的钱包说不。",
    "你的愿望将在下个版本更新，请继续努力打工。",
    "这个愿望和你的年终奖一样，都是个意外。",
    "实现这个愿望需要你早起打卡，但你已经迟到了。",
    "你的愿望将在月底实现，但月底你已经没钱了。",
    "这个愿望和你的发量一样，看起来很有希望。",
    "答案就在你的PPT里，但领导并不想看。",
    "你的愿望将在下次晋升时实现，距离下次晋升还有3650天。"
];

// DOM元素
const inputPage = document.getElementById('inputPage');
const answerPage = document.getElementById('answerPage');
const wishInput = document.getElementById('wishInput');
const askButton = document.getElementById('askButton');
const displayWish = document.getElementById('displayWish');
const displayAnswer = document.getElementById('displayAnswer');
const saveButton = document.getElementById('saveButton');
const tryAgainButton = document.getElementById('tryAgainButton');

// 获取随机答案
function getRandomAnswer() {
    return answers[Math.floor(Math.random() * answers.length)];
}

// 显示答案卡片
function showAnswer() {
    const wish = wishInput.value.trim();
    if (!wish) {
        alert('请输入你的愿望~');
        return;
    }

    displayWish.textContent = `"${wish}"`;
    displayAnswer.textContent = getRandomAnswer();
    
    inputPage.classList.add('hidden');
    answerPage.classList.remove('hidden');
}

// 保存答案卡片
function saveCard() {
    // 创建一个新的canvas
    html2canvas(document.querySelector('.answer-card')).then(canvas => {
        // 转换canvas为图片
        const image = canvas.toDataURL('image/png');
        // 创建下载链接
        const link = document.createElement('a');
        link.download = '我的答案卡.png';
        link.href = image;
        link.click();
    });
}

// 重新开始
function tryAgain() {
    wishInput.value = '';
    answerPage.classList.add('hidden');
    inputPage.classList.remove('hidden');
}

// 事件监听
askButton.addEventListener('click', showAnswer);
saveButton.addEventListener('click', saveCard);
tryAgainButton.addEventListener('click', tryAgain);

// 回车键触发查看答案
wishInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        showAnswer();
    }
}); 