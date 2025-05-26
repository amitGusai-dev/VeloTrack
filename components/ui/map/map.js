/** @format */
import mapboxgl from "!mapbox-gl";
import { useEffect, useRef, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import tw from "tailwind-styled-components";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYW1pdGRvdGRldiIsImEiOiJjbWI0eWJjMTMxcmZoMmpzYTB2N3NjODM2In0.vyzUNJdqBAz-3v2qiWcg1w";

const Map = () => {
    const mapRef = useRef(null);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        // Get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation([
                        position.coords.longitude,
                        position.coords.latitude,
                    ]);
                },
                () => {
                    // If user denies or fails, fallback to India
                    setUserLocation([77.209, 28.6139]); // Delhi
                }
            );
        } else {
            setUserLocation([77.209, 28.6139]); // Delhi
        }
    }, []);

    useEffect(() => {
        if (!mapRef.current || !userLocation) return;

        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
            center: userLocation,
            zoom: 12,
        });

        new mapboxgl.Marker({ color: "blue" })
            .setLngLat(userLocation)
            .addTo(map);

        return () => map.remove();
    }, [userLocation]);

    return <Wrapper ref={mapRef} />;
};

export default Map;

const Wrapper = tw.div`
w-full flex-1 min-h-[400px] lg:min-h-[600px]`;
