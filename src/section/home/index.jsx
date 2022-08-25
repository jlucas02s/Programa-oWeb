import fundo from '../../assets/fundo.jpeg'

export default function Home() {

    return (
        <div id='Home' className="Home">
            <div className="imgHome"
                style={{
                    backgroundImage: `url(${fundo})`,
                    backgroundRepeat: 'round',
                    backgroundSize: 'cover',
                    height: '100vh',
                    width: '100vw',
                }}>
            </div>
        </div>
    )





}