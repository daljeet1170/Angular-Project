// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor() { }
}
