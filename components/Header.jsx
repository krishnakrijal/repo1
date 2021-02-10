
import Button from './Button';

const Header = ({title,add,addShow}) =>{
    
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color={addShow?'red':'green'} text={addShow ?'Close':'Add'} onClick = {add}/>
        </header>
    );
}

export default Header;