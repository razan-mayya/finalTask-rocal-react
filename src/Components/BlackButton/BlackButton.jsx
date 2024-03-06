import './BlackButton.css'
export const BlackButton = ({ titlebutton, width }) => {
    return (
        <button className='blackbutton' style={{ '--width': width }}> <p className='titlebutton'>{titlebutton}</p> </button>
    )
}
