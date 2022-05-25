import spinner from '../assets/Dspinner.gif'

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '20px', margin: 'auto', display: 'block', padding: '0 10px 16px' }}
    />
  )
}

export default Spinner