import { Component, OnInit } from '@angular/core';
import {PostDetailService} from '../post-detail.service';
import {DeletePostServiceService} from './delete-post-service.service'
import { Post } from './post'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers : [PostDetailService]
})
export class DeleteComponent implements OnInit {


  title = 'app';
  postModel = new Post('','');
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  showMsg: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private deletePostService: DeletePostServiceService,
    private postDetailService :PostDetailService
  ) { }


  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }


  ngOnInit(): void {
    var object_id = this.route.snapshot.paramMap.get("object_id");

    this.postDetailService.getPostDetail(object_id).subscribe((data:any) =>{
      this.postModel = new Post(data.post_title,data.post_description)
      console.log(data)
    });
  }

  onSubmit() {
    console.log(`At the time of submission following is the data: ${this.postModel.post_title}`)
    this.submitted = true;
    this.deletePostService.delete(this.postModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
    this.showMsg = true;
  }

}
