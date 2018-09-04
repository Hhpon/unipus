const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
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
            url: 'http://202.118.163.67/book/book142/unit_index.php?UnitID=1',
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


// 第一单元第二模块第1题实际开始做
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
                'Cache-Control': 'no-cache',
                Connection: 'keep-alive',
                'Content-Length': 93,
                'Content-Type': 'application/x-www-form-urlencoded',
                Cookie: cookie,
                Host: '202.118.163.67',
                Origin: 'http://202.118.163.67',
                Pragma: 'no-cache',
                'Upgrade-Insecure-Requests': 1,
                Referer: 'http://202.118.163.67/book/book142/uyu21blank.php?UnitID=1&SectionID=2&SisterID=2',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
            },
            form: {
                UnitID: 1,
                SectionID: 2,
                SisterID: 2,
                TestID: 2.2,
                KidID: 1,
                ItemID: 96,
                'Blank_0_0': 'new things',
                'Blank_0_1': 'At the moment',
                'Blank_0_2': 'quite difficult',
            }
        }, (err, res, html) => {
            // console.log(html);
            // fs.writeFileSync('index.html',html);
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第2题实际开始做
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
                UnitID: 1,
                SectionID: 2,
                SisterID: 3,
                TestID: 2.3,
                KidID: 1,
                ItemID: 103,
                'Checkbox_0': 1,
                'Checkbox_2': 1,
                'Checkbox_6': 1,
                'Checkbox_7': 1,
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第3题实际开始做
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
                UnitID: 1,
                SectionID: 2,
                SisterID: 4,
                TestID: 2.4,
                KidID: 1,
                ItemID: 95,
                'Blank_0_0': 'ever learned ',
                'Blank_0_1': 'found',
                'Blank_1_0': 'a combination',
                'Blank_1_1': 'body movements',
                'Blank_2_0': 'Learning to drive',
                'Blank_3_0': 'nine cases',
                'Blank_3_1': 'by most standards ',
                'Blank_4_0': 'French',
                'Blank_5_0': 'hated',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第4题实际开始做
function section2sister4S(cookie) {
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
                UnitID: 1,
                SectionID: 2,
                SisterID: 9,
                TestID: 2.9,
                KidID: 1,
                ItemID: 237,
                myList: '4^2^0^6^3^7^1^5',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第5题实际开始做
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
                UnitID: 1,
                SectionID: 2,
                SisterID: 10,
                TestID: 2.10,
                KidID: 1,
                ItemID: 356,
                Blank_0_0: 'speak',
                Blank_0_1: 'saying the wrong ',
                Blank_0_2: 'native speakers ',
                Blank_0_3: 'pronunciation',
                Blank_0_4: 'talking to himself',
                Blank_0_5: 'making mistakes',
                Blank_0_6: 'listening skills',
                Blank_0_7: 'listening ',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第6题实际开始做
function section2sister6S(cookie) {
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
                UnitID: 1,
                SectionID: 2,
                SisterID: 11,
                TestID: 2.11,
                KidID: 1,
                ItemID: 164,
                'Blank_0_0': 'embarrassed ',
                'Blank_0_1': 'hear ',
                'Blank_1_0': 'anything you like',
                'Blank_2_0': 'voice ',
                'Blank_2_1': 'pronunciation',
                'Blank_3_0': 'how it sounds',
                'Blank_3_1': 'the news',
                'Blank_3_2': 'English television',
                'Blank_4_0': 'on the Internet',
                'Blank_5_0': 'sound like',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第7题实际开始做
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
                UnitID: 1,
                SectionID: 2,
                SisterID: 15,
                TestID: 2.15,
                KidID: 1,
                ItemID: 221,
                'Radio_0': 'b',
                'Radio_1': 'a',
                'Radio_2': 'b',
                'Radio_3': 'a',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第8题实际开始做
function section2sister8S(cookie) {
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
                UnitID: 1,
                SectionID: 2,
                SisterID: 16,
                TestID: 2.16,
                KidID: 1,
                ItemID: 225,
                'Radio_0': 'd',
                'Radio_1': 'a',
                'Radio_2': 'b',
                'Radio_3': 'a',
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

// 第一单元第二模块第9题实际开始做
function section2sister9S(cookie) {
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
                UnitID: 1,
                SectionID: 3,
                SisterID: 3,
                TestID: 3.3,
                KidID: 1,
                ItemID: 361,
                'Checkbox_0': 1,
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第10题实际开始做
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
                UnitID: 1,
                SectionID: 3,
                SisterID: 4,
                TestID: 3.4,
                KidID: 1,
                ItemID: 370,
                'Checkbox_0_1': 1,
                'Checkbox_1_2': 1,
                'Checkbox_2_1': 1,
                'Checkbox_3_2': 1,
                'Checkbox_4_1': 1,
                'Checkbox_5_2': 1,
                'Checkbox_6_2': 1,
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第11题实际开始做
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
                UnitID: 1,
                SectionID: 3,
                SisterID: 5,
                TestID: 3.5,
                KidID: 1,
                ItemID: 532,
                'Blank_0_0': "you should eat ",
                'Blank_0_1': "a good",
                'Blank_1_0': "should not spend",
                'Blank_1_1': "You're ",
                'Blank_2_0': "Why don't",
                'Blank_2_1': "am not sure that's",
                'Blank_3_0': "it's a good",
                'Blank_3_1': "suppose so",
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第12题实际开始做
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
                UnitID: 1,
                SectionID: 4,
                SisterID: 1,
                TestID: 4.1,
                KidID: 1,
                ItemID: 44,
                whichKidID: 1,
                'Radio_0': 'b',
                'Radio_1': 'd',
                'Radio_2': 'd',
                'Radio_3': 'c',
                'Radio_4': 'a',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第13题实际开始做
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
                UnitID: 1,
                SectionID: 4,
                SisterID: 2,
                TestID: 4.2,
                KidID: 1,
                ItemID: 53,
                'Radio_0': 'c',
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

// 第一单元第二模块第14题实际开始做
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
                UnitID: 1,
                SectionID: 4,
                SisterID: 3,
                TestID: 4.3,
                KidID: 1,
                ItemID: 61,
                'Radio_0': 'd',
                'Radio_1': 'a',
                'Radio_2': 'c',
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

// 第一单元第二模块第15题实际开始做
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
                UnitID: 1,
                SectionID: 4,
                SisterID: 4,
                TestID: 4.4,
                KidID: 1,
                ItemID: 69,
                'Blank_0_0': 'alternative ',
                'Blank_0_1': 'numerous ',
                'Blank_0_2': 'traditional ',
                'Blank_0_3': 'academic ',
                'Blank_0_4': 'countryside ',
                'Blank_0_5': 'athletes ',
                'Blank_0_6': 'take advantage of ',
                'Blank_0_7': 'Secondary ',
                'Blank_0_8': ' in a collective effort ',
                'Blank_0_9': 'serve as',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第16题实际开始做
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
                UnitID: 1,
                SectionID: 4,
                SisterID: 5,
                TestID: 4.5,
                KidID: 1,
                ItemID: 582,
                'Radio_0': 'd',
                'Radio_1': 'd',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元第二模块第17题实际开始做
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
                UnitID: 1,
                SectionID: 4,
                SisterID: 6,
                TestID: 4.6,
                KidID: 1,
                ItemID: 583,
                'Radio_0': 'a',
                'Radio_1': 'c',
                'Radio_2': 'd',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res);
            resolve('ok');
        });
    })
}

