// src/components/common/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Monetao - Harcamalarını Takip Et",
  description = "Gelir ve giderlerini kolayca yönet. Bütçeni takip et. Monetao ile kişisel finans kontrolü parmaklarının ucunda.",
  keywords = "monetao, bütçe, gelir gider takibi, finans uygulaması, kişisel finans",
  image = "https://monetao.com/assets/default-preview.jpg",
  url = "https://monetao.com",
}) => {
  return (
    <Helmet>
      {/* Temel Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
