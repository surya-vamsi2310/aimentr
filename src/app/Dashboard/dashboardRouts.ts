import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { VideoComponent } from './video/video.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { StudentComponent } from './student/student.component';
import { RequestComponent } from './request/request.component';
import { LivevideoSessionComponent } from './livevideo-session/livevideo-session.component';
import { PaymentComponent } from './Payments/payment/payment.component';
import { StudentviewMentordashboardComponent } from './studentview-mentordashboard/studentview-mentordashboard.component'
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component'
import { OnlineEditComponent } from './online-edit/online-edit.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { UploadCourseComponent } from './upload-course/upload-course.component';
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
            {
                path: "requests",
                component: RequestComponent
            },
            {
                path:"livevideo",
                component:LivevideoSessionComponent
            },
            {
                path:"onlineedit",
                component:OnlineEditComponent
            },
            {
                path:"settings",
                component:SettingsComponent
            },
            {
                path:"home-profile",
                component:HomeProfileComponent
            },
            {
                path:"upload-course",
                component:UploadCourseComponent
            }
            

        ]

    },


]