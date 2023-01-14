import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
  // { path: '', redirectTo: LOGIN_URL, pathMatch: 'full' },
{
  path: 'auth',
  loadChildren: () => import('./modules/authentication/authentication.module')
  .then(m => m.AuthenticationModule)
},
// {
//   path: 'acs-callback',
//   loadChildren: () => import('./modules/azure-sso-callback/azure-sso-callback.module')
//   .then(m => m.AzureSSOCallbackModule), data: { title: 'ACS', titleI18n: 'acs' },
// },
// {
//   path: 'slo-callback',
//   loadChildren: () => import('./modules/azure-slo-callback/azure-slo-callback.module')
//   .then(m => m.AzureSloCallbackModule), data: { title: 'SLO', titleI18n: 'slo' },
// },
// {
//   path: 'duo-callback',
//   loadChildren: () => import('./modules/duo-callback/duo-callback.module')
//   .then(m => m.DuoCallbackModule), data: { title: 'Duo Callback', titleI18n: 'duo callback' },

// },
// {
//   path: 'account-request',
//   loadChildren: () => import('@modules/saas-user-signup/account-request.module').then(m => m.AccountRequestModule)
// },
// {
//   path: 'saas',
//   loadChildren: () =>
//     loadRemoteModule({
//         remoteEntry: saasAppUrl,
//         remoteName: 'tefitiSaasApp',
//         exposedModule: './ModuleContainer'
//     })
//     .then(m => m.ModuleContainerModule)
// },
// {
//   path: 'nms',
//   loadChildren: () =>
//     loadRemoteModule({
//         remoteEntry: nmsAppUrl,
//         remoteName: 'tefitiNms',
//         exposedModule: './ModuleContainer'
//     })
//     .then(m => m.ModuleContainerModule)
// },
// { path: '**',
//   redirectTo: LOGIN_URL
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
