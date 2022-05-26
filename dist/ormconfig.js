"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dns = new URL(process.env.DATABASE_URL);
const config = {
    type: "postgres",
    host: dns.hostname,
    port: Number(dns.port),
    username: dns.username,
    password: dns.password,
    database: dns.pathname,
    entities: [
        __dirname + 'src/**/*.entity{.ts,.js}'
    ],
    migrations: [
        __dirname + 'dist/src/db/migrations/*.js'
    ],
    cli: {
        migrationsDir: __dirname + 'src/db/migrations'
    },
    synchronize: Boolean(process.env.DB_SYNCHRONIZE),
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map