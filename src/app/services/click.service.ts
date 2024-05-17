import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private clickCount = new BehaviorSubject<number>(0);

  constructor() {}

  incrementClickCount(): void {
    this.clickCount.next(this.clickCount.value + 1);
  }

  getClickCount(): Observable<number> {
    return this.clickCount.asObservable();
  }
}
