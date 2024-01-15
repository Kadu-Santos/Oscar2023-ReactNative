import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes"
import React from "react";

//Contexto de navegação (No caso, navegação do usuário)

export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}