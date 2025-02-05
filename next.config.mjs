
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'i.ibb.co.com','10.0.80.85','10.0.80.85:5000','dimitristzitzi-backend.onrender.com','27.0.175.106'],
       
    },
};

export default withNextIntl(nextConfig);
