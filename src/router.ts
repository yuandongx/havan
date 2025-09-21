import {
  createBrowserRouter,
} from "react-router";

import Home from './pages/Home';
import Layout from './pages/Layout';
import StockShanghai from "./pages/Stock.shanghai";
import StockShenzheng from "./pages/Stock.shenzheng";
import FollowFund from "./pages/Follow.fund";
import FollowStock from "./pages/Follow.stock";
import TaskFund from "./pages/Task.fund";
import TaskStock from "./pages/Task.stock";
import FundLocal from "./pages/Fund.local";
import FundForeign from "./pages/Fund.foreign";

export default createBrowserRouter([
  {
    path: "/",
    Component: Layout ,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/stock/shanghai",
        Component: StockShanghai,
      },
      {
        path: "/stock/shenzheng",
        Component: StockShenzheng,
      },
      {
        path: "/task/fund",
        Component: TaskFund,
      },
      {
        path: "/task/stock",
        Component: TaskStock,
      },
      {
        path: "/follow/fund",
        Component: FollowFund,
      },
      {
        path: "/follow/stock",
        Component: FollowStock,
      },
      {
        path: "/fund/local",
        Component: FundLocal,
      },
      {
        path: "/fund/foreign",
        Component: FundForeign,
      },
    ]
  },
],
)
