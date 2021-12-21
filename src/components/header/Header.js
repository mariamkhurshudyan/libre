import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className='header'>
            <div className='logo-container'>
                    <img src='https://tympanus.net/Freebies/libre/images/logo.svg' alt='logo'/>
            </div>
           <SearchBar />

        </div>
    );
};
