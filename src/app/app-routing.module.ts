import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/post/create/create.component';
import { EditComponent } from './components/post/edit/edit.component';
import { IndexComponent } from './components/post/index/index.component';
import { ViewComponent } from './components/post/view/view.component';
import { XmlParserComponent } from './components/xml-parser/xml-parser.component';

const routes: Routes = [
  
    { path: '', component: XmlParserComponent,  },
    { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
    { path: 'post/index', component: IndexComponent },
    { path: 'post/:postId/view', component: ViewComponent },
    { path: 'post/create', component: CreateComponent },
    { path: 'post/:postId/edit', component: EditComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
