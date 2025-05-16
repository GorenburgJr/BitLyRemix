import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    const users = await prisma.user.findMany()
    console.log(users)
    console.log('✅ Успешное подключение к базе данных');
  } catch (err) {
    console.error('❌ Ошибка подключения к базе данных:', err);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
