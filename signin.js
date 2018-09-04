var request = require('request');

//拿cookie 
function getCookie() {
    return new Promise(
        function (resolve, reject) {
            request({
                url: 'http://202.118.163.67/',
                followRedirect: false,
                // proxy: 'http://neauproxy.feit.me:6000',
            }, (err, res) => {

                var cookie = res.headers['set-cookie'][0].split(';')[0];

                resolve(cookie);
            });
        }
    )
}

// 拿到cookie之后请求那个文件
function getIndexPage(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/index.php?' + cookie,
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                Referer: 'http://202.118.163.67/index.php',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
        }, (err, res) => {
            resolve('ok');
        })
    })
}

//拿到cookie后的登录
function login(username, password, cookie) {
    return new Promise(
        function (resolve, reject) {
            request({
                url: 'http://202.118.163.67/index.php',
                method: 'POST',
                // proxy: 'http://neauproxy.feit.me:6000',
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Encoding': 'gzip, deflate',
                    'Accept-Language': 'zh-CN,zh;q=0.9',
                    'Cache-Control': 'max-age=0',
                    Connection: 'keep-alive',
                    'Upgrade-Insecure-Requests': 1,
                    Cookie: cookie,
                    Host: '202.118.163.67',
                    Origin: 'http://202.118.163.67',
                    Referer: 'http://202.118.163.67/index.php',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
                },
                form: {
                    username: username,
                    password: password
                }
            }, (err, res, html) => {
                resolve('ok');
            });
        }
    )
}

//验证是否成功登录了
function checkLoginSuccess(username, cookie) {
    return new Promise(
        function (resolve, reject) {
            request({
                url: 'http://202.118.163.67/login/hpindex_student.php',
                method: 'GET',
                // proxy: 'http://neauproxy.feit.me:6000',
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Encoding': 'gzip, deflate',
                    'Accept-Language': 'zh-CN,zh;q=0.9',
                    Cookie: cookie,
                    Host: '202.118.163.67',
                    Origin: 'http://202.118.163.67',
                    Referer: 'http://202.118.163.67/index.php',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
                },
            }, (err, res, html) => {
                if (html.indexOf(username) != -1) {
                    console.log('登录成功');
                } else {
                    console.log('登录失败');
                }
                resolve('ok');
            });
        }
    )
}

async function signin(username, password) {
    let cookie = await getCookie();
    await getIndexPage(cookie);
    await login(username, password, cookie);
    const res = await checkLoginSuccess(username, cookie);
    return cookie;
}

module.exports = signin;
// signin();