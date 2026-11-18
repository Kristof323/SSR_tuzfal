import { Injectable } from '@nestjs/common';
import mysql from 'mysql2/promise'

@Injectable()
export class AppService {
  private readonly db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'test1', 
  });

  getHello(): string{
    return 'Hello World'
  }

  async getSzabalyok() {
  const [sorok] = await this.db.execute(
    'SELECT id, priority, mac, enabled FROM blocklist ORDER BY priority ASC',
  );

  return sorok;
}

}
