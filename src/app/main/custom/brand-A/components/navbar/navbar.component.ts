import { Component, inject } from '@angular/core';
import { NavbarAbstractComponent } from '@base/abstracts/components/navbar.abstract';
import { GlobalService } from '@base/services/private/global.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent extends NavbarAbstractComponent {}