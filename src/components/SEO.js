// components/SEO.js

import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const SEO = ({ title, description, image }) => {
  const siteName = 'Your Site Name'; // Replace with your site name

  return (
    <>
      <DefaultSeo
        title={title ? `${title} | ${siteName}` : siteName}
        description={description}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://yourwebsite.com', // Replace with your website URL
          site_name: siteName,
          title,
          description,
          images: [
            {
              url: image || 'https://yourwebsite.com/default-image.jpg', // Replace with your default image URL
              alt: title || siteName,
            },
          ],
        }}
      />
      <Head>
        {/* Any additional meta tags can be added here */}
      </Head>
    </>
  );
};

export default SEO;
