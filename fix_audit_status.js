import { DatabaseSync } from 'node:sqlite';

const dbPath = 'd:/inkOS/books/金牌大厨转生修仙的奇妙生活/story/memory.db';
const db = new DatabaseSync(dbPath);

// 查所有表
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log('Tables:', JSON.stringify(tables));

// 找跟章节相关的表
for (const t of tables) {
  const cols = db.prepare(`PRAGMA table_info(${t.name})`).all();
  console.log(`\n${t.name} columns:`, cols.map(c => c.name).join(', '));
}

db.close();
