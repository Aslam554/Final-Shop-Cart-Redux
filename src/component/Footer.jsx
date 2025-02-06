import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[#3ba079]  text-white py-4 text-center mt-[-120px]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <p>&copy; 2025 Cart Redux by Aslam Beg | made with great love❤️ All rights reserved.</p>
                <div className="footer-links flex flex-wrap justify-center mt-2 md:mt-0">
                    <a href="/about" className="text-white no-underline mx-2 my-1 hover:underline">About Us</a>
                    <a href="/contact" className="text-white no-underline mx-2 my-1 hover:underline">Contact</a>
                    <a href="/privacy" className="text-white no-underline mx-2 my-1 hover:underline">Privacy Policy</a>
                    <a href="/terms" className="text-white no-underline mx-2 my-1 hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
