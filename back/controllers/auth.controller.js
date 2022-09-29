const ig = require("../index.js");

exports.login = async (req, res) => {
    ig.client.state.generateDevice(req.body.username);

    try {
        await ig.client.simulate.preLoginFlow();
    }
    catch {
        console.log("Erreur survenue lors de la routine pré-login")
    }

    var loggedInUser = null
    try {
        loggedInUser = await ig.client.account.login(req.body.username, req.body.password)
    }
    catch {
        return res.status(400).send("Connexion impossible, veuillez vérifier vos identifiants.")
    }

    process.nextTick(async () => {
        try {
            await ig.client.simulate.postLoginFlow();
        }
        catch {
            console.log("Erreur survenue lors de la routine post-login")
        }
    });

    return res.status(200).send(loggedInUser);
}