import {AppBar,Toolbar,Box, Typography,styled} from '@mui/material'
import { Link } from 'react-router-dom'

const MenuBox=styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"30px"
})

const pages=[{name:"Home",path:"/"},{name:"Contacts",path:"/contacts"},{name:"Add Contact",path:"/addcontact"}]

function NavBar() {
  return (
   <AppBar position="sticky">
    <Toolbar>
        <MenuBox>
{
    pages.map((page)=><Link to={page.path} key={page.name} style={{textDecoration:'none',color:"white"}}>
    <Typography variant="h6">{page.name}</Typography>
    </Link>)
}
        </MenuBox>
    </Toolbar>

   </AppBar>
  )
}

export default NavBar
