import { Routes } from '@angular/router';
import { App } from './app';
import { TaskList } from './task-list/task-list';
import { DoneTasks } from './done-tasks/done-tasks';
import { NotDoneTasks } from './not-done-tasks/not-done-tasks';
import { Header } from './header/header';
import { Home } from './home/home';
import { AddTask } from './add-task/add-task';
import { Tasks } from './tasks/tasks';
import { Signup } from './signup/signup';
import { Signin } from './signin/signin';
import { PageNotFound } from './page-not-found/page-not-found';
import { authguardGuard } from './guards/authguard-guard';

export const routes: Routes = [
{
    path:'',
    redirectTo:'Header',
    pathMatch:'full',
    
},
{
    path:'Header',
    component:Header,
    canActivate:[authguardGuard],
    children:[{

        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
    ,
    {

        path:'home',
        component:Home
    }
    ,{
        
        path:'add-task',
        component:AddTask
    },
    {
        
        path:'tasks',
        component:Tasks
    }

]

},

{ path: 'signin', component: Signin },

{ path: 'signup', component: Signup }
,
{path:'**',
    component:PageNotFound,
    canActivate:[authguardGuard]

}


];
