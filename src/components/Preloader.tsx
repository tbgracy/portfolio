import preloaderImg from '../assets/preloader.gif'
import './Preloader.scss'

const Preloader = () => {
    return <div id='preloader-container'>
        <img src={preloaderImg} />
    </div>
}

export default Preloader