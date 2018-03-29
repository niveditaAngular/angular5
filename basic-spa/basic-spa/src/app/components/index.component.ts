import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector:"basic-spa",
    templateUrl: "./index.Component.html"
})

export class IndexComponent{
    constructor (private router:Router)
    {

    }
    clickMe(){
        this.router.navigate(['/page_three']);
    }
}