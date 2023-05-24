import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import { store } from "~/store";

function MyDocument() {
    return (
        <Html>
            <Head>
                
            </Head>
            <body>
                <Provider store={store}>
                    <Main />
                </Provider>
                    <NextScript />
            </body>
        </Html>
    );
}

export default MyDocument;
