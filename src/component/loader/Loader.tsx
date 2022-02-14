import { Autorenew } from "@mui/icons-material";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import "./Loader.css";

interface LoaderProps {
    loading?: boolean
}
function Loader(props: LoaderProps) {
    let loading = useSelector((state: any) =>
        state.appReducer.showLoader, shallowEqual
    );

    return (
        ((loading || props.loading) &&
            <div>
                <div className="page-loader">
                    {/* <img src="/images/loader.gif" alt="loader" /> */}
                    <Autorenew />
                </div>
            </div>
        ) || null
    )
}

export default Loader;