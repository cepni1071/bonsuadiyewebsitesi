// Bon Suadiye — paylaşılan Tailwind yapılandırması (tüm sayfalarda ortak)
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "inverse-primary": "#ffb4a8",
        "primary-fixed": "#ffdad5",
        "background": "#fff8f5",
        "primary-fixed-dim": "#ffb4a8",
        "outline-variant": "#e0bfba",
        "on-tertiary-fixed": "#241a0e",
        "on-secondary-container": "#656357",
        "surface-container-highest": "#e9e1dc",
        "on-tertiary-fixed-variant": "#524436",
        "on-error": "#ffffff",
        "inverse-on-surface": "#f8efea",
        "tertiary-fixed-dim": "#d7c3b0",
        "secondary-container": "#e4dfd1",
        "on-secondary-fixed-variant": "#49473c",
        "surface-container-high": "#efe6e2",
        "inverse-surface": "#34302c",
        "on-tertiary-container": "#dfcab7",
        "on-primary-fixed": "#410000",
        "on-error-container": "#93000a",
        "on-surface": "#1e1b18",
        "surface-tint": "#ab3427",
        "tertiary": "#4b3e30",
        "on-primary-fixed-variant": "#8a1c12",
        "primary-container": "#a12d21",
        "secondary": "#615e53",
        "outline": "#8c716d",
        "error-container": "#ffdad6",
        "on-tertiary": "#ffffff",
        "secondary-fixed": "#e7e2d4",
        "on-surface-variant": "#58413e",
        "surface-container-low": "#fbf2ed",
        "on-secondary-fixed": "#1d1c13",
        "on-primary-container": "#ffbeb4",
        "tertiary-container": "#645546",
        "primary": "#80140c",
        "on-secondary": "#ffffff",
        "on-primary": "#ffffff",
        "tertiary-fixed": "#f4dfcb",
        "surface-variant": "#e9e1dc",
        "surface-bright": "#fff8f5",
        "surface": "#fff8f5",
        "error": "#ba1a1a",
        "surface-dim": "#e1d8d4",
        "surface-container-lowest": "#ffffff",
        "on-background": "#1e1b18",
        "secondary-fixed-dim": "#cbc6b8",
        "surface-container": "#f5ece7"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "20px",
        "gutter": "24px",
        "base": "8px",
        "section-gap": "80px",
        "margin-desktop": "64px"
      },
      fontFamily: {
        "headline-md": ["Playfair Display"],
        "body-md": ["Work Sans"],
        "label-sm": ["Work Sans"],
        "headline-lg": ["Playfair Display"],
        "headline-lg-mobile": ["Playfair Display"],
        "headline-display": ["Playfair Display"],
        "body-lg": ["Work Sans"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "headline-lg-mobile": ["28px", { lineHeight: "34px", fontWeight: "400" }],
        "headline-display": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }]
      }
    }
  }
};
