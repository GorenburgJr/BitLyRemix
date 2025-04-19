//PRISMA 
// // import { PrismaClient } from '../../prisma/index';

// /**
//  * @type PrismaClient
//  */
// let prisma;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
//   prisma.$connect();
// } else {
//   if (!global.Sh) {
//     global.__db = new PrismaClient();
//     global.__db.$connect();
//   }
//   prisma = global.__db;
// }

// export { prisma };


//TYPEORM <3

import { DataSource } from 'typeorm';
import { User } from '../../src/entity/User';
import { Url } from '../../src/entity/Url';

// declare global {
//   let __dataSource: DataSource | undefined;
// }

let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [User, Url, Request],
  });

  AppDataSource.initialize()
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.error('DB connection failed', err);
  })
} else {
  if (!global.__dataSource) {
    global.__dataSource = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      logging: false,
      entities: [User, Url, Request],
    });

    global.__dataSource.initialize()
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.error('DB connection failed', err);
  })
  }

  AppDataSource = global.__dataSource;
}

export default { AppDataSource };



