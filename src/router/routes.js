import Dashboard from "@/views/Dashboard.vue"
import TaskBoard from "@/views/TaskBoard.vue"
import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"

export default [
  {
    path: "/",
    name: "home",
    redirect: "/login"
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/boards/:id",
    name: "task-board",
    component: TaskBoard
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
]
