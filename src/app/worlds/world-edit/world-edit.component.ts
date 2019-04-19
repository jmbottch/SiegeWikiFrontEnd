import { Component, OnInit, Input } from '@angular/core';
import { World } from '../world.model';
import { Season } from '../../seasons/season.model';
import { SiegeService } from '../../siege.service';
import { AuthService } from 'src/app/auth.service';
import { OperatorsComponent } from 'src/app/operators/operators.component';
import { WorldsComponent } from '../worlds.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-world-edit',
  templateUrl: './world-edit.component.html',
  styleUrls: ['./world-edit.component.css']
})
export class WorldEditComponent implements OnInit {

  seasons = []
  @Input() world : World
  worldById : World
  private sub: any;
  
  worldEdit : FormGroup;
  
  

  constructor(
    private route: ActivatedRoute, 
    private _router: Router,
    private _siegeService: SiegeService, 
    private _authService : AuthService, 
    private _worldsComp: WorldsComponent,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    // return this._siegeService.getSeasons()
    // .subscribe(
    //   res => this.seasons = res,
    //   err => console.log(err)
    // )
    this.sub = this.route.params.subscribe(params => {
      
      //console.log(params['id']);
      return this.worldEdit = this.fb.group({
        name:['', [Validators.required]],
        description: ['',[Validators.required]],
        availableInRanked:[false, [Validators.required]],
        season:['',[Validators.required]]
      }),
      this._siegeService.getSeasons().subscribe(
        res => this.seasons = res,
        err => console.log(err)
      )
      ,this._siegeService.getWorldById(params.id)
      .subscribe(
        res => {
          this.worldById = res
          //console.log(this.worldById)
        },
        err => {
          console.log(err)
        }
      )
      
    })
  }

  editWorld() {
    console.log(this.worldEdit.value)
    this._siegeService.editWorld(this.worldById._id, this.worldEdit.value)
    .subscribe(
      res => {
        this._router.navigate(['/maps'])
        console.log(res)
        
      },
      err => console.log(err)
    )
      // if (this._authService.loggedIn) {
      //   this.worldEdit = new World(this.worldById._id, this.newName, this.newWorldDesc, this.newWorldRanked)
      //   this._siegeService.editWorld(this.worldEdit)
      //   .subscribe(
      //     res => {
      //       this._worldsComp.refreshWorlds();
      //       console.log(res)},
      //     err => {
      //       console.log(err)
      //       console.log("form: " + this.worldEdit.value)
      //     }
      //   )}
    }
    get name() {
      return this.worldEdit.get('name')
    }
    get description() {
      return this.worldEdit.get('description')
    }
    get availableInRanked() {
      return this.worldEdit.get('availableInRanked')
    }
    get season() {
      return this.worldEdit.get('season')
    }
    validateName() {
      return this.name.hasError('required') ? 'Voer een naam in' : '';
    }
    validateDescription() {
      return this.description.hasError('required') ? 'Voer een beschrijving in' : '';
    }
    validateAvailableInRanked() {
      return this.availableInRanked.hasError('required') ? 'Voer een keuze in' : '';
    }
    validateSeason() {
      return this.season.hasError('required') ? 'Voer een season in' : '';
    }
  }
    



