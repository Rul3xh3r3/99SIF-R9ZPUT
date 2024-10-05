const axios = require("axios");
const os = require('os');
const crypto = require("crypto");
const https = require("https");
const readline = require("readline");
const {
  exec
} = require("child_process");
console.clear();
console.log("[1;33m----------------------------------------------");
console.log("[32mImportant Note");
console.log("[1;33m----------------------------------------------");
console.log("[32m╔══════════════════════╗");
console.log("[32m║╔════════════════════╗╚╗");
console.log("[32m║║██░░░░░░░░░░░░░░░░░░╚╗╚╗");
console.log("[32m║║██░░░HASSAN RAJPUT ░░░░ ─║║║");
console.log("[32m║║██░░░░░░░░░░░░░░░░░░╔╝╔╝");
console.log("[32m║╚════════════════════╝╔╝");
console.log("[32m╚══════════════════════╝");
console.log("[32m---------------------------------------------------");
console.log("[33m𝗧𝗢𝗢𝗟𝗦 𝗨𝗣𝗗𝗔𝗧𝗘 𝗙𝗜𝗥𝗦𝗧 𝗦𝗘𝗡𝗧 𝗙𝗥𝗜𝗘𝗡𝗗 𝗥𝗘𝗤𝗨𝗘𝗦𝗧 ");
console.log("[32m---------------------------------------------------");
console.log("[32m[+] 𝗔𝗨𝗧𝗛𝗢𝗥=>     HASSAN RAJPUT");
console.log("[33m[+] 𝗧𝗘𝗔𝗠=>      ONE MAN ARMY");
console.log("[32m[+] 𝗩𝗘𝗥𝗦𝗜𝗢𝗡=>  :0.1");
console.log("[33m--------------------------------------");
console.log("[1;33mMulti Ids Web To Web Convo");
console.log("[1;33mALL HATERS FUCK YOU BITCH");
console.log("[1;33mMonthly Subscription Price Rs :500");
console.log("[1;33mFR33 K4 T00L SAMJL3 JHATU");
console.log("[32mYour Key is not approved");
console.log("[1;33m----------------------------------------------");
console.log("[32mYou Have to Take Approval first");
console.log("[1;33m----------------------------------------------");
const uniqueKey = crypto.createHash("sha256").update(os.userInfo().uid.toString() + os.userInfo().username).digest("hex");
console.log("[32mYour Key:", uniqueKey);
console.log("[1;33m----------------------------------------------");
checkPermission(uniqueKey);
function getUniqueId() {
  return crypto.createHash("sha256").update(os.userInfo().uid.toString() + os.userInfo().username).digest("hex");
}
function checkPermission(_0x171d4c) {
  axios.get("https://github.com/HassanRajput0/APROVAL/blob/main/multy-web.txt").then(_0x4e04e9 => {
    let _0x14f86f = _0x4e04e9.data;
    let _0x498195 = _0x14f86f.split("\n").map(_0x26fc08 => _0x26fc08.trim()).filter(_0x19e335 => _0x19e335.includes(_0x171d4c));
    if (_0x498195.length === 0) {
      console.log("[31mSorry, you don't have permission to run this script.");
      sendApprovalRequest(_0x171d4c);
    } else {
      console.log("[32mPermission granted. You can proceed with the script.");
      console.log("\n[1;36m$$   $$  $$$$$$   $$$$$$   $$$$$$   $$$$$$  $$   $$ ");
      console.log("\n[1;36m$$ |  $$ |$$  __$$ $$  __$$ $$  __$$ $$  __$$ $$$  $$ |   ");
      console.log("\n[1;36m$$ |  $$ |$$ /  $$ |$$ /  __|$$ /  __|$$ /  $$ |$$$$ $$ | ");
      console.log("\n[1;36m$$$$$$$$ |$$$$$$$$ |$$$$$$  $$$$$$  $$$$$$$$ |$$ $$$$ | ");
      console.log("\n[1;36m$$  __$$ |$$  __$$ | ____$$  ____$$ $$  __$$ |$$ $$$$ | ");
      console.log("\n[1;36m$$ |  $$ |$$ |  $$ |$$   $$ |$$   $$ |$$ |  $$ |$$ |$$$ | ");
      console.log("\n[1;36m$$ |  $$ |$$ |  $$ |$$$$$$  |$$$$$$  |$$ |  $$ |$$ | $$ | ");
      console.log("\n[1;36m__|  __|__|  __| ______/  ______/ __|  __|__|  __| ");
      console.clear();
      console.log("[33m%s[0m", '');
      const _0x2fcea4 = require("prompt");
      const _0x489a5f = require('fs');
      const _0x34fde2 = require("fca-unofficial");
      const _0x37186f = ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36"];
      const _0x1c28ba = new https.Agent({
        'rejectUnauthorized': false
      });
      _0x2fcea4.start();
      _0x2fcea4.get(["IdNAME", "IdNAME2", "IdNAME3", "IdNAME4", "IdNAME5", "IdNAME6", "IdNAME7", "IdNAME8"], function (_0x4a1cf1, _0x3f4449) {
        if (_0x4a1cf1) {
          return _0x461ff0(_0x4a1cf1);
        }
        _0xde74c8('', _0x3f4449);
      });
      function _0xde74c8(_0x35b66b, _0x10a904) {
        let _0x101485 = [JSON.parse(_0x489a5f.readFileSync('' + _0x10a904.IdNAME, "utf8")), JSON.parse(_0x489a5f.readFileSync('' + _0x10a904.IdNAME2 || '' + _0x10a904.IdNAME, "utf8")), JSON.parse(_0x489a5f.readFileSync('' + _0x10a904.IdNAME3 || '' + _0x10a904.IdNAME, "utf8")), JSON.parse(_0x489a5f.readFileSync('' + _0x10a904.IdNAME4 || '' + _0x10a904.IdNAME, "utf8")), JSON.parse(_0x489a5f.readFileSync('' + _0x10a904.IdNAME5 || '' + _0x10a904.IdNAME, "utf8")), JSON.parse(_0x489a5f.readFileSync('' + _0x10a904.IdNAME6 || '' + _0x10a904.IdNAME, "utf8")), JSON.parse(_0x489a5f.readFileSync('' + _0x10a904.IdNAME7 || '' + _0x10a904.IdNAME, "utf8")), JSON.parse(_0x489a5f.readFileSync('' + _0x10a904.IdNAME8 || '' + _0x10a904.IdNAME, "utf8"))];
        let _0x1d6a11 = [];
        _0x101485.forEach((_0x133841, _0x112bc8) => {
          !function _0x26c0d4(_0x806d61, _0x398477) {
            _0x34fde2({
              'appState': _0x806d61,
              'userAgent': _0x37186f[_0x398477],
              'forceLogin': true,
              'httpOptions': {
                'agent': _0x1c28ba
              }
            }, (_0x394337, _0x2ffc54) => {
              if (_0x394337) {
                console.log("Error logging in with account " + (_0x398477 + 1) + ", retrying...");
                _0x26c0d4(_0x806d61, _0x398477);
              } else {
                _0x1d6a11[_0x398477] = _0x2ffc54;
              }
            });
          }(_0x133841, _0x112bc8);
        });
        let _0x453d53 = 0;
        _0x2fcea4.get(["Select20targetIDs"], function (_0x3fd4cc, _0x2d93e3) {
          if (_0x3fd4cc) {
            return _0x461ff0(_0x3fd4cc);
          }
          switch (_0x2d93e3.Select20targetIDs) {
            case '1':
              _0x2fcea4.get(["targetID", "short", "file", "timer"], function (_0x467110, _0x493c08) {
                if (_0x467110) {
                  return _0x461ff0(_0x467110);
                }
                let _0x53bca7 = _0x489a5f.readFileSync(_0x493c08.file, "utf8").split("\n").filter(Boolean);
                let _0xb93ae7 = 0;
                setInterval(() => {
                  let _0x1096f0 = _0x493c08.short + _0x53bca7[_0xb93ae7];
                  _0x1d6a11[_0x453d53].sendMessage(_0x1096f0, _0x493c08.targetID, () => {});
                  if (++_0xb93ae7 >= _0x53bca7.length) {
                    _0xb93ae7 = 0;
                  }
                  if (++_0x453d53 === _0x1d6a11.length) {
                    _0x453d53 = 0;
                  }
                  if (++_0x453d53 === _0x1d6a11.length) {
                    _0x453d53 = 0;
                  }
                }, _0x493c08.timer + "000");
              });
              break;
            case '2':
              _0x2fcea4.get(["targetID", "short", "file1", "targetID2", "short2", "file2", "timer"], function (_0xaff943, _0x5963cd) {
                if (_0xaff943) {
                  return _0x461ff0(_0xaff943);
                }
                let _0x32600c = _0x489a5f.readFileSync(_0x5963cd.file1, "utf8").split("\n").filter(Boolean);
                let _0x568f33 = _0x489a5f.readFileSync(_0x5963cd.file2, "utf8").split("\n").filter(Boolean);
                let _0x391ccd = 0;
                let _0x10a6a1 = 0;
                setInterval(() => {
                  let _0xa97b05 = _0x5963cd.short + _0x32600c[_0x391ccd];
                  let _0x9c6ec5 = _0x5963cd.short2 + _0x568f33[_0x10a6a1];
                  _0x1d6a11[_0x453d53].sendMessage(_0xa97b05, _0x5963cd.targetID, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x9c6ec5, _0x5963cd.targetID2, () => {});
                  _0x391ccd++;
                  _0x10a6a1++;
                  if (_0x391ccd >= _0x32600c.length) {
                    _0x391ccd = 0;
                  }
                  if (_0x10a6a1 >= _0x568f33.length) {
                    _0x10a6a1 = 0;
                  }
                  if (++_0x453d53 === _0x1d6a11.length) {
                    _0x453d53 = 0;
                  }
                }, _0x5963cd.timer + "000");
              });
              break;
            case '3':
              _0x2fcea4.get(["targetID", "short", "file1", "targetID2", "short2", "file2", "targetID3", "short3", "file3", "timer"], function (_0x50797c, _0x5a5d74) {
                if (_0x50797c) {
                  return _0x461ff0(_0x50797c);
                }
                let _0x3e637f = _0x489a5f.readFileSync(_0x5a5d74.file1, "utf8").split("\n").filter(Boolean);
                let _0x13e8e9 = _0x489a5f.readFileSync(_0x5a5d74.file2, "utf8").split("\n").filter(Boolean);
                let _0x2d9f14 = _0x489a5f.readFileSync(_0x5a5d74.file3, "utf8").split("\n").filter(Boolean);
                let _0x313518 = 0;
                let _0x490d09 = 0;
                let _0x4ebb3e = 0;
                setInterval(() => {
                  let _0x590868 = _0x5a5d74.short + _0x3e637f[_0x313518];
                  let _0x186802 = _0x5a5d74.short2 + _0x13e8e9[_0x490d09];
                  let _0x297462 = _0x5a5d74.short3 + _0x2d9f14[_0x4ebb3e];
                  _0x1d6a11[_0x453d53].sendMessage(_0x590868, _0x5a5d74.targetID, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x186802, _0x5a5d74.targetID2, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x297462, _0x5a5d74.targetID3, () => {});
                  _0x313518++;
                  _0x490d09++;
                  _0x4ebb3e++;
                  if (_0x313518 >= _0x3e637f.length) {
                    _0x313518 = 0;
                  }
                  if (_0x490d09 >= _0x13e8e9.length) {
                    _0x490d09 = 0;
                  }
                  if (_0x4ebb3e >= _0x2d9f14.length) {
                    _0x4ebb3e = 0;
                  }
                  if (++_0x453d53 === _0x1d6a11.length) {
                    _0x453d53 = 0;
                  }
                }, _0x5a5d74.timer + "000");
              });
              break;
            case '4':
              _0x2fcea4.get(["targetID", "short", "file1", "targetID2", "short2", "file2", "targetID3", "short3", "file3", "targetID4", "short4", "file4", "timer"], function (_0xa2e792, _0x227196) {
                if (_0xa2e792) {
                  return _0x461ff0(_0xa2e792);
                }
                let _0x3b652f = _0x489a5f.readFileSync(_0x227196.file1, "utf8").split("\n").filter(Boolean);
                let _0x491c64 = _0x489a5f.readFileSync(_0x227196.file2, "utf8").split("\n").filter(Boolean);
                let _0x16970f = _0x489a5f.readFileSync(_0x227196.file3, "utf8").split("\n").filter(Boolean);
                let _0x449e10 = _0x489a5f.readFileSync(_0x227196.file4, "utf8").split("\n").filter(Boolean);
                let _0x2918a9 = 0;
                let _0x5aff0d = 0;
                let _0x53c683 = 0;
                let _0x280198 = 0;
                setInterval(() => {
                  let _0x1c545e = _0x227196.short + _0x3b652f[_0x2918a9];
                  let _0x5b0d28 = _0x227196.short2 + _0x491c64[_0x5aff0d];
                  let _0x5de42b = _0x227196.short3 + _0x16970f[_0x53c683];
                  let _0x3d37a1 = _0x227196.short4 + _0x449e10[_0x280198];
                  _0x1d6a11[_0x453d53].sendMessage(_0x1c545e, _0x227196.targetID, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x5b0d28, _0x227196.targetID2, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x5de42b, _0x227196.targetID3, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x3d37a1, _0x227196.targetID4, () => {});
                  _0x2918a9++;
                  _0x5aff0d++;
                  _0x53c683++;
                  _0x280198++;
                  if (_0x2918a9 >= _0x3b652f.length) {
                    _0x2918a9 = 0;
                  }
                  if (_0x5aff0d >= _0x491c64.length) {
                    _0x5aff0d = 0;
                  }
                  if (_0x53c683 >= _0x16970f.length) {
                    _0x53c683 = 0;
                  }
                  if (_0x280198 >= _0x449e10.length) {
                    _0x280198 = 0;
                  }
                  if (++_0x453d53 === _0x1d6a11.length) {
                    _0x453d53 = 0;
                  }
                }, _0x227196.timer + "000");
              });
              break;
            case '5':
              _0x2fcea4.get(["targetID", "short", "file1", "targetID2", "short2", "file2", "targetID3", "short3", "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "timer"], function (_0x2dc1b8, _0x512bb7) {
                if (_0x2dc1b8) {
                  return _0x461ff0(_0x2dc1b8);
                }
                let _0x88900c = _0x489a5f.readFileSync(_0x512bb7.file1, "utf8").split("\n").filter(Boolean);
                let _0x7e21ce = _0x489a5f.readFileSync(_0x512bb7.file2, "utf8").split("\n").filter(Boolean);
                let _0x130c19 = _0x489a5f.readFileSync(_0x512bb7.file3, "utf8").split("\n").filter(Boolean);
                let _0x4e29c9 = _0x489a5f.readFileSync(_0x512bb7.file4, "utf8").split("\n").filter(Boolean);
                let _0x1b8c86 = _0x489a5f.readFileSync(_0x512bb7.file5, "utf8").split("\n").filter(Boolean);
                let _0xd18c18 = 0;
                let _0x56d049 = 0;
                let _0x225565 = 0;
                let _0x552f2b = 0;
                let _0x59a4dc = 0;
                setInterval(() => {
                  let _0x10458f = _0x512bb7.short + _0x88900c[_0xd18c18];
                  let _0x903824 = _0x512bb7.short2 + _0x7e21ce[_0x56d049];
                  let _0x55657a = _0x512bb7.short3 + _0x130c19[_0x225565];
                  let _0xc89c64 = _0x512bb7.short4 + _0x4e29c9[_0x552f2b];
                  let _0x7f5fde = _0x512bb7.short5 + _0x1b8c86[_0x59a4dc];
                  _0x1d6a11[_0x453d53].sendMessage(_0x10458f, _0x512bb7.targetID, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x903824, _0x512bb7.targetID2, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x55657a, _0x512bb7.targetID3, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0xc89c64, _0x512bb7.targetID4, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x7f5fde, _0x512bb7.targetID5, () => {});
                  _0xd18c18++;
                  _0x56d049++;
                  _0x225565++;
                  _0x552f2b++;
                  _0x59a4dc++;
                  if (_0xd18c18 >= _0x88900c.length) {
                    _0xd18c18 = 0;
                  }
                  if (_0x56d049 >= _0x7e21ce.length) {
                    _0x56d049 = 0;
                  }
                  if (_0x225565 >= _0x130c19.length) {
                    _0x225565 = 0;
                  }
                  if (_0x552f2b >= _0x4e29c9.length) {
                    _0x552f2b = 0;
                  }
                  if (_0x59a4dc >= _0x1b8c86.length) {
                    _0x59a4dc = 0;
                  }
                  if (++_0x453d53 === _0x1d6a11.length) {
                    _0x453d53 = 0;
                  }
                }, _0x512bb7.timer + "000");
              });
              break;
            case '6':
              _0x2fcea4.get(["targetID", "short", "file1", "targetID2", "short2", "file2", "targetID3", "short3", "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", "file6", "timer"], function (_0x307f21, _0x1db633) {
                if (_0x307f21) {
                  return _0x461ff0(_0x307f21);
                }
                let _0x127509 = _0x489a5f.readFileSync(_0x1db633.file1, "utf8").split("\n").filter(Boolean);
                let _0x3d9897 = _0x489a5f.readFileSync(_0x1db633.file2, "utf8").split("\n").filter(Boolean);
                let _0x4fc188 = _0x489a5f.readFileSync(_0x1db633.file3, "utf8").split("\n").filter(Boolean);
                let _0x2a20b2 = _0x489a5f.readFileSync(_0x1db633.file4, "utf8").split("\n").filter(Boolean);
                let _0x42ab4b = _0x489a5f.readFileSync(_0x1db633.file5, "utf8").split("\n").filter(Boolean);
                let _0xf8960c = _0x489a5f.readFileSync(_0x1db633.file6, "utf8").split("\n").filter(Boolean);
                let _0x5b0e0f = 0;
                let _0x1faf1d = 0;
                let _0x2c8cae = 0;
                let _0x4b9748 = 0;
                let _0x3b5690 = 0;
                let _0x2edce = 0;
                setInterval(() => {
                  let _0x3e6633 = _0x1db633.short + _0x127509[_0x5b0e0f];
                  let _0x14808b = _0x1db633.short2 + _0x3d9897[_0x1faf1d];
                  let _0x194f0b = _0x1db633.short3 + _0x4fc188[_0x2c8cae];
                  let _0x3bfbae = _0x1db633.short4 + _0x2a20b2[_0x4b9748];
                  let _0x45e361 = _0x1db633.short5 + _0x42ab4b[_0x3b5690];
                  let _0x342996 = _0x1db633.short6 + _0xf8960c[_0x2edce];
                  _0x1d6a11[_0x453d53].sendMessage(_0x3e6633, _0x1db633.targetID, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x14808b, _0x1db633.targetID2, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x194f0b, _0x1db633.targetID3, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x3bfbae, _0x1db633.targetID4, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x45e361, _0x1db633.targetID5, () => {});
                  _0x1d6a11[_0x453d53].sendMessage(_0x342996, _0x1db633.targetID6, () => {});
                  _0x5b0e0f++;
                  _0x1faf1d++;
                  _0x2c8cae++;
                  _0x4b9748++;
                  _0x3b5690++;
                  _0x2edce++;
                  if (_0x5b0e0f >= _0x127509.length) {
                    _0x5b0e0f = 0;
                  }
                  if (_0x1faf1d >= _0x3d9897.length) {
                    _0x1faf1d = 0;
                  }
                  if (_0x2c8cae >= _0x4fc188.length) {
                    _0x2c8cae = 0;
                  }
                  if (_0x4b9748 >= _0x2a20b2.length) {
                    _0x4b9748 = 0;
                  }
                  if (_0x3b5690 >= _0x42ab4b.length) {
                    _0x3b5690 = 0;
                  }
                  if (_0x2edce >= _0xf8960c.length) {
                    _0x2edce = 0;
                  }
                  if (++_0x453d53 === _0x1d6a11.length) {
                    _0x453d53 = 0;
                  }
                }, _0x1db633.timer + "000");
              });
              break;
            case '7':
              _0x2fcea4.get(["targetID", "short", "file1", "targetID2", "short2", "file2", "targetID3", "short3", "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", "file6", "targetID7", "short7", "file7", "timer"], function (_0x24b6b2, _0x44b441) {
                if (_0x24b6b2) {
                  return _0x461ff0(_0x24b6b2);
                }
                let _0x23388c = _0x489a5f.readFileSync(_0x44b441.file1, "utf8").split("\n").filter(Boolean);
                let _0x291edd = _0x489a5f.readFileSync(_0x44b441.file2, "utf8").split("\n").filter(Boolean);
                let _0x190969 = _0x489a5f.readFileSync(_0x44b441.file3, "utf8").split("\n").filter(Boolean);
                let _0x30d9cd = _0x489a5f.readFileSync(_0x44b441.file4, "utf8").split("\n").filter(Boolean);
                let _0x5d9a30 = _0x489a5f.readFileSync(_0x44b441.file5, "utf8").split("\n").filter(Boolean);
                let _0x26fe67 = _0x489a5f.readFileSync(_0x44b441.file6, "utf8").split("\n").filter(Boolean);
                let _0x115936 = _0x489a5f.readFileSync(_0x44b441.file7, "utf8").split("\n").filter(Boolean);
                let _0x4bf3a1 = 0;
                let _0x2b0fed = 0;
                let _0x459cf8 = 0;
                let _0x567161 = 0;
                let _0x2307d1 = 0;
                let _0x405a49 = 0;
                let _0x4970b8 = 0
