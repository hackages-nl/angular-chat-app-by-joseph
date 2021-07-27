import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagesSidebarComponent } from './messages-sidebar/messages-sidebar.component';
import { MessagesSiderbarHeaderComponent } from './messages-siderbar-header/messages-siderbar-header.component';
import { MessagesSearchComponent } from './messages-search/messages-search.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { MainChatHeaderComponent } from './main-chat-header/main-chat-header.component';
import { ContextualMenuComponent } from './contextual-menu/contextual-menu.component';
import { ConservationListComponent } from './conservation-list/conservation-list.component';
import { ConservationItemComponent } from './conservation-item/conservation-item.component';
import { DividerComponent } from './divider/divider.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { InfoSidebarHeaderComponent } from './info-sidebar-header/info-sidebar-header.component';
import { InfoSidebarDetailsComponent } from './info-sidebar-details/info-sidebar-details.component';
import { InfoSidebarMediaListComponent } from './info-sidebar-media-list/info-sidebar-media-list.component';
import { InfoSidebarMediaItemComponent } from './info-sidebar-media-item/info-sidebar-media-item.component';
import { InfoSidebarInfoComponent } from './info-sidebar-info/info-sidebar-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MessagesSidebarComponent,
    MessagesSiderbarHeaderComponent,
    MessagesSearchComponent,
    ChatListComponent,
    ChatItemComponent,
    MainChatComponent,
    MainChatHeaderComponent,
    ContextualMenuComponent,
    ConservationListComponent,
    ConservationItemComponent,
    DividerComponent,
    NewMessageComponent,
    InfoSidebarComponent,
    InfoSidebarHeaderComponent,
    InfoSidebarDetailsComponent,
    InfoSidebarMediaListComponent,
    InfoSidebarMediaItemComponent,
    InfoSidebarInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
