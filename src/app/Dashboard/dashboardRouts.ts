import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { VideoComponent } from './video/video.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { StudentComponent } from './student/student.component';
import { PaymentComponent } from './Payments/payment/payment.component';
import { StudentviewMentordashboardComponent } from './studentview-mentordashboard/studentview-mentordashboard.component'
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component'



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
                path: 'student/video', component: VideoComponent
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
                path: "student/dashboard",
                component: StudentDashboardComponent
            },
            {
                path: "payment",
                component: PaymentComponent
            },
            {
                path: "student/mentordashboard",
                component: StudentviewMentordashboardComponent
            },

        ]

    },


]