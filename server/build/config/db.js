class DB {
    url;
    constructor(DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME) {
        this.url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
    }
    getUrl() {
        return this.url;
    }
}
export default DB;
