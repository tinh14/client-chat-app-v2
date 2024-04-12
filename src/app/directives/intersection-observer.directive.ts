import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit {
  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.handleIntersection();
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  handleIntersection(): void {
    alert('Element is visible!');
    // Hoặc thực hiện các hành động khác khi phần tử được nhìn thấy
  }
}
