import { useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { initMap } from '../utils/initMap';
import { generateNewMarker } from '../utils/generateNewMarker';

export const useMap = (container: React.RefObject<HTMLDivElement>) => {

    const mapInitRef = useRef<Map | null>(null);

    useEffect(() => {
        if (container.current) {

            mapInitRef.current = initMap(
                container.current,
                [-100.31019063199852, 25.66901932031443]
            );

        }
    }, []);


    useEffect(() => {
        mapInitRef.current && mapInitRef.current.on('dblclick', ({ lngLat }) => generateNewMarker({ map: mapInitRef.current!, ...lngLat }))

        return () => { mapInitRef.current?.off('dblclick', generateNewMarker) }
    }, [])

    
    useEffect(() => {
        mapInitRef.current && mapInitRef.current.on('load', () => generateNewMarker({ map: mapInitRef.current!, ...mapInitRef.current!.getCenter() }))

        return () => { mapInitRef.current?.off('load', generateNewMarker) }
    }, [])
}