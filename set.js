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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61U246rNhT9lcqviU4Ah9ykkcothFwGCLlXffAEQxzAeIxJQo7yLX3qJ/S/+gkVmZmekc7pdCqVJ+PL3mutvfb+CmhOCjzBFRh8BYyTExK4XoqKYTAAehlFmIMmCJFAYADwiD+Ro3ydS9PyGJ6E3y3ghawaLYy8PlV9YeZwOjR7mRQ/gFsTsPIpJfsPAvYnbF5uppJFdq3haGEUjaIIervJ3NcteGXiqrKqcpPAGfoP4FZHRIQTGlvsgDPMUTrBlYcI/xx82xuhRtXdQrvlda624eZjd2HpDfHYNkNrjbYwsCIWH8ay9Dn46UysaLn21lUyXm5I2sCrWKAiUfrprC0fgoO0QhISdhS/wi9ITHHohJgKIqpP626PG+6cViwwZoZLXG5WsDGdt4/eBGZx4HlL2DvSjS+7cPY54Ht/auKtZESay4UGi771HNE0mE9bXMn2ZHvI9Gs+kRXfPr8H7vE3ryT/RXfHufin1ZHH2TbYX6qZ5PW3zG2o4YHFB9ZVWnnJdN+TnOXyc/CttblbeEHcPp2d7uFxPB+Ji+5gQXuOYZFnZ+zptnZIs93a+QYfiZJ/hPL5nNpX+3Hq0+OuOsbkaC2STDOmFS+s+dZpVUbHzR03aLV3h8iSvKW/aVksURtmLKqIs2SuQmTB5YnZz/PWsUNnpqLHD3dGCa6cEAzkWxNwHJNCcCRITu97ktIEKDwFeM+xuMsLLsZSOZYwOfkTGGTDTW7QcATtw4w+t32+cNb2QWyjXL3YyQNoAsbzPS4KHI5IIXJezXBRoBgXYPDLvVI1aY6zXOAxCcEAKGq721ZlWZV7vZ+LL+cDEgVi7AvFAjRBxPNshsFA8BI3wf2BbClWW9F7sGfK3Y487Gl9y4RQhR1Z1qGq1RSzl6QLkuFCoIyBgdxVFdjuKbB/a/4/OPqSMjS6XU1RhopsqcO21Fd7lqwPZXUoSWrnYxzt/u3XJqD4Il58XKsP5SaICC/EkpYszVH4ZvK3Q7Tf5yUVQUX3Rr3AHAzebWMhCI2LmllJEd8fyAkbNQ8wiFBa4L8LjjkO37i8DjEjD2sfjv2FuvWGJqix14G+02bQgd/Lk75Upt9RZLmvQFVSFUmtb9YHTUBRHQyMMOLiiWOUYP7Tn7/9/kct0Sv4OleIBSJpAQbAmFQp9NojazotqmJm25oVa0asgW9k35roxaTDy9OJ+2VCNTWk6RITRjQcREYrm5RSh4wnTylent2FJ1sPPwhSg+u4JkHbpHVWe1AoZjp318dOj6cFNteqIVPzsZ3gcL7sQbbd8I41ctuGu255TK0oVm1zMulIpmmfTk9Fju3rcOczzX+os4X4RPb4fTKqb91y9NzxfW+5b5yGY79b7CpJGqrRqnQhC3f6eQoJ6822XH2k2kp73Fwkww0Nrei3np6Mk+Zvs6Ou6etRxhIjDbW9ob209328pK9jnbw2Hrn/RgTfp+RrPf61rC/Aa/dJt+a7GK9z9x9mlz7fr7sdacrGZ3ezU1ej/HkbjxJ6PqmECzcnQaZu0pmZXPtzcKvbgKVIRDnPwAAgGvL8bhqel7WdHRrlHyQzdMd5Y56iQmjfWuQHXafAl1sez9kIFQcwAHDe38F+7fdKYywQSLx1HNDqz24E4PYXLDQ1npwIAAA=',
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
