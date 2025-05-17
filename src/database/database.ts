import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('imoveis.db');

export const initDatabase = () => {
  db.runAsync(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      phone TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );`
  );

  db.runAsync(
    `CREATE TABLE IF NOT EXISTS properties (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      type TEXT NOT NULL,
      address TEXT NOT NULL,
      bedrooms INTEGER,
      bathrooms INTEGER,
      area REAL,
      images TEXT,
      user_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );`
  );
  createAdminUser();
};

const createAdminUser = async () => {
  try {
    const adminExists = await db.getAllAsync(
      'SELECT * FROM users WHERE email = ?',
      ['admin']
    );

    if (adminExists.length === 0) {
      await db.runAsync(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        ['Admin User', 'admin', 'admin']
      );
      console.log('Usuário administrador criado com sucesso.');
    } else {
      console.log('Usuário administrador já existe.');
    }
  } catch (error) {
    console.error('Erro ao criar usuário administrador:', error);
  }
};

export default db; 