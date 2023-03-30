import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'https://dummyjson.com/products/add';

@Injectable({
	providedIn: 'root'
})
export class TutorialService {

	constructor(private http: HttpClient) { }

	// Returns an Observable that fetches all the tutorials from the backend API.
	getAll(): Observable<Tutorial[]> {
		return this.http.get<Tutorial[]>(baseUrl);
	}

	// Returns an Observable that fetches a single tutorial with a specified `id`.
	get(id: any): Observable<Tutorial> {
		return this.http.get<Tutorial>(`${baseUrl}/${id}`);
	}

	// Returns an Observable that creates a new tutorial using the provided `data`.
	create(data: any): Observable<any> {
		return this.http.post(baseUrl, data);
	}

	// Returns an Observable that updates an existing tutorial with the specified `id` using the provided `data`.
	update(id: any, data: any): Observable<any> {
		return this.http.put(`${baseUrl}/${id}`, data);
	}

	// Returns an Observable that deletes a tutorial with the specified `id`.
	delete(id: any): Observable<any> {
		return this.http.delete(`${baseUrl}/${id}`);
	}

	// Returns an Observable that deletes all the tutorials.
	deleteAll(): Observable<any> {
		return this.http.delete(baseUrl);
	}

	// Returns an Observable that searches for tutorials with a specific `title`.
	findByTitle(title: any): Observable<Tutorial[]> {
		return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
	}

}