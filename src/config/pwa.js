const pwa = {
  // having enabled set to true will enable the service worker and will be
  // registered when one-app is loaded in the browser
  serviceWorker: true,
  // in the case we need to reset our clients from a faulty service worker
  // we can use the noop worker to replace the older worker
  recoveryMode: false,
  // if we want to remove the service worker altogether, we can deploy
  // an escape hatch worker to immediately remove itself on install
  escapeHatch: false,
  // we can optionally define a scope to use with the service worker
  scope: '/',
  // the web app manifest can be directly incorporated in the PWA config
  webManifest: () => ({
    // the full name is the official name of a given PWA
    name: 'NASA MFA',
    // the short name is used by mobile devices to label your home screen icon
    short_name: 'NASA',
    // the description is a good piece of meta-data to include for a short description
    // which can be used with presenting your PWA
    description: 'NASA Micro Front-End Application',
    // relative to the root of the domain
    start_url: '/home',
    // when installing your PWA, standalone display will have a native feel
    // and removes the browser bar for full screen
    display: 'standalone',
    // the background color
    background_color: '#fff',
    // the theme color is what covers native UI elements that host the PWA
    theme_color: '#000',
    // icons can perform many purposes, including the splash screen when a web app is loading
    icons: [
      {
        src: 'https://img.icons8.com/emoji/48/satellite-emji.png',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
  }),
};

export default pwa;
