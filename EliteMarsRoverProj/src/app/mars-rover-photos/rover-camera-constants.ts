// Rover to Camera Mapping - camera availability per rover, based on current documentation - hard code  
// https://api.nasa.gov/index.html#browseAPI - Mars Rover Photos API

import { map } from "rxjs"

export type cameraInfo = {
    // type - information about rover cameras, template
    shortName: string,
    fullName: string

}

export const roverCameraMap = new Map<string, cameraInfo[]> ( [
    // constant, stores the values of roverInfo
    [ 'Curiosity', 
         [
            {
                shortName: 'FHAZ',
                fullName: 'Front Hazard Avoidance Camera'
            },
            {
                shortName: 'RHAZ',
                fullName: 'Rear Hazard Avoidance Camera'
            },
            {
                shortName: 'MAST',
                fullName: 'Mast Camera'
            },
            {
                shortName: 'CHEMCAM',
                fullName: 'Chemistry and Camera Complex'
            },
            {
                shortName: 'MAHLI',
                fullName: 'Mars Hand Lens Imager'
            },
            {
                shortName: 'MARDI',
                fullName: 'Mars Descent Imager'
            },
            {
                shortName: 'NAVCAM',
                fullName: 'Navigation Camera'
            },
        ]
    ],
    [ 'Opportunity',
        [
            {
                shortName: 'FHAZ',
                fullName: 'Front Hazard Avoidance Camera'
            },
            {
                shortName: 'RHAZ',
                fullName: 'Rear Hazard Avoidance Camera'
            },
            {
                shortName: 'NAVCAM',
                fullName: 'Navigation Camera'
            },
            {
                shortName: 'PANCAM',
                fullName: 'Panoramic Camera'
            },
            {
                shortName: 'MINITES',
                fullName: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
            },
        ]
    ],
    [ 'Spirit',
       [
            {
                shortName: 'FHAZ',
                fullName: 'Front Hazard Avoidance Camera'
            },
            {
                shortName: 'RHAZ',
                fullName: 'Rear Hazard Avoidance Camera'
            },
            {
                shortName: 'NAVCAM',
                fullName: 'Navigation Camera'
            },
            {
                shortName: 'PANCAM',
                fullName: 'Panoramic Camera'
            },
            {
                shortName: 'MINITES',
                fullName: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
            },
        ]
    ],

])