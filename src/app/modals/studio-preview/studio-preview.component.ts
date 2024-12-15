import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component
({
  selector: 'mm-studio-preview',
  templateUrl: './studio-preview.component.html',
  styleUrl: './studio-preview.component.scss'
})
export class StudioPreviewComponent
{
  @Input("state")
  currentModalState: "show" | "hide" = "hide";
  
  @Output()
  modalHideEvent = new EventEmitter();

  constructor(private router: Router)
  { }

  hideModal($event: Event): void
  {
    const target = ($event.target as HTMLElement).id;

    if (target === "store-preview-modal-background" || target === "store-preview-modal-cancel")
    {
      this.currentModalState = "hide";
      this.modalHideEvent.emit();
    }
  }

  navigateToStore(): void
  {
    this.currentModalState = "hide";
    this.modalHideEvent.emit();
    this.router.navigateByUrl("studio");
  }
}