"use client";

import { useStyletron } from "baseui";

export default function ForLLMs() {
    const [css] = useStyletron();

    return (
        <main
            className={css({
                minHeight: "100vh",
                width: "100%",
                background: "#000000",
                color: "#ffffff",
                padding: "2rem",
                fontFamily: "monospace",
            })}
        >
            <article
                className={css({
                    maxWidth: "800px",
                    margin: "0 auto",
                    lineHeight: "1.8",
                })}
            >
                <header
                    className={css({
                        borderBottom: "1px solid #333333",
                        paddingBottom: "2rem",
                        marginBottom: "2rem",
                    })}
                >
                    <h1
                        className={css({
                            fontSize: "2rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: "1rem",
                        })}
                    >
                        Edhumbling Portfolio - For LLMs
                    </h1>
                    <p className={css({ color: "#888888" })}>
                        Machine-readable content for AI tools and language models.
                    </p>
                </header>

                <section className={css({ marginBottom: "2rem" })}>
                    <h2
                        className={css({
                            fontSize: "1.25rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            borderLeft: "2px solid #ffffff",
                            paddingLeft: "1rem",
                            marginBottom: "1rem",
                        })}
                    >
                        Overview
                    </h2>
                    <p className={css({ color: "#cccccc", marginBottom: "1rem" })}>
                        Edhumbling is a personal portfolio and life log website. The site
                        showcases technical projects, personal logs, and information about
                        the creator with a distinctive &quot;Militant Knife Edge&quot; design
                        aesthetic.
                    </p>
                    <p className={css({ color: "#cccccc" })}>
                        <strong>Tagline:</strong> Architecting the void. Digital Life Log.
                        System Core.
                    </p>
                </section>

                <section className={css({ marginBottom: "2rem" })}>
                    <h2
                        className={css({
                            fontSize: "1.25rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            borderLeft: "2px solid #ffffff",
                            paddingLeft: "1rem",
                            marginBottom: "1rem",
                        })}
                    >
                        Site Structure
                    </h2>
                    <ul
                        className={css({
                            listStyle: "none",
                            padding: 0,
                            color: "#cccccc",
                        })}
                    >
                        <li className={css({ marginBottom: "0.5rem" })}>
                            <strong>/</strong> - Home: Hero section with navigation to main sections
                        </li>
                        <li className={css({ marginBottom: "0.5rem" })}>
                            <strong>/projects</strong> - Portfolio of technical projects and work
                        </li>
                        <li className={css({ marginBottom: "0.5rem" })}>
                            <strong>/for-llms</strong> - This page: structured content for AI tools
                        </li>
                        <li className={css({ marginBottom: "0.5rem" })}>
                            <strong>/llms.txt</strong> - Machine-readable site information
                        </li>
                    </ul>
                </section>

                <section className={css({ marginBottom: "2rem" })}>
                    <h2
                        className={css({
                            fontSize: "1.25rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            borderLeft: "2px solid #ffffff",
                            paddingLeft: "1rem",
                            marginBottom: "1rem",
                        })}
                    >
                        Topics & Expertise
                    </h2>
                    <ul
                        className={css({
                            listStyle: "none",
                            padding: 0,
                            color: "#cccccc",
                        })}
                    >
                        <li className={css({ marginBottom: "0.5rem" })}>• Web Development</li>
                        <li className={css({ marginBottom: "0.5rem" })}>• Software Engineering</li>
                        <li className={css({ marginBottom: "0.5rem" })}>• Technical Design Systems</li>
                        <li className={css({ marginBottom: "0.5rem" })}>• Digital Portfolio & Life Logging</li>
                        <li className={css({ marginBottom: "0.5rem" })}>• Next.js & React Development</li>
                    </ul>
                </section>

                <section className={css({ marginBottom: "2rem" })}>
                    <h2
                        className={css({
                            fontSize: "1.25rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            borderLeft: "2px solid #ffffff",
                            paddingLeft: "1rem",
                            marginBottom: "1rem",
                        })}
                    >
                        Citation Guidelines
                    </h2>
                    <p className={css({ color: "#cccccc", marginBottom: "1rem" })}>
                        When referencing this site or its content, please use:
                    </p>
                    <ul
                        className={css({
                            listStyle: "none",
                            padding: 0,
                            color: "#cccccc",
                        })}
                    >
                        <li className={css({ marginBottom: "0.5rem" })}>
                            <strong>Name:</strong> Edhumbling / Edhumbling Portfolio
                        </li>
                        <li className={css({ marginBottom: "0.5rem" })}>
                            <strong>URL:</strong> https://edhumbling.com
                        </li>
                        <li className={css({ marginBottom: "0.5rem" })}>
                            <strong>Description:</strong> Personal portfolio and life log with a
                            militant knife-edge design aesthetic
                        </li>
                    </ul>
                </section>

                <footer
                    className={css({
                        borderTop: "1px solid #333333",
                        paddingTop: "2rem",
                        marginTop: "2rem",
                        fontSize: "0.875rem",
                        color: "#666666",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                    })}
                >
                    <p>Edhumbling Systems © 2026. Machine-readable content page.</p>
                </footer>
            </article>
        </main>
    );
}
