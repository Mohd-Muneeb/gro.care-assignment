import { type AppType } from "next/dist/shared/lib/utils";
import Navbar from "~/components/Navbar";
import { Provider } from "react-redux";
import "~/styles/globals.css";
import { store } from "~/store";

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <>
            <Provider store={store}>
                <Navbar Page={<Component {...pageProps} />} />
            </Provider>
        </>
    );
};

export default MyApp;
