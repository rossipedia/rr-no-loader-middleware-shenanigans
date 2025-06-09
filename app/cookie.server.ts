import { createCookie } from 'react-router';

export const cookie = createCookie('session', {
  httpOnly: true,
  secrets: ['644f0bb2a5ecc8125e7055ffbd255996d9d77a56a942c1eabe1a98dedefa36e6'],
});
