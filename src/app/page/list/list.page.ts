import { Component, OnInit } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

const showAlert = async () => {
  await Dialog.alert({
    title: 'Information!!!',
    message: '"In construction"',
  });
};

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  elements: any[] = [
    {"id": "1", "elementId": "D11-8", "description": "Element 1", "other": "information element 1"},
    {"id": "2", "elementId": "D11-9", "description": "Element 2", "other": "information element 2"},
    {"id": "3", "elementId": "D11-5", "description": "Element 3", "other": "information element 3"},
    {"id": "4", "elementId": "D11-2", "description": "Element 4", "other": "information element 4"}
  ];

  constructor() { }

  ngOnInit() {
  }

  async elementItemOnClick(){
    showAlert();
  }
}
