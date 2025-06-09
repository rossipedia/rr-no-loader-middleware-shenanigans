import { cookie } from '~/cookie.server';
import type { Route } from './+types/admin._index';
import { Form } from 'react-router';

export const loader = async ({ request }: Route.LoaderArgs) => {
  return {
    value: await cookie.parse(request.headers.get('Cookie')),
  };
};

export default function Component() {
  return (
    <div>
      <h3>Hello</h3>
      <p>If you can see this, then you have a valid cookie:</p>
      <Form method="post" action="/logout">
        <button className="btn btn-primary" type="submit">
          Logout
        </button>
      </Form>
    </div>
  );
}
