
const Button = ({controlTime,timeChange,stopTime}) => {

    return (
        <>
            <button onClick={controlTime?stopTime:timeChange}>
                {controlTime?'clock out':'clock in'}
                </button>
        </>
    )
}

export default Button
