// import { DataSource } from 'typeorm';
// import { User } from '../../src/entity/User';
// import { Url } from '../../src/entity/Url';
// import { Request } from '../../src/entity/Request';
// import 'reflect-metadata';

// declare global {
//   // Declare the global variable for TypeScript
//   var __dataSource: DataSource | undefined;
// }

// let AppDataSource: DataSource;

// if (process.env.NODE_ENV === 'production') {
//   AppDataSource = new DataSource({
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     synchronize: false,
//     logging: false,
//     entities: [User, Url, Request],
//   });

//   AppDataSource.initialize()
//     .then(() => {
//       console.log('DB connected');
//     })
//     .catch((err) => {
//       console.error('DB connection failed', err);
//     });
// } else {
//   if (!global.__dataSource) {
//     global.__dataSource = new DataSource({
//       type: 'postgres',
//       host: process.env.DB_HOST,
//       port: Number(process.env.DB_PORT),
//       username: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       synchronize: false,
//       logging: false,
//       entities: [User, Url, Request],
//     });

//     global.__dataSource
//       .initialize()
//       .then(() => {
//         console.log('DB connected');
//       })
//       .catch((err) => {
//         console.error('DB connection failed', err);
//       });
//   }

//   AppDataSource = global.__dataSource;
// }

// export { AppDataSource };



