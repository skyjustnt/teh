
console.clear();
const gradient = require('gradient-string');
function ioxys() {
  console.clear();
  console.log(gradient.fruit(`
███████╗██╗  ██╗██╗   ██╗
██╔════╝██║ ██╔╝╚██╗ ██╔╝
███████╗█████╔╝  ╚████╔╝ 
╚════██║██╔═██╗   ╚██╔╝  
███████║██║  ██╗   ██║   
╚══════╝╚═╝  ╚═╝   ╚═╝   
                         

───────────────────╥──────────╥───────────────────────
        ╔══════════╩══════════╩══════════╗
        ║   * Created by Sky             ║
        ║   * Code Language (NodeJS)     ║
        ║   * UteGuard V1.1              ║
        ╨────────────────────────────────╨
`))
}
ioxys();

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
  o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var https = require('https')
var visit = 0;
var visits = 0;
var visitz = 0;

var getIP = require('external-ip')();
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function displayTime() {
  var str = "";

  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var seconds = currentTime.getSeconds()

  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  str += "[" + hours + ":" + minutes + ":" + seconds + " ";
  if (hours > 11) {
    str += "PM]"
  } else {
    str += "AM]"
  }
  return str;
}
const os = require("os");
const user = os.userInfo().username
var { PassThrough } = require("stream");
    const bl_connection_headers = "Keep-Alive" || "Proxy-Authenticate" || "Proxy-Authorization";
    const bl_user_agent = "CheckHost (https://check-host.net/)" || "HostCheck (https://host-check.net)";

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var blacklist = new Map();
    ['1.1.1.1'];
    process.env.BLACKLIST
    var fs = require("fs");
    const iptables = fs.readFileSync('./ipt.txt');
    var timeout = 1000;
    function add_address(address) {
        blacklist.set(address, Date.now() + 1000);
    }
    var setTitle = require('console-title');
    // Interval Title
    setInterval(() => {
        setTitle(`Protect || 20${Math.floor(Math.random() * 99)} Ute Guardian V1`);
    }, 2000)
    // Interval Title
    var prompt = require('prompt-sync')();
    var ip_address = prompt(gradient.fruit(`> Input ip address : `));
    console.log(gradient.fruit("══════════════════════════════════════"));
    var udp_port = prompt(gradient.fruit(`> Enter UDP Port : `));
    console.log(gradient.fruit("══════════════════════════════════════"));
    console.clear();
    console.log(gradient('red', 'blue', 'yellow')("         ╔════════════════════════════════════════════╗"));
    console.log(gradient('red', 'blue', 'yellow')("       ╔═╣ • GTPS / GROWTOPIA Logs                    ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║U║ • Detect Incoming Bad Network Logs         ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║G║ • NodeRateLimiter, RateLimiter & Limiter   ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║U║ • Anti Flood & Socket Ban                  ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║A║ • Reset By Peer System                     ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║R║ • IP Banned & IP Blocker                   ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║D║ • Anti Str3sser                            ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║I║ • Helmet Protection & Express              ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║A║ • Support Custom Item                      ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║N║ • Support Growtopia Version 3.99+          ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ╚═╣ • -                                        ║"));
    console.log(gradient('red', 'blue', 'yellow')("         ╚═══════╦═════════════════════════════╦══════╝"));
    console.log(gradient('red', 'blue', 'yellow')("         ╔═══════╩═════════════════════════════╩══════╗"));
    console.log(gradient('red', 'blue', 'yellow')("         ║            Copyright • Sky                 ║"));
    console.log(gradient('red', 'blue', 'yellow')("         ╚════════════════════════════════════════════╝"));

    // if (!ip_address) {
    //   ioxys();
    //   console.log(gradient.fruit(`> Invalid ip address, please try again ...`));
    //   setTimeout(function() {
    //     process.exit();
    //   },5000);
    // }
    // else if (!udp_port) {
    //   ioxys();
    //   console.log(gradient.fruit(`> Invalid udp port, please try again ...`));
    //   setTimeout(function() {
    //     process.exit();
    //   },5000);
    // }
    // else if (!mt) {
    //   ioxys();
    //   console.log(gradient.fruit(`> Invalid choices, please try again ...`))
    //   setTimeout(function() {
    //     process.exit();
    //   },5000);
    // }
    // else {
    //   ioxys();
    //   console.log(gradient.fruit(`> Oh no!, http can't started because fatal error ...`));
    //   setTimeout(function() {
    //     process.exit();
    //   },6000)
    // }

    console.clear()
    var http = __importStar(require("http"));
    var visit = 0;
    var log4js = require('log4js');
    log4js.configure({
        appenders: {
            multi: { type: 'multiFile', base: 'logs/', property: 'categoryName', extension: '.log' }
        },
        categories: {
            default: { appenders: ['multi'], level: 'debug' }
        }
    });
