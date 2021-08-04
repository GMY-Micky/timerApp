

const AddData = ({dataTable}) => {
      const d=new Date()
      const fullDate = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear()   
     
    return (
        <div className='table'>
        <div className='head data-container'>
              <div>DATE</div>
              <div>CLOCK IN</div>
              <div>CLOCK OUT</div>
              </div>
            {dataTable.map((data)=>(
                <div className='body data-container'>
                  <div>{fullDate}</div>
                  <div>{data.before}</div>
                  <div>{data.after}</div> 
                </div>
            ))}
            
        </div>
    )
}

export default AddData
