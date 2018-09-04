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
            url: 'http://202.118.163.67/book/book142/unit_index.php?UnitID=3',
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
                UnitID: 3,
                SectionID: 2,
                SisterID: 2,
                TestID: 2.2,
                KidID: 1,
                ItemID: 88,
                'Blank_0_0': 'concerts ',
                'Blank_0_1': 'a bar',
                'Blank_0_2': 'band',
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
                UnitID: 3,
                SectionID: 2,
                SisterID: 3,
                TestID: 2.3,
                KidID: 1,
                ItemID: 98,
                'Blank_0_0': 'keep fit ',
                'Blank_0_1': 'theater ',
                'Blank_1_0': 'small children',
                'Blank_1_1': 'seeing friends',
                'Blank_2_0': 'eating and drinking ',
                'Blank_2_1': 'houses ',
                'Blank_3_0': 'friends around',
                'Blank_3_1': 'a jazz club',
                'Blank_4_0': 'love to read',
                'Blank_4_1': 'oil painting',
                'Blank_5_0': 'playing the guitar',
                'Blank_5_1': 'watching films',
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
                UnitID: 3,
                SectionID: 2,
                SisterID: 4,
                TestID: 2.4,
                KidID: 1,
                ItemID: 105,
                'Checkbox_0': 1,
                'Checkbox_5': 1,
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
                UnitID: 3,
                SectionID: 2,
                SisterID: 9,
                TestID: 2.9,
                KidID: 1,
                ItemID: 170,
                'Blank_0_0': ' free art exhibition',
                'Blank_0_1': 'a concert',
                'Blank_0_2': 'dinner ',
                'Blank_0_3': 'bus home',
                'Blank_0_4': 'museum ',
                'Blank_0_5': 'paintings ',
                'Blank_0_6': 'entertainers ',
                'Blank_0_7': 'comedy ',
                'Blank_0_8': 'comedy club',
                'Blank_0_9': 'Covent Garden',
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
                UnitID: 3,
                SectionID: 2,
                SisterID: 15,
                TestID: 2.15,
                KidID: 1,
                ItemID: 407,
                'Blank_0_0': 'sightseeing ',
                'Blank_0_1': 'beach ',
                'Blank_0_2': ' get away from ',
                'Blank_0_3': 'relaxing ',
                'Blank_0_4': 'a dozen',
                'Blank_0_5': 'fantastic ',
                'Blank_0_6': 'attitude ',
                'Blank_0_7': 'perfect ',
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
                UnitID: 3,
                SectionID: 2,
                SisterID: 16,
                TestID: 2.16,
                KidID: 1,
                ItemID: 229,
                'Radio_0': 'b',
                'Radio_1': 'a',
                'Radio_2': 'a',
                'Radio_3': 'b',
                'Radio_4': 'a',
                'Radio_5': 'b',
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
                UnitID: 3,
                SectionID: 2,
                SisterID: 21,
                TestID: 2.21,
                KidID: 1,
                ItemID: 238,
                myList: '2^4^5^1^0^3',
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
                UnitID: 3,
                SectionID: 3,
                SisterID: 3,
                TestID: 3.3,
                KidID: 1,
                ItemID: 382,
                'Blank_0_0': "Book a table",
                'Blank_0_1': "4",
                'Blank_0_2': "Saturday ",
                'Blank_0_3': "10 o'clock",
                'Blank_0_4': "two tickets",
                'Blank_0_5': "Starr ",
                'Blank_0_6': "June the fifth ",
                'Blank_0_7': " June the ninth",
                'Blank_0_8': "dinner with friends",
                'Blank_0_9': "eight-thirty ",
                'Blank_0_10': "Saturday ",
                'Blank_0_11': "dinner tonight",
                'Blank_0_12': "098845673",
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
                UnitID: 3,
                SectionID: 3,
                SisterID: 4,
                TestID: 3.4,
                KidID: 1,
                ItemID: 386,
                'Blank_0_0': 'repeat ',
                'Blank_0_1': 'check ',
                'Blank_0_2': 'catch ',
                'Blank_0_3': ' slow down',
                'Blank_0_4': 'speak up',
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
                UnitID: 3,
                SectionID: 3,
                SisterID: 10,
                TestID: 3.10,
                KidID: 1,
                ItemID: 434,
                myList: '4^3^1^5^0^2',
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
                UnitID: 3,
                SectionID: 3,
                SisterID: 11,
                TestID: 3.11,
                KidID: 1,
                ItemID: 435,
                myList: '1^0^2^4^3^2',
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
                UnitID: 3,
                SectionID: 4,
                SisterID: 1,
                TestID: 4.1,
                KidID: 1,
                ItemID: 47,
                whichKidID: 5,
                'Radio_0': 'd',
                'Radio_1': 'c',
                'Radio_2': 'c',
                'Radio_3': 'b',
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
                UnitID: 3,
                SectionID: 4,
                SisterID: 2,
                TestID: 4.2,
                KidID: 1,
                ItemID: 575,
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
                UnitID: 3,
                SectionID: 4,
                SisterID: 3,
                TestID: 4.3,
                KidID: 1,
                ItemID: 63,
                'Radio_0': 'a',
                'Radio_1': 'a',
                'Radio_2': 'd',
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
                UnitID: 3,
                SectionID: 4,
                SisterID: 4,
                TestID: 4.4,
                KidID: 1,
                ItemID: 71,
                'Blank_0_0': 'objectives ',
                'Blank_0_1': 'farthest ',
                'Blank_0_2': 'recognized ',
                'Blank_0_3': 'separated into',
                'Blank_0_4': 'involves ',
                'Blank_0_5': ' is referred to',
                'Blank_0_6': 'life-threatening',
                'Blank_0_7': 'designed ',
                'Blank_0_8': 'endurance ',
                'Blank_0_9': ' putting themselves at risk ',
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
                UnitID: 3,
                SectionID: 4,
                SisterID: 5,
                TestID: 4.5,
                KidID: 1,
                ItemID: 586,
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
                UnitID: 3,
                SectionID: 4,
                SisterID: 6,
                TestID: 4.6,
                KidID: 1,
                ItemID: 587,
                'Radio_0': 'd',
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
                UnitID: 3,
                SectionID: 7,
                SisterID: 2,
                TestID: 7.2,
                KidID: 1,
                ItemID: 350,
                'MC_326_0': 'a',
                'MC_326_1': 'c',
                'MC_326_2': 'b',
                'MC_326_3': 'b',
                'MC_326_4': 'b',
                'MC_334_0': 'd',
                'MC_334_1': 'b',
                'MC_334_2': 'd',
                'MC_334_3': 'c',
                'MC_334_4': 'a',
                'MC_342_0': 'c',
                'MC_342_1': 'd',
                'MC_342_2': 'c',
                'MC_342_3': 'c',
                'Blank_350_0_0': 'have a passion for',
                'Blank_350_0_1': 'looked upon',
                'Blank_350_0_2': ' take risks ',
                'Blank_350_0_3': 'probably ',
                'Blank_350_0_4': 'ignore ',
                'Blank_350_0_5': 'attractive ',
                'Blank_350_0_6': 'familiar ',
                'Blank_350_0_7': 'obviously ',
                'Blank_350_0_8': 'powerful ',
                'Blank_350_0_9': 'requires',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res + 'test');
            resolve('ok');
        });
    })
}


async function unit3(cookie, bookNum) {
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
    await section2sister16S(cookie);
    await wait();
    await section2sister17S(cookie);
    await wait();
    await test(cookie);
    console.log('unit3 successful');
}

// unit3();
module.exports = unit3;