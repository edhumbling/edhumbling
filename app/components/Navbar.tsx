"use client";

import { useStyletron } from "baseui";
import { useState } from "react";

const MENU_ITEMS = [
    { label: "Log", href: "/log" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [css] = useStyletron();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation - Knife Edge Grid */}
            <nav
                className={css({
                    display: "none",
                    "@media screen and (min-width: 768px)": {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        gap: "1px",
                        background: "#333333",
                        maxWidth: "800px",
                        width: "100%",
                    },
                })}
            >
                {MENU_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={css({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1.5rem",
                            background: "#000000",
                            color: "#ffffff",
                            textTransform: "uppercase",
                            fontWeight: "700",
                            fontSize: "0.875rem",
                            letterSpacing: "0.1em",
                            textDecoration: "none",
                            transition: "background 0.2s, color 0.2s",
                            ":hover": {
                                background: "#ffffff",
                                color: "#000000",
                            },
                        })}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Mobile Navigation - System Menu Button */}
            <div
                className={css({
                    display: "flex", // Default to flex for mobile
                    marginTop: "2rem",
                    "@media screen and (min-width: 768px)": {
                        display: "none", // Hide on desktop
                    },
                })}
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className={css({
                        background: "#000000",
                        border: "1px solid #333333",
                        color: "#ffffff",
                        padding: "1rem 2rem",
                        textTransform: "uppercase",
                        fontFamily: "inherit",
                        fontWeight: "700",
                        letterSpacing: "0.1em",
                        cursor: "pointer",
                        width: "100%",
                        maxWidth: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        ":hover": {
                            borderColor: "#ffffff",
                        },
                    })}
                >
                    <span>System Menu</span>
                    <span>[ + ]</span>
                </button>
            </div>

            {/* Mobile Full Screen Overlay */}
            {isOpen && (
                <div
                    className={css({
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.98)",
                        zIndex: 100,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    })}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className={css({
                            position: "absolute",
                            top: "2rem",
                            right: "2rem",
                            background: "transparent",
                            border: "1px solid #333333",
                            color: "#ffffff",
                            padding: "0.5rem 1rem",
                            textTransform: "uppercase",
                            fontFamily: "inherit",
                            fontSize: "0.875rem",
                            cursor: "pointer",
                            ":hover": {
                                borderColor: "#ffffff",
                            },
                        })}
                    >
                        [ Close ]
                    </button>

                    {/* Mobile Links */}
                    <nav
                        className={css({
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",
                        })}
                    >
                        {MENU_ITEMS.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={css({
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "2rem",
                                    textTransform: "uppercase",
                                    fontWeight: "800",
                                    letterSpacing: "0.1em",
                                    position: "relative",
                                    ":hover": {
                                        textDecoration: "line-through",
                                        color: "#cccccc",
                                    },
                                })}
                            >
                                <span
                                    className={css({
                                        fontSize: "0.875rem",
                                        color: "#666666",
                                        position: "absolute",
                                        left: "-3rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                    })}
                                >
                                    0{index + 1}
                                </span>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Footer Info */}
                    <div
                        className={css({
                            position: "absolute",
                            bottom: "4rem",
                            color: "#444444",
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                        })}
                    >
                        Edhumbling Systems v.1.0.0
                    </div>
                </div>
            )}
        </>
    );
}
