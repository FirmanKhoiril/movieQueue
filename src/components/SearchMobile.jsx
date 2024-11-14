import { IoIosSearch } from "react-icons/io";
import {useGlobalState} from '../context/useGlobalState'
import { useNavigate } from "react-router-dom";

const SearchMobile = () => {
    const navigate = useNavigate()
    const {searchMobileQuery, setSearchMobileQuery} = useGlobalState()
    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchMobileQuery}`)
    }
  return (
    <form onSubmit={onSubmit} className='md:hidden relative flex pt-8 w-full items-center justify-center flex-1'>
        <input type="text" value={searchMobileQuery} onChange={(e) => setSearchMobileQuery(e.target.value)} className='bg-blue-500/5 border border-white/20 peer w-full rounded-l-xl py-3 px-4 focus-within:border-white/40 outline-none placeholder:text-sm' required placeholder="Search movie..." />
        <button type="submit"  className="bg-primary/40 py-3 hover:bg-primary/60 peer-focus-within:border-white/40 px-3 border-t border-b border-r border-white/20 rounded-r-xl">
            <IoIosSearch size={24} />
        </button>
    </form>
  )
}

export default SearchMobile