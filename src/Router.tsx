import { Routes, Route } from "react-router-dom";

import { Home } from "./ pages/Home";
import { Checkout } from "./ pages/Checkout";
import { Success } from "./ pages/Success";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/success"
          element={
            <Success
              address={{
                street: "Rua João Daniel Martinelli",
                number: "102",
                neighborhood: "Farrapos",
                city: "Porto Alegre",
                state: "RS",
              }}
              deliveryTime="20 min - 30 min"
              paymentMethod="Cartão de crédito"
            />
          }
        />
      </Route>
    </Routes>
  );
}
