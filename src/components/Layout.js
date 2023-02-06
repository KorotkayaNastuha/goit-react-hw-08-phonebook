import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navigation } from "./Navigation/Navigation";

export const Layout = () => {
    return (
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 16px' }}>
            <Navigation />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reversOrder={false}/>
        </div>
    )
}