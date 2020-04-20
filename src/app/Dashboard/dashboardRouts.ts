import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { VideoComponent } from './video/video.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { PaymentComponent } from './payment/payment.component';
import {StudentviewMentordashboardComponent} from './studentview-mentordashboard/studentview-mentordashboard.component'
import { RequestComponent } from './request/request.component';
import { LivevideoSessionComponent } from './livevideo-session/livevideo-session.component';



export const Routes = [


    {
        path: 'home', component: DashboardComponent,
        children: [
            {
                path: "",
                component: DetailCourseComponent
            },
            {
                path: "courseview",
                component: HomeScreenComponent
            },
            {
                path: "dashboard",
                component: DashboardCoursesComponent
            },
            {
                path: 'video', component: VideoComponent
            },
            {
                path: "courseupload",
                component: CreateCourseComponent
            },
            {
                path: "profile",
                component: ViewProfileComponent
            },
            {
                path: "student",
                component: StudentComponent
            },
            {
                path: "studentProfile",
                component: CoursesComponent
            },
            {
                path: "payment",
                component: PaymentComponent
            },
            {
                path: "student/mentordashboard",
                component: StudentviewMentordashboardComponent
            },
            {
                path: "requests",
                component: RequestComponent
            },
            {
                path:"livevideo",
                component:LivevideoSessionComponent
            }
            
        ]

    },


]