export const env = {
    db: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        pass : process.env.DB_PASS,
        name : process.env.DB_NAME,
        port : process.env.DB_PORT || 3306,
        dialect : process.env.DB_DIALECT || "mysql"
    },
    server : {
        port : process.env.SERVER_PORT || 3000
    
    }
};