"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
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