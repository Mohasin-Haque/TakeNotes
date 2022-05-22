import { LoginPageComp, Navbar } from "../../components"


const LoginPage = () => {
    return(
        <div>
            <Navbar />
            <h1 className="flex">Login</h1>
            <LoginPageComp />
        </div>
    )
}

export { LoginPage }