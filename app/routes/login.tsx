import { Form, redirect } from 'react-router';
import { cookie } from '~/cookie.server';

export async function action() {
  throw redirect('/', {
    headers: {
      'Set-Cookie': await cookie.serialize('logged in'),
    },
  });
}

export default function Login() {
  return (
    <Form method="post">
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </Form>
  );
}
