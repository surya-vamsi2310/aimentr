import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StepperComponent } from './stepper/stepper.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';



export const Routes = [
    {
        path: '', component: HomeComponent,
        children: [            
            {
                path: "",
                component: LandingPageComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: "register",
                component: RegisterComponent
            },
            {
                path: "stepper",
                component: StepperComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
        ]
    },

]