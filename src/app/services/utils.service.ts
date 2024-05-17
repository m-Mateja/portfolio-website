import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  downArrowClicked: EventEmitter<any> = new EventEmitter<any>()

  downArrowEvent(data:any){
    this.downArrowClicked.emit(data)
  }
}
