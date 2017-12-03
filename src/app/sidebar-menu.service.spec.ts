import { TestBed, inject } from '@angular/core/testing';

import { SidebarMenuService } from './sidebar-menu.service';

describe('SidebarMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarMenuService]
    });
  });

  it('should be created', inject([SidebarMenuService], (service: SidebarMenuService) => {
    expect(service).toBeTruthy();
  }));
});
