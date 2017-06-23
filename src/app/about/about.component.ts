import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  public ngOnInit() { this.log(`onInit`); }
  private log(msg: string) {
    console.log(msg);
  }
}
