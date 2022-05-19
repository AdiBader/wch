import { Link } from 'react-router-dom'

function AboutPage() {
  return (
      <>
      <div className='containerBG'></div>
    <div className='aboutDiv'>
        <h1>About this project</h1>
        <p>
        This is a React app that displays all the WCH concerts in the last several years
        </p>
        <Link className='backHome' to='/'>Back to home</Link>
    </div></>
  )
}

export default AboutPage