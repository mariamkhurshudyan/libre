import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className='header'>
            <img className='logo' src='https://tympanus.net/Freebies/libre/images/logo.svg' alt='logo'/>
           <SearchBar />
            <a className='link' href="https://tympanus.net/codrops/2018/09/16/freebie-libre-web-app-template/">Back to Codrops </a>
        </div>
    );
};
