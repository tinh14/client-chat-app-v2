import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { ConversationDetailComponent } from './components/conversation-detail/conversation-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactFeaturesComponent } from './components/contact-features/contact-features.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReceivedContactRequestComponent } from './components/received-contact-requests/received-contact-requests.component';
import { SentContactRequestComponent } from './components/sent-contact-requests/sent-contact-requests.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SignInComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      },
      { path: '', redirectTo: 'signin', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'conversations',
        component: ConversationsComponent,
        children: [
          {
            path: '',
            component: WelcomeComponent
          },
          {
            path: ':id',
            component: ConversationDetailComponent
          }
        ]
      },
      {
        path: 'contactFeatures',
        component: ContactFeaturesComponent,
        children: [
          {
            path: 'contacts',
            component: ContactsComponent
          },
          {
            path: 'receivedContactRequests',
            component: ReceivedContactRequestComponent
          },
          {
            path: 'sentContactRequests',
            component: SentContactRequestComponent
          }
        ]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
