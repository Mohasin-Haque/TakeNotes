import { Navbar, Sidebar } from "../../components";
import "./profile-page.css";


const ProfilePage = () => {
    return (
        <div>
            <Navbar />
            <div className="home-page-container">
                <Sidebar />
                <div className="right-container">
                    <h1 className="page-name">Profile</h1>
                    <section className="note-card">
                        <div className="profile-card">
                            <p className="profile-data">Name : Mohasin Haque</p>
                            <p className="profile-data">Email : xyz@gmail.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export { ProfilePage }