// pages/api/data.js
import mysql from 'mysql2/promise';
import fs from 'fs';

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: 'ducrHsWNY7f2ByD.root',
    password: 'Vdmfvphmh619McjC',
    database: 'test',
    ssl: {
      ca: fs.readFileSync('/etc/ssl/certs/ca-certificates.crt')
    }
  });

  const [rows] = await connection.execute('SELECT * FROM tu_tabla');
  res.status(200).json(rows);
}
