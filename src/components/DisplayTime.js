

const DisplayTime = ({time}) => {
    return (
        <>
            <p style={{color:"grey"}}>Timer</p>
            <span>{time.m < 10 ?'0'+time.h:time.h}:</span>
            <span>{time.m < 10 ?'0'+time.m:time.m}:</span>
            <span>{time.s < 10 ?'0'+time.s:time.s}</span>
        </>
    )
}

export default DisplayTime
