import { NextApiRequest } from 'next';

declare module 'next' {
  interface NextApiRequest {
    usuario?: {
      userId: string;
    };
  }
}
