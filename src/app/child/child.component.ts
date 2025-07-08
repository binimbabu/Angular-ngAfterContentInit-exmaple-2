import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') content!: ElementRef;
  @ContentChildren('item') items!: QueryList<ElementRef>;
  ngAfterContentInit(): void {
    if (this.content) {
      console.log('Content:', this.content.nativeElement.textContent);
    }
    this.items.forEach((item, index) => {
      console.log(`Item ${index + 1}:`, item.nativeElement.textContent);
    });
  }
}
