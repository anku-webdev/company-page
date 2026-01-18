import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'


function Background({ heroCount, playStatus }) {
    if (playStatus) {
        return (
            <video className="background fade-in" src={video1} autoPlay muted loop>
            </video>
        )
    }
    else if (heroCount === 0) {
        return (
            <img src={image1} className='background fade-in' />
        )
    }
    else if (heroCount === 1) {
        return (
            <img src={image2} className='background fade-in' />
        )
    }
    else if (heroCount === 2) {
        return (
            <img src={image3} className='background fade-in' />
        )
    }
}

export default Background;