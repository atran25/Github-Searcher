import React from 'react'

const Footer = () => {
    const footerYear = new Date().getFullYear()

    return (
        <footer className="footer p-5 mb-2 shadow-lg bg-neutral text-neutral-content footer-center">
            <div>Copyright &copy; {footerYear}</div>
        </footer>
    )
}

export default Footer;