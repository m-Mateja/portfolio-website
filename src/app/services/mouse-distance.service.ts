import {Injectable, NgZone} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MouseDistanceService {

  private totalDistance: number = 0;
  private startX: number = 0;
  private startY: number = 0;
  private previousX: number = 0;
  private previousY: number = 0;
  private firstMove: boolean = true;
  private distanceSubject: Subject<number> = new Subject<number>();

  constructor(private ngZone: NgZone) { }

  startTracking() {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('mousemove', this.onMouseMove)
    });
  }

  stopTracking() {
    window.removeEventListener('mousemove', this.onMouseMove)
  }

  private onMouseMove = (event: MouseEvent) => {
    if (this.firstMove) {
      this.startX = event.clientX
      this.startY = event.clientY
      this.previousX = this.startX
      this.previousY = this.startY
      this.firstMove = false
    } else {
      const deltaX = event.clientX - this.previousX
      const deltaY = event.clientY - this.previousY
      this.totalDistance += Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.0254 / 96
      this.previousX = event.clientX
      this.previousY = event.clientY
    }
    this.distanceSubject.next(this.totalDistance)
  }

  getDistance(): Observable<number> {
    return this.distanceSubject.asObservable()
  }
}
