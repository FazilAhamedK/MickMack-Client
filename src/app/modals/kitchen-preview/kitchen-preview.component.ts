import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component
({
  selector: 'mm-kitchen-preview',
  templateUrl: './kitchen-preview.component.html',
  styleUrl: './kitchen-preview.component.scss'
})
export class KitchenPreviewComponent
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

    if (target === "kitchen-preview-modal-background" || target === "kitchen-preview-modal-cancel")
    {
      this.currentModalState = "hide";
      this.modalHideEvent.emit();
    }
  }

  navigateToKitchen(): void
  {
    this.currentModalState = "hide";
    this.modalHideEvent.emit();
    this.router.navigateByUrl("kitchen");
  }
}