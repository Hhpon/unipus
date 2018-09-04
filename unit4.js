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
            url: 'http://202.118.163.67/book/book142/unit_index.php?UnitID=4',
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
                UnitID: 4,
                SectionID: 2,
                SisterID: 2,
                TestID: 2.2,
                KidID: 1,
                ItemID: 89,
                'Blank_0_0': ' finding out ',
                'Blank_0_1': 'a normal person',
                'Blank_0_2': 'feel about fame',
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
                UnitID: 4,
                SectionID: 2,
                SisterID: 3,
                TestID: 2.3,
                KidID: 1,
                ItemID: 106,
                'Checkbox_1': 1,
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
                UnitID: 4,
                SectionID: 2,
                SisterID: 4,
                TestID: 2.4,
                KidID: 1,
                ItemID: 99,
                'Blank_0_0': 'exciting ',
                'Blank_1_0': 'worthwhile ',
                'Blank_2_0': 'a model',
                'Blank_3_0': 'real fame',
                'Blank_4_0': 'invention',
                'Blank_5_0': 'in the street',
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
                UnitID: 4,
                SectionID: 2,
                SisterID: 5,
                TestID: 2.5,
                KidID: 1,
                ItemID: 111,
                myList: '1^0^2^5^4^3',
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
                UnitID: 4,
                SectionID: 2,
                SisterID: 9,
                TestID: 2.9,
                KidID: 1,
                ItemID: 182,
                'Blank_0_0': 'advertising',
                'Blank_0_1': 'enjoy the job',
                'Blank_0_2': 'travel ',
                'Blank_0_3': 'chance ',
                'Blank_0_4': ' go traveling ',
                'Blank_0_5': 'a doctor ',
                'Blank_0_6': 'have time',
                'Blank_0_7': 'play the piano',
                'Blank_0_8': 'writing songs ',
                'Blank_0_9': 'make more time ',
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
                UnitID: 4,
                SectionID: 2,
                SisterID: 15,
                TestID: 2.15,
                KidID: 1,
                ItemID: 184,
                'Blank_0_0': 'the attitude',
                'Blank_0_1': 'the talent',
                'Blank_1_0': 'speed ',
                'Blank_2_0': 'Formula One',
                'Blank_2_1': 'big guys',
                'Blank_3_0': 'ambitious drivers',
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
                UnitID: 4,
                SectionID: 2,
                SisterID: 16,
                TestID: 2.16,
                KidID: 1,
                ItemID: 185,
                'Blank_0_0': 'speed',
                'Blank_0_1': 'survive ',
                'Blank_0_2': 'October ',
                'Blank_0_3': 'richest ',
                'Blank_0_4': 'track ',
                'Blank_0_5': 'bank ',
                'Blank_0_6': 'glory ',
                'Blank_0_7': 'better ',
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
                UnitID: 4,
                SectionID: 2,
                SisterID: 21,
                TestID: 2.21,
                KidID: 1,
                ItemID: 189,
                'Blank_0_0': '7',
                'Blank_0_1': '4',
                'Blank_0_2': 'everything',
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
                UnitID: 4,
                SectionID: 3,
                SisterID: 3,
                TestID: 3.3,
                KidID: 1,
                ItemID: 390,
                'Blank_0_0': 'White House',
                'Blank_0_1': 'tomorrow afternoon',
                'Blank_0_2': 'a space flight',
                'Blank_0_3': 'next week',
                'Blank_0_4': 'her husband',
                'Blank_0_5': '80 ',
                'Blank_0_6': ' three or four',
                'Blank_0_7': 'organize ',
                'Blank_0_8': 'this weekend',
                'Blank_0_9': 'restaurant service',
                'Blank_0_10': 'French',
                'Blank_0_11': 'Paris ',
                'Blank_0_12': 'directions ',
                'Blank_0_13': 'book ',
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
            url: 'http://202.118.163.67/book/book142/uyu211checkboxTable.php',
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
                UnitID: 4,
                SectionID: 3,
                SisterID: 4,
                TestID: 3.4,
                KidID: 1,
                ItemID: 392,
                'Checkbox_0_1': 1,
                'Checkbox_1_1': 1,
                'Checkbox_2_2': 1,
                'Checkbox_3_1': 1,
                'Checkbox_4_2': 1,
                'Checkbox_5_2': 1,
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
                UnitID: 4,
                SectionID: 3,
                SisterID: 10,
                TestID: 3.10,
                KidID: 1,
                ItemID: 436,
                'Blank_0_0': 'South Wales',
                'Blank_1_0': 'a rock star ',
                'Blank_2_0': 'his dream',
                'Blank_3_0': 'drum kit',
                'Blank_3_1': 'write songs',
                'Blank_4_0': 'apart from',
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
                UnitID: 4,
                SectionID: 4,
                SisterID: 1,
                TestID: 4.1,
                KidID: 1,
                ItemID: 48,
                whichKidID: 5,
                'Radio_0': 'b',
                'Radio_1': 'b',
                'Radio_2': 'c',
                'Radio_3': 'd',
                'Radio_4': 'd',
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
                UnitID: 4,
                SectionID: 4,
                SisterID: 2,
                TestID: 4.2,
                KidID: 1,
                ItemID: 56,
                'Radio_0': 'a',
                'Radio_1': 'b',
                'Radio_2': 'b',
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
                UnitID: 4,
                SectionID: 4,
                SisterID: 3,
                TestID: 4.3,
                KidID: 1,
                ItemID: 64,
                'Radio_0': 'b',
                'Radio_1': 'd',
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

