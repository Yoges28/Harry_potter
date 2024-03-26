import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = []; 
  titleFilter: string = '';
  releaseYearFilter: string = '';
  loading: boolean = true;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {

    this.loading = true;


    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.filtersApply();
      this.loading = false;
    });
  }

  loadingMovies() {
    this.movieService.getMovies().pipe(tap(s => console.log(s))).subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  navigateToDetails(movieId: number) {
    this.router.navigate(['/movies', movieId]);
  }

  filtersApply(): void {
    this.filteredMovies = this.movies.filter((movie: Movie) =>
      movie?.title?.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
      this.filtersByYear(movie?.release_date)
    );
  }

  filtersByYear(releaseDate?: string): boolean {
    if (!this.releaseYearFilter || !releaseDate) {
      return true; 
    }

    const yearFromReleaseDate = new Date(releaseDate).getFullYear().toString();
    return yearFromReleaseDate.includes(this.releaseYearFilter);
  }


}



