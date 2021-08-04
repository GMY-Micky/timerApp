

const AddData = ({dataTable}) => {
      const d=new Date()
      const fullDate = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear()   
     
    return (
        <div className='data-container'>
            {dataTable.map((data)=>(
                <>
                  <div>{fullDate}</div>
                  <div>{data.before}</div>
                  <div>{data.after}</div> 
                </>
            ))}
        </div>
    )
}

export default AddData
