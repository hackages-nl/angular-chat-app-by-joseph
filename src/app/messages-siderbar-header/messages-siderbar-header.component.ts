import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hc-messages-siderbar-header',
  template: `
    <div class="ph-head">
      <div class="ph-head-profile">
        <img src="assets/img/profile01.png" alt="" />
        <div>
          <h4>Jawad</h4>
          <!-- Placeholder for the lasttimeseen  -->
          <ng-content select=".status"></ng-content>
        </div>
      </div>
      <div class="ph-head-options">
        <ng-content select="button"></ng-content>
        <button class="dots-ph">
          <i class="fas fa-ellipsis-v"></i>
        </button>
        <!-- Placeholde for the contextual menu -->
        <hc-contextual-menu></hc-contextual-menu>
      </div>
    </div>
  `,
})
export class MessagesSiderbarHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
