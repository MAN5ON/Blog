import React from "react";
import s from "../styles/templates/isLoading.module.scss";

export const IsLoading = () => {
    return (
        <div className={s.isLoading}>
            <div className={s.header}>Loading...</div>
            <div className={s.description}>
                Please wait while we download data from server to your device
            </div>
            <div className={s.spinnerLoading}></div>
        </div>
    );
};
