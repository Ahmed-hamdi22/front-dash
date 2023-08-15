import { faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'

export const links =[

    {
        name:"Users",
        path:"user",
        icon:faUsers,
        role:"1995",


    },
    {
        name:"Add Users",
        path:"/dashboard/users/add",
        icon:faPlus,
        role:"1995",
        

    },
    {
        name:"Writer",
        path:"/dashboard/wirter",
        icon:faPlus,
        role:["1996","1995"],
      

    }
]