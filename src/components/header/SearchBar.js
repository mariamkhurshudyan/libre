import {useState} from "react";

export default function SearchBar() {
    const [term, setTerm] = useState('')
    console.log(term)
    return (
            <div className='search-container'>
                <span className='holder'>
                    <input value={term} onChange={({target})=>setTerm(target.value)} className='search' placeholder='Search' type='text'/>
                    <div className='search-icon-container'>
                        <svg viewBox="0 0 20 20" className='search-icon' xmlns="https://svg-clipart.com/svg/icon/nQy8yy4-search-icon-white-one-vector.svg" >
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                </span>
                <a className='link' href="/">Login </a>
            </div>
    );
}
