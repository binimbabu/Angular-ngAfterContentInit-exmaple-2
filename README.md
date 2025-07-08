ngAfterContentInit

ngAfterContentInit is a lifecycle hook in Angular that's used within component classes to act after Angular has projected external content into the component's view using content projection (<ng-content>).

🔹 When is ngAfterContentInit Called?
It is called once after Angular has fully initialized all content projected into the component via <ng-content>. It's part of the AfterContentInit lifecycle interface.

You typically use ngAfterContentInit to interact with or modify projected content, like accessing content children using @ContentChild() or @ContentChildren().

@ContentChildren allows a component to query multiple projected child elements or directives (i.e., those passed using <ng-content> from a parent component).

You typically use it with QueryList to interact with multiple elements or directives projected into the component.


app.component.html

<app-child>
  <p #projectedContent>This is projected content</p>
</app-child>
<div card-header>
  <app-child>
    <li #item>Item 1</li>
    <li #item>Item 2</li>
    <li #item>Item 3</li>
  </app-child>
</div>


child.component.html

<p>child works!</p>
<ng-content></ng-content>


child.component.ts

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

