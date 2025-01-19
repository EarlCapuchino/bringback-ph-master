import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/MapComponent.module.css';
import L from 'leaflet';

// Fix for Leaflet marker issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;


const MapComponent = ({ location, onLocationChange, previewMode }) => {
    const [position, setPosition] = useState(location || [14.5995, 120.9842]);

    const mapRef = useRef(null);


    const LeafletMap = useMemo(() => dynamic(
      () =>
          import('react-leaflet').then((mod) => {
                const MapContainer = mod.MapContainer;
                const TileLayer = mod.TileLayer;
                const Marker = mod.Marker;
                const Popup = mod.Popup;
                 const useMapEvents = mod.useMapEvents;



                const MapEventsComponent = () => {
                   const map = useMapEvents({
                        click: (e) => {
                            if (previewMode) return;
                           setPosition([e.latlng.lat, e.latlng.lng]);
                            onLocationChange([e.latlng.lat, e.latlng.lng]);
                        }
                    });
                      return null;
                };

                return ({location, onLocationChange, previewMode, ...props}) => {
                         const [position, setPosition] = useState(location || [14.5995, 120.9842]);
                         const mapRef = useRef(null);
                          useEffect(() => {
                                if(location){
                                    setPosition(location);
                                    if (mapRef.current) {
                                          mapRef.current.flyTo(location, 13);
                                    }
                                }
                            }, [location]);

                    return   (
                        <MapContainer
                                  center={position}
                                zoom={location ? 13 : 10}
                                style={{ height: '100%', width: '100%' }}
                                    ref={mapRef}
                            >
                             <TileLayer
                                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                 <MapEventsComponent/>
                                    <Marker position={position}>
                                        {previewMode ? (
                                             <Popup>
                                                Preview Location
                                           </Popup>
                                        ): (
                                            <Popup>
                                                Your Location
                                            </Popup>
                                        )}
                                </Marker>

                        </MapContainer>

                    )

                };

            }),
    {
          ssr: false
      }), [previewMode, location, onLocationChange]);



    return (
        <div className={styles.mapContainer}>
              {LeafletMap && (
                  <LeafletMap
                    location={position}
                      onLocationChange={onLocationChange}
                     previewMode={previewMode}
                    />
               )}
        </div>
    );
};

export default MapComponent;