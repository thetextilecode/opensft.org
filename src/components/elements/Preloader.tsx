import React from "react";

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="text-center">
                            <h5 className="mb-5">Now Loading</h5>
                            <div className="loader">
                                <div className="bar bar1"></div>
                                <div className="bar bar2"></div>
                                <div className="bar bar3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;
