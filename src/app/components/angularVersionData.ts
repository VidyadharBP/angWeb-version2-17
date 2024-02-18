
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

export const angular5 = [
    {
        version5:[
            {
                "httpclient":`import { HttpClientModule } from '@angular/common/http';`
            },
            {
                "alias":`
                //With aliases, defineing components in shared module:
                
                export const header = HeaderComponent;
                export const footer = FooterComponent;
                export const sidebar = SidebarComponent;

                //Then our import stamemts become

                import { header, footer, sidebar } from './shared';
                `
            },
            {
                "localeSupport":`
                //before angular5 
                import { NgModule } from '@angular/core';
                import { CommonModule, DeprecatedI18NPipesModule } from '@angular/common';

                @NgModule({
                    imports: [CommonModule,// import deprecated module after DeprecatedI18NPipesModule]
                })
                export class AppModule { }
                `
            },
            {
                "decSupport":`
                //before angular5

                Component({
                    provider: [{provide: 'token', useValue: calculated()}]
                  })
                  export class MyClass {}

                // In angualr5 
                Component({
                    provider: [{provide: 'token', useFactory: () => null}]
                  })
                  export class MyClass {} 
                `
            },
            {
                "whiteSpace":`
                // app.component.ts

                import { Component } from '@angular/core';

                @Component({
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrl: './app.component.scss',
                preserveWhitespaces:true
            })
            export class AppComponent { }


        /* If you want to restrict them throughout the application level then below
         is the sample code in config.json file. */
  
            "angularCompilerOptions": { 
                "preserveWhitespaces": false 
            }
             `
             } 
        ]
    }
]

export const angualr6 = [
    {
        "version6":[
            {
                "service":`
                // In service class

                import { Injectable } from '@angular/core';
                @Injectable({
                        providedIn: 'root'
                    })
                export class MyService {
                    // ...
                }
                `
             },
             {
                "ngTemp":`
                // templete with *ngIf and else

                <span *ngIf="isavailable; else condition1">Condition is valid.</span>
                <ng-template #condition1>Condition is invalid</ng-template>
                `
             }
        ]
    }
]

export const angular7 = [
    {
        "version7":[
            {
                "virtualScr":`

                import { CdkVirtualScrollViewportModule } from '@angular/cdk/scrolling';
                
                @NgModule({
                imports: [
                    // ... other imports
                    CdkVirtualScrollViewportModule
                ],
                })
            export class AppModule { }

            // In html  
            *cdkVirtualFor directive to iterate over your data source
            
                <cdk-virtual-scroll-viewport itemSize="50">
                <div *cdkVirtualFor="let item of items">{{ item.name }}</div>
                </cdk-virtual-scroll-viewport>
                `
            }
        ]
    }
]

export const angular8 = [
    {
        "version8":[
            {
                "defaultLoad":`
                tsconfig.json
                {
                    "compilerOptions"{
                       ...
                      "module":"esnext",
                      "moduleResolution":"node",
                        ...
                      "target":"es2015", // for disable replace with es5
                }

                // At runtime, the browser uses attributes on the script tag to load the right bundle.
                <script type="module" src="…"> // Modern JS
                <script nomodule src="…"> // Legacy JS
                `
            },
            {
                "lazyLoad":`
                // before Angular 8
                {path: '/admin', loadChildren: './admin/admin.module#AdminModule'}

                // in Angular 8 dynamic import added
                {path: '/admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
                `
            },
            {
                "webWorkers":`
                For creating web worker you can use CLI command.

                ng generate webWorker my-worker
                `
            },
            {
                "ivyAdv":`
                Advantages of Angular 8 Ivy

                Smaller bundles
                Decreased payload size
                Pre-compiled code
                Enhanced backwards compatibility
                Faster rebuild times
                Improved template type checking`
            }

        ]
    }
]

export const angular10 = [
    {
        "version10":[
            {
                "matDatePicker":`
                <mat-form-field>  
                    <mat-label>Enter a date range</mat-label>  
                    <mat-date-range-input [rangePicker]="picker">  
                        <input matStartDate matInput placeholder="Start date">  
                        <input matEndDate matInput placeholder="End date">  
                    </mat-date-range-input>  
                    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>  
                    <mat-date-range-picker #picker></mat-date-range-picker>  
                </mat-form-field> 
                `
            }

        ]
    }
]

export const angular12 = [
    {
        "version12":[
            {
                "nullishing":`
                For example,

                {{age !== null && age !== undefined ? age : calculateAge() }}

                {{age ?? calculateAge() }}
                `
            }

        ]
    }
]

