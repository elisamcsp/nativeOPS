import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 
import { GeolocationService } from 'src/app/service/geolocation.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  latitude : number;
  longitude : number;

  photo: SafeResourceUrl; 

  constructor(private sanitizer: DomSanitizer, private geolocationService: GeolocationService) { }

  ngOnInit() {  
    this.photo = 'https://pngimage.net/wp-content/uploads/2018/05/empty-image-png-7.png'; 
  }

  async takePicture() { 
    const image = await Camera.getPhoto({ 
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath)); 

   await this.geolocationService.getLocation().then((result) => {
    this.latitude = result.latitude;
    this.longitude = result.longitude;    
   }).catch;   
  }

}
