//Wed Apr 15 2026 07:51:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const Env = require("./env"),
  CryptoJS = require("crypto-js"),
  $ = new Env("大象新闻"),
  CKS = ($.isNode() ? process.env.dxxwck : $.getdata("dxxwck")) || "";
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
})().catch(c => {
  $.log(c);
}).finally(() => {
  $.done({});
});
async function main() {
  if (!CKS) {
    console.log("未填写ck");
    return;
  }
  let d = Array.isArray(CKS) ? CKS : CKS.split("\n");
  for (const e in d) {
    {
      let g = d[e];
      phone[e] = g.split("#")[0];
      password[e] = g.split("#")[1];
      aliAccount[e] = g.split("#")[2];
      aliName[e] = g.split("#")[3];
      headArr[e] = "【账号 [" + phone[e] + "] 】";
      await begin(e);
    }
  }
  while (true) {
    await $.wait(5000);
    if (end.length == d.length) break;
  }
  notice && (await sendMsg(notice));
}
async function begin(c) {
  let e = "大象新闻-" + phone[c],
    f = true,
    g = $.getdata(e) || "";
  if (g) {
    authorization[c] = g.authorization;
    refreshToken[c] = g.refreshToken;
    let h = g.expires;
    new Date().getTime() < h && (f = false, print(c, "缓存登录成功"));
  }
  if (f) {
    {
      let j = await commonPost(c, "/mobile/uaa-app/oauth/token", "grant_type=password&username=%7B%22principal%22%3A%22" + phone[c] + "%22%2C%22authenticationType%22%3A%22mobile%22%7D&password=" + getPwd(c));
      if (j.hasOwnProperty("access_token")) authorization[c] = "Bearer " + j.access_token, refreshToken[c] = j.refresh_token, $.setdata({
        "authorization": authorization[c],
        "refreshToken": refreshToken[c],
        "expires": new Date().getTime() + j.expires_in * 1000
      }, e), print(c, "登录成功");else {
        {
          print(c, "登录失败:" + j.msg);
          end.push(c);
          return;
        }
      }
    }
  }
  await signTask(c, "327411516979156");
  end.push(c);
}
async function signTask(c, d) {
  let f = await intGet(c, "/integration/p/duiba/autoLoginUrl?dbredirect=https:%2F%2F90580-activity.dexfu.cn%2Fsign%2Fcomponent%2Fpage%3FsignOperatingId%3D" + d);
  if (f.code == 0) {
    {
      let g = f.result,
        h = await activityLocationGet(g);
      cookie[c] = await activityCookieGet(h);
      await signin(c, d);
    }
  } else print(c, "获取兑吧登录链接失败:" + f.msg);
}
async function signin(c, d) {
  const e = {
    "cxiWw": function (i, j, k) {
      return i(j, k);
    },
    "ZtlyM": function (i, j) {
      return i(j);
    },
    "pIguu": function (i, j) {
      return i(j);
    },
    "QJUlY": function (i, j) {
      return i === j;
    },
    "mkEqT": "gAvRe",
    "WjPUg": function (i, j, k, l) {
      return i(j, k, l);
    },
    "IOPuI": function (i, j, k, l) {
      return i(j, k, l);
    },
    "FxOzL": function (i, j, k) {
      return i(j, k);
    },
    "IuUNb": "uMUqX",
    "XBlzY": "LlkXy",
    "BHEjR": function (i, j, k) {
      return i(j, k);
    }
  };
  let f = await activityGet(c, "/sign/component/page?signOperatingId=" + d + "&from=login&spm=90580.1.1.1"),
    g = /<script[^>]*>[\s]*\/\*[\s]*\*[\s]*获取token[\s]*\*\/[\s]*([\s\S]*?)<\/script>/i.exec(f)[1];
  eval(g);
  key = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
  print(c, "获取key:" + key);
  let h = await activityGet(c, "/sign/component/index?signOperatingId=" + d + "&preview=false&_=" + Date.now());
  if (h.success) {
    if (h.data.signResult) print(c, "今日已签到");else {
      {
        let j = await activityPost(c, "/chw/ctoken/getToken", "timestamp=" + Date.now());
        eval(j.token);
        token = window[key];
        let k = await activityPost(c, "/sign/component/doSign?_=" + Date.now(), "signOperatingId=" + d + "&token=" + token);
        k.success ? print(c, "签到成功") : print(c, "签到失败:" + k.message);
      }
    }
    await signLottery(c, d);
  } else print(c, "获取抽奖信息失败:" + lotCnt.desc);
}
async function signLottery(c, d) {
  let f = await activityGet(c, "/sign/component/index?signOperatingId=" + d + "&preview=false&_=" + Date.now());
  if (f.success) {
    {
      if (f.data.times > 0) {
        {
          let h = await activityPost(c, "/chw/ctoken/getToken", "timestamp=" + Date.now());
          eval(h.token);
          token = window[key];
          let j = await activityPost(c, "/sign/component/doJoin?_=" + Date.now(), "signOperatingId=" + d + "&token=" + token);
          if (j.success) {
            if (!j.data.orderNum) {
              {
                print(c, JSON.stringify(j));
                return;
              }
            }
            let l = j.data.orderNum,
              m = 0;
            while (m == 0) {
              {
                let o = await activityGet(c, "/plugin/getOrderStatus?orderId=" + l + "&_=" + Date.now());
                m = o.result;
                if (m == 0) {} else {
                  (!o.lottery || o.lottery.type == "thanks") && print(c, "谢谢参与❌", true);
                  if (o.lottery.type == "alipay") {
                    print(c, "抽奖获得：" + o.lottery.title + "✅", true);
                    let p = o.lottery.link,
                      q = p.split("?")[1],
                      s = {},
                      t = q.split("&");
                    for (let v = 0, w = t.length; v < w; v++) {
                      let x = t[v].split("=");
                      s[x[0]] = x[1];
                    }
                    let u = s.recordId;
                    if (aliName[c] && aliAccount[c]) {
                      let y = await activityGet(c, "/activity/takePrizeNew?recordId=" + u + "&dbnewopen"),
                        z = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(y)[1];
                      eval(z);
                      key = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                      let A = await activityPost(c, "/ctoken/getToken.do");
                      eval(A.token);
                      token = window[key];
                      let B = await activityPost(c, "/activity/doTakePrize", "alipay=" + aliAccount[c] + "&realname=" + encodeURI(aliName[c]) + "&recordId=" + u + "&token=" + token);
                      print(c, B.message);
                    } else print(c, "请设置支付宝姓名和账号");
                  }
                }
              }
            }
          } else print(c, "抽奖失败:" + j.message);
        }
      }
    }
  } else print(c, "获取抽奖信息失败:" + lotCnt.desc);
}
async function commonPost(c, d, e, f = 5) {
  if (f <= 0) {
    throw new Error("请求重试次数超限");
  }
  const h = {
    "url": "https://pubmod.hntv.tv" + d,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Host": "pubmod.hntv.tv",
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "User-Agent": "okhttp/4.9.0"
    },
    "body": e
  };
  return new Promise((j, k) => {
    $.post(h, async (m, n, o) => {
      try {
        if (m) {
          {
            await $.wait(3000);
            throw new Error("没有响应");
          }
        }
        j(JSON.parse(o));
      } catch (r) {
        console.log(d + " API请求失败，剩余重试次数" + (f - 1));
        commonPost(c, d, e, f - 1).then(j).catch(k);
      }
    });
  });
}
async function intGet(c, d, e = 5) {
  const f = {
    "njHTV": function (h, i) {
      return h < i;
    },
    "RFiqe": function (h, i, j) {
      return h(i, j);
    },
    "eFmPa": function (h, i) {
      return h === i;
    },
    "VSPWK": function (h, i) {
      return h(i);
    },
    "NaGxe": function (h, i) {
      return h - i;
    },
    "VnOPV": function (h, i, j, k) {
      return h(i, j, k);
    },
    "jzdss": function (h, i) {
      return h !== i;
    },
    "LtaNo": "LkFlt",
    "YBbau": "xIqDg",
    "CXYBe": "integration.hntv.tv",
    "ZDtoX": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
    "lVIeH": "https://static.hntv.tv/",
    "XaZgh": "gzip, deflate",
    "XqiSY": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
  };
  if (e <= 0) throw new Error("请求重试次数超限");
  const g = {
    "url": "https://integration.hntv.tv" + d,
    "headers": {
      "host": "integration.hntv.tv",
      "accept": "application/json, text/plain, */*",
      "authorization": authorization[c],
      "user-agent": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
      "origin": "https://static.hntv.tv",
      "x-requested-with": "com.hnr.dxxw",
      "referer": "https://static.hntv.tv/",
      "accept-encoding": "gzip, deflate",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    }
  };
  return new Promise((h, i) => {
    $.get(g, async (k, l, m) => {
      try {
        {
          if (k) {
            await $.wait(3000);
            throw new Error("没有响应");
          }
          h(JSON.parse(m));
        }
      } catch (p) {
        console.log(d + " API请求失败，剩余重试次数" + (e - 1));
        intGet(c, d, e - 1).then(h).catch(i);
      }
    });
  });
}
async function activityGet(c, d, e = 5) {
  if (e <= 0) {
    throw new Error("请求重试次数超限");
  }
  return new Promise((h, i) => {
    const k = {
      "url": "https://90580-activity.dexfu.cn" + d,
      "headers": {
        "host": "90580-activity.dexfu.cn",
        "user-agent": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "x-requested-with": "com.hnr.dxxw",
        "referer": "https://90580-activity.dexfu.cn/chw/visual-editor/skins?id=268299&from=login&spm=90580.1.1.1",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": cookie[c]
      }
    };
    $.get(k, async (l, m, n) => {
      try {
        {
          if (l) {
            await $.wait(3000);
            throw new Error("没有响应");
          }
          await $.wait(2000);
          try {
            h(JSON.parse(n));
          } catch (q) {
            h(n);
          }
        }
      } catch (r) {
        console.log(d + " API请求失败，剩余重试次数" + (e - 1));
        activityGet(c, d, e - 1).then(h).catch(i);
      }
    });
  });
}
async function activityPost(c, d, e = "", f = 2) {
  if (f <= 0) {
    throw new Error("请求重试次数超限");
  }
  return new Promise((i, j) => {
    {
      const l = {
        "url": "https://90580-activity.dexfu.cn" + d,
        "headers": {
          "Accept": "application/json",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "Connection": "keep-alive",
          "Content-Type": typeof e === "string" ? "application/x-www-form-urlencoded" : "application/json",
          "Cookie": cookie[c],
          "Host": "94227.activity-42.m.duiba.com.cn",
          "Origin": "https://94227.activity-42.m.duiba.com.cn",
          "user-agent": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
          "X-Requested-With": "XMLHttpRequest"
        },
        "body": typeof e === "string" ? e : JSON.stringify(e)
      };
      $.post(l, async (m, n, o) => {
        try {
          if (m) {
            await $.wait(3000);
            throw new Error("没有响应");
          }
          await $.wait(2000);
          i(JSON.parse(o));
        } catch (p) {
          console.log(d + " API请求失败，剩余重试次数" + (f - 1));
          activityPost(c, d, e, f - 1).then(i).catch(j);
        }
      });
    }
  });
}
async function activityLocationGet(c) {
  const d = {
    "vZSfe": "uDIee",
    "bvzrn": function (e) {
      return e();
    },
    "uixZI": "90580.activity-42.m.duiba.com.cn",
    "XJdGj": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
    "eiDmb": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "ZsDQn": "gzip, deflate",
    "wkDlQ": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
  };
  return new Promise(e => {
    const g = {
      "url": c,
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
    $.get(g, async (h, i, j) => {
      try {
        h ? (console.log("" + JSON.stringify(h)), console.log(c + " API请求失败，请检查网路重试")) : e(i.headers.location);
      } catch (k) {
        $.logErr(k, i);
      } finally {
        e();
      }
    });
  });
}
async function activityCookieGet(c) {
  const d = {
    "YHvBk": function (e, f) {
      return e !== f;
    },
    "iiorp": "jSeyg",
    "QhLTK": function (e, f) {
      return e + f;
    },
    "RfFda": "kwbRr",
    "tIpLv": "90580-activity.dexfu.cn",
    "YSMDJ": "Mozilla/5.0 (Linux; Android 9; MI 9 Build/PQ3A.190605.12141616; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 dxpayua",
    "fkcVb": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "fPLML": "com.hnr.dxxw",
    "ZMpui": "https://static.hntv.tv/",
    "qzZAo": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
  };
  return new Promise(e => {
    const f = {
        "EXGEo": function (h, i) {
          return h !== i;
        },
        "GLbrK": "jSeyg",
        "CtDAn": "Set-Cookie",
        "mwyFk": function (h, i) {
          return h < i;
        },
        "ZLtCC": function (h, i) {
          return h + i;
        },
        "kjNTU": function (h, i) {
          return h !== i;
        },
        "wQQHo": "kwbRr",
        "MbdVf": "bGHex",
        "BpXgH": function (h) {
          return h();
        }
      },
      g = {
        "url": c,
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
    $.get(g, async (h, j, k) => {
      try {
        {
          if (h) console.log("" + JSON.stringify(h)), console.log(c + " API请求失败，请检查网路重试");else {
            let n = "",
              o = j.headers["set-cookie"] || j.headers["Set-Cookie"];
            for (let p = 0; p < o.length; p++) {
              n += o[p].split(";")[0] + ";";
            }
            e(n);
          }
        }
      } catch (q) {
        $.logErr(q, j);
      } finally {
        e();
      }
    });
  });
}
function getPwd(d) {
  let f = encodeURIComponent(password[d]);
  f = CryptoJS.enc.Utf8.parse(f);
  let g = stringify(f),
    h = Buffer.from("em" + g).toString("base64");
  return encodeURIComponent(h);
}
function stringify(d) {
  let h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var j = d.words,
    k = d.sigBytes,
    l = h;
  d.clamp();
  for (var m = [], p = 0; p < k; p += 3) for (var q = (j[p >>> 2] >>> 24 - p % 4 * 8 & 255) << 16 | (j[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255) << 8 | j[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, s = 0; s < 4 && p + 0.75 * s < k; s++) m.push(l.charAt(q >>> 6 * (3 - s) & 63));
  var u = l.charAt(64);
  if (u) {
    for (; m.length % 4;) m.push(u);
  }
  return m.join("");
}
function print(c, d, e = false) {
  let g = "" + headArr[c] + d;
  console.log(g);
  e && (notice += g + "\n");
}
async function sendMsg(c) {
  if ($.isNode()) {
    let f = "";
    try {
      f = require("./sendNotify");
    } catch (g) {
      f = require("../sendNotify");
    }
    await f.sendNotify($.name, c);
  } else $.msg($.name, "", c);
}