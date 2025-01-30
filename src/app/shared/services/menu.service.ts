import {Injectable, signal, Signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isMenuOpen = signal(false);
  constructor() { }

  getIsMenuOpen(): boolean {
    return this.isMenuOpen();
  }

  setIsMenuOpen(isMenuOpen: boolean): void {
    this.isMenuOpen.set(isMenuOpen);
  }
}
