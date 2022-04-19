import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { MarsRoverPhotosService } from './mars-rover-photos.service';
import { NasaResponse } from './nasa-response-type';
import { cameraInfo } from './rover-camera-constants';

// Component with User input to select filters and load rover images

@Component({
  selector: 'app-rover-name',
  templateUrl: './mars-rover-photos.component.html',
  styleUrls: ['./mars-rover-photos.component.scss'],
  providers: [ MarsRoverPhotosService ],
})
export class MarsRoverPhotosComponent implements OnInit{ 

  constructor(private imageService: MarsRoverPhotosService) { 
    // Set initial image list to empty
    this.images = [];

    // Get rover and camera values from constants in service
    this.roverMap = imageService.getRoverInfo();

    // Clear result message
    this.resultMessage = undefined;
  }
  // data for dropdown menus from constants file
  roverMap: Map<string, cameraInfo[]>;

  // what should be returned back
  // all 3 will be ngModel
  // Selected Filters / API Parameters

  rover?: string;
  camera?: string;
  selectedDate?: string;

  // Info for user
  resultMessage?: string;

  // Get list of available rovers for dropdown menu
  get rovers(): string[] {
    return Array.from(this.roverMap.keys())
  }

  // Get list of available cameras for selected rover
  get cameras(): cameraInfo[] | undefined{
    if (typeof this.rover == 'undefined') {
      return [];
    }
    return this.roverMap.get(this.rover);
  }

  // collection of image URLs from NASA api
  images: string[];
  
  // Validates selected inputs, calls service to get photos from NASA API
  getImages() {
    // Validate inputs - makes sure none are undefined
    if ((typeof this.rover == 'undefined') || (typeof this.camera == 'undefined') || (typeof this.selectedDate == 'undefined')){
      this.resultMessage = 'Please select a rover, camera, and date.';
      return;
    }

    // Get request photos from service
    this.resultMessage = 'Requesting images...';
    this.imageService.getRoverPhoto(this.selectedDate, this.camera, this.rover)
    .subscribe((data: NasaResponse) => {
      
      // Clear current image list, set image urls returned from service
      this.resultMessage = 'Images retrieved, loading...';
      this.images = [];

      // Check for no images, or add URLS to list
      if (data.photos.length == 0) {
        this.resultMessage = 'No images found. Please try different values';
      } else {
        data.photos.forEach(currentPhoto =>  {
          this.images.push(currentPhoto.img_src);
        });
        this.resultMessage = `${data.photos.length} Images loaded. Click "Show Images" to search again.`;
      }
    
    });
  }

  ngOnInit(): void {
  }

}