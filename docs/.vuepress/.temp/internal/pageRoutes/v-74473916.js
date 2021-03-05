import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-74473916",
    path: "/git/",
    component: Vuepress,
    meta: { title: "Pealkiri 1" },
  },
  {
    path: "/git/index.html",
    redirect: "/git/",
  },
  {
    path: "/git/README.md",
    redirect: "/git/",
  },
]
