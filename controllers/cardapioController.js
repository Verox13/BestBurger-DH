const res = require("express/lib/response")
const { Produto } = require("../models/index")

const cardapioController = {

    acompanhamentos: async(req, res) => {
        let produtos = await Produto.findAll();
        res.render("cardapioacompanhamentos", { produtos });

    }

}

module.exports = cardapioController