import { Outlet } from "react-router-dom";

import Banner from "components/banner";

export default function StandardPage() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    );
};