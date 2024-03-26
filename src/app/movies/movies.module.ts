import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePropertyComponent } from './components/movie-property/movie-property.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { BudgetPipe } from '../shared/pipes/budget.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';

@NgModule({
    declarations: [MoviePropertyComponent, MovieDetailsComponent, MovieFilterComponent, DurationPipe, BudgetPipe],
    providers: [MovieService],
    imports: [
        CommonModule, MoviesRoutingModule, HttpClientModule, FormsModule
    ]
})
export class MoviesModule { }
