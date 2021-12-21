import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className='header'>
            <div className='logo-container'>
                <a href='/'>
                    <img src='https://tympanus.net/Freebies/libre/images/logo.svg' alt='logo'/>
                </a>
            </div>
           <SearchBar />

        </div>
    );
};
