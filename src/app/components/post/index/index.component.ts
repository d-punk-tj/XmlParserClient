import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post/post.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }

  deletePost(id: string){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item._id !== id);
         this._snackBar.open("Post was Deleted", "done", {
          duration: 4000,
        });
    })
  }

}
