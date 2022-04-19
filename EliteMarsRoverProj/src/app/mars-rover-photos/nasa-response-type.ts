// template for json data returned by the NASA api
// https://api.nasa.gov/index.html#browseAPI - Mars Rover Photos API

export interface NasaPhoto {
    id: number,
    sol: number,
    camera: {
        id: number,
        name: string,
        rover_id: number,
        full_name: string,
    },
    img_src: string,
    earth_date: string,
    rover: {
        id: number,
        name: string,
        landing_date: string,
        launch_date: string,
        status: string
    },

}

export interface NasaResponse {
photos: NasaPhoto[]

}