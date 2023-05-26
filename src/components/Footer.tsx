import React from "react";

const Footer = () => {
    return (
        <footer className="footer  footer-center mt-4 rounded bg-base-200 p-10 text-base-content">
            <div className="grid grid-flow-col gap-4">
                <a className="link-hover link">About us</a>
                <a className="link-hover link">Contact</a>
                <a
                    className="link-hover link"
                    href="https://github.com/Mohd-Muneeb/gro.care-assignment"
                    target="_blank"
                >
                    Github
                </a>
            </div>

            <div>
                <p>
                    Copyright © 2023 - All right reserved by Some Successful
                    Company Ltd
                </p>
            </div>
        </footer>
    );
};

export default Footer;
