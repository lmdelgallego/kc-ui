import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'kc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @ViewChild('cardFooter', { read: ElementRef, static: true })
  cardFooter: ElementRef = {} as ElementRef;
  @ViewChild('cardHeader', { read: ElementRef, static: true })
  cardHeader: ElementRef = {} as ElementRef;

  hasFooter = false;
  hasHeader = false;

  constructor() {}

  ngOnInit() {
    this.hasFooter = !!this.cardFooter?.nativeElement.innerHTML;
    this.hasHeader = !!this.cardHeader?.nativeElement.innerHTML;
  }

  // ngAfterContentInit() {
  //   this.hasFooter = !!this.cardFooter?.nativeElement.innerHTML;
  //   this.hasHeader = !!this.cardHeader?.nativeElement.innerHTML;
  // }

}