// 第一单元test实际开始做
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
                UnitID: 1,
                SectionID: 7,
                SisterID: 2,
                TestID: 7.2,
                KidID: 1,
                ItemID: 348,
                'MC_324_0': 'c',
                'MC_324_1': 'b',
                'MC_324_2': 'b',
                'MC_324_3': 'c',
                'MC_324_4': 'c',
                'MC_332_0': 'b',
                'MC_332_1': 'a',
                'MC_332_2': 'd',
                'MC_332_3': 'c',
                'MC_332_4': 'b',
                'MC_340_0': 'a',
                'MC_340_1': 'a',
                'MC_340_2': 'd',
                'MC_340_3': 'b',
                'MC_340_4': 'c',
                'Blank_348_0_0': 'political ',
                'Blank_348_0_1': 'Traditional',
                'Blank_348_0_2': 'acquire ',
                'Blank_348_0_3': 'bear in mind',
                'Blank_348_0_4': 'difficult ',
                'Blank_348_0_5': 'invented ',
                'Blank_348_0_6': 'successful ',
                'Blank_348_0_7': 'reason for',
                'Blank_348_0_8': 'thousands of',
                'Blank_348_0_9': 'brains ',
            }
        }, (err, res, html) => {
            $ = cheerio.load(html);
            var res = $('.dwt>p').text().trim();
            console.log(res + 'test');
            resolve('ok');
        });
    })
}



async function unit1(cookie, bookNum) {
    // let cookie = await signin();
    await ready1(cookie, bookNum);
    // await wait();
    await ready2(cookie);
    // await wait();
    await getSuccessPage(cookie);
    // await wait();
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
    console.log('unit1 successful');
}

// unit1();
module.exports = unit1;