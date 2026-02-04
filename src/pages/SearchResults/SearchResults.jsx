// pages/SearchResults.jsx
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const searchQuery = searchParams.get('q');
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  useEffect(() => {
    async function searchCities() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'
        );
        
        if (!response.ok) {
          throw new Error('Erro ao buscar cidades');
        }

        const allCities = await response.json();

        let filteredCities = [];

        if (searchQuery) {
          filteredCities = allCities.filter(city =>
            city.nome.toLowerCase().includes(searchQuery.toLowerCase())
          );
        } else if (lat && lng) {
          const citiesWithDistance = allCities.map(city => {
            const cityLat = city.microrregiao?.mesorregiao?.UF?.regiao?.latitude || 0;
            const cityLng = city.microrregiao?.mesorregiao?.UF?.regiao?.longitude || 0;
            
            const distance = Math.sqrt(
              Math.pow(parseFloat(lat) - cityLat, 2) +
              Math.pow(parseFloat(lng) - cityLng, 2)
            );

            return { ...city, distance };
          });

          filteredCities = citiesWithDistance
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 10);
        }

        setCities(filteredCities);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (searchQuery || (lat && lng)) {
      searchCities();
    }
  }, [searchQuery, lat, lng]);

  const handleCitySelect = (city) => {
    // Navegar para a página da cidade específica
    navigate(`/city/${city.id}`, {
      state: { 
        cityData: city 
      }
    });
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Buscando cidades...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-red-600 mb-4">❌ {error}</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Voltar para busca
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-sm pb-12">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <FaArrowLeft />
            <span>Voltar</span>
          </button>
          <h2 className="font-bold text-gray-800">
            Resultados para "{searchQuery || 'Sua localização'}"
          </h2>
        </div>

        {/* Contador de resultados */}
        <p className="text-gray-600 mb-4">
          {cities.length > 0 
            ? `${cities.length} cidade${cities.length > 1 ? 's' : ''} encontrada${cities.length > 1 ? 's' : ''}`
            : 'Nenhuma cidade encontrada'
          }
        </p>

        {/* Lista de resultados */}
        <div className="space-y-3">
          {cities.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <p className="text-gray-500 mb-4">
                😕 Nenhuma cidade encontrada com esse nome
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Tentar outra busca
              </button>
            </div>
          ) : (
            cities.map((city) => (
              <div
                key={city.id}
                onClick={() => handleCitySelect(city)}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 hover:border-green-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-green-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {city.nome}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">
                        {city.microrregiao.mesorregiao.UF.sigla}
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">
                        {city.microrregiao.mesorregiao.UF.nome}
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">
                        Região {city.microrregiao.mesorregiao.UF.regiao.nome}
                      </span>
                    </div>

                    <p className="text-gray-400 mt-2 text-xs">
                      Código IBGE: {city.id}
                    </p>
                  </div>

                  <div className="text-green-600">
                    →
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;