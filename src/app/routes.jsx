import { createBrowserRouter } from "react-router";
import { Root } from "@/app/pages/Root";
import { Home } from "@/app/pages/Home";
import { Framework } from "@/app/pages/Framework";
import { FundamentalRights } from "@/app/pages/FundamentalRights";
import { FundamentalDuties } from "@/app/pages/FundamentalDuties";
import { Quiz } from "@/app/pages/Quiz";
import { AdminDashboard } from "@/app/pages/AdminDashboard";
import { EducatorDashboard } from "@/app/pages/EducatorDashboard";
import { ArticleDetail } from "@/app/pages/ArticleDetail";
import { NotFound } from "@/app/pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "framework", Component: Framework },
      { path: "fundamental-rights", Component: FundamentalRights },
      { path: "fundamental-duties", Component: FundamentalDuties },
      { path: "quiz", Component: Quiz },
      { path: "admin", Component: AdminDashboard },
      { path: "educator", Component: EducatorDashboard },
      { path: "article/:id", Component: ArticleDetail },
      { path: "*", Component: NotFound }
    ]
  }
]);
export {
  router
};
