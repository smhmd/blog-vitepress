module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['.vitepress/theme/**/*.vue', '*.md'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
