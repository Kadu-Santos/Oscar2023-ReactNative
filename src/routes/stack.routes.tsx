import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Screen, Navigator } = createNativeStackNavigator();

import   Home   from "../app/(tabs)/index";
// import { TermsAndServices } from "../screens/TermsAndServices";
import  QuestionsScreen  from "../app/(tabs)/Question/ScreenQuestion"
import  Movies  from "../app/(tabs)/Movie/ScreenMovie";

export function StackRoutes() {
    return (
        <Navigator initialRouteName='Home'>
            <Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            {/* <Screen
                name='TermsAndServices'
                component={TermsAndServices}
                options={{
                    headerShown: false
                }}
            /> */}


            <Screen
                name='QuestionsScreen'
                component={QuestionsScreen}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name='Movies'
                component={Movies}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}