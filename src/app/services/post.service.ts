import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

const baseUrl = 'https://dummyjson.com/products/add';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	constructor(private http: HttpClient) { }

	// Returns an Observable that fetches all the posts from the backend API.
	getAll(): Observable<Post[]> {
		return this.http.get<Post[]>(baseUrl);
	}

	// Returns an Observable that fetches a single post with a specified `id`.
	get(id: any): Observable<Post> {
		return this.http.get<Post>(`${baseUrl}/${id}`);
	}

	// Returns an Observable that creates a new post using the provided `data`.
	create(data: any): Observable<any> {
		return this.http.post(baseUrl, data);
	}

	// Returns an Observable that updates an existing post with the specified `id` using the provided `data`.
	update(id: any, data: any): Observable<any> {
		return this.http.put(`${baseUrl}/${id}`, data);
	}

	// Returns an Observable that deletes a post with the specified `id`.
	delete(id: any): Observable<any> {
		return this.http.delete(`${baseUrl}/${id}`);
	}

	// Returns an Observable that deletes all the posts.
	deleteAll(): Observable<any> {
		return this.http.delete(baseUrl);
	}

	// Returns an Observable that searches for posts with a specific `title`.
	findByTitle(title: any): Observable<Post[]> {
		return this.http.get<Post[]>(`${baseUrl}?title=${title}`);
	}

}
