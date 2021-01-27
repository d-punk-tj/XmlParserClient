import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XmlParserComponent } from './components/xml-parser/xml-parser.component';

const routes: Routes = [
  
    { path: '', component: XmlParserComponent,  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
