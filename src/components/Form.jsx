import { ValidationError } from './ValidationError'
const { useState } = require('react')
const { useFindedData } = require('../findedDataContext') 

export const Form = () =>{
    const {findData, cancelLastFetch} = useFindedData()
    const [formData, setFormData] = useState({email: '', number: ''})
    const [validationError, setValidationError] = useState({})

    const validation = {
        email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        number: /^[\d]*[\d-]*$/
    }

    const isNeedToAddMinus = (e) =>{
        //последнее число состоит из двух цифр
        return (e.target.value.split('-').slice(-1)[0].length === 2 && e.target.value.length < 8)
    }

    const submitForm = async () =>{
        setValidationError({...validationError, email: null})
        await findData(formData)
    }

    return(
        <div className="d-flex flex-column border rounded shadow bg-white w-25 p-5">
            <input className="form-control form-control-lg rounded my-3" required type="text" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
            <input className="form-control form-control-lg rounded my-3" type="text" placeholder="00-00-00" maxLength={8} value={formData.number}
                onChange={(e) => validation.number.test(e.target.value)
                    ?   <>
                            { isNeedToAddMinus(e) && e.target.value > formData.number
                             ? setFormData({...formData, number: e.target.value+'-'})
                             :setFormData({...formData, number: e.target.value})
                            }
                        </>
                    : e.target.value = formData.number
                }/>
            <button className="btn btn-primary my-3" onClick={(e) => {
                e.preventDefault(); 
                validation.email.test(formData.email)
                    ? submitForm()
                    : setValidationError({...validationError, email: 'Некорректный email'})
                }}
            >Поиск</button>
            {validationError.email
                ? <ValidationError message={validationError.email}/>
                : ''
            }
        </div>
    )
}