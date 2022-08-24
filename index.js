const express = require("express");
const app = express();
const cors = require("cors");
const ftp = require("basic-ftp");
const fs = require("fs");

app.use(cors());
app.use(express.json())

//Get whitelisted users
app.post("/whitelist", (req, res) => {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    
    client.access({
        host: req.body.host,
        user: req.body.user,
        password: req.body.password,
        port: 21,
        secure: false
    })
    .then(() => {
        const rndFileId = Math.floor(100000000 + Math.random() * 900000000);
        client.downloadTo(`${rndFileId}.json`, "whitelist.json")
        .then(() => {
            fs.readFile(`${rndFileId}.json`, "utf-8", (err, data) => {
                let whitelistedUsers = JSON.parse(data);
                res.send(whitelistedUsers);
                fs.rmSync(`${rndFileId}.json`);
            });
        }).catch(error => {
            res.status(400).send({error: "Connected succesfully, but couldnt get the whitelisted players"});
        });
    }).catch(error => {
        res.status(401).send({error: "Could not connect to the ftp server, maybe the credentials are wrong"});
    });
});

//Get opped users
app.post("/ops", (req, res) => {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    
    client.access({
        host: req.body.host,
        user: req.body.user,
        password: req.body.password,
        port: 21,
        secure: false
    })
    .then(() => {
        const rndFileId = Math.floor(100000000 + Math.random() * 900000000);
        client.downloadTo(`${rndFileId}.json`, "ops.json")
        .then(() => {
            fs.readFile(`${rndFileId}.json`, "utf-8", (err, data) => {
                let oppedUsers = JSON.parse(data);
                res.send(oppedUsers);
                fs.rmSync(`${rndFileId}.json`);
            });
        }).catch(error => {
            res.status(400).send({error: "Connected succesfully, but couldnt get the op players"});
        });
    }).catch(error => {
        res.status(401).send({error: "Could not connect to the ftp server, maybe the credentials are wrong"});
    });
});

//Get banned players
app.post("/banned-players", (req, res) => {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    
    client.access({
        host: req.body.host,
        user: req.body.user,
        password: req.body.password,
        port: 21,
        secure: false
    })
    .then(() => {
        const rndFileId = Math.floor(100000000 + Math.random() * 900000000);
        client.downloadTo(`${rndFileId}.json`, "banned-players.json")
        .then(() => {
            fs.readFile(`${rndFileId}.json`, "utf-8", (err, data) => {
                let bannedUsers = JSON.parse(data);
                res.send(bannedUsers);
                fs.rmSync(`${rndFileId}.json`);
            });
        }).catch(error => {
            res.status(400).send({error: "Connected succesfully, but couldnt get the banned players"});
        });
    }).catch(error => {
        res.status(401).send({error: "Could not connect to the ftp server, maybe the credentials are wrong"});
    });
});

//Get banned players
app.post("/banned-ips", (req, res) => {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    
    client.access({
        host: req.body.host,
        user: req.body.user,
        password: req.body.password,
        port: 21,
        secure: false
    })
    .then(() => {
        const rndFileId = Math.floor(100000000 + Math.random() * 900000000);
        client.downloadTo(`${rndFileId}.json`, "banned-ips.json")
        .then(() => {
            fs.readFile(`${rndFileId}.json`, "utf-8", (err, data) => {
                let bannedIps = JSON.parse(data);
                res.send(bannedIps);
                fs.rmSync(`${rndFileId}.json`);
            });
        }).catch(error => {
            res.status(400).send({error: "Connected succesfully, but couldnt get the banned ips"});
        });
    }).catch(error => {
        res.status(401).send({error: "Could not connect to the ftp server, maybe the credentials are wrong"});
    });
});

//Get players from last 30 days
app.post("/players", (req, res) => {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    
    client.access({
        host: req.body.host,
        user: req.body.user,
        password: req.body.password,
        port: 21,
        secure: false
    })
    .then(() => {
        const rndFileId = Math.floor(100000000 + Math.random() * 900000000);
        client.downloadTo(`${rndFileId}.json`, "usercache.json")
        .then(() => {
            fs.readFile(`${rndFileId}.json`, "utf-8", (err, data) => {
                let users = JSON.parse(data);
                res.send(users);
                fs.rmSync(`${rndFileId}.json`);
            });
        }).catch(error => {
            res.status(400).send({error: "Connected succesfully, but couldnt get the players"});
        });
    }).catch(error => {
        res.status(401).send({error: "Could not connect to the ftp server, maybe the credentials are wrong"});
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});