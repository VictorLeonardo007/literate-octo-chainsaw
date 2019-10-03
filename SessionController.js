//index, show, store, update, destroy
//listagem de sessoes, listar uma unica sessao, criar uma sessao, alterar e remover
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            const user = await User.create({ email });
        }

        return res.json(user);

    }
};