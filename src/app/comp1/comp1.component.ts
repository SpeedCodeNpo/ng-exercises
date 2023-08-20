import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../http-service/http-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  httpService = inject(HttpService);

  constructor() {
    this.httpService.getUser().subscribe((response) => {
      console.log(
        `email is : "${response.results[0].email}"\n gender is : ${response.results[0].gender}`
      );
    });
  }

  //=============================================
  // Functions
  //=============================================

  /**
   * Function to get user data
   */
  onClickGetUser() {}

  ngOnInit() {
    // const myImage = this.httpService.getUser();
  }
} //end comp1

//========================================
//========================================
//========================================
//
/**
 * 
 in angular, in a component, when i get a png file as response to http, how do i pass the image to the component's  template ?
 ==================
 Sure, here are the steps on how to pass a PNG file as response to HTTP in an Angular component's template:

Create a service that will handle the HTTP request. The service should have a method that returns a promise of the PNG file.
In the component, inject the service and call the method to get the PNG file.
Use the @Input() decorator to bind the PNG file to a property in the component.
In the template, use the src attribute of the img element to bind the property to the image.
Here is an example of how to do this:

// service.ts
export class FileService {
  getPngFile() {
    return new Promise((resolve, reject) => {
      // make the HTTP request
      const response = await fetch('/api/png-file');
      if (response.status === 200) {
        const pngFile = await response.blob();
        resolve(pngFile);
      } else {
        reject(new Error('File not found'));
      }
    });
  }
}

// component.ts
import { Component, Input } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'my-component',
  templateUrl: './component.html',
})
export class MyComponent {
  @Input() pngFile;

  constructor(private fileService: FileService) {}

  ngOnInit() {
    // get the PNG file from the service
    this.fileService.getPngFile().then((pngFile) => {
      this.pngFile = pngFile;
    });
  }
}

// component.html
<img src="{{pngFile}}" />

In this example, the FileService service has a method called getPngFile() that returns a promise of the PNG file. The MyComponent component injects the FileService service and calls the getPngFile() method in its ngOnInit() lifecycle hook. The getPngFile() method makes an HTTP request to the /api/png-file endpoint. If the request is successful, the method returns the PNG file as a Blob object. The MyComponent component binds the PNG file to a property called pngFile using the @Input() decorator. In the template, the img element uses the src attribute to bind the pngFile property to the image.
 */
