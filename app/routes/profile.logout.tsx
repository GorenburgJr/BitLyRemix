import { json } from "@remix-run/react";
import { destroyUserSession } from "~/data/auth.server";
 
export async function action({ request }: {request: Request}) {
  if (request.method !== 'POST') {
    throw json({ message: 'Invalid request method' }, { status: 400 });
  }

  return await destroyUserSession(request); 
}