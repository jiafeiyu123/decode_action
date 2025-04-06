//Sun Apr 06 2025 09:17:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("顺义创城兑换"),
  axios = require("axios");
let request = require("request");
const fs = require("fs"),
  cheerio = require("cheerio"),
  {
    time,
    timeStamp
  } = require("console"),
  {
    start
  } = require("repl");
request = request.defaults({
  jar: true
});
const {
    log
  } = console,
  debug = 0;
let SYCC = ($.isNode() ? process.env.SYCC : $.getdata("SYCC")) || "",
  SYCCArr = [],
  index,
  data = "",
  msg = "";
const concurrency = 10,
  delayBetweenBatches = 5000;
async function runAccount(_0x4697c9, _0x5d5240) {
  const _0x3bdbc2 = _0x4697c9.split(/&|#/),
    _0x405735 = _0x3bdbc2[0],
    _0x48230e = _0x3bdbc2[1];
  console.log("开始执行账号" + (_0x5d5240 + 1) + "：" + _0x4697c9);
  let _0x237161 = ["1788826595521810434", "1562334019131645953"];
  starttime = new Date().getTime();
  endtime = starttime + 90000;
  log("开始时间戳:" + starttime, "结束时间戳" + endtime);
  await $.wait(45000);
  i = 0;
  while (new Date().getTime() < endtime) {
    await stop();
    sign(_0x405735, _0x48230e, _0x237161[i]);
    if (i == 0) {
      i = 1;
    } else {
      i = 0;
    }
  }
  await new Promise(_0x24fce0 => setTimeout(_0x24fce0, 1000));
  console.log("账号" + (_0x5d5240 + 1) + " 执行完成");
}
async function runMultipleAccounts() {
  console.log("共找到 " + SYCCArr.length + " 个账号");
  const _0x560eba = Math.ceil(SYCCArr.length / concurrency);
  for (let _0x241655 = 0; _0x241655 < _0x560eba; _0x241655++) {
    const _0x3d4339 = SYCCArr.slice(_0x241655 * concurrency, (_0x241655 + 1) * concurrency);
    await Promise.all(_0x3d4339.map((_0x5276f6, _0x25a7f9) => runAccount(_0x5276f6, _0x241655 * concurrency + _0x25a7f9)));
    _0x241655 < _0x560eba - 1 && (console.log("延迟 " + delayBetweenBatches + " 毫秒后再执行下一批账号"), await new Promise(_0x36e8f9 => setTimeout(_0x36e8f9, delayBetweenBatches)));
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
      log("\n=================== 共找到 " + SYCCArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + SYCCArr);
      await runMultipleAccounts();
    }
    await SendMsg(msg);
  }
})().catch(_0x2bc1bd => log(_0x2bc1bd)).finally(() => $.done());
async function sign(_0x12bc4b, _0x2ac392, _0x5b618c) {
  return new Promise(_0x2316f3 => {
    var _0x213208 = {
      method: "POST",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/award/exchangeAward",
      headers: {
        Host: "admin.shunyi.wenming.city",
        "X-Applet-Token": "" + _0x12bc4b,
        "Content-Type": "application/json",
        "User-Agent": ua[index + 1],
        xweb_xhr: 1
      },
      data: {
        awardIds: ["" + _0x5b618c],
        phone: "" + _0x2ac392
      },
      timeout: 50000
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x213208)));
    axios.request(_0x213208).then(async function (_0x5b45ac) {
      try {
        data = _0x5b45ac.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x5b45ac.data)));
        if (data.code == 500) {
          log(data.message + "\n");
          addNotifyStr("\n" + data.message + "\n", true);
          if (data.message == "一天只能兑换一次") {
            return;
          }
        }
      } catch (_0x3b61d6) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x16cc92) {
      console.error(_0x16cc92);
    }).then(_0x5b91c3 => {
      _0x2316f3();
    });
  });
}
function randomNum(_0x41a7c5, _0xd5e33c) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x41a7c5 + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (_0xd5e33c - _0x41a7c5 + 1) + _0x41a7c5, 10);
      break;
    default:
      return 0;
      break;
  }
}
function poem(_0xdda9af = 3000) {
  return new Promise(_0x4360c4 => {
    let _0x2370d1 = {
      url: "https://v1.jinrishici.com/all.json"
    };
    $.get(_0x2370d1, async (_0x518096, _0xdda967, _0x49a01e) => {
      try {
        _0x49a01e = JSON.parse(_0x49a01e);
        log(_0x49a01e.content + "  \n————《" + _0x49a01e.origin + "》" + _0x49a01e.author);
      } catch (_0x5211bf) {
        log(_0x5211bf, _0xdda967);
      } finally {
        _0x4360c4();
      }
    }, _0xdda9af);
  });
}
async function report() {
  const _0x110a22 = {
    method: "GET",
    url: "https://github.com/Poppypy/ql",
    headers: {},
    data: {},
    timeout: 5000
  };
  try {
    const _0xaeaeb5 = await axios(_0x110a22),
      _0x4d2adc = _0xaeaeb5.data,
      _0x52d527 = cheerio.load(_0x4d2adc),
      _0x12b451 = _0x52d527("p").eq(10).text(),
      _0x188b98 = _0x52d527("p").eq(11).text();
    log(_0x12b451, _0x188b98);
    fs.writeFileSync("response.html", _0x4d2adc);
  } catch (_0x350432) {}
}
async function stop() {
  delay = randomNum(10, 300);
  log("随机延迟" + delay + "毫秒");
  await $.wait(delay);
}
let ua = ["Mozilla/5.0 (Linux; Android 8.0.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5061 MMWEBSDK/20221206 MMWEBID/1655 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64Content-Type: application/json", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6309021a) XWEB/6763 Flue", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.36(0x18002429) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (Linux; Android 9; Pixel XL Build/PPR1.180610.009) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.9 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-CN; Redmi 7A Build/PKQ1.181007.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/8727 MicroMessenger/7.0.9.1560(0x2700093B) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 9; HTC U11 Build/PPR2.181005.003) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.5 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; SLA-L22 Build/HUAWEISLA-L22) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8.4220 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/4G Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-cn; MI 8 Lite Build/PKQ1.181021.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/7360 MicroMessenger/7.0.8.1540(0x270008E1) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; MRX_Leo_User Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI"];
async function Envs() {
  if (SYCC) {
    if (SYCC.indexOf("@") != -1) {
      SYCC.split("@").forEach(_0x431f61 => {
        SYCCArr.push(_0x431f61);
      });
    } else {
      SYCC.indexOf("\n") != -1 ? SYCC.split("\n").forEach(_0x46cd19 => {
        SYCCArr.push(_0x46cd19);
      }) : SYCCArr.push(SYCC);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 SYCC");
    return;
  }
  return true;
}
function addNotifyStr(_0x59fc54, _0x3e2e4a = true) {
  _0x3e2e4a && log(_0x59fc54 + "\n");
  msg += _0x59fc54 + "\n";
}
async function SendMsg(_0xc76b5d) {
  if (!_0xc76b5d) {
    return;
  }
  if ($.isNode()) {
    var _0x236dfe = require("./sendNotify");
    await _0x236dfe.sendNotify($.name, _0xc76b5d);
  } else {
    $.msg(_0xc76b5d);
  }
}
function randomString(_0x3fddb2) {
  for (var _0x5505bd = _0x3fddb2 > 0 && void 0 !== _0x3fddb2 ? _0x3fddb2 : 21, _0x1551f8 = ""; _0x1551f8.length < _0x5505bd;) {
    _0x1551f8 += Math.random().toString(36).slice(2);
  }
  return _0x1551f8.slice(0, _0x5505bd);
}
function Env(_0xc372d6, _0x38867d) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x3e3043 {
    constructor(_0x44575f) {
      this.env = _0x44575f;
    }
    send(_0x2468c1, _0x2b0fe8 = "GET") {
      _0x2468c1 = "string" == typeof _0x2468c1 ? {
        url: _0x2468c1
      } : _0x2468c1;
      let _0x54a476 = this.get;
      "POST" === _0x2b0fe8 && (_0x54a476 = this.post);
      return new Promise((_0x4c4a6f, _0x4933a9) => {
        _0x54a476.call(this, _0x2468c1, (_0x4ca573, _0x4f6279, _0x3d37f4) => {
          _0x4ca573 ? _0x4933a9(_0x4ca573) : _0x4c4a6f(_0x4f6279);
        });
      });
    }
    get(_0x272e76) {
      return this.send.call(this.env, _0x272e76);
    }
    post(_0x2d0a2f) {
      return this.send.call(this.env, _0x2d0a2f, "POST");
    }
  }
  return new class {
    constructor(_0x1f591e, _0x5163c8) {
      this.name = _0x1f591e;
      this.http = new _0x3e3043(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5163c8);
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
    toObj(_0x24a4ae, _0xfe965a = null) {
      try {
        return JSON.parse(_0x24a4ae);
      } catch {
        return _0xfe965a;
      }
    }
    toStr(_0x90ecc8, _0x2d2230 = null) {
      try {
        return JSON.stringify(_0x90ecc8);
      } catch {
        return _0x2d2230;
      }
    }
    getjson(_0x231b18, _0x4ea0c5) {
      let _0x234859 = _0x4ea0c5;
      const _0xf9b88a = this.getdata(_0x231b18);
      if (_0xf9b88a) {
        try {
          _0x234859 = JSON.parse(this.getdata(_0x231b18));
        } catch {}
      }
      return _0x234859;
    }
    setjson(_0x1313e8, _0x445472) {
      try {
        return this.setdata(JSON.stringify(_0x1313e8), _0x445472);
      } catch {
        return !1;
      }
    }
    getScript(_0x176ecc) {
      return new Promise(_0x41a486 => {
        this.get({
          url: _0x176ecc
        }, (_0x487cf7, _0x115b7a, _0x2bb8f4) => _0x41a486(_0x2bb8f4));
      });
    }
    runScript(_0x569b3c, _0x129217) {
      return new Promise(_0x3f8f75 => {
        let _0x5ed758 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5ed758 = _0x5ed758 ? _0x5ed758.replace(/\n/g, "").trim() : _0x5ed758;
        let _0x33d419 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x33d419 = _0x33d419 ? 1 * _0x33d419 : 20;
        _0x33d419 = _0x129217 && _0x129217.timeout ? _0x129217.timeout : _0x33d419;
        const [_0x2c0aca, _0x4eb8db] = _0x5ed758.split("@"),
          _0x20fd32 = {
            url: "http://" + _0x4eb8db + "/v1/scripting/evaluate",
            body: {
              script_text: _0x569b3c,
              mock_type: "cron",
              timeout: _0x33d419
            },
            headers: {
              "X-Key": _0x2c0aca,
              Accept: "*/*"
            }
          };
        this.post(_0x20fd32, (_0x3da0d5, _0x48008b, _0x3b059e) => _0x3f8f75(_0x3b059e));
      }).catch(_0x50d6d4 => this.logErr(_0x50d6d4));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1ff094 = this.path.resolve(this.dataFile),
          _0xfd6814 = this.path.resolve(process.cwd(), this.dataFile),
          _0xf6563e = this.fs.existsSync(_0x1ff094),
          _0x579e18 = !_0xf6563e && this.fs.existsSync(_0xfd6814);
        if (!_0xf6563e && !_0x579e18) {
          return {};
        }
        {
          const _0xe8bb8f = _0xf6563e ? _0x1ff094 : _0xfd6814;
          try {
            return JSON.parse(this.fs.readFileSync(_0xe8bb8f));
          } catch (_0x276d71) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x12351f = this.path.resolve(this.dataFile),
          _0x5f1b2d = this.path.resolve(process.cwd(), this.dataFile),
          _0x359e5f = this.fs.existsSync(_0x12351f),
          _0x416a24 = !_0x359e5f && this.fs.existsSync(_0x5f1b2d),
          _0x378083 = JSON.stringify(this.data);
        _0x359e5f ? this.fs.writeFileSync(_0x12351f, _0x378083) : _0x416a24 ? this.fs.writeFileSync(_0x5f1b2d, _0x378083) : this.fs.writeFileSync(_0x12351f, _0x378083);
      }
    }
    lodash_get(_0x42229f, _0x6e4446, _0x48ab95) {
      const _0x251862 = _0x6e4446.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x2ba4ba = _0x42229f;
      for (const _0x2b76eb of _0x251862) if (_0x2ba4ba = Object(_0x2ba4ba)[_0x2b76eb], void 0 === _0x2ba4ba) {
        return _0x48ab95;
      }
      return _0x2ba4ba;
    }
    lodash_set(_0x13348e, _0x5acfa8, _0x18fc9f) {
      return Object(_0x13348e) !== _0x13348e ? _0x13348e : (Array.isArray(_0x5acfa8) || (_0x5acfa8 = _0x5acfa8.toString().match(/[^.[\]]+/g) || []), _0x5acfa8.slice(0, -1).reduce((_0x4e5ec0, _0x539f17, _0x4f66d5) => Object(_0x4e5ec0[_0x539f17]) === _0x4e5ec0[_0x539f17] ? _0x4e5ec0[_0x539f17] : _0x4e5ec0[_0x539f17] = Math.abs(_0x5acfa8[_0x4f66d5 + 1]) >> 0 == +_0x5acfa8[_0x4f66d5 + 1] ? [] : {}, _0x13348e)[_0x5acfa8[_0x5acfa8.length - 1]] = _0x18fc9f, _0x13348e);
    }
    getdata(_0x3375e6) {
      let _0x4b7623 = this.getval(_0x3375e6);
      if (/^@/.test(_0x3375e6)) {
        const [, _0x1c8817, _0x138237] = /^@(.*?)\.(.*?)$/.exec(_0x3375e6),
          _0x4879ef = _0x1c8817 ? this.getval(_0x1c8817) : "";
        if (_0x4879ef) {
          try {
            const _0x27d6a7 = JSON.parse(_0x4879ef);
            _0x4b7623 = _0x27d6a7 ? this.lodash_get(_0x27d6a7, _0x138237, "") : _0x4b7623;
          } catch (_0x528f89) {
            _0x4b7623 = "";
          }
        }
      }
      return _0x4b7623;
    }
    setdata(_0x21bd16, _0x4384e1) {
      let _0x1277cd = !1;
      if (/^@/.test(_0x4384e1)) {
        const [, _0x53f7f1, _0x1f2c63] = /^@(.*?)\.(.*?)$/.exec(_0x4384e1),
          _0x2f5359 = this.getval(_0x53f7f1),
          _0x4d446f = _0x53f7f1 ? "null" === _0x2f5359 ? null : _0x2f5359 || "{}" : "{}";
        try {
          const _0x5f0006 = JSON.parse(_0x4d446f);
          this.lodash_set(_0x5f0006, _0x1f2c63, _0x21bd16);
          _0x1277cd = this.setval(JSON.stringify(_0x5f0006), _0x53f7f1);
        } catch (_0x3eaf71) {
          const _0x242124 = {};
          this.lodash_set(_0x242124, _0x1f2c63, _0x21bd16);
          _0x1277cd = this.setval(JSON.stringify(_0x242124), _0x53f7f1);
        }
      } else {
        _0x1277cd = this.setval(_0x21bd16, _0x4384e1);
      }
      return _0x1277cd;
    }
    getval(_0x55c954) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x55c954) : this.isQuanX() ? $prefs.valueForKey(_0x55c954) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x55c954]) : this.data && this.data[_0x55c954] || null;
    }
    setval(_0x5cd053, _0x483521) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x5cd053, _0x483521) : this.isQuanX() ? $prefs.setValueForKey(_0x5cd053, _0x483521) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x483521] = _0x5cd053, this.writedata(), !0) : this.data && this.data[_0x483521] || null;
    }
    initGotEnv(_0x34e95c) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x34e95c && (_0x34e95c.headers = _0x34e95c.headers ? _0x34e95c.headers : {}, void 0 === _0x34e95c.headers.Cookie && void 0 === _0x34e95c.cookieJar && (_0x34e95c.cookieJar = this.ckjar));
    }
    get(_0xfbb933, _0x3f4236 = () => {}) {
      _0xfbb933.headers && (delete _0xfbb933.headers["Content-Type"], delete _0xfbb933.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0xfbb933.headers = _0xfbb933.headers || {}, Object.assign(_0xfbb933.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0xfbb933, (_0x5f14e5, _0x268111, _0x598ca1) => {
        !_0x5f14e5 && _0x268111 && (_0x268111.body = _0x598ca1, _0x268111.statusCode = _0x268111.status);
        _0x3f4236(_0x5f14e5, _0x268111, _0x598ca1);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0xfbb933.opts = _0xfbb933.opts || {}, Object.assign(_0xfbb933.opts, {
        hints: !1
      })), $task.fetch(_0xfbb933).then(_0x5a6bb7 => {
        const {
          statusCode: _0x12be64,
          statusCode: _0x2800f7,
          headers: _0x20739f,
          body: _0x6fded
        } = _0x5a6bb7;
        _0x3f4236(null, {
          status: _0x12be64,
          statusCode: _0x2800f7,
          headers: _0x20739f,
          body: _0x6fded
        }, _0x6fded);
      }, _0x519aff => _0x3f4236(_0x519aff))) : this.isNode() && (this.initGotEnv(_0xfbb933), this.got(_0xfbb933).on("redirect", (_0x1de954, _0x1ff3b8) => {
        try {
          if (_0x1de954.headers["set-cookie"]) {
            const _0x40f5f5 = _0x1de954.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x40f5f5 && this.ckjar.setCookieSync(_0x40f5f5, null);
            _0x1ff3b8.cookieJar = this.ckjar;
          }
        } catch (_0x31ee2e) {
          this.logErr(_0x31ee2e);
        }
      }).then(_0x11befd => {
        const {
          statusCode: _0x2a05dc,
          statusCode: _0x7c0c36,
          headers: _0x4cbb6f,
          body: _0x39aec4
        } = _0x11befd;
        _0x3f4236(null, {
          status: _0x2a05dc,
          statusCode: _0x7c0c36,
          headers: _0x4cbb6f,
          body: _0x39aec4
        }, _0x39aec4);
      }, _0x3c2bd6 => {
        const {
          message: _0x1e62a0,
          response: _0x453654
        } = _0x3c2bd6;
        _0x3f4236(_0x1e62a0, _0x453654, _0x453654 && _0x453654.body);
      }));
    }
    post(_0x132fa2, _0x110fab = () => {}) {
      if (_0x132fa2.body && _0x132fa2.headers && !_0x132fa2.headers["Content-Type"] && (_0x132fa2.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x132fa2.headers && delete _0x132fa2.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x132fa2.headers = _0x132fa2.headers || {}, Object.assign(_0x132fa2.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x132fa2, (_0x5bc756, _0x414388, _0x1b2b01) => {
          !_0x5bc756 && _0x414388 && (_0x414388.body = _0x1b2b01, _0x414388.statusCode = _0x414388.status);
          _0x110fab(_0x5bc756, _0x414388, _0x1b2b01);
        });
      } else {
        if (this.isQuanX()) {
          _0x132fa2.method = "POST";
          this.isNeedRewrite && (_0x132fa2.opts = _0x132fa2.opts || {}, Object.assign(_0x132fa2.opts, {
            hints: !1
          }));
          $task.fetch(_0x132fa2).then(_0x16a1fd => {
            const {
              statusCode: _0x32403a,
              statusCode: _0x4ac6e4,
              headers: _0x5a49d9,
              body: _0x80c7f5
            } = _0x16a1fd;
            _0x110fab(null, {
              status: _0x32403a,
              statusCode: _0x4ac6e4,
              headers: _0x5a49d9,
              body: _0x80c7f5
            }, _0x80c7f5);
          }, _0x26cfd0 => _0x110fab(_0x26cfd0));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x132fa2);
            const {
              url: _0x298f87,
              ..._0x22d72a
            } = _0x132fa2;
            this.got.post(_0x298f87, _0x22d72a).then(_0x42045f => {
              const {
                statusCode: _0x52091c,
                statusCode: _0x820e34,
                headers: _0x3a7ee0,
                body: _0x174cea
              } = _0x42045f;
              _0x110fab(null, {
                status: _0x52091c,
                statusCode: _0x820e34,
                headers: _0x3a7ee0,
                body: _0x174cea
              }, _0x174cea);
            }, _0x33922f => {
              const {
                message: _0x456b3b,
                response: _0x2d9200
              } = _0x33922f;
              _0x110fab(_0x456b3b, _0x2d9200, _0x2d9200 && _0x2d9200.body);
            });
          }
        }
      }
    }
    time(_0x5d4695, _0x28848f = null) {
      const _0x43dde9 = _0x28848f ? new Date(_0x28848f) : new Date();
      let _0xc9215d = {
        "M+": _0x43dde9.getMonth() + 1,
        "d+": _0x43dde9.getDate(),
        "H+": _0x43dde9.getHours(),
        "m+": _0x43dde9.getMinutes(),
        "s+": _0x43dde9.getSeconds(),
        "q+": Math.floor((_0x43dde9.getMonth() + 3) / 3),
        S: _0x43dde9.getMilliseconds()
      };
      /(y+)/.test(_0x5d4695) && (_0x5d4695 = _0x5d4695.replace(RegExp.$1, (_0x43dde9.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1b946b in _0xc9215d) new RegExp("(" + _0x1b946b + ")").test(_0x5d4695) && (_0x5d4695 = _0x5d4695.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xc9215d[_0x1b946b] : ("00" + _0xc9215d[_0x1b946b]).substr(("" + _0xc9215d[_0x1b946b]).length)));
      return _0x5d4695;
    }
    msg(_0x5d5440 = _0xc372d6, _0x338b39 = "", _0x17e667 = "", _0x12bb71) {
      const _0x343746 = _0x272ea5 => {
        if (!_0x272ea5) {
          return _0x272ea5;
        }
        if ("string" == typeof _0x272ea5) {
          return this.isLoon() ? _0x272ea5 : this.isQuanX() ? {
            "open-url": _0x272ea5
          } : this.isSurge() ? {
            url: _0x272ea5
          } : void 0;
        }
        if ("object" == typeof _0x272ea5) {
          if (this.isLoon()) {
            let _0x4501d9 = _0x272ea5.openUrl || _0x272ea5.url || _0x272ea5["open-url"],
              _0x45ebcd = _0x272ea5.mediaUrl || _0x272ea5["media-url"];
            return {
              openUrl: _0x4501d9,
              mediaUrl: _0x45ebcd
            };
          }
          if (this.isQuanX()) {
            let _0x4eaf66 = _0x272ea5["open-url"] || _0x272ea5.url || _0x272ea5.openUrl,
              _0x44cf3c = _0x272ea5["media-url"] || _0x272ea5.mediaUrl;
            return {
              "open-url": _0x4eaf66,
              "media-url": _0x44cf3c
            };
          }
          if (this.isSurge()) {
            let _0x53db12 = _0x272ea5.url || _0x272ea5.openUrl || _0x272ea5["open-url"];
            return {
              url: _0x53db12
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x5d5440, _0x338b39, _0x17e667, _0x343746(_0x12bb71)) : this.isQuanX() && $notify(_0x5d5440, _0x338b39, _0x17e667, _0x343746(_0x12bb71))), !this.isMuteLog) {
        let _0x61ca49 = ["", "==============📣系统通知📣=============="];
        _0x61ca49.push(_0x5d5440);
        _0x338b39 && _0x61ca49.push(_0x338b39);
        _0x17e667 && _0x61ca49.push(_0x17e667);
        console.log(_0x61ca49.join("\n"));
        this.logs = this.logs.concat(_0x61ca49);
      }
    }
    log(..._0x1d62f8) {
      _0x1d62f8.length > 0 && (this.logs = [...this.logs, ..._0x1d62f8]);
      console.log(_0x1d62f8.join(this.logSeparator));
    }
    logErr(_0x15d830, _0x285b84) {
      const _0x3f310c = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3f310c ? this.log("", "❗️" + this.name + ", 错误!", _0x15d830.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x15d830);
    }
    wait(_0x2b8be1) {
      return new Promise(_0x2a828a => setTimeout(_0x2a828a, _0x2b8be1));
    }
    done(_0x478bc5 = {}) {
      const _0x526540 = new Date().getTime(),
        _0x2d2ac7 = (_0x526540 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2d2ac7 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x478bc5);
    }
  }(_0xc372d6, _0x38867d);
}