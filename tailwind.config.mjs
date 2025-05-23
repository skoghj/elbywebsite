/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          50: "#FDFDFC",
          100: "#FDFDFC",
          200: "#FBFBF8",
          300: "#FAFAF5",
          400: "#F8F8F2",
          500: "#F6F6EE",
          600: "#D5D5AF",
          700: "#B3B370",
          800: "#7F7F43",
          900: "#3F3F22",
          950: "#1E1E10",
        },
        sec_bl: {
          50: "#E9E9E7",
          100: "#D3D3CF",
          200: "#A7A7A0",
          300: "#7A7A71",
          400: "#4A4A45",
          500: "#1A1A18",
          600: "#151514",
          700: "#10100F",
          800: "#0B0B0A",
          900: "#050505",
          950: "#030302",
        },
        sec_be: {
          50: "#FDFDFC",
          100: "#FCFBF8",
          200: "#F8F6F1",
          300: "#F5F2EB",
          400: "#F1EDE4",
          500: "#EFEADF",
          600: "#CFC0A0",
          700: "#B19863",
          800: "#7A673D",
          900: "#3D341F",
          950: "#1F1A0F",
        },
        acc_yel: {
          50: "#FFFBF0",
          100: "#FFF7E0",
          200: "#FFEFC2",
          300: "#FFE7A3",
          400: "#FFDE85",
          500: "#FFD768",
          600: "#FFC31F",
          700: "#D69D00",
          800: "#8F6900",
          900: "#473400",
          950: "#241A00",
        },
        acc_gr: {
          50: "#EDFCF3",
          100: "#DCF9E8",
          200: "#BDF4D3",
          300: "#9AEFBC",
          400: "#7BEAA7",
          500: "#5AE491",
          600: "#24DB6D",
          700: "#1BA251",
          800: "#126E37",
          900: "#09351A",
          950: "#041A0D",
        },
        neu_db: {
          50: "#F1F0EE",
          100: "#E4E2DD",
          200: "#C8C5BB",
          300: "#ADA899",
          400: "#948D7A",
          500: "#736D5D",
          600: "#5D584B",
          700: "#444037",
          800: "#2D2B24",
          900: "#171512",
          950: "#0B0B09",
        },
        neu_dg: {
          50: "#F4FAF7",
          100: "#EAF5EF",
          200: "#D5ECDE",
          300: "#C3E4D0",
          400: "#AEDBC0",
          500: "#99D1AF",
          600: "#68BB89",
          700: "#449765",
          800: "#2C6242",
          900: "#163121",
          950: "#0B1911",
        },
      },
      spacing: {
        none: "0px",
        xxxs: "4px",
        xxs: "8px",
        xs: "16px",
        s: "24px",
        sm: "32px",
        m: "40px",
        md: "48px",
        ml: "56px",
        l: "64px",
        lg: "72px",
        xl: "80px",
        "2xl": "88px",
        "3xl": "96px",
        "4xl": "104px",
        "5xl": "112px",
        "6xl": "120px",
        "7xl": "128px",
        "8xl": "136px",
        "9xl": "144px",
        "10xl": "152px",
      },
      fontFamily: {
        title: ["Permanent Marker", "cursive"],
        body: ["Open Sans", "sans-serif"],
        knap: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "display-mobile": ["2.25rem", { lineHeight: "2.75rem" }], // 36px, 44px
        "h1-mobile": ["1.75rem", { lineHeight: "2.25rem" }], // ↓ 28px, 36px
        "h2-mobile": ["1.625rem", { lineHeight: "2.25rem" }], // 26px, 36px
        "h3-mobile": ["1.375rem", { lineHeight: "2rem" }], // 22px, 32px
        "h4-mobile": ["1.125rem", { lineHeight: "1.75rem" }], // 18px, 28px
        "h5-mobile": ["1rem", { lineHeight: "1.5rem" }], // 16px, 24px
        "h6-mobile": ["0.875rem", { lineHeight: "1.375rem" }], // 14px, 22px

        "body-sm": ["0.875rem", { lineHeight: "1.375rem" }], // 14px, 22px
        "body-md": ["1rem", { lineHeight: "1.5rem" }], // 16px, 24px
        "body-lg": ["1.25rem", { lineHeight: "2rem" }], // 20px, 32px

        /* Tablet */
        "display-tablet": ["3rem", { lineHeight: "3.75rem" }], // 48px, 60px
        "h1-tablet": ["2.25rem", { lineHeight: "3rem" }], // ↓ 36px, 48px
        "h2-tablet": ["2rem", { lineHeight: "2.75rem" }], // 32px, 44px
        "h3-tablet": ["1.75rem", { lineHeight: "2.5rem" }], // 28px, 40px
        "h4-tablet": ["1.5rem", { lineHeight: "2.125rem" }], // 24px, 34px
        "h5-tablet": ["1.25rem", { lineHeight: "1.875rem" }], // 20px, 30px
        "h6-tablet": ["1rem", { lineHeight: "1.625rem" }], // 16px, 26px

        "body-sm-tablet": ["0.875rem", { lineHeight: "1.375rem" }], // 14px, 22px
        "body-md-tablet": ["1rem", { lineHeight: "1.5rem" }], // 16px, 24px
        "body-lg-tablet": ["1.375rem", { lineHeight: "2rem" }], // 22px, 32px

        /* Desktop */
        "display-desktop": ["4.75rem", { lineHeight: "5.75rem" }], // 76px, 92px
        "h1-desktop": ["2.75rem", { lineHeight: "3.5rem" }], // ↓ 44px, 56px
        "h2-desktop": ["2.25rem", { lineHeight: "3rem" }], // 36px, 48px
        "h3-desktop": ["1.875rem", { lineHeight: "2.625rem" }], // 30px, 42px
        "h4-desktop": ["1.5rem", { lineHeight: "2.25rem" }], // 24px, 36px
        "h5-desktop": ["1.25rem", { lineHeight: "1.875rem" }], // 20px, 30px
        "h6-desktop": ["1rem", { lineHeight: "1.625rem" }], // 16px, 26px

        "body-sm-desktop": ["1rem", { lineHeight: "1.5rem" }], // 16px, 24px
        "body-md-desktop": ["1.125rem", { lineHeight: "1.75rem" }], // 18px, 28px
        "body-lg-desktop": ["1.5rem", { lineHeight: "2.25rem" }], // 24px, 36px
      },
      fontWeight: {
        light: "300",
        medium: "350",
        regular: "400",
        semibold: "600",
        bold: "700",
        black: "900",
      },
      border: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
      },
      borderRadius: {
        DEFAULT: "1.25rem",
        none: "0px",
        s: "5px",
        sm: "10px",
        m: "20px",
        md: "30px",
        lg: "40px",
        full: "9999px",
      },
      Shadow: {
        xs: "0px 0px 4px 0 rgb(3, 3, 2 / 0.20)",
        s: "0px 0px 8px 0 rgb(3, 3, 2 / 0.25)",
        sm: "0px 4px 4px 0 rgb(3, 3, 2 / 0.30)",
        m: "2px 5px 4px 0 rgb(3, 3, 2 / 0.35) ",
        md: "4px 8px 8px 0 rgb(3, 3, 2 / 0.40) ",
        lg: "0 4px 4px 0 rgb(3, 3, 2 / 1)",
      },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  },
};
