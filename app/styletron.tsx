"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as StyletronClient, Server as StyletronServer } from "styletron-engine-atomic";
import { BaseProvider, LightTheme } from "baseui";

// Militant / Stealth Theme Overrides with forced 0px borders
const customTheme = {
    ...LightTheme,
    colors: {
        ...LightTheme.colors,
        // Backgrounds
        backgroundPrimary: "#000000",
        backgroundSecondary: "#0a0a0a",
        backgroundTertiary: "#111111",
        // Content
        contentPrimary: "#ffffff",
        contentSecondary: "#888888",
        contentTertiary: "#444444",
        // Borders
        borderOpaque: "#333333",
        borderTransparent: "rgba(255, 255, 255, 0.1)",
        // Button / Interactive
        buttonPrimaryFill: "#ffffff",
        buttonPrimaryText: "#000000",
        buttonPrimaryHover: "#cccccc",
        buttonSecondaryFill: "#111111",
        buttonSecondaryText: "#ffffff",
        buttonSecondaryHover: "#222222",
    },
    borders: {
        ...LightTheme.borders,
        radius200: "0px",
        radius300: "0px",
        radius400: "0px",
        useRoundedCorners: false,
    },
    typography: {
        ...LightTheme.typography,
        primaryFontFamily: '"Noto Sans", sans-serif',
    },
};

export function StyletronRegistry({ children }: { children: React.ReactNode }) {
    const [styletron] = useState(() => {
        if (typeof window === "undefined") {
            return new StyletronServer();
        } else {
            return new StyletronClient();
        }
    });

    useServerInsertedHTML(() => {
        if (typeof window !== "undefined") return null;

        const serverEngine = styletron as StyletronServer;
        const styles = serverEngine.getStylesheets() || [];

        return (
            <>
                {styles.map((sheet: { css: string; attrs: { [key: string]: string } }, i: number) => (
                    <style
                        className="_styletron_hydrate_"
                        dangerouslySetInnerHTML={{ __html: sheet.css }}
                        media={sheet.attrs.media}
                        data-hydrate={sheet.attrs["data-hydrate"]}
                        key={i}
                    />
                ))}
            </>
        );
    });

    return (
        <StyletronProvider value={styletron}>
            <BaseProvider theme={customTheme}>{children}</BaseProvider>
        </StyletronProvider>
    );
}
