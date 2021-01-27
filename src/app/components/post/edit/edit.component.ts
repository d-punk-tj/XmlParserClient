import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostService } from 'src/app/services/post/post.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: string;
  post!: Post;
  form!: FormGroup;

  constructor( public postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    console.log(this.id);
    this.postService.find(this.id).subscribe((data: Post)=>{
      console.log(data);
      this.post = data;
    });
    
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      image: new FormControl(''),
      link: new FormControl('', Validators.required),
    });
  }

  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(res => {
         console.log(res);
         this.router.navigateByUrl('post/index');
         this._snackBar.open("Post was Updated", "done", {
          duration: 4000,
        });
         
    })
  }

}
