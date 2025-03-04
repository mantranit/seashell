import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./app/layouts/main";
import Welcome from "./app/pages/welcome";
import Home from "./app/pages/home";
import ProductPage from "./app/pages/product";
import CategoryPage from "./app/pages/category";
import Television from "./app/pages/television";
import Connectivity from "./app/pages/connectivity";
import MyOrders from "./app/pages/my-orders";
import Movies from "./app/pages/movies";
import Radio from "./app/pages/radio";
import WakeUpCall from "./app/pages/wake-up-call";
import Messages from "./app/pages/messages";
import Feedback from "./app/pages/feedback";
import CheckBill from "./app/pages/check-bill";
import Flights from "./app/pages/flights";
import Settings from "./app/pages/settings";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

function App() {
  dayjs.extend(localizedFormat);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="television" element={<Television />} />
          <Route path="connectivity" element={<Connectivity />} />
          <Route path="dining" element={<CategoryPage identity="dining" />} />
          <Route
            path="dining/:productId"
            element={<ProductPage identity="dining" />}
          />
          <Route
            path="restaurants-bars"
            element={<CategoryPage identity="restaurants-bars" />}
          />
          <Route
            path="restaurants-bars/:productId"
            element={<ProductPage identity="restaurants-bars" />}
          />
          <Route
            path="spa-fitness"
            element={<CategoryPage identity="spa-fitness" />}
          />
          <Route
            path="spa-fitness/:productId"
            element={<ProductPage identity="spa-fitness" />}
          />
          <Route
            path="shopping"
            element={<CategoryPage identity="shopping" />}
          />
          <Route
            path="shopping/:productId"
            element={<ProductPage identity="shopping" />}
          />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="movies" element={<Movies />} />
          <Route path="radio" element={<Radio />} />
          <Route
            path="hotel-information"
            element={<CategoryPage identity="hotel-information" />}
          />
          <Route
            path="hotel-information/:productId"
            element={<ProductPage identity="hotel-information" />}
          />
          <Route
            path="room-service"
            element={<CategoryPage identity="room-service" />}
          />
          <Route
            path="room-service/:productId"
            element={<ProductPage identity="room-service" />}
          />
          <Route path="wake-up-call" element={<WakeUpCall />} />
          <Route path="messages" element={<Messages />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="check-bill" element={<CheckBill />} />
          <Route path="flights" element={<Flights />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
