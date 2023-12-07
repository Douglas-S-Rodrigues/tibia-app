import MyContext from "./MyContext";


function AppProvider({children}) {
    return (
        <MyContext>
            {children}
        </MyContext>
    );
}

export default AppProvider;