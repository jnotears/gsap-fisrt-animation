import { Component, Directive, ElementRef, EventEmitter, Input, Output, ViewContainerRef} from '@angular/core';
import { TimelineMax } from 'gsap';
@Directive({
  selector: '[]'
})
export class CoreAnimationDirective {
  @Input() duration = 1;
  @Input() delay = 0;

  @Output() complete: EventEmitter<null> = new EventEmitter();
  @Output() reverseComplete: EventEmitter<null> = new EventEmitter();
  protected timeline: TimelineMax;

  constructor( protected element: ElementRef){

    this.element.nativeElement.addEventListener('animate-out', ({detail}) => {
      this.animateOut(detail.parentViewRef);
    })

    this.timeline = new TimelineMax({
      onComplete: _ => this.complete.emit(),
      onReserseComplete: _ => this.reverseComplete.emit(),
      paused: true,
      reversed: true
    });
  }

  protected animateIn(){
    if(this.timeline.isActive()){
      this.timeline.kill();
    }
    this.timeline.play();
  }

  protected animateOut(parentViewRef: ViewContainerRef){
    if(this.timeline.isActive()){
      this.timeline.kill();
    }
    setTimeout(_ => {
      if(parentViewRef){
        parentViewRef.clear();
      }
    }, this.duration * 1000);
  }

}
