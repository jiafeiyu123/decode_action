//Sat May 16 2026 04:04:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios");
const crypto = require("crypto");
const SALT = "superjing";
const BASE_URL = "https://api.quwayouxuan.com";
const TASKID_SIGN = "1";
const TASKID_VIDEO = "40";
const HEADERS = {
  Host: "api.quwayouxuan.com",
  Connection: "keep-alive",
  "content-type": "application/json",
  charset: "utf-8",
  Referer: "https://servicewechat.com/wxddaa0832e6acc5f1/122/page-frame.html",
  "User-Agent": "Mozilla/5.0 (Linux; Android 16; 23013RK75C Build/BP2A.250605.031.A3; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/142.0.7444.173 Mobile Safari/537.36 XWEB/1420229 MMWEBSDK/20251006 MMWEBID/8747 MicroMessenger/8.0.66.2980(0x28004252) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
};
const BASE_PARAMS = {
  os: "miniProgram",
  deviceabout: "miniProgram",
  version: "1.3.00"
};
function log(_0x18410c) {
  const _0x3a3827 = new Date();
  const _0x4fe152 = String(_0x3a3827.getHours()).padStart(2, "0");
  const _0x180c23 = String(_0x3a3827.getMinutes()).padStart(2, "0");
  const _0x2744b6 = String(_0x3a3827.getSeconds()).padStart(2, "0");
  console.log("[" + _0x4fe152 + ":" + _0x180c23 + ":" + _0x2744b6 + "] " + _0x18410c);
}
function sleep(_0x1b0cf7) {
  return new Promise(_0x2fb897 => setTimeout(_0x2fb897, _0x1b0cf7));
}
function generateKey(_0x28afdd) {
  const _0x92f5ad = Object.keys(_0x28afdd).sort();
  let _0x15a184 = "";
  for (const _0x4d1e40 of _0x92f5ad) {
    _0x4d1e40 !== "key" && (_0x15a184 += _0x4d1e40 + "=" + _0x28afdd[_0x4d1e40]);
  }
  _0x15a184 += SALT;
  _0x15a184 = _0x15a184.replace(/ /g, "");
  const _0x17fe9e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "*": "%2A"
  };
  for (const [_0x22cb3d, _0x177578] of Object.entries(_0x17fe9e)) {
    _0x15a184 = _0x15a184.split(_0x22cb3d).join(_0x177578);
  }
  _0x15a184 = encodeURIComponent(_0x15a184);
  return crypto.createHash("sha1").update(_0x15a184, "utf-8").digest("hex");
}
async function makeRequest(_0x5199ce, _0x1a014d, _0x5e6dcc = "GET", _0x3e2213 = null) {
  try {
    {
      const _0x365cf3 = String(Math.floor(Date.now() / 1000) * 1000);
      const _0x11432f = {
        ...BASE_PARAMS,
        current_time: _0x365cf3,
        token: _0x1a014d
      };
      if (_0x5e6dcc === "GET") {
        Object.assign(_0x11432f, _0x3e2213 || {});
        _0x11432f.key = generateKey(_0x11432f);
        const _0x466daf = {
          params: _0x11432f,
          headers: HEADERS,
          timeout: 30000
        };
        const _0x48aaf0 = await axios.get(_0x5199ce, _0x466daf);
        return _0x48aaf0.data;
      } else {
        {
          const _0x1ebd87 = {
            ..._0x11432f,
            ...(_0x3e2213 || {})
          };
          const _0x11a714 = _0x1ebd87;
          _0x11a714.key = generateKey(_0x11a714);
          const _0x4e0e9b = Object.entries(_0x11a714).map(([_0x4a45ff, _0x1c661b]) => encodeURIComponent(_0x4a45ff) + "=" + encodeURIComponent(_0x1c661b)).join("&");
          const _0x2e0f81 = {
            ...HEADERS,
            "content-type": "application/x-www-form-urlencoded"
          };
          const _0x2d1ea0 = {
            headers: _0x2e0f81,
            timeout: 30000
          };
          const _0x5a82dd = await axios.post(_0x5199ce, _0x4e0e9b, _0x2d1ea0);
          return _0x5a82dd.data;
        }
      }
    }
  } catch {
    return null;
  }
}
async function sendFeishu(_0x5b8289, _0x415fc4) {
  const _0x2e97d7 = process.env.FEISHU_WEBHOOK || "";
  if (!_0x2e97d7) {
    return;
  }
  try {
    const _0x2b346d = {
      tag: "plain_text",
      content: _0x5b8289
    };
    const _0xbe958a = {
      tag: "markdown",
      content: _0x415fc4
    };
    const _0x23ef07 = {
      msg_type: "interactive",
      card: {}
    };
    _0x23ef07.card.header = {};
    _0x23ef07.card.elements = [_0xbe958a];
    _0x23ef07.card.header.title = _0x2b346d;
    _0x23ef07.card.header.template = "blue";
    const _0x34f619 = {
      "Content-Type": "application/json"
    };
    const _0x35c5bd = {
      headers: _0x34f619,
      timeout: 10000
    };
    await axios.post(_0x2e97d7, _0x23ef07, _0x35c5bd);
  } catch (_0x4cf4bb) {
    log("[飞书] 发送异常: " + _0x4cf4bb.message);
  }
}
async function getTaskList(_0x3bff02) {
  const _0xae8830 = BASE_URL + "/task/task/taskList.do";
  const _0x5ee6b4 = {
    source: "3"
  };
  const _0x3048a0 = await makeRequest(_0xae8830, _0x3bff02, "POST", _0x5ee6b4);
  if (_0x3048a0 && _0x3048a0.code === 1) {
    const _0x38303e = _0x3048a0.data || {};
    const _0x14168e = _0x38303e.userinfo || {};
    log("👤 " + (_0x14168e.username || "") + " | 💰 " + (_0x14168e.points || 0) + "分 | 💵 " + (_0x14168e.money || 0) + "元");
    const _0x486c3a = {
      data: _0x38303e,
      userinfo: _0x14168e
    };
    return _0x486c3a;
  }
  const _0x4c3ad2 = {
    data: null,
    userinfo: null
  };
  return _0x4c3ad2;
}
async function doSignIn(_0x34f831) {
  log("📅 执行签到...");
  const _0x247e60 = BASE_URL + "/task/task/taskSuccrss.do";
  const _0x10ab1e = {
    taskid: TASKID_SIGN,
    subtask_id: "0"
  };
  const _0x85dc26 = await makeRequest(_0x247e60, _0x34f831, "GET", _0x10ab1e);
  if (_0x85dc26 && _0x85dc26.code === 1) {
    {
      const _0x1ecbb3 = (_0x85dc26.data || {}).rice || 0;
      log("✅ 签到成功 +" + _0x1ecbb3 + "分");
      return true;
    }
  }
  return false;
}
async function doVideoTask(_0x4af56f, _0x22e230) {
  log("📺 视频任务开始 (剩余" + _0x22e230 + "次)");
  const _0x32feb7 = BASE_URL + "/task/task/taskSuccrss.do";
  for (let _0x1bf24e = 0; _0x1bf24e < _0x22e230; _0x1bf24e++) {
    const _0x1ae04d = {
      taskid: TASKID_VIDEO,
      subtask_id: "0"
    };
    const _0x5b132c = await makeRequest(_0x32feb7, _0x4af56f, "GET", _0x1ae04d);
    if (_0x5b132c && _0x5b132c.code === 1) {
      log("  ✅ 第" + (_0x1bf24e + 1) + "次 +60分");
      if (_0x1bf24e < _0x22e230 - 1) {
        const _0x1f8bf8 = Math.floor(Math.random() * 6) + 30;
        log("  ⏱️ 等待" + _0x1f8bf8 + "秒...");
        await sleep(_0x1f8bf8 * 1000);
      }
    } else {
      log("  ❌ 第" + (_0x1bf24e + 1) + "次失败");
      break;
    }
  }
}
function loadTokens() {
  const _0x1d5535 = [];
  const _0x3eba42 = (process.env.JXZH_TOKENS || "").trim();
  if (_0x3eba42) {
    const _0x33e377 = _0x3eba42.split(/[@\n]/);
    for (const _0x25d695 of _0x33e377) {
      {
        const _0x5d3bdb = _0x25d695.trim();
        if (_0x5d3bdb) {
          _0x1d5535.push(_0x5d3bdb);
        }
      }
    }
    if (_0x1d5535.length > 0) {
      return _0x1d5535;
    }
  }
  for (let _0x57be5f = 1; _0x57be5f < 1000; _0x57be5f++) {
    {
      const _0x539e25 = process.env[`JXZH${_0x57be5f}`];
      if (_0x539e25) {
        {
          _0x1d5535.push(_0x539e25.trim());
        }
      } else {
        break;
      }
    }
  }
  return _0x1d5535;
}
async function processAccount(_0x49a5f3) {
  log("=".repeat(40));
  const {
    data: _0x547c85,
    userinfo: _0x42dd60
  } = await getTaskList(_0x49a5f3);
  if (!_0x547c85) {
    log("❌ 获取任务失败");
    return {};
  }
  const _0x1c31cb = (_0x547c85.tasklist || {}).day || [];
  let _0x4d3e69 = "已签到";
  let _0x18d433 = 0;
  for (const _0x3f0cf0 of _0x1c31cb) {
    {
      const _0x250f4c = _0x3f0cf0.tid;
      if (_0x250f4c === TASKID_SIGN) {
        _0x4d3e69 = _0x3f0cf0.status === "2" ? "已签到" : "未签到";
      } else {
        _0x250f4c === TASKID_VIDEO && (_0x18d433 = parseInt(_0x3f0cf0.last_count || "0", 10));
      }
    }
  }
  log("📊 状态: " + _0x4d3e69 + " | 视频剩余: " + _0x18d433);
  let _0x4224f8 = "已签到";
  if (_0x4d3e69 === "未签到") {
    const _0x49214d = await doSignIn(_0x49a5f3);
    _0x4224f8 = _0x49214d ? "签到成功" : "签到失败";
    await sleep(3000);
  }
  let _0x4b9b1c = "无任务";
  _0x18d433 > 0 && (await doVideoTask(_0x49a5f3, _0x18d433), _0x4b9b1c = "已执行" + _0x18d433 + "次", await sleep(5000));
  log("✨ 任务执行完毕");
  const _0x42cea5 = _0x42dd60 ? _0x42dd60.username || "未知" : "未知";
  const _0x2af19a = _0x42dd60 ? _0x42dd60.points || 0 : 0;
  const _0x1b5a24 = _0x42dd60 ? _0x42dd60.money || 0 : 0;
  const _0x33f068 = {
    username: _0x42cea5,
    points: _0x2af19a,
    money: _0x1b5a24,
    sign: _0x4224f8,
    video: _0x4b9b1c
  };
  return _0x33f068;
}
async function main() {
  console.log("===== 匠心忠华 积分换物任务脚本 =====");
  const _0x5e546a = new Date();
  const _0x36752d = _0x5e546a.getFullYear() + "-" + String(_0x5e546a.getMonth() + 1).padStart(2, "0") + "-" + String(_0x5e546a.getDate()).padStart(2, "0") + " " + String(_0x5e546a.getHours()).padStart(2, "0") + ":" + String(_0x5e546a.getMinutes()).padStart(2, "0") + ":" + String(_0x5e546a.getSeconds()).padStart(2, "0");
  console.log("执行时间：" + _0x36752d);
  const _0x511eda = loadTokens();
  console.log("[👥 有效账号] " + _0x511eda.length + "个");
  if (_0x511eda.length === 0) {
    log("❌ 未找到账号变量，请配置 JXZH_TOKENS 或 JXZH1~JXZHn");
    return;
  }
  log("🚀 匠心忠华 多账号任务启动 (共" + _0x511eda.length + "个账号)");
  const _0x25111f = [];
  for (let _0x2badee = 0; _0x2badee < _0x511eda.length; _0x2badee++) {
    log("\n【账号" + (_0x2badee + 1) + "】");
    const _0x3addcd = await processAccount(_0x511eda[_0x2badee]);
    _0x3addcd && _0x3addcd.username && (_0x3addcd.index = _0x2badee + 1, _0x25111f.push(_0x3addcd));
    if (_0x2badee < _0x511eda.length - 1) {
      const _0x4f29b0 = Math.floor(Math.random() * 3) + 3;
      log("⏱️ 等待" + _0x4f29b0 + "分钟后执行下一个账号...");
      await sleep(_0x4f29b0 * 60 * 1000);
    }
  }
  const _0x2ae0fd = process.env.FEISHU_WEBHOOK || "";
  if (_0x2ae0fd && _0x25111f.length > 0) {
    const _0x2fa296 = _0x25111f.map(_0x10633f => "**账号" + _0x10633f.index + "** " + _0x10633f.username + "\n积分: " + _0x10633f.points + " | 余额: " + _0x10633f.money + "元\n签到: " + _0x10633f.sign + " | 视频: " + _0x10633f.video);
    const _0xa61422 = _0x2fa296.join("\n\n");
    const _0x3e0d9d = {
      hour12: false
    };
    const _0x99f387 = new Date().toLocaleString("zh-CN", _0x3e0d9d).replace(/\//g, "-");
    await sendFeishu("匠心忠华 积分换物报告 (" + _0x99f387 + ")", _0xa61422);
    log("📨 飞书通知已发送");
  }
}
main().catch(_0x1e0445 => log("❌ 异常: " + _0x1e0445.message));