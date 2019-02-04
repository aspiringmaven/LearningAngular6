import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsPrivacyComponent } from './settings-privacy/settings-privacy.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';

const routes: Route[] = [
{path: 'home', component: HomeComponent},
{
  path: 'settings',
  component: SettingsComponent,
  children: [
    {path: 'privacy', component: SettingsPrivacyComponent},
    {path: 'profile', component: SettingsProfileComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
