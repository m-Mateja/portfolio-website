import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer = new BehaviorSubject<number>(0);
  private intervalId: any;
  constructor() {
    this.startTimer()
  }

  private startTimer(): void {
    this.intervalId = setInterval(() => {
      this.timer.next(this.timer.value + 1);
    }, 1000);
  }

  getTimer(): Observable<number> {
    return this.timer.asObservable();
  }

  resetTimer(): void {
    this.timer.next(0);
  }

  stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
