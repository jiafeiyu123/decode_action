//Tue Oct 29 2024 15:36:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("宅可送折扣商城"),
  axios = require("axios");
let request = require("request");
const fs = require("fs"),
  cheerio = require("cheerio"),
  {
    timeStamp,
    time
  } = require("console");
request = request.defaults({
  jar: true
});
const {
    log
  } = console,
  debug = 0;
let ZKS = ($.isNode() ? process.env.ZKS : $.getdata("ZKS")) || "",
  ZKSArr = [],
  index,
  data = "",
  msg = "";
const concurrency = 10,
  delayBetweenBatches = 5000;
async function runAccount(_0x2f72de, _0x15febe) {
  const _0x4cbf2e = _0x2f72de.split(/&|#/),
    _0x2c3223 = _0x4cbf2e[0],
    _0x4f43d8 = _0x4cbf2e[1];
  console.log("开始执行账号" + (_0x15febe + 1) + "：" + _0x2f72de);
  await task(_0x2c3223, _0x4f43d8);
  await new Promise(_0xc94a7c => setTimeout(_0xc94a7c, 1000));
  console.log("账号" + (_0x15febe + 1) + " 执行完成");
}
async function runMultipleAccounts() {
  console.log("共找到 " + ZKSArr.length + " 个账号");
  const _0x5d93b1 = Math.ceil(ZKSArr.length / concurrency);
  for (let _0x39e857 = 0; _0x39e857 < _0x5d93b1; _0x39e857++) {
    const _0xd2346b = ZKSArr.slice(_0x39e857 * concurrency, (_0x39e857 + 1) * concurrency);
    await Promise.all(_0xd2346b.map((_0x41931b, _0x37a2d1) => runAccount(_0x41931b, _0x39e857 * concurrency + _0x37a2d1)));
    _0x39e857 < _0x5d93b1 - 1 && (console.log("延迟 " + delayBetweenBatches + " 毫秒后再执行下一批账号"), await new Promise(_0x677305 => setTimeout(_0x677305, delayBetweenBatches)));
  }
  console.log("所有账号执行完成");
}
(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await Envs())) {
      return;
    } else {
      log("\n\n=============================================脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + "=============================================\n");
      log("\n=================== 共找到 " + ZKSArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + ZKSArr);
      await report();
      await runMultipleAccounts();
    }
    await SendMsg(msg);
  }
})().catch(_0x13f341 => log(_0x13f341)).finally(() => $.done());
async function task(_0x15c1ea, _0x138a1f) {
  let _0x37ad40 = ["Mozilla/5.0 (Linux; Android 8.0.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5061 MMWEBSDK/20221206 MMWEBID/1655 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64Content-Type: application/json", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6309021a) XWEB/6763 Flue", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.36(0x18002429) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (Linux; Android 9; Pixel XL Build/PPR1.180610.009) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.9 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-CN; Redmi 7A Build/PKQ1.181007.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/8727 MicroMessenger/7.0.9.1560(0x2700093B) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 9; HTC U11 Build/PPR2.181005.003) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.5 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; SLA-L22 Build/HUAWEISLA-L22) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8.4220 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/4G Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-cn; MI 8 Lite Build/PKQ1.181021.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/7360 MicroMessenger/7.0.8.1540(0x270008E1) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; MRX_Leo_User Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI"];
  hd = {
    Host: "app.yfjykz.com",
    "User-Agent": _0x37ad40[index + 1],
    Referer: "https://servicewechat.com/wx69bc3b4807cac213/2/page-frame.html",
    "Accept-Encoding": "gzip, deflate, br"
  };
  body = {
    access_token: _0x15c1ea,
    sys_id: "1146"
  };
  await sign(hd, body);
}
async function sign(_0x5e8731, _0x260a0a) {
  return new Promise(_0x1f6ee9 => {
    var _0x56bcb6 = {
      method: "POST",
      url: "https://app.yfjykz.com/api/user/add_sign",
      headers: _0x5e8731,
      data: _0x260a0a,
      timeout: 5000
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x56bcb6)));
    axios.request(_0x56bcb6).then(async function (_0x3b1ce1) {
      try {
        data = _0x3b1ce1.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3b1ce1.data)));
        if (data.error_code == 1) {
          log("" + data.error_msg);
          addNotifyStr("" + data.error_msg, true);
        }
      } catch (_0x468fa6) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x56b771) {
      console.error(_0x56b771);
    }).then(_0x6d4efe => {
      _0x1f6ee9();
    });
  });
}
async function sale_point(_0x371125, _0x3bbf09) {
  return new Promise(_0x70d5ad => {
    var _0x47fe88 = {
      method: "POST",
      url: "https://app.yfjykz.com/api/user/sale_point",
      headers: _0x371125,
      data: {
        point_num: "20",
        point_ratio: "1",
        access_token: _0x3bbf09.access_token,
        sys_id: "1146"
      },
      timeout: 5000
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x47fe88)));
    axios.request(_0x47fe88).then(async function (_0x35db23) {
      try {
        data = _0x35db23.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x35db23.data)));
        if (data.error_code == 1) {
          log("" + data.error_msg);
          addNotifyStr("" + data.error_msg, true);
        }
      } catch (_0x48a3ba) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x19e959) {
      console.error(_0x19e959);
    }).then(_0x172621 => {
      _0x70d5ad();
    });
  });
}
function randomNum(_0x27ea46, _0x3252a4) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x27ea46 + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (_0x3252a4 - _0x27ea46 + 1) + _0x27ea46, 10);
      break;
    default:
      return 0;
      break;
  }
}
function poem(_0x124384 = 3000) {
  return new Promise(_0x986e74 => {
    let _0x6f281f = {
      url: "https://v1.jinrishici.com/all.json"
    };
    $.get(_0x6f281f, async (_0xdf309c, _0x94105f, _0x5a9358) => {
      try {
        _0x5a9358 = JSON.parse(_0x5a9358);
        log(_0x5a9358.content + "  \n————《" + _0x5a9358.origin + "》" + _0x5a9358.author);
      } catch (_0x5b83a0) {
        log(_0x5b83a0, _0x94105f);
      } finally {
        _0x986e74();
      }
    }, _0x124384);
  });
}
async function report() {
  const _0x33efc8 = {
    method: "GET",
    url: "https://github.com/Poppypy/ql",
    headers: {},
    data: {},
    timeout: 5000
  };
  try {
    const _0x5e9683 = await axios(_0x33efc8),
      _0x4f1cd3 = _0x5e9683.data,
      _0x504896 = cheerio.load(_0x4f1cd3),
      _0x389310 = _0x504896("p").eq(10).text(),
      _0x4f044d = _0x504896("p").eq(11).text();
    log(_0x389310, _0x4f044d);
    fs.writeFileSync("response.html", _0x4f1cd3);
  } catch (_0x4656ae) {}
}
async function stop() {
  delay = randomNum(2000, 5000);
  log("随机延迟" + delay + "毫秒");
  await $.wait(delay);
}
async function Envs() {
  if (ZKS) {
    if (ZKS.indexOf("@") != -1) {
      ZKS.split("@").forEach(_0x5e9db3 => {
        ZKSArr.push(_0x5e9db3);
      });
    } else {
      ZKS.indexOf("\n") != -1 ? ZKS.split("\n").forEach(_0x1bc796 => {
        ZKSArr.push(_0x1bc796);
      }) : ZKSArr.push(ZKS);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 ZKS");
    return;
  }
  return true;
}
function addNotifyStr(_0x360e4f, _0x55d2de = true) {
  _0x55d2de && log(_0x360e4f + "\n");
  msg += _0x360e4f + "\n";
}
async function SendMsg(_0x260e1b) {
  if (!_0x260e1b) {
    return;
  }
  if ($.isNode()) {
    var _0xde9c47 = require("./sendNotify");
    await _0xde9c47.sendNotify($.name, _0x260e1b);
  } else {
    $.msg(_0x260e1b);
  }
}
function randomString(_0x1139ad) {
  for (var _0x1c3764 = _0x1139ad > 0 && void 0 !== _0x1139ad ? _0x1139ad : 21, _0x509fe3 = ""; _0x509fe3.length < _0x1c3764;) {
    _0x509fe3 += Math.random().toString(36).slice(2);
  }
  return _0x509fe3.slice(0, _0x1c3764);
}
function Env(_0x4e4a10, _0x390e38) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x5df60a {
    constructor(_0x47c3a5) {
      this.env = _0x47c3a5;
    }
    send(_0x5b7d53, _0x16c364 = "GET") {
      _0x5b7d53 = "string" == typeof _0x5b7d53 ? {
        url: _0x5b7d53
      } : _0x5b7d53;
      let _0x4204fd = this.get;
      "POST" === _0x16c364 && (_0x4204fd = this.post);
      return new Promise((_0x120e05, _0x171ca1) => {
        _0x4204fd.call(this, _0x5b7d53, (_0x373be6, _0x38c5c0, _0x4476bd) => {
          _0x373be6 ? _0x171ca1(_0x373be6) : _0x120e05(_0x38c5c0);
        });
      });
    }
    get(_0x212ea6) {
      return this.send.call(this.env, _0x212ea6);
    }
    post(_0x37adf4) {
      return this.send.call(this.env, _0x37adf4, "POST");
    }
  }
  return new class {
    constructor(_0x593453, _0x13f846) {
      this.name = _0x593453;
      this.http = new _0x5df60a(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x13f846);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x2568b3, _0x362467 = null) {
      try {
        return JSON.parse(_0x2568b3);
      } catch {
        return _0x362467;
      }
    }
    toStr(_0x53e1d8, _0x417caa = null) {
      try {
        return JSON.stringify(_0x53e1d8);
      } catch {
        return _0x417caa;
      }
    }
    getjson(_0x28de8c, _0x2bac9c) {
      let _0x336aad = _0x2bac9c;
      const _0x341e58 = this.getdata(_0x28de8c);
      if (_0x341e58) {
        try {
          _0x336aad = JSON.parse(this.getdata(_0x28de8c));
        } catch {}
      }
      return _0x336aad;
    }
    setjson(_0x2d55dd, _0x4c6291) {
      try {
        return this.setdata(JSON.stringify(_0x2d55dd), _0x4c6291);
      } catch {
        return !1;
      }
    }
    getScript(_0x120c02) {
      return new Promise(_0x5810e4 => {
        this.get({
          url: _0x120c02
        }, (_0x826c84, _0x58f44a, _0x872eea) => _0x5810e4(_0x872eea));
      });
    }
    runScript(_0x3d9f0c, _0x5edfce) {
      return new Promise(_0x5b81a3 => {
        let _0x160e7f = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x160e7f = _0x160e7f ? _0x160e7f.replace(/\n/g, "").trim() : _0x160e7f;
        let _0xb735fb = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0xb735fb = _0xb735fb ? 1 * _0xb735fb : 20;
        _0xb735fb = _0x5edfce && _0x5edfce.timeout ? _0x5edfce.timeout : _0xb735fb;
        const [_0x28f802, _0x2bd510] = _0x160e7f.split("@"),
          _0x3ea439 = {
            url: "http://" + _0x2bd510 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x3d9f0c,
              mock_type: "cron",
              timeout: _0xb735fb
            },
            headers: {
              "X-Key": _0x28f802,
              Accept: "*/*"
            }
          };
        this.post(_0x3ea439, (_0x5bb108, _0x370f6b, _0x266409) => _0x5b81a3(_0x266409));
      }).catch(_0x2a1ce6 => this.logErr(_0x2a1ce6));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x206e0e = this.path.resolve(this.dataFile),
          _0x37564b = this.path.resolve(process.cwd(), this.dataFile),
          _0x4d2927 = this.fs.existsSync(_0x206e0e),
          _0x12f4a7 = !_0x4d2927 && this.fs.existsSync(_0x37564b);
        if (!_0x4d2927 && !_0x12f4a7) {
          return {};
        }
        {
          const _0x38bdfe = _0x4d2927 ? _0x206e0e : _0x37564b;
          try {
            return JSON.parse(this.fs.readFileSync(_0x38bdfe));
          } catch (_0x12bf16) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1b65e1 = this.path.resolve(this.dataFile),
          _0x3e9fca = this.path.resolve(process.cwd(), this.dataFile),
          _0x5a373c = this.fs.existsSync(_0x1b65e1),
          _0x2eef5a = !_0x5a373c && this.fs.existsSync(_0x3e9fca),
          _0x21143f = JSON.stringify(this.data);
        _0x5a373c ? this.fs.writeFileSync(_0x1b65e1, _0x21143f) : _0x2eef5a ? this.fs.writeFileSync(_0x3e9fca, _0x21143f) : this.fs.writeFileSync(_0x1b65e1, _0x21143f);
      }
    }
    lodash_get(_0x7f899e, _0x55d7db, _0x1dc6aa) {
      const _0x1e92a6 = _0x55d7db.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3b85be = _0x7f899e;
      for (const _0x27e5fd of _0x1e92a6) if (_0x3b85be = Object(_0x3b85be)[_0x27e5fd], void 0 === _0x3b85be) {
        return _0x1dc6aa;
      }
      return _0x3b85be;
    }
    lodash_set(_0xfb57bc, _0x2b609e, _0x54fc0b) {
      return Object(_0xfb57bc) !== _0xfb57bc ? _0xfb57bc : (Array.isArray(_0x2b609e) || (_0x2b609e = _0x2b609e.toString().match(/[^.[\]]+/g) || []), _0x2b609e.slice(0, -1).reduce((_0x4d01f3, _0x53c384, _0x502cc0) => Object(_0x4d01f3[_0x53c384]) === _0x4d01f3[_0x53c384] ? _0x4d01f3[_0x53c384] : _0x4d01f3[_0x53c384] = Math.abs(_0x2b609e[_0x502cc0 + 1]) >> 0 == +_0x2b609e[_0x502cc0 + 1] ? [] : {}, _0xfb57bc)[_0x2b609e[_0x2b609e.length - 1]] = _0x54fc0b, _0xfb57bc);
    }
    getdata(_0x4b9398) {
      let _0x75ac6b = this.getval(_0x4b9398);
      if (/^@/.test(_0x4b9398)) {
        const [, _0x195e7e, _0xdd3398] = /^@(.*?)\.(.*?)$/.exec(_0x4b9398),
          _0x3c129b = _0x195e7e ? this.getval(_0x195e7e) : "";
        if (_0x3c129b) {
          try {
            const _0x1bb89d = JSON.parse(_0x3c129b);
            _0x75ac6b = _0x1bb89d ? this.lodash_get(_0x1bb89d, _0xdd3398, "") : _0x75ac6b;
          } catch (_0x3141cd) {
            _0x75ac6b = "";
          }
        }
      }
      return _0x75ac6b;
    }
    setdata(_0x597572, _0x3d9fe3) {
      let _0x56afec = !1;
      if (/^@/.test(_0x3d9fe3)) {
        const [, _0x23a860, _0x43859b] = /^@(.*?)\.(.*?)$/.exec(_0x3d9fe3),
          _0xc89e2b = this.getval(_0x23a860),
          _0x3fc670 = _0x23a860 ? "null" === _0xc89e2b ? null : _0xc89e2b || "{}" : "{}";
        try {
          const _0xacad8b = JSON.parse(_0x3fc670);
          this.lodash_set(_0xacad8b, _0x43859b, _0x597572);
          _0x56afec = this.setval(JSON.stringify(_0xacad8b), _0x23a860);
        } catch (_0x501e31) {
          const _0x4a9ee9 = {};
          this.lodash_set(_0x4a9ee9, _0x43859b, _0x597572);
          _0x56afec = this.setval(JSON.stringify(_0x4a9ee9), _0x23a860);
        }
      } else {
        _0x56afec = this.setval(_0x597572, _0x3d9fe3);
      }
      return _0x56afec;
    }
    getval(_0x549c99) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x549c99) : this.isQuanX() ? $prefs.valueForKey(_0x549c99) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x549c99]) : this.data && this.data[_0x549c99] || null;
    }
    setval(_0x256bbc, _0x2f9ee7) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x256bbc, _0x2f9ee7) : this.isQuanX() ? $prefs.setValueForKey(_0x256bbc, _0x2f9ee7) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2f9ee7] = _0x256bbc, this.writedata(), !0) : this.data && this.data[_0x2f9ee7] || null;
    }
    initGotEnv(_0x1d3fb8) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1d3fb8 && (_0x1d3fb8.headers = _0x1d3fb8.headers ? _0x1d3fb8.headers : {}, void 0 === _0x1d3fb8.headers.Cookie && void 0 === _0x1d3fb8.cookieJar && (_0x1d3fb8.cookieJar = this.ckjar));
    }
    get(_0xf23f6f, _0x477f90 = () => {}) {
      _0xf23f6f.headers && (delete _0xf23f6f.headers["Content-Type"], delete _0xf23f6f.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0xf23f6f.headers = _0xf23f6f.headers || {}, Object.assign(_0xf23f6f.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0xf23f6f, (_0x577675, _0x1c4c07, _0x4e38ca) => {
        !_0x577675 && _0x1c4c07 && (_0x1c4c07.body = _0x4e38ca, _0x1c4c07.statusCode = _0x1c4c07.status);
        _0x477f90(_0x577675, _0x1c4c07, _0x4e38ca);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0xf23f6f.opts = _0xf23f6f.opts || {}, Object.assign(_0xf23f6f.opts, {
        hints: !1
      })), $task.fetch(_0xf23f6f).then(_0x241b37 => {
        const {
          statusCode: _0x1cd2ca,
          statusCode: _0x4028db,
          headers: _0x594fb2,
          body: _0x10e3ba
        } = _0x241b37;
        _0x477f90(null, {
          status: _0x1cd2ca,
          statusCode: _0x4028db,
          headers: _0x594fb2,
          body: _0x10e3ba
        }, _0x10e3ba);
      }, _0x53bb84 => _0x477f90(_0x53bb84))) : this.isNode() && (this.initGotEnv(_0xf23f6f), this.got(_0xf23f6f).on("redirect", (_0x473c22, _0x2c1523) => {
        try {
          if (_0x473c22.headers["set-cookie"]) {
            const _0x16a392 = _0x473c22.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x16a392 && this.ckjar.setCookieSync(_0x16a392, null);
            _0x2c1523.cookieJar = this.ckjar;
          }
        } catch (_0x201293) {
          this.logErr(_0x201293);
        }
      }).then(_0x51ef5b => {
        const {
          statusCode: _0x379578,
          statusCode: _0x1d4ab9,
          headers: _0x147bec,
          body: _0x3d5251
        } = _0x51ef5b;
        _0x477f90(null, {
          status: _0x379578,
          statusCode: _0x1d4ab9,
          headers: _0x147bec,
          body: _0x3d5251
        }, _0x3d5251);
      }, _0xe1685d => {
        const {
          message: _0x2ded51,
          response: _0x3259c6
        } = _0xe1685d;
        _0x477f90(_0x2ded51, _0x3259c6, _0x3259c6 && _0x3259c6.body);
      }));
    }
    post(_0x4ede37, _0x478834 = () => {}) {
      if (_0x4ede37.body && _0x4ede37.headers && !_0x4ede37.headers["Content-Type"] && (_0x4ede37.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x4ede37.headers && delete _0x4ede37.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x4ede37.headers = _0x4ede37.headers || {}, Object.assign(_0x4ede37.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x4ede37, (_0x24b2b6, _0x9f68dd, _0x115f8e) => {
          !_0x24b2b6 && _0x9f68dd && (_0x9f68dd.body = _0x115f8e, _0x9f68dd.statusCode = _0x9f68dd.status);
          _0x478834(_0x24b2b6, _0x9f68dd, _0x115f8e);
        });
      } else {
        if (this.isQuanX()) {
          _0x4ede37.method = "POST";
          this.isNeedRewrite && (_0x4ede37.opts = _0x4ede37.opts || {}, Object.assign(_0x4ede37.opts, {
            hints: !1
          }));
          $task.fetch(_0x4ede37).then(_0x33cebf => {
            const {
              statusCode: _0x54c091,
              statusCode: _0x3a2927,
              headers: _0x2f5f91,
              body: _0x436626
            } = _0x33cebf;
            _0x478834(null, {
              status: _0x54c091,
              statusCode: _0x3a2927,
              headers: _0x2f5f91,
              body: _0x436626
            }, _0x436626);
          }, _0x1ff1dd => _0x478834(_0x1ff1dd));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4ede37);
            const {
              url: _0xfaadf3,
              ..._0x1aba2f
            } = _0x4ede37;
            this.got.post(_0xfaadf3, _0x1aba2f).then(_0x32aa76 => {
              const {
                statusCode: _0x1f4775,
                statusCode: _0x142a71,
                headers: _0xcea98b,
                body: _0x4289fb
              } = _0x32aa76;
              _0x478834(null, {
                status: _0x1f4775,
                statusCode: _0x142a71,
                headers: _0xcea98b,
                body: _0x4289fb
              }, _0x4289fb);
            }, _0x3f6b00 => {
              const {
                message: _0x5947a2,
                response: _0x339724
              } = _0x3f6b00;
              _0x478834(_0x5947a2, _0x339724, _0x339724 && _0x339724.body);
            });
          }
        }
      }
    }
    time(_0x5ea0f5, _0x47d98b = null) {
      const _0x3eba4a = _0x47d98b ? new Date(_0x47d98b) : new Date();
      let _0x1e6632 = {
        "M+": _0x3eba4a.getMonth() + 1,
        "d+": _0x3eba4a.getDate(),
        "H+": _0x3eba4a.getHours(),
        "m+": _0x3eba4a.getMinutes(),
        "s+": _0x3eba4a.getSeconds(),
        "q+": Math.floor((_0x3eba4a.getMonth() + 3) / 3),
        S: _0x3eba4a.getMilliseconds()
      };
      /(y+)/.test(_0x5ea0f5) && (_0x5ea0f5 = _0x5ea0f5.replace(RegExp.$1, (_0x3eba4a.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x20c9a9 in _0x1e6632) new RegExp("(" + _0x20c9a9 + ")").test(_0x5ea0f5) && (_0x5ea0f5 = _0x5ea0f5.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1e6632[_0x20c9a9] : ("00" + _0x1e6632[_0x20c9a9]).substr(("" + _0x1e6632[_0x20c9a9]).length)));
      return _0x5ea0f5;
    }
    msg(_0x343709 = _0x4e4a10, _0x3549a4 = "", _0x46dee5 = "", _0x11c5fe) {
      const _0x4ce6e6 = _0x2f4372 => {
        if (!_0x2f4372) {
          return _0x2f4372;
        }
        if ("string" == typeof _0x2f4372) {
          return this.isLoon() ? _0x2f4372 : this.isQuanX() ? {
            "open-url": _0x2f4372
          } : this.isSurge() ? {
            url: _0x2f4372
          } : void 0;
        }
        if ("object" == typeof _0x2f4372) {
          if (this.isLoon()) {
            let _0xf3eebe = _0x2f4372.openUrl || _0x2f4372.url || _0x2f4372["open-url"],
              _0x407986 = _0x2f4372.mediaUrl || _0x2f4372["media-url"];
            return {
              openUrl: _0xf3eebe,
              mediaUrl: _0x407986
            };
          }
          if (this.isQuanX()) {
            let _0x218cff = _0x2f4372["open-url"] || _0x2f4372.url || _0x2f4372.openUrl,
              _0xab7644 = _0x2f4372["media-url"] || _0x2f4372.mediaUrl;
            return {
              "open-url": _0x218cff,
              "media-url": _0xab7644
            };
          }
          if (this.isSurge()) {
            let _0xc536fe = _0x2f4372.url || _0x2f4372.openUrl || _0x2f4372["open-url"];
            return {
              url: _0xc536fe
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x343709, _0x3549a4, _0x46dee5, _0x4ce6e6(_0x11c5fe)) : this.isQuanX() && $notify(_0x343709, _0x3549a4, _0x46dee5, _0x4ce6e6(_0x11c5fe))), !this.isMuteLog) {
        let _0x272339 = ["", "==============📣系统通知📣=============="];
        _0x272339.push(_0x343709);
        _0x3549a4 && _0x272339.push(_0x3549a4);
        _0x46dee5 && _0x272339.push(_0x46dee5);
        console.log(_0x272339.join("\n"));
        this.logs = this.logs.concat(_0x272339);
      }
    }
    log(..._0x29fff9) {
      _0x29fff9.length > 0 && (this.logs = [...this.logs, ..._0x29fff9]);
      console.log(_0x29fff9.join(this.logSeparator));
    }
    logErr(_0x401394, _0x415930) {
      const _0x12a15f = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x12a15f ? this.log("", "❗️" + this.name + ", 错误!", _0x401394.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x401394);
    }
    wait(_0x5dd361) {
      return new Promise(_0x9aa25b => setTimeout(_0x9aa25b, _0x5dd361));
    }
    done(_0x3188f9 = {}) {
      const _0x4d11e3 = new Date().getTime(),
        _0x2f3546 = (_0x4d11e3 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2f3546 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3188f9);
    }
  }(_0x4e4a10, _0x390e38);
}