//Sun Sep 22 2024 04:40:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4c47ae = new _0x5c6f66("杜蕾斯会员中心");
let _0xa263a7 = "dlshyzx",
  _0x267a41 = ["\n", "&"],
  _0xa6955c = (_0x4c47ae.isNode() ? process.env[_0xa263a7] : _0x4c47ae.getdata(_0xa263a7)) || "",
  _0x335cac = [],
  _0x17e9ad = 0;
class _0xd4f793 {
  constructor(_0x390aca) {
    this.index = ++_0x17e9ad;
    this.valid = false;
    this.activedAuthToken = _0x390aca;
    this.apiHost = "https://vip.ixiliu.cn/mp";
  }
  async ["taskApi"](_0x45eb3c, _0xb0d8d4, _0x393064, _0x55d961) {
    let _0x2c6758 = null;
    try {
      let _0x189088 = {
        "url": _0x393064,
        "headers": {
          "Accept": "*/*",
          "Accept-Language": "zh-CN,zh",
          "Connection": "keep-alive",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site",
          "platform": "MP-WEIXIN",
          "Content-Type": "application/json;charset=utf-8",
          "sid": 10006,
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2f) NetType/WIFI Language/zh_CN",
          "Referer": "https://servicewechat.com/wxe11089c85860ec02/25/page-frame.html"
        },
        "timeout": 60000,
        "rejectUnauthorized": false
      };
      this.activedAuthToken && (_0x189088.headers["Access-Token"] = this.activedAuthToken);
      _0x55d961 && (_0x189088.body = _0x55d961);
      await _0x19171f(_0xb0d8d4, _0x189088).then(async _0x168a08 => {
        if (_0x168a08.resp?.["statusCode"] == 200) {
          if (_0x168a08.resp?.["body"]) _0x2c6758 = JSON.parse(_0x168a08.resp.body);else {}
        } else {
          console.log("账号[" + this.index + "]调用" + _0xb0d8d4 + "[" + _0x45eb3c + "]出错，返回状态码[" + (_0x168a08.resp?.["statusCode"] || "") + "]", "返回结果：", _0x168a08.resp?.["body"]);
        }
      });
    } catch (_0x53817a) {
      console.log(_0x53817a);
    } finally {
      return Promise.resolve(_0x2c6758);
    }
  }
  async ["GetUserInfo"]() {
    try {
      let _0x2a7e65 = "GetUserInfo",
        _0x2c3fa0 = "get",
        _0x329324 = this.apiHost + "/user/info",
        _0x22712b = "";
      await this.taskApi(_0x2a7e65, _0x2c3fa0, _0x329324, _0x22712b).then(async _0x13d880 => {
        _0x13d880?.["status"] === 200 ? (this.valid = true, console.log("账号[" + this.index + "] 查询积分成功，可用积分：" + _0x13d880?.["data"]?.["userInfo"]?.["points"] + "，总积分：" + _0x13d880?.["data"]?.["userInfo"]?.["points_total"])) : (console.log("账号[" + this.index + "] 查询积分失败：" + (_0x13d880?.["message"] || JSON.stringify(_0x13d880))), this.valid = false);
      });
    } catch (_0xd92dc2) {
      console.log(_0xd92dc2);
    }
  }
  async ["Sign"]() {
    try {
      let _0x4466c0 = "Sign",
        _0x1eb574 = "get",
        _0x3de5e4 = this.apiHost + "/sign/applyV2",
        _0x305dfa = "";
      return await this.taskApi(_0x4466c0, _0x1eb574, _0x3de5e4, _0x305dfa).then(async _0xd8c073 => {
        if (_0xd8c073?.["status"] === 200) return console.log("账号[" + this.index + "] 签到结果： " + _0xd8c073?.["message"]), true;else _0x4c47ae.logAndNotify("账号[" + this.index + "] - 签到失败：" + (_0xd8c073?.["message"] || JSON.stringify(_0xd8c073)));
      });
    } catch (_0x49c922) {
      console.log(_0x49c922);
    }
  }
  async ["Share"]() {
    try {
      let _0x1d42ce = "Share",
        _0x1cf762 = "get",
        _0x2c5e61 = this.apiHost + "/cup.home/share",
        _0x45206f = "";
      return await this.taskApi(_0x1d42ce, _0x1cf762, _0x2c5e61, _0x45206f).then(async _0x4793e3 => {
        if (_0x4793e3?.["status"] === 200) return console.log("账号[" + this.index + "] 分享结果： " + (_0x4793e3?.["data"]?.["share"]?.["message"] || _0x4793e3?.["message"])), true;else _0x4c47ae.logAndNotify("账号[" + this.index + "] - 分享失败：" + (_0x4793e3?.["message"] || JSON.stringify(_0x4793e3)));
      });
    } catch (_0x4e6fa7) {
      console.log(_0x4e6fa7);
    }
  }
  async ["doTask"]() {
    try {
      console.log("\n============= 账号[" + this.index + "] 开始执行 签到任务=============");
      await this.Sign();
      await _0x4c47ae.wait(Math.random() * 200);
    } catch (_0x2f2471) {
      console.log(_0x2f2471);
    }
  }
}
async function _0x4aa738() {
  console.log("============================== 公告 =========================\n\n定制、偷撸、投稿 联系 QQ：1047827439\ntg反馈群： https://t.me/huan_sheng \n脚本更新地址：https://github.com/Huansheng1/my-qinglong-js\n\n=============================================================");
  await _0x4c47ae.wait(100);
}
!(async () => {
  await _0x4aa738();
  if (typeof $request !== "undefined") {
    await _0x4b685f();
  } else {
    if (!(await _0x5dfd06())) return;
    console.log("\n================ 开始执行 ================");
    for (let _0x2be976 of _0x335cac) {
      console.log("----------- 执行 第 [" + _0x2be976.index + "] 个账号 -----------");
      await _0x2be976.GetUserInfo();
    }
    let _0xe85c48 = _0x335cac.filter(_0x4b417c => _0x4b417c.valid);
    if (_0xe85c48.length > 0) {
      console.log("\n================ 任务队列构建完毕 ================");
      for (let _0x4b1256 of _0xe85c48) {
        console.log("----------- 账号[" + _0x4b1256.index + "] -----------");
        await _0x4b1256.doTask();
      }
    } else console.log("\n====幻生提示：无可用账号，请检查配置============ 任务结束 ================");
    await _0x4c47ae.showmsg();
  }
})().catch(_0x39dcb0 => console.log(_0x39dcb0)).finally(() => _0x4c47ae.done());
async function _0x4b685f() {}
async function _0x5dfd06() {
  if (_0xa6955c) {
    let _0x16ea01 = _0x267a41[0];
    for (let _0x18f5da of _0x267a41) {
      if (_0xa6955c.indexOf(_0x18f5da) > -1) {
        _0x16ea01 = _0x18f5da;
        break;
      }
    }
    for (let _0x571619 of _0xa6955c.split(_0x16ea01)) {
      if (_0x571619) _0x335cac.push(new _0xd4f793(_0x571619));
    }
    userCount = _0x335cac.length;
  } else {
    console.log("未找到 配置信息，请检查是否配置 变量：", _0xa263a7);
    return;
  }
  return console.log("共找到" + userCount + "个账号"), true;
}
async function _0x19171f(_0x21eb8a, _0x48a7c2) {
  return httpErr = null, httpReq = null, httpResp = null, new Promise(_0x35eab8 => {
    _0x4c47ae.send(_0x21eb8a, _0x48a7c2, async (_0x4b50a2, _0x27c7c1, _0x40ab4d) => {
      httpErr = _0x4b50a2;
      httpReq = _0x27c7c1;
      httpResp = _0x40ab4d;
      _0x35eab8({
        "err": _0x4b50a2,
        "req": _0x27c7c1,
        "resp": _0x40ab4d
      });
    });
  });
}
function _0x5c6f66(_0x159ae7, _0x4d3572) {
  return "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0), new class {
    constructor(_0x5770da, _0xb3a572) {
      this.name = _0x5770da;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xb3a572);
      console.log(this.name + " 开始运行：\n");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0x3d0ac9) {
      let _0x338c8f = this.getval(_0x3d0ac9);
      if (/^@/.test(_0x3d0ac9)) {
        const [, _0x17a6e9, _0x2474e6] = /^@(.*?)\.(.*?)$/.exec(_0x3d0ac9),
          _0x157012 = _0x17a6e9 ? this.getval(_0x17a6e9) : "";
        if (_0x157012) try {
          const _0x1e7557 = JSON.parse(_0x157012);
          _0x338c8f = _0x1e7557 ? this.lodash_get(_0x1e7557, _0x2474e6, "") : _0x338c8f;
        } catch (_0xd05bfe) {
          _0x338c8f = "";
        }
      }
      return _0x338c8f;
    }
    ["setdata"](_0x2ec495, _0x54558e) {
      let _0x5592d3 = false;
      if (/^@/.test(_0x54558e)) {
        const [, _0x286060, _0x4490f9] = /^@(.*?)\.(.*?)$/.exec(_0x54558e),
          _0x56023d = this.getval(_0x286060),
          _0x4eea7c = _0x286060 ? "null" === _0x56023d ? null : _0x56023d || "{}" : "{}";
        try {
          const _0x4193c5 = JSON.parse(_0x4eea7c);
          this.lodash_set(_0x4193c5, _0x4490f9, _0x2ec495);
          _0x5592d3 = this.setval(JSON.stringify(_0x4193c5), _0x286060);
        } catch (_0x162efb) {
          const _0x165fc0 = {};
          this.lodash_set(_0x165fc0, _0x4490f9, _0x2ec495);
          _0x5592d3 = this.setval(JSON.stringify(_0x165fc0), _0x286060);
        }
      } else _0x5592d3 = this.setval(_0x2ec495, _0x54558e);
      return _0x5592d3;
    }
    ["getval"](_0x4aff8c) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4aff8c) : this.isQuanX() ? $prefs.valueForKey(_0x4aff8c) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4aff8c]) : this.data && this.data[_0x4aff8c] || null;
    }
    ["setval"](_0x4704b2, _0x4d7e74) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4704b2, _0x4d7e74) : this.isQuanX() ? $prefs.setValueForKey(_0x4704b2, _0x4d7e74) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4d7e74] = _0x4704b2, this.writedata(), !0) : this.data && this.data[_0x4d7e74] || null;
    }
    ["send"](_0x5231b8, _0x48d398, _0x2d0693 = () => {}) {
      if (_0x5231b8 != "get" && _0x5231b8 != "post" && _0x5231b8 != "put" && _0x5231b8 != "delete") {
        console.log("无效的http方法：" + _0x5231b8);
        return;
      }
      if (_0x5231b8 == "get" && _0x48d398.headers) delete _0x48d398.headers["Content-Type"], delete _0x48d398.headers["Content-Length"];else {
        if (_0x48d398.body && _0x48d398.headers) {
          if (!_0x48d398.headers["Content-Type"]) _0x48d398.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
      }
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x48d398.headers = _0x48d398.headers || {}, Object.assign(_0x48d398.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        let _0x34dd6e = {
          "method": _0x5231b8,
          "url": _0x48d398.url,
          "headers": _0x48d398.headers,
          "timeout": _0x48d398.timeout,
          "data": _0x48d398.body
        };
        if (_0x5231b8 == "get") delete _0x34dd6e.data;
        $axios(_0x34dd6e).then(_0x134743 => {
          const {
            status: _0xfdd309,
            request: _0x16bb42,
            headers: _0x354258,
            data: _0x5f0d34
          } = _0x134743;
          _0x2d0693(null, _0x16bb42, {
            "statusCode": _0xfdd309,
            "headers": _0x354258,
            "body": _0x5f0d34
          });
        }).catch(_0x351126 => console.log(_0x351126));
      } else {
        if (this.isQuanX()) _0x48d398.method = _0x5231b8.toUpperCase(), this.isNeedRewrite && (_0x48d398.opts = _0x48d398.opts || {}, Object.assign(_0x48d398.opts, {
          "hints": !1
        })), $task.fetch(_0x48d398).then(_0xedd4e2 => {
          const {
            statusCode: _0xf2fd7b,
            request: _0x57fdb2,
            headers: _0x99fa01,
            body: _0x2f67c5
          } = _0xedd4e2;
          _0x2d0693(null, _0x57fdb2, {
            "statusCode": _0xf2fd7b,
            "headers": _0x99fa01,
            "body": _0x2f67c5
          });
        }, _0x5f5bae => _0x2d0693(_0x5f5bae));else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
              url: _0xe0dd87,
              ..._0x5caa03
            } = _0x48d398;
            this.instance = this.got.extend({
              "followRedirect": false
            });
            this.instance[_0x5231b8](_0xe0dd87, _0x5caa03).then(_0x888891 => {
              const {
                statusCode: _0x578a68,
                request: _0x4f0f52,
                headers: _0x2e47b0,
                body: _0x70cfdf
              } = _0x888891;
              _0x2d0693(null, _0x4f0f52, {
                "statusCode": _0x578a68,
                "headers": _0x2e47b0,
                "body": _0x70cfdf
              });
            }, _0x3d8ae1 => {
              const {
                message: _0x5eb408,
                request: _0x2294a4,
                response: _0x374858
              } = _0x3d8ae1;
              _0x2d0693(_0x5eb408, _0x2294a4, _0x374858);
            });
          }
        }
      }
    }
    ["time"](_0x169e39, _0x552dad = null) {
      let _0x130265 = _0x552dad ? new Date(_0x552dad) : new Date(),
        _0x5b57ab = {
          "M+": _0x130265.getMonth() + 1,
          "d+": _0x130265.getDate(),
          "h+": _0x130265.getHours(),
          "m+": _0x130265.getMinutes(),
          "s+": _0x130265.getSeconds(),
          "q+": Math.floor((_0x130265.getMonth() + 3) / 3),
          "S": _0x130265.getMilliseconds()
        };
      /(y+)/.test(_0x169e39) && (_0x169e39 = _0x169e39.replace(RegExp.$1, (_0x130265.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x342b38 in _0x5b57ab) new RegExp("(" + _0x342b38 + ")").test(_0x169e39) && (_0x169e39 = _0x169e39.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5b57ab[_0x342b38] : ("00" + _0x5b57ab[_0x342b38]).substr(("" + _0x5b57ab[_0x342b38]).length)));
      return _0x169e39;
    }
    async ["showmsg"]() {
      if (!this.notifyStr) return;
      let _0x521504 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x4c47ae.isNode()) {
        var _0x227604 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x227604.sendNotify(this.name, _0x521504);
      } else this.msg(_0x521504);
    }
    ["logAndNotify"](_0x447b8a) {
      console.log(_0x447b8a);
      this.notifyStr += _0x447b8a;
      this.notifyStr += "\n";
    }
    ["logAndNotifyWithTime"](_0x5da75b) {
      let _0xd79785 = "[" + this.time("hh:mm:ss.S") + "]" + _0x5da75b;
      console.log(_0xd79785);
      this.notifyStr += _0xd79785;
      this.notifyStr += "\n";
    }
    ["logWithTime"](_0x10bb20) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x10bb20);
    }
    ["msg"](_0x2bd740 = t, _0x2692dc = "", _0x1c0c1a = "", _0x5b775a) {
      const _0x124903 = _0x4ff3dc => {
        if (!_0x4ff3dc) return _0x4ff3dc;
        if ("string" == typeof _0x4ff3dc) return this.isLoon() ? _0x4ff3dc : this.isQuanX() ? {
          "open-url": _0x4ff3dc
        } : this.isSurge() ? {
          "url": _0x4ff3dc
        } : void 0;
        if ("object" == typeof _0x4ff3dc) {
          if (this.isLoon()) {
            let _0x4c0afe = _0x4ff3dc.openUrl || _0x4ff3dc.url || _0x4ff3dc["open-url"],
              _0x3eb1ce = _0x4ff3dc.mediaUrl || _0x4ff3dc["media-url"];
            return {
              "openUrl": _0x4c0afe,
              "mediaUrl": _0x3eb1ce
            };
          }
          if (this.isQuanX()) {
            let _0x17c895 = _0x4ff3dc["open-url"] || _0x4ff3dc.url || _0x4ff3dc.openUrl,
              _0x3f81e3 = _0x4ff3dc["media-url"] || _0x4ff3dc.mediaUrl;
            return {
              "open-url": _0x17c895,
              "media-url": _0x3f81e3
            };
          }
          if (this.isSurge()) {
            let _0x567068 = _0x4ff3dc.url || _0x4ff3dc.openUrl || _0x4ff3dc["open-url"];
            return {
              "url": _0x567068
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x2bd740, _0x2692dc, _0x1c0c1a, _0x124903(_0x5b775a)) : this.isQuanX() && $notify(_0x2bd740, _0x2692dc, _0x1c0c1a, _0x124903(_0x5b775a)));
      let _0xb5f51 = ["", "============== 系统通知 =============="];
      _0xb5f51.push(_0x2bd740);
      _0x2692dc && _0xb5f51.push(_0x2692dc);
      _0x1c0c1a && _0xb5f51.push(_0x1c0c1a);
      console.log(_0xb5f51.join("\n"));
    }
    ["getMin"](_0x45a9db, _0x2aef8d) {
      return _0x45a9db < _0x2aef8d ? _0x45a9db : _0x2aef8d;
    }
    ["getMax"](_0x5800c4, _0x475e40) {
      return _0x5800c4 < _0x475e40 ? _0x475e40 : _0x5800c4;
    }
    ["padStr"](_0x4b9a21, _0x257ee3, _0x408eef = "0") {
      let _0x199504 = String(_0x4b9a21),
        _0x226ae9 = _0x257ee3 > _0x199504.length ? _0x257ee3 - _0x199504.length : 0,
        _0x4a843c = "";
      for (let _0x237275 = 0; _0x237275 < _0x226ae9; _0x237275++) {
        _0x4a843c += _0x408eef;
      }
      return _0x4a843c += _0x199504, _0x4a843c;
    }
    ["json2str"](_0xe35199, _0x5ed313, _0xf268c8 = false) {
      let _0x18eedc = [];
      for (let _0x4086b of Object.keys(_0xe35199).sort()) {
        let _0x1e2f1b = _0xe35199[_0x4086b];
        if (_0x1e2f1b && _0xf268c8) _0x1e2f1b = encodeURIComponent(_0x1e2f1b);
        _0x18eedc.push(_0x4086b + "=" + _0x1e2f1b);
      }
      return _0x18eedc.join(_0x5ed313);
    }
    ["str2json"](_0x114617, _0x301004 = false) {
      let _0x476360 = {};
      for (let _0x402f2d of _0x114617.split("&")) {
        if (!_0x402f2d) continue;
        let _0x1d0cb7 = _0x402f2d.indexOf("=");
        if (_0x1d0cb7 == -1) continue;
        let _0xbaf66a = _0x402f2d.substr(0, _0x1d0cb7),
          _0x48ee95 = _0x402f2d.substr(_0x1d0cb7 + 1);
        if (_0x301004) _0x48ee95 = decodeURIComponent(_0x48ee95);
        _0x476360[_0xbaf66a] = _0x48ee95;
      }
      return _0x476360;
    }
    ["randomString"](_0x18a5b3, _0x295ad8 = "abcdef0123456789") {
      let _0x58adc9 = "";
      for (let _0x3bb96b = 0; _0x3bb96b < _0x18a5b3; _0x3bb96b++) {
        _0x58adc9 += _0x295ad8.charAt(Math.floor(Math.random() * _0x295ad8.length));
      }
      return _0x58adc9;
    }
    ["randomList"](_0x56c7d3) {
      let _0x16cc62 = Math.floor(Math.random() * _0x56c7d3.length);
      return _0x56c7d3[_0x16cc62];
    }
    ["wait"](_0x16b808) {
      return new Promise(_0x1696eb => setTimeout(_0x1696eb, _0x16b808));
    }
    ["done"](_0x430bb0 = {}) {
      const _0x5df615 = new Date().getTime(),
        _0x33b1a3 = (_0x5df615 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x33b1a3 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(_0x430bb0);
    }
  }(_0x159ae7, _0x4d3572);
}