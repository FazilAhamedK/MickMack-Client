import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DeviceService
{
  private isMobileSubject: BehaviorSubject<boolean>;
  public isMobile: Observable<boolean>;

  constructor()
  {
    this.isMobileSubject = new BehaviorSubject<boolean>(window.innerWidth < 768);
    this.isMobile = this.isMobileSubject.asObservable();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onWindowResize(): void
  {
    this.isMobileSubject.next(window.innerWidth < 768);
  }
}
