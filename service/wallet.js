const { Wallet } = require("../models");
const Sequelize = require("sequelize");

class Wallets{
    async getWalletByUserId(userId){
        const wallet = await Wallet.findAll({
            where: { user_id: userId },
            attributes: ["id","category"]
        })
        return wallet
    }
}

module.exports = Wallets;