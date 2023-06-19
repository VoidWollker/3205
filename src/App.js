import { Form } from './components/Form'
import { FilteredData } from './components/FilteredData'
import 'bootstrap/dist/css/bootstrap.min.css'
const {FindedDataProvider} = require('./findedDataContext')


export const App = () =>{
  return(
    <FindedDataProvider>
      <div className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'>
        <img className='mt-5' style={{height: '20%'}} src={require('./img/3205.png')} alt='logo'/>
        <div className='d-flex flex-row justify-content-center align-items-center h-100 w-100'>
          <Form />
          <FilteredData />
        </div>
      </div>
      
    </FindedDataProvider>
  )
}
