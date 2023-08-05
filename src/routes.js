import HeaderOnly from "./components/Layout/HeaderOnly";
import USER from "./components/User";
import Coins from "./pages/Coins";
import Explore from "./pages/Explore";
import Following from "./pages/Following";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Upload from "./pages/Upload";
import routes from "./config/routes";

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.following,
        component: Following,
        // layout: null
    },
    {
        path: routes.upload,
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: routes.explore,
        component: Explore,
        // layout: HeaderOnly
    },
    {
        path: routes.live,
        component: Live,
        // layout: HeaderOnly
    },
    {
        path: routes.profile,
        component: Profile
    },
    {
        path: routes.settings,
        component: Settings,
        layout: HeaderOnly
    },
    {
        path: routes.coins,
        component: Coins,
        layout: HeaderOnly
    },
    {
        path: routes.help,
        component: Help,
        layout: HeaderOnly
    }
]

export { publicRoutes };