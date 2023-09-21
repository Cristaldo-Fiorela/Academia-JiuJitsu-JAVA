import ProfPablo from '../images/men-8151665_1280.jpg'
import ProfMartina from '../images/bjj-8151668_1280.jpg'
import ProfJuan from '../images/bjj-8205246_1280.jpg'

function Profesores() {
    return (
        <>
        <section className="text-white  flex flex-col items-center py-10">
            <h3 className="text-4xl font-bold">Profesores</h3>
            <div>
                <section>
                    <img src={ ProfJuan } alt="" />
                    <h4>Juan González</h4>
                </section>
                <section>
                    <img src={ ProfMartina } alt="" />
                    <h4>Martina López</h4>
                </section>
                <section>
                    <img src={ ProfPablo } alt="" />
                    <h4>Pablo Rodríguez</h4>
                </section>
            </div>
        </section>
        </>
    )
    }

export default Profesores;