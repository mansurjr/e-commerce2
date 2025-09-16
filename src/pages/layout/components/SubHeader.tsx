import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubHeader = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
 return (
   <nav className="text-sm text-[#6C7275] mt-2 text-[14px] leading-[24px] container">
     <ol className="flex space-x-2">
       <li>
         <Link to="/" className="hover:text-[#141718]">
           Home
         </Link>
       </li>
       {pathnames.map((name, index) => {
         const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
         const isLast = index === pathnames.length - 1;
         return (
           <li key={routeTo} className="flex space-x-2">
             <span>&gt;</span>
             {isLast ? (
               <span className="text-[#141718] font-medium capitalize">
                 {name}
               </span>
             ) : (
               <Link to={routeTo} className="hover:text-[#141718] capitalize">
                 {name}
               </Link>
             )}
           </li>
         );
       })}
     </ol>
   </nav>
 );
};

export default memo(SubHeader);