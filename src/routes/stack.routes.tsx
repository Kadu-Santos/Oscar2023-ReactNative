import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { TermsAndServices } from "../screens/TermsAndServices";
import { Student } from "../screens/Student";
import { Employee } from "../screens/Employee";
import { Age } from "../screens/Age";
import { QuestionsScreen } from "../screens/QuestionsScreen";
import { Movies } from "../screens/Movies";

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

            <Screen
                name='TermsAndServices'
                component={TermsAndServices}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name='Student'
                component={Student}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name='Employee'
                component={Employee}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name='Age'
                component={Age}
                options={{
                    headerShown: false
                }}
            />

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