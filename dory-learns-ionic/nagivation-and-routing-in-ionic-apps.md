# Navigation & Routing in Ionic Apps

## How Navigation Works
In an angular ionic app, we use the `Angular Router` for navigation for setting up the routes so that we can use the `routerLink - /products`or the `navigate() - products/id5` method when we inject the router to switch between our different paths, therefore pages.

When using the `Angular Router` in an Ionic App, with the `@angular/ionic` package which wraps the angular routing functionality as we can tell by using `ion-router-outlet`. It does so to add nice transitions.

Ionic thinks of navigation and the different pages as a **stack of pages**. If we think of a mobile app, we see one page at a time typically and we can go to a new page or press a back button and go back. We can essentially do the same in the browser where there is also a back button. We view the page which is on the top of the stack but the other pages are still there but hidden. When we go back we `pop` the top page and see the other pages.

 Ionic controls these stack of pages with a `StackController`. This is a class we don't use directly in the Angular app as Ionic does it for us and is internal. When we use the `Angular Router` for navigating, Ionic watches the `Angular Router` with as listener to our routing actions; when we go forward, it pushes a new page onto the stack, and when we go back or use the `ion-back-button` it pops that top most page off.

 How it knows whether a `nagivate()` call is meant to go backwards or forwards is by basically looking at the internal id of the naviagation action; using that id we can determine whether the new router is one step ahead or behind.

 The stack of pages is also *cached*, different to web browser experience, where if you go forward and then back, all the pages which are just components are essentially destroyed when we leave them, nomatter if we are going forward or backwards. With Ionic, that's not the case. When you go forward to a new page, that old page is still on that stack of pages so to say, is kept in a cache in memory. This whole stack of pages is *cached* you could say. When you pop a page off, it is removed from the cache because it is removed from the stack. This will become important and will also explain the bug we had in our last modules.

 Besides the `Angular Router` for navigating around, which we'll primarily use and is the main recommended tool for going around in the Ionic/Angular App. We also have the `Ionic NavController` which is an *injectable* service which we can inject into any component or service, which esentially gives us some utility methods that will also interact with the `Ionic Stack Controller` e.g. a pop method that will allow us to manually pop of the latest page on the stack of pages, which therefore will trigger a back navigation.

 ## Ionic Page Caching & Extra Lifecycle Hooks
 ### Ionic + Angular Page Lifecycle
 Ionic caches pages, a stack of pages, which explains why we had a bug in our last module that when we deleted a recipe, it was still there.

 It is important to understand how the Angular lifecycle behaves and how it differs when we are talking about a page that was loaded with the `Angular Router` and that is therefore indirectly controlled by Ionic.

 In regular Angular Components, nomatter if we are using them by embedding their selector into our templates or by loading them via routing, we have a certain lifecycle. We also have a special lifecycle for the components we did load via routing `Ionic Pages` (which are regular angular components loaded via the angular router).

 | Angular Components | Ionic Pages - because of Caching mechanism|
 | :------------- | :------------- |
 | `ngOnInit`      | `ionViewWillEnter` - right before content page has loaded and displayed, run after ngOnInit|
 | `ngOnDestroy` - for when we go to a different page (component removed) | `ionViewDidEnter` - runs after ngOnInit and ionViewWillEnter|
 ||`ionViewWillLeave`|
 || `ionViewDidLeave`|

 both `ionViewWillEnter` and `ionViewDidEnter` are called whenever a page becomes visible which is important, because in caching, if a page is still in cache and you aren't seeing it because another page is on top of it in the stack of pages, it will never be destroyed hence `ngOnDestroy` will never be called and `ngOnInit` will also never be called when we go back to the page that is on still on the stack of pages.

`ionViewDidEnter` and `ionViewWillEnter` will be called because these are called whenever the page becomes visible. When it becomes the top of the stack of pages so to say. Even though `ngOnDestroy` will never be called, you might want to do some clean up work. You can do that using `ionViewWillLeave` and `ionViewDidLeave`. These are called when the page becomes invisible so to say
 for when a new page is on top of it but it will also be called in places where `ngOnDestroy` is not called.
