import { Component } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "loading-spinner",
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: `
    <div class="flex">
      <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
    </div>
  `,
  styles: `
    :host{
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 9999;
    }

    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
  `
})
export class LoadingSpinner {}