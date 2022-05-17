import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to='/about'>
            <FaQuestion size={26} />
        </Link>
    </div>
  )
}

export default AboutIconLink