import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '@/lib/auth';

export function authMiddleware(handler: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
      req.usuario = verifyToken(token);
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  };
}
