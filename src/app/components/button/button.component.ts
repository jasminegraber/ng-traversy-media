import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;

  @Output() btnClick = new EventEmitter(); // creates a reusable custom event

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
