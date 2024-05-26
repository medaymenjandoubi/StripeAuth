import { Login,HouseIcon ,PersonAddIcon} from "../public/assets/icons"

const TopNav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" style={{display:"flex",alignItems:"center"}}>
                            {/* <HomeOutlined style={{color:"white"}}/> */}
                            <a class="nav-link" href="/">{HouseIcon} Home</a>
                        </li>
                        <li class="nav-item" style={{display:"flex",alignItems:"center"}}>
                            {/* <LoginOutlined style={{color:"white"}}/> */}
                            {/* <i class="bi bi-box-arrow-in-right" style={{color:"white"}}></i> */}
                            
                            <a class="nav-link" href="/login">{Login} login</a>
                        </li>
                        <li class="nav-item" style={{display:"flex"}}>
                        {/* <UserAddOutlined style={{color:"white"}}/> */}
                            <a class="nav-link" href="/register">{PersonAddIcon} Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default TopNav