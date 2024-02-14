
export const angularData=[
    {
        ver2Component:[
        {"component":`
        import { Component } from '@angular/core'
  
        @Component ({
           selector: 'my-app',
           template:  '<div>
              <h1>{{appTitle}}</h1>
              <div>To Tutorials Point</div>
           </div> ',
        })
        
        export class AppComponent {
           appTitle: string = 'Welcome';
        }
        `},
        {
        "module":`import { NgModule }      from '@angular/core'; 
        import { BrowserModule } from '@angular/platform-browser';  
        import { AppComponent }  from './app.component';  
        
        @NgModule ({ 
           imports:      [ BrowserModule ], 
           declarations: [ AppComponent ], 
           bootstrap:    [ AppComponent ] 
        }) 
        export class AppModule { } `
        },
        {
            "directivengIf":`import { Component } from '@angular/core';  

            @Component ({
               selector: 'my-app',
               templateUrl: 'app/app.component.html'
            })
            
            export class AppComponent {
               appTitle: string = 'Welcome';
               appStatus: boolean = true;
            }
            
            in app.component.html
            <div *ngIf = 'appStatus'>{{appTitle}} Tutorialspoint </div> 
            `
        },
        {
            "directivengfor":`import { Component } from '@angular/core';
 
            @Component ({
               selector: 'my-app',
               templateUrl: 'app/app.component.html'
            })
            
            export class AppComponent {
               appTitle: string = 'Welcome';
               appList: any[] = [ {
                  "ID": "1",
                  "Name" : "One"
               },
            
               {
                  "ID": "2",
                  "Name" : "Two"
               } ];
            }
            
            // in app.component.html
            <div *ngFor = 'let lst of appList'> 
            <ul> 
               <li>{{lst.ID}}</li> 
               <li>{{lst.Name}}</li> 
            </ul> 
             </div> 
            `
        },
        {
            "dataDisplay":`import {
                Component
             } from '@angular/core';
             
             @Component ({
                selector: 'my-app',
                templateUrl: 'app/app.component.html'
             })
             
             export class AppComponent {
                TutorialName: string = 'Angular JS2';
                appList: string[] = ["Binding", "Display", "Services"];
             }

             // in app.component.html
             <div>
                The name of this Tutorial is {{TutorialName}}<br>
                The first Topic is {{appList[0]}}<br>
                The second Topic is {{appList[1]}}<br>
                The third Topic is {{appList[2]}}<br>
            </div>

            // in app.component.html

            this is just data in the html when typed in the html element
            <div>
                <input [value] = "name" (input) = "name = $event.target.value">
                {{name}}
            </div>
            `
        },
        {
            "formData":`<div class = "container">
            <h1>Product Form</h1>
                <form>
                    <div class = "form-group">
                        <label for = "productid">ID</label>
                        <input type = "text" class = "form-control" id = "productid" required
                        [(ngModel)] = "model.productid" name = "id">
                    </div>
               
                    <div class = "form-group">
                        <label for = "name">Name</label>
                        <input type = "text" class = "form-control" id = "name"
                        [(ngModel)] = "model.productname" name = "name">
                    </div>
                 </form>
             </div>
            `
        },
        {
            "service":`
            // Createing service class
            import { 
                Injectable 
             } from '@angular/core';  
             
             @Injectable()
             export class appService {  
                getApp(): string { 
                   return "Hello world"; 
                } 
             }

             //in component 
             import { Component } from '@angular/core'; 
             import { appService } from './app.service';  
             
             @Component ({ 
                selector: 'demo-app', 
                template: '<div>{{value}}</div>', 
                providers: [appService] 
             }) 
             
             export class AppComponent { 
                value: string = ""; 
                constructor(private _appService: appService) { }  
             
                ngOnInit(): void { 
                   this.value = this._appService.getApp(); 
                } 
             }
            `
        },
        {
            "routing":`
            // In the app.component.html file
            <ul>
            <li><a [routerLink] = "['/Product']">Product</a></li>
            <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
            </ul>
         <router-outlet></router-outlet>

             //in app.module.ts 
             const appRoutes: Routes = [ 
                { path: 'Product', component: Appproduct }, 
                { path: 'Inventory', component: AppInventory }, 
                { path: '**', component: PageNotFoundComponent } 
             ];  
             
             @NgModule ({ 
                imports: [ BrowserModule, 
                RouterModule.forRoot(appRoutes)], 
                declarations: [ AppComponent,Appproduct,AppInventory,PageNotFoundComponent], 
                bootstrap: [ AppComponent ] 
             }) 
             
             export class AppModule {
             } 
            `
        },
        
    ]
     }
]

export const angular4 = [
    {
        version4:[
            {"commands":`
            npm install -g @angular/cli //command to install angular 4
            ng new Angular 4-app // name of the project
            cd my-dream-app
            ng serve
            `},
            {"cliCmd":`
            ng generate component componentName   --for createing Component
            ng generate service serviceName        --for creating service
            ng generate directive directiveName      --for creating directive    
            ng generate pipe pipeName                --for creating pipe
            `},
            {"ifElse":`
            //in component.html

            <span *ngIf="isavailable; else condition1">Condition is valid.</span>
            <ng-template #condition1>Condition is invalid</ng-template>

            // in component.ts
            @Component({
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            })
            export class AppComponent implements OnInit {
                title = 'app works!';
                isavailable: boolean = false;
                ngOnInit() {
                }
            }
            `},
            {"Else":`
            //in component.html

            <span *ngIf="isavailable; else condition1">Condition is valid.</span>
            <ng-template #condition1>Condition is invalid</ng-template>

            // in component.ts
            @Component({
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            })
            export class AppComponent implements OnInit {
                title = 'app works!';
                isavailable: boolean = true;
                ngOnInit() {
                }
            }
            `},
            {"asFor":`
            //in component.html

            <div *ngFor="let i of months | slice:0:5 as total">
            Months: {{i}} Total: {{total.length}}
            </div>

            // in component.ts
            @Component({
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            })
            export class AppComponent implements OnInit {
                title = 'app works!';
                months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                ngOnInit() {
                }
            }
            `},
            {
                "animation":`
                Animation is available in  Angular2 also but it was available with @angular/core.
                In Angular4 Animation is available as a separate package we need to import from @angular/animations`
            }
        ]
    }
]
    
