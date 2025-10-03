// yahan main context api ko ek hi file mein rakh skta hooon 

import React from "react";

export const ThemeContext = React.createContext({
    //Yeh ab main createContext ke ander ek object banane jaa rha hoon
    themeMode : "light",
    darkTheme: () => {}, // Yeh main yhi method bana rha hoon jo ke context ke ander function ko call karsakta hai
    lightTheme: () => {}
})

//Maine upar context create kar liya h tm jb context create ho jaata h toh uspe ek provider bhi hona chahiye
//jo ke yeh hota h ThemeContext.Provider
//Ab main yeh provider ko export karunga
export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    //Yeh custom hook hai jisse main apne components mein use karunga
    const context = React.useContext(ThemeContext)
    return context
    //Yeh context mujhe pura object dega jisme themeMode, darkTheme aur lightTheme hoga

}
