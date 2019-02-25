import { Component, OnInit } from '@angular/core';
import EntityData from '../../assets/entityData.json';
import EntityMeta from '../../assets/entityMeta.json';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  entityMeta: object;
  entityData: object;

  constructor() {
    this.entityMeta = EntityMeta;
    this.entityData = EntityData;
  }

  ngOnInit() {
    
  }

}