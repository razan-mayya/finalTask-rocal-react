import './ColoredCard.css'

export const ColoredCard = ({ cardtitle, number, bordercolor, but }) => {
    return (
        <div className='borderr' style={{ '--bordercolor': bordercolor }} >
            <p className='cardtitle'>{cardtitle} </p>
            <p className='number'>{number} </p>
            {but}
        </div>

    )
}
