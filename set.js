const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA62VWW7jRhCGrxL0q4QxmzsFGAg37bQk0tQW5KElNqk2VzWboqiBzpKnHCH3yhECSnbGwEwcBwifuDSrvr+6/uqvIMtJiSe4Ab2voKDkhBhub1lTYNADRhWGmIIuCBBDoAe4OW7c6bM8xGm6VWN15Z2FfJzwh8tqn6zNvc870wdHRw7nP4JrFxTVLiH7DwJCtgk7L8cg9rPCF7dsZKtR4yyfPWE9DFSaDMP+sOGerDCOHsG1jYgIJVlkFwecYoqSCW7miNDP4aOx/SCoy5d1flmem4fpRTf3GJ1jL5IR3tahto5KVznOEn/zOXyNLE5Z6ctDPnQVN2nWoqNNIne7FmGHKHycnSX38oQyz13c8UsSZTgYBThjhDWfrns+2pM0g0Y9mOpRUh13q8qjAyT3G9dqZCeBhJOYbJqbZfw58Its4hdpqLhHHUrCku/nkb+Lnhyplof6emBoYWxv88susDbvwef0rVfi/1J3b+Z4Radk862oVFXyLMS7nHWiKEODqulMmKP2c992aW6PPod/2Gj8LPDZJvGcsEj6dbmw47G1Eq1dvSwndBgc6fzBy5C7/4aPWEU/ojykmofPshuXzfZpba/nwmlmT0bKAbpr1Uz7HeXUUXU8EY1hFi9hQ0nNWOSI/pTRdVWupv7pYswO53R9TurN5AnP5Y0RPd4UxbgZBaAHr11AcURKRhEjeXZ7p3JdgIKTh/cUs1t5wQuMO3WfelgejWWv2W2OlTUJPFeILmluDuJOWS7sqoy1fPQIuqCg+R6XJQ6GpGQ5bRxclijCJej9ctupVjTFac7wmASgB3hJVEQJQgmq6s/ll/qAWImK4kuGGeiCkOapg0GP0Qp3we0HVTNUlVM53eQs21Q5UZY0tS8oJqcJfQtarcT0nvSZpLhkKC1ADyoSL3CaLPPX7v/DoUMb2gbfF3UoQVsQREHTodpXJQtqgsSJH3Mo8P/i6PM6lHgdChZvqZJuaoolqoJiqVCwFFuSPubQ1OuvXZDhM7v7qe0CAXZBSGjJ/KwqkhwFb2Z7+4j2+7zKmNdke7O9wRT03r3GjJEsKltlVYbo/kBO2Gx1gF6IkhL/3XiY4uBNy+swNfOg9cNgNYXmdAVBy94G+q42PZn/vjzJbRnUZB5CjRckTuI5qV3ZfuiCDLXBwBAjynYUoxjTn/787fc/2hK9wre5AswQSUrQA+akSoS5OLRH5KFxnMFAtyPdjHTwTeybme9m6Z93J7qo4kyXgizxMSmIjr3QfEgnFSeT8WSXYL+ePc+h/fiDIKAHppFuqmgdbO1lZFgDmxygUUxd2RqEz2VxORnzfuO5upXinbKg+uFpe/GO3pIk80tf31i0FnY7nU9G2BX9hzHvavikGvpjmy3AJ7LH75NFR65i/qBZ1lo0j+PLPD+NSVpt6yIbsgecEj9q9sv6eFZeOtNNsRqwyTS76AN96gQ17y4YefJ3z9SopAM/X0JdmkYvRn0fM7cxl7weL+R1AJDbY0jwbVq/7se/busdvO0+7tp9F+N1/v/DDDXc/UqRuWkxrmfrrbQc5sdNNIyz+iQRymY58VJpnThWfNFccG1tUCSIhTlN2+M5C2h+axqaV207j7Iw/yCZaYxGpn5XnqCS6d8s8gPXScJ91ZzmxRCVB9ADgqttBa3t90YvCo8h9uY4oLfXoLMA178A8Us/EiQJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "CALLY",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254745115188",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/grlqyj.png",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'yes', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by callie',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call automatically declined avoid calling',             
    GURL: process.env.GURL || "https://www.whatsapp.com/channel/0029VbAGDcU2f3ETH93NUd3o",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'CALLY_MD',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
