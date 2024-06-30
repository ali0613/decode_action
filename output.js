//Sun Jun 30 2024 17:00:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x499185 = _0x17d42a("中国联通"),
  _0x512483 = require("got"),
  _0x1c1c7e = require("path"),
  {
    exec: _0xf77058
  } = require("child_process"),
  _0x29e520 = require("crypto-js"),
  {
    CookieJar: _0x44a7fa
  } = require("tough-cookie"),
  _0x514bcb = "chinaUnicom",
  _0xe1ba5 = ["\n", "&", "@"],
  _0x1e2e54 = [_0x514bcb + "Cookie"],
  _0x3cfd48 = process.env[_0x514bcb + "Sign"] === "false",
  _0x18fc11 = process.env[_0x514bcb + "Ltzf"] === "false",
  _0x5f3a25 = 50000,
  _0x4db8a9 = 3;
const _0x129b14 = 2.03,
  _0x5c4d4a = "chinaUnicom",
  _0x2e27df = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x5eb95b = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x5c4d4a + ".json",
  _0x4d480e = 5,
  _0x232718 = "iphone_c@11.0503",
  _0x45e49e = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:" + _0x232718 + "}",
  _0x1b9b19 = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0xb58acf = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x41e222 = "10000002",
  _0xc7b5ad = "7k1HcDL8RKvc",
  _0x44a3a5 = "update!@#1234567",
  _0x29f188 = "16-Bytes--String",
  _0x360c0c = "225",
  _0x69e025 = "225",
  _0x56cd2d = "party",
  _0x5e013c = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x3dbc3a = "1",
  _0x13c5d3 = "wocareMBHServiceLife1",
  _0x3e498f = "beea1c7edf7c4989b2d3621c4255132f",
  _0x166269 = "f4cd4ffeb5554586acf65ba7110534f5",
  _0x59dc4e = "0123456789",
  _0x4b1272 = "qwertyuiopasdfghjklzxcvbnm",
  _0x567ec7 = process.env[_0x514bcb + "Uuid"] || _0x499185.randomUuid(),
  _0x11dfd9 = [9, 10, 11, 12, 13],
  _0x57b639 = 1000,
  _0x15df8c = 5000,
  _0xb33876 = "1001000003",
  _0x8da94d = "100002",
  _0x457514 = "";
let _0xe5f997 = [],
  _0x588f67 = [],
  _0x2deaba = [],
  _0x3dcf0b = null,
  _0x4d607c = [6640, 6641];
const _0x268b06 = 7,
  _0x4a92b0 = 5,
  _0x28e814 = 5,
  _0x2a356a = {
    name: "星座配对",
    id: 2
  };
const _0x3122bd = {
  name: "大转盘",
  id: 3
};
const _0x310ca6 = {
  name: "盲盒抽奖",
  id: 4
};
const _0x33ff4a = [_0x2a356a, _0x3122bd, _0x310ca6];
function _0x53d0bd(_0x5d9270, _0x27d0e3, _0x2c09f8, _0x1c1c94, _0x4463f2, _0x1fe5d3) {
  return _0x29e520[_0x5d9270].encrypt(_0x29e520.enc.Utf8.parse(_0x1c1c94), _0x29e520.enc.Utf8.parse(_0x4463f2), {
    mode: _0x29e520.mode[_0x27d0e3],
    padding: _0x29e520.pad[_0x2c09f8],
    iv: _0x29e520.enc.Utf8.parse(_0x1fe5d3)
  }).ciphertext.toString(_0x29e520.enc.Hex);
}
function _0x19c855(_0x50205b, _0x5bbb5e, _0x57df75, _0x3aa5ba, _0x367faf, _0x5b0ce9) {
  return _0x29e520[_0x50205b].decrypt({
    ciphertext: _0x29e520.enc.Hex.parse(_0x3aa5ba)
  }, _0x29e520.enc.Utf8.parse(_0x367faf), {
    mode: _0x29e520.mode[_0x5bbb5e],
    padding: _0x29e520.pad[_0x57df75],
    iv: _0x29e520.enc.Utf8.parse(_0x5b0ce9)
  }).toString(_0x29e520.enc.Utf8);
}
let _0x550a63 = 0,
  _0x242a86 = 0;
