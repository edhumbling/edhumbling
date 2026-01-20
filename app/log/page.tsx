"use client";

import { useStyletron } from "baseui";

export default function LogPage() {
    const [css] = useStyletron();

    return (
        <main
            className={css({
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                background: "#000000",
                color: "#ffffff",
                paddingTop: "4rem",
            })}
        >
            {/* Header Section */}
            <header
                className={css({
                    padding: "2rem",
                    borderBottom: "1px solid #333333",
                    marginBottom: "2rem",
                })}
            >
                <div
                    className={css({
                        maxWidth: "1400px",
                        margin: "0 auto",
                        width: "100%",
                    })}
                >
                    <a
                        href="/"
                        className={css({
                            fontSize: "0.75rem",
                            color: "#888888",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            textDecoration: "none",
                            ":hover": { color: "#ffffff" },
                        })}
                    >
                        ← Back to Home
                    </a>
                    <h1
                        className={css({
                            fontSize: "3rem",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "-0.02em",
                            margin: "1rem 0 0",
                        })}
                    >
                        01 // Log
                    </h1>
                </div>
            </header>

            {/* Content */}
            <div
                className={css({
                    padding: "0 2rem 4rem",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    width: "100%",
                })}
            >
                <p className={css({ color: "#888888", fontSize: "1.25rem" })}>
                    System entries pending...
                </p>
            </div>
        </main>
    );
}
