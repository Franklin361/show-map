// import 'jest-webgl-canvas-mock';
import { config } from 'dotenv';

config({
    path: '.env'
});

jest.mock('./src/utils/getEnviroments.ts', () => ({
    getEnvironments: () => ({ ...process.env })
}));