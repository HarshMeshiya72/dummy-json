import Container from 'react-bootstrap/Container';
import { IoCart } from 'react-icons/io5';

function Header(){
    return (
        <div className="header p-2">
                <Container>
                    <div className='nav '>
                        <div className='logo'>
                            <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'></img>
                        </div>
                        <div className='search'>
                            <input type='text' placeholder='Search...' className=''></input>
                        </div>
                        <div className='button'>
                            <input type='button' value='Search'></input>
                        </div>
                        <div className='cart'>
                            <IoCart />
                        </div>
                    </div>
                </Container>
            </div>
    );
}
export default Header;