"use client";

import { useStyletron } from "baseui";
import Navbar from "./components/Navbar";

export default function Home() {
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
      })}
    >
      {/* ===== Hero: The Knife Edge ===== */}
      <section
        className={css({
          width: "100%",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #333333",
        })}
      >
        {/* Background Grid */}
        <div
          className={`bg-grid ${css({
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            pointerEvents: "none",
          })}`}
        />

        {/* Diagonal Slice Effect */}
        <div
          className={css({
            position: "absolute",
            top: 0,
            left: "50%",
            width: "200%",
            height: "100%",
            background: "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.02) 41%, transparent 41%)",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          })}
        />

        {/* Content Container */}
        <div
          className={css({
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
          })}
        >
          {/* Technical Header */}
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "4rem",
              fontSize: "0.75rem",
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderBottom: "1px solid #333333",
              paddingBottom: "1rem",
            })}
          >
            <span>Sys.Status: Online</span>
            <span>Loc: Unknown</span>
            <span>v.1.0.0</span>
          </div>

          {/* Main Title */}
          <h1
            className={css({
              fontSize: "clamp(4rem, 12vw, 10rem)",
              fontWeight: "800",
              lineHeight: "0.85",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
            })}
          >
            <span className={css({ color: "#ffffff" })}>Edhum</span>
            <span
              className={css({
                color: "transparent",
                WebkitTextStroke: "1px #ffffff",
                opacity: 0.5,
              })}
            >
              Bling
            </span>
          </h1>

          {/* Subtitle / Mission */}
          <div
            className={css({
              maxWidth: "600px",
              marginBottom: "4rem",
              borderLeft: "2px solid #ffffff",
              paddingLeft: "1.5rem",
            })}
          >
            <p
              className={css({
                fontSize: "1.25rem",
                color: "#cccccc",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                lineHeight: "1.4",
              })}
            >
              Architecting the void. <br />
              Digital Life Log. System Core.
            </p>
          </div>

          {/* Navigation - Knife Edge Buttons */}
          {/* Navigation - Responsive Component */}
          <Navbar />
        </div>
      </section>

      {/* ===== Grid Section (About/Log) ===== */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1px",
          background: "#333333", // Grid lines
          borderBottom: "1px solid #333333",
        })}
      >
        {/* LOG SECTION */}
        <section
          id="log"
          className={css({
            background: "#0a0a0a",
            padding: "4rem 2rem",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          })}
        >
          {/* Corner markers */}
          <div className="knife-edge-box" style={{ width: '100%', height: '100%' }}>
            <div className={css({ padding: "2rem" })}>
              <h2
                className={css({
                  fontSize: "2rem",
                  marginBottom: "2rem",
                  borderBottom: "1px solid #333333",
                  paddingBottom: "1rem",
                  display: "inline-block",
                })}
              >
                01 // Log
              </h2>
              <p className={css({ color: "#888888" })}>
                System entries pending...
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className={css({
            background: "#0a0a0a",
            padding: "4rem 2rem",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
          })}
        >
          <div className="knife-edge-box" style={{ width: '100%', height: '100%' }}>
            <div className={css({ padding: "2rem" })}>
              <h2
                className={css({
                  fontSize: "2rem",
                  marginBottom: "2rem",
                  borderBottom: "1px solid #333333",
                  paddingBottom: "1rem",
                  display: "inline-block",
                })}
              >
                02 // About
              </h2>
              <p className={css({ color: "#888888" })}>
                Entity description loading...
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        className={css({
          padding: "2rem",
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#444444",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        })}
      >
        Edhumbling Systems © 2026. All rights reserved.
      </footer>
    </main>
  );
}
