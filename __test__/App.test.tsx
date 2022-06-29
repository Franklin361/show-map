import { render } from '@testing-library/react';
import App from '../src/App';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        off: jest.fn(),
        remove: jest.fn(),
    })),
    NavigationControl: jest.fn(),
}));

describe('📂 App.tsx', () => {
    test('🟣 Should show title', async () => {
        const { container} = render(<App />)
        expect(container.textContent).toContain('Show Map with MapBox')
    });
})