export const angular13 = [
    {
        "version13":[
            {
                "dynamicCom":`

                // Before Angular 13

                @Directive({ … })

                export class Test {
                    constructor(private viewContainerRef: ViewContainerRef,private componentFactoryResolver: 
                        ComponentFactoryResolver) {}
                    createMyComponent() {
                    const componentFactory = this.componentFactoryResolver.
                             resolveComponentFactory(MyComponent);
    
                        this.viewContainerRef.createComponent(componentFactory);
                     }
                }

                //In Angular 13

                @Directive({ … })
                export class Test {
                    constructor(private viewContainerRef: ViewContainerRef) {}
                    createMyComponent() {
                        this.viewContainerRef.createComponent(MyComponent);
                    }
                }
                `
            }

        ]
    }
]

export const angular14 = [
    {
        "version14":[
            {
                "stansAlone":`
                import { Component } from '@angular/core';
                import { CommonModule } from '@angular/common';
                import { bootstrapApplication } from '@angular/platform-browser';

                @Component({
                    selector: 'app-root',
                    standalone: true,
                    imports: [
                        // import standalone Components, Directives, and Pipes
                        CommonModule // and NgModules
                    ],
                    template:
                    <div>{{name}}</div>
                })
                export class SampleComponent {
                    name = "Angular 14";
                }
                // Bootstrap a new Angular application using our SampleComponent as a root component.
                bootstrapApplication(SampleComponent);
                `

                    
            },
            {
                "typedForm":`
                     export class SampleComponent {
                        var contactForm = new FormGroup({
                        name: new FormControl<string>('', { nonNullable: true }),
                        email: new FormControl<string>('', { nonNullable: true }),
                        contactNumber: new FormControl<number>(0, { nonNullable: false })
                    });
                }
                `
            },
            {
                "routeTitle":`
                const routes: Routes = [{
                    path: 'home',
                    component: HomeComponent
                    title: 'Home page'  // <-- Page title
                }, 
                {
                    path: 'about',
                    component: AboutComponent,
                    title: 'About page'  // <-- Page title
                }
            ];
                `
            },
            {
                "optionalInj":`
                    const injector = ...; // Custom injector providing specific services
                    this.viewContainerRef.createEmbeddedView(templateRef, { injector });
                `
            }

        ]
    }
]

export const angular15 = [
    {
        "version15":[
            {
                "stand":`

                @Component({
                    selector: 'app-my-component',
                    standalone: true,
                    template: <h1>Hello from a standalone component!</h1>,
                  })
                  export class MyComponent {}


                //The standalone APIs allow you to bootstrap an application using a single component  
                  import {bootstrapApplication} from '@angular/platform-browser';
                  import {ImageGridComponent} from'./image-grid';
                  
                  @Component({
                    standalone: true,
                    selector: 'photo-gallery',
                    imports: [ImageGridComponent],
                    template: 
                      … <image-grid [images]="imageList"></image-grid>
                    ,
                  })
                  export class PhotoGalleryComponent {
                    // component logic
                  }
                  
                  bootstrapApplication(PhotoGalleryComponent);  
                `
            },
            {
                "routes":`
            // Declareing root route

                export const appRoutes: Routes = [{
                    path: 'lazy',
                    loadChildren: () => import('./lazy/lazy.routes')
                      .then(routes => routes.lazyRoutes)
                  }];

            //Where lazyRoutes are declared in

                  import {Routes} from '@angular/router';
                  import {LazyComponent} from './lazy.component';

                export const lazyRoutes: Routes = [{path: '', component: LazyComponent}];

            // register the appRoutes in the bootstrapApplication call

                bootstrapApplication(AppComponent, {
                    providers: [
                      provideRouter(appRoutes)
                    ]
                  });
                `
            },
            {
                "dComApi":`
                @Component({
                    selector: 'mat-menu',
                    hostDirectives: [HasColor, {
                      directive: CdkMenu,
                      inputs: ['cdkMenuDisabled: disabled'],
                      outputs: ['cdkMenuClosed: closed']
                    }]
                  })
                  class MatMenu {}

                  Above code MatMenu with two directives: HasColor and CdkMenu
                  MatMenu reuses all the inputs, outputs, and associated logic with HasColor and only the logic and the selected inputs from CdkMenu
                `
            },
            {
                "ngOptimize":`
                    import { NgOptimizedImage } from '@angular/common';

                    // Include it into the necessary NgModule
                    @NgModule({
                    imports: [NgOptimizedImage],
                    })
                    class AppModule {}

                    // ... or a standalone Component
                    @Component({
                    standalone: true
                    imports: [NgOptimizedImage],
                    })
                    class MyStandaloneComponent {}
                `
            }

        ]
    }
]

