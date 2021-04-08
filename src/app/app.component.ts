import { Component, VERSION } from '@angular/core';
import { Estudiante, Profesor, Facultad } from '../model/Modelos';
//import { Profesor } from '../model/Profesor';
//import { Facultad} from '../model/Facultad';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
