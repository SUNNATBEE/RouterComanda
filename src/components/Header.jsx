import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>


<header>
    <div className='container max-w-[1240px] mx-auto w-full mx-[20px]'>
        <ul className='flex justify-between items-center'>
            <li>
                <Link to={"/Brand"}>о бренде</Link>
            </li>
            <li>
                <Link to={"/Home"}>продукциИ</Link>
            </li>
            <li>
                <Link to={"/Third"}>преимущества </Link>
            </li>
            <li>
                <Link to={"/Club"}>открыть клуб</Link>
            </li>
            <li>
                <Link to={"/Contact"}>контакты</Link>
            </li>
            
        </ul>
    </div>
</header>

    </div>
  )
}

export default Header