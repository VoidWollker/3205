const { useFindedData } = require('../findedDataContext')

export const FilteredData = () =>{
    const {findedData} = useFindedData()
    return(
        <>
            {findedData !== undefined
                ?   <div className="d-flex flex-column justify-content-center border rounded  bg-white shadow w-25 p-5">
                        {findedData.length > 0 
                            ?   <>
                                    {findedData.map(data =>
                                        <>
                                            <p><strong>Email:</strong> {data.email}</p>
                                            <p><strong>Number:</strong> {data.number}</p>    
                                            <hr />
                                        </>
                                        
                                    )}
                                </>
                            : 'Простите, но таких пользовтелей не существует :('
                        }
                    </div>
                : ''
            }

            
        </>

        
    )
}