import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                fluid: [
                    "var(--font-size-fluid-0)",
                    {
                        lineHeight: "var(--font-lineheight-2)",
                        letterSpacing: "var(--font-letterspacing-0)",
                        fontWeight: "500",
                    },
                ],
                "2fluid": [
                    "var(--font-size-fluid-2)",
                    {
                        lineHeight: "var(--font-lineheight-0)",
                        letterSpacing: "var(--font-letterspacing-1)",
                        fontWeight: "600",
                    },
                ],
                "3fluid": [
                    "var(--font-size-fluid-3)",
                    {
                        lineHeight: "var(--font-lineheight-0)",
                        letterSpacing: "var(--font-letterspacing-1)",
                        fontWeight: "600",
                    },
                ],
                "4fluid": [
                    "var(--font-size-fluid-4)",
                    {
                        lineHeight: "var(--font-lineheight-0)",
                        letterSpacing: "var(--font-letterspacing-0)",
                        fontWeight: "600",
                    },
                ],
            },
            letterSpacing: {
                logo: "var(--font-letterspacing-5)"
            }
        },
    },
    plugins: [],
}
export default config
