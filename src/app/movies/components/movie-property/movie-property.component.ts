import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-movie-property',
  templateUrl: './movie-property.component.html',
  styleUrls: ['./movie-property.component.css']
})
export class MoviePropertyComponent implements OnInit {

  @Input("movie") movie: Movie | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateToDetails(movieId?: number) {
    if(movieId){
      this.router.navigate(['/movies', movieId]);
    }
  }

}



