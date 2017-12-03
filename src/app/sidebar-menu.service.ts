import { Injectable } from '@angular/core';

@Injectable()
export class SidebarMenuService {

  private collapsed: boolean;

  constructor() {
    this.collapsed = false;
  }

  changeView (): void {
    this.collapsed = !this.collapsed;
  }

  checkView (): boolean {
    return this.collapsed;
  }

}
