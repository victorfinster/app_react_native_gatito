import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Rotas from "./src/Rotas";
import TelaPadrao from "./src/componentes/telaPadrao";
import Reactotron from "reactotron-react-native";

Reactotron.configure().useReactNative().connect();

export default function App() {
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
}
