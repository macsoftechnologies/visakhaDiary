import { Injectable } from '@nestjs/common';
const sql = require('mssql');

const sqlConfig = {
  user: 'dairy',
  password: 'Dairy@123',
  database: 'VDAIRY',
  server: '61.1.113.62',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
  stream: false,
};

sql.connect(sqlConfig);
console.log('Connection Established...');

@Injectable()
export class SharedService {
  constructor() {}

  async executeQuery(query): Promise<any> {
    return await sql.query(query);
  }
}
