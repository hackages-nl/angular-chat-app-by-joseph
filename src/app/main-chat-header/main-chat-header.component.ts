import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hc-main-chat-header',
  template: `
    <div class="converseation-head">
      <div class="ch-profile">
        <img src="assets/img/profile03.png" alt="" />
        <div>
          <h4>Adam Ali</h4>
          <!-- Placeholder -->
          <ng-content></ng-content>
        </div>
      </div>
      <div class="more-info">
        <button class="moreinfo-button">
          <i class="fas fa-ellipsis-v"></i>
        </button>
        <!-- Placeholde for the contextual menu -->
        <hc-contextual-menu></hc-contextual-menu>
      </div>
    </div>
  `,
})
export class MainChatHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
