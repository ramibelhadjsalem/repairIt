import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-type',
  templateUrl: './device-type.component.html',
  styleUrls: ['./device-type.component.scss']
})
export class DeviceTypeComponent implements OnInit {
  appType = [
    {name:"Acer"},
    {name:"Asus"},
    {name:"Dell"},
    {name:"Lenovo"},
    {name:"Samsung"},
    {name:"Apple"},
    {name:"Hp"},
    {name:"Toshiba"},
    {name:"Sony"},
    {name:"Clevo"},
    {name:"Gigabyte"},
    {name:"Acer"},
    {name:"Asus"},
    {name:"Dell"},
    {name:"Autre"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
