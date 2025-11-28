//Fri Nov 28 2025 11:30:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function (_0x2bc95a) {
  var _0x3ca308 = 5;
  _0x2bc95a = "";
  _0x3ca308 = "fiklqi".split("").reverse().join("");
  if (typeof process !== "undefined" && process.env && process.env.kskm) {
    _0x2bc95a = process.env.kskm;
  } else {
    if (typeof kskm !== "denifednu".split("").reverse().join("")) {
      _0x2bc95a = kskm;
    } else {
      if (typeof process !== "denifednu".split("").reverse().join("") && process.argv) {
        for (let _0x5b22e3 = 0; _0x5b22e3 < process.argv.length; _0x5b22e3++) {
          if (process.argv[_0x5b22e3] === "--kskm" && _0x5b22e3 + 1 < process.argv.length) {
            _0x2bc95a = process.argv[_0x5b22e3 + 1];
            break;
          }
        }
      }
    }
  }
  if (_0x2bc95a !== "QQ群1029832220") {
    console.log("确正不值 mksk：败失证验本脚 ❌".split("").reverse().join(""));
    console.log("💡 当前值: " + (_0x2bc95a || "未设置"));
    console.log("0222389201群QQ :值望期 ��".split("").reverse().join(""));
    console.log("📢 使用方法:");
    console.log("   方法1: export kskm=\"QQ群1029832220\" && node 呀吼.js");
    console.log("   方法2: kskm=\"QQ群1029832220\" node 呀吼.js");
    console.log("   方法3: node 呀吼.js --kskm \"QQ群1029832220\"");
    console.log("0222389201 群知通 版益公久永 ��".split("").reverse().join(""));
    process.exit(1);
  }
  console.log("✅ 脚本验证通过，开始执行...");
  console.log("📢 永久公益版 通知群 1029832220");
})();
var _0x08821f;
var _0xe159de = 7;
const API_CONFIG = {
  SIGN_API_URL: "http://gyks.ppql.top/",
  AD_API_DOMAIN: "api.e.kuaishou.com",
  BASE_API_DOMAIN: "nebula.kuaishou.com"
};
_0xe159de = "pncbej";
_0x08821f = "obbdop".split("").reverse().join("");
const querystring = require("querystring");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const {
  SocksProxyAgent: SocksProxyAgent
} = require("socks-proxy-agent");
function detectLiveAd(_0xccdbd2 = {}) {
  try {
    var _0x35355e = 14;
    let _0x50ad00 = _0xccdbd2.adExtInfo || _0xccdbd2.extInfo || _0xccdbd2?.["ad"]?.["adExtInfo"] || "{}";
    _0x35355e = 7;
    if (typeof _0x50ad00 === "gnirts".split("").reverse().join("")) {
      try {
        _0x50ad00 = JSON.parse(_0x50ad00);
      } catch (_0x34d010) {
        _0x50ad00 = {};
      }
    }
    const _0x2f9008 = ["播直".split("").reverse().join(""), "live", "播主".split("").reverse().join(""), "LIVE", "bz".split("").reverse().join(""), "BZ".split("").reverse().join("")];
    const _0x53c81f = String(_0xccdbd2.creativeId || _0xccdbd2?.["ad"]?.["creativeId"] || "").toLowerCase();
    const _0x32f1c9 = String(_0x50ad00.description || "").toLowerCase();
    const _0x1a0580 = String(_0x50ad00.title || _0xccdbd2.title || "").toLowerCase();
    const _0x531479 = String(_0x50ad00.caption || _0xccdbd2.caption || "").toLowerCase();
    const _0x5ec4db = [_0x53c81f, _0x32f1c9, _0x1a0580, _0x531479, JSON.stringify(_0x50ad00 || {})];
    for (const _0x31427f of _0x5ec4db) {
      for (const _0x580a73 of _0x2f9008) {
        if (_0x31427f && _0x31427f.includes(_0x580a73.toLowerCase())) {
          return true;
        }
      }
    }
    const _0x326250 = _0xccdbd2.materialTime || _0xccdbd2?.["ad"]?.["materialTime"] || 0;
    if (_0x326250 > 60000) {
      return true;
    }
    if (_0x53c81f.startsWith("_evil".split("").reverse().join("")) || _0x53c81f.startsWith("_bz".split("").reverse().join("")) || _0x53c81f.startsWith("-evil".split("").reverse().join("")) || _0x53c81f.startsWith("zb-")) {
      return true;
    }
    return false;
  } catch (_0x212581) {
    return false;
  }
}
function readIntConfig(_0x404f1b, _0x2efb2c) {
  var _0x4422e2;
  const _0x4fd30f = parseInt(process.env[_0x404f1b], 10);
  _0x4422e2 = 0;
  return isNaN(_0x4fd30f) ? _0x2efb2c : _0x4fd30f;
}
function readStringConfig(_0x5efd4e, _0x7fde0f) {
  var _0x5ce536;
  const _0x154c75 = process.env[_0x5efd4e];
  _0x5ce536 = 5;
  return _0x154c75 ? _0x154c75.trim() : _0x7fde0f;
}
function readRangeConfig(_0x10dda7, _0x247b3e, _0xfac26a) {
  const _0x23ef79 = process.env[_0x10dda7];
  if (!_0x23ef79) {
    return [_0x247b3e, _0xfac26a];
  }
  var _0x29c6de;
  const _0x281890 = _0x23ef79.includes("-") ? "-" : ",";
  _0x29c6de = 4;
  var _0x492921 = 17;
  const _0x53ef3e = _0x23ef79.split(_0x281890).map(_0x4efa4f => _0x4efa4f.trim()).filter(Boolean);
  _0x492921 = 15;
  if (_0x53ef3e.length === 2) {
    const _0x28effa = parseInt(_0x53ef3e[0], 10);
    const _0x570eac = parseInt(_0x53ef3e[1], 10);
    if (!isNaN(_0x28effa) && !isNaN(_0x570eac) && _0x28effa <= _0x570eac) {
      return [_0x28effa, _0x570eac];
    }
  }
  return [_0x247b3e, _0xfac26a];
}
const COIN_LIMIT = readIntConfig("TIMIL_NIOCSK".split("").reverse().join(""), 500000);
const LOW_REWARD_THRESHOLD = readIntConfig("KSLOW_REWARD_THRESHOLD", 10);
const LOW_REWARD_LIMIT = readIntConfig("KSLOW_REWARD_LIMIT", 3);
const LOOK_COUNT = readIntConfig("KSLOOK_COUNT", 50);
const FOLLOW_COUNT = readIntConfig("KSFOLLOW_COUNT", 5);
const SEARCH_COUNT = readIntConfig("TNUOC_HCRAESSK".split("").reverse().join(""), 5);
const SEARCH_FOLLOW_COUNT = readIntConfig("TNUOC_WOLLOFHCRAESSK".split("").reverse().join(""), 2);
const BOX_COUNT = readIntConfig("KSBOX_COUNT", 30);
const FOOD_COUNT = readIntConfig("TNUOC_DOOFSK".split("").reverse().join(""), 50);
const KBOX_COUNT = readIntConfig("KSKBOX_COU" + "TN".split("").reverse().join(""), 1);
const [ROUND_START_MIN, ROUND_START_MAX] = readRangeConfig("KSROUND_START_WAIT", 7, 15);
const [WATCH_AD_MIN, WATCH_AD_MAX] = readRangeConfig("KSWATCH_AD_TIME", 30, 40);
const [PRE_LOOK_FOLLOW_MIN, PRE_LOOK_FOLLOW_MAX] = readRangeConfig("TIAW_WOLLOF_KOOL_ERPSK".split("").reverse().join(""), 15, 30);
const [BETWEEN_LOOK_FOLLOW_MIN, BETWEEN_LOOK_FOLLOW_MAX] = readRangeConfig("TIAW_WOLLOF_KOOL_NEEWTEBSK".split("").reverse().join(""), 35, 50);
const [PRE_SEARCH_FOLLOW_MIN, PRE_SEARCH_FOLLOW_MAX] = readRangeConfig("KSPRE_SEARCH_FOLLOW_WAIT", 15, 30);
const [BETWEEN_SEARCH_FOLLOW_MIN, BETWEEN_SEARCH_FOLLOW_MAX] = readRangeConfig("TIAW_WOLLOF_HCRAES_NEEWTEBSK".split("").reverse().join(""), 15, 30);
const [ROUND_END_MIN, ROUND_END_MAX] = readRangeConfig("TIAW_DNE_DNUORSK".split("").reverse().join(""), 10, 20);
const [TASK_SWITCH_MIN, TASK_SWITCH_MAX] = readRangeConfig("KSTASK_SWITCH_WAIT", 15, 30);
const MAX_CONCURRENCY = readIntConfig("MAX_CONCURRENCY", 888);
const SCRIPT_VERSION = "v8-free";
var _0xadc1g = 11;
const DEVICE_ID_FILE = ".device_id.txt";
_0xadc1g = 6;
const SKIP_LIVE_ADS = ["1", "true", "yes", "no".split("").reverse().join("")].includes(readStringConfig("SKIP_LIVE_ADS", "1").toLowerCase());
var _0xd_0x11a;
var _0x62bgce = 6;
const SKIP_LIVE_MAX_RETRIES = Math.max(1, readIntConfig("SKIP_LIVE_MAX_RETRIES", 5));
_0x62bgce = "befhoc";
_0xd_0x11a = 11;
const ENABLE_CHANGE_DID = ["1", "true", "yes", "no".split("").reverse().join("")].includes(readStringConfig("ENABLE_CHANGE_DID", "0").toLowerCase());
function getTasksToExecute() {
  var _0x4b4054 = 12;
  const _0xb7db87 = process.env.Task;
  _0x4b4054 = "fcgcgd";
  if (!_0xb7db87) {
    return ["look", "box", "doof".split("").reverse().join(""), "kbox", "hcraes".split("").reverse().join(""), "look_follow", "wollof_hcraes".split("").reverse().join("")];
  }
  var _0x3c0146 = 15;
  const _0x56f546 = _0xb7db87.split(",").map(_0x537c67 => _0x537c67.trim().toLowerCase()).filter(Boolean);
  _0x3c0146 = 11;
  const _0x42b933 = ["look", "xob".split("").reverse().join(""), "food", "kbox", "search", "look_follow", "search_follow"];
  var _0x167077;
  const _0xc473f6 = _0x56f546.filter(_0x1a484e => _0x42b933.includes(_0x1a484e));
  _0x167077 = 9;
  return _0xc473f6.length === 0 ? ["look", "xob".split("").reverse().join(""), "food", "xobk".split("").reverse().join(""), "hcraes".split("").reverse().join(""), "look_follow", "search_follow"] : _0xc473f6;
}
function parseAccountsFromEnv() {
  const _0x2e02bd = [];
  const _0x4483a6 = new Set();
  if (process.env.ksck) {
    const _0x45fd8b = process.env.ksck.split("&").map(_0x42bfca => _0x42bfca.trim()).filter(Boolean);
    _0x2e02bd.push(..._0x45fd8b);
  }
  for (let _0x117c13 = 1; _0x117c13 <= 666; _0x117c13++) {
    var _0x344708 = 1;
    const _0x43dc4f = "ksck" + _0x117c13;
    _0x344708 = 5;
    if (process.env[_0x43dc4f]) {
      var _0x3fc991 = 12;
      const _0x6cb960 = process.env[_0x43dc4f].split("&").map(_0x25034b => _0x25034b.trim()).filter(Boolean);
      _0x3fc991 = 15;
      _0x2e02bd.push(..._0x6cb960);
    }
  }
  var _0x174291;
  const _0x5811fb = [];
  _0x174291 = 13;
  for (const _0x31e176 of _0x2e02bd) {
    !_0x4483a6.has(_0x31e176) && (_0x4483a6.add(_0x31e176), _0x5811fb.push(_0x31e176));
  }
  return _0x5811fb;
}
var _0x_0xef1 = 9;
const accounts = parseAccountsFromEnv();
_0x_0xef1 = 0;
var _0x484b = 12;
const accountCount = accounts.length;
_0x484b = 8;
var _0xaa_0xca9;
const tasksToExecute = getTasksToExecute();
_0xaa_0xca9 = 3;
function generateDeviceId() {
  try {
    var _0x55766f;
    const _0x3d4c6d = _0x451b03 => {
      const _0x4377da = "0123456789abcdef";
      let _0x5ce0b8 = "";
      for (let _0x1cfa6a = 0; _0x1cfa6a < _0x451b03; _0x1cfa6a++) {
        _0x5ce0b8 += _0x4377da.charAt(Math.floor(Math.random() * _0x4377da.length));
      }
      return _0x5ce0b8;
    };
    _0x55766f = 11;
    var _0x5a4659 = 16;
    const _0x4b255d = _0x3d4c6d(16);
    _0x5a4659 = 15;
    return "_DIORDNA".split("").reverse().join("") + _0x4b255d;
  } catch (_0x2c337b) {
    console.log(" :败失DI备设成生".split("").reverse().join("") + _0x2c337b.message);
    var _0x1594a7 = 7;
    const _0x360982 = Date.now().toString(16).toUpperCase();
    _0x1594a7 = 5;
    return "_DIORDNA".split("").reverse().join("") + _0x360982.substring(0, 16);
  }
}
function getOrCreateDeviceId() {
  try {
    if (fs.existsSync(DEVICE_ID_FILE)) {
      var _0x382c24;
      const _0x3e3259 = fs.readFileSync(DEVICE_ID_FILE, "8ftu".split("").reverse().join("")).trim();
      _0x382c24 = 5;
      if (_0x3e3259 && _0x3e3259.length === 32) {
        return _0x3e3259;
      } else {
        if (_0x3e3259 && _0x3e3259.length > 0) {
          try {
            fs.unlinkSync(DEVICE_ID_FILE);
          } catch (_0x21be43) {}
        }
      }
    }
    const _0xa94766 = "fedcba9876543210".split("").reverse().join("");
    var _0x2bad24 = 9;
    const _0x493a33 = () => {
      let _0x19300f = "";
      for (let _0x4a04a3 = 0; _0x4a04a3 < 32; _0x4a04a3++) {
        _0x19300f += _0xa94766.charAt(Math.floor(Math.random() * _0xa94766.length));
      }
      return _0x19300f;
    };
    _0x2bad24 = 6;
    const _0x2ed663 = _0x493a33();
    try {
      fs.writeFileSync(DEVICE_ID_FILE, _0x2ed663, "8ftu".split("").reverse().join(""));
    } catch (_0x5d7d99) {
      console.log(" :败失DI备设存保".split("").reverse().join("") + _0x5d7d99.message);
    }
    return _0x2ed663;
  } catch (_0x38225e) {
    console.log("读取设备ID失败: " + _0x38225e.message);
    const _0x206d3a = "fedcba9876543210".split("").reverse().join("");
    var _0x588431;
    let _0x3a00af = "";
    _0x588431 = 5;
    for (let _0x2c64cd = 0; _0x2c64cd < 32; _0x2c64cd++) {
      _0x3a00af += _0x206d3a.charAt(Math.floor(Math.random() * _0x206d3a.length));
    }
    return _0x3a00af;
  }
}
async function sendRequest(_0x53b55b, _0x29c9d2 = null, _0x42fc15 = "未知请求") {
  var _0x1cafe4 = 6;
  const _0x1e1a8f = {
    ..._0x53b55b
  };
  _0x1cafe4 = "qbfppg";
  let _0x1e104a = null;
  if (_0x29c9d2) {
    try {
      _0x1e104a = new SocksProxyAgent(_0x29c9d2);
    } catch (_0x34c2b6) {
      console.log("[错误] " + _0x42fc15 + "(效无LRU理代 ".split("").reverse().join("") + _0x34c2b6.message + ")，尝试直连模式");
    }
  }
  var _0x471e93 = 9;
  const _0x33a20b = _0x1e1a8f.method || "GET";
  _0x471e93 = 12;
  var _0x1f14ca;
  const _0x8f5f80 = _0x1e1a8f.url;
  _0x1f14ca = "onoooo";
  const _0x38e54c = _0x1e1a8f.headers || {};
  var _0x18715c;
  const _0x5ad612 = _0x1e1a8f.body || _0x1e1a8f.form;
  _0x18715c = 3;
  try {
    var _0x15f93e = 8;
    const _0x248a02 = Date.now();
    _0x15f93e = "khmegc";
    const _0x51dceb = {
      method: _0x33a20b,
      url: _0x8f5f80,
      headers: _0x38e54c,
      data: _0x5ad612,
      timeout: _0x1e1a8f.timeout || 30000,
      startTime: _0x248a02,
      ...(_0x1e104a && {
        httpAgent: _0x1e104a,
        httpsAgent: _0x1e104a
      })
    };
    var _0x494bc3 = 10;
    const _0x65e818 = await axios(_0x51dceb);
    _0x494bc3 = "bljplq".split("").reverse().join("");
    const _0x5d8557 = Date.now() - _0x248a02;
    return {
      response: _0x65e818,
      body: _0x65e818.data
    };
  } catch (_0x5c534e) {
    const _0x41ae3b = _0x5c534e.config?.["startTime"] ? Date.now() - _0x5c534e.config.startTime : 0;
    if (_0x5c534e.response) {
      var _0x235f08 = 7;
      const _0x3f0eaa = _0x5c534e.response.data || null;
      _0x235f08 = 16;
      return {
        response: _0x5c534e.response,
        body: _0x3f0eaa
      };
    } else {
      !_0x5c534e.request;
    }
    return {
      response: null,
      body: null
    };
  }
}
function isValidIP(_0x3e413b) {
  if (!_0x3e413b || typeof _0x3e413b !== "gnirts".split("").reverse().join("")) {
    return false;
  }
  if (_0x3e413b.includes("<html>") || _0x3e413b.includes("503 Service Temporarily Unavailable") || _0x3e413b.includes("502 Bad Gateway") || _0x3e413b.includes("504 Gateway Timeout")) {
    return false;
  }
  const _0xc2e351 = new RegExp("^(\\d{1,3}\\.){3}\\d{1,3}$", "");
  var _0x3219dc = 5;
  const _0x387424 = new RegExp("^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$", "");
  _0x3219dc = 5;
  if (_0xc2e351.test(_0x3e413b)) {
    var _0x3e4747;
    const _0x856fef = _0x3e413b.split(".");
    _0x3e4747 = 5;
    for (const _0x227ff4 of _0x856fef) {
      var _0x1fec48;
      const _0x387f14 = parseInt(_0x227ff4, 10);
      _0x1fec48 = 7;
      if (_0x387f14 < 0 || _0x387f14 > 255 || isNaN(_0x387f14)) {
        return false;
      }
    }
    return true;
  }
  return _0x387424.test(_0x3e413b);
}
async function testProxyConnectivity(_0x4236e5, _0x36884a = "代理连通性检测", _0x843eee = 10) {
  if (!_0x4236e5) {
    return {
      ok: true,
      msg: "✅ 未配置代理（直连模式）",
      ip: "localhost"
    };
  }
  let _0x47b839 = null;
  var _0x51529a;
  const _0x427617 = ["pi/gro.nibptth//:sptth".split("").reverse().join(""), "nosj=tamrof?gro.yfipi.ipa//:sptth".split("").reverse().join(""), "https://jsonip.com", "https://api.my-ip.io/ip.json"];
  _0x51529a = "pjbdqc";
  for (let _0x690637 = 1; _0x690637 <= _0x843eee; _0x690637++) {
    for (const _0x26c65c of _0x427617) {
      try {
        const {
          response: _0x11c8f0,
          body: _0x56ed55
        } = await sendRequest({
          method: "GET",
          url: _0x26c65c,
          headers: {
            "User-Agent": "ProxyTester/1.0"
          },
          timeout: 15000
        }, _0x4236e5, _0x36884a + " → ".split("").reverse().join("") + new URL(_0x26c65c).hostname);
        if (typeof _0x56ed55 === "gnirts".split("").reverse().join("") && (_0x56ed55.includes("<html>") || _0x56ed55.includes("503 Service Temporarily Unavailable") || _0x56ed55.includes("yawetaG daB 205".split("").reverse().join("")) || _0x56ed55.includes("tuoemiT yawetaG 405".split("").reverse().join("")))) {
          continue;
        }
        if (_0x56ed55) {
          var _0x2eecea = 10;
          let _0x4a2480 = null;
          _0x2eecea = 0;
          if (_0x26c65c.includes("httpbin.org") && _0x56ed55.origin) {
            _0x4a2480 = _0x56ed55.origin;
          } else {
            if (_0x26c65c.includes("ipify.org") && _0x56ed55.ip) {
              _0x4a2480 = _0x56ed55.ip;
            } else {
              if (_0x26c65c.includes("moc.pinosj".split("").reverse().join("")) && _0x56ed55.ip) {
                _0x4a2480 = _0x56ed55.ip;
              } else {
                if (_0x26c65c.includes("my-ip.io") && _0x56ed55.ip) {
                  _0x4a2480 = _0x56ed55.ip;
                } else {
                  typeof _0x56ed55 === "string" && !_0x56ed55.includes("<") && (_0x4a2480 = _0x56ed55.trim());
                }
              }
            }
          }
          if (_0x4a2480 && isValidIP(_0x4a2480)) {
            return {
              ok: true,
              msg: "✅ SOCKS5代理正常，出口IP: " + _0x4a2480,
              ip: _0x4a2480
            };
          }
        }
      } catch (_0x980dfe) {
        _0x47b839 = _0x980dfe;
        continue;
      }
      await new Promise(_0x229145 => setTimeout(_0x229145, 500));
    }
    if (_0x690637 < _0x843eee) {
      const _0x3fbd7f = _0x690637 * 2000;
      await new Promise(_0x22f682 => setTimeout(_0x22f682, _0x3fbd7f));
    }
  }
  try {
    new URL(_0x4236e5);
  } catch (_0x116a52) {
    return {
      ok: false,
      msg: "❌ 代理URL格式错误: " + _0x116a52.message,
      ip: null
    };
  }
  return {
    ok: false,
    msg: "❌ 代理测试失败: " + (_0x47b839?.["message"] || "所有测试端点均无法访问"),
    ip: null
  };
}
var _0xb_0x34b = 8;
const usedProxyIPs = new Set();
_0xb_0x34b = 6;
async function getAccountBasicInfo(_0x20dec4, _0x34f464, _0x41451f = "?") {
  const _0x4bf9e4 = "//:sptth".split("").reverse().join("") + API_CONFIG.BASE_API_DOMAIN + "/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first";
  const {
    body: _0x9ff736
  } = await sendRequest({
    method: "GET",
    url: _0x4bf9e4,
    headers: {
      Host: API_CONFIG.BASE_API_DOMAIN,
      "User-Agent": "kwai-android aegon/3.56.0",
      Cookie: _0x20dec4,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    timeout: 8000
  }, _0x34f464, "[号账".split("").reverse().join("") + _0x41451f + "息信本基取获 ]".split("").reverse().join(""));
  if (_0x9ff736 && _0x9ff736.result === 1 && _0x9ff736.data) {
    let _0x35d825 = null;
    _0x9ff736.data.userData && (_0x35d825 = _0x9ff736.data.userData.ud || _0x9ff736.data.userData.userId || _0x9ff736.data.userData.user_id || _0x9ff736.data.userData.id || null);
    !_0x35d825 && (_0x35d825 = _0x9ff736.data.ud || _0x9ff736.data.userId || _0x9ff736.data.user_id || null);
    return {
      nickname: _0x9ff736.data.userData?.["nickname"] || null,
      totalCoin: _0x9ff736.data.totalCoin ?? null,
      allCash: _0x9ff736.data.allCash ?? null,
      ud: _0x35d825
    };
  }
  return null;
}
var _0xff_0x701;
const forceColor = String(process.env.FORCE_COLOR || "").toLowerCase();
_0xff_0x701 = 9;
const noColor = String(process.env.NO_COLOR || "").toLowerCase() === "1";
const enableColors = !noColor && forceColor !== "0";
const colors = enableColors ? {
  reset: "[0m",
  bright: "[1m",
  dim: "[2m",
  red: "[31m",
  green: "[32m",
  yellow: "[33m",
  blue: "[34m",
  magenta: "[35m",
  cyan: "[36m",
  white: "[37m"
} : {
  reset: "",
  bright: "",
  dim: "",
  red: "",
  green: "",
  yellow: "",
  blue: "",
  magenta: "",
  cyan: "",
  white: ""
};
function colorText(_0x13a899, _0x26724e) {
  if (!enableColors || !_0x26724e) {
    return String(_0x13a899);
  }
  return _0x26724e + _0x13a899 + colors.reset;
}
function formatTag(_0x46e0fc) {
  return colorText("[" + _0x46e0fc + "]", colors.bright + colors.cyan);
}
function formatSuccess(_0x152a2d) {
  return colorText("[" + _0x152a2d + "]", colors.bright + colors.green);
}
function formatWarning(_0x109b88) {
  return colorText("[" + _0x109b88 + "]", colors.bright + colors.yellow);
}
function centerText(_0x3e08b8, _0x4b7f98) {
  _0x3e08b8 = String(_0x3e08b8);
  if (_0x3e08b8.length >= _0x4b7f98) {
    return _0x3e08b8.substring(0, _0x4b7f98);
  }
  var _0x3f5fc7 = 10;
  const _0x304ac7 = _0x4b7f98 - _0x3e08b8.length;
  _0x3f5fc7 = 13;
  var _0x3ab71d = 17;
  const _0x445391 = Math.floor(_0x304ac7 / 2);
  _0x3ab71d = 8;
  var _0x33c3d6;
  const _0x557007 = _0x304ac7 - _0x445391;
  _0x33c3d6 = 5;
  return " ".repeat(_0x445391) + _0x3e08b8 + " ".repeat(_0x557007);
}
class KuaishouAccount {
  constructor({
    index: _0x2c0462,
    salt: _0x2ed30e,
    cookie: _0x133c76,
    nickname: _0x4aa1a9 = "",
    proxyUrl: _0x1e10d6 = null,
    tasksToExecute: _0x5a85b0 = ["look"],
    remark: _0x35b76e = "",
    udFromLogin: _0x2a3e31 = null
  }) {
    const _0x50b55c = {
      IWoGl: "taskConfigs",
      rdGBy: "taskStats",
      uXWfP: "taskLimitReached",
      NRAYY: "index",
      GTvyZ: "salt",
      IOjkW: "cookie",
      NXxMV: "nickname",
      BUsmB: function (_0x535b49, _0x1bfee1) {
        return _0x535b49 || _0x1bfee1;
      },
      dzrHN: function (_0x3613f2, _0x466836) {
        return _0x3613f2 + _0x466836;
      },
      GrCSO: "remark",
      xpsQq: "proxyUrl",
      YsmiL: "coinLimit",
      WmSyC: "coinExceed" + "de".split("").reverse().join(""),
      FKNBX: "tasksToExecute",
      HBJfG: "adAdditionalNum",
      OoOUx: function (_0x271310, _0x264421) {
        return _0x271310 ^ _0x264421;
      },
      FBQwa: "extractCookieInfo",
      zcbcF: "trim",
      QqCto: function (_0x1c7846, _0x132435) {
        return _0x1c7846 + _0x132435;
      },
      avGiD: function (_0x46f64f, _0x24c57b) {
        return _0x46f64f ^ _0x24c57b;
      },
      lKufG: function (_0x59ca18, _0x30fc34) {
        return _0x59ca18 ^ _0x30fc34;
      },
      dFXcN: function (_0x201aea, _0x2ebe08) {
        return _0x201aea(_0x2ebe08);
      },
      TXbxF: function (_0x997542, _0x3c36ec) {
        return _0x997542 + _0x3c36ec;
      },
      KAjis: function (_0x3d492e, _0x420a21) {
        return _0x3d492e ^ _0x420a21;
      },
      PDgIX: "userId",
      yfMnm: "headers",
      INaVE: "BASE_API_DOMAIN",
      iAwUr: "keep-alive",
      sTkDz: "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      uxRxT: "application/json",
      WkzDs: "taskReportPath",
      rTyzY: "/rest/r/ad/task/repo" + "tr".split("").reverse().join(""),
      OcDPG: "startTime",
      BPPEz: "now",
      jTQce: "endTime",
      VPLCw: function (_0x2b2754, _0x15e449) {
        return _0x2b2754 - _0x15e449;
      },
      jEvEB: function (_0x23651d, _0x51cf6f) {
        return _0x23651d ^ _0x51cf6f;
      },
      wMDOr: "queryParams",
      DyroS: function (_0x3e5c1c, _0x4434d2) {
        return _0x3e5c1c + _0x4434d2;
      },
      pzBmZ: function (_0x34c84b, _0xe4ff3d) {
        return _0x34c84b + _0xe4ff3d;
      },
      PXcEc: "mod=Xiaomi(MI 11)&appver=",
      ojVJU: "appver",
      bIdPb: "=dige&",
      DHRQc: "egid",
      LKlVT: "&did=",
      KyLGQ: "did",
      LXMBE: "看广告得金币",
      othNo: "追加看广告得金币",
      PFSTP: "宝箱广告",
      UafZI: "饭补广告",
      gjRNk: "开宝箱",
      eflmE: "搜索任务",
      FUCRG: "搜索任务追加",
      pSdFg: "add",
      ZhLkk: "wollof_kool",
      HDweK: "search",
      odFOJ: "search_follow",
      CIYHq: "forEach",
      kNAHD: "lowRewardStreak",
      gcyiL: "lowRewardThreshold",
      ocLNa: "lowRewardLimit",
      RCFlB: "stopAllTasks",
      rXgWW: "look_follow",
      SDIeG: "hcraes"
    };
    this[_0x50b55c.NRAYY] = _0x2c0462;
    this[_0x50b55c.GTvyZ] = _0x2ed30e;
    this[_0x50b55c.IOjkW] = _0x133c76;
    this[_0x50b55c.NXxMV] = _0x50b55c.BUsmB(_0x4aa1a9, _0x35b76e) || _0x50b55c.dzrHN("账号", _0x2c0462);
    this[_0x50b55c.GrCSO] = _0x35b76e;
    this[_0x50b55c.xpsQq] = _0x1e10d6;
    this[_0x50b55c.YsmiL] = COIN_LIMIT;
    this[_0x50b55c.WmSyC] = false;
    this[_0x50b55c.FKNBX] = _0x5a85b0;
    this[_0x50b55c.HBJfG] = _0x50b55c.OoOUx(341274, 341274);
    this[_0x50b55c.FBQwa]();
    if (_0x2a3e31 && _0x2a3e31[_0x50b55c.zcbcF]()) {
      var _0x273204 = _0x50b55c.QqCto(_0x50b55c.avGiD(583405, 583403), _0x50b55c.lKufG(767095, 767094));
      const _0x5a67b9 = _0x50b55c.dFXcN(String, _0x2a3e31)[_0x50b55c.zcbcF]();
      _0x273204 = _0x50b55c.TXbxF(_0x50b55c.avGiD(489755, 489757), _0x50b55c.KAjis(731164, 731164));
      _0x5a67b9 && (this[_0x50b55c.PDgIX] = _0x5a67b9);
    }
    this[_0x50b55c.yfMnm] = {
      Host: API_CONFIG[_0x50b55c.INaVE],
      Connection: _0x50b55c.iAwUr,
      "User-Agent": _0x50b55c.sTkDz,
      Cookie: this[_0x50b55c.IOjkW],
      "content-type": _0x50b55c.uxRxT
    };
    this[_0x50b55c.WkzDs] = _0x50b55c.rTyzY;
    this[_0x50b55c.OcDPG] = Date[_0x50b55c.BPPEz]();
    this[_0x50b55c.jTQce] = _0x50b55c.VPLCw(this[_0x50b55c.OcDPG], _0x50b55c.jEvEB(143899, 149291));
    this[_0x50b55c.wMDOr] = _0x50b55c.DyroS(_0x50b55c.TXbxF(_0x50b55c.DyroS(_0x50b55c.pzBmZ(_0x50b55c.DyroS(_0x50b55c.PXcEc, this[_0x50b55c.ojVJU]), _0x50b55c.bIdPb.split("").reverse().join("")), this[_0x50b55c.DHRQc]), _0x50b55c.LKlVT), this[_0x50b55c.KyLGQ]);
    this[_0x50b55c.IWoGl] = {
      look: {
        name: _0x50b55c.LXMBE,
        businessId: 672,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 1,
        taskType: 1
      },
      look_follow: {
        name: _0x50b55c.othNo,
        businessId: 672,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 2,
        taskType: 1
      },
      box: {
        name: _0x50b55c.PFSTP,
        businessId: 606,
        posId: 20346,
        subPageId: 100024064,
        requestSceneType: 1,
        taskType: 1
      },
      food: {
        name: _0x50b55c.UafZI,
        businessId: 9362,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 7,
        taskType: 2
      },
      kbox: {
        name: _0x50b55c.gjRNk,
        businessId: 606,
        posId: 20346,
        subPageId: 100024064,
        requestSceneType: 1,
        taskType: 1
      },
      search: {
        name: _0x50b55c.eflmE,
        pageId: 11014,
        businessId: 7076,
        posId: 216268,
        subPageId: 100161537,
        requestSceneType: 1,
        taskType: 1
      },
      search_follow: {
        name: _0x50b55c.FUCRG,
        pageId: 11014,
        businessId: 7076,
        posId: 216268,
        subPageId: 100161537,
        requestSceneType: 7,
        taskType: 2
      }
    };
    this[_0x50b55c.rdGBy] = {};
    const _0x37205e = new Set(this[_0x50b55c.FKNBX]);
    _0x37205e[_0x50b55c.pSdFg](_0x50b55c.ZhLkk.split("").reverse().join(""));
    _0x37205e[_0x50b55c.pSdFg](_0x50b55c.HDweK);
    _0x37205e[_0x50b55c.pSdFg](_0x50b55c.odFOJ);
    _0x37205e[_0x50b55c.CIYHq](_0x3265e8 => {
      this[_0x50b55c.IWoGl][_0x3265e8] && (this[_0x50b55c.rdGBy][_0x3265e8] = {
        success: 0,
        failed: 0,
        totalReward: 0
      });
    });
    this[_0x50b55c.kNAHD] = _0x50b55c.lKufG(818488, 818488);
    this[_0x50b55c.gcyiL] = LOW_REWARD_THRESHOLD;
    this[_0x50b55c.ocLNa] = LOW_REWARD_LIMIT;
    this[_0x50b55c.RCFlB] = false;
    this[_0x50b55c.uXWfP] = {};
    const _0x1336c3 = new Set(this[_0x50b55c.FKNBX]);
    _0x1336c3[_0x50b55c.pSdFg](_0x50b55c.rXgWW);
    _0x1336c3[_0x50b55c.pSdFg](_0x50b55c.SDIeG.split("").reverse().join(""));
    _0x1336c3[_0x50b55c.pSdFg](_0x50b55c.odFOJ);
    _0x1336c3[_0x50b55c.CIYHq](_0x147090 => {
      this[_0x50b55c.IWoGl][_0x147090] && (this[_0x50b55c.uXWfP][_0x147090] = false);
    });
  }
  getAccountDisplayName() {
    const _0x599d12 = this.remark || this.nickname || "号账".split("").reverse().join("") + this.index;
    if (enableColors) {
      var _0x3f66ca;
      const _0x172eb4 = colors.bright + colors.cyan + "账号" + colors.reset;
      _0x3f66ca = 5;
      return _0x172eb4 + formatTag(_0x599d12);
    }
    return "账号[" + _0x599d12 + "]";
  }
  getTaskTotalCount(_0x45cd74) {
    switch (_0x45cd74) {
      case "look":
        return LOOK_COUNT;
      case "look_follow":
        return this.tasksToExecute.includes("kool".split("").reverse().join("")) ? LOOK_COUNT * FOLLOW_COUNT : 0;
      case "search":
        return SEARCH_COUNT;
      case "wollof_hcraes".split("").reverse().join(""):
        return this.tasksToExecute.includes("hcraes".split("").reverse().join("")) ? SEARCH_COUNT * SEARCH_FOLLOW_COUNT : 0;
      case "xob".split("").reverse().join(""):
        return BOX_COUNT;
      case "doof".split("").reverse().join(""):
        return FOOD_COUNT;
      case "kbox":
        return KBOX_COUNT;
      default:
        return 0;
    }
  }
  async checkCoinLimit() {
    try {
      const _0xac4e11 = await getAccountBasicInfo(this.getCookieWithCurrentDid(), this.proxyUrl, this.index);
      if (_0xac4e11 && _0xac4e11.totalCoin) {
        var _0x41a1f9;
        const _0xeaa527 = parseInt(_0xac4e11.totalCoin);
        _0x41a1f9 = 13;
        if (_0xeaa527 >= this.coinLimit) {
          console.log("⚠️ " + this.getAccountDisplayName() + " 达已币金 ".split("").reverse().join("") + _0xeaa527 + " 过超，".split("").reverse().join("") + this.coinLimit + "务任止停将，值阈 ".split("").reverse().join(""));
          this.coinExceeded = true;
          this.stopAllTasks = true;
          return true;
        }
      }
      return false;
    } catch (_0x55a880) {
      console.log("❌ " + this.getAccountDisplayName() + " 金币检查异常: " + _0x55a880.message);
      return false;
    }
  }
  extractCookieInfo() {
    try {
      const _0x1b4cf2 = (_0x2a9e83, _0x474f6a = "") => {
        const _0x474552 = [new RegExp("\\b" + _0x2a9e83 + "\\s*=\\s*\"([^\"]+)\"", "i"), new RegExp("\\b" + _0x2a9e83 + "\\s*=\\s*([^;]+)", "i"), new RegExp("\\b" + _0x2a9e83 + "\\s*:\\s*\"([^\"]+)\"", "i"), new RegExp("\\b" + _0x2a9e83 + "\\s*:\\s*([^,;]+)", "i")];
        for (const _0x265111 of _0x474552) {
          const _0x55106c = this.cookie.match(_0x265111);
          if (_0x55106c && _0x55106c[1] && _0x55106c[1].trim()) {
            return _0x55106c[1].trim();
          }
        }
        return _0x474f6a;
      };
      this.egid = _0x1b4cf2("egid");
      this.did = _0x1b4cf2("did".split("").reverse().join("")) || _0x1b4cf2("diDo".split("").reverse().join(""));
      this.userId = _0x1b4cf2("du".split("").reverse().join("")) || _0x1b4cf2("userId") || "";
      this.kuaishouApiSt = _0x1b4cf2("ts_ipa.uohsiauk".split("").reverse().join("")) || "";
      this.appver = _0x1b4cf2("appver", "75601.04.8.31".split("").reverse().join(""));
      const _0x58ca3b = [];
      if (!this.egid) {
        _0x58ca3b.push("egid");
      }
      if (!this.did) {
        _0x58ca3b.push("did");
      }
      if (!this.userId) {
        _0x58ca3b.push("ud/userId");
      }
      if (!this.kuaishouApiSt) {
        _0x58ca3b.push("kuaishou.api_st");
      }
      _0x58ca3b.length > 0 && console.log("⚠️ " + this.getAccountDisplayName() + " 缺少必要参数: " + _0x58ca3b.join(", "));
    } catch (_0x395ee3) {
      console.log("❌ " + this.getAccountDisplayName() + " :败失eikooc析解 ".split("").reverse().join("") + _0x395ee3.message);
    }
  }
  getCookieWithCurrentDid() {
    try {
      if (!this.cookie || !this.did) {
        return this.cookie;
      }
      var _0x273b90 = 12;
      const _0x517b22 = String(this.cookie).split(";");
      _0x273b90 = 3;
      var _0x5e5303 = 9;
      const _0x426245 = _0x517b22.map(_0x37d1f3 => {
        var _0x1a0ab0;
        const _0x82357d = String(_0x37d1f3 ?? "");
        _0x1a0ab0 = 7;
        if (!_0x82357d.trim()) {
          return _0x82357d;
        }
        var _0x44bd94 = 13;
        const _0x123a6b = _0x82357d.includes("=");
        _0x44bd94 = "hjgoio".split("").reverse().join("");
        var _0x339bc4 = 6;
        const _0xcb6df5 = _0x82357d.includes(":");
        _0x339bc4 = "hbghdl";
        var _0x4203be = 12;
        const _0x1f3ed1 = _0x123a6b ? "=" : _0xcb6df5 ? ":" : null;
        _0x4203be = "aqmfej";
        if (!_0x1f3ed1) {
          return _0x82357d;
        }
        const [_0x163c16, ..._0x2214db] = _0x82357d.split(_0x1f3ed1);
        const _0x4f0a68 = String(_0x163c16 || "").trim();
        var _0x54a685;
        const _0x4c0bcd = _0x4f0a68.toLowerCase();
        _0x54a685 = 10;
        if (_0x4c0bcd === "did".split("").reverse().join("") || _0x4c0bcd === "odid") {
          return _0x4f0a68 + _0x1f3ed1 + this.did;
        }
        return _0x82357d;
      });
      _0x5e5303 = "giljof";
      return _0x426245.join(" ;".split("").reverse().join(""));
    } catch (_0x258e5b) {
      return this.cookie;
    }
  }
  ["getTaskSta" + "st".split("").reverse().join("")]() {
    return this.taskStats;
  }
  printTaskStats() {
    console.log(" ��\n".split("").reverse().join("") + this.getAccountDisplayName() + " 任务执行统计:");
    for (const [_0x63db0c, _0x1263c3] of Object.entries(this.taskStats)) {
      var _0x5ca1c8 = 11;
      const _0x4bce9e = this.taskConfigs[_0x63db0c];
      _0x5ca1c8 = "ofgbgc".split("").reverse().join("");
      console.log("  " + _0x4bce9e.name + ": 成功" + _0x1263c3.success + "败失 ,次".split("").reverse().join("") + _0x1263c3.failed + "励奖总 ,次".split("").reverse().join("") + _0x1263c3.totalReward + "金币");
    }
  }
  async retryOperation(_0x93f486, _0x3f6610, _0x3479fa = 3, _0x22abb0 = 2000) {
    var _0x5afb37 = 14;
    let _0x484f68 = 0;
    _0x5afb37 = 1;
    let _0x372d54 = null;
    while (_0x484f68 < _0x3479fa) {
      try {
        var _0x5d71ec;
        const _0x4a2551 = await _0x93f486();
        _0x5d71ec = "jehjge";
        if (_0x4a2551) {
          return _0x4a2551;
        }
        _0x372d54 = new Error(_0x3f6610 + " 返回空结果");
      } catch (_0x5cd79e) {
        _0x372d54 = _0x5cd79e;
      }
      _0x484f68++;
      _0x484f68 < _0x3479fa && (await new Promise(_0x578697 => setTimeout(_0x578697, _0x22abb0)));
    }
    return null;
  }
  needsNewDid = false;
  async getAdInfo(_0x46f28f, _0x517203 = 0) {
    const _0x1f229b = {
      CCsMk: function (_0x475840, _0x218e68) {
        return _0x475840 + _0x218e68;
      },
      mbdFE: function (_0x48671f, _0xc8bd7f) {
        return _0x48671f ^ _0xc8bd7f;
      },
      QaaDk: function (_0x28d284, _0x35b1f1) {
        return _0x28d284 ^ _0x35b1f1;
      },
      NjLVq: "/rest/e/reward/mixed/ad",
      QIcxh: "|encData|",
      AFOKj: "|sign|",
      PYqMj: "false",
      XUCOd: "2ac2a76d",
      dwGeW: "1_23",
      MDIAn: "android",
      DPtbL: "kuaishouApiSt",
      CcTtG: "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0",
      vHyxp: function (_0x334d92, _0x1238ab) {
        return _0x334d92 ^ _0x1238ab;
      },
      DdmzM: "Xiaomi(23116PN5BC)",
      TzGyq: "appver",
      hvilI: "CUCC",
      PqDMl: "zh-cn",
      qCACe: "userId",
      GWKra: "WIFI",
      dhKuu: "1599",
      InqyI: "ANDROID_PHONE",
      zCwHW: "11.6",
      dvPtF: "pineapple",
      FaIrS: "NEBULA",
      NzZDc: "ANDROID_15",
      CHihe: "1080",
      kUrNJ: "2400",
      FngyR: "arm64",
      mEEuT: function (_0x4e3b49, _0x5b5f45) {
        return _0x4e3b49 + _0x5b5f45;
      },
      jWglg: function (_0x2dc726, _0x3cc077) {
        return _0x2dc726 ^ _0x3cc077;
      },
      kvnjs: "kuaishou_nebula",
      ZxpWP: "快手极速版",
      PaiBT: "com.kuaishou.nebula",
      UliHi: "did",
      ZMIeI: "pageId",
      TjaAj: function (_0x1432ae, _0x17e2bc) {
        return _0x1432ae ^ _0x17e2bc;
      },
      DgQHB: "subPageId",
      mXRmh: "from",
      nHBcc: "stringify",
      JxDms: "toString",
      OWyaC: "46esab",
      CFPFt: function (_0x6dbc31, _0x3d884c) {
        return _0x6dbc31 ^ _0x3d884c;
      },
      NWInI: "getSign",
      zvjNq: "pjffee",
      nwaBe: "log",
      MbVii: "getAccountDisplayName",
      uSQTi: " 获取签名失败",
      pRHyG: "encData",
      kZNQr: "encdata",
      WJJgK: "sign",
      CRlax: "requestSignService",
      SXkNi: function (_0x4121ab, _0x3205ee) {
        return _0x4121ab + _0x3205ee;
      },
      pTWAY: "salt",
      Iypne: "名签告广取获",
      MxXlo: function (_0x11d732, _0x1109b1) {
        return _0x11d732 + _0x1109b1;
      },
      EhFos: " 获取广告签名失败",
      OfleF: "sig",
      UZeAi: "__NS_sig3",
      eTzNd: "__NS_xfalc" + "no".split("").reverse().join(""),
      zOBdz: "__NStokens" + "gi".split("").reverse().join(""),
      QiEwK: "dmffbh",
      qAdSh: function (_0x73a0d9, _0x297642) {
        return _0x73a0d9 + _0x297642;
      },
      byIEk: function (_0x51b51a, _0x36facf) {
        return _0x51b51a + _0x36facf;
      },
      mVugK: "https://",
      sBwRO: "AD_API_DOMAIN",
      YRzMB: function (_0x2004e1, _0x312104, _0x2c9865, _0x3ae9ce) {
        return _0x2004e1(_0x312104, _0x2c9865, _0x3ae9ce);
      },
      LqXeL: "POST",
      BHybs: "application/x-www-form-urlencoded; charset=UTF-8",
      DcuXz: "kwai-android aegon/3.56.0",
      gvvWb: "=ts_ipa.uohsiauk",
      aggSp: "proxyUrl",
      CCYqO: " 获取广告",
      ETCaj: function (_0x502008, _0x305a25) {
        return _0x502008 || _0x305a25;
      },
      tNDUn: function (_0x30cc32, _0x245074) {
        return _0x30cc32 + _0x245074;
      },
      vQxvT: " 获取广告无响应",
      MGJvD: function (_0x369aff, _0x49c4c7) {
        return _0x369aff === _0x49c4c7;
      },
      TUNmd: "errorMsg",
      pMJxh: "feeds",
      fQYWu: function (_0x2197d5, _0x4abecc) {
        return _0x2197d5 ^ _0x4abecc;
      },
      rqzoO: function (_0x47c1c7, _0x3ce242) {
        return _0x47c1c7 ^ _0x3ce242;
      },
      vYFCG: function (_0xd5701e, _0x38bd1b) {
        return _0xd5701e ^ _0x38bd1b;
      },
      bikmF: function (_0x340e94, _0xbdf70) {
        return _0x340e94 ^ _0xbdf70;
      },
      jhGBm: function (_0x1a12ee, _0x4d751b) {
        return _0x1a12ee + _0x4d751b;
      },
      mKSTV: function (_0x22cc79, _0x281789) {
        return _0x22cc79 ^ _0x281789;
      },
      YPRZL: function (_0x37e6fd, _0x4043d5) {
        return _0x37e6fd ^ _0x4043d5;
      },
      YcYWj: function (_0x5517f0, _0x1c3119) {
        return _0x5517f0 ^ _0x1c3119;
      },
      kTbhd: function (_0x3951d0, _0x2f7aa7) {
        return _0x3951d0 ^ _0x2f7aa7;
      },
      aisVe: function (_0x2dc667, _0xa33fe1) {
        return _0x2dc667 ^ _0xa33fe1;
      },
      ewodj: "exp_tag",
      nbnuB: "split",
      griNV: function (_0x3d35ac, _0x8750e3) {
        return _0x3d35ac ^ _0x8750e3;
      },
      dkgOg: function (_0x3fd4af, _0x47b8b7) {
        return _0x3fd4af ^ _0x47b8b7;
      },
      HzjuB: "⚠️ ",
      zhTYc: "dIevitaerc 告广析解能未 ",
      yMRXY: "caption",
      IUiMT: "slice",
      RKSKl: function (_0x55dfc5, _0x27ab8e) {
        return _0x55dfc5 ^ _0x27ab8e;
      },
      MULrr: "bright",
      SRYXe: "blue",
      pceLV: function (_0x26e0dc, _0x3a3f1b) {
        return _0x26e0dc + _0x3a3f1b;
      },
      RgEJl: function (_0x10158c, _0x3eb838) {
        return _0x10158c + _0x3eb838;
      },
      YfNDG: function (_0x485bd4, _0x18bf0e) {
        return _0x485bd4 + _0x18bf0e;
      },
      OzTKu: function (_0x40e935, _0x1c65a7, _0x5a9501) {
        return _0x40e935(_0x1c65a7, _0x5a9501);
      },
      silJM: " :告广取获 ",
      QEfrn: "无标题",
      QnMRY: function (_0x14ce1e, _0x3fc857) {
        return _0x14ce1e + _0x3fc857;
      },
      Zdave: function (_0x1e7fd7, _0x23db04) {
        return _0x1e7fd7 + _0x23db04;
      },
      ABOyz: function (_0x33b87b, _0x479190) {
        return _0x33b87b + _0x479190;
      },
      TyBqq: "=gsMrorre :败失告广取获 ",
      UDIkc: "unknown",
      taxEA: ", result=",
      GNjyt: function (_0x1a3a02, _0x27cef3) {
        return _0x1a3a02 + _0x27cef3;
      },
      iLawf: function (_0x4384e9, _0x4b283a) {
        return _0x4384e9 + _0x4b283a;
      },
      dLhIH: " :常异告广取获 ",
      fTnsb: "message"
    };
    try {
      var _0x38a314 = _0x1f229b.CCsMk(_0x1f229b.mbdFE(406801, 406801), _0x1f229b.mbdFE(551804, 551805));
      const _0x2bb1a9 = SKIP_LIVE_ADS ? SKIP_LIVE_MAX_RETRIES : _0x1f229b.mbdFE(262127, 262126);
      _0x38a314 = _0x1f229b.CCsMk(_0x1f229b.QaaDk(726071, 726067), _0x1f229b.QaaDk(255456, 255463));
      const _0x4434fe = _0x1f229b.NjLVq;
      const _0x534259 = {
        encData: _0x1f229b.QIcxh,
        sign: _0x1f229b.AFOKj,
        cs: _0x1f229b.PYqMj,
        client_key: _0x1f229b.XUCOd,
        videoModelCrowdTag: _0x1f229b.dwGeW,
        os: _0x1f229b.MDIAn,
        "kuaishou.api_st": this[_0x1f229b.DPtbL],
        uQaTag: _0x1f229b.CcTtG
      };
      var _0x339ecc = _0x1f229b.CCsMk(_0x1f229b.QaaDk(231911, 231918), _0x1f229b.vHyxp(789175, 789171));
      const _0x3809ee = {
        earphoneMode: "1",
        mod: _0x1f229b.DdmzM,
        appver: this[_0x1f229b.TzGyq],
        isp: _0x1f229b.hvilI,
        language: _0x1f229b.PqDMl,
        ud: this[_0x1f229b.qCACe] || "",
        did_tag: "0",
        net: _0x1f229b.GWKra,
        kcv: _0x1f229b.dhKuu,
        app: "0",
        kpf: _0x1f229b.InqyI,
        ver: _0x1f229b.zCwHW,
        android_os: "0",
        boardPlatform: _0x1f229b.dvPtF,
        kpn: _0x1f229b.FaIrS,
        androidApiLevel: "35",
        country_code: "cn",
        sys: _0x1f229b.NzZDc,
        sw: _0x1f229b.CHihe,
        sh: _0x1f229b.kUrNJ,
        abi: _0x1f229b.FngyR,
        userRecoBit: "0"
      };
      _0x339ecc = _0x1f229b.mEEuT(_0x1f229b.jWglg(555976, 555981), _0x1f229b.jWglg(940054, 940052));
      const _0x3defd9 = {
        appInfo: {
          appId: _0x1f229b.kvnjs,
          name: _0x1f229b.ZxpWP,
          packageName: _0x1f229b.PaiBT,
          version: this[_0x1f229b.TzGyq],
          versionCode: -_0x1f229b.vHyxp(514594, 514595)
        },
        deviceInfo: {
          osType: 1,
          osVersion: "15",
          deviceId: this[_0x1f229b.UliHi],
          screenSize: {
            width: 1080,
            height: 2249
          },
          ftt: ""
        },
        userInfo: {
          userId: this[_0x1f229b.qCACe] || "",
          age: 0,
          gender: ""
        },
        impInfo: [{
          pageId: _0x46f28f[_0x1f229b.ZMIeI] || _0x1f229b.TjaAj(445939, 452270),
          subPageId: _0x46f28f[_0x1f229b.DgQHB],
          action: 0,
          browseType: 3,
          impExtData: "{}",
          mediaExtData: "{}"
        }]
      };
      const _0x3769db = Buffer[_0x1f229b.mXRmh](JSON[_0x1f229b.nHBcc](_0x3defd9))[_0x1f229b.JxDms](_0x1f229b.OWyaC.split("").reverse().join(""));
      var _0x36b226 = _0x1f229b.CCsMk(_0x1f229b.vHyxp(597925, 597933), _0x1f229b.CFPFt(584612, 584612));
      let _0x347d95 = await this[_0x1f229b.NWInI](_0x3769db);
      _0x36b226 = _0x1f229b.zvjNq.split("").reverse().join("");
      if (!_0x347d95) {
        console[_0x1f229b.nwaBe](_0x1f229b.CCsMk(_0x1f229b.mEEuT(" ❌".split("").reverse().join(""), this[_0x1f229b.MbVii]()), _0x1f229b.uSQTi));
        return null;
      }
      _0x534259[_0x1f229b.pRHyG] = _0x347d95[_0x1f229b.kZNQr];
      _0x534259[_0x1f229b.WJJgK] = _0x347d95[_0x1f229b.WJJgK];
      let _0xa7c561 = await this[_0x1f229b.CRlax]({
        urlpath: _0x4434fe,
        reqdata: _0x1f229b.CCsMk(_0x1f229b.SXkNi(querystring[_0x1f229b.nHBcc](_0x534259), "&"), querystring[_0x1f229b.nHBcc](_0x3809ee)),
        api_client_salt: this[_0x1f229b.pTWAY]
      }, _0x1f229b.Iypne.split("").reverse().join(""));
      if (!_0xa7c561) {
        console[_0x1f229b.nwaBe](_0x1f229b.MxXlo(_0x1f229b.CCsMk("❌ ", this[_0x1f229b.MbVii]()), _0x1f229b.EhFos));
        return null;
      }
      var _0x245f5d;
      const _0x59ff6c = {
        ..._0x3809ee,
        sig: _0xa7c561[_0x1f229b.OfleF],
        __NS_sig3: _0xa7c561[_0x1f229b.UZeAi],
        __NS_xfalcon: _0xa7c561[_0x1f229b.eTzNd] || "",
        __NStokensig: _0xa7c561[_0x1f229b.zOBdz]
      };
      _0x245f5d = _0x1f229b.QiEwK;
      var _0x3e0a2a;
      const _0x413bd9 = _0x1f229b.qAdSh(_0x1f229b.CCsMk(_0x1f229b.mEEuT(_0x1f229b.byIEk(_0x1f229b.mVugK, API_CONFIG[_0x1f229b.sBwRO]), _0x4434fe), "?"), querystring[_0x1f229b.nHBcc](_0x59ff6c));
      _0x3e0a2a = _0x1f229b.SXkNi(_0x1f229b.vHyxp(711158, 711156), _0x1f229b.CFPFt(110735, 110733));
      const {
        response: _0x405a2d,
        body: _0x53294e
      } = await _0x1f229b.YRzMB(sendRequest, {
        method: _0x1f229b.LqXeL,
        url: _0x413bd9,
        headers: {
          "Content-Type": _0x1f229b.BHybs,
          Host: API_CONFIG[_0x1f229b.sBwRO],
          "User-Agent": _0x1f229b.DcuXz,
          Cookie: _0x1f229b.MxXlo(_0x1f229b.gvvWb.split("").reverse().join(""), this[_0x1f229b.DPtbL])
        },
        form: _0x534259,
        timeout: 30000
      }, this[_0x1f229b.aggSp], _0x1f229b.SXkNi(this[_0x1f229b.MbVii](), _0x1f229b.CCYqO));
      if (_0x1f229b.ETCaj(!_0x405a2d, !_0x53294e)) {
        console[_0x1f229b.nwaBe](_0x1f229b.tNDUn(_0x1f229b.tNDUn("❌ ", this[_0x1f229b.MbVii]()), _0x1f229b.vQxvT));
        return null;
      }
      if (_0x1f229b.MGJvD(_0x53294e[_0x1f229b.TUNmd], "OK") && _0x53294e[_0x1f229b.pMJxh] && _0x53294e[_0x1f229b.pMJxh][_0x1f229b.jWglg(375393, 375393)] && _0x53294e[_0x1f229b.pMJxh][_0x1f229b.fQYWu(195881, 195881)].ad) {
        var _0x3c2dc6 = _0x1f229b.qAdSh(_0x1f229b.rqzoO(557163, 557161), _0x1f229b.vYFCG(193874, 193883));
        const _0x34ad30 = _0x53294e[_0x1f229b.pMJxh][_0x1f229b.bikmF(551154, 551154)];
        _0x3c2dc6 = _0x1f229b.jhGBm(_0x1f229b.mKSTV(262377, 262378), _0x1f229b.YPRZL(398930, 398928));
        var _0x4ae4c8 = _0x1f229b.CCsMk(_0x1f229b.QaaDk(168492, 168495), _0x1f229b.YcYWj(388764, 388757));
        const _0x49f93f = _0x34ad30?.["ad"]?.["creativeId"] ?? _0x34ad30?.["creativeId"];
        _0x4ae4c8 = _0x1f229b.MxXlo(_0x1f229b.kTbhd(993357, 993356), _0x1f229b.aisVe(524569, 524561));
        const _0x3d4dbe = _0x34ad30[_0x1f229b.ewodj] || "";
        var _0x55c515;
        const _0x3c4827 = _0x3d4dbe[_0x1f229b.nbnuB]("/")[_0x1f229b.vHyxp(704711, 704710)]?.["split"]("_")?.[_0x1f229b.griNV(395513, 395513)] || "";
        _0x55c515 = _0x1f229b.dkgOg(315041, 315040);
        if (!_0x49f93f) {
          console[_0x1f229b.nwaBe](_0x1f229b.jhGBm(_0x1f229b.mEEuT(_0x1f229b.HzjuB, this[_0x1f229b.MbVii]()), _0x1f229b.zhTYc.split("").reverse().join("")));
          return null;
        }
        const _0x531713 = (_0x34ad30[_0x1f229b.yMRXY] || _0x34ad30?.["ad"]?.["caption"] || "")[_0x1f229b.IUiMT](_0x1f229b.mbdFE(606464, 606464), _0x1f229b.RKSKl(725721, 725709));
        var _0x166b12;
        const _0x37bccd = _0x1f229b.CCsMk(colors[_0x1f229b.MULrr], colors[_0x1f229b.SRYXe]);
        _0x166b12 = _0x1f229b.dkgOg(105064, 105070);
        console[_0x1f229b.nwaBe](_0x1f229b.pceLV(_0x1f229b.RgEJl(_0x1f229b.YfNDG(_0x1f229b.MxXlo(_0x1f229b.OzTKu(colorText, "️ℹ".split("").reverse().join(""), _0x37bccd), " "), this[_0x1f229b.MbVii]()), _0x1f229b.silJM.split("").reverse().join("")), _0x1f229b.ETCaj(_0x531713, _0x1f229b.QEfrn)));
        return {
          cid: _0x49f93f,
          llsid: _0x3c4827
        };
      } else {
        console[_0x1f229b.nwaBe](_0x1f229b.YfNDG(_0x1f229b.QnMRY(_0x1f229b.byIEk(_0x1f229b.Zdave(_0x1f229b.ABOyz("❌ ", this[_0x1f229b.MbVii]()), _0x1f229b.TyBqq.split("").reverse().join("")), _0x53294e?.["error_msg"] || _0x1f229b.UDIkc), _0x1f229b.taxEA), _0x53294e?.["result"] || _0x1f229b.UDIkc));
        return null;
      }
    } catch (_0x162d88) {
      console[_0x1f229b.nwaBe](_0x1f229b.mEEuT(_0x1f229b.GNjyt(_0x1f229b.iLawf("❌ ", this[_0x1f229b.MbVii]()), _0x1f229b.dLhIH.split("").reverse().join("")), _0x162d88[_0x1f229b.fTnsb]));
      return null;
    }
  }
  async generateSignature(_0x543265, _0x1dc839, _0x4c3ea5, _0x3a16cb) {
    const _0xb4183f = {
      SdPon: "stringify",
      GIgez: "businessId",
      EozEa: "endTime",
      fvQtn: "video",
      aIkLo: "requestSceneType",
      ZuwHG: "taskType",
      BGbKD: "pageId",
      Jicno: function (_0x5ec7da, _0x4c3bb9) {
        return _0x5ec7da ^ _0x4c3bb9;
      },
      RTxcN: "posId",
      uASFe: "startTime",
      ZEeDL: "subPageId",
      bOLQa: function (_0x24fb21, _0x347cb4) {
        return _0x24fb21 + _0x347cb4;
      },
      sCNMA: function (_0x31303c, _0x4c8823) {
        return _0x31303c + _0x4c8823;
      },
      utOPh: "=rtSzib",
      iWAHk: function (_0x382e79, _0x47a57d) {
        return _0x382e79(_0x47a57d);
      },
      DuFFb: "&cs=false&client_key=2ac2a76d&kuaishou.api_st=",
      eckIT: "kuaishouApiSt",
      Nibhs: function (_0x34e053, _0x187744) {
        return _0x34e053 ^ _0x187744;
      },
      ckmeO: function (_0x1dd0ee, _0x3a3287) {
        return _0x1dd0ee ^ _0x3a3287;
      },
      aEsJo: function (_0x4a924d, _0x743f1f) {
        return _0x4a924d + _0x743f1f;
      },
      DyUUy: "queryParams",
      ZfqdS: function (_0x34fe3e, _0x283898) {
        return _0x34fe3e ^ _0x283898;
      },
      MmChj: "requestSignService",
      BgWgJ: "taskReportPath",
      Jxlkz: "salt",
      aRhVa: function (_0x5454d3, _0x2d4e07) {
        return _0x5454d3 + _0x2d4e07;
      },
      UHyeW: "getAccountDisplayName",
      qictJ: "名签告报成生 ",
      IHSAM: "sig",
      XQTOD: "__NS_sig3",
      nQbjj: "__NStokensig",
      wzsow: "__NS_xfalc" + "no".split("").reverse().join("")
    };
    try {
      const _0x483216 = JSON[_0xb4183f.SdPon]({
        businessId: _0x3a16cb[_0xb4183f.GIgez],
        endTime: this[_0xb4183f.EozEa],
        extParams: "",
        mediaScene: _0xb4183f.fvQtn,
        neoInfos: [{
          creativeId: _0x543265,
          extInfo: "",
          llsid: _0x1dc839,
          requestSceneType: _0x3a16cb[_0xb4183f.aIkLo],
          taskType: _0x3a16cb[_0xb4183f.ZuwHG],
          watchExpId: "",
          watchStage: 0
        }],
        pageId: _0x3a16cb[_0xb4183f.BGbKD] || _0xb4183f.Jicno(183096, 188517),
        posId: _0x3a16cb[_0xb4183f.RTxcN],
        reportType: 0,
        sessionId: "",
        startTime: this[_0xb4183f.uASFe],
        subPageId: _0x3a16cb[_0xb4183f.ZEeDL]
      });
      const _0x3b1981 = _0xb4183f.bOLQa(_0xb4183f.bOLQa(_0xb4183f.sCNMA(_0xb4183f.utOPh.split("").reverse().join(""), _0xb4183f.iWAHk(encodeURIComponent, _0x483216)), _0xb4183f.DuFFb), this[_0xb4183f.eckIT]);
      var _0x506860 = _0xb4183f.sCNMA(_0xb4183f.Nibhs(217543, 217538), _0xb4183f.ckmeO(730972, 730973));
      const _0xd184e1 = _0xb4183f.bOLQa(_0xb4183f.aEsJo(this[_0xb4183f.DyUUy], "&"), _0x3b1981);
      _0x506860 = _0xb4183f.sCNMA(_0xb4183f.ckmeO(412530, 412530), _0xb4183f.ZfqdS(966251, 966250));
      const _0x4614e7 = await this[_0xb4183f.MmChj]({
        urlpath: this[_0xb4183f.BgWgJ],
        reqdata: _0xd184e1,
        api_client_salt: this[_0xb4183f.Jxlkz]
      }, _0xb4183f.aRhVa(this[_0xb4183f.UHyeW](), _0xb4183f.qictJ.split("").reverse().join("")));
      if (!_0x4614e7) {
        return null;
      }
      return {
        sig: _0x4614e7[_0xb4183f.IHSAM],
        sig3: _0x4614e7[_0xb4183f.XQTOD],
        sigtoken: _0x4614e7[_0xb4183f.nQbjj],
        xfalcon: _0x4614e7[_0xb4183f.wzsow] || "",
        post: _0x3b1981
      };
    } catch (_0x5183a4) {
      return null;
    }
  }
  async ["submitRepo" + "tr".split("").reverse().join("")](_0x56b598, _0x431879, _0x3d0c64, _0xf726c2, _0x19c323, _0x22559d, _0x1b3d88) {
    const _0x599011 = {
      qcZHK: function (_0x2a24c0, _0x3b3e1c) {
        return _0x2a24c0 + _0x3b3e1c;
      },
      CwMVh: function (_0x2d7194, _0x3ca5ee) {
        return _0x2d7194 + _0x3ca5ee;
      },
      BryKl: "//:sptth",
      aueNL: "AD_API_DOMAIN",
      unbPB: "taskReportPath",
      MqGSr: function (_0x486731, _0x250982) {
        return _0x486731 + _0x250982;
      },
      MyXmr: function (_0x1ca30c, _0x2a3597) {
        return _0x1ca30c + _0x2a3597;
      },
      EGsTl: function (_0x4daeb0, _0x223bfe) {
        return _0x4daeb0 + _0x223bfe;
      },
      zAtgz: function (_0x2bf9ae, _0x3262d1) {
        return _0x2bf9ae + _0x3262d1;
      },
      ZXhXX: "queryParams",
      SFdkS: "&sig=",
      URVQq: "=3gis_SN__&",
      vvSnA: "&__NS_xfalcon=",
      iWbRT: function (_0xbc690, _0xa027d9) {
        return _0xbc690 || _0xa027d9;
      },
      ELghN: "&__NStokensig=",
      hQzPB: function (_0x510baf, _0x1c6d4e, _0x3c7de5, _0x17b5ae) {
        return _0x510baf(_0x1c6d4e, _0x3c7de5, _0x17b5ae);
      },
      ZuenT: "POST",
      oVGzA: "application/x-www-form-urlencoded; charset=UTF-8",
      tqlWO: "kwai-android aegon/3.56.0",
      piJAR: "proxyUrl",
      LtJfv: function (_0x468fc5, _0x4eeac8) {
        return _0x468fc5 + _0x4eeac8;
      },
      VbdXR: function (_0x29438b, _0x26f147) {
        return _0x29438b + _0x26f147;
      },
      RoPku: "账号[",
      jDNnm: "nickname",
      fJxWQ: "remark",
      jondn: " 提交任务",
      CoWiH: function (_0x73a0e, _0x20ed2d) {
        return _0x73a0e === _0x20ed2d;
      },
      YGzIs: "result",
      paOAU: function (_0xd9ea4d, _0x1f5ba5) {
        return _0xd9ea4d ^ _0x1f5ba5;
      },
      hOgHG: "data",
      djLLR: function (_0x150ea8, _0xffb2d0) {
        return _0x150ea8 ^ _0xffb2d0;
      },
      fBYBZ: function (_0x29a4e4, _0x31f8df) {
        return _0x29a4e4 <= _0x31f8df;
      },
      ZRKeW: "lowRewardThreshold",
      LfiZT: "lowRewardStreak",
      dnRsH: function (_0x28d2b4) {
        return _0x28d2b4();
      },
      GKlfF: "did",
      eFBPR: function (_0xf59264, _0x5ba9a0) {
        return _0xf59264 + _0x5ba9a0;
      },
      cjPTH: function (_0x437b0a, _0x170599) {
        return _0x437b0a + _0x170599;
      },
      ZAgZq: function (_0x371cbf, _0x3064e5) {
        return _0x371cbf + _0x3064e5;
      },
      PasxQ: function (_0x1163a5, _0x141d13) {
        return _0x1163a5 + _0x141d13;
      },
      DQrFT: "mod=Xiaomi(MI 11)&appver=",
      QasWH: "appver",
      LKYDp: "&egid=",
      TRdyz: "egid",
      VGoqW: "&did=",
      bRymt: "log",
      lfUWW: function (_0x4a2a85, _0x1371f0) {
        return _0x4a2a85 + _0x1371f0;
      },
      RTthQ: function (_0x10cf2a, _0x4dd942) {
        return _0x10cf2a + _0x4dd942;
      },
      gdrfB: " ��",
      CLeKh: "getAccountDisplayName",
      vTaUt: " 低奖励触发，已更新设备ID: ",
      siAxF: function (_0x1fa018, _0x541bbd) {
        return _0x1fa018 + _0x541bbd;
      },
      GrMNq: "did换更动自闭关已前当但，发触励奖低 ",
      cBRWi: function (_0x5e0878, _0x17df26) {
        return _0x5e0878 + _0x17df26;
      },
      aNuPp: function (_0x34cf4c, _0x37d23d) {
        return _0x34cf4c + _0x37d23d;
      },
      JaxGJ: function (_0x1da6c3, _0xee4602) {
        return _0x1da6c3 + _0xee4602;
      },
      UdFSw: function (_0x1f7f23, _0x273caf) {
        return _0x1f7f23 + _0x273caf;
      },
      lIpLY: function (_0x1b9c15, _0xb2f560) {
        return _0x1b9c15 + _0xb2f560;
      },
      fPgNm: function (_0x6fcee5, _0x561311) {
        return _0x6fcee5 + _0x561311;
      },
      FQbhm: function (_0x3acb9f, _0x58a4ad) {
        return _0x3acb9f + _0x58a4ad;
      },
      DCcOn: "⚠️ ",
      eThXC: " 金币奖励(",
      iMhLT: ")低于或等于阈值(",
      eZKoT: ")，等待30秒后重试，当前连续低奖励次数" + "(：".split("").reverse().join(""),
      zzljX: "lowRewardLimit",
      eprdX: function (_0x6d2674, _0x3c2df6) {
        return _0x6d2674 >= _0x3c2df6;
      },
      cxtbj: function (_0x35a907, _0x12bd61) {
        return _0x35a907 + _0x12bd61;
      },
      tbWGT: function (_0x1da162, _0x3b7b8b) {
        return _0x1da162 + _0x3b7b8b;
      },
      GjZmK: function (_0xb0b51b, _0x5de171) {
        return _0xb0b51b + _0x5de171;
      },
      svRyJ: function (_0x2fb5cf, _0x59b110) {
        return _0x2fb5cf + _0x59b110;
      },
      ffaMT: "🏁 ",
      GtpkY: " 连续",
      mqFEx: "≤励奖次",
      xdhxm: "，停止全部任务",
      HrsHh: "stopAllTasks",
      vbBdA: function (_0x4f3047, _0x343d2f) {
        return _0x4f3047 > _0x343d2f;
      },
      fUtlb: function (_0x4ae816, _0x2370ae) {
        return _0x4ae816 + _0x2370ae;
      },
      azqMQ: function (_0x3f5fc2, _0x134907) {
        return _0x3f5fc2 + _0x134907;
      },
      VGnEY: " 奖励(",
      MPEMD: ")恢复正常，重置低奖励计数",
      DBqxy: function (_0x40e906, _0x224286) {
        return _0x40e906 ^ _0x224286;
      },
      sJerV: function (_0x2a29c5, _0x4522d2) {
        return _0x2a29c5 ^ _0x4522d2;
      },
      ciPqk: "includes",
      ZXZHY: function (_0x23f3e2, _0x595d3a) {
        return _0x23f3e2 + _0x595d3a;
      },
      fDVBA: function (_0x26edae, _0x516aba) {
        return _0x26edae + _0x516aba;
      },
      RvhHR: function (_0x23fd63, _0xd4ea09) {
        return _0x23fd63 + _0xd4ea09;
      },
      dsEnq: " ️⚠",
      jvCat: "name",
      xTCKC: " 已达上限",
      nbOZc: "taskLimitReached"
    };
    try {
      const _0x4be881 = _0x599011.qcZHK(_0x599011.qcZHK(_0x599011.CwMVh(_0x599011.CwMVh(_0x599011.BryKl.split("").reverse().join(""), API_CONFIG[_0x599011.aueNL]), this[_0x599011.unbPB]), "?"), _0x599011.MqGSr(_0x599011.qcZHK(_0x599011.MyXmr(_0x599011.qcZHK(_0x599011.EGsTl(_0x599011.EGsTl(_0x599011.zAtgz(_0x599011.MyXmr(this[_0x599011.ZXhXX], _0x599011.SFdkS), _0x56b598), _0x599011.URVQq.split("").reverse().join("")), _0x431879), _0x599011.vvSnA), _0x599011.iWbRT(_0xf726c2, "")), _0x599011.ELghN), _0x3d0c64));
      const {
        response: _0x468467,
        body: _0x36e379
      } = await _0x599011.hQzPB(sendRequest, {
        method: _0x599011.ZuenT,
        url: _0x4be881,
        headers: {
          "Content-Type": _0x599011.oVGzA,
          Host: API_CONFIG[_0x599011.aueNL],
          "User-Agent": _0x599011.tqlWO
        },
        body: _0x19c323,
        timeout: 12000
      }, this[_0x599011.piJAR], _0x599011.CwMVh(_0x599011.LtJfv(_0x599011.VbdXR(_0x599011.CwMVh(_0x599011.RoPku, this[_0x599011.jDNnm]), "]"), this[_0x599011.fJxWQ] ? _0x599011.qcZHK(_0x599011.qcZHK("（", this[_0x599011.fJxWQ]), "）") : ""), _0x599011.jondn));
      if (!_0x36e379) {
        return {
          success: false,
          reward: 0,
          shouldRetry: false
        };
      }
      if (_0x599011.CoWiH(_0x36e379[_0x599011.YGzIs], _0x599011.paOAU(993584, 993585))) {
        const _0x417907 = _0x36e379[_0x599011.hOgHG]?.["neoAmount"] || _0x599011.djLLR(242011, 242011);
        if (_0x599011.fBYBZ(_0x417907, this[_0x599011.ZRKeW])) {
          this[_0x599011.LfiZT]++;
          if (ENABLE_CHANGE_DID) {
            const _0x2c23ed = _0x599011.dnRsH(generateDeviceId);
            this[_0x599011.GKlfF] = _0x2c23ed;
            this[_0x599011.ZXhXX] = _0x599011.eFBPR(_0x599011.cjPTH(_0x599011.ZAgZq(_0x599011.zAtgz(_0x599011.PasxQ(_0x599011.DQrFT, this[_0x599011.QasWH]), _0x599011.LKYDp), this[_0x599011.TRdyz]), _0x599011.VGoqW), _0x2c23ed);
            console[_0x599011.bRymt](_0x599011.lfUWW(_0x599011.RTthQ(_0x599011.LtJfv(_0x599011.gdrfB.split("").reverse().join(""), this[_0x599011.CLeKh]()), _0x599011.vTaUt), _0x2c23ed));
          } else {
            console[_0x599011.bRymt](_0x599011.siAxF(_0x599011.LtJfv(_0x599011.gdrfB.split("").reverse().join(""), this[_0x599011.CLeKh]()), _0x599011.GrMNq.split("").reverse().join("")));
          }
          console[_0x599011.bRymt](_0x599011.cBRWi(_0x599011.aNuPp(_0x599011.JaxGJ(_0x599011.UdFSw(_0x599011.lfUWW(_0x599011.lIpLY(_0x599011.fPgNm(_0x599011.FQbhm(_0x599011.lfUWW(_0x599011.DCcOn, this[_0x599011.CLeKh]()), _0x599011.eThXC), _0x417907), _0x599011.iMhLT), this[_0x599011.ZRKeW]), _0x599011.eZKoT), this[_0x599011.LfiZT]), "/)".split("").reverse().join("")), this[_0x599011.zzljX]));
          await new Promise(_0x3176ab => setTimeout(_0x3176ab, 30000));
          if (_0x599011.eprdX(this[_0x599011.LfiZT], this[_0x599011.zzljX])) {
            console[_0x599011.bRymt](_0x599011.cxtbj(_0x599011.tbWGT(_0x599011.cxtbj(_0x599011.GjZmK(_0x599011.svRyJ(_0x599011.zAtgz(_0x599011.ffaMT, this[_0x599011.CLeKh]()), _0x599011.GtpkY), this[_0x599011.zzljX]), _0x599011.mqFEx.split("").reverse().join("")), this[_0x599011.ZRKeW]), _0x599011.xdhxm));
            this[_0x599011.HrsHh] = true;
            return {
              success: false,
              reward: 0,
              shouldRetry: false
            };
          }
          return {
            success: true,
            reward: _0x417907,
            shouldRetry: false
          };
        } else {
          _0x599011.vbBdA(this[_0x599011.LfiZT], _0x599011.djLLR(939511, 939511)) && (console[_0x599011.bRymt](_0x599011.lIpLY(_0x599011.fUtlb(_0x599011.RTthQ(_0x599011.azqMQ("✅ ", this[_0x599011.CLeKh]()), _0x599011.VGnEY), _0x417907), _0x599011.MPEMD)), this[_0x599011.LfiZT] = _0x599011.djLLR(540637, 540637));
          return {
            success: true,
            reward: _0x417907,
            shouldRetry: false
          };
        }
      }
      if ([_0x599011.DBqxy(225558, 212893), _0x599011.paOAU(495519, 508179), _0x599011.sJerV(819095, 818300), _0x599011.djLLR(499508, 499371)][_0x599011.ciPqk](_0x36e379[_0x599011.YGzIs])) {
        console[_0x599011.bRymt](_0x599011.ZXZHY(_0x599011.fDVBA(_0x599011.RvhHR(_0x599011.MqGSr(_0x599011.dsEnq.split("").reverse().join(""), this[_0x599011.CLeKh]()), " "), _0x1b3d88[_0x599011.jvCat]), _0x599011.xTCKC));
        this[_0x599011.nbOZc][_0x22559d] = true;
        return {
          success: false,
          reward: 0
        };
      }
      return {
        success: false,
        reward: 0
      };
    } catch (_0x542e89) {
      return {
        success: false,
        reward: 0
      };
    }
  }
  async getSign(_0x44db43) {
    const _0x1c32e4 = {
      CoUJY: function (_0xb4c3ab, _0x405779) {
        return _0xb4c3ab ^ _0x405779;
      },
      dUNuz: function (_0x139f84, _0x18415b) {
        return _0x139f84 <= _0x18415b;
      },
      BoWAb: "stringify",
      zgyny: "encsign",
      aREpw: "userId",
      gmJji: function (_0x3d71e4, _0x32dad6, _0x298105, _0x2a4c12) {
        return _0x3d71e4(_0x32dad6, _0x298105, _0x2a4c12);
      },
      nNTWJ: "POST",
      gGGCR: function (_0x49a2d8, _0x182498) {
        return _0x49a2d8 + _0x182498;
      },
      hJlax: "SIGN_API_U" + "LR".split("").reverse().join(""),
      jvLiH: "/encsign",
      KTqoh: "application/json",
      Tfesl: "proxyUrl",
      FMXFs: function (_0x322a79, _0x27e31d) {
        return _0x322a79 + _0x27e31d;
      },
      VPNsI: "getAccountDisplayName",
      TNHEp: " encsign签名",
      dENeP: function (_0x4a1f67, _0x5dfce1) {
        return _0x4a1f67 < _0x5dfce1;
      },
      KzPOG: "log",
      nUvpz: function (_0x41f8ac, _0x3b07d0) {
        return _0x41f8ac + _0x3b07d0;
      },
      KVdBV: "败失求请名签 ",
      mjZJw: "空为应响名签 ",
      MZnAJ: "status",
      KfDDi: "data",
      McCjY: function (_0x24adad, _0xe3c87e) {
        return _0x24adad === _0xe3c87e;
      },
      rZWjo: "string",
      PbScl: "parse",
      URLzu: function (_0x205b5e, _0x20c8aa) {
        return _0x205b5e < _0x20c8aa;
      },
      nStSl: function (_0x58bf38, _0x5ba7ad) {
        return _0x58bf38 + _0x5ba7ad;
      },
      CFTMQ: " 解析签名数据失败",
      xVcRi: function (_0x454dca, _0x4ded5c) {
        return _0x454dca >= _0x4ded5c;
      },
      FZsnY: function (_0x29120a, _0x34b92d) {
        return _0x29120a + _0x34b92d;
      },
      eUvkr: " :误错回返务服名签 ",
      iQpOj: "未知错误",
      QCroh: function (_0x111fb6, _0x1f7336) {
        return _0x111fb6 >= _0x1f7336;
      },
      HwQss: function (_0x488587, _0x2ee27c) {
        return _0x488587 + _0x2ee27c;
      },
      aLjYd: " :常异求请名签 ",
      Djvjg: "message",
      gRZLs: function (_0x39b77f, _0x221a9c) {
        return _0x39b77f < _0x221a9c;
      },
      ZjupI: " 签名获取失败，已达最大重试次数"
    };
    const _0x189099 = _0x1c32e4.CoUJY(748738, 748737);
    for (let _0x346bd1 = _0x1c32e4.CoUJY(464471, 464470); _0x1c32e4.dUNuz(_0x346bd1, _0x189099); _0x346bd1++) {
      try {
        const _0x38e859 = JSON[_0x1c32e4.BoWAb]({
          type: _0x1c32e4.zgyny,
          data: _0x44db43,
          ud: this[_0x1c32e4.aREpw] || "",
          script_version: SCRIPT_VERSION
        });
        const {
          response: _0x4cd572,
          body: _0xe3ce69
        } = await _0x1c32e4.gmJji(sendRequest, {
          method: _0x1c32e4.nNTWJ,
          url: _0x1c32e4.gGGCR(API_CONFIG[_0x1c32e4.hJlax], _0x1c32e4.jvLiH),
          body: _0x38e859,
          headers: {
            "Content-Type": _0x1c32e4.KTqoh
          },
          timeout: 30000
        }, this[_0x1c32e4.Tfesl], _0x1c32e4.FMXFs(this[_0x1c32e4.VPNsI](), _0x1c32e4.TNHEp));
        if (!_0x4cd572) {
          if (_0x1c32e4.dENeP(_0x346bd1, _0x189099)) {
            continue;
          } else {
            console[_0x1c32e4.KzPOG](_0x1c32e4.FMXFs(_0x1c32e4.nUvpz(" ❌".split("").reverse().join(""), this[_0x1c32e4.VPNsI]()), _0x1c32e4.KVdBV.split("").reverse().join("")));
            return null;
          }
        }
        if (!_0xe3ce69) {
          if (_0x1c32e4.dENeP(_0x346bd1, _0x189099)) {
            continue;
          } else {
            console[_0x1c32e4.KzPOG](_0x1c32e4.gGGCR(_0x1c32e4.gGGCR("❌ ", this[_0x1c32e4.VPNsI]()), _0x1c32e4.mjZJw.split("").reverse().join("")));
            return null;
          }
        }
        if (_0xe3ce69 && _0xe3ce69[_0x1c32e4.MZnAJ]) {
          let _0x521962 = _0xe3ce69[_0x1c32e4.KfDDi];
          if (_0x1c32e4.McCjY(typeof _0x521962, _0x1c32e4.rZWjo)) {
            try {
              _0x521962 = JSON[_0x1c32e4.PbScl](_0x521962);
            } catch (_0x12afe8) {
              if (_0x1c32e4.URLzu(_0x346bd1, _0x189099)) {
                continue;
              } else {
                console[_0x1c32e4.KzPOG](_0x1c32e4.nStSl(_0x1c32e4.gGGCR(" ❌".split("").reverse().join(""), this[_0x1c32e4.VPNsI]()), _0x1c32e4.CFTMQ));
                return null;
              }
            }
          }
          return _0x521962;
        } else {
          _0x1c32e4.xVcRi(_0x346bd1, _0x189099) && console[_0x1c32e4.KzPOG](_0x1c32e4.gGGCR(_0x1c32e4.FZsnY(_0x1c32e4.FMXFs(" ❌".split("").reverse().join(""), this[_0x1c32e4.VPNsI]()), _0x1c32e4.eUvkr.split("").reverse().join("")), _0xe3ce69?.["message"] || _0x1c32e4.iQpOj));
          if (_0x1c32e4.URLzu(_0x346bd1, _0x189099)) {
            continue;
          } else {
            return null;
          }
        }
      } catch (_0x73026f) {
        _0x1c32e4.QCroh(_0x346bd1, _0x189099) && console[_0x1c32e4.KzPOG](_0x1c32e4.gGGCR(_0x1c32e4.nUvpz(_0x1c32e4.HwQss("❌ ", this[_0x1c32e4.VPNsI]()), _0x1c32e4.aLjYd.split("").reverse().join("")), _0x73026f[_0x1c32e4.Djvjg]));
        if (_0x1c32e4.gRZLs(_0x346bd1, _0x189099)) {
          continue;
        } else {
          return null;
        }
      }
      _0x1c32e4.URLzu(_0x346bd1, _0x189099) && (await new Promise(_0x4814b9 => setTimeout(_0x4814b9, 2000)));
    }
    console[_0x1c32e4.KzPOG](_0x1c32e4.nStSl(_0x1c32e4.FMXFs(" ❌".split("").reverse().join(""), this[_0x1c32e4.VPNsI]()), _0x1c32e4.ZjupI));
    return null;
  }
  async requestSignService(_0x18a02c, _0xa6ff5b) {
    const _0x16b47d = {
      YypKo: function (_0x505cfb, _0x5d5ea1) {
        return _0x505cfb ^ _0x5d5ea1;
      },
      mXQuk: function (_0x3a3c04, _0x424b64) {
        return _0x3a3c04 ^ _0x424b64;
      },
      BEBdT: function (_0x2aa34f, _0xc7d8b6) {
        return _0x2aa34f <= _0xc7d8b6;
      },
      bpCTr: function (_0x1ffc59, _0x3bd119) {
        return _0x1ffc59 + _0x3bd119;
      },
      Mjytn: function (_0x2127d0) {
        return _0x2127d0();
      },
      NoQtK: function (_0x16485b, _0x4cd48d) {
        return _0x16485b ^ _0x4cd48d;
      },
      ArRFM: "stringify",
      ZCgYx: "nssig",
      ENBYH: "urlpath",
      ipCET: "reqdata",
      JJKFz: "api_client_salt",
      NDNga: "userId",
      cxnUe: function (_0x53e539, _0x5b8a15) {
        return _0x53e539 ^ _0x5b8a15;
      },
      tKOGf: function (_0x55f0be, _0x4f09da, _0x52c324, _0x8db585) {
        return _0x55f0be(_0x4f09da, _0x52c324, _0x8db585);
      },
      CRjRB: "POST",
      vXCVn: function (_0x3312ec, _0x4afdbe) {
        return _0x3312ec + _0x4afdbe;
      },
      LiZrE: "SIGN_API_URL",
      ikXQG: "/nssig",
      tJfJg: "application/json",
      Zgggc: "Mozilla/5.0",
      eTXau: "proxyUrl",
      MXleo: "（签名服务）",
      jgvTA: function (_0x546627, _0x3b66e3) {
        return _0x546627 < _0x3b66e3;
      },
      KnWUK: "log",
      xssGd: function (_0x2c0e77, _0x15b1ad) {
        return _0x2c0e77 + _0x15b1ad;
      },
      fqvJx: function (_0x188098, _0xb3c4fa) {
        return _0x188098 + _0xb3c4fa;
      },
      FKmiA: function (_0x679a88, _0x803e8c) {
        return _0x679a88 + _0x803e8c;
      },
      fjLEJ: "getAccountDisplayName",
      aDBhk: "空为应响名签 ",
      rAaIO: "status",
      nqaug: "data",
      KXlEp: function (_0x4bc387, _0x2ad7a4) {
        return _0x4bc387 === _0x2ad7a4;
      },
      MNKOI: "gnirts",
      poxyr: "parse",
      mSHlW: function (_0x494246, _0x2e25f5) {
        return _0x494246 < _0x2e25f5;
      },
      tehvp: function (_0x12ce63, _0x3b9dbd) {
        return _0x12ce63 + _0x3b9dbd;
      },
      BsxFh: function (_0x33f950, _0x30e526) {
        return _0x33f950 + _0x30e526;
      },
      nvgzw: function (_0x53374e, _0x498b82) {
        return _0x53374e + _0x498b82;
      },
      pPCyG: " 解析签名数据失败",
      LoqIv: "tcejbo",
      ozOUa: function (_0x4ee956, _0x2c4a60) {
        return _0x4ee956 + _0x2c4a60;
      },
      BmXpW: "nssig3",
      dRFkF: "__NS_sig3",
      cQgcv: function (_0x52890e, _0x319c7a) {
        return _0x52890e + _0x319c7a;
      },
      bKlGE: function (_0x5478bc, _0x5c4017) {
        return _0x5478bc ^ _0x5c4017;
      },
      jjBDm: "nstokensig",
      HeJpB: "__NStokens" + "gi".split("").reverse().join(""),
      YHrIt: "jqiebp",
      cCjoo: function (_0x110797, _0x2ebb04) {
        return _0x110797 ^ _0x2ebb04;
      },
      abqAq: function (_0x42b4ce, _0x34cafd) {
        return _0x42b4ce ^ _0x34cafd;
      },
      lPaNm: "xfalcon",
      LkNyz: "nssig4",
      xrDPO: "__NS_xfalc" + "no".split("").reverse().join(""),
      ldqCv: function (_0xf9f545, _0x25cee6) {
        return _0xf9f545 + _0x25cee6;
      },
      DdDzd: function (_0x73e49f, _0x16850f) {
        return _0x73e49f ^ _0x16850f;
      },
      JjeVi: function (_0x45e8a2, _0x34152a) {
        return _0x45e8a2 ^ _0x34152a;
      },
      BKKal: "sig",
      xwxTz: function (_0x3ff6f0, _0xe42791) {
        return _0x3ff6f0 ^ _0xe42791;
      },
      mnpDC: function (_0x4b0ee9, _0x501250) {
        return _0x4b0ee9 >= _0x501250;
      },
      SlBIp: function (_0xf8b5ae, _0x36da88) {
        return _0xf8b5ae + _0x36da88;
      },
      wlDIx: "败失名签 ",
      hZBgJ: function (_0x3516f0, _0x1f50bc) {
        return _0x3516f0 < _0x1f50bc;
      },
      RPsEB: function (_0x5d7b19, _0x3ea6a0) {
        return _0x5d7b19 + _0x3ea6a0;
      },
      NRiUh: function (_0x12e77f, _0x36fccb) {
        return _0x12e77f + _0x36fccb;
      },
      cYHdr: " :常异名签 ",
      ruOLs: "message",
      QPxqY: function (_0x4d2c11, _0x24e350) {
        return _0x4d2c11 < _0x24e350;
      },
      usryb: function (_0xfa0da4, _0x1733c2) {
        return _0xfa0da4 + _0x1733c2;
      },
      QFBDP: function (_0x54bf3e, _0x4abcfc) {
        return _0x54bf3e + _0x4abcfc;
      },
      TRbEl: function (_0x3c77a8, _0x482492) {
        return _0x3c77a8 + _0x482492;
      },
      mkRJu: "数次试重大最达已，败失名签 "
    };
    const _0x1d2ef = _0x16b47d.YypKo(958305, 958306);
    for (let _0x15ac28 = _0x16b47d.mXQuk(311725, 311724); _0x16b47d.BEBdT(_0x15ac28, _0x1d2ef); _0x15ac28++) {
      try {
        var _0x16bbff = _0x16b47d.bpCTr(_0x16b47d.mXQuk(417324, 417323), _0x16b47d.mXQuk(416007, 416004));
        const _0x541eea = _0x16b47d.Mjytn(getOrCreateDeviceId);
        _0x16bbff = _0x16b47d.NoQtK(521238, 521235);
        var _0x5052fe;
        const _0x1ba763 = JSON[_0x16b47d.ArRFM]({
          type: _0x16b47d.ZCgYx,
          path: _0x18a02c[_0x16b47d.ENBYH],
          data: _0x18a02c[_0x16b47d.ipCET],
          salt: _0x18a02c[_0x16b47d.JJKFz],
          ud: this[_0x16b47d.NDNga] || "",
          script_version: SCRIPT_VERSION,
          device_id: _0x541eea
        });
        _0x5052fe = _0x16b47d.cxnUe(123698, 123701);
        const {
          response: _0x5add72,
          body: _0x33011a
        } = await _0x16b47d.tKOGf(sendRequest, {
          method: _0x16b47d.CRjRB,
          url: _0x16b47d.vXCVn(API_CONFIG[_0x16b47d.LiZrE], _0x16b47d.ikXQG),
          headers: {
            "Content-Type": _0x16b47d.tJfJg,
            "User-Agent": _0x16b47d.Zgggc
          },
          body: _0x1ba763,
          timeout: 15000
        }, this[_0x16b47d.eTXau], _0x16b47d.bpCTr(_0xa6ff5b, _0x16b47d.MXleo));
        if (!_0x33011a) {
          if (_0x16b47d.jgvTA(_0x15ac28, _0x1d2ef)) {
            continue;
          } else {
            console[_0x16b47d.KnWUK](_0x16b47d.xssGd(_0x16b47d.fqvJx(_0x16b47d.vXCVn(_0x16b47d.FKmiA(" ❌".split("").reverse().join(""), this[_0x16b47d.fjLEJ]()), " "), _0xa6ff5b), _0x16b47d.aDBhk.split("").reverse().join("")));
            return null;
          }
        }
        if (_0x33011a && _0x33011a[_0x16b47d.rAaIO]) {
          let _0xa30fa = _0x33011a[_0x16b47d.nqaug];
          if (_0x16b47d.KXlEp(typeof _0xa30fa, _0x16b47d.MNKOI.split("").reverse().join(""))) {
            try {
              _0xa30fa = JSON[_0x16b47d.poxyr](_0xa30fa);
            } catch (_0x48a05e) {
              if (_0x16b47d.mSHlW(_0x15ac28, _0x1d2ef)) {
                continue;
              } else {
                console[_0x16b47d.KnWUK](_0x16b47d.tehvp(_0x16b47d.BsxFh(_0x16b47d.nvgzw(_0x16b47d.tehvp(" ❌".split("").reverse().join(""), this[_0x16b47d.fjLEJ]()), " "), _0xa6ff5b), _0x16b47d.pPCyG));
                return null;
              }
            }
          }
          let _0xf878b5 = _0xa30fa;
          _0xa30fa[_0x16b47d.nqaug] && _0x16b47d.KXlEp(typeof _0xa30fa[_0x16b47d.nqaug], _0x16b47d.LoqIv.split("").reverse().join("")) && (_0xf878b5 = _0xa30fa[_0x16b47d.nqaug]);
          var _0x10f626 = _0x16b47d.ozOUa(_0x16b47d.cxnUe(704280, 704281), _0x16b47d.NoQtK(306891, 306883));
          let _0x340c09 = _0xf878b5[_0x16b47d.BmXpW] || _0xf878b5[_0x16b47d.dRFkF];
          _0x10f626 = _0x16b47d.cQgcv(_0x16b47d.bKlGE(572660, 572658), _0x16b47d.NoQtK(349377, 349381));
          var _0xd079bb;
          let _0x2cef93 = _0xf878b5[_0x16b47d.jjBDm] || _0xf878b5[_0x16b47d.HeJpB];
          _0xd079bb = _0x16b47d.YHrIt;
          var _0x3ceeb7 = _0x16b47d.BsxFh(_0x16b47d.cCjoo(960899, 960900), _0x16b47d.abqAq(793302, 793311));
          let _0x48cd74 = _0xf878b5[_0x16b47d.lPaNm] || _0xf878b5[_0x16b47d.LkNyz] || _0xf878b5[_0x16b47d.xrDPO] || "";
          _0x3ceeb7 = _0x16b47d.ldqCv(_0x16b47d.bKlGE(561975, 561975), _0x16b47d.DdDzd(119801, 119800));
          var _0x5da425 = _0x16b47d.ozOUa(_0x16b47d.JjeVi(200692, 200693), _0x16b47d.DdDzd(722011, 722009));
          let _0x61086a = _0xf878b5[_0x16b47d.BKKal];
          _0x5da425 = _0x16b47d.nvgzw(_0x16b47d.NoQtK(995990, 995998), _0x16b47d.xwxTz(357586, 357591));
          return {
            __NS_sig3: _0x340c09,
            __NStokensig: _0x2cef93,
            sig: _0x61086a,
            __NS_xfalcon: _0x48cd74
          };
        }
        _0x16b47d.mnpDC(_0x15ac28, _0x1d2ef) && console[_0x16b47d.KnWUK](_0x16b47d.SlBIp(_0x16b47d.BsxFh(_0x16b47d.ozOUa(_0x16b47d.ldqCv(" ❌".split("").reverse().join(""), this[_0x16b47d.fjLEJ]()), " "), _0xa6ff5b), _0x16b47d.wlDIx.split("").reverse().join("")));
        if (_0x16b47d.hZBgJ(_0x15ac28, _0x1d2ef)) {
          continue;
        } else {
          return null;
        }
      } catch (_0x44708d) {
        _0x16b47d.mnpDC(_0x15ac28, _0x1d2ef) && console[_0x16b47d.KnWUK](_0x16b47d.vXCVn(_0x16b47d.SlBIp(_0x16b47d.SlBIp(_0x16b47d.RPsEB(_0x16b47d.NRiUh("❌ ", this[_0x16b47d.fjLEJ]()), " "), _0xa6ff5b), _0x16b47d.cYHdr.split("").reverse().join("")), _0x44708d[_0x16b47d.ruOLs]));
        if (_0x16b47d.QPxqY(_0x15ac28, _0x1d2ef)) {
          continue;
        } else {
          return null;
        }
      }
    }
    console[_0x16b47d.KnWUK](_0x16b47d.usryb(_0x16b47d.QFBDP(_0x16b47d.QFBDP(_0x16b47d.TRbEl("❌ ", this[_0x16b47d.fjLEJ]()), " "), _0xa6ff5b), _0x16b47d.mkRJu.split("").reverse().join("")));
    return null;
  }
  async executeTask(_0x32c99d) {
    if (!this.tasksToExecute.includes(_0x32c99d)) {
      return false;
    }
    const _0x1d9875 = this.taskConfigs[_0x32c99d];
    if (!_0x1d9875) {
      console.log("❌ " + this.getAccountDisplayName() + " 未知任务: " + _0x32c99d);
      return false;
    }
    if (this.taskLimitReached[_0x32c99d]) {
      return false;
    }
    try {
      const _0x24fc3b = await getAccountBasicInfo(this.getCookieWithCurrentDid(), this.proxyUrl, this.index);
      var _0x30291f = 9;
      const _0xc02d9d = _0x24fc3b?.["totalCoin"] || 0;
      _0x30291f = "gidpko";
      let _0x4ff4a7;
      let _0x24b3bf = 0;
      var _0x3d3802 = 4;
      const _0x179278 = 3;
      _0x3d3802 = 15;
      while (_0x24b3bf < _0x179278) {
        var _0x2c8c7e = 7;
        const _0x4239ca = await this.getAdInfo(_0x1d9875);
        _0x2c8c7e = 4;
        if (_0x4239ca && _0x4239ca.needsNewDid) {
          this.needsNewDid = true;
          _0x24b3bf++;
          console.log("🔄 " + this.getAccountDisplayName() + " 正在更新设备ID并重试获取广告 (" + _0x24b3bf + "/" + _0x179278 + ")");
          continue;
        } else {
          if (_0x4239ca) {
            _0x4ff4a7 = _0x4239ca;
            break;
          } else {
            _0x24b3bf++;
            if (_0x24b3bf >= _0x179278) {
              console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " 获取" + _0x1d9875.name + "信息失败");
              this.taskStats[_0x32c99d].failed++;
              return false;
            }
            await new Promise(_0x44d119 => setTimeout(_0x44d119, 2000));
          }
        }
      }
      if (!_0x4ff4a7) {
        this.taskStats[_0x32c99d].failed++;
        return false;
      }
      const _0xddfe88 = Math.floor(Math.random() * (WATCH_AD_MAX - WATCH_AD_MIN + 1)) + WATCH_AD_MIN;
      console.log("⏱️ " + this.getAccountDisplayName() + " " + _0x1d9875.name + " 待等 ".split("").reverse().join("") + _0xddfe88 + " 秒后继续");
      await new Promise(_0x2a2942 => setTimeout(_0x2a2942, _0xddfe88 * 1000));
      var _0x4ad0a2 = 7;
      const _0x10afea = await this.generateSignature(_0x4ff4a7.cid, _0x4ff4a7.llsid, _0x32c99d, _0x1d9875);
      _0x4ad0a2 = 13;
      if (!_0x10afea) {
        this.taskStats[_0x32c99d].failed++;
        console.log("❌ " + this.getAccountDisplayName() + "次本，败失名签成生 ".split("").reverse().join("") + _0x1d9875.name + "未获得奖励");
        return false;
      }
      var _0x4be8d7;
      let _0x481be9;
      _0x4be8d7 = 7;
      let _0x364bab = 0;
      while (_0x364bab < 3) {
        _0x481be9 = await this.submitReport(_0x10afea.sig, _0x10afea.sig3, _0x10afea.sigtoken, _0x10afea.xfalcon || "", _0x10afea.post, _0x32c99d, _0x1d9875);
        if (_0x481be9?.["success"] || !_0x481be9?.["shouldRetry"]) {
          break;
        }
        _0x364bab++;
        _0x481be9.shouldRetry && (await new Promise(_0x354b3a => setTimeout(_0x354b3a, 30000)), console.log("🔄 " + this.getAccountDisplayName() + " 准备重试 (" + _0x364bab + ")3/".split("").reverse().join("")));
      }
      if (_0x481be9?.["success"]) {
        this.taskStats[_0x32c99d].success++;
        this.taskStats[_0x32c99d].totalReward += _0x481be9.reward || 0;
        var _0x46244f = 9;
        const _0x2cdfa6 = await getAccountBasicInfo(this.getCookieWithCurrentDid(), this.proxyUrl, this.index);
        _0x46244f = 0;
        var _0x4c2c7c;
        const _0x15c255 = _0x2cdfa6?.["totalCoin"] || _0xc02d9d;
        _0x4c2c7c = "blgmfb";
        var _0x47964e;
        const _0x31f73f = _0x481be9.reward || 0;
        _0x47964e = 1;
        var _0x3d2cb0 = 14;
        const _0x3919fe = this.remark || this.nickname || "注备".split("").reverse().join("");
        _0x3d2cb0 = 4;
        let _0x266cf0 = "获取到广告";
        var _0x1e5a18 = 7;
        let _0x50e657 = colors.bright + colors.cyan;
        _0x1e5a18 = 1;
        switch (_0x32c99d) {
          case "kbox":
            _0x266cf0 = "获取到宝箱";
            _0x50e657 = colors.bright + colors.magenta;
            break;
          case "xob".split("").reverse().join(""):
            _0x266cf0 = "告广箱宝到取获".split("").reverse().join("");
            _0x50e657 = colors.bright + colors.blue;
            break;
          case "food":
            _0x266cf0 = "获取到饭补广告";
            _0x50e657 = colors.bright + colors.green;
            break;
          case "look_follow":
            _0x266cf0 = "获取追加广告";
            _0x50e657 = colors.bright + colors.yellow;
            break;
          case "wollof_hcraes".split("").reverse().join(""):
            _0x266cf0 = "获取到搜索追加广告";
            _0x50e657 = colors.bright + colors.yellow;
            break;
          case "look":
            _0x266cf0 = "获取到广告";
            _0x50e657 = colors.bright + colors.cyan;
            break;
          case "hcraes".split("").reverse().join(""):
            _0x266cf0 = "获取到搜索广告";
            _0x50e657 = colors.bright + colors.cyan;
            break;
        }
        const _0x29df79 = this.taskStats[_0x32c99d].success;
        const _0x596e10 = this.getTaskTotalCount(_0x32c99d);
        var _0x171c77;
        const _0xb0e04b = _0x31f73f >= 100 ? colors.bright + colors.red + "💰[高额奖励]" + colors.reset : colors.bright + colors.green + "💰[奖励]" + colors.reset;
        _0x171c77 = 5;
        const _0x4fa739 = formatTag(_0x3919fe);
        const _0x47c3ed = colorText(_0x266cf0, _0x50e657);
        console.log(_0xb0e04b + " " + _0x4fa739 + " " + _0x47c3ed + "（第" + _0x29df79 + "/" + _0x596e10 + "次）==>" + formatWarning(_0x31f73f) + " 币金前当 —— 币金".split("").reverse().join("") + formatSuccess(_0x15c255));
        return true;
      }
      this.taskStats[_0x32c99d].failed++;
      if (this.taskLimitReached[_0x32c99d]) {
        console.log("⚠️ " + this.getAccountDisplayName() + " " + _0x1d9875.name + " 已达上限，本次未获得奖励");
      } else {
        _0x481be9 ? console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + "交提 ".split("").reverse().join("") + _0x1d9875.name + "励奖得获未次本，败失".split("").reverse().join("")) : console.log("❌ " + this.getAccountDisplayName() + "交提 ".split("").reverse().join("") + _0x1d9875.name + "励奖得获未次本，）常异器务服或络网（败失".split("").reverse().join(""));
      }
      return false;
    } catch (_0x1e3d1a) {
      this.taskStats[_0x32c99d].failed++;
      return false;
    }
  }
  async executeAllTasksByPriority() {
    console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 任务执行顺序: " + this.tasksToExecute.join(" → "));
    for (const _0x2a1818 of this.tasksToExecute) {
      if (this.stopAllTasks) {
        console.log("🛑 " + this.getAccountDisplayName() + "务任有所止停已 ".split("").reverse().join(""));
        break;
      }
      if (this.taskLimitReached[_0x2a1818]) {
        console.log("⏭️ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x2a1818]?.["name"] + " 已达上限，跳过");
        continue;
      }
      console.log("🚀 " + this.getAccountDisplayName() + " 开始执行: " + this.taskConfigs[_0x2a1818]?.["name"]);
      switch (_0x2a1818) {
        case "look":
          await this.executeLookTasks();
          break;
        case "search":
          await this.executeSearchTasks();
          break;
        case "box":
          await this.executeBoxTasks();
          break;
        case "doof".split("").reverse().join(""):
          await this.executeFoodTasks();
          break;
        case "kbox":
          await this.executeKboxTasks();
          break;
        case "look_follow":
          console.log(" ️ℹ".split("").reverse().join("") + this.getAccountDisplayName() + " look_follow 将在 look 任务成功后自动执行");
          break;
        case "search_follow":
          console.log(" ️ℹ".split("").reverse().join("") + this.getAccountDisplayName() + " search_follow 将在 search 任务成功后自动执行");
          break;
        default:
          console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " 未知任务类型: " + _0x2a1818);
      }
      const _0xc13620 = _0x2a1818 === this.tasksToExecute[this.tasksToExecute.length - 1];
      if (!_0xc13620 && !this.stopAllTasks && !this.taskLimitReached[_0x2a1818]) {
        const _0x5acb63 = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x5acb63 / 1000) + " 秒");
        await new Promise(_0x16c31a => setTimeout(_0x16c31a, _0x5acb63));
      }
    }
    console.log(" ✅".split("").reverse().join("") + this.getAccountDisplayName() + "成完行执务任有所 ".split("").reverse().join(""));
    return {};
  }
  async executeLookTasks() {
    console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 开始执行看广告任务，计划执行 " + LOOK_COUNT + "次 ".split("").reverse().join(""));
    for (let _0x2474e5 = 0; _0x2474e5 < LOOK_COUNT; _0x2474e5++) {
      if (this.stopAllTasks || this.taskLimitReached.look) {
        console.log("🛑 " + this.getAccountDisplayName() + "止停已务任告广看 ".split("").reverse().join(""));
        break;
      }
      const _0x44f7fe = _0x2474e5 + 1;
      console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + "第 务任告广看 ".split("").reverse().join("") + _0x44f7fe + "/" + LOOK_COUNT + "次 ".split("").reverse().join(""));
      var _0x2e8c1f = 4;
      const _0x1e9684 = await this.executeTask("look");
      _0x2e8c1f = 2;
      if (_0x1e9684 && this.tasksToExecute.includes("wollof_kool".split("").reverse().join("")) && !this.stopAllTasks && !this.taskLimitReached.look_follow && FOLLOW_COUNT > 0) {
        var _0x1cfe3e;
        const _0x207789 = (Math.floor(Math.random() * (PRE_LOOK_FOLLOW_MAX - PRE_LOOK_FOLLOW_MIN + 1)) + PRE_LOOK_FOLLOW_MIN) * 1000;
        _0x1cfe3e = 2;
        console.log("⏱ " + this.getAccountDisplayName() + " look→look_follow 等待 " + Math.round(_0x207789 / 1000) + " 秒");
        await new Promise(_0x2c7cea => setTimeout(_0x2c7cea, _0x207789));
        console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 行执划计，务任告广看加追行执始开 ".split("").reverse().join("") + FOLLOW_COUNT + " 次");
        for (let _0x38f64c = 0; _0x38f64c < FOLLOW_COUNT; _0x38f64c++) {
          if (this.stopAllTasks || this.taskLimitReached.look_follow) {
            console.log("🛑 " + this.getAccountDisplayName() + "止停已务任告广看加追 ".split("").reverse().join(""));
            break;
          }
          var _0xcb7f5e = 14;
          const _0x1d4106 = _0x38f64c + 1;
          _0xcb7f5e = "odgaco".split("").reverse().join("");
          console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + "第 告广看加追 ".split("").reverse().join("") + _0x1d4106 + "/" + FOLLOW_COUNT + "次 ".split("").reverse().join(""));
          await this.executeTask("look_follow");
          if (_0x38f64c < FOLLOW_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look_follow) {
            var _0x4906c4 = 10;
            const _0x5c5676 = (Math.floor(Math.random() * (BETWEEN_LOOK_FOLLOW_MAX - BETWEEN_LOOK_FOLLOW_MIN + 1)) + BETWEEN_LOOK_FOLLOW_MIN) * 1000;
            _0x4906c4 = 8;
            console.log("⏱ " + this.getAccountDisplayName() + " look_follow 间隔 等待 " + Math.round(_0x5c5676 / 1000) + " 秒");
            await new Promise(_0x2840cb => setTimeout(_0x2840cb, _0x5c5676));
          }
        }
      }
      if (_0x2474e5 < LOOK_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look) {
        var _0x5982e0;
        const _0x2d1f02 = (Math.floor(Math.random() * (ROUND_END_MAX - ROUND_END_MIN + 1)) + ROUND_END_MIN) * 1000;
        _0x5982e0 = 9;
        console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " look 间隔 等待 " + Math.round(_0x2d1f02 / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(_0x38bdbe => setTimeout(_0x38bdbe, _0x2d1f02));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + "成完行执务任告广看 ".split("").reverse().join(""));
  }
  async executeSearchTasks() {
    console.log("🔎 " + this.getAccountDisplayName() + " 开始执行搜索任务，计划执行 " + SEARCH_COUNT + "次 ".split("").reverse().join(""));
    for (let _0x536055 = 0; _0x536055 < SEARCH_COUNT; _0x536055++) {
      if (this.stopAllTasks || this.taskLimitReached.search) {
        console.log("🛑 " + this.getAccountDisplayName() + " 搜索任务已停止");
        break;
      }
      const _0x4d8ab9 = _0x536055 + 1;
      console.log("🔍 " + this.getAccountDisplayName() + "第 务任索搜 ".split("").reverse().join("") + _0x4d8ab9 + "/" + SEARCH_COUNT + "次 ".split("").reverse().join(""));
      var _0x476802 = 2;
      const _0xfc798 = await this.executeTask("search");
      _0x476802 = 2;
      if (_0xfc798 && this.tasksToExecute.includes("search_follow") && !this.stopAllTasks && !this.taskLimitReached.search_follow && SEARCH_FOLLOW_COUNT > 0) {
        var _0x5068b1 = 8;
        const _0x4cdd6d = (Math.floor(Math.random() * (PRE_SEARCH_FOLLOW_MAX - PRE_SEARCH_FOLLOW_MIN + 1)) + PRE_SEARCH_FOLLOW_MIN) * 1000;
        _0x5068b1 = 6;
        console.log("⏱ " + this.getAccountDisplayName() + " search→search_follow 等待 " + Math.round(_0x4cdd6d / 1000) + " 秒");
        await new Promise(_0x3a6642 => setTimeout(_0x3a6642, _0x4cdd6d));
        console.log("🔄 " + this.getAccountDisplayName() + " 开始执行搜索追加任务，计划执行 " + SEARCH_FOLLOW_COUNT + " 次");
        for (let _0xb27d0a = 0; _0xb27d0a < SEARCH_FOLLOW_COUNT; _0xb27d0a++) {
          if (this.stopAllTasks || this.taskLimitReached.search_follow) {
            console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + "止停已务任加追索搜 ".split("").reverse().join(""));
            break;
          }
          const _0x4441fc = _0xb27d0a + 1;
          console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + "第 加追索搜 ".split("").reverse().join("") + _0x4441fc + "/" + SEARCH_FOLLOW_COUNT + " 次");
          this.adAdditionalNum++;
          await this.executeTask("search_follow");
          this.adAdditionalNum = 0;
          if (_0xb27d0a < SEARCH_FOLLOW_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search_follow) {
            var _0x38ea33 = 5;
            const _0x341e15 = (Math.floor(Math.random() * (BETWEEN_SEARCH_FOLLOW_MAX - BETWEEN_SEARCH_FOLLOW_MIN + 1)) + BETWEEN_SEARCH_FOLLOW_MIN) * 1000;
            _0x38ea33 = "nlalde";
            console.log("⏱ " + this.getAccountDisplayName() + " 待等 隔间 wollof_hcraes ".split("").reverse().join("") + Math.round(_0x341e15 / 1000) + "秒 ".split("").reverse().join(""));
            await new Promise(_0x3ef074 => setTimeout(_0x3ef074, _0x341e15));
          }
        }
      }
      if (_0x536055 < SEARCH_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search) {
        const _0x58605c = (Math.floor(Math.random() * (ROUND_END_MAX - ROUND_END_MIN + 1)) + ROUND_END_MIN) * 1000;
        console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " search 间隔 等待 " + Math.round(_0x58605c / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(_0x4915bd => setTimeout(_0x4915bd, _0x58605c));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + " 搜索任务执行完成");
  }
  async executeBoxTasks() {
    console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 行执划计，务任箱宝行执始开 ".split("").reverse().join("") + BOX_COUNT + " 次");
    for (let _0x333b44 = 0; _0x333b44 < BOX_COUNT; _0x333b44++) {
      if (this.stopAllTasks || this.taskLimitReached.box) {
        console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 宝箱任务已停止");
        break;
      }
      var _0x5ef54a;
      const _0x132370 = _0x333b44 + 1;
      _0x5ef54a = 13;
      console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 宝箱任务 第" + _0x132370 + "/" + BOX_COUNT + "次 ".split("").reverse().join(""));
      await this.executeTask("xob".split("").reverse().join(""));
      if (_0x333b44 < BOX_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.box) {
        var _0x5705f6 = 3;
        const _0x40f2e7 = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        _0x5705f6 = 4;
        console.log("⏱ " + this.getAccountDisplayName() + " box 间隔 等待 " + Math.round(_0x40f2e7 / 1000) + " 秒");
        await new Promise(_0x58ba72 => setTimeout(_0x58ba72, _0x40f2e7));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + " 宝箱任务执行完成");
  }
  async executeFoodTasks() {
    console.log("🍚 " + this.getAccountDisplayName() + " 开始执行饭补任务，计划执行 " + FOOD_COUNT + "次 ".split("").reverse().join(""));
    for (let _0x103d46 = 0; _0x103d46 < FOOD_COUNT; _0x103d46++) {
      if (this.stopAllTasks || this.taskLimitReached.food) {
        console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 饭补任务已停止");
        break;
      }
      const _0x256ab8 = _0x103d46 + 1;
      console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 饭补任务 第" + _0x256ab8 + "/" + FOOD_COUNT + "次 ".split("").reverse().join(""));
      await this.executeTask("doof".split("").reverse().join(""));
      if (_0x103d46 < FOOD_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.food) {
        const _0x57e44c = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " 待等 隔间 doof ".split("").reverse().join("") + Math.round(_0x57e44c / 1000) + " 秒");
        await new Promise(_0x5d6a89 => setTimeout(_0x5d6a89, _0x57e44c));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + " 饭补任务执行完成");
  }
  async executeKboxTasks() {
    console.log(" ��".split("").reverse().join("") + this.getAccountDisplayName() + " 开始执行开宝箱任务，计划执行 " + KBOX_COUNT + " 次");
    for (let _0x1df934 = 0; _0x1df934 < KBOX_COUNT; _0x1df934++) {
      if (this.stopAllTasks || this.taskLimitReached.kbox) {
        console.log("🛑 " + this.getAccountDisplayName() + " 开宝箱任务已停止");
        break;
      }
      var _0x1cad2a = 10;
      const _0x543052 = _0x1df934 + 1;
      _0x1cad2a = "hhbmdf";
      console.log("🔍 " + this.getAccountDisplayName() + "第 务任箱宝开 ".split("").reverse().join("") + _0x543052 + "/" + KBOX_COUNT + " 次");
      await this.executeTask("kbox");
      if (_0x1df934 < KBOX_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.kbox) {
        const _0x2d0165 = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " kbox 间隔 等待 " + Math.round(_0x2d0165 / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(_0x263f99 => setTimeout(_0x263f99, _0x2d0165));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + " 开宝箱任务执行完成");
  }
}
function parseAccountString(_0x426dc1, _0x266758, _0x2517e4, _0x19237e) {
  var _0x4cc632 = 3;
  const _0x556af3 = String(_0x426dc1 || "").trim();
  _0x4cc632 = 8;
  if (!_0x556af3) {
    return null;
  }
  var _0x341372 = 15;
  _0x266758 = "";
  _0x341372 = "bbbmho".split("").reverse().join("");
  var _0x258d55 = 10;
  _0x2517e4 = "";
  _0x258d55 = 7;
  var _0x1d187e;
  _0x19237e = "";
  _0x1d187e = "omhnde";
  var _0x42906f = 11;
  let _0x2323c2 = null;
  _0x42906f = 2;
  if (_0x556af3.includes("#")) {
    var _0x52ce9a = 5;
    const _0x2e451f = _0x556af3.split("#");
    _0x52ce9a = "fffakn";
    if (_0x2e451f.length === 2) {
      _0x19237e = _0x2e451f[0];
      _0x2517e4 = _0x2e451f[1];
    } else {
      if (_0x2e451f.length === 3) {
        new RegExp("/\\/\\:5skcos^".split("").reverse().join(""), "i").test(_0x2e451f[2]) || _0x2e451f[2].includes("|") ? (_0x19237e = _0x2e451f[0], _0x2517e4 = _0x2e451f[1], _0x2323c2 = _0x2e451f[2]) : (_0x266758 = _0x2e451f[0], _0x19237e = _0x2e451f[1], _0x2517e4 = _0x2e451f[2]);
      } else {
        _0x2e451f.length >= 4 && (_0x266758 = _0x2e451f[0], _0x19237e = _0x2e451f[1], _0x2517e4 = _0x2e451f.slice(2, _0x2e451f.length - 1).join("#"), _0x2323c2 = _0x2e451f[_0x2e451f.length - 1]);
      }
    }
  } else {
    _0x19237e = _0x556af3;
    _0x2517e4 = "";
  }
  if (_0x2323c2) {
    if (_0x2323c2 === "0" || _0x2323c2.toLowerCase() === "none") {
      _0x2323c2 = null;
    } else {
      if (_0x2323c2.includes("|")) {
        const _0x899ae4 = _0x2323c2.split("|");
        if (_0x899ae4.length >= 2) {
          const [_0x47eba3, _0x53a552, _0x3d96d9 = "", _0x3f1a65 = ""] = _0x899ae4.map(_0xedd446 => String(_0xedd446 || "").trim());
          if (_0x47eba3 && _0x53a552) {
            const _0x343631 = _0x3d96d9 || _0x3f1a65 ? encodeURIComponent(_0x3d96d9) + ":" + encodeURIComponent(_0x3f1a65) + "@" : "";
            _0x2323c2 = "socks5://" + _0x343631 + _0x47eba3 + ":" + _0x53a552;
          } else {
            _0x2323c2 = null;
          }
        } else {
          _0x2323c2 = null;
        }
      }
    }
  }
  return {
    remark: _0x266758 || "",
    salt: _0x2517e4,
    cookie: _0x19237e,
    proxyUrl: _0x2323c2
  };
}
function getAllAccountConfigs() {
  const _0x30ab31 = parseAccountsFromEnv();
  var _0x2a3395 = 13;
  const _0x23fbad = [];
  _0x2a3395 = 13;
  for (const _0x5bda21 of _0x30ab31) {
    var _0xbaab2e;
    const _0x2933f4 = parseAccountString(_0x5bda21);
    _0xbaab2e = 1;
    _0x2933f4 ? _0x23fbad.push(_0x2933f4) : console.log("账号格式错误：" + _0x5bda21);
  }
  _0x23fbad.forEach((_0x288167, _0x50bebc) => {
    _0x288167.index = _0x50bebc + 1;
  });
  return _0x23fbad;
}
async function executeConcurrently(_0x5e3f09, _0x258ad0, _0x405852, _0x1dad63) {
  const _0x463248 = new Array(_0x5e3f09.length);
  _0x1dad63 = 0;
  async function _0xa54fb() {
    while (true) {
      const _0xb0a5ce = _0x1dad63++;
      if (_0xb0a5ce >= _0x5e3f09.length) {
        return;
      }
      var _0x1c0c8d = 8;
      const _0x31acc2 = _0x5e3f09[_0xb0a5ce];
      _0x1c0c8d = 8;
      try {
        _0x463248[_0xb0a5ce] = await _0x405852(_0x31acc2, _0xb0a5ce);
      } catch (_0x167cc0) {
        console.log("并发执行异常（index=" + (_0xb0a5ce + 1) + "：）".split("").reverse().join("") + _0x167cc0.message);
        _0x463248[_0xb0a5ce] = null;
      }
    }
  }
  var _0x4e4ab4 = 17;
  const _0x454ddf = Array.from({
    length: Math.min(_0x258ad0, _0x5e3f09.length)
  }, _0xa54fb);
  _0x4e4ab4 = 9;
  await Promise.all(_0x454ddf);
  return _0x463248;
}
function formatAccountDisplay(_0x4402af, _0x3cd68a, _0x3f50ac) {
  const _0x5e1f66 = "账号[" + (_0x3cd68a || _0x4402af) + "]" + (_0x3f50ac ? "（" + _0x3f50ac + "）" : "");
  return colors.bright + colors.cyan + _0x5e1f66 + colors.reset;
}
async function processAccount(_0x2e011b) {
  if (_0x2e011b.proxyUrl) {
    const _0x2c35d9 = formatAccountDisplay(_0x2e011b.index, null, _0x2e011b.remark);
    const _0x597602 = await testProxyConnectivity(_0x2e011b.proxyUrl, _0x2c35d9);
    console.log(" -  ".split("").reverse().join("") + (_0x597602.ok ? "过通证验理代 ✅".split("").reverse().join("") : "❌ 代理验证失败") + " :".split("").reverse().join("") + _0x597602.msg);
    if (_0x597602.ok && _0x597602.ip && _0x597602.ip !== "localhost") {
      usedProxyIPs.has(_0x597602.ip) ? console.log("⚠️ 存在相同代理IP（" + _0x597602.ip + "），继续执行其余账号...") : usedProxyIPs.add(_0x597602.ip);
      console.log("🌐 " + _0x2c35d9 + " :理代用使 ".split("").reverse().join("") + _0x2e011b.proxyUrl);
    } else {
      if (!_0x597602.ok) {
        console.log(" ❌".split("").reverse().join("") + _0x2c35d9 + " 代理测试失败，跳过该账号");
        return {
          index: _0x2e011b.index,
          remark: _0x2e011b.remark || "无备注",
          nickname: "号账".split("").reverse().join("") + _0x2e011b.index,
          initialCoin: 0,
          finalCoin: 0,
          coinChange: 0,
          initialCash: 0,
          finalCash: 0,
          cashChange: 0,
          error: " :败失试测理代".split("").reverse().join("") + _0x597602.msg,
          skipped: true
        };
      }
    }
  } else {
    var _0x3ca85d = 10;
    const _0x1cd385 = formatAccountDisplay(_0x2e011b.index, null, _0x2e011b.remark);
    _0x3ca85d = "jinbjj".split("").reverse().join("");
    console.log("🌐 " + _0x1cd385 + "连直走，理代置配未 ".split("").reverse().join(""));
  }
  const _0x255c75 = formatAccountDisplay(_0x2e011b.index, null, _0x2e011b.remark);
  console.log("🔍 " + _0x255c75 + " 获取账号信息中...");
  let _0x439c13 = await getAccountBasicInfo(_0x2e011b.cookie, _0x2e011b.proxyUrl, _0x2e011b.index);
  let _0x4e2136 = _0x439c13?.["nickname"] || "号账".split("").reverse().join("") + _0x2e011b.index;
  if (_0x439c13) {
    var _0x5c0d32;
    const _0xdc34db = _0x439c13.totalCoin != null ? _0x439c13.totalCoin : "未知";
    _0x5c0d32 = 1;
    var _0x16015c;
    const _0x27dd8e = _0x439c13.allCash != null ? _0x439c13.allCash : "知未".split("").reverse().join("");
    _0x16015c = "gmcfhc";
    const _0x57cce3 = formatAccountDisplay(_0x2e011b.index, _0x4e2136, _0x2e011b.remark);
    const _0x32bb7c = _0x439c13.ud ? " :DU，".split("").reverse().join("") + _0x439c13.ud : "";
    enableColors ? console.log("✅ " + _0x57cce3 + " 登录成功，💰 当前金币: " + formatSuccess(_0xdc34db) + " :额余前当 ��，".split("").reverse().join("") + colorText(_0x27dd8e, colors.bright + colors.yellow) + _0x32bb7c) : console.log("✅ " + _0x57cce3 + " 登录成功，💰 当前金币: " + _0xdc34db + " :额余前当 ��，".split("").reverse().join("") + _0x27dd8e + _0x32bb7c);
  } else {
    var _0x2395b5;
    const _0x43b347 = formatAccountDisplay(_0x2e011b.index, _0x4e2136, _0x2e011b.remark);
    _0x2395b5 = 1;
    console.log("❌ " + _0x43b347 + "务任行执续继仍但，败失取获息信本基 ".split("").reverse().join(""));
  }
  const _0x2e06ee = _0x439c13?.["du".split("").reverse().join("")] || null;
  const _0x588991 = new KuaishouAccount({
    ..._0x2e011b,
    nickname: _0x4e2136,
    tasksToExecute: tasksToExecute,
    udFromLogin: _0x2e06ee
  });
  if (_0x439c13) {
    await _0x588991.checkCoinLimit();
    if (_0x588991.coinExceeded) {
      console.log("⚠️ " + _0x588991.getAccountDisplayName() + "务任行执不，值阈过超已币金始初 ".split("").reverse().join(""));
      var _0x332c31 = 16;
      const _0x5898b7 = await getAccountBasicInfo(_0x588991.getCookieWithCurrentDid(), _0x2e011b.proxyUrl, _0x2e011b.index);
      _0x332c31 = 11;
      var _0x246c59 = 17;
      const _0x3bdfd4 = _0x439c13?.["totalCoin"] || 0;
      _0x246c59 = "fiqagl";
      const _0x31caa0 = _0x5898b7?.["totalCoin"] || 0;
      const _0x210e7c = _0x31caa0 - _0x3bdfd4;
      var _0x4373b8 = 7;
      const _0x4b1967 = _0x439c13?.["allCash"] || 0;
      _0x4373b8 = 7;
      var _0xc011e8 = 15;
      const _0x3abadb = _0x5898b7?.["allCash"] || 0;
      _0xc011e8 = 12;
      const _0x14aad9 = _0x3abadb - _0x4b1967;
      return {
        index: _0x2e011b.index,
        remark: _0x2e011b.remark || "无备注",
        nickname: _0x4e2136,
        initialCoin: _0x3bdfd4,
        finalCoin: _0x31caa0,
        coinChange: _0x210e7c,
        initialCash: _0x4b1967,
        finalCash: _0x3abadb,
        cashChange: _0x14aad9,
        stats: _0x588991.getTaskStats(),
        coinLimitExceeded: true
      };
    }
  }
  await _0x588991.executeAllTasksByPriority();
  var _0x2b990f = 13;
  const _0x51b09c = await getAccountBasicInfo(_0x588991.getCookieWithCurrentDid(), _0x2e011b.proxyUrl, _0x2e011b.index);
  _0x2b990f = 0;
  const _0x2be3c2 = _0x439c13?.["totalCoin"] || 0;
  const _0x23bfe6 = _0x51b09c?.["totalCoin"] || 0;
  const _0x41b46b = _0x23bfe6 - _0x2be3c2;
  var _0x168514;
  const _0x3cae71 = _0x439c13?.["allCash"] || 0;
  _0x168514 = 14;
  const _0x4766e7 = _0x51b09c?.["allCash"] || 0;
  const _0x4d172c = _0x4766e7 - _0x3cae71;
  _0x588991.printTaskStats();
  return {
    index: _0x2e011b.index,
    remark: _0x2e011b.remark || "注备无".split("").reverse().join(""),
    nickname: _0x4e2136,
    initialCoin: _0x2be3c2,
    finalCoin: _0x23bfe6,
    coinChange: _0x41b46b,
    initialCash: _0x3cae71,
    finalCash: _0x4766e7,
    cashChange: _0x4d172c,
    stats: _0x588991.getTaskStats(),
    coinLimitExceeded: _0x588991.coinExceeded,
    infoFetchFailed: !_0x439c13
  };
}
function displayResultsTable(_0x42a3fd, _0x14571d, _0x5a4924, _0x5b3234, _0x3d5904, _0x5dce85) {
  if (!_0x42a3fd.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x150b32 = _0x42a3fd.reduce((_0x257c80, _0x334a4f) => _0x257c80 + (parseInt(_0x334a4f.initialCoin) || 0), 0);
  var _0x2608e4 = 14;
  const _0x3188a5 = _0x42a3fd.reduce((_0x566a23, _0x2fdbe4) => _0x566a23 + (parseInt(_0x2fdbe4.finalCoin) || 0), 0);
  _0x2608e4 = "leikgp".split("").reverse().join("");
  var _0x266ce6 = 7;
  const _0x2e2d53 = _0x3188a5 - _0x150b32;
  _0x266ce6 = 17;
  var _0x177972 = 6;
  const _0x110443 = _0x42a3fd.reduce((_0x6cb479, _0x31eea7) => _0x6cb479 + (parseFloat(_0x31eea7.initialCash) || 0), 0);
  _0x177972 = 7;
  const _0x5b812b = _0x42a3fd.reduce((_0x2ef19d, _0x4b053a) => _0x2ef19d + (parseFloat(_0x4b053a.finalCash) || 0), 0);
  var _0x3602f0 = 8;
  const _0x3636c3 = _0x5b812b - _0x110443;
  _0x3602f0 = 5;
  var _0x6fc9f9 = 13;
  _0x14571d = 0;
  _0x6fc9f9 = 0;
  _0x5a4924 = 0;
  _0x5b3234 = 0;
  _0x42a3fd.forEach(_0x543b08 => {
    _0x543b08.stats && Object.values(_0x543b08.stats).forEach(_0x35dcff => {
      _0x14571d += _0x35dcff.success + _0x35dcff.failed;
      _0x5a4924 += _0x35dcff.success;
      _0x5b3234 += _0x35dcff.totalReward;
    });
  });
  var _0x5e4976 = 9;
  const _0x10a878 = _0x14571d > 0 ? (_0x5a4924 / _0x14571d * 100).toFixed(1) : "0.0";
  _0x5e4976 = 3;
  var _0x139f90;
  const _0x5509ba = _0x42a3fd.filter(_0x58215f => _0x58215f.coinLimitExceeded).length;
  _0x139f90 = 3;
  const _0x321445 = _0x42a3fd.filter(_0x5e933b => _0x5e933b.skipped).length;
  const _0x55cbb4 = _0x42a3fd.filter(_0x465f07 => _0x465f07.infoFetchFailed).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerText("      快手极速版自动化任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x42a3fd.length).padEnd(22) + ("跳过账号: " + _0x321445).padEnd(22) + ("总任务数: " + _0x14571d).padEnd(22) + ("任务成功率: " + _0x10a878 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x2e2d53).padEnd(26) + ("总金币奖励: " + _0x5b3234).padEnd(26) + ("总余额变化: " + _0x3636c3.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  var _0x2d81fb;
  const _0x598e65 = ["序号", "备注", "称昵号账".split("").reverse().join(""), "初始金币", "币金终最".split("").reverse().join(""), "金币变化", "额余始初".split("").reverse().join(""), "最终余额", "化变额余".split("").reverse().join(""), "状态"];
  _0x2d81fb = "ifenoh";
  var _0x280cd1;
  const _0x3ae01e = [6, 16, 16, 12, 12, 12, 12, 12, 12, 10];
  _0x280cd1 = 6;
  _0x3d5904 = "|";
  _0x598e65.forEach((_0x14872a, _0x1b1e93) => {
    _0x3d5904 += centerText(_0x14872a, _0x3ae01e[_0x1b1e93]) + "|";
  });
  console.log(_0x3d5904);
  var _0x53c28e;
  _0x5dce85 = "|";
  _0x53c28e = 2;
  _0x3ae01e.forEach(_0x2b28fa => {
    _0x5dce85 += "-".repeat(_0x2b28fa) + "|";
  });
  console.log(_0x5dce85);
  _0x42a3fd.forEach(_0x1d9ecc => {
    var _0x13feea;
    let _0x26a25e = "|";
    _0x13feea = "eqcfml";
    _0x26a25e += centerText(_0x1d9ecc.index, _0x3ae01e[0]) + "|";
    _0x26a25e += centerText(_0x1d9ecc.remark, _0x3ae01e[1]) + "|";
    let _0x12a017 = _0x1d9ecc.nickname || "-";
    if (_0x1d9ecc.skipped) {
      _0x12a017 += "❌ ".split("").reverse().join("");
    } else {
      if (_0x1d9ecc.coinLimitExceeded) {
        _0x12a017 += "️⚠ ".split("").reverse().join("");
      } else {
        if (_0x1d9ecc.infoFetchFailed) {
          _0x12a017 += " 🔶";
        }
      }
    }
    _0x26a25e += centerText(_0x12a017.substring(0, _0x3ae01e[2] - 2), _0x3ae01e[2]) + "|";
    _0x26a25e += centerText(_0x1d9ecc.initialCoin, _0x3ae01e[3]) + "|";
    _0x26a25e += centerText(_0x1d9ecc.finalCoin, _0x3ae01e[4]) + "|";
    var _0x2b43de;
    const _0x786528 = _0x1d9ecc.coinChange >= 0 ? "+" + _0x1d9ecc.coinChange : _0x1d9ecc.coinChange;
    _0x2b43de = "ncfdbb".split("").reverse().join("");
    _0x26a25e += centerText(_0x786528, _0x3ae01e[5]) + "|";
    _0x26a25e += centerText(_0x1d9ecc.initialCash, _0x3ae01e[6]) + "|";
    _0x26a25e += centerText(_0x1d9ecc.finalCash, _0x3ae01e[7]) + "|";
    var _0x5c4952 = 3;
    const _0x449737 = _0x1d9ecc.cashChange >= 0 ? "+" + _0x1d9ecc.cashChange.toFixed(2) : _0x1d9ecc.cashChange.toFixed(2);
    _0x5c4952 = "dhbblk";
    _0x26a25e += centerText(_0x449737, _0x3ae01e[8]) + "|";
    let _0x315ebd = "成完".split("").reverse().join("");
    if (_0x1d9ecc.skipped) {
      _0x315ebd = "过跳".split("").reverse().join("");
    } else {
      if (_0x1d9ecc.coinLimitExceeded) {
        _0x315ebd = "超限";
      } else {
        if (_0x1d9ecc.infoFetchFailed) {
          _0x315ebd = "息信无".split("").reverse().join("");
        }
      }
    }
    _0x26a25e += centerText(_0x315ebd, _0x3ae01e[9]) + "|";
    console.log(_0x26a25e);
  });
  console.log("=".repeat(80));
  console.log("|" + centerText("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
async function testSignService() {
  const _0x1c66fe = {
    uPyqu: "encsign",
    LUDYr: "dGVzdF9kYXRh",
    AOpfn: "test_user",
    iedug: function (_0xb3f2ab, _0x18e7b2, _0x432988, _0xc4650e) {
      return _0xb3f2ab(_0x18e7b2, _0x432988, _0xc4650e);
    },
    PSIyL: "POST",
    pOlDG: function (_0xaf9fd7, _0x327faf) {
      return _0xaf9fd7 + _0x327faf;
    },
    qvZZm: "SIGN_API_U" + "LR".split("").reverse().join(""),
    KDWHH: "/encsign",
    AlrLl: "stringify",
    PuICJ: "application/json",
    zwnUi: "encsign签名服务测试",
    OUqDs: "log",
    DoLYv: "应响无 :败失试测务服名签ngiscne ❌",
    PFHXI: "status",
    msmAZ: "功成试测务服名签ngiscne ✅",
    XoiGB: function (_0x5aaa41, _0x845d06) {
      return _0x5aaa41 + _0x845d06;
    },
    upUMu: "❌ encsign签名服务测试失败: ",
    dECKH: "误错知未",
    yuDWD: " :常异试测务服名签ngiscne ❌",
    WSTKq: "message"
  };
  try {
    const _0x4255dd = {
      type: _0x1c66fe.uPyqu,
      data: _0x1c66fe.LUDYr,
      ud: _0x1c66fe.AOpfn,
      script_version: SCRIPT_VERSION
    };
    const {
      response: _0x4d6e0d,
      body: _0x2478a1
    } = await _0x1c66fe.iedug(sendRequest, {
      method: _0x1c66fe.PSIyL,
      url: _0x1c66fe.pOlDG(API_CONFIG[_0x1c66fe.qvZZm], _0x1c66fe.KDWHH),
      body: JSON[_0x1c66fe.AlrLl](_0x4255dd),
      headers: {
        "Content-Type": _0x1c66fe.PuICJ
      },
      timeout: 10000
    }, null, _0x1c66fe.zwnUi);
    if (!_0x4d6e0d) {
      console[_0x1c66fe.OUqDs](_0x1c66fe.DoLYv.split("").reverse().join(""));
      return false;
    }
    return _0x2478a1 && _0x2478a1[_0x1c66fe.PFHXI] ? (console[_0x1c66fe.OUqDs](_0x1c66fe.msmAZ.split("").reverse().join("")), true) : (console[_0x1c66fe.OUqDs](_0x1c66fe.XoiGB(_0x1c66fe.upUMu, _0x2478a1?.["message"] || _0x1c66fe.dECKH.split("").reverse().join(""))), false);
  } catch (_0x510253) {
    console[_0x1c66fe.OUqDs](_0x1c66fe.XoiGB(_0x1c66fe.yuDWD.split("").reverse().join(""), _0x510253[_0x1c66fe.WSTKq]));
    return false;
  }
}
async function testNssigService() {
  try {
    const _0x28bdad = getOrCreateDeviceId();
    var _0x397fa9 = 9;
    const _0x28f8e0 = {
      type: "nssig",
      path: "/rest/e/reward/mixed/ad",
      data: "test=data&salt=test_salt",
      salt: "test_salt",
      ud: "test_user",
      script_version: SCRIPT_VERSION,
      device_id: _0x28bdad
    };
    _0x397fa9 = 7;
    const {
      response: _0x2d3579,
      body: _0x4de8a8
    } = await sendRequest({
      method: "POST",
      url: API_CONFIG.SIGN_API_URL + "/nssig",
      body: JSON.stringify(_0x28f8e0),
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 10000
    }, null, "nssig签名服务测试");
    if (!_0x2d3579) {
      console.log("应响无 :败失试测务服名签gissn ❌".split("").reverse().join(""));
      return false;
    }
    return _0x4de8a8 && _0x4de8a8.status ? (console.log("功成试测务服名签gissn ✅".split("").reverse().join("")), true) : (console.log(" :败失试测务服名签gissn ❌".split("").reverse().join("") + (_0x4de8a8?.["message"] || "未知错误")), false);
  } catch (_0xb5b899) {
    console.log("❌ nssig签名服务测试异常: " + _0xb5b899.message);
    return false;
  }
}
(async () => {
  const _0x77c83a = {
    FcdTr: function (_0xbb0d4f, _0x4bc404) {
      return _0xbb0d4f(_0x4bc404);
    },
    JJlhH: "push",
    feLly: "index",
    QZUuY: "remark",
    PwbVb: "无备注",
    CaLUE: function (_0xc5e7d7, _0x21bd3d) {
      return _0xc5e7d7 + _0x21bd3d;
    },
    Eheyx: function (_0x1884d1, _0x3034b6) {
      return _0x1884d1 ^ _0x3034b6;
    },
    hgSYJ: function (_0x4f5182, _0x5b779a) {
      return _0x4f5182 ^ _0x5b779a;
    },
    KbApO: function (_0xac6cdd, _0x511aeb) {
      return _0xac6cdd ^ _0x511aeb;
    },
    FDVOM: "log",
    GTujn: function (_0x43a615, _0x46cbb5) {
      return _0x43a615 + _0x46cbb5;
    },
    oSLik: "账号[",
    xIHcB: function (_0x5d75fc, _0x566077) {
      return _0x5d75fc + _0x566077;
    },
    uHxbp: " ❌ 执行异常：",
    MwNCN: "message",
    ACOQw: "✅ 永久公益版 通知群 10298322" + "02".split("").reverse().join(""),
    wSzfy: function (_0x1b865e) {
      return _0x1b865e();
    },
    sbNkL: function (_0x57a4f2, _0x221b7f) {
      return _0x57a4f2 + _0x221b7f;
    },
    zlCAp: "📱 设备ID: ",
    hMIJj: function (_0x4b8ca9) {
      return _0x4b8ca9();
    },
    yitUo: "qcfgji",
    ZTcFC: function (_0x29887a) {
      return _0x29887a();
    },
    lmMOU: function (_0x59bc56, _0x3ed37b) {
      return _0x59bc56 || _0x3ed37b;
    },
    PbrfT: "2|1|5|3|6|0|4",
    ojpmP: "  4. 防火墙或代理设置",
    aZUFP: "💡 请检查以下问题:",
    YRiZw: "行执止终本脚，败失试测务服名签 ❌\n",
    WFySx: "  2. 签名服务地址是否正确",
    fFlxc: "exit",
    pfMnk: function (_0x4cce8a, _0x171e0d) {
      return _0x4cce8a ^ _0x171e0d;
    },
    OOOTN: "常正否是接连络网 .1  ",
    NuBgg: "  3. 服务是否可用",
    nsbqP: function (_0x5eb856) {
      return _0x5eb856();
    },
    KEYWM: function (_0x5b3432, _0x4470db) {
      return _0x5b3432 + _0x4470db;
    },
    VdHcW: function (_0x3f765f, _0x5201ba) {
      return _0x3f765f ^ _0x5201ba;
    },
    JBLmN: "length",
    VwkUF: "error",
    GNAHp: "\n❌ 错误: 未配置账号信息",
    UntTl: "\n💡 请设置环境变量 ksck 或 ksck1, ksck2... 来配置账号",
    ByCMP: function (_0x507066, _0x38406c) {
      return _0x507066 ^ _0x38406c;
    },
    GBIAa: "═══════════════════════════════════════════════════════════════",
    PPeqz: "📋 当前配置信息：",
    GwMhj: " :)TIMIL_NIOCSK( 限上币金  ",
    ZGZvY: function (_0x320047, _0x22be9e) {
      return _0x320047 + _0x22be9e;
    },
    euMUM: " :)DLOHSERHT_DRAWER_WOLSK( 值阈励奖低  ",
    VwuAi: function (_0x212839, _0x4ce60d) {
      return _0x212839 + _0x4ce60d;
    },
    PvkjS: " :)TIMIL_DRAWER_WOLSK( 限上励奖低续连  ",
    imbLp: function (_0x192181, _0x2b0db4) {
      return _0x192181 + _0x2b0db4;
    },
    XSgTI: "( 行进时同号账个每 :略策发并  ",
    WopMC: " 并发)",
    zgFsG: function (_0x49fdf9, _0x4e2033) {
      return _0x49fdf9 + _0x4e2033;
    },
    Qsjrr: " :)SDA_EVIL_PIKS( 告广播直过跳  ",
    bQvel: function (_0x4fb4e3, _0x541ff3) {
      return _0x4fb4e3 + _0x541ff3;
    },
    RRBBa: "试重，用启",
    YcnPD: function (_0x480928, _0x3f04ac) {
      return _0x480928 + _0x3f04ac;
    },
    FFvqj: "  执行任务 (Task): ",
    SHDVx: "join",
    aVRWo: "includes",
    qiDxx: "look",
    roRhC: function (_0x5fca68, _0x2090d6) {
      return _0x5fca68 + _0x2090d6;
    },
    WGFvy: " :)TNUOC_KOOLSK( 数次行执总 kool  ",
    goCTT: "xob",
    YPVvy: function (_0x1bc081, _0x5d17ad) {
      return _0x1bc081 + _0x5d17ad;
    },
    OpsSn: "  box 总执行次数 (KSBOX_COUNT): ",
    fsNCj: "doof",
    uDRob: function (_0x3c7bf3, _0x3a5b2c) {
      return _0x3c7bf3 + _0x3a5b2c;
    },
    yiDER: "  food 总执行次数 (KSFOOD_COUNT): ",
    sdwed: "kbox",
    SfwiM: "  kbox 总执行次数 (KSKBOX_COUNT): ",
    WGLGM: "hcraes",
    kkitl: "  search 总执行次数 (KSSEARCH_COUNT): ",
    VQiOq: "wollof_kool",
    fupXs: "  每次 look 成功追加 look_follow 次数 (KSFOLLOW_COUNT): ",
    ROCSc: "search_follow",
    VvjjX: function (_0x12738c, _0x31466a) {
      return _0x12738c + _0x31466a;
    },
    asiSB: "  每次 search 成功追加 search_follow 次数 (KSSEARCHFOLLOW_COUNT): ",
    SDorU: " 永久公益版 通知群 1029832220",
    OpcPF: "\n═══════════════════════════════════════════════════════════════",
    Zanwc: function (_0x35d89f, _0x49c430) {
      return _0x35d89f + _0x49c430;
    },
    AeuJA: " 共，务任行执始开 ��",
    vFBER: "\n...号账个 ",
    cQoiJ: function (_0x4e6a33, _0x22978a) {
      return _0x4e6a33 ^ _0x22978a;
    },
    LjzBO: function (_0x378d86, _0x108ec4) {
      return _0x378d86 ^ _0x108ec4;
    },
    yHfMc: function (_0x38930e, _0x38e548) {
      return _0x38930e ^ _0x38e548;
    },
    VtUoj: "max",
    cNTEv: function (_0x32f8a1, _0x1f3cc9) {
      return _0x32f8a1 ^ _0x1f3cc9;
    },
    XKoYg: "min",
    ZfvQW: function (_0x417047, _0x2860af) {
      return _0x417047 ^ _0x2860af;
    },
    RCNfW: function (_0x31c143, _0xde5b5e, _0x569f17, _0x786ff3) {
      return _0x31c143(_0xde5b5e, _0x569f17, _0x786ff3);
    },
    sFLwr: "sort",
    EHkvs: "\n全部完成。",
    rdvNP: "\n---------------------------------------------- 账号信息汇总 ----------------------------------------------",
    QBeeW: function (_0x3efb33, _0xedf1a7) {
      return _0x3efb33(_0xedf1a7);
    }
  };
  console[_0x77c83a.FDVOM](_0x77c83a.ACOQw);
  const _0x269f2a = _0x77c83a.wSzfy(getOrCreateDeviceId);
  console[_0x77c83a.FDVOM](_0x77c83a.sbNkL(_0x77c83a.zlCAp, _0x269f2a));
  var _0x1df22e;
  const _0x3e77e4 = await _0x77c83a.hMIJj(testSignService);
  _0x1df22e = _0x77c83a.yitUo.split("").reverse().join("");
  const _0xfb06cc = await _0x77c83a.ZTcFC(testNssigService);
  if (_0x77c83a.lmMOU(!_0x3e77e4, !_0xfb06cc)) {
    const _0xdfd52b = _0x77c83a.PbrfT.split("|");
    let _0x53a4b3 = 0;
    while (true) {
      switch (_0xdfd52b[_0x53a4b3++]) {
        case "0":
          console[_0x77c83a.FDVOM](_0x77c83a.ojpmP);
          continue;
        case "1":
          console[_0x77c83a.FDVOM](_0x77c83a.aZUFP);
          continue;
        case "2":
          console[_0x77c83a.FDVOM](_0x77c83a.YRiZw.split("").reverse().join(""));
          continue;
        case "3":
          console[_0x77c83a.FDVOM](_0x77c83a.WFySx);
          continue;
        case "4":
          process[_0x77c83a.fFlxc](_0x77c83a.pfMnk(633528, 633529));
          continue;
        case "5":
          console[_0x77c83a.FDVOM](_0x77c83a.OOOTN.split("").reverse().join(""));
          continue;
        case "6":
          console[_0x77c83a.FDVOM](_0x77c83a.NuBgg);
          continue;
      }
      break;
    }
  }
  var _0x118cbe;
  const _0x325559 = _0x77c83a.nsbqP(getAllAccountConfigs);
  _0x118cbe = _0x77c83a.KEYWM(_0x77c83a.VdHcW(713806, 713798), _0x77c83a.KbApO(291725, 291721));
  !_0x325559[_0x77c83a.JBLmN] && (console[_0x77c83a.VwkUF](_0x77c83a.GNAHp), console[_0x77c83a.FDVOM](_0x77c83a.UntTl), process[_0x77c83a.fFlxc](_0x77c83a.ByCMP(154350, 154351)));
  console[_0x77c83a.FDVOM](_0x77c83a.GBIAa);
  console[_0x77c83a.FDVOM](_0x77c83a.PPeqz);
  console[_0x77c83a.FDVOM](_0x77c83a.sbNkL(_0x77c83a.GwMhj.split("").reverse().join(""), COIN_LIMIT));
  console[_0x77c83a.FDVOM](_0x77c83a.ZGZvY(_0x77c83a.euMUM.split("").reverse().join(""), LOW_REWARD_THRESHOLD));
  console[_0x77c83a.FDVOM](_0x77c83a.VwuAi(_0x77c83a.PvkjS.split("").reverse().join(""), LOW_REWARD_LIMIT));
  console[_0x77c83a.FDVOM](_0x77c83a.imbLp(_0x77c83a.xIHcB(_0x77c83a.XSgTI.split("").reverse().join(""), accountCount), _0x77c83a.WopMC));
  console[_0x77c83a.FDVOM](_0x77c83a.zgFsG(_0x77c83a.Qsjrr.split("").reverse().join(""), SKIP_LIVE_ADS ? _0x77c83a.GTujn(_0x77c83a.bQvel(_0x77c83a.RRBBa.split("").reverse().join(""), SKIP_LIVE_MAX_RETRIES), "次") : "禁用"));
  console[_0x77c83a.FDVOM](_0x77c83a.YcnPD(_0x77c83a.FFvqj, tasksToExecute[_0x77c83a.SHDVx](", ")));
  tasksToExecute[_0x77c83a.aVRWo](_0x77c83a.qiDxx) && console[_0x77c83a.FDVOM](_0x77c83a.roRhC(_0x77c83a.WGFvy.split("").reverse().join(""), LOOK_COUNT));
  tasksToExecute[_0x77c83a.aVRWo](_0x77c83a.goCTT.split("").reverse().join("")) && console[_0x77c83a.FDVOM](_0x77c83a.YPVvy(_0x77c83a.OpsSn, BOX_COUNT));
  tasksToExecute[_0x77c83a.aVRWo](_0x77c83a.fsNCj.split("").reverse().join("")) && console[_0x77c83a.FDVOM](_0x77c83a.uDRob(_0x77c83a.yiDER, FOOD_COUNT));
  tasksToExecute[_0x77c83a.aVRWo](_0x77c83a.sdwed) && console[_0x77c83a.FDVOM](_0x77c83a.sbNkL(_0x77c83a.SfwiM, KBOX_COUNT));
  tasksToExecute[_0x77c83a.aVRWo](_0x77c83a.WGLGM.split("").reverse().join("")) && console[_0x77c83a.FDVOM](_0x77c83a.GTujn(_0x77c83a.kkitl, SEARCH_COUNT));
  tasksToExecute[_0x77c83a.aVRWo](_0x77c83a.VQiOq.split("").reverse().join("")) && console[_0x77c83a.FDVOM](_0x77c83a.uDRob(_0x77c83a.fupXs, FOLLOW_COUNT));
  tasksToExecute[_0x77c83a.aVRWo](_0x77c83a.ROCSc) && console[_0x77c83a.FDVOM](_0x77c83a.VvjjX(_0x77c83a.asiSB, SEARCH_FOLLOW_COUNT));
  console[_0x77c83a.FDVOM](_0x77c83a.SDorU);
  console[_0x77c83a.FDVOM](_0x77c83a.OpcPF.split("").reverse().join(""));
  console[_0x77c83a.FDVOM](_0x77c83a.bQvel(_0x77c83a.Zanwc(_0x77c83a.AeuJA.split("").reverse().join(""), _0x325559[_0x77c83a.JBLmN]), _0x77c83a.vFBER.split("").reverse().join("")));
  var _0x44aeb4 = _0x77c83a.roRhC(_0x77c83a.cQoiJ(120347, 120338), _0x77c83a.LjzBO(366308, 366304));
  const _0x5b6446 = [];
  _0x44aeb4 = _0x77c83a.GTujn(_0x77c83a.yHfMc(628536, 628528), _0x77c83a.yHfMc(326634, 326627));
  var _0x4970f2;
  const _0x8a1dc9 = Math[_0x77c83a.VtUoj](_0x77c83a.cNTEv(308331, 308330), Math[_0x77c83a.XKoYg](MAX_CONCURRENCY, _0x325559[_0x77c83a.JBLmN]));
  _0x4970f2 = _0x77c83a.ZfvQW(847075, 847074);
  await _0x77c83a.RCNfW(executeConcurrently, _0x325559, _0x8a1dc9, async _0x363d57 => {
    try {
      const _0x3a1185 = await _0x77c83a.FcdTr(processAccount, _0x363d57);
      _0x5b6446[_0x77c83a.JJlhH]({
        index: _0x363d57[_0x77c83a.feLly],
        remark: _0x363d57[_0x77c83a.QZUuY] || _0x77c83a.PwbVb,
        nickname: _0x3a1185?.["nickname"] || _0x77c83a.CaLUE("号账".split("").reverse().join(""), _0x363d57[_0x77c83a.feLly]),
        initialCoin: _0x3a1185?.["initialCoin"] || _0x77c83a.Eheyx(658264, 658264),
        finalCoin: _0x3a1185?.["finalCoin"] || _0x77c83a.hgSYJ(384300, 384300),
        coinChange: _0x3a1185?.["coinChange"] || _0x77c83a.hgSYJ(470609, 470609),
        initialCash: _0x3a1185?.["initialCash"] || _0x77c83a.KbApO(252470, 252470),
        finalCash: _0x3a1185?.["finalCash"] || _0x77c83a.KbApO(363149, 363149),
        cashChange: _0x3a1185?.["cashChange"] || _0x77c83a.KbApO(923829, 923829),
        stats: _0x3a1185?.["stats"] || {},
        coinLimitExceeded: _0x3a1185?.["coinLimitExceeded"] || false,
        skipped: _0x3a1185?.["skipped"] || false,
        infoFetchFailed: _0x3a1185?.["infoFetchFailed"] || false,
        error: _0x3a1185?.["error"] || null
      });
    } catch (_0x5e1a8d) {
      console[_0x77c83a.FDVOM](_0x77c83a.CaLUE(_0x77c83a.GTujn(_0x77c83a.CaLUE(_0x77c83a.CaLUE(_0x77c83a.CaLUE(_0x77c83a.oSLik, _0x363d57[_0x77c83a.feLly]), "]"), _0x363d57[_0x77c83a.QZUuY] ? _0x77c83a.GTujn(_0x77c83a.xIHcB("（", _0x363d57[_0x77c83a.QZUuY]), "）") : ""), _0x77c83a.uHxbp), _0x5e1a8d[_0x77c83a.MwNCN]));
      _0x5b6446[_0x77c83a.JJlhH]({
        index: _0x363d57[_0x77c83a.feLly],
        remark: _0x363d57[_0x77c83a.QZUuY] || _0x77c83a.PwbVb,
        nickname: _0x77c83a.GTujn("号账".split("").reverse().join(""), _0x363d57[_0x77c83a.feLly]),
        initialCoin: 0,
        finalCoin: 0,
        coinChange: 0,
        initialCash: 0,
        finalCash: 0,
        cashChange: 0,
        error: _0x5e1a8d[_0x77c83a.MwNCN],
        skipped: true
      });
    }
  });
  _0x5b6446[_0x77c83a.sFLwr]((_0x858df1, _0x33d3e0) => _0x858df1.index - _0x33d3e0.index);
  console[_0x77c83a.FDVOM](_0x77c83a.EHkvs, "✅");
  console[_0x77c83a.FDVOM](_0x77c83a.rdvNP);
  _0x77c83a.QBeeW(displayResultsTable, _0x5b6446);
})();