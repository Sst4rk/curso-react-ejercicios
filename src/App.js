import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';
import ContactForm from './components/form/ContactForm';
import Modals from './components/Modals';
//import SelectsAnidados from './components/selects/SelectsAnidados';
import SongSearch from './components/SongSearch';

function App() {
    return (
        <>
            <h1>Ejercicios con React</h1>
            <Modals />
            <hr />
            <ContactForm />
            <hr />
            {/* <SelectsAnidados /> */}{' '}
            {/*!Seccion comentada por desactualizacion de la Api de Codigos Postales de Mexico*/}
            <hr />
            <SongSearch />
            <hr />
            <CrudApi />
            <hr />
            <CrudApp />
            <hr />
        </>
    );
}

export default App;
