import type {FC} from "react";
import {RouterProvider} from "react-router/dom";
import {StoreProvider} from "@app/providers/StoreProvider.tsx";
//router
import {router} from "./router/router.tsx";
//styles
import '@styles/main.scss';

const App: FC = () => {
    return (
        <StoreProvider>
            <RouterProvider router={router}/>
        </StoreProvider>
    );
};

export default App;