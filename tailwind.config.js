module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Primary
        softred: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        graphicdesigntext: 'hsl(167, 40%, 24%)',
        photographytext: 'hsl(198, 62%, 26%)',
        
        // Neutral        
        footer: 'hsl(168, 32%, 55%);',
        verydarkdesaturatedblue: 'hsl(212, 27%, 19%)',
        verydarkgrayishblue: 'hsl(213, 9%, 39%)',
        darkgrayishblue: 'hsl(232, 10%, 55%)',
        grayishblue: 'hsl(210, 4%, 67%)',
        White: 'hsl(0, 0%, 100%)',
        hov: 'hsla(0, 0%, 100%, 0.37);'
      },

      fontFamily: {
        sans: ['Barlow'],
        serf: ['Fraunces']
      },

      backgroundImage: {
        // Header section
        desktop: "url('../public/images/desktop/image-header.jpg')",
        mobile: "url('../public/images/mobile/image-header.jpg')",
      },

      height: {
        viewportH: '90vh',
        viewportD: '75vh'
      },


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
