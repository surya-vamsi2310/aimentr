import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StepperComponent } from './stepper/stepper.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';


export const Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {
                path : "",
                component : HomeScreenComponent
            },
            {
                path: "Landing",
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
                path: "learn",
                component: DashboardCoursesComponent
            },
        ]
    },

]