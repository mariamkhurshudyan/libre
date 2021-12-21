import SearchBar from "./SearchBar";
import Sidebar from "../Sidebar";

export default function Header() {
    return (
        <div className='header'>
            <Sidebar/>
            <div className='logo-container'>
                <a href='/'>
                    <img src='https://tympanus.net/Freebies/libre/images/logo.svg' alt='logo'/>
                </a>
            </div>
           <SearchBar />

        </div>

    );
};
