import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Router } from "./Router";
import { CartContextProvider } from "./contexts/Cart/CartContext";
import { FormOrderProvider } from "./contexts/Form/FormOrderContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <FormOrderProvider>
            <Router />
          </FormOrderProvider>
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
