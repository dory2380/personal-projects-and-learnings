# Understanding Ionic Tabs

Tabs are a common navigation concept you see in mobile apps. The apps allow you to press the tabs to load different pages based on the tab pressed. 

You'll have **separate navigation page stacks**. That means that when you are in tab1 and there you have button that takes you to a child page, and you go there. Then you press tab2 without going back first. On the other tab, say you go to two more child pages. At that point, you'll have 3 pages in the stack on tab2 and 2 pages on the stack for tab1. If you then go back from tab2 to tab1, you'll go back to the previous stack with two pages. The going back to tab2, you'll again hhave the 3 stack page.

THe separate page stacks are separated from each other. This helps store navigation.

`ion-tabs` are used to hold the tabs

`ion-tab-bar` allows us to define which buttons we want to have, which tabs specifying text and icons. This ion-tab-bar must receive `slot="bottom"` so that it is correctly positioned at the bottom of the page.

`ion-tab-button` goes inside the ion-tab-bar. This component will allow you to set up the different buttons in your tab bar. Each tab button needs to get a unique identifier which we assign with the `tab=""` attribute. 

Now you can add text and/or icons to your tab. This is done by `ion-label` for text, and `ion-icon` for icons.

Angular will automatically inset the right page based on the button you pressed. To ensure that Angular is able to do that, we need to match the tab="" attribute in ion-tab-button to our routing set up.

This is done in the places.module. as that is where we have those tabs. Currently, in the module file, we have one route. An option of adding more routes, which is good practise is outsourcing the routes into a new module. Here we call it places-routing.module.ts. This is a similar pattern we have for the main routing module for app as well.

Inside the places-routing.module.ts is export class PlacesRoutingModule. The beauty of the class is to get the `ngModule()` decorator.

In this module, we will import the `RouterModule` from @angular/router. The idea here is to set up some child routes here with `forChild()` which are then merged with the global route definition once this module is lazily loaded. We also need to export our RouterModule with forChild() being called again.
