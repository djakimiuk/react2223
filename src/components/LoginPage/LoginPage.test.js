import { cleanup } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";

import { LoginPage } from "./LoginPage";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

afterEach(cleanup);

it("LoginPage component should be rendered properly", () => {
  // render(
  //   <BrowserRouter>
  //     <Provider store={store}>
  //       ...
  //     </Provider>
  //   </BrowserRouter>
  // );
  // sprawdzamy tu jedynie poprawne wyrenderowanie komponentu - metoda render z testing-library
});

it('After render "Sign in" button should be disabled', () => {
  // po wyrenderowaniu przycisk powinien być nieaktywny, sprawdzamy to metodą "..... .toBeDisabled()"
});

it('"Sign in" button should enabled after fill both input fields', () => {
  // po wyrenderowaniu przycisk powinien być nieaktywny
  // uzupełniamy pole firstName
  // uzupełniamy pole lastName
  // przysk powinien być aktywny
  // podpowiedź - const nameField = screen.getByTestId("name-field").querySelector("input");
  // aby użyć powyższego wyszukania powinieneś dodać właściwość "data-testid="name-field" dla oczekiwanego pola tekstowego w komponencie
});
