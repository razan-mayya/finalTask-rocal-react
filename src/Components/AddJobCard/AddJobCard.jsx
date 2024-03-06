
import './AddJobCard.css'
export const AddJobCard = ({ title, greenpar, para, lasetsection }) => {
    return (
        <div className='card'>
            <h1 className='title'>{title}</h1>
            <div className='con-greenpar'>
                <div className='greenpar '>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#71AA27" className={(greenpar) ? "" : "d-none"} />
                    </svg>
                    <p >{greenpar}</p>
                </div>
                <p className={(greenpar) ? "leftpara" : "rightpar"}>{para}</p>
            </div>
            <div className='line '></div>

            {lasetsection}

        </div >)
}
