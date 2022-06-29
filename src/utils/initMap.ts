import { Map } from 'mapbox-gl';
import { getEnvironments } from './getEnviroments';

const { VITE_KEY } = getEnvironments()


export const initMap = (container: HTMLDivElement, coords: [number, number]) => {
    
    const map = new Map({
        container,
        style: 'mapbox://styles/mapbox/dark-v10',
        pitchWithRotate: false,
        center: coords,
        zoom: 15,
        accessToken: VITE_KEY,
        doubleClickZoom: false
    });
    return map
}