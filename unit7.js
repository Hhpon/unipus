const request = require('request');
const cheerio = require('cheerio');
const signin = require('./signin.js');
const wait = require('./wait.js');

// 做题前准备1 
function ready1(cookie, bookNum) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://202.118.163.67/book/index.php?BookID=142&ClassID=' + bookNum + '&Quiz=N',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                Cookie: cookie,
                Referer: 'http://202.118.163.67/login/hpindex_student.php',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            }
        }, (err, res, html) => {
            console.log('ready1成功');
            resolve('ready1=>ok');
        })
    })
}

// 做题前准备2
function ready2(cookie) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://202.118.163.67/book/book142/index.php?Quiz=N&whichActionPage=',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                Cookie: cookie,
                Referer: 'http://202.118.163.67/book/index.php?BookID=142&ClassID=4913&Quiz=N',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            }
        }, (err, res, html) => {
            console.log('ready2成功');
            resolve('ok');
        })
    })
}

// 做题前的准备3
function getSuccessPage(cookie) {
    return new Promise(function (resolve, rejsct) {
        request({
            url: 'http://202.118.163.67/book/book142/unit_index.php?UnitID=7',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Referer: 'http://202.118.163.67/book/book142/jdindex.php',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
        }, (err, res, html) => {
            console.log('getSuccessPage成功');
            resolve('ok');
        })

    })
}

function section2sister1S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu21blank.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                Referer: 'http://202.118.163.67/book/book142/uyu21blank.php?UnitID=1&SectionID=2&SisterID=2',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 2,
                SisterID: 2,
                TestID: 2.2,
                KidID: 1,
                ItemID: 92,
                'Blank_0_0': 'enjoy',
                'Blank_0_1': ' live without',
                'Blank_0_2': 'plan my life',
                'Blank_0_3': 'listening to music ',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第2单元第二模块第2题实际开始做
function section2sister2S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu23drag.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 2,
                SisterID: 3,
                TestID: 2.3,
                KidID: 1,
                ItemID: 115,
                myList: '1^4^5^0^3^2',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第2单元第二模块第3题实际开始做
