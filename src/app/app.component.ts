import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterbuttonComponent } from "./component/counterbutton/counterbutton.component";
import { CounterdisplayComponent } from "./component/counterdisplay/counterdisplay.component";
import { CustomcounterComponent } from "./component/customcounter/customcounter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterbuttonComponent, CounterdisplayComponent, CustomcounterComponent]
})
export class AppComponent {
  title = 'CounterApp';
}
