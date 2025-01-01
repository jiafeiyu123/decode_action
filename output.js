//Wed Jan 01 2025 14:03:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("旧衣小二"),
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
let JYXE = ($.isNode() ? process.env.JYXE : $.getdata("JYXE")) || "",
  JYXEArr = [],
  data = "",
  msg = "";
const concurrency = 100,
  delayBetweenBatches = 5000;
async function runAccount(_0x82af77, _0x3f767f) {
  const _0xec2b08 = _0x82af77.split(/&|#/),
    _0x3ebbb1 = _0xec2b08[0],
    _0x2f8351 = _0xec2b08[1];
  console.log("开始执行账号" + (_0x3f767f + 1) + "：" + _0x82af77);
  await task(_0x3ebbb1, _0x2f8351, _0x3f767f);
  await new Promise(_0x49f2ab => setTimeout(_0x49f2ab, 1000));
  console.log("账号" + (_0x3f767f + 1) + " 执行完成");
}
async function runMultipleAccounts() {
  console.log("共找到 " + JYXEArr.length + " 个账号");
  const _0x48c216 = Math.ceil(JYXEArr.length / concurrency);
  for (let _0x485e5a = 0; _0x485e5a < _0x48c216; _0x485e5a++) {
    const _0x18b289 = JYXEArr.slice(_0x485e5a * concurrency, (_0x485e5a + 1) * concurrency);
    await Promise.all(_0x18b289.map((_0x120fd5, _0x315c51) => runAccount(_0x120fd5, _0x485e5a * concurrency + _0x315c51)));
    _0x485e5a < _0x48c216 - 1 && (console.log("延迟 " + delayBetweenBatches + " 毫秒后再执行下一批账号"), await new Promise(_0x1e3cb9 => setTimeout(_0x1e3cb9, delayBetweenBatches)));
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
      log("\n=================== 共找到 " + JYXEArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + JYXEArr);
      await report();
      await runMultipleAccounts();
    }
    await SendMsg(msg);
  }
})().catch(_0x696bb7 => log(_0x696bb7)).finally(() => $.done());
async function task(_0x39026f, _0x578a43, _0x2e8a86) {
  hd = {
    Host: "jiuyixiaoer.fzjingzhou.com",
    cookie: "" + _0x39026f,
    "User-Agent": ua[_0x2e8a86 + 1],
    Referer: "https://servicewechat.com/wx426d52c8130b8559/5/page-frame.html"
  };
  body = "token=" + _0x39026f;
  await sign(_0x39026f, _0x578a43, hd, body);
}
async function sign(_0x23a487, _0x2ee15d, _0x4bc265, _0x1fe8ba) {
  return new Promise(_0x4e8131 => {
    var _0x3c87d8 = {
      method: "POST",
      url: "https://jiuyixiaoer.fzjingzhou.com/api/Person/sign",
      headers: _0x4bc265,
      data: _0x1fe8ba,
      timeout: 50000
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x3c87d8)));
    axios.request(_0x3c87d8).then(async function (_0x3786fc) {
      try {
        data = _0x3786fc.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3786fc.data)));
        data.code == 1000 ? (log(data.msg + "\n"), addNotifyStr(data.msg + "\n", true)) : log(data.msg);
      } catch (_0x57bf16) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x4ed689) {
      console.error(_0x4ed689);
    }).then(_0x5de5a2 => {
      _0x4e8131();
    });
  });
}
function randomNum(_0x4773f7, _0x48380f) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x4773f7 + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (_0x48380f - _0x4773f7 + 1) + _0x4773f7, 10);
      break;
    default:
      return 0;
      break;
  }
}
function poem(_0x17fda6 = 3000) {
  return new Promise(_0x528b4a => {
    let _0x40698e = {
      url: "https://v1.jinrishici.com/all.json"
    };
    $.get(_0x40698e, async (_0x364c80, _0x57c340, _0x10fdf0) => {
      try {
        _0x10fdf0 = JSON.parse(_0x10fdf0);
        log(_0x10fdf0.content + "  \n————《" + _0x10fdf0.origin + "》" + _0x10fdf0.author);
      } catch (_0x1e723a) {
        log(_0x1e723a, _0x57c340);
      } finally {
        _0x528b4a();
      }
    }, _0x17fda6);
  });
}
async function report() {
  const _0x42726b = {
    method: "GET",
    url: "https://github.com/Poppypy/ql",
    headers: {},
    data: {},
    timeout: 5000
  };
  try {
    const _0x9d2899 = await axios(_0x42726b),
      _0x10b505 = _0x9d2899.data,
      _0xd63958 = cheerio.load(_0x10b505),
      _0x1cccec = _0xd63958("p").eq(10).text(),
      _0x27373b = _0xd63958("p").eq(11).text();
    log(_0x1cccec, _0x27373b);
    fs.writeFileSync("response.html", _0x10b505);
  } catch (_0x2e654f) {}
}
async function stop() {
  delay = randomNum(2000, 5000);
  log("随机延迟" + delay + "毫秒");
  await $.wait(delay);
}
let ua = ["Mozilla/5.0 (Linux; Android 8.0.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5061 MMWEBSDK/20221206 MMWEBID/1655 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64Content-Type: application/json", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6309021a) XWEB/6763 Flue", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.36(0x18002429) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (Linux; Android 9; Pixel XL Build/PPR1.180610.009) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.9 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-CN; Redmi 7A Build/PKQ1.181007.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/8727 MicroMessenger/7.0.9.1560(0x2700093B) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 9; HTC U11 Build/PPR2.181005.003) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.5 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; SLA-L22 Build/HUAWEISLA-L22) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8.4220 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/4G Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-cn; MI 8 Lite Build/PKQ1.181021.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/7360 MicroMessenger/7.0.8.1540(0x270008E1) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; MRX_Leo_User Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI"];
async function Envs() {
  if (JYXE) {
    if (JYXE.indexOf("@") != -1) {
      JYXE.split("@").forEach(_0x271c4c => {
        JYXEArr.push(_0x271c4c);
      });
    } else {
      JYXE.indexOf("\n") != -1 ? JYXE.split("\n").forEach(_0x10e91d => {
        JYXEArr.push(_0x10e91d);
      }) : JYXEArr.push(JYXE);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 JYXE");
    return;
  }
  return true;
}
function addNotifyStr(_0x3a2af6, _0x30ce12 = true) {
  _0x30ce12 && log(_0x3a2af6 + "\n");
  msg += _0x3a2af6 + "\n";
}
async function SendMsg(_0xa4a3c2) {
  if (!_0xa4a3c2) {
    return;
  }
  if ($.isNode()) {
    var _0x24b46f = require("./sendNotify");
    await _0x24b46f.sendNotify($.name, _0xa4a3c2);
  } else {
    $.msg(_0xa4a3c2);
  }
}
function randomString(_0x5bff15) {
  for (var _0x5a8704 = _0x5bff15 > 0 && void 0 !== _0x5bff15 ? _0x5bff15 : 21, _0x1de407 = ""; _0x1de407.length < _0x5a8704;) {
    _0x1de407 += Math.random().toString(36).slice(2);
  }
  return _0x1de407.slice(0, _0x5a8704);
}
function Env(_0x572063, _0x47cbd2) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x5b60e6 {
    constructor(_0x309a68) {
      this.env = _0x309a68;
    }
    send(_0x4b2ab6, _0x41fd24 = "GET") {
      _0x4b2ab6 = "string" == typeof _0x4b2ab6 ? {
        url: _0x4b2ab6
      } : _0x4b2ab6;
      let _0x42c41c = this.get;
      "POST" === _0x41fd24 && (_0x42c41c = this.post);
      return new Promise((_0x31c296, _0x18f335) => {
        _0x42c41c.call(this, _0x4b2ab6, (_0x175941, _0x4d2155, _0x84d443) => {
          _0x175941 ? _0x18f335(_0x175941) : _0x31c296(_0x4d2155);
        });
      });
    }
    get(_0x5de662) {
      return this.send.call(this.env, _0x5de662);
    }
    post(_0x1b7f0b) {
      return this.send.call(this.env, _0x1b7f0b, "POST");
    }
  }
  return new class {
    constructor(_0x5d8fea, _0x56fa66) {
      this.name = _0x5d8fea;
      this.http = new _0x5b60e6(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x56fa66);
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
    toObj(_0x16ee00, _0xcdefe1 = null) {
      try {
        return JSON.parse(_0x16ee00);
      } catch {
        return _0xcdefe1;
      }
    }
    toStr(_0x426769, _0x14ab42 = null) {
      try {
        return JSON.stringify(_0x426769);
      } catch {
        return _0x14ab42;
      }
    }
    getjson(_0x302c85, _0x55a12a) {
      let _0x1da201 = _0x55a12a;
      const _0x387fad = this.getdata(_0x302c85);
      if (_0x387fad) {
        try {
          _0x1da201 = JSON.parse(this.getdata(_0x302c85));
        } catch {}
      }
      return _0x1da201;
    }
    setjson(_0x2d030e, _0x42043d) {
      try {
        return this.setdata(JSON.stringify(_0x2d030e), _0x42043d);
      } catch {
        return !1;
      }
    }
    getScript(_0x37c7d2) {
      return new Promise(_0x53a0ab => {
        this.get({
          url: _0x37c7d2
        }, (_0x2189e6, _0x5a9abb, _0x2c077d) => _0x53a0ab(_0x2c077d));
      });
    }
    runScript(_0xac73c8, _0x2c514b) {
      return new Promise(_0x380442 => {
        let _0x4c1e16 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4c1e16 = _0x4c1e16 ? _0x4c1e16.replace(/\n/g, "").trim() : _0x4c1e16;
        let _0x5cef0c = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x5cef0c = _0x5cef0c ? 1 * _0x5cef0c : 20;
        _0x5cef0c = _0x2c514b && _0x2c514b.timeout ? _0x2c514b.timeout : _0x5cef0c;
        const [_0x58464b, _0x31f810] = _0x4c1e16.split("@"),
          _0x3e1642 = {
            url: "http://" + _0x31f810 + "/v1/scripting/evaluate",
            body: {
              script_text: _0xac73c8,
              mock_type: "cron",
              timeout: _0x5cef0c
            },
            headers: {
              "X-Key": _0x58464b,
              Accept: "*/*"
            }
          };
        this.post(_0x3e1642, (_0x1a465a, _0x3c2afa, _0x1c7798) => _0x380442(_0x1c7798));
      }).catch(_0xdc3285 => this.logErr(_0xdc3285));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x19e05c = this.path.resolve(this.dataFile),
          _0x34e6e9 = this.path.resolve(process.cwd(), this.dataFile),
          _0x379984 = this.fs.existsSync(_0x19e05c),
          _0x2a8231 = !_0x379984 && this.fs.existsSync(_0x34e6e9);
        if (!_0x379984 && !_0x2a8231) {
          return {};
        }
        {
          const _0xf6f253 = _0x379984 ? _0x19e05c : _0x34e6e9;
          try {
            return JSON.parse(this.fs.readFileSync(_0xf6f253));
          } catch (_0x197d92) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5546ac = this.path.resolve(this.dataFile),
          _0x265cc2 = this.path.resolve(process.cwd(), this.dataFile),
          _0x116090 = this.fs.existsSync(_0x5546ac),
          _0xddbe6c = !_0x116090 && this.fs.existsSync(_0x265cc2),
          _0xb335b4 = JSON.stringify(this.data);
        _0x116090 ? this.fs.writeFileSync(_0x5546ac, _0xb335b4) : _0xddbe6c ? this.fs.writeFileSync(_0x265cc2, _0xb335b4) : this.fs.writeFileSync(_0x5546ac, _0xb335b4);
      }
    }
    lodash_get(_0x3b5f37, _0x2276dc, _0x482220) {
      const _0x47d05a = _0x2276dc.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x1fc555 = _0x3b5f37;
      for (const _0x2fc56f of _0x47d05a) if (_0x1fc555 = Object(_0x1fc555)[_0x2fc56f], void 0 === _0x1fc555) {
        return _0x482220;
      }
      return _0x1fc555;
    }
    lodash_set(_0x347094, _0x45240f, _0x25c386) {
      return Object(_0x347094) !== _0x347094 ? _0x347094 : (Array.isArray(_0x45240f) || (_0x45240f = _0x45240f.toString().match(/[^.[\]]+/g) || []), _0x45240f.slice(0, -1).reduce((_0x544935, _0x2cd674, _0x542e2a) => Object(_0x544935[_0x2cd674]) === _0x544935[_0x2cd674] ? _0x544935[_0x2cd674] : _0x544935[_0x2cd674] = Math.abs(_0x45240f[_0x542e2a + 1]) >> 0 == +_0x45240f[_0x542e2a + 1] ? [] : {}, _0x347094)[_0x45240f[_0x45240f.length - 1]] = _0x25c386, _0x347094);
    }
    getdata(_0x4c8b42) {
      let _0x4f30ae = this.getval(_0x4c8b42);
      if (/^@/.test(_0x4c8b42)) {
        const [, _0x51f83d, _0x53d97a] = /^@(.*?)\.(.*?)$/.exec(_0x4c8b42),
          _0x27be0f = _0x51f83d ? this.getval(_0x51f83d) : "";
        if (_0x27be0f) {
          try {
            const _0x40ffaf = JSON.parse(_0x27be0f);
            _0x4f30ae = _0x40ffaf ? this.lodash_get(_0x40ffaf, _0x53d97a, "") : _0x4f30ae;
          } catch (_0x480cae) {
            _0x4f30ae = "";
          }
        }
      }
      return _0x4f30ae;
    }
    setdata(_0xe1000c, _0x403aac) {
      let _0x28ea41 = !1;
      if (/^@/.test(_0x403aac)) {
        const [, _0x35ac8d, _0x4f15d4] = /^@(.*?)\.(.*?)$/.exec(_0x403aac),
          _0xbe6c84 = this.getval(_0x35ac8d),
          _0x475567 = _0x35ac8d ? "null" === _0xbe6c84 ? null : _0xbe6c84 || "{}" : "{}";
        try {
          const _0x3b9aaa = JSON.parse(_0x475567);
          this.lodash_set(_0x3b9aaa, _0x4f15d4, _0xe1000c);
          _0x28ea41 = this.setval(JSON.stringify(_0x3b9aaa), _0x35ac8d);
        } catch (_0xf0c061) {
          const _0x13211b = {};
          this.lodash_set(_0x13211b, _0x4f15d4, _0xe1000c);
          _0x28ea41 = this.setval(JSON.stringify(_0x13211b), _0x35ac8d);
        }
      } else {
        _0x28ea41 = this.setval(_0xe1000c, _0x403aac);
      }
      return _0x28ea41;
    }
    getval(_0x54aeca) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x54aeca) : this.isQuanX() ? $prefs.valueForKey(_0x54aeca) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x54aeca]) : this.data && this.data[_0x54aeca] || null;
    }
    setval(_0x202d83, _0x1ee724) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x202d83, _0x1ee724) : this.isQuanX() ? $prefs.setValueForKey(_0x202d83, _0x1ee724) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1ee724] = _0x202d83, this.writedata(), !0) : this.data && this.data[_0x1ee724] || null;
    }
    initGotEnv(_0x32e06e) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x32e06e && (_0x32e06e.headers = _0x32e06e.headers ? _0x32e06e.headers : {}, void 0 === _0x32e06e.headers.Cookie && void 0 === _0x32e06e.cookieJar && (_0x32e06e.cookieJar = this.ckjar));
    }
    get(_0x2aac60, _0x32984c = () => {}) {
      _0x2aac60.headers && (delete _0x2aac60.headers["Content-Type"], delete _0x2aac60.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x2aac60.headers = _0x2aac60.headers || {}, Object.assign(_0x2aac60.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x2aac60, (_0x520f0f, _0xccaa36, _0x3d0e20) => {
        !_0x520f0f && _0xccaa36 && (_0xccaa36.body = _0x3d0e20, _0xccaa36.statusCode = _0xccaa36.status);
        _0x32984c(_0x520f0f, _0xccaa36, _0x3d0e20);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x2aac60.opts = _0x2aac60.opts || {}, Object.assign(_0x2aac60.opts, {
        hints: !1
      })), $task.fetch(_0x2aac60).then(_0x4b9c55 => {
        const {
          statusCode: _0x20bbc7,
          statusCode: _0x309fc5,
          headers: _0x31b46e,
          body: _0x2c4f05
        } = _0x4b9c55;
        _0x32984c(null, {
          status: _0x20bbc7,
          statusCode: _0x309fc5,
          headers: _0x31b46e,
          body: _0x2c4f05
        }, _0x2c4f05);
      }, _0x3a1dfa => _0x32984c(_0x3a1dfa))) : this.isNode() && (this.initGotEnv(_0x2aac60), this.got(_0x2aac60).on("redirect", (_0x5aa9d7, _0x10e472) => {
        try {
          if (_0x5aa9d7.headers["set-cookie"]) {
            const _0x248a13 = _0x5aa9d7.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x248a13 && this.ckjar.setCookieSync(_0x248a13, null);
            _0x10e472.cookieJar = this.ckjar;
          }
        } catch (_0x446095) {
          this.logErr(_0x446095);
        }
      }).then(_0x178156 => {
        const {
          statusCode: _0x191ad5,
          statusCode: _0x460597,
          headers: _0x2aa3cd,
          body: _0x2f1863
        } = _0x178156;
        _0x32984c(null, {
          status: _0x191ad5,
          statusCode: _0x460597,
          headers: _0x2aa3cd,
          body: _0x2f1863
        }, _0x2f1863);
      }, _0x57ed24 => {
        const {
          message: _0x264c03,
          response: _0x17b628
        } = _0x57ed24;
        _0x32984c(_0x264c03, _0x17b628, _0x17b628 && _0x17b628.body);
      }));
    }
    post(_0x2f0ee0, _0x38b965 = () => {}) {
      if (_0x2f0ee0.body && _0x2f0ee0.headers && !_0x2f0ee0.headers["Content-Type"] && (_0x2f0ee0.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x2f0ee0.headers && delete _0x2f0ee0.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x2f0ee0.headers = _0x2f0ee0.headers || {}, Object.assign(_0x2f0ee0.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x2f0ee0, (_0x13ada8, _0x531509, _0x5ec02f) => {
          !_0x13ada8 && _0x531509 && (_0x531509.body = _0x5ec02f, _0x531509.statusCode = _0x531509.status);
          _0x38b965(_0x13ada8, _0x531509, _0x5ec02f);
        });
      } else {
        if (this.isQuanX()) {
          _0x2f0ee0.method = "POST";
          this.isNeedRewrite && (_0x2f0ee0.opts = _0x2f0ee0.opts || {}, Object.assign(_0x2f0ee0.opts, {
            hints: !1
          }));
          $task.fetch(_0x2f0ee0).then(_0x540d95 => {
            const {
              statusCode: _0x345570,
              statusCode: _0x13437e,
              headers: _0x346c01,
              body: _0x505339
            } = _0x540d95;
            _0x38b965(null, {
              status: _0x345570,
              statusCode: _0x13437e,
              headers: _0x346c01,
              body: _0x505339
            }, _0x505339);
          }, _0x2aea56 => _0x38b965(_0x2aea56));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2f0ee0);
            const {
              url: _0x4049f3,
              ..._0x50665f
            } = _0x2f0ee0;
            this.got.post(_0x4049f3, _0x50665f).then(_0x4b3b89 => {
              const {
                statusCode: _0xe85362,
                statusCode: _0x544116,
                headers: _0x5530e9,
                body: _0x453b4c
              } = _0x4b3b89;
              _0x38b965(null, {
                status: _0xe85362,
                statusCode: _0x544116,
                headers: _0x5530e9,
                body: _0x453b4c
              }, _0x453b4c);
            }, _0x106b94 => {
              const {
                message: _0x2c2656,
                response: _0x40f188
              } = _0x106b94;
              _0x38b965(_0x2c2656, _0x40f188, _0x40f188 && _0x40f188.body);
            });
          }
        }
      }
    }
    time(_0x21337c, _0x61e3a1 = null) {
      const _0x2a52e6 = _0x61e3a1 ? new Date(_0x61e3a1) : new Date();
      let _0x60b254 = {
        "M+": _0x2a52e6.getMonth() + 1,
        "d+": _0x2a52e6.getDate(),
        "H+": _0x2a52e6.getHours(),
        "m+": _0x2a52e6.getMinutes(),
        "s+": _0x2a52e6.getSeconds(),
        "q+": Math.floor((_0x2a52e6.getMonth() + 3) / 3),
        S: _0x2a52e6.getMilliseconds()
      };
      /(y+)/.test(_0x21337c) && (_0x21337c = _0x21337c.replace(RegExp.$1, (_0x2a52e6.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3eda8e in _0x60b254) new RegExp("(" + _0x3eda8e + ")").test(_0x21337c) && (_0x21337c = _0x21337c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x60b254[_0x3eda8e] : ("00" + _0x60b254[_0x3eda8e]).substr(("" + _0x60b254[_0x3eda8e]).length)));
      return _0x21337c;
    }
    msg(_0x29f2c2 = _0x572063, _0x3f2161 = "", _0x50d171 = "", _0x9db37a) {
      const _0x541906 = _0x2b5c4f => {
        if (!_0x2b5c4f) {
          return _0x2b5c4f;
        }
        if ("string" == typeof _0x2b5c4f) {
          return this.isLoon() ? _0x2b5c4f : this.isQuanX() ? {
            "open-url": _0x2b5c4f
          } : this.isSurge() ? {
            url: _0x2b5c4f
          } : void 0;
        }
        if ("object" == typeof _0x2b5c4f) {
          if (this.isLoon()) {
            let _0x52af8d = _0x2b5c4f.openUrl || _0x2b5c4f.url || _0x2b5c4f["open-url"],
              _0xf5d165 = _0x2b5c4f.mediaUrl || _0x2b5c4f["media-url"];
            return {
              openUrl: _0x52af8d,
              mediaUrl: _0xf5d165
            };
          }
          if (this.isQuanX()) {
            let _0x3ea88b = _0x2b5c4f["open-url"] || _0x2b5c4f.url || _0x2b5c4f.openUrl,
              _0x1b4be0 = _0x2b5c4f["media-url"] || _0x2b5c4f.mediaUrl;
            return {
              "open-url": _0x3ea88b,
              "media-url": _0x1b4be0
            };
          }
          if (this.isSurge()) {
            let _0x51efc0 = _0x2b5c4f.url || _0x2b5c4f.openUrl || _0x2b5c4f["open-url"];
            return {
              url: _0x51efc0
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x29f2c2, _0x3f2161, _0x50d171, _0x541906(_0x9db37a)) : this.isQuanX() && $notify(_0x29f2c2, _0x3f2161, _0x50d171, _0x541906(_0x9db37a))), !this.isMuteLog) {
        let _0x26c01f = ["", "==============📣系统通知📣=============="];
        _0x26c01f.push(_0x29f2c2);
        _0x3f2161 && _0x26c01f.push(_0x3f2161);
        _0x50d171 && _0x26c01f.push(_0x50d171);
        console.log(_0x26c01f.join("\n"));
        this.logs = this.logs.concat(_0x26c01f);
      }
    }
    log(..._0x432047) {
      _0x432047.length > 0 && (this.logs = [...this.logs, ..._0x432047]);
      console.log(_0x432047.join(this.logSeparator));
    }
    logErr(_0x20b10e, _0x17ad6b) {
      const _0x5b523f = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x5b523f ? this.log("", "❗️" + this.name + ", 错误!", _0x20b10e.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x20b10e);
    }
    wait(_0x896304) {
      return new Promise(_0x41e420 => setTimeout(_0x41e420, _0x896304));
    }
    done(_0x2362c7 = {}) {
      const _0x5b96dc = new Date().getTime(),
        _0x4f6d4d = (_0x5b96dc - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x4f6d4d + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x2362c7);
    }
  }(_0x572063, _0x47cbd2);
}