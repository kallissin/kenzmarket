const devEnv = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: '5432',
    database: process.env.PG_DB,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    entities: ['./src/entities/**/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
        migrationsDir: './src/database/migrations',
    },
    logging: true
};


module.exports = devEnv;