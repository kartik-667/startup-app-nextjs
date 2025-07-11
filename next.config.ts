import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    dangerouslyAllowSVG:true,
    remotePatterns:[
       {
      protocol: "https",
      hostname: "img.freepik.com",
      pathname: "**",
    },
    {
      protocol: "https",
      hostname: "placehold.co",
      pathname: "**",
    },
    ]
  }
};

export default nextConfig;
