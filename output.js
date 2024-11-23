//Sat Nov 23 2024 08:40:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("苏周到签到");
let szd_cookie = ($.isNode() ? process.env.szd_cookie : $.getdata("szd_cookie")) || "";
let szd_deviceId = ($.isNode() ? process.env.szd_deviceId : $.getdata("szd_deviceId")) || "",
  szd_giUid = ($.isNode() ? process.env.szd_giUid : $.getdata("szd_giUid")) || "";
let szd_gtCid = ($.isNode() ? process.env.szd_gtCid : $.getdata("szd_gtCid")) || "";
const sm4 = require("sm-crypto").sm4,
  axios = require("axios");
const crypto = require("crypto"),
  {
    copyFileSync,
    rmSync
  } = require("fs"),
  {
    resourceLimits
  } = require("worker_threads");
let httpresult, result;
function sleep(_0x24803e) {
  var _0x2d9954 = new Date().getTime();
  while (new Date().getTime() - _0x2d9954 < _0x24803e) {
    continue;
  }
}
function sm(_0xbee465, _0xb7d1c2) {
  let _0x3cd611 = sm4.encrypt(_0xbee465, _0xb7d1c2),
    _0x1efceb = Buffer.from(_0x3cd611, "hex");
  let _0xf19b66 = _0x1efceb.toString("base64");
  return _0xf19b66;
}
function decryptSm(_0xf5f45e, _0x2ae61c) {
  let _0x4543e6 = Buffer.from(_0xf5f45e, "base64");
  let _0xe2e420 = sm4.decrypt(_0x4543e6, _0x2ae61c);
  return _0xe2e420;
}
function popu(_0x3f0f29, _0x4061a3, _0x2d33ac, _0xc05f00, _0x94df25, _0x2b15bb, _0x495310, _0x1156be, _0x43113e, _0x1974ca = "") {
  let _0x248654 = _0x2d33ac.split(" ");
  if (_0x1974ca == "") {
    const _0x536bd1 = {
      "User-Agent": "szdDefined(nt:Wifi) szdAPP(AP/1.0) szdClient/2.2.1 (Linux; Android 12; Xiaomi MiNote3; Build/20240207) XingjianApp MYSZAPP szd_SZGov",
      platform: "1",
      "X-Authorization": _0x2d33ac,
      "X-Device-Id": _0xc05f00,
      "X-SZD-Device-Id": _0xc05f00,
      "X-Terminal": "app",
      "X-SZD-TERMINAL": "app",
      "X-SZD-SIGNTYPE": "sm4",
      "X-Timestamp": _0x94df25,
      "X-Nonce": _0x2b15bb,
      accessToken: _0x248654[1],
      system: "android",
      deviceCode: "MiNote3",
      version: "12",
      network: "NETWORK_WIFI",
      appVersion: "2.2.1",
      deviceId: _0xc05f00,
      giUid: _0x1156be,
      gtCid: _0x43113e,
      "Accept-Language": "zh-CN",
      "X-Signature": _0x495310,
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      Host: "szdmobile.suzhou.gov.cn"
    };
    const _0x41de25 = {
      method: _0x3f0f29,
      url: _0x4061a3,
      headers: _0x536bd1
    };
    return _0x41de25;
  } else {
    const _0x57a299 = {
      "User-Agent": "szdDefined(nt:Wifi) szdAPP(AP/1.0) szdClient/2.2.1 (Linux; Android 12; Xiaomi MiNote3; Build/20240207) XingjianApp MYSZAPP szd_SZGov",
      platform: "1",
      "X-Authorization": _0x2d33ac,
      "X-Device-Id": _0xc05f00,
      "X-SZD-Device-Id": _0xc05f00,
      "X-Terminal": "app",
      "X-SZD-TERMINAL": "app",
      "X-SZD-SIGNTYPE": "sm4",
      "X-Timestamp": _0x94df25,
      "X-Nonce": _0x2b15bb,
      accessToken: _0x248654[1],
      system: "android",
      deviceCode: "MiNote3",
      version: "12",
      network: "NETWORK_WIFI",
      appVersion: "2.2.1",
      deviceId: _0xc05f00,
      giUid: _0x1156be,
      gtCid: _0x43113e,
      "Accept-Language": "zh-CN",
      "X-Signature": _0x495310,
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      Host: "szdmobile.suzhou.gov.cn"
    };
    const _0x5be6f1 = {
      method: _0x3f0f29,
      url: _0x4061a3,
      headers: _0x57a299,
      data: _0x1974ca
    };
    return _0x5be6f1;
  }
}
async function fetchData(_0x2f080c) {
  return axios(_0x2f080c).then(_0x5d26a2 => {
    if (_0x5d26a2.data) {
      if (typeof _0x5d26a2.data == "object") {
        httpresult = _0x5d26a2.data;
      } else {
        try {
          httpresult = JSON.parse(_0x5d26a2.data);
        } catch (_0x19900a) {
          httpresult = _0x5d26a2.data;
        }
      }
    }
    return _0x5d26a2.data;
  }).catch(_0x378d5f => {
    throw new Error(_0x378d5f);
  });
}
function md5(_0x3008d0) {
  const _0x1c754b = crypto.createHash("md5");
  _0x1c754b.update(_0x3008d0);
  return _0x1c754b.digest("hex");
}
async function qiandao(_0x3b560a, _0x17bab3, _0x4926c1, _0x5eaa0e) {
  const _0x4da57e = Math.floor(Date.now() / 1000);
  let _0x54355f = _0x4da57e + "440lUde7n8B",
    _0x4b331f = sm("type=SIGN", _0x4da57e + "500471c6926d26d3bc28cc");
  let _0x16d1e9 = encodeURIComponent(_0x4b331f),
    _0xe41c0b = md5("body=" + _0x16d1e9 + "&deviceid=" + _0x3b560a + "&method=POST&nonce=" + _0x54355f + "&secretkey=6562bff3efdc9aa5fd24b42c809b7730&timestamp=" + _0x4da57e + "&uri=/member-center/app/member/score/add"),
    _0x271307 = md5("deviceId=" + _0x3b560a + "&http_method=POST&platform=1&secretkey=YqPTbmHsxzNbc29ZhDPBCZXyTefuVHpn&uri=%2Fmember-center%2Fapp%2Fmember%2Fscore%2Fadd");
  let _0x1f4acb = "https://szdmobile.suzhou.gov.cn/member-center/app/member/score/add?deviceId=" + _0x3b560a + "&platform=1&signature=" + _0x271307;
  _0x4b331f = "body=" + _0x16d1e9;
  let _0x1b7951 = popu("post", _0x1f4acb, _0x17bab3, _0x3b560a, _0x4da57e, _0x54355f, _0xe41c0b, _0x4926c1, _0x5eaa0e, _0x4b331f);
  await fetchData(_0x1b7951);
  result = httpresult;
  msg = decryptSm(result.body, _0x4da57e + "500471c6926d26d3bc28cc");
  console.log(msg);
}
(async function () {
  sleep(1000);
  console.log("开始检测环境变量");
  if (szd_cookie) {
    console.log("找到环境变量");
    let _0xf532cd = szd_deviceId.split("@"),
      _0x5dd5ad = szd_cookie.split("@"),
      _0x18452f = szd_giUid.split("@"),
      _0x4b273a = szd_gtCid.split("@");
    if (_0x5dd5ad.length > 1) {
      console.log("发现多个账号");
    }
    for (let _0x3adfa8 = 0; _0x3adfa8 < _0x5dd5ad.length; _0x3adfa8++) {
      try {
        await qiandao(_0xf532cd[_0x3adfa8], _0x5dd5ad[_0x3adfa8], _0x18452f[_0x3adfa8], _0x4b273a[_0x3adfa8]);
      } catch (_0x9f3770) {
        console.error(_0x9f3770);
      }
    }
    process.exit();
  }
})();
function Env(_0x4ad1e7, _0x26a5e2) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x1dc989, _0x11c965) {
      this.name = _0x1dc989;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x11c965);
      console.log("🔔 " + this.name + " 开始运行：\n");
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
    getdata(_0x20ec19) {
      let _0x301ffa = this.getval(_0x20ec19);
      if (/^@/.test(_0x20ec19)) {
        let [, _0xeabd8a, _0x2e84a8] = /^@(.*?)\.(.*?)$/.exec(_0x20ec19),
          _0x2fc462 = _0xeabd8a ? this.getval(_0xeabd8a) : "";
        if (_0x2fc462) {
          try {
            let _0x2d3e33 = JSON.parse(_0x2fc462);
            _0x301ffa = _0x2d3e33 ? this.lodash_get(_0x2d3e33, _0x2e84a8, "") : _0x301ffa;
          } catch (_0x4282c2) {
            _0x301ffa = "";
          }
        }
      }
      return _0x301ffa;
    }
    setdata(_0x36dfa0, _0x259170) {
      let _0x396d66 = !1;
      if (/^@/.test(_0x259170)) {
        let [, _0x418ff6, _0x4bf5d6] = /^@(.*?)\.(.*?)$/.exec(_0x259170),
          _0x4895e1 = this.getval(_0x418ff6),
          _0x2e9771 = _0x418ff6 ? "null" === _0x4895e1 ? null : _0x4895e1 || "{}" : "{}";
        try {
          let _0x35367d = JSON.parse(_0x2e9771);
          this.lodash_set(_0x35367d, _0x4bf5d6, _0x36dfa0);
          _0x396d66 = this.setval(JSON.stringify(_0x35367d), _0x418ff6);
        } catch (_0x2eb633) {
          let _0x1a1ef2 = {};
          this.lodash_set(_0x1a1ef2, _0x4bf5d6, _0x36dfa0);
          _0x396d66 = this.setval(JSON.stringify(_0x1a1ef2), _0x418ff6);
        }
      } else {
        _0x396d66 = this.setval(_0x36dfa0, _0x259170);
      }
      return _0x396d66;
    }
    getval(_0x48a4ca) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x48a4ca) : this.isQuanX() ? $prefs.valueForKey(_0x48a4ca) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x48a4ca]) : this.data && this.data[_0x48a4ca] || null;
    }
    setval(_0x768051, _0x5e0a5d) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x768051, _0x5e0a5d) : this.isQuanX() ? $prefs.setValueForKey(_0x768051, _0x5e0a5d) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5e0a5d] = _0x768051, this.writedata(), !0) : this.data && this.data[_0x5e0a5d] || null;
    }
    send(_0x56e48b, _0x27bdaa, _0x1f7bf4 = () => {}) {
      if ("get" != _0x56e48b && "post" != _0x56e48b && "put" != _0x56e48b && "delete" != _0x56e48b) {
        console.log("无效的http方法：" + _0x56e48b);
        return;
      }
      const _0x4b0429 = {
        hints: !1
      };
      if ("get" == _0x56e48b && _0x27bdaa.headers ? (delete _0x27bdaa.headers["Content-Type"], delete _0x27bdaa.headers["Content-Length"]) : _0x27bdaa.body && _0x27bdaa.headers && (_0x27bdaa.headers["Content-Type"] || (_0x27bdaa.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
        const _0x21be7c = {
          "X-Surge-Skip-Scripting": !1
        };
        this.isSurge() && this.isNeedRewrite && (_0x27bdaa.headers = _0x27bdaa.headers || {}, Object.assign(_0x27bdaa.headers, _0x21be7c));
        let _0x27beae = {
          method: _0x56e48b,
          url: _0x27bdaa.url,
          headers: _0x27bdaa.headers,
          timeout: _0x27bdaa.timeout,
          data: _0x27bdaa.body
        };
        "get" == _0x56e48b && delete _0x27beae.data;
        $axios(_0x27beae).then(_0x531ec6 => {
          let {
            status: _0x32d286,
            request: _0x4af85d,
            headers: _0x2c4aea,
            data: _0x5accd1
          } = _0x531ec6;
          const _0x25f631 = {
            statusCode: _0x32d286,
            headers: _0x2c4aea,
            body: _0x5accd1
          };
          _0x1f7bf4(null, _0x4af85d, _0x25f631);
        }).catch(_0xe3428 => console.log(_0xe3428));
      } else {
        if (this.isQuanX()) {
          _0x27bdaa.method = _0x56e48b.toUpperCase();
          this.isNeedRewrite && (_0x27bdaa.opts = _0x27bdaa.opts || {}, Object.assign(_0x27bdaa.opts, _0x4b0429));
          $task.fetch(_0x27bdaa).then(_0xe97750 => {
            let {
              statusCode: _0x613e54,
              request: _0x123578,
              headers: _0x3579c3,
              body: _0x4034dc
            } = _0xe97750;
            const _0x51a872 = {
              statusCode: _0x613e54,
              headers: _0x3579c3,
              body: _0x4034dc
            };
            _0x1f7bf4(null, _0x123578, _0x51a872);
          }, _0x333f27 => _0x1f7bf4(_0x333f27));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: _0x18e34a,
              ..._0xa66506
            } = _0x27bdaa;
            const _0x413b70 = {
              followRedirect: !1
            };
            this.instance = this.got.extend(_0x413b70);
            this.instance[_0x56e48b](_0x18e34a, _0xa66506).then(_0x1df804 => {
              let {
                statusCode: _0x220b2f,
                request: _0x4d96e0,
                headers: _0x232787,
                body: _0x4611e6
              } = _0x1df804;
              const _0x18a3bc = {
                statusCode: _0x220b2f,
                headers: _0x232787,
                body: _0x4611e6
              };
              _0x1f7bf4(null, _0x4d96e0, _0x18a3bc);
            }, _0x4bd0b7 => {
              let {
                message: _0x3bd6f3,
                response: _0x14d29b
              } = _0x4bd0b7;
              _0x1f7bf4(_0x3bd6f3, _0x14d29b, _0x14d29b && _0x14d29b.body);
            });
          }
        }
      }
    }
    time(_0x2defe5) {
      let _0x6386a = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      for (let _0x204161 in /(y+)/.test(_0x2defe5) && (_0x2defe5 = _0x2defe5.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), _0x6386a) new RegExp("(" + _0x204161 + ")").test(_0x2defe5) && (_0x2defe5 = _0x2defe5.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x6386a[_0x204161] : ("00" + _0x6386a[_0x204161]).substr(("" + _0x6386a[_0x204161]).length)));
      return _0x2defe5;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x19b2d1 = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var _0x36abcc = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x36abcc.sendNotify(this.name, _0x19b2d1);
      } else {
        this.msg(_0x19b2d1);
      }
    }
    logAndNotify(_0x1c6488) {
      console.log(_0x1c6488);
      this.notifyStr += _0x1c6488;
      this.notifyStr += "\n";
    }
    msg(_0x5c2cdf = t, _0x1300e1 = "", _0x2fc17d = "", _0xf2d8b6) {
      let _0x4132be = _0x39a1de => {
        if (!_0x39a1de) {
          return _0x39a1de;
        }
        if ("string" == typeof _0x39a1de) {
          return this.isLoon() ? _0x39a1de : this.isQuanX() ? {
            "open-url": _0x39a1de
          } : this.isSurge() ? {
            url: _0x39a1de
          } : void 0;
        }
        if ("object" == typeof _0x39a1de) {
          if (this.isLoon()) {
            let _0x34d087 = _0x39a1de.openUrl || _0x39a1de.url || _0x39a1de["open-url"],
              _0x409e22 = _0x39a1de.mediaUrl || _0x39a1de["media-url"];
            const _0x5bc6da = {
              openUrl: _0x34d087,
              mediaUrl: _0x409e22
            };
            return _0x5bc6da;
          }
          if (this.isQuanX()) {
            let _0x6c472d = _0x39a1de["open-url"] || _0x39a1de.url || _0x39a1de.openUrl,
              _0x22146c = _0x39a1de["media-url"] || _0x39a1de.mediaUrl;
            const _0x4fbf6f = {
              "open-url": _0x6c472d,
              "media-url": _0x22146c
            };
            return _0x4fbf6f;
          }
          const _0x251389 = {
            url: _0x39a1de.url || _0x39a1de.openUrl || _0x39a1de["open-url"]
          };
          if (this.isSurge()) {
            return _0x251389;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x5c2cdf, _0x1300e1, _0x2fc17d, _0x4132be(_0xf2d8b6)) : this.isQuanX() && $notify(_0x5c2cdf, _0x1300e1, _0x2fc17d, _0x4132be(_0xf2d8b6)));
      let _0x57d416 = ["", "============== 系统通知 =============="];
      _0x57d416.push(_0x5c2cdf);
      _0x1300e1 && _0x57d416.push(_0x1300e1);
      _0x2fc17d && _0x57d416.push(_0x2fc17d);
      console.log(_0x57d416.join("\n"));
    }
    getMin(_0x3eb466, _0x587da2) {
      return _0x3eb466 < _0x587da2 ? _0x3eb466 : _0x587da2;
    }
    getMax(_0x5c1a78, _0xcf7c18) {
      return _0x5c1a78 < _0xcf7c18 ? _0xcf7c18 : _0x5c1a78;
    }
    padStr(_0x4faafa, _0x2bc358, _0x212b81 = "0") {
      let _0x5bbbff = String(_0x4faafa),
        _0x40fe35 = _0x2bc358 > _0x5bbbff.length ? _0x2bc358 - _0x5bbbff.length : 0,
        _0x162aa3 = "";
      for (let _0x437836 = 0; _0x437836 < _0x40fe35; _0x437836++) {
        _0x162aa3 += _0x212b81;
      }
      return _0x162aa3 + _0x5bbbff;
    }
    json2str(_0x532419, _0x571202, _0x26be9f = !1) {
      let _0x54b70f = [];
      for (let _0x298878 of Object.keys(_0x532419).sort()) {
        let _0x177574 = _0x532419[_0x298878];
        _0x177574 && _0x26be9f && (_0x177574 = encodeURIComponent(_0x177574));
        _0x54b70f.push(_0x298878 + "=" + _0x177574);
      }
      return _0x54b70f.join(_0x571202);
    }
    str2json(_0x43536c, _0x1bf53a = !1) {
      let _0x3b079d = {};
      for (let _0x543b46 of _0x43536c.split("#")) {
        if (!_0x543b46) {
          continue;
        }
        let _0x5bac22 = _0x543b46.indexOf("=");
        if (-1 == _0x5bac22) {
          continue;
        }
        let _0x2c7253 = _0x543b46.substr(0, _0x5bac22),
          _0x1dce5b = _0x543b46.substr(_0x5bac22 + 1);
        _0x1bf53a && (_0x1dce5b = decodeURIComponent(_0x1dce5b));
        _0x3b079d[_0x2c7253] = _0x1dce5b;
      }
      return _0x3b079d;
    }
    randomString(_0x20b7c6, _0x113e2c = "abcdef0123456789") {
      let _0x1771c5 = "";
      for (let _0x480aeb = 0; _0x480aeb < _0x20b7c6; _0x480aeb++) {
        _0x1771c5 += _0x113e2c.charAt(Math.floor(Math.random() * _0x113e2c.length));
      }
      return _0x1771c5;
    }
    randomList(_0x3cc837) {
      let _0x214109 = Math.floor(Math.random() * _0x3cc837.length);
      return _0x3cc837[_0x214109];
    }
    wait(_0x3bd889) {
      return new Promise(_0x38a3b0 => setTimeout(_0x38a3b0, _0x3bd889));
    }
    done(_0x558752 = {}) {
      let _0x204912 = new Date().getTime(),
        _0x56aa6d = (_0x204912 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x56aa6d + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x558752);
    }
  }(_0x4ad1e7, _0x26a5e2);
}