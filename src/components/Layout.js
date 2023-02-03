import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reversOrder={false}/>
        </div>
    )
}