import {
  Outlet,
  redirect,
  type unstable_MiddlewareFunction,
} from 'react-router';
import { cookie } from '~/cookie.server';

export const unstable_middleware: unstable_MiddlewareFunction[] = [
  async ({ request }) => {
    const value = await cookie.parse(request.headers.get('Cookie'));
    if (!value) {
      throw redirect('/login');
    }
  },
];

export default function Component() {
  return <Outlet />;
}
