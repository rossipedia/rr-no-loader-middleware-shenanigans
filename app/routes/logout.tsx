import { redirect } from 'react-router';
import { cookie } from '~/cookie.server';

export async function action() {
  throw redirect('/', {
    headers: {
      'Set-Cookie': await cookie.serialize('', {
        maxAge: -1,
      }),
    },
  });
}
