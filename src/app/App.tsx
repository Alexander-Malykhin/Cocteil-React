import type {FC} from "react";
import {RouterProvider} from "react-router/dom";
//router
import {router} from "./router/router.tsx";
//styles
import '@styles/main.scss';

const App: FC = () => {
    return <RouterProvider router={router}/>;
};

export default App;