import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes"
import { AppProvider } from "../components/AppContext";
import React from "react";

//Contexto de navegação (No caso, navegação do usuário)

export function Routes() {
    return (
        <NavigationContainer>
            <AppProvider>
                <StackRoutes />
            </AppProvider>
        </NavigationContainer>
    )
}