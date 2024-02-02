import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Produc() {
    const [product, setproduct] = useState([]);
    const [img, setimg] = useState([]);
    const [tempImage, settempImage] = useState();
    let { id } = useParams();
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (response) {
                console.log('hello' + response.data)
                setproduct(response.data)
                setimg(response.data.images)
                settempImage(response.data.images[0])
            })
            .catch(function (error) {
                console.log('error' + error)
            })
    }, []);
    return (
        <div>
            <Header></Header>
            <Row>
                <Col lg={2}>
                    {
                        img.map((item, index) => {
                            return (
                                <div className='proimg' >
                                    <img src={item} alt='img' key={index} onClick={() => { settempImage(item) }} />
                                </div>
                            )
                        })
                    }
                </Col>
                <Col lg={6}>
                    <div className='tempimg'>
                        <img src={tempImage}></img>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='prodis me-3'>
                        <h3 className='text-secondary mt-2'>$<span  className='text-info'>{product.price}</span></h3>
                        <span className='mt-2' style={{color:'red',fontSize:'30px', fontWeight:'700'}}>{product.title}</span>
                        <h4 className='mt-2'>{product.description}</h4>
                            <div className='mt-2' style={{color:'black',fontSize:'25px', fontWeight:'700'}}>Brand:<span  style={{color:'red',fontSize:'22px',fontWeight:'500'}}>{product.brand}</span></div>
                            <div className='mt-2'  style={{color:'black',fontSize:'25px', fontWeight:'700'}}>Category:<span className='text-warning' style={{color:'green',fontSize:'22px',fontWeight:'500'}}>{product.category}</span></div>
                            <div className='mt-2' style={{color:'black',fontSize:'25px', fontWeight:'700'}}>Stock:<span style={{color:'green',fontSize:'22px',fontWeight:'500'}}>{product.stock}</span></div>
                        <button className='btn2 mt-4'>Up to {product.discountPercentage}%off</button><br></br>
                        <button className='btn1 mt-4'>{product.rating}</button><br></br>
                        <button className='btn3 mt-4'>view all</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
};
export default Produc;