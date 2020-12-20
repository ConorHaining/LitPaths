module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        '**/*.html',
        '**/*.ts',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        zIndex: {
          '0': '0',
          '250': '250',
          '500': '500',
          '750': '750',
          '1000': '1000',
          'top': '9999',
          'auto': 'auto'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
