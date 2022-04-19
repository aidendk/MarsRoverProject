import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cameraInfo, roverCameraMap } from './rover-camera-constants';
import { NasaResponse } from './nasa-response-type';
import { environment } from 'src/environments/environment';

// Service that provides access to NASA API and constant rover camera lists
@Injectable({
  providedIn: 'root'
})
export class MarsRoverPhotosService {
  
  constructor(private http: HttpClient) {
   }
   
   // add these two to service spec test to test

   // Takes in parameters and retrieves photo info from NASA API using given parameters from user
   getRoverPhoto(earth_date: string, camera: string, rover: string) {
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?camera=${camera}&earth_date=${earth_date}&api_key=${environment.apiKey}`;
    return this.http.get<NasaResponse>(url);
   }

   // Gets constant info from constant rover camera list 
   getRoverInfo(): Map<string, cameraInfo[]> {
    return roverCameraMap;

   }
}