function section2sister3S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu21blank.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 2,
                SisterID: 5,
                TestID: 2.5,
                KidID: 1,
                ItemID: 101,
                'Blank_0_0': 'on it all the time',
                'Blank_0_1': 'my husband',
                'Blank_1_0': 'my laptop',
                'Blank_1_1': 'phone',
                'Blank_1_2': 'essential',
                'Blank_2_0': 'beyond that',
                'Blank_3_0': 'computer',
                'Blank_3_1': 'Internet',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister4S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu34checkbox.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 2,
                SisterID: 9,
                TestID: 2.9,
                KidID: 1,
                ItemID: 231,
                'Checkbox_0': 1,
                'Checkbox_1': 1,
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister5S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu29blank.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 2,
                SisterID: 10,
                TestID: 2.10,
                KidID: 1,
                ItemID: 210,
                'Blank_0_0': 'on the Internet ',
                'Blank_1_0': 'videos',
                'Blank_2_0': 'a break',
                'Blank_2_1': 'someone in the office',
                'Blank_2_2': 'looking through',
                'Blank_3_0': 'reading books',
                'Blank_4_0': 'the computer',
                'Blank_4_1': 'sports and going out',
                'Blank_4_2': 'live in the real world',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister6S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu522checkbox.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 2,
                SisterID: 15,
                TestID: 2.15,
                KidID: 1,
                ItemID: 233,
                'Checkbox_0': 1,
                'Checkbox_3': 1,
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister7S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu823mc.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 2,
                SisterID: 16,
                TestID: 2.16,
                KidID: 1,
                ItemID: 230,
                'Radio_0': 'c',
                'Radio_1': 'b',
                'Radio_2': 'd',
                'Radio_3': 'd',
                'Radio_4': 'c',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister8S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu33blank.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 3,
                SisterID: 3,
                TestID: 3.3,
                KidID: 1,
                ItemID: 544,
                'Blank_0_0': 'Essential',
                'Blank_0_1': ' all the time',
                'Blank_0_2': 'texting ',
                'Blank_0_3': 'Not essential',
                'Blank_0_4': 'Not essential',
                'Blank_0_5': 'watch much television',
                'Blank_0_6': 'Not essential',
                'Blank_0_7': 'terrible ',
                'Blank_0_8': 'Essential',
                'Blank_0_9': 'for work',
                'Blank_0_10': 'Essential',
                'Blank_0_11': 'an emergency',
                'Blank_0_12': 'a problem with',
                'Blank_0_13': 'Essential',
                'Blank_0_14': 'Essential',
                'Blank_0_15': ' go on the Internet ',
                'Blank_0_16': 'Not essential',
                'Blank_0_17': 'Someone else',
                'Blank_0_18': 'Not essential',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister9S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu29drag.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 3,
                SisterID: 4,
                TestID: 3.4,
                KidID: 1,
                ItemID: 405,
                myList: '2^0^1^4^3^5',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister10S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu33blank.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 3,
                SisterID: 10,
                TestID: 3.10,
                KidID: 1,
                ItemID: 444,
                'Blank_0_0': '2 ',
                'Blank_0_1': 'near the sea',
                'Blank_0_2': 'real achievement ',
                'Blank_0_3': '12',
                'Blank_0_4': ' talked online',
                'Blank_0_5': 'hello ',
                'Blank_0_6': 'lonely ',
                'Blank_0_7': 'a new girl',
                'Blank_0_8': 'bored',
                'Blank_0_9': 'my real friends',
                'Blank_0_10': 'a club',
                'Blank_0_11': 'good-looking',
                'Blank_0_12': 'start talking to him',
                'Blank_0_13': 'on the dance floor',
                'Blank_0_14': "haven't been dancing ",
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister11S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu41mc.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 4,
                SisterID: 1,
                TestID: 4.1,
                KidID: 1,
                ItemID: 51,
                whichKidID: 5,
                'Radio_0': 'b',
                'Radio_1': 'c',
                'Radio_2': 'd',
                'Radio_3': 'd',
                'Radio_4': 'c',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister12S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu42mc.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 4,
                SisterID: 2,
                TestID: 4.2,
                KidID: 1,
                ItemID: 59,
                'Radio_0': 'b',
                'Radio_1': 'b',
                'Radio_2': 'a',
                'Radio_3': 'c',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister13S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu42mc.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 4,
                SisterID: 3,
                TestID: 4.3,
                KidID: 1,
                ItemID: 67,
                'Radio_0': 'd',
                'Radio_1': 'a',
                'Radio_2': 'a',
                'Radio_3': 'd',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister14S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu44blank.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 4,
                SisterID: 4,
                TestID: 4.4,
                KidID: 1,
                ItemID: 75,
                'Blank_0_0': 'response',
                'Blank_0_1': 'illegal ',
                'Blank_0_2': ' in charge of',
                'Blank_0_3': 'consequently ',
                'Blank_0_4': 'relied heavily on',
                'Blank_0_5': 'linked to',
                'Blank_0_6': 'anticipate ',
                'Blank_0_7': ' familiar with',
                'Blank_0_8': 'remedy ',
                'Blank_0_9': 'betraying ',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister15S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu45mc.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 4,
                SisterID: 5,
                TestID: 4.5,
                KidID: 1,
                ItemID: 594,
                'Radio_0': 'b',
                'Radio_1': 'a',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister16S(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu45mc.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 4,
                SisterID: 6,
                TestID: 4.6,
                KidID: 1,
                ItemID: 595,
                'Radio_0': 'd',
                'Radio_1': 'c',
                'Radio_2': 'c',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function test(cookie) {
    return new Promise(function (resolve, reject) {
        request({
            url: 'http://202.118.163.67/book/book142/uyu72.php',
            method: 'POST',
            // proxy: 'http://neauproxy.feit.me:6000',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            form: {
                UnitID: 7,
                SectionID: 7,
                SisterID: 2,
                TestID: 7.2,
                KidID: 1,
                ItemID: 354,
                'MC_330_0': 'a',
                'MC_330_1': 'd',
                'MC_330_2': 'b',
                'MC_330_3': 'c',
                'MC_330_4': 'b',
                'MC_338_0': 'b',
                'MC_338_1': 'c',
                'MC_338_2': 'a',
                'MC_338_3': 'd',
                'MC_338_4': 'c',
                'MC_346_0': 'a',
                'MC_346_1': 'b',
                'MC_346_2': 'c',
                'MC_346_3': 'd',
                'MC_346_4': 'd',
                'Blank_354_0_0': 'refer to',
                'Blank_354_0_1': 'involves ',
                'Blank_354_0_2': 'unique ',
                'Blank_354_0_3': 'valuable ',
                'Blank_354_0_4': 'at your expense',
                'Blank_354_0_5': 'associated with',
                'Blank_354_0_6': 'responsible ',
                'Blank_354_0_7': 'minimize',
                'Blank_354_0_8': 'regularly ',
                'Blank_354_0_9': 'maintain ',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res + 'test');
            resolve('ok');
        });
    })
}


async function unit7(cookie, bookNum) {
    // let cookie = await signin();
    await ready1(cookie, bookNum);
    await ready2(cookie);
    await getSuccessPage(cookie);
    await section2sister1S(cookie);
    await wait();
    await section2sister2S(cookie);
    await wait();
    await section2sister3S(cookie);
    await wait();
    await section2sister4S(cookie);
    await wait();
    await section2sister5S(cookie);
    await wait();
    await section2sister6S(cookie);
    await wait();
    await section2sister7S(cookie);
    await wait();
    await section2sister8S(cookie);
    await wait();
    await section2sister9S(cookie);
    await wait();
    await section2sister10S(cookie);
    await wait();
    await section2sister11S(cookie);
    await wait();
    await section2sister12S(cookie);
    await wait();
    await section2sister13S(cookie);
    await wait();
    await section2sister14S(cookie);
    await wait();
    await section2sister15S(cookie);
    await wait();
    await section2sister16S(cookie);
    await wait();
    await test(cookie);
    console.log('unit7 successful');
}

// unit7();
module.exports = unit7;