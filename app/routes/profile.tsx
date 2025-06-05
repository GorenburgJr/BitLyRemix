import { Outlet } from "@remix-run/react";
import ProfileHeader from "../components/navigation/ProfileHeader";
import { requireUserSession } from "~/data/auth.server";



export default function Profile () {
    return<>
    <ProfileHeader />
    <Outlet />
    </>
}

export async function loader({ request }: {request: Request}) {
    return await requireUserSession(request)
}