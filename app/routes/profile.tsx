import { Outlet } from "@remix-run/react";
import ProfileHeader from "../components/navigation/ProfileHeader";



export default function Profile () {
    

    return<>
    <ProfileHeader />
    <Outlet />
    </>
}