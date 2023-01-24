import loader from '../../../assets/imeges/spinner.gif'

const Preloader = (props) => {
  return (
    <div>
      <img alt='load' src={loader}/>
    </div>
  );
}

export default Preloader;
