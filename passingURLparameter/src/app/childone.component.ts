import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
  templateUrl:"./childone.component.html"
})
export class ChildoneComponent{
  public varthree:any;
  public observerRef;
  constructor(private _route:ActivatedRoute){
    //this.varthree = this._route.snapshot.params["brand"];
    this.observerRef = this._route.params.subscribe(res=>{
      this.varthree = res["brand"];
    });
  }
  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }
}
