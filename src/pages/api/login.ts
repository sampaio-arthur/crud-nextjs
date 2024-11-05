import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { verifyPassword, generateToken } from '@/lib/auth';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { email, password } = req.body;

  const user = await prisma.usuario.findUnique({
    where: { email },
  });

  if (!user || !verifyPassword(password, user.senha)) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  const token = generateToken(user.id);
  res.status(200).json({ token });
}
