import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SignInPage from "./components/SignInPage";
import ProfilePage from "./components/ProfilePage";
import PrivatRoute from "./components/PrivatRoute";

import "./styles.css";

ReactDOM.render(
  //обрабатывает на сервере динамические запросы
  //Route принимает path в виде prop который описывает определенный путь и сопоставляется с location.pathname.
  // Если установлен exact prop. Совпадает только строгое сравнение '/'
  //component — React компонент. Когда роут удовлетворяется сопоставление в path, то он возвращает переданный component
  //render — функция которая должна вернуть элемент React
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
    <Route path="/sign-in" component={SignInPage} />
    <PrivatRoute path="/profile" component={ProfilePage} />
  </BrowserRouter>,
  document.getElementById("root")
);
