"use client";

import { useStyletron } from "baseui";
import Image from "next/image";

const PROJECTS = [
    {
        title: "Lumina Oracles",
        url: "https://luminaoracles.com",
        id: "P-01",
        status: "LIVE",
        thumbnail: "/luminaoracles.png",
    },
    {
        title: "Bibinii Farms",
        url: "https://bibiniifarms.com",
        id: "P-02",
        status: "LIVE",
        thumbnail: "/bibinii.png",
    },
    {
        title: "Phages and Biomes",
        url: "https://phagesandbiomes.com",
        id: "P-03",
        status: "LIVE",
        thumbnail: "/phages.png",
    },
    {
        title: "St. Louis Demo JHS",
        url: "https://stlouisdemojhs.com",
        id: "P-04",
        status: "LIVE",
        thumbnail: "/stlouis.png",
    },
];

export default function ProjectsPage() {
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
                paddingTop: "4rem", // space for potential fixed header
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
                    <div
                        className={css({
                            fontSize: "0.75rem",
                            color: "#888888",
                            marginBottom: "0.5rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                        })}
                    >
                        Directory // External Units
                    </div>
                    <h1
                        className={css({
                            fontSize: "3rem",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "-0.02em",
                            margin: 0,
                        })}
                    >
                        Deployed Projects
                    </h1>
                </div>
            </header>

            {/* Grid Container */}
            <div
                className={css({
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                    gap: "2rem",
                    padding: "0 2rem 4rem",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    width: "100%",
                })}
            >
                {PROJECTS.map((project) => (
                    <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css({
                            display: "block",
                            background: "#0a0a0a",
                            border: "1px solid #333333",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            position: "relative",
                            height: "350px",
                            overflow: "hidden",
                            ":hover": {
                                borderColor: "#ffffff",
                                transform: "translateY(-2px)",
                                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                            },
                        })}
                    >
                        {/* Knife Edge Corners */}
                        <div
                            className={css({
                                position: "absolute",
                                top: "-1px",
                                left: "-1px",
                                width: "12px",
                                height: "12px",
                                borderTop: "2px solid #ffffff",
                                borderLeft: "2px solid #ffffff",
                                zIndex: 20,
                            })}
                        />
                        <div
                            className={css({
                                position: "absolute",
                                bottom: "-1px",
                                right: "-1px",
                                width: "12px",
                                height: "12px",
                                borderBottom: "2px solid #ffffff",
                                borderRight: "2px solid #ffffff",
                                zIndex: 20,
                            })}
                        />

                        {/* Full-card static image thumbnail */}
                        <Image
                            src={project.thumbnail}
                            alt={`Screenshot of ${project.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            style={{
                                objectFit: "cover",
                                objectPosition: "top",
                            }}
                        />

                        {/* Gradient overlay for text readability */}
                        <div
                            className={css({
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 30%, transparent 60%)",
                                pointerEvents: "none",
                            })}
                        />

                        {/* Content Info - Overlaid at bottom */}
                        <div
                            className={css({
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: "1.5rem",
                                zIndex: 10,
                            })}
                        >
                            <div
                                className={css({
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "0.5rem",
                                    fontSize: "0.7rem",
                                    color: "#888888",
                                    fontFamily: "monospace",
                                })}
                            >
                                <span>ID: {project.id}</span>
                                <span className={css({ color: "#00ff00" })}>{project.status}</span>
                            </div>

                            <h3
                                className={css({
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    color: "#ffffff",
                                    textTransform: "uppercase",
                                    marginBottom: "0.25rem",
                                    letterSpacing: "0.05em",
                                })}
                            >
                                {project.title}
                            </h3>
                            <div
                                className={css({
                                    fontFamily: "monospace",
                                    fontSize: "0.7rem",
                                    color: "#666666",
                                })}
                            >
                                {project.url.replace("https://", "")}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    );
}

