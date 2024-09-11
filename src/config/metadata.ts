import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'GymDAO',
  description:
    'GymDAO is a decentralized platform built on the blockchain, designed to reward users for engaging in regular physical activities. With a strong emphasis on health and cultivating healthy habits, GymDAO employs a meritocratic and innovative system to promote and sustain physical well-being.',
  icons: {
    icon: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png'
      }
    ]
  }
};
