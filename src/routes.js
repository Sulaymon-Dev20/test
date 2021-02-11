import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import RouteProps from "views/RouteProps.js";
import Upgrade from "views/Upgrade.js";
import Time from "views/Time";
import test from "./views/test";

const dashboardRoutes = [
    {
        upgrade: true,
        path: "/upgrade",
        name: "Upgrade to PRO",
        icon: "nc-icon nc-alien-33",
        component: Upgrade,
        layout: "/admin",
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-chart-pie-35",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/user",
        name: "User Profile",
        icon: "nc-icon nc-circle-09",
        component: UserProfile,
        layout: "/admin",
    },
    {
        path: "/table",
        name: "Table List",
        icon: "nc-icon nc-notes",
        component: TableList,
        layout: "/admin",
    },
    {
        path: "/typography",
        name: "Typography",
        icon: "nc-icon nc-paper-2",
        component: Typography,
        layout: "/admin",
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "nc-icon nc-atom",
        component: Icons,
        layout: "/admin",
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: "nc-icon nc-bell-55",
        component: Notifications,
        layout: "/admin",
    },
    {
        path: "/maps",
        name: "Maps",
        icon: "nc-icon nc-pin-3",
        component: Maps,
        layout: "/admin",
    },
    {
        path: "/routeProps",
        name: "Route Props",
        icon: "nc-icon nc-bus-front-12",
        component: RouteProps,
        layout: "/admin",
    },
    {
        path: "/myStation",
        name: "My Station",
        icon: "nc-icon nc-attach-87",
        component: Time,
        layout: "/admin",
    },
    {
        path: "/test",
        name: "My test",
        icon: "nc-icon nc-attach-87",
        component: test,
        layout: "/admin",
    },
];

export default dashboardRoutes;