const ration = require('ration.js');
var express = require('express');
var app = express();
app.use(iptables)

/* Set Ration.js Options */
const rations = {
    maxRequestsPerTimeFrame: 600,
    timeFrameInSeconds: 30,
    removeRecordsAfter: (1000 * 60 * 5),
    dropConnections: false
};

/* Initialize Ration.js */
ration.setRations(rations);

/* Use Ration.js */
app.use(ration.startRations);

var ddosprotect = require("ddosprotect")
var fs = require("fs-extra");


app.use(function (req, res) {
    ddosprotect.antiddos(req, res, interval, maxrequests);
    // interval: interval of requests refreshing in miliseconds | maxrequests: max requests accepted into the time interval.
});

const key = `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDEbNA6c2jaA4Iz
v3ED6GxiWd8twOSECEdyCDWrv9z1/6NUnW3415phc8MCXFOuaaK/zrpmoCbX23VM
NI7edn2BfT7PCAOxFnBdcbDuGh7zaSNPV9odyFxU8eZYacbS5ksJte1IVh1xNrNF
Mq0Ydcn3Y3lRTOHHcQdXuot28YG6X5AyNCS4ubhfpsPcktKMyfmLF/4Bybdwt6P+
QS3VJuhZtVCz4/IQL3CmOGA2GHM+/+k7KaSHGcNxzhJYvaV7OWm19Pas4Hq9BRmU
Ly3i5n+74NnSaKuIcQLs4faAFd2CfRLXLGd+adGV5BNvOKeb/pcW026FVTLn4ZAQ
zorgW1oBAgMBAAECggEBAKtCBDsyLJUIwhjELZEusHD/0qpdp9/GKCSwK7tXSRvi
i1FXAW8Y7C1TdQ812HAVAiUh5TtdHwDNAvQyTu5/eOXRgVWYsz9PRSDz40N12s53
OKYQ/sdAzd/yGNe1QfjXeU06JWwQSRNQkfUfPfQ5nqHnRPsxgRkW30QKDVbjMix/
ZnhHihDYdLbWT5sa/zj+c1M/merFx0pgJrkSAYkf1tWbv0vzxd/Mfn7K9RnyLdMa
nplePO5rMQlKTBb2ANWCqjRTmQw82zqHhQZFmfC7oHYjrc9tOsOqt9ljN2TdKzXb
Z/Rt4CZ4udRxIYQ1/qf7H90T8sZw3bY1aulbV4/Y8xECgYEA4rTHw1/aKJucTFkE
IPyl1toYrabKD22tsCsxHQ4pCYldJyZvk6L7nwp6mzY1+gPKRY4kwUVSPEaHPSFp
PLUYovxmpe8cJuIPN+dzQdsatV06RBjt2wF+GgmcixOc9Q7335LzSOTelbLrc4XO
zSseyyj4jaGHBmEyQwAoomWv0VsCgYEA3c5c8JrmhpyDAoCEYO/d+UlZALRRWTHw
u5nkTxeX/YF/sRbypjOhQFzZsNWhYsngM+vT/T1DRjQh8guTUAJqijp4hHYzQqLW
fHMSHtyQV29jYbjbWDhb7ad9wmlQ0ZIU5lnKq6K7vpQWizUGIOo5/kAF7NUYCw3U
hIkjWavTJNMCgYEAzbAiEsRzxiYxcB/PnDI+MSpd+6f5angjf1Qg0nDXkNx9lRjN
YREd5NV4GjzcSkOIEQV/mY9QpnmDGFapCbhxaudAJstEKo8uKZWoQBcQK38zbzeD
DxJSnEMeMh0QalMzWDkW3Isy3HWiJIVB9WprHP7GTJJCVOp41MtfEsDZ/UMCgYBW
VI/QBjpbgmdrfeIIaNQYxvehUo2nDc0I96jpL+G0hcbRgoEHN2k3x+vi7ANYlAJz
swJbupCIrpnXv7Gino4hJwjpZagl84NQBOm0oVx865ne2zhkaes94McN+DfAmf8Q
eTps+3Xfg3wSypyMCx5vWzPzLi2hf8yLmWTs7ffMiQKBgQDiCss0uYBgqZakrcv2
QIgW+Txd6XfPi+fGBRLfOENmLmwoCR1/sIMKe6atXkG7eN32K6s37/8+vgGw8v+o
ebgRHCIMz8e4t+1Hf5kRwgB7mmsC/U/Af7Z7xS1blffH5VQhX8Nat+Mv+0y/S4Z7
yfTSpxIYBVBCMya4ZW5l51SdNg==
-----END PRIVATE KEY-----
`;
const cert = `-----BEGIN CERTIFICATE-----
MIIEITCCAwmgAwIBAgIUG/p5u5i8/DZiSNYiYzT9aCExfkMwDQYJKoZIhvcNAQEL
BQAwgZ4xCzAJBgNVBAYTAklEMRswGQYDVQQIDBJ3d3cuZ3Jvd3RvcGlhMS5jb20x
GzAZBgNVBAcMEnd3dy5ncm93dG9waWExLmNvbTEbMBkGA1UECgwSd3d3Lmdyb3d0
b3BpYTEuY29tMRswGQYDVQQLDBJ3d3cuZ3Jvd3RvcGlhMS5jb20xGzAZBgNVBAMM
End3dy5ncm93dG9waWExLmNvbTAgFw0yMjA3MDIxMTQ5MjhaGA8yNDMzMDMwOTEx
NDkyOFowgZ4xCzAJBgNVBAYTAklEMRswGQYDVQQIDBJ3d3cuZ3Jvd3RvcGlhMS5j
b20xGzAZBgNVBAcMEnd3dy5ncm93dG9waWExLmNvbTEbMBkGA1UECgwSd3d3Lmdy
b3d0b3BpYTEuY29tMRswGQYDVQQLDBJ3d3cuZ3Jvd3RvcGlhMS5jb20xGzAZBgNV
BAMMEnd3dy5ncm93dG9waWExLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC
AQoCggEBAMRs0DpzaNoDgjO/cQPobGJZ3y3A5IQIR3IINau/3PX/o1SdbfjXmmFz
wwJcU65por/OumagJtfbdUw0jt52fYF9Ps8IA7EWcF1xsO4aHvNpI09X2h3IXFTx
5lhpxtLmSwm17UhWHXE2s0UyrRh1yfdjeVFM4cdxB1e6i3bxgbpfkDI0JLi5uF+m
w9yS0ozJ+YsX/gHJt3C3o/5BLdUm6Fm1ULPj8hAvcKY4YDYYcz7/6TsppIcZw3HO
Eli9pXs5abX09qzger0FGZQvLeLmf7vg2dJoq4hxAuzh9oAV3YJ9EtcsZ35p0ZXk
E284p5v+lxbTboVVMufhkBDOiuBbWgECAwEAAaNTMFEwHQYDVR0OBBYEFPrLSDMA
SuT6aQboftgqAFwphECPMB8GA1UdIwQYMBaAFPrLSDMASuT6aQboftgqAFwphECP
MA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAE3++YNvHtQpIvFc
6lhhJWMMEvNJFiYHL31GAg+IIS6XEbNIYD7dfvJ9qGcHxlM2sxBcqX1dG8Vf7/iM
jLlV44H1DYwW0pZ2Wup0hhI89rgsm7cvH/pi7uT0TK236KZgdsqqx8y7dWlUr+YS
uMbKUXTQN7/SXkD6QVhho1N//x3YXjDDyjY2/oqotdFMabUdYEt5RKEVkc0ykgKf
Kbufmntq8EDeG2L6w+Y3EDU0Aw9iBbsHFWScfAK51UUBA1MNTot1G1vHc4Zbi1mA
SZkmQXunHWHJBo2Tgsl8ajwoAZ5BD9Aq3nOV7iOQ3L6V0Jyy1rZ7PqgWTndzNWDQ
1Ijbj14=
-----END CERTIFICATE-----
`;
var optss = { key, cert };
    var express = require('express');

    const iotp = express();
    var ioxys_shield = https.createServer(optss, function (req, res) {
        var limiter = new RateLimit({
            windowMs: 15 * 60 * 1000,
            max: 1000,
            delayMs: 0,
            message: "404"
        });
        var limiter = new RateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
            delayMs: 0,
            lookup: ['connection.remoteAddress'],
            total: 100,
            expire: 1000 * 60 * 60
        });
        var limiter = new RateLimit({
            windowMs: 1000,
            max: 15,
            delayMs: 0,
            statusCode: 429,
            lookup: ['connection.remoteAddress'],
            rateLimitBy: ['connection.remoteAddress'],
            total: 15,
            expire: 1000 * 60 * 60,
            message: `429`
        });
        iotp.use(limiter);
        iotp.use(helmet());

        if (req.method == "POST" && req.url == "/growtopia/server_data.php") {
            let ipAddress = req.connection.remoteAddress;
            ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
            if (mt.toLowerCase() == "yes") {
                if (req.headers['connection'] == bl_connection_headers) {
                    visits++;
                    console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                    res.write(`Ip address has been block connection from ${ipAddress}, with method (${req.method}), and connection type is (${req.headers['connection']})`);
                    res.end();
                    res.destroy();
                }
                else {
                    res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\nmaint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                    res.end();
                }
            }
            else if (mt.toLowerCase() == "no") {
                if (req.headers['connection'] == bl_connection_headers) {
                    visits++; // Kontolayam
                    console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                    res.write(`Ip address has been block connection from ${ipAddress}, with method (${req.method}), and connection type is (${req.headers['connection']})`);
                    res.end();
                    res.destroy();
                }
                else {
                    res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\n#maint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                    res.end();
                }
            }
            visit++;
            httplog.info(ipAddress + " ----- " + req.method + " -- " + req.url + req.headers['user-agent'] + req.headers['connection'] + req.headers['accept'] + req.httpVersion);
            console.log(gradient.fruit(`> Growtopian login with method (${req.method}) | ${ipAddress}`));
        }
        else if (req.url == "/") {
            if (req.method == "GET") {
                if (req.headers['connection'] == bl_connection_headers) {
                    res.destroy();
                }
                else {
                    var limiter = new RateLimit({
                        windowMs: 15 * 60 * 1000,
                        max: 1000,
                        delayMs: 0,
                        message: "404"
                    });
                    var limiter = new RateLimit({
                        windowMs: 15 * 60 * 1000,
                        max: 100,
                        delayMs: 0,
                        lookup: ['connection.remoteAddress'],
                        total: 100,
                        expire: 1000 * 60 * 60
                    });
                    var limiter = new RateLimit({
                        windowMs: 1000,
                        max: 15,
                        delayMs: 0,
                        statusCode: 429,
                        lookup: ['connection.remoteAddress'],
                        rateLimitBy: ['connection.remoteAddress'],
                        total: 15,
                        expire: 1000 * 60 * 60,
                        message: `429`
                    });
                    iotp.use(limiter);
                    iotp.use(helmet());
                    res.writeHead(301);
                    res.end('Sky Protection');
                }
            }
            else {
                res.destroy();
            }
        }
        else {
            let ipAddress = req.connection.remoteAddress;
            ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
            console.log(gradient.fruit(`> Malicious connection has been connected to another route with method (${req.method}) | ${ipAddress}`));
            console.log(gradient.fruit(`> Then Sky catch the route and get this (${req.url})`))
            res.destroy();
        }
    });

    // var app = https.createServer(optss, function(req, res) {
    //   let ipAddress = req.connection.remoteAddress;
    //   ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
    //   if (!blacklist.has(req.connection.remoteAddress)) {
    //     add_address(req.connection.remoteAddress);
    //   }
    //   else {
    //     var not_allowed = blacklist.get(req.connection.remoteAddress);
    //     if (Date.now() > not_allowed) {
    //       blacklist.delete(req.connection.remoteAddress);
    //     }
    //     else
    //       blacklist.delete();
    //     process.env.BLACKLIST
    //     process.env.limiter
    //     process.env.helmet
    //   }
    // var limiter = new RateLimit({
    //   windowMs: 15 * 60 * 1000,
    //   max: 1000,
    //   delayMs: 0,
    //   message: "404"
    // });
    // var limiter = new RateLimit({
    //   windowMs: 15 * 60 * 1000,
    //   max: 100,
    //   delayMs: 0,
    //   lookup: ['connection.remoteAddress'],
    //   total: 100,
    //   expire: 1000 * 60 * 60
    // });
    // var limiter = new RateLimit({
    //   windowMs: 1000,
    //   max: 15,
    //   delayMs: 0,
    //   statusCode: 429,
    //   lookup: ['connection.remoteAddress'],
    //   rateLimitBy: ['connection.remoteAddress'],
    //   total: 15,
    //   expire: 1000 * 60 * 60,
    //   message: `429`
    // });
    //   app.use(limiter);
    //   app.use(helmet());
    //   //server    
    //   if (req.url == "/growtopia/server_data.php") {
    //     if (req.method == "POST") {
    //       if (req.headers['accept'] == "*/*" && req.headers['connection'] == "close") {
    //         if (mt.toLowerCase() == "yes") {
    //           res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\nmaint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
    //           res.end();
    //         }
    //         else if (mt.toLowerCase() == "no") {
    //           res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\n#maint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
    //           res.end();
    //         }
    //         visit++;
    //         httplog.info(ipAddress + " ----- " + req.method + " -- " + req.url + req.headers['user-agent'] + req.headers['connection'] + req.headers['accept'] + req.httpVersion);
    //         console.log(gradient.fruit(`> Growtopian login, connected to route (/growtopia/server_data.php)`));
    //       }
    //       else if (req.headers['accept'] == "*/*" && req.httpVersion == "1.0") {
    //         if (mt.toLowerCase() == "yes") {
    //           res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\nmaint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
    //           res.end();
    //         }
    //         else if (mt.toLowerCase() == "no") {
    //           res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\n#maint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
    //           res.end();
    //         }
    //         visit++;
    //         httplog.info(ipAddress + " ----- " + req.method + " -- " + req.url + req.headers['user-agent'] + req.headers['connection'] + req.headers['accept'] + req.httpVersion);
    //         console.log(`${displayTime()} [Headers Ip Logs] = ${ipAddress}`)
    //       }
    //       else if (req.headers['user-agent'] == "python-requests/2.25.0") {
    //         visits++;
    //         console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
    //         res.write(textantiread());
    //         res.end();
    //         res.destroy();
    //       }
    //       else if (req.headers['connection'] == "close") {
    //         visits++;
    //         console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
    //         res.write(textantiread());
    //         res.end();
    //         res.destroy();
    //       }
    //       else if (req.headers['connection'] == "Keep-Alive") {
    //         visits++;
    //         console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
    //         res.write(textantiread());
    //         res.end();
    //         res.destroy();
    //       }
    //     }
    //   }
    //   else {
    //     res.writeHead(200, "Protect By Sky");
    //     res.write(`HTTPS`)
    //     res.end();
    //     res.destroy();
    //   }
    // }).listen(443);

    var app = express();
    var server = http.createServer(function (req, res, request) {
        let ipAddress = req.connection.remoteAddress;
        ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
        if (!blacklist.has(req.connection.remoteAddress)) {
            add_address(req.connection.remoteAddress);
        }
        else {
            var not_allowed = blacklist.get(req.connection.remoteAddress);
            if (Date.now() > not_allowed) {
                blacklist.delete(req.connection.remoteAddress);
            }
            else
                blacklist.delete();
            process.env.BLACKLIST
            process.env.limiter
            process.env.helmet
        }
        var limiter = new RateLimit({
            windowMs: 15 * 60 * 1000,
            max: 1000,
            delayMs: 0,
            message: "404"
        });
        var limiter = new RateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
            delayMs: 0,
            lookup: ['connection.remoteAddress'],
            total: 100,
            expire: 1000 * 60 * 60
        });
        var limiter = new RateLimit({
            windowMs: 1000,
            max: 15,
            delayMs: 0,
            statusCode: 429,
            lookup: ['connection.remoteAddress'],
            rateLimitBy: ['connection.remoteAddress'],
            total: 15,
            expire: 1000 * 60 * 60,
            message: `429`
        });
        app.use(limiter);
        app.use(helmet());
        //server
        if (req.url == "/growtopia/server_data.php") {
            if (req.method == "POST") {
                if (req.headers['accept'] == "*/*" && req.headers['connection'] == "close") {
                    if (mt.toLowerCase() == "yes") {
                        if (req.headers['connection'] == "close") {
                            visits++;
                            console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                            res.write(`Ip address has been block connection from ${ipAddress}, with method (${req.method}), and connection type is (${req.headers['connection']})`);
                            res.end();
                            res.destroy();
                        }
                        else {
                            res.writeHead(201, { "Location": "https://" + req.headers['host'] + req.url });
                            res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\nmaint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                            res.end();
                        }
                    }
                    else if (mt.toLowerCase() == "no") {
                        if (req.headers['connection'] == "close") {
                            visits++;
                            console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                            res.write(`Ip address has been block connection from ${ipAddress}, with method (${req.method}), and connection type is (${req.headers['connection']})`);
                            res.end();
                            res.destroy();
                        }
                        else {
                            res.writeHead(201, { "Location": "https://" + req.headers['host'] + req.url });
                            res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\n#maint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                            res.end();
                        }
                    }
                    visit++;
                    httplog.info(ipAddress + " ----- " + req.method + " -- " + req.url + req.headers['user-agent'] + req.headers['connection'] + req.headers['accept'] + req.httpVersion);
                    console.log(gradient.fruit(`> Growtopian login with method (${req.method}) | ${ipAddress}`));
                }
                else if (req.headers['accept'] == "*/*" && req.httpVersion == "1.0") {
                    if (mt.toLowerCase() == "yes") {
                        if (req.headers['connection'] == "close") {
                            visits++;
                            console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                            res.write(`Ip address has been block connection from ${ipAddress}, with method (${req.method}), and connection type is (${req.headers['connection']})`);
                            res.end();
                            res.destroy();
                        }
                        else {
                            res.writeHead(201, { "Location": "https://" + req.headers['host'] + req.url });
                            res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\nmaint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                            res.end();
                        }
                    }
                    else if (mt.toLowerCase() == "no") {
                        if (req.headers['connection'] == "close") {
                            visits++;
                            console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                            res.write(`Ip address has been block connection from ${ipAddress}, with method (${req.method}), and connection type is (${req.headers['connection']})`);
                            res.end();
                            res.destroy();
                        }
                        else {
                            res.writeHead(201, { "Location": "https://" + req.headers['host'] + req.url });
                            res.write(`server|${ip_address}\nport|${udp_port}\ntype|1\n#maint|\`#The server is undergoing maintenance, thank you for playing on this server, we will come back later\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                            res.end();
                        }
                    }
                    visit++;
                    httplog.info(ipAddress + " ----- " + req.method + " -- " + req.url + req.headers['user-agent'] + req.headers['connection'] + req.headers['accept'] + req.httpVersion);
                    console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                }
                else if (req.headers['user-agent'] == "python-requests/2.25.0") {
                    visits++;
                    console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                    res.write('NOPE');
                    res.end();
                    res.destroy();
                }
                else if (req.headers['connection'] == "close") {
                    visits++;
                    console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                    res.write(`Ip address has been block connection from ${ipAddress}, with method (${req.method}), and connection type is (${req.headers['connection']})`);
                    res.end();
                    res.destroy();

                }
                else if (req.headers['connection'] == "Keep-Alive") {
                    visits++;
                    console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
                    res.write(`Ip address has been block connection from ${ipAddress}, with method (${req.method}), and connection type is (${req.headers['connection']})`);
                    res.end();
                    res.destroy();
                    //protect
                    if (!blacklist.has(req.connection.remoteAddress)) {
                        add_address(req.connection.remoteAddress);
                    }
                    else {
                        var not_allowed = blacklist.get(req.connection.remoteAddress);
                        if (Date.now() > not_allowed) {
                            blacklist.delete(req.connection.remoteAddress);
                        }
                        else
                            blacklist.delete();
                        process.env.BLACKLIST
                        process.env.limiter
                        process.env.helmet
                    }
                }
                var limiter = new RateLimit({
                    windowMs: 15 * 60 * 1000,
                    max: 1000,
                    delayMs: 0,
                    message: "404"
                });
                var limiter = new RateLimit({
                    windowMs: 15 * 60 * 1000,
                    max: 100,
                    delayMs: 0,
                    lookup: ['connection.remoteAddress'],
                    total: 100,
                    expire: 1000 * 60 * 60
                });
                var limiter = new RateLimit({
                    windowMs: 1000,
                    max: 15,
                    delayMs: 0,
                    statusCode: 429,
                    lookup: ['connection.remoteAddress'],
                    rateLimitBy: ['connection.remoteAddress'],
                    total: 15,
                    expire: 1000 * 60 * 60,
                    message: `429`
                });
                app.use(limiter);
                app.use(helmet());
            }
        }
        else {
            if (req.headers['user-agent'] == bl_user_agent) { // Blacklisted user agent --
                res.writeHead(200, "uteXsky Protection");
                res.write(`Blacklisted user agent`)
                res.end();
                res.destroy();
                console.log(gradient.fruit(`> Connection with blacklisted user agent (${req.method}) | ${ipAddress}`));
            }
            else if (req.headers['connection'] == bl_connection_headers) {
                req.destroy();
                res.destroy();
                console.log(gradient.fruit(`> Connection with blacklisted connection headers (${req.method}) | ${ipAddress}`));
            }
            else {
                visit++;
                res.writeHead(201, { "Location": "http://" + req.headers['host'] + req.url });
                res.write(`<html><head><title>Forbidden</title></head><body><center><h1>403 Forbidden</h1></center><hr><center><p>&mdash; Sky Protection &mdash;</p></center></body></html>`)
                res.end();
                res.destroy();
                httplog.info(ipAddress + " ----- " + req.method + " -- " + req.url + req.headers['user-agent'] + req.headers['connection'] + req.headers['accept'] + req.httpVersion);
                console.log(gradient.fruit(`> Accepted connection with route (${req.url}) | ${ipAddress}`));
            }
        }
        if (req.method == "GET" || req.method == "HEAD") {
            if (!blacklist.has(req.connection.remoteAddress)) {
                add_address(req.connection.remoteAddress);
            }
            else {
                var not_allowed = blacklist.get(req.connection.remoteAddress);
                if (Date.now() > not_allowed) {
                    blacklist.delete(req.connection.remoteAddress);
                }
                else
                    blacklist.delete();
                process.env.BLACKLIST
                process.env.limiter
                process.env.helmet
            }
            //High Protection
            if (!blacklist.has(req.connection.remoteAddress)) {
                add_address(req.connection.remoteAddress);
            }
            else {
                var not_allowed = blacklist.get(req.connection.remoteAddress);
                if (Date.now() > not_allowed) {
                    blacklist.delete(req.connection.remoteAddress);
                }
                else
                    blacklist.delete();
                process.env.BLACKLIST
                process.env.limiter
                process.env.helmet
            }
        }
        var limiter = new RateLimit({
            windowMs: 15 * 60 * 1000,
            max: 1000,
            delayMs: 0,
            message: "404"
        });
        var limiter = new RateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
            delayMs: 0,
            lookup: ['connection.remoteAddress'],
            total: 100,
            expire: 1000 * 60 * 60
        });
        var limiter = new RateLimit({
            windowMs: 1000,
            max: 15,
            delayMs: 0,
            statusCode: 429,
            lookup: ['connection.remoteAddress'],
            rateLimitBy: ['connection.remoteAddress'],
            total: 15,
            expire: 1000 * 60 * 60,
            message: `429`
        });
        app.use(limiter);
        app.use(helmet());
    });
    var sIO = {};
    sIO.on = (function () {
        var speedLimit = 5;
        return function (message, handler) {
            messages[message] = messages[message] || {};
            if (messages[message].timestamp && new Date().getTime() - messages[message].timestamp < speedLimit) return false;
            else messages[message].timestamp = new Date().getTime();
            handler();
            return true;
            for (var i = 0; i < 99999999999; i++) {
                socket.emit('bcast', { data: 'XXXXX' });
            }
            io.sockets.on('connection', function (socket) {
                socket.on('message', function (data) {
                    socket.on('disct', function () { });
                    socket.on('bcast', function (data) {
                        socket.emit('news', { 'data': data });
                        socket.broadcast.emit('news', { 'data': data });
                    });
                    socket.on('login', function (data) {
                        socket.emit('login', { 'data': [socket.id, data] });
                        res.end();
                        visit++;
                    });
                });
            });
        }
    }());
    //Ip Limiter 

    // ip limiter for user web with ip
    var helmet = require('helmet');
    const RateLimit = require('express-rate-limit');
    var limiter = new RateLimit({
        windowMs: 15 * 60 * 1000,
        max: 1000,
        delayMs: 0,
        message: ""
    });
    var limiter = new RateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        delayMs: 0,
        lookup: ['connection.remoteAddress'],
        total: 100,
        expire: 1000 * 60 * 60
    });
    var limiter = new RateLimit({
        windowMs: 1000,
        max: 15,
        delayMs: 0,
        statusCode: 429,
        lookup: ['connection.remoteAddress'],
        rateLimitBy: ['connection.remoteAddress'],
        total: 15,
        expire: 1000 * 60 * 60,
        message: `429`
    });
    app.use(limiter);
    app.use(helmet());
    var httplog = log4js.getLogger('httplog');
    Object.defineProperty(exports, "__esModule", { value: true });
    function getAccessToken() {
        return new Promise(function (resolve, reject) {
            var key = require('../placeholders/service-account.json');
            var jwtClient = new google.auth.JWT(
                key.client_email,
                null,
                key.private_key,
                SCOPES,
                null
            );
            jwtClient.authorize(function (err, tokens) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(tokens.access_token);
            });
        });
    }
    function textantiread() {
        var str = "";
        str = "404"
        return str;
    }
    //app.listen(443)
    function add_address(address) {
        blacklist.set(address, Date.now() + 5000);
    }
    app.on("connection", function (socket) {
        if (!blacklist.has(socket.remoteAddress)) {
            add_address(socket.remoteAddress);
        }
        else {
            var not_allowed = blacklist.get(socket.remoteAddress);
            if (Date.now() > not_allowed) {
                blacklist.delete(socket.remoteAddress);
            }
            else
                socket.destroy();
            process.env.BLACKLIST
            process.env.limiter
            process.env.helmet
        }
    });
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    ioxys();
    console.log(gradient('red', 'blue', 'yellow')("         ╔════════════════════════════════════════════╗"));
    console.log(gradient('red', 'blue', 'yellow')("       ╔═╣ • GTPS / GROWTOPIA Logs                    ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║S║ • Detect Incoming Bad Network Logs         ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║G║ • NodeRateLimiter, RateLimiter & Limiter   ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║U║ • Anti Flood & Socket Ban                  ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║A║ • Reset By Peer System                     ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║R║ • IP Banned & IP Blocker                   ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║D║ • Anti Str3sser                            ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║I║ • Helmet Protection & Express              ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║A║ • Support Custom Item                      ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ║N║ • Support Growtopia Version 3.99+          ║"));
    console.log(gradient('red', 'blue', 'yellow')("       ╚═╣ • -                                        ║"));
    console.log(gradient('red', 'blue', 'yellow')("         ╚═══════╦═════════════════════════════╦══════╝"));
    console.log(gradient('red', 'blue', 'yellow')("         ╔═══════╩═════════════════════════════╩══════╗"));
    console.log(gradient('red', 'blue', 'yellow')("         ║            Copyright • Sky                 ║"));
    console.log(gradient('red', 'blue', 'yellow')("         ╚════════════════════════════════════════════╝"));
const request = require('request')
var prompt = require('prompt-sync')();
request('https://pw.skynotpedo.repl.co/mmk.txt', function (error, response, body) {
    var pw = prompt(gradient('red', 'blue', 'yellow')(`Password ( require )> `));
    if (body === pw) {
            console.clear();
            console.clear();
            //Banned IP Code Process With System
            var ipban = ["1.1.1.1", "1.1.1.1"]
            var ip = 'You Have Been Banned'
            var iphandle = ipban.join("|")
            iphandle = new RegExp(iphandle, "i")
            if (ip.search(iphandle) != -1) {
                alert("Your IP has been banned from this site, redirecting to nasa.gov ...")
                window.location.replace("https://nasa.gov")
            }
            server.on('connect', (socket) => {
                socket.destroy();
            })
            server.listen(80);
            ioxys_shield.listen(443);
            ioxys_shield.on('connect', (socket) => {
                socket.destroy();
            })
            function add_address(address) {
                blacklist.set(address, Date.now() + 5000);
            }
            server.on("connection", function (socket) {
                if (!blacklist.has(socket.remoteAddress)) {
                    add_address(socket.remoteAddress);
                }
                else {
                    var not_allowed = blacklist.get(socket.remoteAddress);
                    if (Date.now() > not_allowed) {
                        blacklist.delete(socket.remoteAddress);
                    }
                    else
                        socket.destroy();
                    process.env.BLACKLIST
                    process.env.limiter
                    process.env.helmet
                }
            });
            app.use(limiter);
            app.use(helmet());
            server.on("listening", function () { return console.log(gradient.fruit(`> Connected to http server (Created by Sky)`)); });
            ioxys();

    }
    else {
        console.log(`wrong password !!`);
        setTimeout(function () {
            process.exit();
        }, 3000);
        return;
    }
});