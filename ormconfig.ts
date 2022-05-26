import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const dns = new URL(process.env.DATABASE_URL);
const config: PostgresConnectionOptions = {
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
}

export default config;