function _0xf1ca0f() {
  _0x242a86 = 1;
  process.on("SIGTERM", () => {
    _0x242a86 = 2;
    process.exit(0);
  });
  const _0x57d217 = _0x1c1c7e.basename(process.argv[1]),
    _0x5c7b2b = ["bash", "timeout", "grep"];
  let _0x1650f3 = ["ps afx"];
  _0x1650f3.push("grep " + _0x57d217);
  _0x1650f3 = _0x1650f3.concat(_0x5c7b2b.map(_0x2a5042 => "grep -v \"" + _0x2a5042 + " \""));
  _0x1650f3.push("wc -l");
  const _0x190217 = _0x1650f3.join("|"),
    _0xf9e8da = () => {
      _0xf77058(_0x190217, (_0x5a8c81, _0x4aab68, _0x12512c) => {
        if (_0x5a8c81 || _0x12512c) {
          return;
        }
        _0x550a63 = parseInt(_0x4aab68.trim(), 10);
      });
      if (_0x242a86 == 1) {
        setTimeout(_0xf9e8da, 2000);
      }
    };
  _0xf9e8da();
}
class _0xe37418 {
  constructor() {
    this.index = _0x499185.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x4bceb3 = {
      limit: 0
    };
    const _0x4c26cb = {
      Connection: "keep-alive"
    };
    const _0x33d679 = {
      retry: _0x4bceb3,
      timeout: _0x5f3a25,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x4c26cb
    };
    this.got = _0x512483.extend(_0x33d679);
    if (_0x242a86 == 0) {
      _0xf1ca0f();
    }
  }
  log(_0x31f875, _0x5d1ac4 = {}) {
    var _0x51d203 = "",
      _0x53c958 = _0x499185.userCount.toString().length;
    if (this.index) {
      _0x51d203 += "账号[" + _0x499185.padStr(this.index, _0x53c958) + "]";
    }
    if (this.name) {
      _0x51d203 += "[" + this.name + "]";
    }
    _0x499185.log(_0x51d203 + _0x31f875, _0x5d1ac4);
  }
  set_cookie(_0x24452c, _0x35aca2, _0x23f4d1, _0x53e663, _0x369050 = {}) {
    this.cookieJar.setCookieSync(_0x24452c + "=" + _0x35aca2 + "; Domain=" + _0x23f4d1 + ";", "" + _0x53e663);
  }
  async request(_0xc973be) {
    const _0xf8d751 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x198518 = ["TimeoutError"],
      _0x4f790d = ["EPROTO"],
      _0x5d3ec3 = [];
    var _0x207e35 = null,
      _0x1820b2 = 0,
      _0x2a93bb = _0xc973be.fn || _0xc973be.url;
    let _0xa5a539 = _0x499185.get(_0xc973be, "valid_code", _0x5d3ec3);
    _0xc973be.method = _0xc973be?.["method"]?.["toUpperCase"]() || "GET";
    let _0x53be84, _0x40dd3d;
    while (_0x1820b2 < _0x4db8a9) {
      try {
        _0x1820b2++;
        _0x53be84 = "";
        _0x40dd3d = "";
        let _0x3cc458 = null,
          _0x54d1e6 = _0xc973be?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x5f3a25,
          _0x3863d6 = false,
          _0x1458fe = Math.max(this.index - 2, 0),
          _0x1414e5 = Math.min(Math.max(this.index - 3, 1), 3),
          _0x25a777 = Math.min(Math.max(this.index - 4, 1), 4),
          _0xfe375a = _0x1458fe * _0x1414e5 * _0x25a777 * 400,
          _0x26b38a = _0x1458fe * _0x1414e5 * _0x25a777 * 1800,
          _0x54df92 = _0xfe375a + Math.floor(Math.random() * _0x26b38a),
          _0x16d072 = _0x550a63 * (_0x550a63 - 1) * 2000,
          _0x5b4499 = (_0x550a63 - 1) * (_0x550a63 - 1) * 2000,
          _0x199319 = _0x16d072 + Math.floor(Math.random() * _0x5b4499),
          _0x5d62b6 = Math.max(_0x499185.userCount - 2, 0),
          _0x341376 = Math.max(_0x499185.userCount - 3, 0),
          _0x17c57d = _0x5d62b6 * 200,
          _0x138b6a = _0x341376 * 400,
          _0x42f44f = _0x17c57d + Math.floor(Math.random() * _0x138b6a),
          _0x5e4218 = _0x54df92 + _0x199319 + _0x42f44f;
        await _0x499185.wait(_0x5e4218);
        await new Promise(async _0x1eebea => {
          setTimeout(() => {
            _0x3863d6 = true;
            _0x1eebea();
          }, _0x54d1e6);
          await this.got(_0xc973be).then(_0x2d15be => {
            _0x207e35 = _0x2d15be;
          }, _0x55d817 => {
            _0x3cc458 = _0x55d817;
            _0x207e35 = _0x55d817.response;
            _0x53be84 = _0x3cc458?.["code"] || "";
            _0x40dd3d = _0x3cc458?.["name"] || "";
          });
          _0x1eebea();
        });
        if (_0x3863d6) {
          this.log("[" + _0x2a93bb + "]请求超时(" + _0x54d1e6 / 1000 + "秒)，重试第" + _0x1820b2 + "次");
        } else {
          if (_0x4f790d.includes(_0x53be84)) {
            this.log("[" + _0x2a93bb + "]请求错误[" + _0x53be84 + "][" + _0x40dd3d + "]");
            if (_0x3cc458?.["message"]) {
              console.log(_0x3cc458.message);
            }
            break;
          } else {
            if (_0x198518.includes(_0x40dd3d)) {
              this.log("[" + _0x2a93bb + "]请求错误[" + _0x53be84 + "][" + _0x40dd3d + "]，重试第" + _0x1820b2 + "次");
            } else {
              if (_0xf8d751.includes(_0x53be84)) {
                this.log("[" + _0x2a93bb + "]请求错误[" + _0x53be84 + "][" + _0x40dd3d + "]，重试第" + _0x1820b2 + "次");
              } else {
                let _0x4832f0 = _0x207e35?.["statusCode"] || "",
                  _0x16d0ef = _0x4832f0 / 100 | 0;
                if (_0x4832f0) {
                  _0x16d0ef > 3 && !_0xa5a539.includes(_0x4832f0) && (_0x4832f0 ? this.log("请求[" + _0x2a93bb + "]返回[" + _0x4832f0 + "]") : this.log("请求[" + _0x2a93bb + "]错误[" + _0x53be84 + "][" + _0x40dd3d + "]"));
                  if (_0x16d0ef <= 4) {
                    break;
                  }
                } else {
                  this.log("请求[" + _0x2a93bb + "]错误[" + _0x53be84 + "][" + _0x40dd3d + "]");
                }
              }
            }
          }
        }
      } catch (_0x35e3d2) {
        _0x35e3d2.name == "TimeoutError" ? this.log("[" + _0x2a93bb + "]请求超时，重试第" + _0x1820b2 + "次") : this.log("[" + _0x2a93bb + "]请求错误(" + _0x35e3d2.message + ")，重试第" + _0x1820b2 + "次");
      }
    }
    const _0x145802 = {
      statusCode: _0x53be84 || -1,
      headers: null,
      result: null
    };
    if (_0x207e35 == null) {
      return Promise.resolve(_0x145802);
    }
    let {
      statusCode: _0x54391c,
      headers: _0x3e35fa,
      body: _0x267904
    } = _0x207e35;
    if (_0x267904) {
      try {
        _0x267904 = JSON.parse(_0x267904);
      } catch {}
    }
    const _0x5ca1e6 = {
      statusCode: _0x54391c,
      headers: _0x3e35fa,
      result: _0x267904
    };
    return Promise.resolve(_0x5ca1e6);
  }
}
let _0x4dbcfe = _0xe37418;
try {
  let _0x364c75 = require("./LocalBasic");
  _0x4dbcfe = _0x364c75;
} catch {}
let _0x22371a = new _0x4dbcfe(_0x499185);
class _0x2dce62 extends _0x4dbcfe {
  constructor(_0x5a2efb) {
    super(_0x499185);
    this.cookieJar = new _0x44a7fa();
    const _0x2f66fa = {
      "User-Agent": _0x45e49e
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x2f66fa
    });
    let _0x311046 = _0x5a2efb.split("#");
    this.token_online = _0x311046[0];
    this.unicomTokenId = _0x499185.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x499185.randomString(32, _0x59dc4e + _0x4b1272).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.moonbox_task_record = {};
    this.moonbox_notified = [];
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x38582e, _0x320d4e, _0x44c127 = {}) {
    let _0xa9a518 = _0x44c127?.["domain"] || "10010.com",
      _0x5aaef6 = _0x44c127?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x38582e, _0x320d4e, _0xa9a518, _0x5aaef6, _0x44c127);
  }
  get_bizchannelinfo() {
    const _0xe4bc49 = {
      bizChannelCode: _0x69e025,
      disriBiz: _0x56cd2d,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x1e5a36 = JSON.stringify(_0xe4bc49);
    return _0x1e5a36;
  }
  get_epay_authinfo() {
    const _0x57f938 = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x57f938);
  }
  get_flmf_data(_0x1a9c66 = "welfareCenter") {
    const _0x4bfb56 = {
      sid: this.flmf_sid,
      actcode: _0x1a9c66
    };
    return _0x4bfb56;
  }
  encode_woread(_0x110614) {
    let _0x3af2b3 = _0x53d0bd("AES", "CBC", "Pkcs7", JSON.stringify(_0x110614), _0x44a3a5, _0x29f188);
    return Buffer.from(_0x3af2b3, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x499185.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_ltyp_sign_header(_0x4cd54f) {
    let _0x3dcd0 = Date.now(),
      _0x5e2064 = Math.floor(89999 * Math.random()) + 100000,
      _0x4996ff = _0x8da94d,
      _0x3b7a11 = _0x457514,
      _0x7723b3 = _0x29e520.MD5(_0x4cd54f + _0x3dcd0 + _0x5e2064 + _0x4996ff + _0x3b7a11).toString();
    const _0x27164b = {
      key: _0x4cd54f,
      resTime: _0x3dcd0,
      reqSeq: _0x5e2064,
      channel: _0x4996ff,
      version: _0x3b7a11,
      sign: _0x7723b3
    };
    return _0x27164b;
  }
  async onLine(_0xafb44a = {}) {
    let _0x1cdedb = false;
    try {
      let _0x1ee695 = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x499185.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x1b9b19,
            version: _0x232718,
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x21e0f6,
          statusCode: _0xc5c2a
        } = await this.request(_0x1ee695),
        _0x23e708 = _0x499185.get(_0x21e0f6, "code", _0xc5c2a);
      if (_0x23e708 == 0) {
        _0x1cdedb = true;
        this.valid = true;
        this.mobile = _0x21e0f6?.["desmobile"];
        this.name = _0x21e0f6?.["desmobile"];
        this.ecs_token = _0x21e0f6?.["ecs_token"];
        this.city = _0x21e0f6?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x23e708 + "]");
      }
    } catch (_0x22d5e0) {
      console.log(_0x22d5e0);
    } finally {
      return _0x1cdedb;
    }
  }
  async openPlatLineNew(_0x2e0827, _0x2508b3 = {}) {
    const _0x41d8ca = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x2d703e = _0x41d8ca;
    try {
      const _0x337dde = {
        to_url: _0x2e0827
      };
      const _0x12eab1 = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x337dde
      };
      let {
        headers: _0x14b6fe,
        statusCode: _0x3f8579
      } = await this.request(_0x12eab1);
      if (_0x14b6fe?.["location"]) {
        let _0x18b213 = new URL(_0x14b6fe.location),
          _0x3dfa89 = _0x18b213.searchParams.get("type") || "02",
          _0x4a9446 = _0x18b213.searchParams.get("ticket");
        !_0x4a9446 && this.log("获取ticket失败");
        const _0x50e969 = {
          loc: _0x14b6fe.location,
          ticket: _0x4a9446,
          type: _0x3dfa89
        };
        _0x2d703e = _0x50e969;
      } else {
        this.log("获取ticket失败[" + _0x3f8579 + "]");
      }
    } catch (_0xadede0) {
      console.log(_0xadede0);
    } finally {
      return _0x2d703e;
    }
  }
  async gettaskip(_0x5eecd0 = {}) {
    let _0x164851 = _0x499185.randomString(32).toUpperCase();
    try {
      const _0x454490 = {
        mobile: this.mobile,
        orderId: _0x164851
      };
      const _0x1936ea = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x454490
      };
      await this.request(_0x1936ea);
    } catch (_0x8e31c1) {
      console.log(_0x8e31c1);
    } finally {
      return _0x164851;
    }
  }
  async draw_28_queryChance(_0x521398 = {}) {
    try {
      const _0x45484e = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x1a2730,
          statusCode: _0x3fcaa4
        } = await this.request(_0x45484e),
        _0x4924e2 = _0x499185.get(_0x1a2730, "status", _0x3fcaa4);
      if (_0x4924e2 == "0000") {
        let _0x4fc526 = parseInt(_0x1a2730?.["data"]?.["allRemainTimes"] || 0),
          _0x28732d = Math.min(_0x28e814, _0x4fc526);
        this.log("28日五折日可以抽奖" + _0x4fc526 + "次, 去抽" + _0x28732d + "次");
        let _0x38e970 = false;
        while (_0x28732d-- > 0) {
          if (_0x38e970) {
            await _0x499185.wait(8000);
          }
          _0x38e970 = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x5f2b7f = _0x1a2730?.["message"] || _0x1a2730?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x4924e2 + "]: " + _0x5f2b7f);
      }
    } catch (_0x387dd0) {
      console.log(_0x387dd0);
    }
  }
  async draw_28_lottery(_0x3b0b5b = {}) {
    try {
      const _0x1ae22a = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x1c092d,
          statusCode: _0xcc547c
        } = await this.request(_0x1ae22a),
        _0x234b64 = _0x499185.get(_0x1c092d, "status", _0xcc547c);
      if (_0x234b64 == "0000") {
        let _0x3b3a04 = _0x499185.get(_0x1c092d?.["data"], "code", -1);
        if (_0x1c092d?.["data"]?.["uuid"]) {
          await _0x499185.wait(2000);
          await this.draw_28_winningRecord(_0x1c092d.data.uuid);
        } else {
          let _0x964b01 = _0x1c092d?.["data"]?.["message"] || _0x1c092d?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x3b3a04 + "]: " + _0x964b01);
        }
      } else {
        let _0x1f0dd2 = _0x1c092d?.["message"] || _0x1c092d?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x234b64 + "]: " + _0x1f0dd2);
      }
    } catch (_0x5b4351) {
      console.log(_0x5b4351);
    }
  }
  async draw_28_winningRecord(_0x6e0f21, _0x57b6f4 = {}) {
    try {
      const _0x425737 = {
        requestId: _0x6e0f21
      };
      const _0x34d957 = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x425737
      };
      let {
          result: _0x4b3801,
          statusCode: _0x27d61e
        } = await this.request(_0x34d957),
        _0x210000 = _0x499185.get(_0x4b3801, "status", _0x27d61e);
      if (_0x210000 == "0000") {
        let _0x2d2247 = _0x499185.get(_0x4b3801?.["data"], "code", -1);
        if (_0x2d2247 == "0000") {
          const _0x42143e = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x4b3801?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x42143e);
        } else {
          let _0x5c5c87 = _0x4b3801?.["data"]?.["message"] || _0x4b3801?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x2d2247 + "]: " + _0x5c5c87);
        }
      } else {
        let _0x18ebd2 = _0x4b3801?.["message"] || _0x4b3801?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x210000 + "]: " + _0x18ebd2);
      }
    } catch (_0x5c9a17) {
      console.log(_0x5c9a17);
    }
  }
  async ttlxj_authorize(_0x5460a2, _0x2c17ad, _0xae384f, _0x43b694 = {}) {
    try {
      const _0x13819c = {
        Origin: "https://epay.10010.com",
        Referer: _0xae384f
      };
      let _0x253b3f = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: _0x13819c,
          json: {
            response_type: "rptid",
            client_id: _0xb58acf,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x5460a2,
              st_type: _0x2c17ad,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x499185.randomString(13),
              trace_id: _0x499185.randomString(32)
            }
          }
        },
        {
          result: _0x422457
        } = await this.request(_0x253b3f),
        _0x2bbca1 = _0x499185.get(_0x422457, "status", -1);
      if (_0x2bbca1 == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x188851 = _0x422457?.["message"] || _0x422457?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x2bbca1 + "]: " + _0x188851);
      }
    } catch (_0x2e525f) {
      console.log(_0x2e525f);
    }
  }
  async ttlxj_authCheck(_0x5c340c = {}) {
    try {
      let _0x543811 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x5ace3e
        } = await this.request(_0x543811),
        _0x53428d = _0x499185.get(_0x5ace3e, "code", -1);
      if (_0x53428d == "0000") {
        let {
          mobile: _0x3d0d69,
          sessionId: _0x4a32fd,
          tokenId: _0x4db2a4,
          userId: _0x5bb107
        } = _0x5ace3e?.["data"]?.["authInfo"];
        const _0x50cec8 = {
          sessionId: _0x4a32fd,
          tokenId: _0x4db2a4,
          userId: _0x5bb107
        };
        Object.assign(this, _0x50cec8);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x53428d == "2101000100") {
          let _0x507d5c = _0x5ace3e?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x507d5c);
        } else {
          let _0x38d83f = _0x5ace3e?.["msgInside"] || _0x5ace3e?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x53428d + "]: " + _0x38d83f);
        }
      }
    } catch (_0x12147c) {
      console.log(_0x12147c);
    }
  }
  async ttlxj_login(_0x31d58a, _0x18026e = {}) {
    try {
      _0x31d58a += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x360c0c + "&bizChannelCode=" + _0x69e025;
      const _0x2d087d = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x31d58a
      };
      let {
        headers: _0x4dd30b,
        statusCode: _0x5743f3
      } = await this.request(_0x2d087d);
      if (_0x4dd30b?.["location"]) {
        let _0x383e16 = new URL(_0x4dd30b.location);
        this.rptId = _0x383e16.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x5743f3 + "]");
      }
    } catch (_0x42071b) {
      console.log(_0x42071b);
    }
  }
  async ttlxj_userDrawInfo(_0x48ebf4 = {}) {
    try {
      let _0x4a5b73 = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x50afd8
        } = await this.request(_0x4a5b73),
        _0x13b6e4 = _0x499185.get(_0x50afd8, "code", -1);
      if (_0x13b6e4 == "0000") {
        let _0x6a63a0 = _0x50afd8?.["data"]?.["dayOfWeek"],
          _0x378016 = "day" + _0x6a63a0,
          _0xdc18e7 = _0x50afd8?.["data"]?.[_0x378016] == "1";
        const _0x33baa7 = {
          notify: true
        };
        this.log("天天领现金今天" + (_0xdc18e7 ? "未" : "已") + "打卡", _0x33baa7);
        if (_0xdc18e7) {
          let _0x3cba9c = new Date().getDay();
          _0x3cba9c % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x4b7574 = _0x50afd8?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x13b6e4 + "]: " + _0x4b7574);
      }
    } catch (_0x2a3c9c) {
      console.log(_0x2a3c9c);
    }
  }
  async ttlxj_unifyDrawNew(_0x56d28b, _0x415da0 = {}) {
    try {
      let _0x3be592 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            drawType: _0x56d28b,
            bizFrom: _0x360c0c,
            activityId: "TTLXJ20210330"
          }
        },
        {
          result: _0x413856
        } = await this.request(_0x3be592),
        _0x441b26 = _0x499185.get(_0x413856, "code", -1);
      if (_0x441b26 == "0000" && _0x413856?.["data"]?.["returnCode"] == 0) {
        let _0xcad0a7 = _0x413856?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x413856?.["data"]?.["amount"]);
        const _0x568940 = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0xcad0a7, _0x568940);
      } else {
        let _0x5ea929 = _0x413856?.["data"]?.["returnMsg"] || _0x413856?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x413856?.["data"]?.["returnCode"] || _0x441b26) + "]: " + _0x5ea929);
      }
    } catch (_0x5bc897) {
      console.log(_0x5bc897);
    }
  }
  async ttlxj_h(_0xc3b6a5 = {}) {
    try {
      const _0x2cddd7 = {
        bizFrom: _0x360c0c,
        activityId: "TTLXJ20210330",
        uid: _0x5e013c
      };
      let _0x300958 = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: _0x2cddd7
      };
      await this.request(_0x300958);
    } catch (_0x478999) {
      console.log(_0x478999);
    }
  }
  async ttlxj_queryAvailable(_0x319eed = {}) {
    try {
      let _0x172a4e = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x246572
        } = await this.request(_0x172a4e),
        _0x348210 = _0x499185.get(_0x246572, "code", -1);
      if (_0x348210 == "0000" && _0x246572?.["data"]?.["returnCode"] == 0) {
        let _0x2c2921 = _0x246572?.["data"]?.["availableAmount"] || 0;
        const _0x5834a2 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x2c2921 / 100).toFixed(2) + "元", _0x5834a2);
        let _0x309794 = [],
          _0x50db29 = Date.now();
        for (let _0x2291ca of _0x246572?.["data"]?.["prizeList"]?.["filter"](_0x4d4cf8 => _0x4d4cf8.status == "A")) {
          let _0x1799da = _0x2291ca.endTime,
            _0x1d777d = new Date(_0x1799da.slice(0, 4) + "-" + _0x1799da.slice(4, 6) + "-" + _0x1799da.slice(6, 8) + " 00:00:00"),
            _0x251a93 = _0x1d777d.getTime();
          if (_0x251a93 - _0x50db29 < _0x268b06 * 24 * 60 * 60 * 1000) {
            let _0x17df41 = _0x499185.time("yyyy-MM-dd", _0x251a93);
            const _0x37247a = {
              timestamp: _0x251a93,
              date: _0x17df41,
              amount: _0x2291ca.amount
            };
            _0x309794.push(_0x37247a);
          }
        }
        if (_0x309794.length) {
          const _0x586d26 = {
            timestamp: 0
          };
          let _0x1ef23c = _0x586d26,
            _0x45412a = _0x309794.reduce(function (_0x51ed26, _0x598d88) {
              (_0x1ef23c.timestamp == 0 || _0x598d88.timestamp < _0x1ef23c.timestamp) && (_0x1ef23c = _0x598d88);
              return _0x51ed26 + parseFloat(_0x598d88.amount);
            }, 0);
          const _0x25d693 = {
            notify: true
          };
          this.log(_0x268b06 + "天内过期立减金: " + _0x45412a.toFixed(2) + "元", _0x25d693);
          const _0x23cff1 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x1ef23c.amount + "元 -- " + _0x1ef23c.date + "过期", _0x23cff1);
        } else {
          const _0x2320a1 = {
            notify: true
          };
          this.log(_0x268b06 + "天内没有过期的立减金", _0x2320a1);
        }
      } else {
        let _0x8e84dd = _0x246572?.["data"]?.["returnMsg"] || _0x246572?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x246572?.["data"]?.["returnCode"] || _0x348210) + "]: " + _0x8e84dd);
      }
    } catch (_0x35dee2) {
      console.log(_0x35dee2);
    }
  }
  async epay_28_authCheck(_0x3039b1 = {}) {
    try {
      let _0x4a4d89 = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x3bd250
        } = await this.request(_0x4a4d89),
        _0x237ab0 = _0x499185.get(_0x3bd250, "code", -1);
      if (_0x237ab0 == "0000") {
        let {
          mobile: _0x39f7a7,
          sessionId: _0x51b742,
          tokenId: _0x1b6fbe,
          userId: _0x5781f8
        } = _0x3bd250?.["data"]?.["authInfo"];
        const _0x1eea66 = {
          sessionId: _0x51b742,
          tokenId: _0x1b6fbe,
          userId: _0x5781f8
        };
        Object.assign(this, _0x1eea66);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x237ab0 == "2101000100") {
          let _0x12b04d = _0x3bd250?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x12b04d);
        } else {
          let _0x17784f = _0x3bd250?.["msgInside"] || _0x3bd250?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x237ab0 + "]: " + _0x17784f);
        }
      }
    } catch (_0x142088) {
      console.log(_0x142088);
    }
  }
  async epay_28_login(_0x1eb237, _0x1a2d63 = {}) {
    try {
      let _0xc841f1 = _0x499185.time("yyyyMM") + "28ZFR";
      _0x1eb237 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0xc841f1 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x26f3eb = {
        fn: "epay_28_login",
        method: "get",
        url: _0x1eb237
      };
      let {
        headers: _0x26dfa5,
        statusCode: _0x46f016
      } = await this.request(_0x26f3eb);
      if (_0x26dfa5?.["location"]) {
        let _0x1cacea = new URL(_0x26dfa5.location);
        this.rptId = _0x1cacea.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x46f016 + "]");
      }
    } catch (_0x4e63d2) {
      console.log(_0x4e63d2);
    }
  }
  async epay_28_queryUserPage(_0x56851c = {}) {
    try {
      let _0x3b3904 = _0x499185.time("yyyyMM") + "28ZFR";
      const _0x267a19 = {
        templateName: _0x3b3904
      };
      let _0x4ced58 = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x267a19
        },
        {
          result: _0x6744bc
        } = await this.request(_0x4ced58),
        _0x310c04 = _0x499185.get(_0x6744bc, "code", -1);
      if (_0x310c04 == "0000" && _0x6744bc?.["data"]?.["returnCode"] == 0) {
        for (let _0x4aeca2 of _0x6744bc?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          _0x4aeca2?.["rainbowUnitInfos"]?.[0]?.["unitActivityId"] && (await this.epay_28_unifyDraw(_0x4aeca2.rainbowUnitInfos[0]));
          if (_0x4aeca2?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x3b3904, _0x4aeca2.mouldName);
            break;
          }
        }
      } else {
        let _0xe99374 = _0x6744bc?.["message"] || _0x6744bc?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x310c04 + "]: " + _0xe99374);
      }
    } catch (_0x46a975) {
      console.log(_0x46a975);
    }
  }
  async epay_28_queryMiddleUnit(_0x5d5ad9, _0x3ffa61, _0x529c28 = {}) {
    try {
      const _0x327e41 = {
        activityId: _0x5d5ad9,
        mouldName: _0x3ffa61
      };
      let _0x42b479 = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x327e41
        },
        {
          result: _0x31aca0
        } = await this.request(_0x42b479),
        _0x5573f3 = _0x499185.get(_0x31aca0, "code", -1);
      if (_0x5573f3 == "0000") {
        let _0x4522e3 = _0x499185.time("dd");
        _0x31aca0?.["data"]?.[_0x4522e3] == "1" ? this.log("联通支付日今日(" + _0x4522e3 + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x5d5ad9, _0x3ffa61);
      } else {
        let _0x46fce4 = _0x31aca0?.["message"] || _0x31aca0?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x5573f3 + "]: " + _0x46fce4);
      }
    } catch (_0x16a946) {
      console.log(_0x16a946);
    }
  }
  async epay_28_unifyDrawNew(_0x4c8785, _0x41d01b, _0x2f8106 = {}) {
    try {
      const _0x425dac = {
        bizFrom: _0x360c0c,
        activityId: _0x4c8785,
        mouldName: _0x41d01b
      };
      let _0x5e8954 = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x425dac
        },
        {
          result: _0x147caf
        } = await this.request(_0x5e8954),
        _0x548dfb = _0x499185.get(_0x147caf, "code", -1);
      if (_0x548dfb == "0000" && _0x147caf?.["data"]?.["returnCode"] == 0) {
        let _0x33407b = _0x147caf?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x147caf?.["data"]?.["amount"]);
        const _0x10a9a6 = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x33407b, _0x10a9a6);
      } else {
        let _0x5dcd3f = _0x147caf?.["data"]?.["returnMsg"] || _0x147caf?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x147caf?.["data"]?.["returnCode"] || _0x548dfb) + "]: " + _0x5dcd3f);
      }
    } catch (_0x49b2ac) {
      console.log(_0x49b2ac);
    }
  }
  async epay_28_unifyDraw(_0x21d9ba, _0x10552c = {}) {
    try {
      const _0x4b935b = {
        activityId: _0x21d9ba.unitActivityId,
        isBigActivity: _0x21d9ba.isBigActivity,
        bigActivityId: _0x21d9ba.bigActivityId,
        bizFrom: _0x360c0c
      };
      let _0x3a6276 = {
          fn: "epay_28_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x4b935b
        },
        {
          result: _0x115e41
        } = await this.request(_0x3a6276),
        _0x16faae = _0x499185.get(_0x115e41, "code", -1);
      if (_0x16faae == "0000" && _0x115e41?.["data"]?.["returnCode"] == 0) {
        const _0x46ce35 = {
          notify: true
        };
        this.log("联通支付日抽奖: " + (_0x115e41?.["data"]?.["prizeName"] || ""), _0x46ce35);
      } else {
        let _0x4a403e = _0x115e41?.["data"]?.["returnMsg"] || _0x115e41?.["msg"] || "";
        this.log("联通支付日抽奖失败[" + (_0x115e41?.["data"]?.["returnCode"] || _0x16faae) + "]: " + _0x4a403e);
      }
    } catch (_0x5629d5) {
      console.log(_0x5629d5);
    }
  }
  async appMonth_28_bind(_0x5decc6, _0x437f9c = {}) {
    try {
      const _0x3d502e = {
        shareCode: _0x5decc6,
        cl: "WeChat"
      };
      const _0x578869 = {
        fn: "appMonth_28_bind",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/bind",
        form: _0x3d502e,
        valid_code: [401]
      };
      let {
        result: _0x1430db
      } = await this.request(_0x578869);
    } catch (_0x4b145e) {
      console.log(_0x4b145e);
    }
  }
  async appMonth_28_queryChance(_0x34b2f8 = {}) {
    try {
      const _0x2a9a78 = {
        fn: "appMonth_28_queryChance",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x24b1d5
        } = await this.request(_0x2a9a78),
        _0x334810 = _0x499185.get(_0x24b1d5, "status", -1);
      if (_0x334810 == "0000") {
        let {
          allRemainTimes: _0x3cae08,
          isUnicom: _0x25daae
        } = _0x24b1d5?.["data"];
        if (_0x25daae) {
          let _0x118e28 = Math.min(_0x4a92b0, _0x3cae08);
          this.log("联通支付日可以开宝箱" + _0x3cae08 + "次, 去抽" + _0x118e28 + "次");
          while (_0x118e28-- > 0) {
            await this.appMonth_28_lottery();
          }
        }
      } else {
        let _0x1938e1 = _0x24b1d5?.["msg"] || "";
        this.log("联通支付日查询开宝箱次数失败[" + _0x334810 + "]: " + _0x1938e1);
      }
    } catch (_0x5950e1) {
      console.log(_0x5950e1);
    }
  }
  async appMonth_28_lottery(_0x3a6da0 = {}) {
    try {
      const _0x1a3c17 = {
        fn: "appMonth_28_lottery",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x517834
        } = await this.request(_0x1a3c17),
        _0x4f60dd = _0x499185.get(_0x517834, "status", -1);
      if (_0x4f60dd == "0000") {
        let {
          code: _0x4dd7c1,
          uuid: _0x260f65
        } = _0x517834?.["data"];
        _0x260f65 ? await this.appMonth_28_winningRecord(_0x260f65) : this.log("联通支付日开宝箱失败[" + _0x4dd7c1 + "]");
      } else {
        let _0x204f06 = _0x517834?.["msg"] || "";
        this.log("联通支付日开宝箱失败[" + _0x4f60dd + "]: " + _0x204f06);
      }
    } catch (_0x4aea9c) {
      console.log(_0x4aea9c);
    }
  }
  async appMonth_28_winningRecord(_0x513ae8, _0xb65d8f = {}) {
    try {
      const _0x31f488 = {
        requestId: _0x513ae8
      };
      const _0x393c43 = {
        fn: "appMonth_28_winningRecord",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x31f488
      };
      let {
          result: _0x46fa1b
        } = await this.request(_0x393c43),
        _0x537fea = _0x499185.get(_0x46fa1b, "status", -1);
      if (_0x537fea == "0000") {
        let {
          code: _0x24758a,
          prizeName: _0x550e7b
        } = _0x46fa1b?.["data"];
        if (_0x24758a == "0000") {
          const _0x25e7f5 = {
            notify: true
          };
          this.log("联通支付日开宝箱: " + _0x550e7b, _0x25e7f5);
        } else {
          let _0x2d5438 = _0x46fa1b?.["data"]?.["message"] || "";
          this.log("联通支付日开宝箱[" + _0x24758a + "]: " + _0x2d5438);
        }
      } else {
        let _0x474923 = _0x46fa1b?.["msg"] || "";
        this.log("联通支付日查询中奖奖品错误[" + _0x537fea + "]: " + _0x474923);
      }
    } catch (_0x40f33f) {
      console.log(_0x40f33f);
    }
  }
  async sign_getContinuous(_0xf8d192 = {}) {
    try {
      const _0x2be033 = {
        taskId: "",
        channel: "shouye",
        imei: ""
      };
      const _0x99a246 = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x2be033
      };
      let {
          result: _0x357972
        } = await this.request(_0x99a246),
        _0x419dbf = _0x499185.get(_0x357972, "status", -1);
      if (_0x419dbf == "0000") {
        let _0x71253b = _0x357972?.["data"]?.["todaySigned"] || 0;
        const _0x52538f = {
          notify: true
        };
        this.log("签到区今天" + (_0x71253b == "1" ? "未" : "已") + "签到", _0x52538f);
        _0x71253b == "1" && (await _0x499185.wait(1000), await this.sign_daySign());
      } else {
        let _0xa0b0c5 = _0x357972?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x419dbf + "]: " + _0xa0b0c5);
      }
    } catch (_0x5dd4c9) {
      console.log(_0x5dd4c9);
    }
  }
  async sign_daySign(_0x33415f = {}) {
    try {
      const _0x4071c5 = {
        shareCl: "",
        shareCode: ""
      };
      const _0x5d225d = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x4071c5
      };
      let {
          result: _0x15af84
        } = await this.request(_0x5d225d),
        _0x301192 = _0x499185.get(_0x15af84, "status", -1);
      if (_0x301192 == "0000") {
        let {
          prizeName: _0x5bbdc3,
          redSignMessage: _0x341a33
        } = _0x15af84?.["data"];
        const _0x15d833 = {
          notify: true
        };
        this.log("签到区签到成功: [" + _0x5bbdc3 + "]" + _0x341a33, _0x15d833);
      } else {
        let _0x3825b1 = _0x15af84?.["msg"] || "";
        this.log("签到区签到失败[" + _0x301192 + "]: " + _0x3825b1);
      }
    } catch (_0x1c9f10) {
      console.log(_0x1c9f10);
    }
  }
  async sign_queryBubbleTask(_0x2f676c = {}) {
    try {
      const _0x152294 = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x31f71c
        } = await this.request(_0x152294),
        _0xe6fc5f = _0x499185.get(_0x31f71c, "status", -1);
      if (_0xe6fc5f == "0000") {
        for (let _0x48cc7f of _0x31f71c?.["data"]?.["paramsList"]?.["filter"](_0x562a84 => _0x562a84.taskState == 1)) {
          let _0x46578d = await this.gettaskip();
          await this.sign_doTask(_0x48cc7f, _0x46578d);
        }
      } else {
        let _0x5ec550 = _0x31f71c?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0xe6fc5f + "]: " + _0x5ec550);
      }
    } catch (_0x49d0c0) {
      console.log(_0x49d0c0);
    }
  }
  async sign_doTask(_0x837159, _0x56543a, _0x45488e = {}) {
    try {
      const _0x4059e8 = {
        id: _0x837159.id,
        orderId: _0x56543a,
        imei: "BB97982E-3F03-46D3-B904-819D626DF478",
        prizeType: _0x837159.rewardType,
        positionFlag: 0
      };
      const _0x39bb22 = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: _0x4059e8
      };
      let {
          result: _0x20394e
        } = await this.request(_0x39bb22),
        _0x382977 = _0x499185.get(_0x20394e, "status", -1);
      if (_0x382977 == "0000") {
        this.log("完成任务[" + _0x837159.actName + "]获得: " + _0x20394e?.["data"]?.["prizeCount"] + _0x20394e?.["data"]?.["prizeName"]);
      } else {
        let _0x414904 = _0x20394e?.["msg"] || "";
        this.log("完成任务[" + _0x837159.actName + "]失败[" + _0x382977 + "]: " + _0x414904);
      }
    } catch (_0x2032f3) {
      console.log(_0x2032f3);
    }
  }
  async game_login(_0x36c587, _0x290385 = {}) {
    try {
      const _0x2868bd = {
        channelid: "GAMELTAPP_90005"
      };
      const _0x1ab8c6 = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: _0x2868bd,
        json: {}
      };
      _0x1ab8c6.json.identityType = "esToken";
      _0x1ab8c6.json.code = this.ecs_token;
      _0x1ab8c6.json.ticket = _0x36c587;
      _0x1ab8c6.json.uuid = _0x567ec7;
      let {
          result: _0x21aeb3
        } = await this.request(_0x1ab8c6),
        _0x8cf87c = _0x499185.get(_0x21aeb3, "code", -1);
      if (_0x8cf87c == 200) {
        this.game_token = _0x21aeb3?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x2ac579 = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x2ac579);
      } else {
        let _0x93e794 = _0x21aeb3?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x8cf87c + "]: " + _0x93e794);
      }
    } catch (_0x3d2040) {
      console.log(_0x3d2040);
    }
  }
  async game_getMemberInfo(_0x513b96 = {}) {
    try {
      const _0x24b1f7 = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x1d95ca
        } = await this.request(_0x24b1f7),
        _0x119f3d = _0x499185.get(_0x1d95ca, "code", -1);
      if (_0x119f3d == 200) {
        this.point = _0x1d95ca?.["data"]?.["userIntegral"];
      } else {
        let _0x5ef7d1 = _0x1d95ca?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x119f3d + "]: " + _0x5ef7d1);
      }
    } catch (_0x2b86d0) {
      console.log(_0x2b86d0);
    }
  }
  async game_signRecord(_0x14ad1f = {}) {
    try {
      const _0x15fc4c = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x38a22c
        } = await this.request(_0x15fc4c),
        _0x29e2ab = _0x499185.get(_0x38a22c, "code", -1);
      if (_0x29e2ab == 200) {
        for (let _0x1db46c of _0x38a22c?.["data"]) {
          if (_0x1db46c.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x1db46c.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x1db46c.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x68157c = _0x38a22c?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x29e2ab + "]: " + _0x68157c);
      }
    } catch (_0x399e3c) {
      console.log(_0x399e3c);
    }
  }
  async game_signIn(_0x325cfd = {}) {
    try {
      const _0x5cec36 = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x4e3e41
        } = await this.request(_0x5cec36),
        _0x5cb728 = _0x499185.get(_0x4e3e41, "code", -1);
      if (_0x5cb728 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x511115 = _0x4e3e41?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x5cb728 + "]: " + _0x511115);
      }
    } catch (_0x2a3b20) {
      console.log(_0x2a3b20);
    }
  }
  async game_checkSlider(_0x46038e = {}) {
    let _0x46fd7e = false;
    try {
      const _0x25e571 = {
        xPos: 234
      };
      const _0x45b14e = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x25e571
      };
      let {
          result: _0x30fc97
        } = await this.request(_0x45b14e),
        _0x459562 = _0x499185.get(_0x30fc97, "code", -1);
      if (_0x459562 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x1a2d86 = _0x30fc97?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x459562 + "]: " + _0x1a2d86);
      }
    } catch (_0x395438) {
      console.log(_0x395438);
    } finally {
      return _0x46fd7e;
    }
  }
  async game_lottery(_0x21a949 = {}) {
    try {
      let _0x23dd92 = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x499185.get(_0x21a949, "id", 1)
          }
        },
        {
          result: _0x109d18
        } = await this.request(_0x23dd92),
        _0x15843b = _0x499185.get(_0x109d18, "code", -1);
      if (_0x15843b == 200) {
        const _0x4e26f1 = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x109d18?.["data"]?.["productName"], _0x4e26f1);
      } else {
        let _0x9558fd = _0x109d18?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x15843b + "]: " + _0x9558fd);
      }
    } catch (_0xa01d0b) {
      console.log(_0xa01d0b);
    }
  }
  async game_taskList(_0x24f7d1 = {}) {
    try {
      const _0x50c6db = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0x1f7ab4
        } = await this.request(_0x50c6db),
        _0x385e14 = _0x499185.get(_0x1f7ab4, "code", -1);
      if (_0x385e14 == 200) {
        for (let _0x3167e3 of _0x1f7ab4?.["data"]) {
          switch (_0x3167e3.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x3167e3);
              break;
            case 2:
              break;
            default:
              _0x499185.log("任务[" + _0x3167e3.taskName + "]未知状态[" + _0x3167e3.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0xd3d334 = _0x1f7ab4?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x385e14 + "]: " + _0xd3d334);
      }
    } catch (_0x3e2185) {
      console.log(_0x3e2185);
    }
  }
  async game_taskReceive(_0xd45f92, _0x4be600 = {}) {
    try {
      const _0x2c5d56 = {
        productId: _0xd45f92.productId,
        taskId: _0xd45f92.id
      };
      const _0x3984f = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x2c5d56
      };
      let {
          result: _0x4ea2f4
        } = await this.request(_0x3984f),
        _0x122156 = _0x499185.get(_0x4ea2f4, "code", -1);
      if (_0x122156 == 200) {
        this.log("领取任务[" + _0xd45f92.taskName + "]奖励成功");
      } else {
        let _0xb0a076 = _0x4ea2f4?.["msg"] || "";
        this.log("领取任务[" + _0xd45f92.taskName + "]奖励失败[" + _0x122156 + "]: " + _0xb0a076);
      }
    } catch (_0x51cb80) {
      console.log(_0x51cb80);
    }
  }
  async game_playSave(_0x22b66b = {}) {
    try {
      let _0x390501 = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x499185.randomString(2, "0123456789")
          }
        },
        {
          result: _0xbd1ad9
        } = await this.request(_0x390501),
        _0x51dadd = _0x499185.get(_0xbd1ad9, "code", -1);
      if (!(_0x51dadd == 200)) {
        let _0x59eabe = _0xbd1ad9?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x51dadd + "]: " + _0x59eabe);
      }
    } catch (_0x4a5bf3) {
      console.log(_0x4a5bf3);
    }
  }
  async flmf_login(_0xeaafe1, _0x3715a8 = {}) {
    try {
      const _0x206296 = {
        fn: "flmf_login",
        method: "get",
        url: _0xeaafe1
      };
      let {
        headers: _0x3229fa,
        statusCode: _0x972cd7
      } = await this.request(_0x206296);
      if (_0x3229fa?.["location"]) {
        let _0x3b70fb = new URL(_0x3229fa.location);
        this.flmf_sid = _0x3b70fb.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x972cd7 + "]");
      }
    } catch (_0x3f8f38) {
      console.log(_0x3f8f38);
    }
  }
  async flmf_signInInit(_0x1abd75 = {}) {
    try {
      let _0x59ac78 = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0xfb82f5
        } = await this.request(_0x59ac78),
        _0x2b0f5f = _0x499185.get(_0xfb82f5, "resultCode", -1);
      if (_0x2b0f5f == "0000") {
        this.log("福利魔方今天" + (_0xfb82f5?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0xfb82f5?.["data"]?.["consecutiveDays"] + "天");
        if (!_0xfb82f5?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x4a4526 = _0xfb82f5?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x2b0f5f + "]: " + _0x4a4526);
      }
    } catch (_0x185eff) {
      console.log(_0x185eff);
    }
  }
  async flmf_signIn(_0x32bd1f = {}) {
    try {
      let _0x31fbb3 = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x31e968
        } = await this.request(_0x31fbb3),
        _0x281e72 = _0x499185.get(_0x31e968, "resultCode", -1);
      if (_0x281e72 == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x3f0535 = _0x31e968?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x281e72 + "]: " + _0x3f0535);
      }
    } catch (_0x8d29bb) {
      console.log(_0x8d29bb);
    }
  }
  async flmf_taskList(_0x2959ca = {}) {
    try {
      let _0x45f95b = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0xcea817
        } = await this.request(_0x45f95b),
        _0x518cbb = _0x499185.get(_0xcea817, "resultCode", -1);
      if (_0x518cbb == "0000") {
        for (let _0x455c00 of _0xcea817?.["data"]?.["taskInfoList"]) {
          for (let _0x106879 of _0x455c00.taskInfoList.filter(_0x97ce4b => !_0x97ce4b.done)) {
            for (let _0x4d134f = _0x106879.hascount; _0x4d134f < _0x106879.count; _0x4d134f++) {
              await this.flmf_gogLance(_0x106879.id);
            }
          }
        }
      } else {
        let _0x3cbb93 = _0xcea817?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x518cbb + "]: " + _0x3cbb93);
      }
    } catch (_0x4c4a72) {
      console.log(_0x4c4a72);
    }
  }
  async flmf_scanTask() {
    for (let _0x4a15d3 of _0x11dfd9) {
      await this.flmf_gogLance(_0x4a15d3);
    }
  }
  async flmf_gogLance(_0x5360b5, _0x3053bd = {}) {
    try {
      let _0x388d6a = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x5360b5,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x345acb
        } = await this.request(_0x388d6a);
      await _0x499185.wait_gap_interval(this.t_flmf_task, _0x57b639);
      let _0x5e2ce2 = _0x499185.get(_0x345acb, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x5e2ce2 == "0000") {
        this.log("完成任务[" + _0x5360b5 + "]成功");
      } else {
        let _0xd69674 = _0x345acb?.["resultMsg"] || "";
        this.log("完成任务[" + _0x5360b5 + "]失败[" + _0x5e2ce2 + "]: " + _0xd69674);
      }
    } catch (_0x1de609) {
      console.log(_0x1de609);
    }
  }
  async woread_api(_0x3f0a9a) {
    let _0x4d3487 = await this.request(_0x499185.copy(_0x3f0a9a)),
      _0x5b35b2 = _0x4d3487?.["result"]?.["message"] || "";
    _0x5b35b2?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x4d3487 = await this.request(_0x499185.copy(_0x3f0a9a)));
    return _0x4d3487;
  }
  async woread_auth(_0x3a05c5 = {}) {
    let _0x1e8c86 = false;
    try {
      let _0x1131aa = _0x499185.time("yyyyMMddhhmmss");
      const _0x12e1ad = {
        timestamp: _0x1131aa
      };
      let _0x3ede72 = this.encode_woread(_0x12e1ad),
        _0x22ea1b = Date.now().toString(),
        _0x2e7e1a = _0x29e520.MD5(_0x41e222 + _0xc7b5ad + _0x22ea1b).toString();
      const _0x3b4a08 = {
        sign: _0x3ede72
      };
      const _0x3b2f4a = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x41e222 + "/" + _0x22ea1b + "/" + _0x2e7e1a,
        json: _0x3b4a08
      };
      let {
          result: _0x38cf06
        } = await this.request(_0x3b2f4a),
        _0x22bdd0 = _0x499185.get(_0x38cf06, "code", -1);
      if (_0x22bdd0 == "0000") {
        _0x1e8c86 = true;
        this.woread_accesstoken = _0x38cf06?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x62d10f = _0x38cf06?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x22bdd0 + "]: " + _0x62d10f);
      }
    } catch (_0x176d73) {
      console.log(_0x176d73);
    } finally {
      return _0x1e8c86;
    }
  }
  async woread_login(_0x4fce86 = {}) {
    let _0x1f7b4a = false;
    try {
      let _0x74b24e = {
          phone: this.mobile,
          timestamp: _0x499185.time("yyyyMMddhhmmss")
        },
        _0x3f0635 = this.encode_woread(_0x74b24e);
      const _0x2d0b1b = {
        sign: _0x3f0635
      };
      const _0x306996 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x2d0b1b
      };
      let {
          result: _0x38cded
        } = await this.request(_0x306996),
        _0x33e5e1 = _0x499185.get(_0x38cded, "code", -1);
      if (_0x33e5e1 == "0000") {
        _0x1f7b4a = true;
        let {
          userid: _0x73b32b,
          userindex: _0xc73686,
          token: _0x57dc56,
          verifycode: _0x229605
        } = _0x38cded?.["data"];
        this.woread_token = _0x57dc56;
        this.woread_verifycode = _0x229605;
        const _0x46bd99 = {
          woread_userid: _0x73b32b,
          woread_userindex: _0xc73686,
          woread_token: _0x57dc56,
          woread_verifycode: _0x229605
        };
        Object.assign(this, _0x46bd99);
      } else {
        let _0x2276f9 = _0x38cded?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x33e5e1 + "]: " + _0x2276f9);
      }
    } catch (_0x2c636f) {
      console.log(_0x2c636f);
    } finally {
      return _0x1f7b4a;
    }
  }
  async woread_getSeeVideoAddNumber(_0x3f7638, _0x4035f7 = {}) {
    try {
      let _0x3b2e4e = {
          activityIndex: _0x3f7638,
          ...this.get_woread_param()
        },
        _0x1e22ff = this.encode_woread(_0x3b2e4e);
      const _0x217fad = {
        sign: _0x1e22ff
      };
      const _0x94fbe5 = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0x217fad
      };
      let {
          result: _0x4e9e36
        } = await this.woread_api(_0x94fbe5),
        _0x820db8 = _0x499185.get(_0x4e9e36, "code", -1);
      if (_0x820db8 == "0000") {
        _0x4e9e36?.["data"] == -1 && (await this.woread_addUserSeeVideo(_0x3f7638));
      } else {
        let _0x2ee213 = _0x4e9e36?.["message"] || "";
        this.log("阅读活动[" + _0x3f7638 + "]查询抽奖视频失败[" + _0x820db8 + "]: " + _0x2ee213);
      }
    } catch (_0x12a594) {
      console.log(_0x12a594);
    }
  }
  async woread_addUserSeeVideo(_0x2d7356, _0x536842 = {}) {
    try {
      let _0x60dcea = _0x536842.num || 5,
        _0x51b5c7 = {
          activityIndex: _0x2d7356,
          num: _0x60dcea,
          ...this.get_woread_param()
        },
        _0x1805ed = this.encode_woread(_0x51b5c7);
      const _0x2017ce = {
        sign: _0x1805ed
      };
      const _0x2a27b6 = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x2017ce
      };
      let {
          result: _0x4eeca7
        } = await this.woread_api(_0x2a27b6),
        _0x5654ee = _0x499185.get(_0x4eeca7, "code", -1);
      if (_0x5654ee == "0000") {
        this.log("阅读活动[" + _0x2d7356 + "]看视频增加抽奖次数成功");
      } else {
        let _0x51cc4f = _0x4eeca7?.["message"] || "";
        this.log("阅读活动[" + _0x2d7356 + "]看视频增加抽奖次数失败[" + _0x5654ee + "]: " + _0x51cc4f);
      }
    } catch (_0xa38aa1) {
      console.log(_0xa38aa1);
    }
  }
  async woread_getActivityNumber(_0x11765d, _0x31d5d9 = {}) {
    try {
      let _0x3d15a5 = {
          activeIndex: _0x11765d,
          ...this.get_woread_param()
        },
        _0xe42c98 = this.encode_woread(_0x3d15a5);
      const _0x1c97e4 = {
        sign: _0xe42c98
      };
      const _0x49ce8f = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x1c97e4
      };
      let {
          result: _0x22cdce
        } = await this.woread_api(_0x49ce8f),
        _0x5b0a31 = _0x499185.get(_0x22cdce, "code", -1);
      if (_0x5b0a31 == "0000") {
        let _0x24be2c = _0x22cdce?.["data"] || 0;
        this.log("阅读活动[" + _0x11765d + "]可以抽奖" + _0x24be2c + "次");
        while (_0x24be2c-- > 0) {
          await _0x499185.wait(5000);
          await this.woread_doDraw(_0x11765d);
        }
      } else {
        let _0x4fc814 = _0x22cdce?.["message"] || "";
        this.log("阅读活动[" + _0x11765d + "]查询抽奖次数失败[" + _0x5b0a31 + "]: " + _0x4fc814);
      }
    } catch (_0x11a691) {
      console.log(_0x11a691);
    }
  }
  async woread_addDrawTimes(_0x4e0b4f, _0x211941 = {}) {
    try {
      let _0x4d1894 = {
          activetyindex: _0x4e0b4f,
          ...this.get_woread_param()
        },
        _0x49bc9d = this.encode_woread(_0x4d1894);
      const _0x5925bf = {
        sign: _0x49bc9d
      };
      const _0x277743 = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0x5925bf
      };
      await _0x499185.wait_gap_interval(this.t_woread_draw, _0x15df8c);
      let {
        result: _0xd1dd1a
      } = await this.woread_api(_0x277743);
      this.t_woread_draw = Date.now();
      let _0x166bac = _0x499185.get(_0xd1dd1a, "code", -1);
      if (_0x166bac == "0000") {
        this.log("阅读活动[" + _0x4e0b4f + "]打卡增加抽奖次数成功");
      } else {
        if (_0x166bac != "9999") {
          let _0x28108d = _0xd1dd1a?.["message"] || "";
          this.log("阅读活动[" + _0x4e0b4f + "]打卡增加抽奖次数失败[" + _0x166bac + "]: " + _0x28108d);
        }
      }
    } catch (_0x3289c8) {
      console.log(_0x3289c8);
    }
  }
  async woread_doDraw(_0x3fb930, _0x4d65c7 = {}) {
    try {
      let _0x805728 = {
          activeindex: _0x3fb930,
          ...this.get_woread_param()
        },
        _0x13e778 = this.encode_woread(_0x805728);
      const _0x467085 = {
        sign: _0x13e778
      };
      const _0x531b3a = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x467085
      };
      await _0x499185.wait_gap_interval(this.t_woread_draw, _0x15df8c);
      let {
        result: _0x25a40a
      } = await this.woread_api(_0x531b3a);
      this.t_woread_draw = Date.now();
      let _0x303287 = _0x499185.get(_0x25a40a, "code", -1);
      if (_0x303287 == "0000") {
        const _0x35b26b = {
          notify: true
        };
        this.log("阅读活动[" + _0x3fb930 + "]抽奖: " + (_0x25a40a?.["data"]?.["prizedesc"] || "空气"), _0x35b26b);
      } else {
        let _0x3e245b = _0x25a40a?.["message"] || "";
        this.log("阅读活动[" + _0x3fb930 + "]抽奖失败[" + _0x303287 + "]: " + _0x3e245b);
      }
    } catch (_0x53578b) {
      console.log(_0x53578b);
    }
  }
  async woread_queryTicketAccount(_0x4ada1c = {}) {
    try {
      let _0x5484be = this.get_woread_param(),
        _0x11200d = this.encode_woread(_0x5484be);
      const _0x38d548 = {
        sign: _0x11200d
      };
      const _0x4535bf = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x38d548
      };
      let {
          result: _0x1cf33
        } = await this.woread_api(_0x4535bf),
        _0x15b68d = _0x499185.get(_0x1cf33, "code", -1);
      if (_0x15b68d == "0000") {
        let _0x51fca1 = (_0x1cf33?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x473cf1 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x51fca1, _0x473cf1);
      } else {
        let _0x14d738 = _0x1cf33?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x15b68d + "]: " + _0x14d738);
      }
    } catch (_0x454b16) {
      console.log(_0x454b16);
    }
  }
  async woread_addReadTime(_0x26de12 = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x26de12,
        _0x46c03e = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0x2d584c = this.encode_woread(_0x46c03e);
      const _0x3a0252 = {
        sign: _0x2d584c
      };
      const _0x3e3c8f = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x3a0252
      };
      let {
          result: _0x3898b1
        } = await this.request(_0x3e3c8f),
        _0x2679c2 = _0x499185.get(_0x3898b1, "code", -1);
      if (_0x2679c2 == "0000") {
        this.log("刷新读小说时间: " + _0x3898b1?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x3898b1?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x36c6be = _0x3898b1?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x2679c2 + "]: " + _0x36c6be);
      }
    } catch (_0x219d3a) {
      console.log(_0x219d3a);
    }
  }
  async rabblit_queryActivityData(_0x2638b1 = {}) {
    try {
      let _0x111744 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x3e9be5 = this.encode_woread(_0x111744);
      const _0x1bf03a = {
        sign: _0x3e9be5
      };
      const _0x337658 = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0x1bf03a
      };
      let {
          result: _0x5e79ba
        } = await this.woread_api(_0x337658),
        _0x1b8452 = _0x499185.get(_0x5e79ba, "code", -1);
      if (_0x1b8452 == "0000") {
        let {
          totalcharpternums: _0x234cfa,
          totalreadnums: _0x405e28,
          status: _0x24204f,
          activitystatus: _0x27a7b1
        } = _0x5e79ba?.["data"];
        if (_0x27a7b1 == 1) {
          this.need_read_rabbit = false;
          const _0x41e1ac = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x41e1ac);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x405e28 + "/" + _0x234cfa + "分钟");
        if (_0x24204f == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x405e28 >= _0x234cfa) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x3dc7f0 = _0x5e79ba?.["message"] || "";
        _0x3dc7f0?.["includes"]("未参加") && !_0x2638b1.join_retry && (await this.rabblit_joinRuning()) ? (_0x2638b1.join_retry = true, await this.rabblit_queryActivityData(_0x2638b1)) : this.log("龟兔赛跑查询状态失败[" + _0x1b8452 + "]: " + _0x3dc7f0);
      }
    } catch (_0x5a3b62) {
      console.log(_0x5a3b62);
    }
  }
  async rabblit_joinRuning(_0x2a2d9c = {}) {
    let _0x3049e = false;
    try {
      let _0x1e8420 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x3ab334 = this.encode_woread(_0x1e8420);
      const _0x520226 = {
        sign: _0x3ab334
      };
      const _0x1bba7e = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x520226
      };
      let {
          result: _0x2922b9
        } = await this.woread_api(_0x1bba7e),
        _0x11fd9a = _0x499185.get(_0x2922b9, "code", -1);
      if (_0x11fd9a == "0000") {
        _0x3049e = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0x41da34 = _0x2922b9?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x11fd9a + "]: " + _0x41da34);
      }
    } catch (_0x7dda5) {
      console.log(_0x7dda5);
    } finally {
      return _0x3049e;
    }
  }
  async rabblit_wakeRabbit(_0x4dfadd = {}) {
    try {
      let _0x1b5390 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x3792ca = this.encode_woread(_0x1b5390);
      const _0x598fd5 = {
        sign: _0x3792ca
      };
      const _0x587f87 = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x598fd5
      };
      await _0x499185.wait_gap_interval(this.t_woread_draw, _0x15df8c);
      let {
        result: _0x294ca2
      } = await this.woread_api(_0x587f87);
      this.t_woread_draw = Date.now();
      let _0x485062 = _0x499185.get(_0x294ca2, "code", -1);
      if (_0x485062 == "0000") {
        const _0x34fc7d = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x294ca2?.["data"]?.["prizedesc"] || "空气"), _0x34fc7d);
      } else {
        let _0x407e85 = _0x294ca2?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x485062 + "]: " + _0x407e85);
      }
    } catch (_0x39dcdd) {
      console.log(_0x39dcdd);
    }
  }
  async rabblit_finishActivity(_0x1273b1 = {}) {
    try {
      let _0x2b490e = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x47312c = this.encode_woread(_0x2b490e);
      const _0xa659d9 = {
        sign: _0x47312c
      };
      const _0x4e350f = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0xa659d9
      };
      await _0x499185.wait_gap_interval(this.t_woread_draw, _0x15df8c);
      let {
        result: _0x4d1640
      } = await this.woread_api(_0x4e350f);
      this.t_woread_draw = Date.now();
      let _0x56894d = _0x499185.get(_0x4d1640, "code", -1);
      if (_0x56894d == "0000") {
        this.need_read_rabbit = false;
        const _0x5cfa4c = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x4d1640?.["data"]?.["prizedesc"] || "空气"), _0x5cfa4c);
      } else {
        let _0x5059dd = _0x4d1640?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x56894d + "]: " + _0x5059dd);
      }
    } catch (_0x2951a3) {
      console.log(_0x2951a3);
    }
  }
  async moonbox_queryActiveInfo(_0x496e95 = {}) {
    try {
      let _0x2ad348 = this.get_woread_param(),
        _0xc639ce = this.encode_woread(_0x2ad348);
      const _0x48b6be = {
        sign: _0xc639ce
      };
      const _0x5bbc37 = {
        fn: "moonbox_queryActiveInfo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
        json: _0x48b6be
      };
      let {
          result: _0x5a4c20
        } = await this.woread_api(_0x5bbc37),
        _0x4ff497 = _0x499185.get(_0x5a4c20, "code", -1);
      if (_0x4ff497 == "0000") {
        let {
          activeId: _0x10b5a3,
          activeName: _0x37878a
        } = _0x5a4c20?.["data"];
        _0x3dcf0b = _0x10b5a3;
      } else {
        let _0x216231 = _0x5a4c20?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x4ff497 + "]: " + _0x216231);
      }
    } catch (_0x4502cc) {
      console.log(_0x4502cc);
    }
  }
  async moonbox_queryCurTaskStatus(_0x164412 = {}) {
    try {
      let _0x4e7ffb = {
          activeIndex: _0x3dcf0b,
          ...this.get_woread_param()
        },
        _0x5dc7e0 = this.encode_woread(_0x4e7ffb);
      const _0x291811 = {
        sign: _0x5dc7e0
      };
      const _0x5a6c4c = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x291811
      };
      let {
          result: _0x2f572e
        } = await this.woread_api(_0x5a6c4c),
        _0x283fb1 = _0x499185.get(_0x2f572e, "code", -1);
      if (_0x283fb1 == "0000") {
        for (let _0x51fab2 of _0x2f572e?.["data"] || []) {
          let {
            taskName: _0x3cd2f9,
            currentValue: _0x52126a,
            taskValue: _0x57c07a
          } = _0x51fab2?.["taskDetail"];
          switch (_0x51fab2.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x3cd2f9] = true;
                this.log("阅光宝盒[" + _0x3cd2f9 + "]进度: " + parseInt(_0x52126a) + "/" + _0x57c07a + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_completeActiveTask(_0x51fab2);
              }
            case 1:
              {
                this.moonbox_task_record[_0x3cd2f9] = false;
                if (!this.moonbox_notified.includes(_0x3cd2f9)) {
                  this.moonbox_notified.push(_0x3cd2f9);
                  const _0x594d1f = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x3cd2f9 + "]已完成", _0x594d1f);
                }
                break;
              }
          }
        }
      } else {
        let _0x5e8e5b = _0x2f572e?.["message"] || "";
        _0x5e8e5b?.["includes"]("未领取") && !_0x164412.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x164412.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x164412)) : this.log("阅光宝盒查询任务状态失败[" + _0x283fb1 + "]: " + _0x5e8e5b);
      }
    } catch (_0x5c712a) {
      console.log(_0x5c712a);
    }
  }
  async moonbox_completeActiveTask(_0x400421, _0x13f2a3 = {}) {
    try {
      let _0x5d9a3c = {
          taskId: _0x400421.id,
          ...this.get_woread_param()
        },
        _0x25eea6 = this.encode_woread(_0x5d9a3c);
      const _0x200b94 = {
        sign: _0x25eea6
      };
      const _0x327654 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x200b94
      };
      let {
          result: _0x54e98a
        } = await this.woread_api(_0x327654),
        _0x5c0609 = _0x499185.get(_0x54e98a, "code", -1);
      if (_0x5c0609 == "0000") {
        const _0x19b427 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x54e98a?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x54e98a?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x19b427);
      } else {
        let _0x361dea = _0x54e98a?.["message"] || "";
        this.log("阅光宝盒[" + _0x400421?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x5c0609 + "]: " + _0x361dea);
      }
    } catch (_0x479816) {
      console.log(_0x479816);
    }
  }
  async moonbox_queryActiveTaskList(_0x39962f = {}) {
    try {
      let _0xb2bb0 = {
          activeIndex: _0x3dcf0b,
          ...this.get_woread_param()
        },
        _0x4298b7 = this.encode_woread(_0xb2bb0);
      const _0x2c54f2 = {
        sign: _0x4298b7
      };
      const _0x202b68 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x2c54f2
      };
      let {
          result: _0x3639ec
        } = await this.woread_api(_0x202b68),
        _0x3870ad = _0x499185.get(_0x3639ec, "code", -1);
      if (_0x3870ad == "0000") {
        let _0x5b4631 = _0x3639ec?.["data"]?.["sort"](function (_0x1aca91, _0x415855) {
            let _0x55cd1f = parseInt(_0x415855.taskDetail.taskValue),
              _0x2a86e5 = parseInt(_0x1aca91.taskDetail.taskValue);
            return _0x55cd1f - _0x2a86e5;
          }),
          _0x5a788c = _0x5b4631.filter(_0x4e74eb => _0x4e74eb.maxNum - _0x4e74eb.receiveNum > 0 && _0x4e74eb.taskDetail.materialGroup.groupName.includes("红包"));
        _0x5a788c?.["length"] ? await this.moonbox_receiveActiveTask(_0x5a788c) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x12e2ff = _0x3639ec?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x3870ad + "]: " + _0x12e2ff);
      }
    } catch (_0x58b05b) {
      console.log(_0x58b05b);
    }
  }
  async moonbox_receiveActiveTask(_0x58ae6e, _0xf61481 = {}) {
    try {
      if (!_0x58ae6e.length) {
        return;
      }
      let _0x33210e = _0x58ae6e.shift(),
        _0x4885de = _0x33210e?.["taskDetail"]?.["taskName"] || "",
        _0xcdc9fa = {
          activeId: _0x3dcf0b,
          taskId: _0x33210e.secondTaskId,
          ...this.get_woread_param()
        },
        _0x32056b = this.encode_woread(_0xcdc9fa);
      const _0x10f816 = {
        sign: _0x32056b
      };
      const _0x24e1de = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x10f816
      };
      let {
          result: _0x425978
        } = await this.woread_api(_0x24e1de),
        _0x38b05a = _0x499185.get(_0x425978, "code", -1);
      if (_0x38b05a == "0000") {
        this.moonbox_task_record[_0x4885de] = true;
        this.log("领取阅光宝盒任务[" + _0x4885de + "]成功");
      } else {
        let _0x2d9492 = _0x425978?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x4885de + "]失败[" + _0x38b05a + "]: " + _0x2d9492);
        (_0x2d9492?.["includes"]("今天无法完成") || _0x2d9492?.["includes"]("领光了")) && _0x58ae6e.length > 0 && (await _0x499185.wait(500), await this.moonbox_receiveActiveTask(_0x58ae6e, _0xf61481));
      }
    } catch (_0x2e5802) {
      console.log(_0x2e5802);
    }
  }
  async moonbox_queryReadStatus(_0x363570 = {}) {
    try {
      let _0x1fcf84 = {
          activeIndex: _0x3dcf0b,
          ...this.get_woread_param()
        },
        _0x3a7b1e = this.encode_woread(_0x1fcf84);
      const _0x751149 = {
        sign: _0x3a7b1e
      };
      const _0x3bf7a8 = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x751149
      };
      let {
          result: _0x23a1a9
        } = await this.woread_api(_0x3bf7a8),
        _0xba4a5f = _0x499185.get(_0x23a1a9, "code", -1);
      if (_0xba4a5f == "0000") {
        switch (_0x23a1a9?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0xe392e6 = {
                readTime: 2
              };
              await this.woread_addReadTime(_0xe392e6);
              await this.moonbox_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x23a1a9?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x4f90d4 = _0x23a1a9?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0xba4a5f + "]: " + _0x4f90d4);
      }
    } catch (_0x8dc5a3) {
      console.log(_0x8dc5a3);
    }
  }
  async moonbox_drawReadActivePrize(_0x54ff3c = {}) {
    try {
      let _0x2050e8 = {
          activeIndex: _0x3dcf0b,
          ...this.get_woread_param()
        },
        _0x3ecadd = this.encode_woread(_0x2050e8);
      const _0x29190d = {
        sign: _0x3ecadd
      };
      const _0x2aef75 = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x29190d
      };
      let {
          result: _0x38e0ed
        } = await this.woread_api(_0x2aef75),
        _0x434c72 = _0x499185.get(_0x38e0ed, "code", -1);
      if (_0x434c72 == "0000") {
        const _0x3e85b5 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x38e0ed?.["data"]?.["prizedesc"] || JSON.stringify(_0x38e0ed)), _0x3e85b5);
      } else {
        let _0x46b3af = _0x38e0ed?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x434c72 + "]: " + _0x46b3af);
      }
    } catch (_0x3c72b6) {
      console.log(_0x3c72b6);
    }
  }
  async ltyp_login(_0x3cc563, _0xb8a82 = {}) {
    try {
      const _0x38fca1 = {
        "client-Id": _0xb33876,
        accessToken: ""
      };
      const _0xc649f = {
        clientId: _0xb33876,
        ticket: _0x3cc563
      };
      let _0x2bc2e5 = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x38fca1,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0xc649f
          }
        },
        {
          result: _0x112fcb
        } = await this.request(_0x2bc2e5),
        _0x36cdbc = _0x499185.get(_0x112fcb, "STATUS", -1);
      if (_0x36cdbc == 200) {
        this.ltyp_token = _0x112fcb?.["RSP"]?.["DATA"]?.["token"];
        for (let _0x1a0d0b of _0xe5f997) {
          await this.ltyp_incentiveTimes(_0x1a0d0b);
          await this.ltyp_lottery(_0x1a0d0b);
        }
      } else {
        let _0x35ce5e = _0x112fcb?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x36cdbc + "]: " + _0x35ce5e);
      }
    } catch (_0x3fe528) {
      console.log(_0x3fe528);
    }
  }
  async ltyp_incentiveTimes(_0x2e4a64, _0x2253b0 = {}) {
    try {
      const _0x3e352b = {
        "client-Id": _0xb33876,
        "Access-Token": this.ltyp_token
      };
      const _0x44e1e2 = {
        bizKey: "incentiveTimesPipeline",
        activityId: _0x2e4a64
      };
      const _0x3e4926 = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x3e352b,
        searchParams: _0x44e1e2
      };
      let {
          result: _0x1ad5ee
        } = await this.request(_0x3e4926),
        _0x12cdb1 = _0x499185.get(_0x1ad5ee?.["meta"], "code", -1);
      if (_0x12cdb1 == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0x1ad5ee?.["result"];
        if (isIncentiveTask) {
          for (let _0x43cc0d = incentiveTimeDone; _0x43cc0d < incentiveTimeTotal; _0x43cc0d++) {
            await this.ltyp_incentiveTask(_0x2e4a64);
          }
        }
      } else {
        let _0x3d9a45 = _0x1ad5ee?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x12cdb1 + "]: " + _0x3d9a45);
      }
    } catch (_0x25b793) {
      console.log(_0x25b793);
    }
  }
  async ltyp_incentiveTask(_0x39b527, _0x4ac15d = {}) {
    try {
      const _0x1b26b6 = {
        "client-Id": _0xb33876,
        "Access-Token": this.ltyp_token
      };
      const _0x312601 = {
        activityId: _0x39b527
      };
      const _0x15937d = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x1b26b6,
        json: {}
      };
      _0x15937d.json.bizKey = "incentiveTaskPipeline";
      _0x15937d.json.bizObject = _0x312601;
      let {
          result: _0x48226e
        } = await this.request(_0x15937d),
        _0x1fc329 = _0x499185.get(_0x48226e?.["meta"], "code", -1);
      if (_0x1fc329 == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0x48226e?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x323a4d = _0x48226e?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x1fc329 + "]: " + _0x323a4d);
      }
    } catch (_0x19de1d) {
      console.log(_0x19de1d);
    }
  }
  async ltyp_lottery_times(_0x55d41b, _0xbb181f = {}) {
    try {
      const _0x50deec = {
        "client-Id": _0xb33876,
        token: this.ltyp_token
      };
      const _0x110ea1 = {
        activityId: _0x55d41b
      };
      const _0x1090b9 = {
        fn: "ltyp_lottery_times",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/times",
        headers: _0x50deec,
        searchParams: _0x110ea1
      };
      let {
          result: _0x341dd3
        } = await this.request(_0x1090b9),
        _0x4d1945 = _0x499185.get(_0x341dd3, "RSP_CODE", -1);
      if (_0x4d1945 == 0) {
        let {
          times = 0
        } = _0x341dd3?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await _0x499185.wait(1000);
          await this.ltyp_lottery(_0x55d41b);
        }
      } else {
        let _0x271375 = _0x341dd3?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x4d1945 + "]: " + _0x271375);
      }
    } catch (_0x2c1dbb) {
      console.log(_0x2c1dbb);
    }
  }
  async ltyp_lottery(_0x4ee8d2, _0x232db2 = {}) {
    try {
      const _0x3b89ef = {
        "client-Id": _0xb33876,
        "Access-Token": this.ltyp_token
      };
      const _0x477610 = {
        activityId: _0x4ee8d2,
        type: 3
      };
      const _0x2126df = {
        lottery: _0x477610
      };
      const _0x100efc = {
        bizKey: "newLottery",
        bizObject: _0x2126df
      };
      const _0x1bba73 = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0x3b89ef,
        json: _0x100efc
      };
      let {
          result: _0xf7fb9a
        } = await this.request(_0x1bba73),
        _0x4ae37 = _0x499185.get(_0xf7fb9a?.["meta"], "code", -1);
      if (_0x4ae37 == 0) {
        let {
          prizeName = ""
        } = _0xf7fb9a?.["result"];
        if (prizeName) {
          const _0x2fdba9 = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x2fdba9);
          await this.ltyp_lottery(_0x4ee8d2, _0x232db2);
        }
      } else {
        let _0x10170d = _0xf7fb9a?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x4ae37 + "]: " + _0x10170d);
      }
    } catch (_0xc001e2) {
      console.log(_0xc001e2);
    }
  }
  async act_517_userAccount(_0x304acb = {}) {
    try {
      const _0x4a987d = {
        fn: "act_517_userAccount",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/userAccount"
      };
      {
        let {
            result: _0x848bc6,
            statusCode: _0x883c40
          } = await this.request(_0x499185.copy(_0x4a987d)),
          _0x4271ae = _0x499185.get(_0x848bc6, "code", _0x883c40);
        if (_0x4271ae == "0000") {
          await this.act_517_taskList();
        } else {
          let _0x137cdb = _0x848bc6?.["message"] || _0x848bc6?.["msg"] || "";
          this.log("517活动进入主页失败[" + _0x4271ae + "]: " + _0x137cdb);
          return;
        }
      }
      {
        let {
            result: _0x521324,
            statusCode: _0xe8111c
          } = await this.request(_0x499185.copy(_0x4a987d)),
          _0x300b6d = _0x499185.get(_0x521324, "code", _0xe8111c);
        if (_0x300b6d == "0000") {
          let {
            chances: _0x2a2559
          } = _0x521324?.["data"];
          this.log("517活动可以抽奖" + _0x2a2559 + "次");
          let _0x5697be = false;
          while (_0x2a2559-- > 0) {
            if (_0x5697be) {
              await _0x499185.wait(3000);
            }
            _0x5697be = true;
            await this.act_517_lottery();
          }
        } else {
          let _0x2c2da2 = _0x521324?.["message"] || _0x521324?.["msg"] || "";
          this.log("517活动查询抽奖次数失败[" + _0x300b6d + "]: " + _0x2c2da2);
        }
      }
      {
        let {
            result: _0x562854,
            statusCode: _0xd50efb
          } = await this.request(_0x499185.copy(_0x4a987d)),
          _0x535472 = _0x499185.get(_0x562854, "code", _0xd50efb);
        if (_0x535472 == "0000") {
          let {
            amount: _0x13ca88,
            targetAmount: _0x4c4610
          } = _0x562854?.["data"];
          const _0x3bed54 = {
            notify: true
          };
          this.log("517活动现金进度: " + _0x13ca88 + "/" + _0x4c4610, _0x3bed54);
        } else {
          let _0x1348c6 = _0x562854?.["message"] || _0x562854?.["msg"] || "";
          this.log("517活动查询进度失败[" + _0x535472 + "]: " + _0x1348c6);
        }
      }
    } catch (_0x73fdeb) {
      console.log(_0x73fdeb);
    }
  }
  async act_517_bind(_0x1b6b2a, _0x2f64a8 = {}) {
    try {
      const _0x1f453f = {
        fn: "act_517_bind",
        method: "post",
        url: "https://activity.10010.com/2024517charges/openWindows/bind",
        json: {},
        valid_code: [401]
      };
      _0x1f453f.json.shareCode = _0x1b6b2a;
      _0x1f453f.json.channel = "countersign";
      let {
        result: _0x2ad5cd
      } = await this.request(_0x1f453f);
    } catch (_0x5512d7) {
      console.log(_0x5512d7);
    }
  }
  async act_517_lottery(_0xcad5f8 = {}) {
    try {
      const _0x549815 = {
        fn: "act_517_lottery",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/lottery"
      };
      let {
          result: _0x193f69,
          statusCode: _0x2474e1
        } = await this.request(_0x549815),
        _0xed6a2 = _0x499185.get(_0x193f69, "code", _0x2474e1);
      if (_0xed6a2 == "0000") {
        _0x193f69?.["data"]?.["uuid"] ? (await _0x499185.wait(2000), await this.act_517_winningRecord(_0x193f69.data.uuid)) : this.log("517活动抽奖失败, 没有返回uuid");
      } else {
        let _0x3e8aef = _0x193f69?.["message"] || _0x193f69?.["msg"] || "";
        this.log("517活动抽奖失败[" + _0xed6a2 + "]: " + _0x3e8aef);
      }
    } catch (_0x7a0494) {
      console.log(_0x7a0494);
    }
  }
  async act_517_winningRecord(_0x4ea549, _0x5350c8 = {}) {
    try {
      const _0x5273ca = {
        requestId: _0x4ea549
      };
      const _0xf34a72 = {
        fn: "act_517_winningRecord",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/winningRecord",
        searchParams: _0x5273ca
      };
      let {
          result: _0x357c40,
          statusCode: _0xd3b769
        } = await this.request(_0xf34a72),
        _0x5c1472 = _0x499185.get(_0x357c40, "code", _0xd3b769);
      if (_0x5c1472 == "0000") {
        if (_0x357c40?.["data"]?.["isWin"] === "1") {
          let {
              prizeAmount: _0x47dd4b,
              prizeList: _0x2763e6,
              afterAmount: _0x48c14c,
              targetAmount: _0x34a67b,
              showAmount = "0"
            } = _0x357c40?.["data"],
            _0x89a52 = (_0x2763e6 || []).filter(_0x24e341 => _0x24e341.prizeName).map(_0xd93f58 => _0xd93f58.prizeName).join(", ") || "";
          const _0x2d8e5e = {
            notify: true
          };
          if (_0x89a52) {
            this.log("517活动抽奖: " + _0x89a52, _0x2d8e5e);
          }
          if (showAmount === "1") {
            this.log("517活动抽奖现金进度: +" + _0x47dd4b + " (" + _0x48c14c + "/" + _0x34a67b + ")");
          }
        } else {
          this.log("517活动抽奖: 空气");
        }
      } else {
        let _0x4383de = _0x357c40?.["message"] || _0x357c40?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x5c1472 + "]: " + _0x4383de);
      }
    } catch (_0x393d1b) {
      console.log(_0x393d1b);
    }
  }
  async act_517_taskList(_0x387c19 = {}) {
    try {
      const _0x3d432c = {
        fn: "act_517_taskList",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/taskList"
      };
      let {
          result: _0x499f35,
          statusCode: _0x32cbd1
        } = await this.request(_0x3d432c),
        _0x4346f8 = _0x499185.get(_0x499f35, "code", _0x32cbd1);
      if (_0x4346f8 == "0000") {
        let _0xc94322 = _0x499f35?.["data"]?.["taskList"] || [];
        for (let _0x40d1ce of _0xc94322) {
          let {
            completeNum = 0,
            maxNum: _0x4788b8,
            isComplete: _0x1d080f,
            taskType: _0x9c2fa2
          } = _0x40d1ce;
          if (_0x1d080f) {
            continue;
          }
          if (_0x9c2fa2 == "5") {
            continue;
          }
          completeNum = parseInt(completeNum);
          _0x4788b8 = parseInt(_0x4788b8);
          for (let _0x490756 = completeNum; _0x490756 < _0x4788b8; _0x490756++) {
            await this.act_517_completeTask(_0x40d1ce);
          }
        }
      } else {
        let _0x1bbcd5 = _0x499f35?.["message"] || _0x499f35?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x4346f8 + "]: " + _0x1bbcd5);
      }
    } catch (_0x3e782b) {
      console.log(_0x3e782b);
    }
  }
  async act_517_completeTask(_0x33eaef, _0x4fd91c = {}) {
    try {
      let _0x259423 = _0x33eaef.title;
      const _0x23c9e7 = {
        taskId: _0x33eaef.taskId
      };
      const _0x49622f = {
        fn: "act_517_completeTask",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/completeTask",
        searchParams: _0x23c9e7
      };
      let {
          result: _0x5325ca,
          statusCode: _0x14c894
        } = await this.request(_0x49622f),
        _0x56943d = _0x499185.get(_0x5325ca, "code", _0x14c894);
      if (_0x56943d == "0000") {
        if (_0x5325ca?.["data"]) {
          let {
            num: _0x983255,
            title: _0x1d12c7
          } = _0x5325ca.data;
          this.log("完成任务[" + _0x1d12c7 + "]成功: " + _0x983255 + "次抽奖机会");
        } else {
          this.log("完成任务[" + _0x259423 + "]失败没有获得抽奖机会");
        }
      } else {
        let _0x51ba49 = _0x5325ca?.["message"] || _0x5325ca?.["msg"] || "";
        this.log("完成任务[" + _0x259423 + "]失败[" + _0x56943d + "]: " + _0x51ba49);
      }
    } catch (_0x2da0ac) {
      console.log(_0x2da0ac);
    }
  }
  get_wocare_body(_0x35cc20, _0x30b76d = {}) {
    const _0x3fe113 = _0x499185.time("yyyyMMddhhmmssS"),
      _0x5d3e50 = Buffer.from(JSON.stringify(_0x30b76d)).toString("base64");
    let _0x99f216 = {
        version: _0x3dbc3a,
        apiCode: _0x35cc20,
        channelId: _0x3e498f,
        transactionId: _0x3fe113 + _0x499185.randomString(6, _0x59dc4e),
        timeStamp: _0x3fe113,
        messageContent: _0x5d3e50
      },
      _0x54144e = [];
    Object.keys(_0x99f216).sort().forEach(_0x50e48d => {
      _0x54144e.push(_0x50e48d + "=" + _0x99f216[_0x50e48d]);
    });
    _0x54144e.push("sign=" + _0x166269);
    _0x99f216.sign = _0x29e520.MD5(_0x54144e.join("&")).toString();
    return _0x99f216;
  }
  async wocare_api(_0x1b7295, _0x24d734 = {}) {
    let _0x37cef6 = this.get_wocare_body(_0x1b7295, _0x24d734);
    const _0x4d8c15 = {
      fn: "wocare_" + _0x1b7295,
      method: "post",
      url: "https://wocare.unisk.cn/api/v1/" + _0x1b7295,
      form: _0x37cef6
    };
    let _0x352ad0 = await this.request(_0x4d8c15);
    if (_0x352ad0?.["result"]?.["messageContent"]) {
      try {
        let _0x270e19 = JSON.parse(Buffer.from(_0x352ad0.result.messageContent, "base64").toString());
        _0x352ad0.result.data = _0x270e19?.["data"] || _0x270e19;
        if (_0x270e19?.["resultMsg"]) {
          _0x352ad0.result.resultMsg = _0x270e19.resultMsg;
        }
      } catch (_0x256cc7) {
        this.log("解析联通祝福返回失败:");
        console.log(_0x256cc7);
      }
    }
    return _0x352ad0;
  }
  async wocare_getToken(_0x4f7f3f, _0x1d3b88 = {}) {
    let _0x4a7d5a = false;
    try {
      let _0x15722c = {
          fn: "wocare_getToken",
          method: "get",
          url: "https://wocare.unisk.cn/mbh/getToken",
          searchParams: {
            channelType: _0x13c5d3,
            type: "02",
            ticket: _0x4f7f3f,
            version: _0x232718,
            timestamp: _0x499185.time("yyyyMMddhhmmssS"),
            desmobile: this.mobile,
            num: 0,
            postage: _0x499185.randomString(32),
            homePage: "home",
            duanlianjieabc: "qAz2m",
            userNumber: this.mobile
          }
        },
        {
          headers: _0x4c9880,
          statusCode: _0x126db1
        } = await this.request(_0x15722c);
      if (_0x126db1 == 302) {
        if (_0x4c9880?.["location"]) {
          let _0x14a1f1 = new URL(_0x4c9880.location),
            _0x2571c0 = _0x14a1f1.searchParams.get("sid");
          _0x2571c0 ? (this.wocare_sid = _0x2571c0, _0x4a7d5a = await this.wocare_loginmbh()) : this.log("联通祝福没有获取到sid");
        } else {
          this.log("联通祝福没有获取到location");
        }
      } else {
        this.log("联通祝福获取sid失败[" + _0x126db1 + "]");
      }
    } catch (_0x5aea31) {
      console.log(_0x5aea31);
    } finally {
      return _0x4a7d5a;
    }
  }
  async wocare_loginmbh(_0x196c19 = {}) {
    let _0x44b2e3 = false;
    try {
      let _0x453bb3 = "loginmbh";
      const _0x475f4a = {
        sid: this.wocare_sid,
        channelType: _0x13c5d3,
        apiCode: _0x453bb3
      };
      let {
          result: _0x10b94a,
          statusCode: _0x2bc488
        } = await this.wocare_api(_0x453bb3, _0x475f4a),
        _0xfb6b4 = _0x499185.get(_0x10b94a, "resultCode", _0x2bc488);
      if (_0xfb6b4 == "0000") {
        _0x44b2e3 = true;
        let {
          token: _0x197304
        } = _0x10b94a?.["data"];
        this.wocare_token = _0x197304;
      } else {
        let _0x3179fc = _0x10b94a?.["resultMsg"] || _0x10b94a?.["resultDesc"] || "";
        this.log("联通祝福登录失败[" + _0xfb6b4 + "]: " + _0x3179fc);
      }
    } catch (_0x47bb7f) {
      console.log(_0x47bb7f);
    } finally {
      return _0x44b2e3;
    }
  }
  async wocare_getSpecificityBanner(_0x2ef0be = {}) {
    try {
      let _0x417949 = "getSpecificityBanner";
      const _0x29795a = {
        token: this.wocare_token,
        apiCode: _0x417949
      };
      let {
          result: _0x523021,
          statusCode: _0x33edab
        } = await this.wocare_api(_0x417949, _0x29795a),
        _0x48de86 = _0x499185.get(_0x523021, "resultCode", _0x33edab);
      if (_0x48de86 == "0000") {
        let _0x137b26 = _0x523021?.["data"] || [];
        for (let _0x38757c of _0x137b26.filter(_0x2b42e4 => _0x2b42e4.activityStatus === "0" && _0x2b42e4.isDeleted === "0")) {
          await this.wocare_getDrawTask(_0x38757c);
          await this.wocare_loadInit(_0x38757c);
        }
      } else {
        let _0x363da8 = _0x523021?.["resultMsg"] || _0x523021?.["resultDesc"] || "";
        this.log("联通祝福进入活动失败[" + _0x48de86 + "]: " + _0x363da8);
      }
    } catch (_0x47fb9f) {
      console.log(_0x47fb9f);
    }
  }
  async wocare_loadInit(_0x4e7ead, _0x52b357 = {}) {
    try {
      let _0x4b580c = "loadInit";
      const _0x21ef9f = {
        token: this.wocare_token,
        channelType: _0x13c5d3,
        type: _0x4e7ead.id,
        apiCode: _0x4b580c
      };
      let {
          result: _0x38b798,
          statusCode: _0x4d78e5
        } = await this.wocare_api(_0x4b580c, _0x21ef9f),
        _0x1a94ff = _0x499185.get(_0x38b798, "resultCode", _0x4d78e5);
      if (_0x1a94ff == "0000") {
        let _0x35333d = _0x38b798?.["data"],
          _0x2ffd1a = _0x35333d?.["zActiveModuleGroupId"],
          _0x3e67b4 = 0;
        switch (_0x4e7ead.id) {
          case 2:
            {
              let _0x51003c = _0x35333d?.["data"]?.["isPartake"] || 0;
              !_0x51003c && (_0x3e67b4 = 1);
              break;
            }
          case 3:
            {
              _0x3e67b4 = parseInt(_0x35333d?.["raffleCountValue"] || 0);
              break;
            }
          case 4:
            {
              _0x3e67b4 = parseInt(_0x35333d?.["mhRaffleCountValue"] || 0);
              break;
            }
        }
        while (_0x3e67b4-- > 0) {
          await _0x499185.wait(5000);
          await this.wocare_luckDraw(_0x4e7ead, _0x2ffd1a);
        }
      } else {
        let _0x8e2ea4 = _0x38b798?.["resultMsg"] || _0x38b798?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x4e7ead.name + "]查询活动失败[" + _0x1a94ff + "]: " + _0x8e2ea4);
      }
    } catch (_0x270cf6) {
      console.log(_0x270cf6);
    }
  }
  async wocare_getDrawTask(_0x22fb55, _0x1a8173 = {}) {
    try {
      let _0x3e61e9 = "getDrawTask";
      const _0x350274 = {
        token: this.wocare_token,
        channelType: _0x13c5d3,
        type: _0x22fb55.id,
        apiCode: _0x3e61e9
      };
      let {
          result: _0x115c91,
          statusCode: _0x3aa5aa
        } = await this.wocare_api(_0x3e61e9, _0x350274),
        _0x1f844d = _0x499185.get(_0x115c91, "resultCode", _0x3aa5aa);
      if (_0x1f844d == "0000") {
        let _0x5d41bc = _0x115c91?.["data"]?.["taskList"] || [];
        for (let _0x4bdff1 of _0x5d41bc.filter(_0x1fda56 => _0x1fda56.taskStatus == 0)) {
          await this.wocare_completeTask(_0x22fb55, _0x4bdff1);
        }
      } else {
        let _0x44167c = _0x115c91?.["resultMsg"] || _0x115c91?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x22fb55.name + "]查询任务失败[" + _0x1f844d + "]: " + _0x44167c);
      }
    } catch (_0x52751b) {
      console.log(_0x52751b);
    }
  }
  async wocare_completeTask(_0x226f88, _0x504e0f, _0x32ea84 = "1", _0x2fe410 = {}) {
    try {
      let _0x17aa87 = _0x504e0f.title,
        _0x3bdc76 = _0x32ea84 == "1" ? "领取任务" : "完成任务",
        _0x3e6d55 = "completeTask";
      const _0x20fd96 = {
        token: this.wocare_token,
        channelType: _0x13c5d3,
        task: _0x504e0f.id,
        taskStep: _0x32ea84,
        type: _0x226f88.id,
        apiCode: _0x3e6d55
      };
      let {
          result: _0x3bed05,
          statusCode: _0x480521
        } = await this.wocare_api(_0x3e6d55, _0x20fd96),
        _0x35b2c9 = _0x499185.get(_0x3bed05, "resultCode", _0x480521);
      if (_0x35b2c9 == "0000") {
        this.log(_0x3bdc76 + "[" + _0x17aa87 + "]成功");
        _0x32ea84 == "1" && (await this.wocare_completeTask(_0x226f88, _0x504e0f, "4"));
      } else {
        let _0x574982 = _0x3bed05?.["resultMsg"] || _0x3bed05?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x226f88.name + "]" + _0x3bdc76 + "[" + _0x17aa87 + "]失败[" + _0x35b2c9 + "]: " + _0x574982);
      }
    } catch (_0x5abe37) {
      console.log(_0x5abe37);
    }
  }
  async wocare_luckDraw(_0x3196df, _0x23c84b, _0x29b5c0 = {}) {
    try {
      let _0x13a440 = "luckDraw";
      const _0x19854c = {
        token: this.wocare_token,
        channelType: _0x13c5d3,
        zActiveModuleGroupId: _0x23c84b,
        type: _0x3196df.id,
        apiCode: _0x13a440
      };
      let {
          result: _0x586c1d,
          statusCode: _0x385acd
        } = await this.wocare_api(_0x13a440, _0x19854c),
        _0x47197a = _0x499185.get(_0x586c1d, "resultCode", _0x385acd);
      if (_0x47197a == "0000") {
        let _0x46c0e5 = _0x499185.get(_0x586c1d?.["data"], "resultCode", -1);
        if (_0x46c0e5 == "0000") {
          let {
            prizeName: _0x1846e7,
            prizeDesc: _0x4af2f2
          } = _0x586c1d?.["data"]?.["data"]?.["prize"];
          this.log("联通祝福[" + _0x3196df.name + "]抽奖: " + _0x1846e7 + "[" + _0x4af2f2 + "]");
        } else {
          let _0x151cfc = _0x586c1d?.["resultMsg"] || _0x586c1d?.["resultDesc"] || "";
          this.log("联通祝福[" + _0x3196df.name + "]抽奖失败[" + _0x46c0e5 + "]: " + _0x151cfc);
        }
      } else {
        let _0x173bca = _0x586c1d?.["resultMsg"] || _0x586c1d?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x3196df.name + "]抽奖错误[" + _0x47197a + "]: " + _0x173bca);
      }
    } catch (_0xb80382) {
      console.log(_0xb80382);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x2207b4 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x393912
      } = await this.openPlatLineNew(_0x2207b4);
    if (!_0x393912) {
      return;
    }
    await this.game_login(_0x393912);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x4e918e = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x5e30f3,
        type: _0x39d7f1,
        loc: _0x25db85
      } = await this.openPlatLineNew(_0x4e918e);
    if (!_0x5e30f3) {
      return;
    }
    await this.ttlxj_authorize(_0x5e30f3, _0x39d7f1, _0x25db85);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x4d990d = new Date().getDate();
    if (_0x4d990d >= 26 && _0x4d990d <= 28) {
      await this.epay_28_authCheck();
      if (_0x588f67.length) {
        let _0x166cbb = _0x499185.randomList(_0x588f67);
        await this.appMonth_28_bind(_0x166cbb);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x1b775b = new Date().getDate();
    _0x1b775b == 28 && (await this.draw_28_queryChance());
  }
  async act_517_task() {
    let _0x4fd90d = new Date("2024-05-10 00:00:00"),
      _0xf7b470 = new Date("2024-06-09 00:00:00"),
      _0x701120 = Date.now();
    if (_0x701120 > _0x4fd90d.getTime() && _0x701120 < _0xf7b470.getTime()) {
      if (_0x2deaba.length) {
        let _0x5efcad = _0x499185.randomList(_0x2deaba);
        await this.act_517_bind(_0x5efcad);
      }
      await this.act_517_userAccount();
    }
  }
  async flmf_task() {
    if (this.city.filter(_0x4e1d8d => _0x4e1d8d.proCode == "091").length == 0) {
      return;
    }
    let _0x4477aa = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x11670a
      } = await this.openPlatLineNew(_0x4477aa);
    if (!_0x11670a) {
      return;
    }
    await this.flmf_login(_0x11670a);
  }
  async ltyp_task() {
    let _0x2d26ad = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x325d27
      } = await this.openPlatLineNew(_0x2d26ad);
    if (!_0x325d27) {
      return;
    }
    await this.ltyp_login(_0x325d27);
  }
  async ltzf_task() {
    let _0x4f4d61 = new URL("https://wocare.unisk.cn/mbh/getToken");
    _0x4f4d61.searchParams.append("channelType", _0x13c5d3);
    _0x4f4d61.searchParams.append("homePage", "home");
    _0x4f4d61.searchParams.append("duanlianjieabc", "qAz2m");
    let _0x5ae60b = _0x4f4d61.toString(),
      {
        ticket: _0x5b4a0e
      } = await this.openPlatLineNew(_0x5ae60b);
    if (!_0x5b4a0e) {
      return;
    }
    if (!(await this.wocare_getToken(_0x5b4a0e))) {
      return;
    }
    for (let _0x523bc8 of _0x33ff4a) {
      await this.wocare_getDrawTask(_0x523bc8);
      await this.wocare_loadInit(_0x523bc8);
    }
  }
  async woread_draw_task(_0x18fa07) {
    await this.woread_getSeeVideoAddNumber(_0x18fa07);
    await this.woread_addDrawTimes(_0x18fa07);
    await this.woread_getActivityNumber(_0x18fa07);
  }
  async woread_task() {
    for (let _0xe74a86 of _0x4d607c) {
      await this.woread_draw_task(_0xe74a86);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    let _0x403562 = Object.values(this.moonbox_task_record).filter(_0x22b6c1 => _0x22b6c1 === true).length;
    while (this.need_read_rabbit || _0x403562) {
      let _0x59f2bf = 2;
      const _0x2d9295 = {
        readTime: _0x59f2bf
      };
      await this.woread_addReadTime(_0x2d9295);
      let _0x5e4cd0 = Date.now();
      if (_0x403562) {
        await this.moonbox_queryCurTaskStatus();
      }
      _0x403562 = Object.values(this.moonbox_task_record).filter(_0x5257e1 => _0x5257e1 === true).length;
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      let _0xe029a0 = Date.now(),
        _0x28ed3c = 125000 + _0x5e4cd0 - _0xe029a0;
      (this.need_read_rabbit || _0x403562) && _0x28ed3c > 0 && (this.log("等待2分钟..."), await _0x499185.wait(_0x28ed3c));
    }
  }
  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    if (!_0x3dcf0b) {
      await this.moonbox_queryActiveInfo();
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x499185.log("\n------------------ 账号[" + this.index + "] ------------------");
    if (!_0x3cfd48) {
      await this.sign_task();
    }
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.act_517_task();
    if (!_0x18fc11) {
      await this.ltzf_task();
    }
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x499185.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  if (!(await _0x5a5a6c())) {
    return;
  }
  await _0x5dff7a();
  _0x499185.read_env(_0x2dce62);
  _0x499185.log("\n------------------------------------");
  _0x499185.log("首页签到设置为: " + (_0x3cfd48 ? "不" : "") + "运行");
  _0x499185.log("联通祝福设置为: " + (_0x18fc11 ? "不" : "") + "运行");
  _0x499185.log("------------------------------------\n");
  for (let _0x20470e of _0x499185.userList) {
    await _0x20470e.userLoginTask();
  }
  for (let _0x4868a5 of _0x499185.userList.filter(_0x12582e => _0x12582e.valid)) {
    await _0x4868a5.userTask();
  }
  let _0x460a88 = _0x499185.userList.filter(_0x2b0143 => _0x2b0143.valid && _0x2b0143.woread_verifycode && (_0x2b0143.need_read_rabbit || Object.values(_0x2b0143.moonbox_task_record).filter(_0x518292 => _0x518292 === true).length));
  if (_0x460a88.length) {
    let _0xeca0ec = [];
    _0x499185.log("\n============ 开始刷阅读时长 ============");
    for (let _0x2d5228 of _0x460a88) {
      _0xeca0ec.push(_0x2d5228.woread_reading_task());
    }
    await Promise.all(_0xeca0ec);
  }
})().catch(_0x22e545 => _0x499185.log(_0x22e545)).finally(() => _0x499185.exitNow());
async function _0x5a5a6c(_0x474c50 = 0) {
  let _0x105882 = false;
  try {
    const _0x55ae2b = {
      fn: "auth",
      method: "get",
      url: _0x2e27df,
      timeout: 20000
    };
    let {
      statusCode: _0x1bbe0e,
      result: _0x338538
    } = await _0x22371a.request(_0x55ae2b);
    if (_0x1bbe0e != 200) {
      _0x474c50++ < _0x4d480e && (_0x105882 = await _0x5a5a6c(_0x474c50));
      return _0x105882;
    }
    if (_0x338538?.["code"] == 0) {
      _0x338538 = JSON.parse(_0x338538.data.file.data);
      if (_0x338538?.["commonNotify"] && _0x338538.commonNotify.length > 0) {
        const _0xa5582f = {
          notify: true
        };
        _0x499185.log(_0x338538.commonNotify.join("\n") + "\n", _0xa5582f);
      }
      _0x338538?.["commonMsg"] && _0x338538.commonMsg.length > 0 && _0x499185.log(_0x338538.commonMsg.join("\n") + "\n");
      if (_0x338538[_0x5c4d4a]) {
        let _0x2494df = _0x338538[_0x5c4d4a];
        _0x2494df.status == 0 ? _0x129b14 >= _0x2494df.version ? (_0x105882 = true, _0x499185.log(_0x2494df.msg[_0x2494df.status]), _0x499185.log(_0x2494df.updateMsg), _0x499185.log("现在运行的脚本版本是：" + _0x129b14 + "，最新脚本版本：" + _0x2494df.latestVersion)) : _0x499185.log(_0x2494df.versionMsg) : _0x499185.log(_0x2494df.msg[_0x2494df.status]);
      } else {
        _0x499185.log(_0x338538.errorMsg);
      }
    } else {
      _0x474c50++ < _0x4d480e && (_0x105882 = await _0x5a5a6c(_0x474c50));
    }
  } catch (_0x5c3841) {
    _0x499185.log(_0x5c3841);
  } finally {
    return _0x105882;
  }
}
async function _0x5dff7a() {
  let _0x427f1f = false;
  try {
    const _0x29bfbd = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x5eb95b
    };
    let {
      statusCode: _0x53416a,
      result: _0x36e952
    } = await _0x22371a.request(_0x29bfbd);
    if (_0x53416a != 200) {
      return Promise.resolve();
    }
    if (_0x36e952?.["code"] == 0) {
      _0x36e952 = JSON.parse(_0x36e952.data.file.data);
      _0xe5f997 = _0x36e952?.["ltyp_lottery"] || _0xe5f997;
      _0x4d607c = _0x36e952?.["woread_draw_id"] || _0x4d607c;
      _0x588f67 = _0x36e952?.["appMonth_28_share"] || _0x588f67;
      _0x2deaba = _0x36e952?.["act_517_share"] || _0x2deaba;
    }
  } catch (_0x344052) {
    _0x499185.log(_0x344052);
  } finally {
    return _0x427f1f;
  }
}
function _0x17d42a(_0x3d82f2) {
  return new class {
    constructor(_0x569ed1) {
      this.name = _0x569ed1;
      this.startTime = Date.now();
      const _0x24ab6b = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x24ab6b);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x4647db, _0x53ad18 = {}) {
      const _0x457b6f = {
        console: true
      };
      Object.assign(_0x457b6f, _0x53ad18);
      if (_0x457b6f.time) {
        let _0x51a538 = _0x457b6f.fmt || "hh:mm:ss";
        _0x4647db = "[" + this.time(_0x51a538) + "]" + _0x4647db;
      }
      if (_0x457b6f.notify) {
        this.notifyStr.push(_0x4647db);
      }
      if (_0x457b6f.console) {
        console.log(_0x4647db);
      }
    }
    get(_0x98efc1, _0x1d0a8c, _0x415d70 = "") {
      let _0x5e9f24 = _0x415d70;
      _0x98efc1?.["hasOwnProperty"](_0x1d0a8c) && (_0x5e9f24 = _0x98efc1[_0x1d0a8c]);
      return _0x5e9f24;
    }
    pop(_0x586859, _0x114095, _0x437077 = "") {
      let _0x4f4d63 = _0x437077;
      _0x586859?.["hasOwnProperty"](_0x114095) && (_0x4f4d63 = _0x586859[_0x114095], delete _0x586859[_0x114095]);
      return _0x4f4d63;
    }
    copy(_0x1aaa48) {
      return Object.assign({}, _0x1aaa48);
    }
    read_env(_0xe39ff5) {
      let _0x3017e7 = _0x1e2e54.map(_0x4bdc6c => process.env[_0x4bdc6c]);
      for (let _0x5e83bf of _0x3017e7.filter(_0x4cc7b0 => !!_0x4cc7b0)) {
        let _0x64cc65 = _0xe1ba5.filter(_0x336683 => _0x5e83bf.includes(_0x336683)),
          _0x1716f4 = _0x64cc65.length > 0 ? _0x64cc65[0] : _0xe1ba5[0];
        for (let _0x72d821 of _0x5e83bf.split(_0x1716f4).filter(_0x5f288c => !!_0x5f288c)) {
          this.userList.push(new _0xe39ff5(_0x72d821));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x3219d0 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x1e2e54.map(_0x489996 => "[" + _0x489996 + "]").join("或"), _0x3219d0);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x2894c2, _0x4ae0de, _0xed9320 = {}) {
      while (_0x4ae0de.idx < _0x499185.userList.length) {
        let _0x22ece4 = _0x499185.userList[_0x4ae0de.idx++];
        if (!_0x22ece4.valid) {
          continue;
        }
        await _0x22ece4[_0x2894c2](_0xed9320);
      }
    }
    async threadTask(_0x369437, _0x4a23c4) {
      let _0x5ddee8 = [];
      const _0x1ace81 = {
        idx: 0
      };
      while (_0x4a23c4--) {
        _0x5ddee8.push(this.threads(_0x369437, _0x1ace81));
      }
      await Promise.all(_0x5ddee8);
    }
    time(_0x15dc3e, _0x1c66f9 = null) {
      let _0x542624 = _0x1c66f9 ? new Date(_0x1c66f9) : new Date(),
        _0x16420e = {
          "M+": _0x542624.getMonth() + 1,
          "d+": _0x542624.getDate(),
          "h+": _0x542624.getHours(),
          "m+": _0x542624.getMinutes(),
          "s+": _0x542624.getSeconds(),
          "q+": Math.floor((_0x542624.getMonth() + 3) / 3),
          S: this.padStr(_0x542624.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x15dc3e) && (_0x15dc3e = _0x15dc3e.replace(RegExp.$1, (_0x542624.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4f2086 in _0x16420e) new RegExp("(" + _0x4f2086 + ")").test(_0x15dc3e) && (_0x15dc3e = _0x15dc3e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x16420e[_0x4f2086] : ("00" + _0x16420e[_0x4f2086]).substr(("" + _0x16420e[_0x4f2086]).length)));
      return _0x15dc3e;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x272b6b = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x272b6b.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x491c0d, _0x432012, _0x1488bb = {}) {
      let _0x27fffa = _0x1488bb.padding || "0",
        _0x1cf6f3 = _0x1488bb.mode || "l",
        _0x5d0b28 = String(_0x491c0d),
        _0x2a9ea5 = _0x432012 > _0x5d0b28.length ? _0x432012 - _0x5d0b28.length : 0,
        _0x31bc1b = "";
      for (let _0x2a6ce8 = 0; _0x2a6ce8 < _0x2a9ea5; _0x2a6ce8++) {
        _0x31bc1b += _0x27fffa;
      }
      _0x1cf6f3 == "r" ? _0x5d0b28 = _0x5d0b28 + _0x31bc1b : _0x5d0b28 = _0x31bc1b + _0x5d0b28;
      return _0x5d0b28;
    }
    json2str(_0x23d28c, _0x245768, _0x24c231 = false) {
      let _0x249d2f = [];
      for (let _0x35a051 of Object.keys(_0x23d28c).sort()) {
        let _0x1a06e9 = _0x23d28c[_0x35a051];
        if (_0x1a06e9 && _0x24c231) {
          _0x1a06e9 = encodeURIComponent(_0x1a06e9);
        }
        _0x249d2f.push(_0x35a051 + "=" + _0x1a06e9);
      }
      return _0x249d2f.join(_0x245768);
    }
    str2json(_0x2084f6, _0xcb6b45 = false) {
      let _0x58c6c2 = {};
      for (let _0x498f18 of _0x2084f6.split("&")) {
        if (!_0x498f18) {
          continue;
        }
        let _0x57802f = _0x498f18.indexOf("=");
        if (_0x57802f == -1) {
          continue;
        }
        let _0x1be6dd = _0x498f18.substr(0, _0x57802f),
          _0x57af51 = _0x498f18.substr(_0x57802f + 1);
        if (_0xcb6b45) {
          _0x57af51 = decodeURIComponent(_0x57af51);
        }
        _0x58c6c2[_0x1be6dd] = _0x57af51;
      }
      return _0x58c6c2;
    }
    randomPattern(_0x3d4274, _0x5439c7 = "abcdef0123456789") {
      let _0x165dd6 = "";
      for (let _0x272ccf of _0x3d4274) {
        if (_0x272ccf == "x") {
          _0x165dd6 += _0x5439c7.charAt(Math.floor(Math.random() * _0x5439c7.length));
        } else {
          _0x272ccf == "X" ? _0x165dd6 += _0x5439c7.charAt(Math.floor(Math.random() * _0x5439c7.length)).toUpperCase() : _0x165dd6 += _0x272ccf;
        }
      }
      return _0x165dd6;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0xe68c0e, _0x32adba = "abcdef0123456789") {
      let _0x1497da = "";
      for (let _0x4d3f0b = 0; _0x4d3f0b < _0xe68c0e; _0x4d3f0b++) {
        _0x1497da += _0x32adba.charAt(Math.floor(Math.random() * _0x32adba.length));
      }
      return _0x1497da;
    }
    randomList(_0x1cdbf1) {
      let _0x4d4faf = Math.floor(Math.random() * _0x1cdbf1.length);
      return _0x1cdbf1[_0x4d4faf];
    }
    wait(_0x11f2de) {
      return new Promise(_0x212593 => setTimeout(_0x212593, _0x11f2de));
    }
    async exitNow() {
      await this.showmsg();
      let _0x3a608b = Date.now(),
        _0x3cfd49 = (_0x3a608b - this.startTime) / 1000;
      this.log("");
      const _0x22a728 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x3cfd49 + "秒", _0x22a728);
      process.exit(0);
    }
    normalize_time(_0x5a850a, _0x1ba68e = {}) {
      let _0x15cb88 = _0x1ba68e.len || this.default_timestamp_len;
      _0x5a850a = _0x5a850a.toString();
      let _0x51e978 = _0x5a850a.length;
      while (_0x51e978 < _0x15cb88) {
        _0x5a850a += "0";
      }
      _0x51e978 > _0x15cb88 && (_0x5a850a = _0x5a850a.slice(0, 13));
      return parseInt(_0x5a850a);
    }
    async wait_until(_0x5b726c, _0x929677 = {}) {
      let _0x39073c = _0x929677.logger || this,
        _0x4cb719 = _0x929677.interval || default_wait_interval,
        _0x3bb27c = _0x929677.limit || default_wait_limit,
        _0x5a901d = _0x929677.ahead || default_wait_ahead;
      if (typeof _0x5b726c == "string" && _0x5b726c.includes(":")) {
        if (_0x5b726c.includes("-")) {
          _0x5b726c = new Date(_0x5b726c).getTime();
        } else {
          let _0x21e30d = this.time("yyyy-MM-dd ");
          _0x5b726c = new Date(_0x21e30d + _0x5b726c).getTime();
        }
      }
      let _0x5a8977 = this.normalize_time(_0x5b726c) - _0x5a901d,
        _0x385386 = this.time("hh:mm:ss.S", _0x5a8977),
        _0x78fff4 = Date.now();
      _0x78fff4 > _0x5a8977 && (_0x5a8977 += 86400000);
      let _0x2705af = _0x5a8977 - _0x78fff4;
      if (_0x2705af > _0x3bb27c) {
        const _0x6d9f07 = {
          time: true
        };
        _0x39073c.log("离目标时间[" + _0x385386 + "]大于" + _0x3bb27c / 1000 + "秒,不等待", _0x6d9f07);
      } else {
        const _0x46484a = {
          time: true
        };
        _0x39073c.log("离目标时间[" + _0x385386 + "]还有" + _0x2705af / 1000 + "秒,开始等待", _0x46484a);
        while (_0x2705af > 0) {
          let _0x13becc = Math.min(_0x2705af, _0x4cb719);
          await this.wait(_0x13becc);
          _0x78fff4 = Date.now();
          _0x2705af = _0x5a8977 - _0x78fff4;
        }
        const _0x5b5b6c = {
          time: true
        };
        _0x39073c.log("已完成等待", _0x5b5b6c);
      }
    }
    async wait_gap_interval(_0x4ab253, _0x812006) {
      let _0xfb378 = Date.now() - _0x4ab253;
      _0xfb378 < _0x812006 && (await this.wait(_0x812006 - _0xfb378));
    }
  }(_0x3d82f2);
}