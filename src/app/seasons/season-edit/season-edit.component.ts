import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { Character } from '../../operators/operator.model';
import { SiegeService } from '../../siege.service';
import { World } from 'src/app/worlds/world.model';
import { AuthService } from 'src/app/auth.service';
import { SeasonsComponent } from '../seasons.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-season-edit',
  templateUrl: './season-edit.component.html',
  styleUrls: ['./season-edit.component.css']
})
export class SeasonEditComponent implements OnInit {
  
  seasonOperators = [];
  seasonWorlds = [];
  @Input() seasonInput: Season;
  seasonById : Season;
  private sub : any;

  @Input() worldInput: World;

  seasonData: FormGroup;
  
  // seasonEdit;
  // seasonNewName = '';
  // seasonNewDesc = '';
  // seasonNewYear = 0;
  // seasonNewSeason = 0;
  // seasonOperators = [];
  // seasonWorlds = [];



  // seasonEditForm = {
  //     name: String,
  //     description: String,
  //     year: Number,
  //     season: Number,
  //     operator: Character,
  //     world: World
      
      
    
  // }

  constructor(
    private _auth: AuthService,
    private _router: Router, 
    private route: ActivatedRoute, 
    private _siegeService: SiegeService, 
    private _authService : AuthService, 
    private _seasonComp: SeasonsComponent,
    private fb : FormBuilder
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      return this._siegeService.getSeasonById(params.id)
      .subscribe(
        res => {
          this.seasonById = res
          //console.log(this.worldById)
        },
        err => {
          console.log(err)
        }
      ),
      this.seasonData = this.fb.group({
        name: ['',[Validators.required]],
        description:['', [Validators.required]],
        year:[null,[Validators.required]],
        season:[null,[Validators.required]],
        operator1:[null,[]],
        operator2:[null,[]],
        world:[null,[]]
      }),
    this._siegeService.getOperators()
    .subscribe(
      res => this.seasonOperators = res,
      err => console.log(err)
    ),
    this._siegeService.getWorlds()
    .subscribe(
      res => this.seasonWorlds = res,
      err => console.log(err)
    )
    })
     
  }

  get name() {
    return this.seasonData.get('name')
  }
  get description() {
    return this.seasonData.get('description')
  }
  get year() {
    return this.seasonData.get('year')
  }
  get season() {
    return this.seasonData.get('season')
  }
  get operator1() {
    return this.seasonData.get('operator1')
  }
  get operator2() {
    return this.seasonData.get('operator2')
  }
  get world() {
    return this.seasonData.get('world')
  }

  validateName() {
    return this.name.hasError('required') ? 'Voer een naam in' : '';
  }
  validateDescription() {
    return this.description.hasError('required') ? 'Voer een beschrijving in' : '';
  }
  validateYear () {
    return this.year.hasError('required') ? 'Voer een jaar in' : '';
  }
  validateSeason() {
    return this.year.hasError('required') ? 'Voer een seizoen in' : '';
  }

  editSeason() {
    this._siegeService.editSeason(this.seasonById._id, this.seasonData.value)
    .subscribe(
      res => {
        this._router.navigate(['/operations'])        
      }
    )
  }
  // editSeason() {
  //   if (this._authService.loggedIn) {
  //   this.seasonEdit = new Season(this.seasonById._id, this.seasonNewName, this.seasonNewDesc, this.seasonNewYear, this.seasonNewSeason)
  //   this._siegeService.editSeason (this.seasonById._id, this.seasonEdit)
  //   .subscribe(
  //     res => {
  //       this._seasonComp.refreshSeasons();
  //       console.log(res)
  //       this._router.navigate(['/operations'])
  //     },
  //     err => {
        
  //       console.log(err)
      
  //     }
  //   )}
  //   }

}
