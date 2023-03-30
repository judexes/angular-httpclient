import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup, Validators, UntypedFormBuilder, UntypedFormGroup, NgForm, FormControl } from '@angular/forms';

@Component({
	selector: 'app-add-post',
	templateUrl: './add-post.component.html',
	styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
	
	addPostForm: UntypedFormGroup;

	post: Post = {
		title: '',
		description: '',
		published: false
	};
	submitted = false;

	constructor(
		private postService: PostService,
		private _formBuilder: FormBuilder) {
		
		this.addPostForm = this._formBuilder.group({
			// title: ['', Validators.required],
			title: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(50)
			]),
			description: ['', [Validators.required ]],
		});
	}

	savePost(): void {
		const data = {
			title: this.addPostForm.value.title,
			description: this.addPostForm.value.description,
		};

		console.log(data);
		this.postService.create(this.addPostForm.value)
			.subscribe({
				next: (res) => {
					console.log(res);
					this.submitted = true;
				},
				error: (e) => console.error(e)
			});
	}

	newPost(): void {
		this.submitted = false;
		this.post = {
			title: '',
			description: '',
			published: false
		};
	}

	onSubmit() {
		console.log(this.addPostForm.value);
	}

}
