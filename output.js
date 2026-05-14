//Thu May 14 2026 08:27:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("大象新闻"),
  CKS = ($.isNode() ? process.env.dxxwck : $.getdata("dxxwck")) || "",
  CryptoJS = require("crypto-js");
window = {};
let phone = {},
  password = {},
  authorization = {},
  refreshToken = {},
  cookie = {},
  headArr = {},
  notice = "",
  aliName = {},
  aliAccount = {},
  key = "",
  token = "",
  end = [];
!(async () => {
  await main();
})().catch(_0x208811 => {
  $.log(_0x208811);
}).finally(() => {
  $.done({});
});
async function main() {
  if (!CKS) {
    console.log("未填写ck");
    return;
  }
  let _0x47d7ac = Array.isArray(CKS) ? CKS : CKS.split("\n");
  for (const _0x44cfb1 in _0x47d7ac) {
    let _0x37540c = _0x47d7ac[_0x44cfb1];
    phone[_0x44cfb1] = _0x37540c.split("#")[0];
    password[_0x44cfb1] = _0x37540c.split("#")[1];
    aliAccount[_0x44cfb1] = _0x37540c.split("#")[2];
    aliName[_0x44cfb1] = _0x37540c.split("#")[3];
    headArr[_0x44cfb1] = "【账号 [" + phone[_0x44cfb1] + "] 】";
    await begin(_0x44cfb1);
  }
  while (true) {
    await $.wait(5000);
    if (end.length == _0x47d7ac.length) break;
  }
  notice && (await sendMsg(notice));
}
async function begin(_0x4f9b50) {
  let _0x47f458 = "大象新闻-" + phone[_0x4f9b50],
    _0x369a71 = true,
    _0x4a6aae = $.getdata(_0x47f458) || "";
  if (_0x4a6aae) {
    {
      authorization[_0x4f9b50] = _0x4a6aae.authorization;
      refreshToken[_0x4f9b50] = _0x4a6aae.refreshToken;
      let _0x374c51 = _0x4a6aae.expires;
      new Date().getTime() < _0x374c51 && (_0x369a71 = false, print(_0x4f9b50, "缓存登录成功"));
    }
  }
  if (_0x369a71) {
    {
      let _0x53ac65 = await commonPost(_0x4f9b50, "/mobile/uaa-app/oauth/token", "grant_type=password&username=%7B%22principal%22%3A%22" + phone[_0x4f9b50] + "%22%2C%22authenticationType%22%3A%22mobile%22%7D&password=" + getPwd(_0x4f9b50));
      if (_0x53ac65.hasOwnProperty("access_token")) {
        authorization[_0x4f9b50] = "Bearer " + _0x53ac65.access_token;
        refreshToken[_0x4f9b50] = _0x53ac65.refresh_token;
        $.setdata({
          "authorization": authorization[_0x4f9b50],
          "refreshToken": refreshToken[_0x4f9b50],
          "expires": new Date().getTime() + _0x53ac65.expires_in * 1000
        }, _0x47f458);
        print(_0x4f9b50, "登录成功");
      } else {
        print(_0x4f9b50, "登录失败:" + _0x53ac65.msg);
        end.push(_0x4f9b50);
        return;
      }
    }
  }
  await signTask(_0x4f9b50, signOperatingId);
  end.push(_0x4f9b50);
}
async function signTask(_0x3958ea, _0x193680) {
  let _0x53befb = await intGet(_0x3958ea, "/integration/p/duiba/autoLoginUrl?dbredirect=https:%2F%2F90580-activity.dexfu.cn%2Fsign%2Fcomponent%2Fpage%3FsignOperatingId%3D" + _0x193680);
  if (_0x53befb.code == 0) {
    {
      let _0x78ab1d = _0x53befb.result,
        _0x53084c = await activityLocationGet(_0x78ab1d);
      cookie[_0x3958ea] = await activityCookieGet(_0x53084c);
      await signin(_0x3958ea, _0x193680);
    }
  } else print(_0x3958ea, "获取兑吧登录链接失败:" + _0x53befb.msg);
}
async function signin(_0x1e8ff1, _0x685fe0) {
  let _0x3e58df = await activityGet(_0x1e8ff1, "/sign/component/page?signOperatingId=" + _0x685fe0 + "&from=login&spm=90580.1.1.1"),
    _0x5554dd = /<script[^>]*>[\s]*\/\*[\s]*\*[\s]*获取token[\s]*\*\/[\s]*([\s\S]*?)<\/script>/i.exec(_0x3e58df)[1];
  eval(_0x5554dd);
  key = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
  print(_0x1e8ff1, "获取key:" + key);
  let _0x3f1b38 = await activityGet(_0x1e8ff1, "/sign/component/index?signOperatingId=" + _0x685fe0 + "&preview=false&_=" + Date.now());
  if (_0x3f1b38.success) {
    if (_0x3f1b38.data.signResult) print(_0x1e8ff1, "今日已签到");else {
      let _0x101030 = await activityPost(_0x1e8ff1, "/chw/ctoken/getToken", "timestamp=" + Date.now());
      eval(_0x101030.token);
      token = window[key];
      let _0x3069b4 = await activityPost(_0x1e8ff1, "/sign/component/doSign?_=" + Date.now(), "signOperatingId=" + _0x685fe0 + "&token=" + token);
      if (_0x3069b4.success) {
        print(_0x1e8ff1, "签到成功");
      } else print(_0x1e8ff1, "签到失败:" + (_0x3069b4.desc || _0x3069b4.message));
    }
    await signLottery(_0x1e8ff1, _0x685fe0);
  } else print(_0x1e8ff1, "获取抽奖信息失败:" + (lotCnt.desc || lotCnt.message));
}
async function signLottery(_0x3fca44, _0x1c80a2) {
  let _0x1e983a = await activityGet(_0x3fca44, "/sign/component/index?signOperatingId=" + _0x1c80a2 + "&preview=false&_=" + Date.now());
  if (_0x1e983a.success) {
    print(_0x3fca44, "当前签到天数:" + _0x1e983a.data.totalCount);
    if (_0x1e983a.data.times > 0) {
      {
        let _0x189136 = await activityPost(_0x3fca44, "/chw/ctoken/getToken", "timestamp=" + Date.now());
        eval(_0x189136.token);
        token = window[key];
        let _0x49e106 = await activityPost(_0x3fca44, "/sign/component/doJoin?_=" + Date.now(), "signOperatingId=" + _0x1c80a2 + "&token=" + token);
        if (_0x49e106.success) {
          if (!_0x49e106.data.orderNum) {
            print(_0x3fca44, JSON.stringify(_0x49e106));
            return;
          }
          let _0x149de7 = _0x49e106.data.orderNum,
            _0x5008e9 = 0;
          while (_0x5008e9 == 0) {
            {
              let _0x3f75af = await activityGet(_0x3fca44, "/plugin/getOrderStatus?orderId=" + _0x149de7 + "&_=" + Date.now());
              _0x5008e9 = _0x3f75af.result;
              if (_0x5008e9 == 0) {} else {
                {
                  (!_0x3f75af.lottery || _0x3f75af.lottery.type == "thanks") && print(_0x3fca44, "谢谢参与❌", true);
                  if (_0x3f75af.lottery.type == "alipay") {
                    print(_0x3fca44, "抽奖获得：" + _0x3f75af.lottery.title + "✅", true);
                    let _0x128802 = _0x3f75af.lottery.link,
                      _0x1b77c0 = _0x128802.split("?")[1],
                      _0x39d85b = {},
                      _0x4f247d = _0x1b77c0.split("&");
                    for (let _0xad592b = 0, _0x1b853d = _0x4f247d.length; _0xad592b < _0x1b853d; _0xad592b++) {
                      let _0xfcf2a3 = _0x4f247d[_0xad592b].split("=");
                      _0x39d85b[_0xfcf2a3[0]] = _0xfcf2a3[1];
                    }
                    let _0x1d7a1e = _0x39d85b.recordId;
                    if (aliName[_0x3fca44] && aliAccount[_0x3fca44]) {
                      let _0x74c33e = await activityGet(_0x3fca44, "/activity/takePrizeNew?recordId=" + _0x1d7a1e + "&dbnewopen"),
                        _0x159a22 = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(_0x74c33e)[1];
                      eval(_0x159a22);
                      key = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                      let _0x1b10a2 = await activityPost(_0x3fca44, "/ctoken/getToken.do");
                      eval(_0x1b10a2.token);
                      token = window[key];
                      let _0x1a8b55 = await activityPost(_0x3fca44, "/activity/doTakePrize", "alipay=" + aliAccount[_0x3fca44] + "&realname=" + encodeURI(aliName[_0x3fca44]) + "&recordId=" + _0x1d7a1e + "&token=" + token);
                      print(_0x3fca44, _0x1a8b55.desc || _0x1a8b55.message);
                    } else print(_0x3fca44, "请设置支付宝姓名和账号");
                  }
                }
              }
            }
          }
        } else print(_0x3fca44, "抽奖失败:" + (_0x49e106.desc || _0x49e106.message));
      }
    }
  } else print(_0x3fca44, "获取抽奖信息失败:" + (lotCnt.desc || lotCnt.message));
}
async function commonPost(_0x2c6673, _0x5b9ad3, _0x5be9e2, _0xec9779 = 5) {
  if (_0xec9779 <= 0) throw new Error("请求重试次数超限");
  const _0x4f91fd = {
    "url": "https://pubmod.hntv.tv" + _0x5b9ad3,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Host": "pubmod.hntv.tv",
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "User-Agent": "okhttp/4.9.0"
    },
    "body": _0x5be9e2
  };
  return new Promise((_0x3f4738, _0xd77b80) => {
    $.post(_0x4f91fd, async (_0x1c99c6, _0x3e2258, _0x28902d) => {
      try {
        {
          if (_0x1c99c6) {
            await $.wait(3000);
            throw new Error("没有响应");
          }
          _0x3f4738(JSON.parse(_0x28902d));
        }
      } catch (_0xa699d1) {
        console.log(_0x5b9ad3 + " API请求失败，剩余重试次数" + (_0xec9779 - 1));
        commonPost(_0x2c6673, _0x5b9ad3, _0x5be9e2, _0xec9779 - 1).then(_0x3f4738).catch(_0xd77b80);
      }
    });
  });
}
async function intGet(_0x10c70f, _0x139dc8, _0x574c18 = 5) {
  if (_0x574c18 <= 0) throw new Error("请求重试次数超限");
  const _0x1b2bf5 = {
    "url": "https://integration.hntv.tv" + _0x139dc8,
    "headers": {
      "host": "integration.hntv.tv",
      "accept": "application/json, text/plain, */*",
      "authorization": authorization[_0x10c70f],
      "user-agent": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
      "origin": "https://static.hntv.tv",
      "x-requested-with": "com.hnr.dxxw",
      "referer": "https://static.hntv.tv/",
      "accept-encoding": "gzip, deflate",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    }
  };
  return new Promise((_0x3256ff, _0x49a7e1) => {
    $.get(_0x1b2bf5, async (_0x39f2e7, _0x2cacfe, _0x3e166f) => {
      try {
        if (_0x39f2e7) {
          await $.wait(3000);
          throw new Error("没有响应");
        }
        _0x3256ff(JSON.parse(_0x3e166f));
      } catch (_0x215c14) {
        console.log(_0x139dc8 + " API请求失败，剩余重试次数" + (_0x574c18 - 1));
        intGet(_0x10c70f, _0x139dc8, _0x574c18 - 1).then(_0x3256ff).catch(_0x49a7e1);
      }
    });
  });
}
async function activityGet(_0x553387, _0x49b8c0, _0x4c4264 = 5) {
  if (_0x4c4264 <= 0) throw new Error("请求重试次数超限");
  return new Promise((_0x40713e, _0x5dd95e) => {
    {
      const _0x41a4d6 = {
        "url": "https://90580-activity.dexfu.cn" + _0x49b8c0,
        "headers": {
          "host": "90580-activity.dexfu.cn",
          "user-agent": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "x-requested-with": "com.hnr.dxxw",
          "referer": "https://90580-activity.dexfu.cn/chw/visual-editor/skins?id=268299&from=login&spm=90580.1.1.1",
          "accept-encoding": "gzip, deflate",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "Cookie": cookie[_0x553387]
        }
      };
      $.get(_0x41a4d6, async (_0x520a9a, _0x252a74, _0x3c9567) => {
        try {
          {
            if (_0x520a9a) {
              await $.wait(3000);
              throw new Error("没有响应");
            }
            await $.wait(2000);
            try {
              _0x40713e(JSON.parse(_0x3c9567));
            } catch (_0x1aaaf5) {
              _0x40713e(_0x3c9567);
            }
          }
        } catch (_0x40438c) {
          console.log(_0x49b8c0 + " API请求失败，剩余重试次数" + (_0x4c4264 - 1));
          activityGet(_0x553387, _0x49b8c0, _0x4c4264 - 1).then(_0x40713e).catch(_0x5dd95e);
        }
      });
    }
  });
}
async function activityPost(_0x3c76dd, _0x53a35c, _0x2166b6 = "", _0x5de860 = 2) {
  if (_0x5de860 <= 0) {
    throw new Error("请求重试次数超限");
  }
  return new Promise((_0x4abea2, _0x350f88) => {
    const _0x5f02e4 = {
      "url": "https://90580-activity.dexfu.cn" + _0x53a35c,
      "headers": {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Connection": "keep-alive",
        "Content-Type": typeof _0x2166b6 === "string" ? "application/x-www-form-urlencoded" : "application/json",
        "Cookie": cookie[_0x3c76dd],
        "Host": "94227.activity-42.m.duiba.com.cn",
        "Origin": "https://94227.activity-42.m.duiba.com.cn",
        "user-agent": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
        "X-Requested-With": "XMLHttpRequest"
      },
      "body": typeof _0x2166b6 === "string" ? _0x2166b6 : JSON.stringify(_0x2166b6)
    };
    $.post(_0x5f02e4, async (_0x61953, _0x3d825e, _0x2a26b7) => {
      try {
        if (_0x61953) {
          await $.wait(3000);
          throw new Error("没有响应");
        }
        await $.wait(2000);
        _0x4abea2(JSON.parse(_0x2a26b7));
      } catch (_0x55c526) {
        console.log(_0x53a35c + " API请求失败，剩余重试次数" + (_0x5de860 - 1));
        activityPost(_0x3c76dd, _0x53a35c, _0x2166b6, _0x5de860 - 1).then(_0x4abea2).catch(_0x350f88);
      }
    });
  });
}
async function activityLocationGet(_0x2ee48d) {
  return new Promise(_0x5a2cb3 => {
    const _0xf16e72 = {
      "url": _0x2ee48d,
      "headers": {
        "host": "90580.activity-42.m.duiba.com.cn",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "x-requested-with": "com.hnr.dxxw",
        "referer": "https://static.hntv.tv/",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      "followRedirect": false
    };
    $.get(_0xf16e72, async (_0x1c3198, _0x10d420, _0x57d57e) => {
      try {
        {
          if (_0x1c3198) console.log("" + JSON.stringify(_0x1c3198)), console.log(_0x2ee48d + " API请求失败，请检查网路重试");else {
            _0x5a2cb3(_0x10d420.headers.location);
          }
        }
      } catch (_0xe457d3) {
        $.logErr(_0xe457d3, _0x10d420);
      } finally {
        _0x5a2cb3();
      }
    });
  });
}
async function activityCookieGet(_0x4bef6b) {
  return new Promise(_0x1402c1 => {
    const _0x226187 = {
      "url": _0x4bef6b,
      "headers": {
        "host": "90580-activity.dexfu.cn",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "x-requested-with": "com.hnr.dxxw",
        "referer": "https://static.hntv.tv/",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      "followRedirect": false
    };
    $.get(_0x226187, async (_0x4a3418, _0x3e0f8a, _0x188e06) => {
      try {
        {
          if (_0x4a3418) console.log("" + JSON.stringify(_0x4a3418)), console.log(_0x4bef6b + " API请求失败，请检查网路重试");else {
            let _0x2cdc42 = "",
              _0x1dad3a = _0x3e0f8a.headers["set-cookie"] || _0x3e0f8a.headers["Set-Cookie"];
            for (let _0x18eedd = 0; _0x18eedd < _0x1dad3a.length; _0x18eedd++) {
              _0x2cdc42 += _0x1dad3a[_0x18eedd].split(";")[0] + ";";
            }
            _0x1402c1(_0x2cdc42);
          }
        }
      } catch (_0x44aded) {
        $.logErr(_0x44aded, _0x3e0f8a);
      } finally {
        _0x1402c1();
      }
    });
  });
}
function getPwd(_0x180d86) {
  let _0x4bdd85 = encodeURIComponent(password[_0x180d86]);
  _0x4bdd85 = CryptoJS.enc.Utf8.parse(_0x4bdd85);
  let _0x428ceb = stringify(_0x4bdd85),
    _0x20be29 = Buffer.from("em" + _0x428ceb).toString("base64");
  return encodeURIComponent(_0x20be29);
}
function stringify(_0x1039be) {
  let _0x312660 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var _0x22467c = _0x1039be.words,
    _0x3c4ed3 = _0x1039be.sigBytes,
    _0x1a9263 = _0x312660;
  _0x1039be.clamp();
  for (var _0x57b547 = [], _0x15ac4e = 0; _0x15ac4e < _0x3c4ed3; _0x15ac4e += 3) for (var _0xd83cf8 = (_0x22467c[_0x15ac4e >>> 2] >>> 24 - _0x15ac4e % 4 * 8 & 255) << 16 | (_0x22467c[_0x15ac4e + 1 >>> 2] >>> 24 - (_0x15ac4e + 1) % 4 * 8 & 255) << 8 | _0x22467c[_0x15ac4e + 2 >>> 2] >>> 24 - (_0x15ac4e + 2) % 4 * 8 & 255, _0xedbe6b = 0; _0xedbe6b < 4 && _0x15ac4e + 0.75 * _0xedbe6b < _0x3c4ed3; _0xedbe6b++) _0x57b547.push(_0x1a9263.charAt(_0xd83cf8 >>> 6 * (3 - _0xedbe6b) & 63));
  var _0x85352e = _0x1a9263.charAt(64);
  if (_0x85352e) {
    for (; _0x57b547.length % 4;) _0x57b547.push(_0x85352e);
  }
  return _0x57b547.join("");
}
function print(_0x44f235, _0x56cd08, _0x5077e0 = false) {
  let _0x59a7d8 = "" + headArr[_0x44f235] + _0x56cd08;
  console.log(_0x59a7d8);
  _0x5077e0 && (notice += _0x59a7d8 + "\n");
}
async function sendMsg(_0x466d08) {
  if ($.isNode()) {
    {
      let _0x4159a8 = "";
      try {
        _0x4159a8 = require("./sendNotify");
      } catch (_0x479b6f) {
        _0x4159a8 = require("../sendNotify");
      }
      await _0x4159a8.sendNotify($.name, _0x466d08);
    }
  } else $.msg($.name, "", _0x466d08);
}
function Env(_0x22fc37, _0x490f66) {
  class _0x1eb074 {
    constructor(_0x1d25ab) {
      this.env = _0x1d25ab;
    }
    ["send"](_0x26ad94, _0x5b4a4d = "GET") {
      _0x26ad94 = "string" == typeof _0x26ad94 ? {
        "url": _0x26ad94
      } : _0x26ad94;
      let _0x16eb1a = this.get;
      "POST" === _0x5b4a4d && (_0x16eb1a = this.post);
      return new Promise((_0x1bae6e, _0xa63196) => {
        _0x16eb1a.call(this, _0x26ad94, (_0x2ca55d, _0x2db01f, _0x12234d) => {
          _0x2ca55d ? _0xa63196(_0x2ca55d) : _0x1bae6e(_0x2db01f);
        });
      });
    }
    ["get"](_0x1bc31e) {
      return this.send.call(this.env, _0x1bc31e);
    }
    ["post"](_0x3f247d) {
      return this.send.call(this.env, _0x3f247d, "POST");
    }
  }
  return new class {
    constructor(_0x3e1ad5, _0x3cf3a7) {
      this.logLevels = {
        "debug": 0,
        "info": 1,
        "warn": 2,
        "error": 3
      };
      this.logLevelPrefixs = {
        "debug": "[DEBUG] ",
        "info": "[INFO] ",
        "warn": "[WARN] ",
        "error": "[ERROR] "
      };
      this.logLevel = "info";
      this.name = _0x3e1ad5;
      this.http = new _0x1eb074(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3cf3a7);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["getEnv"]() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    ["isNode"]() {
      return "Node.js" === this.getEnv();
    }
    ["isQuanX"]() {
      return "Quantumult X" === this.getEnv();
    }
    ["isSurge"]() {
      return "Surge" === this.getEnv();
    }
    ["isLoon"]() {
      return "Loon" === this.getEnv();
    }
    ["isShadowrocket"]() {
      return "Shadowrocket" === this.getEnv();
    }
    ["isStash"]() {
      return "Stash" === this.getEnv();
    }
    ["toObj"](_0x1bff85, _0x346325 = null) {
      try {
        return JSON.parse(_0x1bff85);
      } catch {
        return _0x346325;
      }
    }
    ["toStr"](_0xbfd9d7, _0x125369 = null, ..._0x316584) {
      try {
        return JSON.stringify(_0xbfd9d7, ..._0x316584);
      } catch {
        return _0x125369;
      }
    }
    ["getjson"](_0x3ab811, _0x250409) {
      let _0x1beaf6 = _0x250409;
      if (this.getdata(_0x3ab811)) try {
        _0x1beaf6 = JSON.parse(this.getdata(_0x3ab811));
      } catch {}
      return _0x1beaf6;
    }
    ["setjson"](_0x487b11, _0x5d0252) {
      try {
        return this.setdata(JSON.stringify(_0x487b11), _0x5d0252);
      } catch {
        return false;
      }
    }
    ["randomInt"](_0x2ff1bb, _0x3ee32e) {
      _0x2ff1bb = Math.ceil(_0x2ff1bb);
      _0x3ee32e = Math.floor(_0x3ee32e);
      return Math.floor(Math.random() * (_0x3ee32e - _0x2ff1bb + 1)) + _0x2ff1bb;
    }
    ["getTodayStr"]() {
      {
        let _0x59f88e = new Date(),
          _0x411c3a = _0x59f88e.getFullYear(),
          _0x2a5ab9 = String(_0x59f88e.getMonth() + 1).padStart(2, "0"),
          _0x5778f1 = String(_0x59f88e.getDate()).padStart(2, "0");
        return _0x411c3a + "-" + _0x2a5ab9 + "-" + _0x5778f1;
      }
    }
    ["getMonthFirstStr"]() {
      {
        let _0x595438 = new Date(),
          _0x547d54 = _0x595438.getFullYear(),
          _0x451f2b = String(_0x595438.getMonth() + 1).padStart(2, "0");
        return _0x547d54 + "-" + _0x451f2b + "-01";
      }
    }
    ["getMonthLastStr"]() {
      const _0x22fe03 = new Date(),
        _0x4d2b42 = new Date(_0x22fe03.getFullYear(), _0x22fe03.getMonth() + 1, 0),
        _0x4cb553 = _0x4d2b42.getFullYear(),
        _0x3c34f6 = String(_0x4d2b42.getMonth() + 1).padStart(2, "0"),
        _0x140065 = String(_0x4d2b42.getDate()).padStart(2, "0");
      return _0x4cb553 + "-" + _0x3c34f6 + "-" + _0x140065;
    }
    ["getMonthStr"]() {
      let _0x211ed6 = new Date(),
        _0x18a499 = _0x211ed6.getFullYear(),
        _0x7b06d5 = String(_0x211ed6.getMonth() + 1).padStart(2, "0");
      return _0x18a499 + "-" + _0x7b06d5;
    }
    ["getNowStr"]() {
      {
        let _0x31bcbb = new Date(),
          _0x122a2d = _0x31bcbb.getFullYear(),
          _0x16072f = String(_0x31bcbb.getMonth() + 1).padStart(2, "0"),
          _0x4c8e63 = String(_0x31bcbb.getDate()).padStart(2, "0"),
          _0x1432eb = String(_0x31bcbb.getHours()).padStart(2, "0"),
          _0x33fefc = String(_0x31bcbb.getMinutes()).padStart(2, "0"),
          _0x27c527 = String(_0x31bcbb.getSeconds()).padStart(2, "0");
        return _0x122a2d + "-" + _0x16072f + "-" + _0x4c8e63 + " " + _0x1432eb + ":" + _0x33fefc + ":" + _0x27c527;
      }
    }
    ["getScript"](_0x491dc0) {
      return new Promise(_0x4a6c89 => {
        this.get({
          "url": _0x491dc0
        }, (_0x4a40ac, _0xfe2c30, _0x2a74d9) => _0x4a6c89(_0x2a74d9));
      });
    }
    ["runScript"](_0x3c1742, _0x40ec5b) {
      return new Promise(_0x244101 => {
        let _0x2b97cb = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2b97cb = _0x2b97cb ? _0x2b97cb.replace(/\n/g, "").trim() : _0x2b97cb;
        let _0x238e57 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x238e57 = _0x238e57 ? 1 * _0x238e57 : 20;
        _0x238e57 = _0x40ec5b && _0x40ec5b.timeout ? _0x40ec5b.timeout : _0x238e57;
        const [_0x4e6261, _0x2bb78f] = _0x2b97cb.split("@"),
          _0x329192 = {
            "url": "http://" + _0x2bb78f + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x3c1742,
              "mock_type": "cron",
              "timeout": _0x238e57
            },
            "headers": {
              "X-Key": _0x4e6261,
              "Accept": "*/*"
            },
            "timeout": _0x238e57
          };
        this.post(_0x329192, (_0x41b22e, _0x33ea89, _0x565e27) => _0x244101(_0x565e27));
      }).catch(_0x99e642 => this.logErr(_0x99e642));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x3c5299 = this.path.resolve(this.dataFile),
            _0x1b8607 = this.path.resolve(process.cwd(), this.dataFile),
            _0x4cc254 = this.fs.existsSync(_0x3c5299),
            _0x54dfd7 = !_0x4cc254 && this.fs.existsSync(_0x1b8607);
          if (!_0x4cc254 && !_0x54dfd7) return {};
          {
            const _0x2a99ea = _0x4cc254 ? _0x3c5299 : _0x1b8607;
            try {
              return JSON.parse(this.fs.readFileSync(_0x2a99ea));
            } catch (_0x3160af) {
              return {};
            }
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x347ff0 = this.path.resolve(this.dataFile),
            _0xf89070 = this.path.resolve(process.cwd(), this.dataFile),
            _0x30fa36 = this.fs.existsSync(_0x347ff0),
            _0x2718c2 = !_0x30fa36 && this.fs.existsSync(_0xf89070),
            _0x17397f = JSON.stringify(this.data, null, 2);
          _0x30fa36 ? this.fs.writeFileSync(_0x347ff0, _0x17397f) : _0x2718c2 ? this.fs.writeFileSync(_0xf89070, _0x17397f) : this.fs.writeFileSync(_0x347ff0, _0x17397f);
        }
      }
    }
    ["lodash_get"](_0xfb41ba, _0x2ddda4, _0x42008b) {
      {
        const _0x1ecaf3 = _0x2ddda4.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0x320ab1 = _0xfb41ba;
        for (const _0xe70c92 of _0x1ecaf3) if (_0x320ab1 = Object(_0x320ab1)[_0xe70c92], undefined === _0x320ab1) return _0x42008b;
        return _0x320ab1;
      }
    }
    ["lodash_set"](_0x3e88de, _0x7b9d42, _0x354abd) {
      Object(_0x3e88de) !== _0x3e88de || (Array.isArray(_0x7b9d42) || (_0x7b9d42 = _0x7b9d42.toString().match(/[^.[\]]+/g) || []), _0x7b9d42.slice(0, -1).reduce((_0x423255, _0x3105b5, _0x4853da) => Object(_0x423255[_0x3105b5]) === _0x423255[_0x3105b5] ? _0x423255[_0x3105b5] : _0x423255[_0x3105b5] = Math.abs(_0x7b9d42[_0x4853da + 1]) >> 0 == +_0x7b9d42[_0x4853da + 1] ? [] : {}, _0x3e88de)[_0x7b9d42[_0x7b9d42.length - 1]] = _0x354abd);
      return _0x3e88de;
    }
    ["getdata"](_0xc737e3) {
      {
        let _0x4cde46 = this.getval(_0xc737e3);
        if (/^@/.test(_0xc737e3)) {
          const [, _0x318767, _0x31eafa] = /^@(.*?)\.(.*?)$/.exec(_0xc737e3),
            _0x42e824 = _0x318767 ? this.getval(_0x318767) : "";
          if (_0x42e824) try {
            {
              const _0x452f4e = JSON.parse(_0x42e824);
              _0x4cde46 = _0x452f4e ? this.lodash_get(_0x452f4e, _0x31eafa, "") : _0x4cde46;
            }
          } catch (_0x5cecaf) {
            _0x4cde46 = "";
          }
        }
        return _0x4cde46;
      }
    }
    ["setdata"](_0x3ae89b, _0x118e88) {
      let _0x5d5741 = false;
      if (/^@/.test(_0x118e88)) {
        {
          const [, _0x3e7d53, _0x142848] = /^@(.*?)\.(.*?)$/.exec(_0x118e88),
            _0x47215c = this.getval(_0x3e7d53),
            _0x4eac99 = _0x3e7d53 ? "null" === _0x47215c ? null : _0x47215c || "{}" : "{}";
          try {
            const _0x5dbe4e = JSON.parse(_0x4eac99);
            this.lodash_set(_0x5dbe4e, _0x142848, _0x3ae89b);
            _0x5d5741 = this.setval(JSON.stringify(_0x5dbe4e), _0x3e7d53);
          } catch (_0x5bac79) {
            const _0x510b10 = {};
            this.lodash_set(_0x510b10, _0x142848, _0x3ae89b);
            _0x5d5741 = this.setval(JSON.stringify(_0x510b10), _0x3e7d53);
          }
        }
      } else _0x5d5741 = this.setval(_0x3ae89b, _0x118e88);
      return _0x5d5741;
    }
    ["getval"](_0x3b2ae8) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x3b2ae8);
        case "Quantumult X":
          return $prefs.valueForKey(_0x3b2ae8);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x3b2ae8];
        default:
          return this.data && this.data[_0x3b2ae8] || null;
      }
    }
    ["setval"](_0x1366b3, _0x2e7e92) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x1366b3, _0x2e7e92);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x1366b3, _0x2e7e92);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x2e7e92] = _0x1366b3;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x2e7e92] || null;
      }
    }
    ["initGotEnv"](_0x44f56a) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x44f56a && (_0x44f56a.headers = _0x44f56a.headers ? _0x44f56a.headers : {}, _0x44f56a && (_0x44f56a.headers = _0x44f56a.headers ? _0x44f56a.headers : {}, undefined === _0x44f56a.headers.cookie && undefined === _0x44f56a.headers.Cookie && undefined === _0x44f56a.cookieJar && (_0x44f56a.cookieJar = this.ckjar)));
    }
    ["get"](_0x1fe296, _0x5a49d2 = () => {}) {
      switch (_0x1fe296.headers && (delete _0x1fe296.headers["Content-Type"], delete _0x1fe296.headers["Content-Length"], delete _0x1fe296.headers["content-type"], delete _0x1fe296.headers["content-length"]), _0x1fe296.params && (_0x1fe296.url += "?" + this.queryStr(_0x1fe296.params)), undefined === _0x1fe296.followRedirect || _0x1fe296.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x1fe296["auto-redirect"] = false), this.isQuanX() && (_0x1fe296.opts ? _0x1fe296.opts.redirection = false : _0x1fe296.opts = {
        "redirection": false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x1fe296.headers = _0x1fe296.headers || {}, Object.assign(_0x1fe296.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(_0x1fe296, (_0x417220, _0x2b8df2, _0x4dc787) => {
            !_0x417220 && _0x2b8df2 && (_0x2b8df2.body = _0x4dc787, _0x2b8df2.statusCode = _0x2b8df2.status ? _0x2b8df2.status : _0x2b8df2.statusCode, _0x2b8df2.status = _0x2b8df2.statusCode);
            _0x5a49d2(_0x417220, _0x2b8df2, _0x4dc787);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x1fe296.opts = _0x1fe296.opts || {}, Object.assign(_0x1fe296.opts, {
            "hints": false
          }));
          $task.fetch(_0x1fe296).then(_0x438d1d => {
            const {
              statusCode: _0x6812b9,
              statusCode: _0x169dd3,
              headers: _0x2f0c7a,
              body: _0x1dcdb8,
              bodyBytes: _0x15afd8
            } = _0x438d1d;
            _0x5a49d2(null, {
              "status": _0x6812b9,
              "statusCode": _0x169dd3,
              "headers": _0x2f0c7a,
              "body": _0x1dcdb8,
              "bodyBytes": _0x15afd8
            }, _0x1dcdb8, _0x15afd8);
          }, _0x5cebd9 => _0x5a49d2(_0x5cebd9 && _0x5cebd9.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x5efd1e = require("iconv-lite"),
            _0x47f3b6 = "";
          _0x1fe296.hasOwnProperty("account") && (_0x47f3b6 = _0x1fe296.account, delete _0x1fe296.account);
          this.initGotEnv(_0x1fe296);
          this.got(_0x1fe296, {
            "followRedirect": false
          }).on("redirect", (_0x3155b4, _0x2a815a) => {
            try {
              if (_0x47f3b6) {
                let _0x4226e6 = "",
                  _0x2a6033 = _0x3155b4.headers["set-cookie"] || _0x3155b4.headers["Set-Cookie"];
                for (let _0x283fdc = 0; _0x283fdc < _0x2a6033.length; _0x283fdc++) {
                  _0x4226e6 += _0x2a6033[_0x283fdc].split(";")[0] + ";";
                }
                this.setdata(_0x4226e6, _0x47f3b6);
              }
            } catch (_0x2cfe64) {
              this.logErr(_0x2cfe64);
            }
          }).then(_0x1e87c1 => {
            {
              const {
                  statusCode: _0x41b823,
                  statusCode: _0x54ca54,
                  headers: _0x12e704,
                  rawBody: _0xe39cec
                } = _0x1e87c1,
                _0x4a6d8f = _0xe39cec ? _0x5efd1e.decode(_0xe39cec, this.encoding) : "";
              _0x5a49d2(null, {
                "status": _0x41b823,
                "statusCode": _0x54ca54,
                "headers": _0x12e704,
                "rawBody": _0xe39cec,
                "body": _0x4a6d8f
              }, _0x4a6d8f);
            }
          }, _0x338a85 => {
            {
              const {
                message: _0x245296,
                response: _0x2774c3
              } = _0x338a85;
              _0x5a49d2(_0x245296, _0x2774c3, _0x2774c3 && _0x2774c3.rawBody ? _0x5efd1e.decode(_0x2774c3.rawBody, this.encoding) : "");
            }
          });
          break;
      }
    }
    ["post"](_0x3b44e8, _0x7709f1 = () => {}) {
      {
        const _0x1589c2 = _0x3b44e8.method ? _0x3b44e8.method.toLocaleLowerCase() : "post";
        switch (_0x3b44e8.body && _0x3b44e8.headers && !_0x3b44e8.headers["Content-Type"] && !_0x3b44e8.headers["content-type"] && (_0x3b44e8.headers["content-type"] = "application/x-www-form-urlencoded"), _0x3b44e8.headers && (delete _0x3b44e8.headers["Content-Length"], delete _0x3b44e8.headers["content-length"]), undefined === _0x3b44e8.followRedirect || _0x3b44e8.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x3b44e8["auto-redirect"] = false), this.isQuanX() && (_0x3b44e8.opts ? _0x3b44e8.opts.redirection = false : _0x3b44e8.opts = {
          "redirection": false
        })), this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            this.isSurge() && this.isNeedRewrite && (_0x3b44e8.headers = _0x3b44e8.headers || {}, Object.assign(_0x3b44e8.headers, {
              "X-Surge-Skip-Scripting": false
            }));
            $httpClient[_0x1589c2](_0x3b44e8, (_0x1f355b, _0x532f39, _0x4d9739) => {
              !_0x1f355b && _0x532f39 && (_0x532f39.body = _0x4d9739, _0x532f39.statusCode = _0x532f39.status ? _0x532f39.status : _0x532f39.statusCode, _0x532f39.status = _0x532f39.statusCode);
              _0x7709f1(_0x1f355b, _0x532f39, _0x4d9739);
            });
            break;
          case "Quantumult X":
            _0x3b44e8.method = _0x1589c2;
            this.isNeedRewrite && (_0x3b44e8.opts = _0x3b44e8.opts || {}, Object.assign(_0x3b44e8.opts, {
              "hints": false
            }));
            $task.fetch(_0x3b44e8).then(_0x1ab877 => {
              const {
                statusCode: _0x578a73,
                statusCode: _0x5d45b9,
                headers: _0x18df00,
                body: _0x345a6b,
                bodyBytes: _0x71f7c9
              } = _0x1ab877;
              _0x7709f1(null, {
                "status": _0x578a73,
                "statusCode": _0x5d45b9,
                "headers": _0x18df00,
                "body": _0x345a6b,
                "bodyBytes": _0x71f7c9
              }, _0x345a6b, _0x71f7c9);
            }, _0x43b280 => _0x7709f1(_0x43b280 && _0x43b280.error || "UndefinedError"));
            break;
          case "Node.js":
            let _0x2ce552 = require("iconv-lite");
            this.initGotEnv(_0x3b44e8);
            const {
              url: _0x2e0ed3,
              ..._0x5d6174
            } = _0x3b44e8;
            this.got[_0x1589c2](_0x2e0ed3, {
              ..._0x5d6174,
              "followRedirect": false
            }).then(_0xca4553 => {
              const {
                  statusCode: _0x9ff535,
                  statusCode: _0x88941f,
                  headers: _0x53f192,
                  rawBody: _0x1d7a77
                } = _0xca4553,
                _0x1c748d = _0x2ce552.decode(_0x1d7a77, this.encoding);
              _0x7709f1(null, {
                "status": _0x9ff535,
                "statusCode": _0x88941f,
                "headers": _0x53f192,
                "rawBody": _0x1d7a77,
                "body": _0x1c748d
              }, _0x1c748d);
            }, _0x41567d => {
              {
                const {
                  message: _0x334ab0,
                  response: _0x379790
                } = _0x41567d;
                _0x7709f1(_0x334ab0, _0x379790, _0x379790 && _0x2ce552.decode(_0x379790.rawBody, this.encoding));
              }
            });
            break;
        }
      }
    }
    ["put"](_0x4cb054, _0x5469eb = () => {}) {
      const _0x3d11f1 = _0x4cb054.method ? _0x4cb054.method.toLocaleLowerCase() : "put";
      switch (_0x4cb054.body && _0x4cb054.headers && !_0x4cb054.headers["Content-Type"] && !_0x4cb054.headers["content-type"] && (_0x4cb054.headers["content-type"] = "application/x-www-form-urlencoded"), _0x4cb054.headers && (delete _0x4cb054.headers["Content-Length"], delete _0x4cb054.headers["content-length"]), undefined === _0x4cb054.followRedirect || _0x4cb054.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x4cb054["auto-redirect"] = false), this.isQuanX() && (_0x4cb054.opts ? _0x4cb054.opts.redirection = false : _0x4cb054.opts = {
        "redirection": false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x4cb054.headers = _0x4cb054.headers || {}, Object.assign(_0x4cb054.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[_0x3d11f1](_0x4cb054, (_0x26f7e1, _0x2875b3, _0x5688bb) => {
            !_0x26f7e1 && _0x2875b3 && (_0x2875b3.body = _0x5688bb, _0x2875b3.statusCode = _0x2875b3.status ? _0x2875b3.status : _0x2875b3.statusCode, _0x2875b3.status = _0x2875b3.statusCode);
            _0x5469eb(_0x26f7e1, _0x2875b3, _0x5688bb);
          });
          break;
        case "Quantumult X":
          _0x4cb054.method = _0x3d11f1;
          this.isNeedRewrite && (_0x4cb054.opts = _0x4cb054.opts || {}, Object.assign(_0x4cb054.opts, {
            "hints": false
          }));
          $task.fetch(_0x4cb054).then(_0x5ebaba => {
            {
              const {
                statusCode: _0xe8bd74,
                statusCode: _0x35473c,
                headers: _0x101e5b,
                body: _0x4c2b70,
                bodyBytes: _0x184c2d
              } = _0x5ebaba;
              _0x5469eb(null, {
                "status": _0xe8bd74,
                "statusCode": _0x35473c,
                "headers": _0x101e5b,
                "body": _0x4c2b70,
                "bodyBytes": _0x184c2d
              }, _0x4c2b70, _0x184c2d);
            }
          }, _0x183fa8 => _0x5469eb(_0x183fa8 && _0x183fa8.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x289628 = require("iconv-lite");
          this.initGotEnv(_0x4cb054);
          const {
            url: _0x4d9c9a,
            ..._0x3e3b70
          } = _0x4cb054;
          this.got[_0x3d11f1](_0x4d9c9a, _0x3e3b70).then(_0x5782b5 => {
            {
              const {
                  statusCode: _0xce978,
                  statusCode: _0x15fc12,
                  headers: _0x96269a,
                  rawBody: _0x3c1a74
                } = _0x5782b5,
                _0x398cf8 = _0x289628.decode(_0x3c1a74, this.encoding);
              _0x5469eb(null, {
                "status": _0xce978,
                "statusCode": _0x15fc12,
                "headers": _0x96269a,
                "rawBody": _0x3c1a74,
                "body": _0x398cf8
              }, _0x398cf8);
            }
          }, _0x2092fc => {
            const {
              message: _0x3a6a76,
              response: _0x4c873d
            } = _0x2092fc;
            _0x5469eb(_0x3a6a76, _0x4c873d, _0x4c873d && _0x289628.decode(_0x4c873d.rawBody, this.encoding));
          });
          break;
      }
    }
    ["del"](_0x1f1ef0, _0x368872 = () => {}) {
      {
        const _0x56a9d4 = _0x1f1ef0.method ? _0x1f1ef0.method.toLocaleLowerCase() : "delete";
        switch (_0x1f1ef0.body && _0x1f1ef0.headers && !_0x1f1ef0.headers["Content-Type"] && !_0x1f1ef0.headers["content-type"] && (_0x1f1ef0.headers["content-type"] = "application/x-www-form-urlencoded"), _0x1f1ef0.headers && (delete _0x1f1ef0.headers["Content-Length"], delete _0x1f1ef0.headers["content-length"]), undefined === _0x1f1ef0.followRedirect || _0x1f1ef0.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x1f1ef0["auto-redirect"] = false), this.isQuanX() && (_0x1f1ef0.opts ? _0x1f1ef0.opts.redirection = false : _0x1f1ef0.opts = {
          "redirection": false
        })), this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            this.isSurge() && this.isNeedRewrite && (_0x1f1ef0.headers = _0x1f1ef0.headers || {}, Object.assign(_0x1f1ef0.headers, {
              "X-Surge-Skip-Scripting": false
            }));
            $httpClient[_0x56a9d4](_0x1f1ef0, (_0x173ec6, _0x44ee53, _0x1a8914) => {
              !_0x173ec6 && _0x44ee53 && (_0x44ee53.body = _0x1a8914, _0x44ee53.statusCode = _0x44ee53.status ? _0x44ee53.status : _0x44ee53.statusCode, _0x44ee53.status = _0x44ee53.statusCode);
              _0x368872(_0x173ec6, _0x44ee53, _0x1a8914);
            });
            break;
          case "Quantumult X":
            _0x1f1ef0.method = _0x56a9d4;
            this.isNeedRewrite && (_0x1f1ef0.opts = _0x1f1ef0.opts || {}, Object.assign(_0x1f1ef0.opts, {
              "hints": false
            }));
            $task.fetch(_0x1f1ef0).then(_0x630871 => {
              const {
                statusCode: _0x2628fc,
                statusCode: _0x47ce0e,
                headers: _0x18be9f,
                body: _0x35a5c8,
                bodyBytes: _0x4ade91
              } = _0x630871;
              _0x368872(null, {
                "status": _0x2628fc,
                "statusCode": _0x47ce0e,
                "headers": _0x18be9f,
                "body": _0x35a5c8,
                "bodyBytes": _0x4ade91
              }, _0x35a5c8, _0x4ade91);
            }, _0x63cb1 => _0x368872(_0x63cb1 && _0x63cb1.error || "UndefinedError"));
            break;
          case "Node.js":
            let _0x18e36a = require("iconv-lite");
            this.initGotEnv(_0x1f1ef0);
            const {
              url: _0x15f5ac,
              ..._0x369d71
            } = _0x1f1ef0;
            this.got[_0x56a9d4](_0x15f5ac, _0x369d71).then(_0x3e1b8b => {
              {
                const {
                    statusCode: _0x249831,
                    statusCode: _0x7460fd,
                    headers: _0x376fec,
                    rawBody: _0x291b84
                  } = _0x3e1b8b,
                  _0x459670 = _0x18e36a.decode(_0x291b84, this.encoding);
                _0x368872(null, {
                  "status": _0x249831,
                  "statusCode": _0x7460fd,
                  "headers": _0x376fec,
                  "rawBody": _0x291b84,
                  "body": _0x459670
                }, _0x459670);
              }
            }, _0x1697cb => {
              {
                const {
                  message: _0x13288d,
                  response: _0x3bee13
                } = _0x1697cb;
                _0x368872(_0x13288d, _0x3bee13, _0x3bee13 && _0x18e36a.decode(_0x3bee13.rawBody, this.encoding));
              }
            });
            break;
        }
      }
    }
    ["time"](_0x12e08c, _0x4a7aa0 = null) {
      {
        const _0x144e6b = _0x4a7aa0 ? new Date(_0x4a7aa0) : new Date();
        let _0x3afa56 = {
          "M+": _0x144e6b.getMonth() + 1,
          "d+": _0x144e6b.getDate(),
          "H+": _0x144e6b.getHours(),
          "m+": _0x144e6b.getMinutes(),
          "s+": _0x144e6b.getSeconds(),
          "q+": Math.floor((_0x144e6b.getMonth() + 3) / 3),
          "S": _0x144e6b.getMilliseconds()
        };
        /(y+)/.test(_0x12e08c) && (_0x12e08c = _0x12e08c.replace(RegExp.$1, (_0x144e6b.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x292ffc in _0x3afa56) new RegExp("(" + _0x292ffc + ")").test(_0x12e08c) && (_0x12e08c = _0x12e08c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3afa56[_0x292ffc] : ("00" + _0x3afa56[_0x292ffc]).substr(("" + _0x3afa56[_0x292ffc]).length)));
        return _0x12e08c;
      }
    }
    ["queryStr"](_0x228a4b) {
      let _0x2af83a = "";
      for (const _0x4366fe in _0x228a4b) {
        {
          let _0x2fe6ae = _0x228a4b[_0x4366fe];
          null != _0x2fe6ae && "" !== _0x2fe6ae && ("object" == typeof _0x2fe6ae && (_0x2fe6ae = JSON.stringify(_0x2fe6ae)), _0x2af83a += _0x4366fe + "=" + _0x2fe6ae + "&");
        }
      }
      _0x2af83a = _0x2af83a.substring(0, _0x2af83a.length - 1);
      return _0x2af83a;
    }
    ["msg"](_0x3f23a0 = _0x22fc37, _0x1b027c = "", _0x4826e5 = "", _0x31d357 = {}) {
      const _0x8da94e = _0x41da4a => {
        const {
          $open: _0x3e579a,
          $copy: _0x30b26c,
          $media: _0x412a93,
          $mediaMime: _0x11dad9
        } = _0x41da4a;
        switch (typeof _0x41da4a) {
          case undefined:
            return _0x41da4a;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  "url": _0x41da4a
                };
              case "Loon":
              case "Shadowrocket":
                return _0x41da4a;
              case "Quantumult X":
                return {
                  "open-url": _0x41da4a
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const _0x4d4568 = {};
                  let _0x4588b6 = _0x41da4a.openUrl || _0x41da4a.url || _0x41da4a["open-url"] || _0x3e579a;
                  _0x4588b6 && Object.assign(_0x4d4568, {
                    "action": "open-url",
                    "url": _0x4588b6
                  });
                  let _0x367e6e = _0x41da4a["update-pasteboard"] || _0x41da4a.updatePasteboard || _0x30b26c;
                  if (_0x367e6e && Object.assign(_0x4d4568, {
                    "action": "clipboard",
                    "text": _0x367e6e
                  }), _0x412a93) {
                    {
                      let _0x52ca2b, _0x4b10dd, _0x298db2;
                      if (_0x412a93.startsWith("http")) _0x52ca2b = _0x412a93;else {
                        if (_0x412a93.startsWith("data:")) {
                          const [_0x39d720] = _0x412a93.split(";"),
                            [, _0x309706] = _0x412a93.split(",");
                          _0x4b10dd = _0x309706;
                          _0x298db2 = _0x39d720.replace("data:", "");
                        } else _0x4b10dd = _0x412a93, _0x298db2 = (_0x56296c => {
                          const _0x2f20f9 = {
                            "JVBERi0": "application/pdf",
                            "R0lGODdh": "image/gif",
                            "R0lGODlh": "image/gif",
                            "iVBORw0KGgo": "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x3b1658 in _0x2f20f9) if (0 === _0x56296c.indexOf(_0x3b1658)) return _0x2f20f9[_0x3b1658];
                          return null;
                        })(_0x412a93);
                      }
                      Object.assign(_0x4d4568, {
                        "media-url": _0x52ca2b,
                        "media-base64": _0x4b10dd,
                        "media-base64-mime": _0x11dad9 ?? _0x298db2
                      });
                    }
                  }
                  Object.assign(_0x4d4568, {
                    "auto-dismiss": _0x41da4a["auto-dismiss"],
                    "sound": _0x41da4a.sound
                  });
                  return _0x4d4568;
                }
              case "Loon":
                {
                  const _0x20ba4f = {};
                  let _0x281827 = _0x41da4a.openUrl || _0x41da4a.url || _0x41da4a["open-url"] || _0x3e579a;
                  _0x281827 && Object.assign(_0x20ba4f, {
                    "openUrl": _0x281827
                  });
                  let _0xed1e99 = _0x41da4a.mediaUrl || _0x41da4a["media-url"];
                  _0x412a93?.["startsWith"]("http") && (_0xed1e99 = _0x412a93);
                  _0xed1e99 && Object.assign(_0x20ba4f, {
                    "mediaUrl": _0xed1e99
                  });
                  console.log(JSON.stringify(_0x20ba4f));
                  return _0x20ba4f;
                }
              case "Quantumult X":
                {
                  {
                    const _0x22a711 = {};
                    let _0x323bde = _0x41da4a["open-url"] || _0x41da4a.url || _0x41da4a.openUrl || _0x3e579a;
                    _0x323bde && Object.assign(_0x22a711, {
                      "open-url": _0x323bde
                    });
                    let _0xa27535 = _0x41da4a["media-url"] || _0x41da4a.mediaUrl;
                    _0x412a93?.["startsWith"]("http") && (_0xa27535 = _0x412a93);
                    _0xa27535 && Object.assign(_0x22a711, {
                      "media-url": _0xa27535
                    });
                    let _0x1045b8 = _0x41da4a["update-pasteboard"] || _0x41da4a.updatePasteboard || _0x30b26c;
                    _0x1045b8 && Object.assign(_0x22a711, {
                      "update-pasteboard": _0x1045b8
                    });
                    console.log(JSON.stringify(_0x22a711));
                    return _0x22a711;
                  }
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(_0x3f23a0, _0x1b027c, _0x4826e5, _0x8da94e(_0x31d357));
          break;
        case "Quantumult X":
          $notify(_0x3f23a0, _0x1b027c, _0x4826e5, _0x8da94e(_0x31d357));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let _0x1ad010 = ["", "==============📣系统通知📣=============="];
        _0x1ad010.push(_0x3f23a0);
        _0x1b027c && _0x1ad010.push(_0x1b027c);
        _0x4826e5 && _0x1ad010.push(_0x4826e5);
        console.log(_0x1ad010.join("\n"));
        this.logs = this.logs.concat(_0x1ad010);
      }
    }
    ["debug"](..._0x254719) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x254719.length > 0 && (this.logs = [...this.logs, ..._0x254719]), console.log("" + this.logLevelPrefixs.debug + _0x254719.map(_0x425483 => _0x425483 ?? String(_0x425483)).join(this.logSeparator)));
    }
    ["info"](..._0x196d09) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x196d09.length > 0 && (this.logs = [...this.logs, ..._0x196d09]), console.log("" + this.logLevelPrefixs.info + _0x196d09.map(_0x32eda0 => _0x32eda0 ?? String(_0x32eda0)).join(this.logSeparator)));
    }
    ["warn"](..._0x4cc454) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x4cc454.length > 0 && (this.logs = [...this.logs, ..._0x4cc454]), console.log("" + this.logLevelPrefixs.warn + _0x4cc454.map(_0x5526d3 => _0x5526d3 ?? String(_0x5526d3)).join(this.logSeparator)));
    }
    ["error"](..._0x3563d1) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0x3563d1.length > 0 && (this.logs = [...this.logs, ..._0x3563d1]), console.log("" + this.logLevelPrefixs.error + _0x3563d1.map(_0x4ecdb1 => _0x4ecdb1 ?? String(_0x4ecdb1)).join(this.logSeparator)));
    }
    ["log"](..._0x3d1941) {
      _0x3d1941.length > 0 && (this.logs = [...this.logs, ..._0x3d1941]);
      console.log(_0x3d1941.map(_0x5d6e42 => _0x5d6e42 ?? String(_0x5d6e42)).join(this.logSeparator));
    }
    ["logErr"](_0x5bf8a3, _0x55019e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x55019e, _0x5bf8a3);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x55019e, undefined !== _0x5bf8a3.message ? _0x5bf8a3.message : _0x5bf8a3, _0x5bf8a3.stack);
          break;
      }
    }
    ["wait"](_0x540266) {
      return new Promise(_0x2655eb => setTimeout(_0x2655eb, _0x540266));
    }
    ["done"](_0x199436 = {}) {
      {
        const _0x473073 = (new Date().getTime() - this.startTime) / 1000;
        switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x473073 + " 秒"), this.log(), this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            $done(_0x199436);
            break;
          case "Node.js":
            process.exit(0);
        }
      }
    }
  }(_0x22fc37, _0x490f66);
}