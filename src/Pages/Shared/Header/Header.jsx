import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar  z-10 bg-black mr-10  ">
        <div className="navbar-start   ">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu   menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link className='font-bold' to='/'>HOME</Link></li>
              <li><Link className='font-bold' to='/college'>COLLEGE</Link></li>
              <li><Link className='font-bold' to='/admission'>ADMISSION</Link></li>
              <li><Link className='font-bold' to='/mycollege'>MY COLLEGE</Link></li>
              <li><Link className='font-bold' to='/profile'>PROFILE</Link></li>
            </ul>
          </div>
          <img className='h-10 w-10 ml-5 rounded-full' src="https://i.ibb.co/RcqKbmZ/image-5.png" alt="" />
          <Link to='/' className="btn btn-ghost text-white -ml-3   normal-case text-4xl tracking-widest font-extrabold">Diginave</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu text-white menu-horizontal px-1">
            <li><Link className='text-white font-bold' to='/'>HOME</Link></li>
            <li><Link className='text-white font-bold' to='/college'>COLLEGE</Link></li>
            <li><Link className='text-white font-bold' to='/admission'>ADMISSION</Link></li>
            <li><Link className='text-white font-bold' to='/mycollege'>MY COLLEGE</Link></li>
            <li><Link className='text-white font-bold' to='/profile'>PROFILE</Link></li>
          </ul>
        </div>
  
      </div>
    );
};

export default Header;