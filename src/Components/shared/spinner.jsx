import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '30px', margin: 'auto', display: 'block', padding: '0 10px 16px' }}
    />
  )
}

export default Spinner