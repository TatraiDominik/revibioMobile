import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <><Stack.Screen name="homeView" options={{ title: 'Home' }} />
        <Stack.Screen name="login" options={{ title: 'LogIn' }} />
        <Stack.Screen name="register" options={{ title: 'Register' }} />
        <Stack.Screen name="bioList" options={{ title: 'Bio list' }} />
        </>
    );
}