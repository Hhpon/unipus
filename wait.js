var wait = function () {
    return new Promise(function (resolve, rejsct) {
        var time = Math.floor(Math.random() * 100) * 1000 * 2;
        console.log(time / 1000 + '秒后完成');
        setTimeout(() => {
            resolve('ok');
        }, time);
    })
}

module.exports = wait;