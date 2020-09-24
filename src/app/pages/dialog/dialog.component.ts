import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  loadIndicatorVisible = false;
  buttonText = 'Send';

  constructor() {}

  ngOnInit() {}

  onClick(_data) {
    this.buttonText = 'Sending';
    this.loadIndicatorVisible = true;

    setTimeout(() => {
      this.buttonText = 'Send';
      this.loadIndicatorVisible = false;
    }, 2000);
  }
}
