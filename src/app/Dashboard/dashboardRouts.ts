import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

export const Routes = [
    {
        path: 'home', component: DashboardComponent,
        children: [
            {
                path: "",
                component: DetailCourseComponent
            },
            {
                path : "courseview",
                component : HomeScreenComponent 
            },
            {
                path: "dashboard",
                component: DashboardCoursesComponent
            },
            
        ]
    },

]