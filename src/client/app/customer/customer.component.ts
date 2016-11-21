import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-customer',
  templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }

}