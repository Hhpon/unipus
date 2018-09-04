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
            url: 'http://202.118.163.67/book/book142/unit_index.php?UnitID=6',
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
                UnitID: 6,
                SectionID: 2,
                SisterID: 2,
                TestID: 2.2,
                KidID: 1,
                ItemID: 91,
                'Blank_0_0': 'a researcher',
                'Blank_0_1': 'gets too busy',
                'Blank_0_2': 'relax',
                'Blank_0_3': 'flat ',
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
                UnitID: 6,
                SectionID: 2,
                SisterID: 3,
                TestID: 2.3,
                KidID: 1,
                ItemID: 108,
                'Checkbox_2': 1,
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

// 第2单元第二模块第3题实际开始做
function section2sister3S(cookie) {
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
                UnitID: 6,
                SectionID: 2,
                SisterID: 4,
                TestID: 2.4,
                KidID: 1,
                ItemID: 116,
                myList: '2^4^0^3^1^5',
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
                UnitID: 6,
                SectionID: 2,
                SisterID: 9,
                TestID: 2.9,
                KidID: 1,
                ItemID: 206,
                'Blank_0_0': ' a free bus ',
                'Blank_0_1': 'a dentist',
                'Blank_0_2': 'Lunch ',
                'Blank_0_3': 'a cheap',
                'Blank_0_4': 'a surprise holiday',
                'Blank_0_5': 'free coffee',
                'Blank_0_6': ' bring their children ',
                'Blank_0_7': ' free drinks',
                'Blank_0_8': ' go fishing',
                'Blank_0_9': 'all the fish ',
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
                UnitID: 6,
                SectionID: 2,
                SisterID: 15,
                TestID: 2.15,
                KidID: 1,
                ItemID: 207,
                'Blank_0_0': 'traveling to work',
                'Blank_0_1': 'live abroad',
                'Blank_0_2': ' cheap houses ',
                'Blank_0_3': 'an online map company',
                'Blank_0_4': 'working ',
                'Blank_0_5': 'drive ',
                'Blank_0_6': '700 ',
                'Blank_0_7': '38 pounds ',
                'Blank_0_8': 'quality of life',
                'Blank_0_9': ' the traffic',
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
                UnitID: 6,
                SectionID: 3,
                SisterID: 3,
                TestID: 3.3,
                KidID: 1,
                ItemID: 398,
                'Checkbox_0': 1,
                'Checkbox_2': 1,
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
            url: 'http://202.118.163.67/book/book142/uyu34blank.php',
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
                UnitID: 6,
                SectionID: 3,
                SisterID: 4,
                TestID: 3.4,
                KidID: 1,
                ItemID: 401,
                'Blank_0_0': "like",
                'Blank_1_0': " can't stand",
                'Blank_2_0': "absolutely love",
                'Blank_3_0': "don't like ",
                'Blank_3_1': "prefer",
                'Blank_4_0': "don't mind",
                'Blank_5_0': "keen on",
                'Blank_6_0': "hate ",
                'Blank_7_0': "not very keen on",
                'Blank_7_1': "want to be",
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
                UnitID: 6,
                SectionID: 3,
                SisterID: 10,
                TestID: 3.10,
                KidID: 1,
                ItemID: 442,
                'Blank_0_0': 'shaped',
                'Blank_0_1': 'faces',
                'Blank_1_0': 'personal',
                'Blank_1_1': 'special message',
                'Blank_2_0': 'at home',
                'Blank_3_0': 'beautiful website',
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
                UnitID: 6,
                SectionID: 3,
                SisterID: 11,
                TestID: 3.11,
                KidID: 1,
                ItemID: 447,
                myList: '2^4^0^1^3',
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
                UnitID: 6,
                SectionID: 4,
                SisterID: 1,
                TestID: 4.1,
                KidID: 1,
                ItemID: 50,
                whichKidID: 5,
                'Radio_0': 'b',
                'Radio_1': 'd',
                'Radio_2': 'a',
                'Radio_3': 'c',
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

function section2sister11S(cookie) {
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
                UnitID: 6,
                SectionID: 4,
                SisterID: 2,
                TestID: 4.2,
                KidID: 1,
                ItemID: 58,
                'Radio_0': 'a',
                'Radio_1': 'd',
                'Radio_2': 'b',
                'Radio_3': 'b',
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
                UnitID: 6,
                SectionID: 4,
                SisterID: 3,
                TestID: 4.3,
                KidID: 1,
                ItemID: 66,
                'Radio_0': 'b',
                'Radio_1': 'b',
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

function section2sister13S(cookie) {
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
                UnitID: 6,
                SectionID: 4,
                SisterID: 4,
                TestID: 4.4,
                KidID: 1,
                ItemID: 74,
                'Blank_0_0': 'evaluate',
                'Blank_0_1': 'compensation',
                'Blank_0_2': 'negotiating',
                'Blank_0_3': 'confirm',
                'Blank_0_4': 'schedule',
                'Blank_0_5': 'circumstances',
                'Blank_0_6': 'turn down',
                'Blank_0_7': 'start over',
                'Blank_0_8': 'work out',
                'Blank_0_9': ' informed',
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
                UnitID: 6,
                SectionID: 4,
                SisterID: 5,
                TestID: 4.5,
                KidID: 1,
                ItemID: 592,
                'Radio_0': 'b',
                'Radio_1': 'c',
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
                UnitID: 6,
                SectionID: 4,
                SisterID: 6,
                TestID: 4.6,
                KidID: 1,
                ItemID: 593,
                'Radio_0': 'c',
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
                UnitID: 6,
                SectionID: 7,
                SisterID: 2,
                TestID: 7.2,
                KidID: 1,
                ItemID: 353,
                'MC_329_0': 'b',
                'MC_329_1': 'a',
                'MC_329_2': 'c',
                'MC_329_3': 'c',
                'MC_329_4': 'd',
                'MC_337_0': 'b',
                'MC_337_1': 'd',
                'MC_337_2': 'd',
                'MC_337_3': 'c',
                'MC_337_4': 'c',
                'MC_345_0': 'c',
                'MC_345_1': 'a',
                'MC_345_2': 'd',
                'MC_345_3': 'b',
                'MC_345_4': 'c',
                'Blank_353_0_0': 'opportunities',
                'Blank_353_0_1': 'practical',
                'Blank_353_0_2': 'define',
                'Blank_353_0_3': 'compassion',
                'Blank_353_0_4': 'focusing on',
                'Blank_353_0_5': 'significance',
                'Blank_353_0_6': 'think big',
                'Blank_353_0_7': 'plays a huge role',
                'Blank_353_0_8': 'attend',
                'Blank_353_0_9': 'Contented',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res + 'test');
            resolve('ok');
        });
    })
}


async function unit6(cookie, bookNum) {
    // let cookie = await signin();
    await ready1(cookie, bookNum);
    await ready2(cookie);
    await getSuccessPage(cookie);
    await wait();
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
    await test(cookie);
    console.log('unit6 successful');
}

// unit6();
module.exports = unit6;