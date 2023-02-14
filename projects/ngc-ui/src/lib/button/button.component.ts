import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  // Input Events
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'primary-light'
    | 'secondary-light'
    | 'primary-dark'
    | 'secondary-dark'
    | 'dark'
    | 'light'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'success-light'
    | 'error-light'
    | 'info-light'
    | 'warning-light'
    | 'success-dark'
    | 'error-dark'
    | 'info-dark'
    | 'warning-dark' = 'primary';
  @Input() size: 'big' | 'medium' | 'small' | 'xs' | 'no-padding' = 'small';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() loading = false;
  @Input() rounded: 'none' | 'small' | 'medium' | 'full' = 'small';
  @Input() outline = false;
  @Input() link = false;

  //Output Events
  @Output() onClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