function section2sister15S(cookie) {
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
                UnitID: 4,
                SectionID: 4,
                SisterID: 4,
                TestID: 4.4,
                KidID: 1,
                ItemID: 72,
                'Blank_0_0': 'commentators ',
                'Blank_0_1': 'exaggerated ',
                'Blank_0_2': 'focus on',
                'Blank_0_3': 'lead an active life ',
                'Blank_0_4': ' laid the foundation',
                'Blank_0_5': 'annual ',
                'Blank_0_6': 'a series of',
                'Blank_0_7': 'advocating ',
                'Blank_0_8': 'abolish ',
                'Blank_0_9': 'influential ',
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
                UnitID: 4,
                SectionID: 4,
                SisterID: 5,
                TestID: 4.5,
                KidID: 1,
                ItemID: 588,
                'Radio_0': 'd',
                'Radio_1': 'b',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

function section2sister17S(cookie) {
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
                UnitID: 4,
                SectionID: 4,
                SisterID: 6,
                TestID: 4.6,
                KidID: 1,
                ItemID: 589,
                'Radio_0': 'a',
                'Radio_1': 'b',
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
                UnitID: 4,
                SectionID: 7,
                SisterID: 2,
                TestID: 7.2,
                KidID: 1,
                ItemID: 351,
                'MC_327_0': 'c',
                'MC_327_1': 'a',
                'MC_327_2': 'c',
                'MC_327_3': 'c',
                'MC_327_4': 'c',
                'MC_335_0': 'c',
                'MC_335_1': 'b',
                'MC_335_2': 'b',
                'MC_335_3': 'a',
                'MC_343_0': 'b',
                'MC_343_1': 'c',
                'MC_343_2': 'c',
                'MC_343_3': 'b',
                'MC_343_4': 'a',
                'Blank_351_0_0': 'champion ',
                'Blank_351_0_1': 'challenges ',
                'Blank_351_0_2': 'Regardless of ',
                'Blank_351_0_3': 'inspiration ',
                'Blank_351_0_4': 'remarkable ',
                'Blank_351_0_5': 'legendary ',
                'Blank_351_0_6': 'dominance ',
                'Blank_351_0_7': ' appeal in',
                'Blank_351_0_8': 'aspire to',
                'Blank_351_0_9': 'magnificent',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res + 'test');
            resolve('ok');
        });
    })
}


async function unit4(cookie,bookNum) {
    // let cookie = await signin();
    await ready1(cookie,bookNum);
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
    await section2sister16S(cookie);
    await wait();
    await section2sister17S(cookie);
    await wait();
    await test(cookie);
    console.log('unit4 successful');
}

// unit4();
module.exports = unit4;