export const angular16 = [
    {
        "version16":[
            {
                "angSignal":`

                    import { Component, computed, effect, signal } from '@angular/core';
                    import { CommonModule } from '@angular/common';
                    import { bootstrapApplication } from '@angular/platform-browser';

                    @Component({
                    selector: 'my-app',
                    standalone: true,
                    imports: [CommonModule],
                    template: 
                        <h1>Calculate Area</h1>
                        <p>Answer : {{ area() }}</p>
                        <button (click)="calculateArea(10,10)">Click</button>
                    ,
                    })

                    export class App {
                        height = signal(5);
                        width = signal(5);
                        area = computed(() => this.height() * this.width());
                        constructor() {
                        effect(() => console.log('Value changed:', this.area()));
                        }
                        calculateArea(height: number, width: number) {
                        this.height.set(height);
                        this.width.set(width);
                        }
                    }
                `
            },
            {
                "ssr":`
                import {
                    bootstrapApplication,
                    provideClientHydration,
                   } from '@angular/platform-browser';
                   

                   bootstrapApplication(RootCmp, {
                    providers: [provideClientHydration()]
                   });
                `
            },
            {
                "routeParams":`
                //in appConfig 

                provideRouter(routes, withComponentInputBinding()); 

                //In component

                @Component({...}) 

                export class SearchComponent { 

                    @Input() id!: string;   -->id name same as params in Url 
                    @Input() searchDetails!: SearchDetails 

                } 
                `
            },
            {
                "reqParams":`
                export class App {
                    @Input({ required: true }) name: string = '';
                  }
                  
                  // or
                  @Component({
                    ...
                    inputs: [
                      {name: 'name', required: true}
                    ]
                  })
                `
            },
            {
                "desRef":`
                @Component({...})
                    export class AppComponent {
                    constructor() {
                        inject(DestroyRef).onDestroy(() => {
                        // Writte your cleanup logic
                        })
                    }
                }
                `
            }

        ]
    }
]

export const angular17 = [
    {
        "version17":[
            {
                "if":`

                // Before Angular 17

                <div *ngIf="loggedIn; else anonymousUser">
                    The user is logged in
                </div>
                <ng-template #anonymousUser>
                    The user is not logged in
                </ng-template>

                //In Angular 17

                <ul> 

                @if (isLoggedIn) { 
                    <li>Welcome, {{ username }}</li> 

                } @else { 
                    <li><a href="/login">Sign In</a></li> 
                } 

                </ul> 

                We can provide @else if also its not possible previously. 
                `
            },
            {
                "for":`
                <ul> 
                    @for (let product of products) { 
                        <li>{{ product.name }} - {{ product.price }}</li> 
                    } 
                </ul> 

                @for loop also has a shortcut for collections with zero items via an optional @empty block. 
                `
            },
            {
                "switch":`
                <div @switch (rating) { 

                    @case (1) { <p>Very poor</p> } 
                  
                    @case (2) { <p>Poor</p> } 
                  
                    @case (3) { <p>Okay</p> } 
                  
                    @case (4) { <p>Good</p> } 
                  
                    @case (5) { <p>Excellent</p> } 
                  
                    @default { <p>No rating</p> } 
                  
                  </div> 
                `
            },
            {
                "defer":`
                @defer { 

                    <div>My deferred content</div> 
                  
                  } 
                `
            },
            {
                "defPlaceholder":`

                @defer { 

                    <child-app>My deferred content</child-app> 
                    
                    } @placeholder { 
                    
                    <span>Placeholder content</span> 
                    
                    } @loading { 
                    
                    <span>Loading deferred content...</span> 
                    
                    } 

                // defer with onTimer 
                        
                @defer (on timer(5000)) {
                    <h2 class="text-center">This is Ang-17 New Feature Defer content displaying after 5 second using Timer(5000)...</h2>
                } @placeholder {
                    <h2 class="text-center">Placeholder..........</h2>
                  }
  
                // defer with viewport
                @defer (on viewport) {
                    <h2 class="text-center">This is Ang-17 New Feature Defer content displaying using viewport...</h2>
                } 
                
                //defer with interaction
                @defer (on interaction) {
                    <h2 class="text-center">This is Ang-17 New Feature Defer content displaying using interaction...</h2>
                  }
                  @placeholder {
                    <h2 class="text-center">Placeholder..........</h2>
                  }
                `
            }

        ]
    }
]