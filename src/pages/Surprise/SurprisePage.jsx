import './SurprisePage.css'
import surprise from './../../assets/surprise.gif'

const SurprisePage = () => {

    return (
        <div className='surprise'>
            <img src={surprise} alt='surprise' />
        </div>
    )
}

export default SurprisePage