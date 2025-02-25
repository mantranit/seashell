import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./app/layouts/main";
import Welcome from "./app/pages/welcome";
import Home from "./app/pages/home";
import Settings from "./app/pages/settings";
import RestaurantsBars from "./app/pages/restaurants-bars";
import Television from "./app/pages/television";
import Connectivity from "./app/pages/connectivity";
import SpaFitness from "./app/pages/spa-fitness";
import Dining from "./app/pages/dining";
import Shopping from "./app/pages/shopping";
import MyOrders from "./app/pages/my-orders";
import Movies from "./app/pages/movies";
import Radio from "./app/pages/radio";
import HotelInformation from "./app/pages/hotel-information";
import RoomService from "./app/pages/room-service";
import WakeUpCall from "./app/pages/wake-up-call";
import Messages from "./app/pages/messages";
import Feedback from "./app/pages/feedback";
import CheckBill from "./app/pages/check-bill";
import Flights from "./app/pages/flights";

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
          <Route path="dining/*" element={<Dining />} />
          <Route path="restaurants-bars" element={<RestaurantsBars />} />
          <Route path="spa-fitness" element={<SpaFitness />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="movies" element={<Movies />} />
          <Route path="radio" element={<Radio />} />
          <Route path="hotel-information" element={<HotelInformation />} />
          <Route path="room-service" element={<RoomService />} />
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
