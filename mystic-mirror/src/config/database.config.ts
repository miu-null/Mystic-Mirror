import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    name: 'default',
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsTablename: 'migrationsHistory',
    migrationsRun: true,
    logging: true,
    // 'ssl': false,
    // extra: {
    //   ssl: {
    //rejectunauthorized: false,
  };
});
