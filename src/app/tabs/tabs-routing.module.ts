import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';



const routes: Routes = [
  { path: '', redirectTo: '/r/home', pathMatch: 'full' },  
  {
    path: 'r', component: TabsPage, children: [
      { path: '', redirectTo: '/r/home', pathMatch: 'full' },
      { 
        path: 'home',
        children: [ 
          {
            path: '', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'editpost', loadChildren: () => import('../editpost/editpost.module').then(m => m.EditpostPageModule)
          },
          {
            path: ':r_thread', loadChildren: () => import('../thread/thread.module').then(m => m.ThreadPageModule)
          },
          {
            path: 'search/:r_searchedtexturi', loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
          }
        ] 
      },

      { 
        path: 'submitpost',
        children: [
          { path: '',
            loadChildren: () => import('../submitpost/submitpost.module').then( m => m.SubmitpostPageModule)
          }
        ]
        
      },
      { 
        path: 'editpost',
        children: [
          { path: '',
            loadChildren: () => import('../editpost/editpost.module').then( m => m.EditpostPageModule)
          }
        ]
        
      },
      { 
        path: 'search/:r_searchedtexturi',
        children: [
          { path: '',
            loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
          }
        ]
        
      },

      { path: 'admin_user',
      children: [
          { path: '', loadChildren: () => import('../admin_user/admin_user.module').then( m => m.Admin_userPageModule)},
        ]
      },

      { path: 'admin_post',
      children: [
          { path: '', loadChildren: () => import('../admin_post/admin_post.module').then( m => m.Admin_postPageModule)},
        ]
      },

      { path: 'admin_doc',
      children: [
          { path: '', loadChildren: () => import('../admin_doc/admin_doc.module').then( m => m.Admin_docPageModule)},
        ]
      },

      { path: 'bookmark',
      children: [
          { path: '', loadChildren: () => import('../bookmark/bookmark.module').then( m => m.BookmarkPageModule)},
        ]
      },
      
      { path: ':r_username',
      children: [
          { path: '', loadChildren: () => import('../folder/folder.module').then(m => m.FolderPageModule) },
          { path: ':r_folderid', loadChildren: () => import('../file/file.module').then(m => m.FilePageModule) }
        ]
      },

      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
