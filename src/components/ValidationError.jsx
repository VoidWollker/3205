export const ValidationError = ({message}) =>{
    return(
        <div className="d-flex flex-row align-items-center alert alert-danger">
            <img className='mx-3' width={'5%'} src={require('../img/validationError.png')} alt=''/>
            <p className='h5 mt-1'>{message}</p>
        </div>
    )
}