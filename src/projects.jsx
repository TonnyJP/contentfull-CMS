import { useFetchProject } from './hook/fetchProject';
export const Projects = () => {
    const {isError, isLoading, projects} = useFetchProject();

    if(isLoading){
        return <section className='projects'>
            <div className='loading'/>
        </section>
    }
    if(isError){
        return <section className='projects'>
            <div className='projects-center'>
                 <h2>An error occured!</h2>
            </div>
        </section>
    }
    return (
        <section className='projects'>
            <div className='title'>
                <h2>Projects</h2>
                <div className='title-underline' />
            </div>
            <div className='projects-center'>
                {projects.map((item) => {
                    const {id, img, url, title} = item;
                    return <a key={id} href={url} target='_blanck' rel="noreferrer" className='project'>
                        <img src={img} alt={title} className='img' />
                        <h5>{title}</h5>
                    </a>
                })}
            </div>
        </section>
    )
}