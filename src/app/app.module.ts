import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { RouterModule } from '@angular/router';
import { ConversationListComponent } from './components/conversation-list/conversation-list.component';
import { ConversationDetailComponent } from './components/conversation-detail/conversation-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ScrollToBottomDirective } from './directives/scroll-to-bottom.directive';
import { ContactFeaturesComponent } from './components/contact-features/contact-features.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ReceivedContactRequestComponent } from './components/received-contact-requests/received-contact-requests.component';
import { SentContactRequestComponent } from './components/sent-contact-requests/sent-contact-requests.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserProfileModalComponent } from './components/user-profile-modal/user-profile-modal.component';
import { ChangePasswordModalComponent } from './components/change-password-modal/change-password-modal.component';
import { GroupConversationModalComponent } from './components/group-conversation-modal/group-conversation-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { JoinGroupConversationModalComponent } from './components/join-group-conversation-modal/join-group-conversation-modal.component';
import { FindContactModelComponent } from './components/find-contact-modal/find-contact-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './components/toast/toast.component';
import { RxStompService } from '@stomp/ng2-stompjs';
import { StompService } from './services/stomp.service';
import { ViewModalComponent } from './components/view-modal/view-modal.component';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { VoiceRecorderModalComponent } from './components/voice-recorder-modal/voice-recorder-modal.component';
import { DeleteAccountModalComponent } from './components/delete-account-modal/delete-account-modal.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ConversationsComponent,
    ConversationListComponent,
    ConversationDetailComponent,
    PageNotFoundComponent,
    ScrollToBottomDirective,
    ContactFeaturesComponent,
    ContactsComponent,
    ReceivedContactRequestComponent,
    SentContactRequestComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    WelcomeComponent,
    UserProfileModalComponent,
    ChangePasswordModalComponent,
    GroupConversationModalComponent,
    ConfirmModalComponent,
    JoinGroupConversationModalComponent,
    FindContactModelComponent,
    ToastComponent,
    ViewModalComponent,
    MessageComponent,
    VoiceRecorderModalComponent,
    DeleteAccountModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NgbToastModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    RxStompService,
    StompService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
