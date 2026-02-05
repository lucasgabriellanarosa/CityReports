// src/components/CityImage.jsx
import { useState, useEffect } from 'react';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

async function getCityImageFromUnsplash(cityName, stateName) {
  try {
    const query = `${cityName} ${stateName} brasil cidade`;
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
    );

    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      return data.results[0].urls.regular;
    }
    
    return null;
  } catch (error) {
    console.error('Erro ao buscar imagem do Unsplash:', error);
    return null;
  }
}

function CityImage({ cityName, stateName = "", className = "" }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImage() {
      const url = await getCityImageFromUnsplash(cityName, stateName);
      setImageUrl(url);
      setLoading(false);
    }
    loadImage();
  }, [cityName, stateName]);

  if (loading) {
    return (
      <div className={`bg-linear-to-br from-green-400 to-emerald-600 animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={`${cityName}, ${stateName}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center">
          <span className="text-white text-xl font-bold drop-shadow-lg">
            {cityName}
          </span>
        </div>
      )}
    </div>
  );
}

export default CityImage;