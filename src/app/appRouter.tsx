import BaseLayout from "./layouts/BaseLayout";
// 
import { createBrowserRouter, RouteObject } from "react-router-dom";
// 
import { MainPage } from "../pages/MainPage";
import { ErrorPage } from "../pages/ErrorPage";
import { ContactsPage } from "../pages/ContactsPage";
import { AboutPage } from "../pages/AboutPage";
import { CorporatePage } from "../pages/CorporatePage";
import { ProfilePage } from "../pages/ProfilePage";
import { ArticlesPage } from "../pages/ArticlesPage";
import { ArticleViewPage } from "../pages/ArticleViewPage";
import { TourDetailView } from "../pages/TourDetailView";


const routes: RouteObject[] = [
    { path: '/', element: <MainPage /> },
    { path: '/contacts', element: <ContactsPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/corporate', element: <CorporatePage /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '/articles', element: <ArticlesPage /> },
    // 
    { path: '/articles-view/:slug', element: <ArticleViewPage /> },
    { path: '/tour-view/:slug', element: <TourDetailView /> },

];

const appRouter = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <ErrorPage />,
        children: routes,
    }
]);

export default appRouter;


