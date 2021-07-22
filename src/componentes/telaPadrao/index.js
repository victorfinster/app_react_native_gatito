import React from "react";
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import estilosPadrao, { cores } from "../../estilos";
import estilos from "./estilos";

export default function TelaPadrao({ children }) {
  return (
    <>
      <SafeAreaView style={estilos.ajusteTela}>
        <StatusBar backgroundColor={cores.roxo} />
        <KeyboardAvoidingView
          style={estilosPadrao.preencher}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
  );
}
