import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Link, useLocation, useParams } from 'react-router';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { FaSearch, FaMapMarkerAlt, FaPlus, FaLocationArrow } from 'react-icons/fa';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function MapPage() {
    const { cityId } = useParams();
    const location = useLocation();
    const cityData = location.state?.cityData;

    const [position, setPosition] = useState(null);
    const [address, setAddress] = useState({ street: "Carregando...", details: "" });
    const [loading, setLoading] = useState(false); 

    function LocationMarker() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setPosition([lat, lng]);
                fetchAddress(lat, lng);
            },
        });
        return position ? <Marker position={position} /> : null;
    }

    const fetchAddress = async (lat, lng) => {
        setLoading(true);
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
            const data = await response.json();
            
            const streetName = data.address.road || data.address.suburb || "Local identificado";
            const details = `${data.address.city_district || ''} ${data.address.city || ''}`;
            
            setAddress({ street: streetName, details: details });
        } catch (error) {
            setAddress({ street: "Erro ao buscar", details: "Tente novamente" });
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const getCityCoordinates = async () => {
            if (!cityData) return;
            try {
                const query = `${cityData.nome}, ${cityData.microrregiao.mesorregiao.UF.sigla}`;
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`
                );
                const data = await response.json();

                if (data && data.length > 0) {
                    const lat = parseFloat(data[0].lat);
                    const lon = parseFloat(data[0].lon);
                    setPosition([lat, lon]);
                    setAddress({
                        street: cityData.nome,
                        details: `Centro, ${cityData.microrregiao.mesorregiao.UF.sigla}`
                    });
                }
            } catch (error) {
                console.error("Erro ao localizar cidade:", error);
                setPosition([-23.5505, -46.6333]);
            }
        };

        getCityCoordinates();
    }, [cityData]);

    if (!position) {
        return (
            <div className="w-100vw flex h-[calc(100dvh-105px)] items-center justify-center">
                <div className="animate-pulse text-green-600 font-bold">Localizando {cityData?.nome}...</div>
            </div>
        );
    }

    return (
        <div className="relative -mx-4 h-[calc(100dvh-105px)] w-100vw overflow-hidden">
            
            {/* Barra de Busca */}
            <div className="absolute top-4 left-0 right-0 z-1001 px-4">
                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-md px-4 py-2 gap-2 border border-gray-100">
                    <FaSearch className="text-gray-400 size-4" />
                    <input
                        type="text"
                        placeholder="Pesquisar rua, bairro ou ponto..."
                        className="flex-1 outline-none text-sm bg-transparent"
                    />
                    <button className="text-green-500">🎤</button>
                </div>
            </div>

            {/* Mapa */}
            <MapContainer
                center={position}
                zoom={15}
                zoomControl={false}
                className="h-full w-full z-0"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
            </MapContainer>

            {/* Bottom Card */}
            <div className="absolute bottom-4 left-4 right-4 z-1001 bg-white rounded-3xl shadow-2xl p-5 border border-gray-100">
                <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>

                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Endereço Aproximado</span>
                        <h2 className="text-lg font-extrabold text-slate-800 leading-tight">
                            {loading ? "Buscando..." : address.street}
                        </h2>
                        <p className="text-gray-400 text-xs mt-1">{address.details}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                        <FaMapMarkerAlt size={20} />
                    </div>
                </div>

                <Link
                    to="/create-report"
                    state={{ position, address }}
                    className="flex items-center justify-center gap-3 bg-[#82f3a5] hover:bg-green-400 text-slate-800 font-bold py-4 rounded-2xl transition-all w-full shadow-md"
                >
                    <FaPlus size={14} />
                    Criar Denúncia Neste Local
                </Link>
            </div>
        </div>
    );
}

export default MapPage;