import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Header from './Header';
import { Link } from 'react-router-dom';
function Home() {
    const [data, setData] = useState([]);   //  set data  
    const [product, setproduct] = useState([]);
    useEffect(() => {
        axios
            .get("https://dummyjson.com/product/categories")
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });


        axios.get("https://dummyjson.com/products?limit=0&&skip=0")
            .then(function (response) {
                setproduct(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const onproduct = (item) => {
        // let z = "https://dummyjson.com/products/category/".concat(item.charAt(0).toUpperCase() + item.slice(1))
        let z = "https://dummyjson.com/products/category/".concat(item)
        axios.get(z)
            .then(function (response) {
                // console.log(response);
                setproduct(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <Header></Header>
            <div className="main">
                <div>
                    <Row className='w-100'>
                        <Col lg={3}>
                            <div className='main-frame'>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <div key={index} className='categary m-2' onClick={() => { onproduct(item) }}>
                                                {/* <div className='nav-list'> */} 
                                                    <button  className='nav-list w-100'>{item}</button>
                                                {/* </div> */}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className='row product-box w-100'>
                                {
                                    product.map((item) => {
                                        return (
                                            <>
                                                <Card style={{ width: '18rem' }} className='m-1 ' as={Link} to={`/product/${item.id}`}>
                                                    <Card.Img variant="top" src={item.thumbnail} className='img-fluid img1 card-img' />
                                                    <Card.Body className='m-3'>
                                                        <Card.Title ><span style={{ color: 'red' }}>{item.title}</span></Card.Title>
                                                        <Card.Title >brand:<span className='text-secondary'>{item.brand}</span></Card.Title>
                                                        <Card.Text>{item.description}</Card.Text>
                                                        <h4><span className='text-secondary'>$</span><span className='fs-5 text-primary'>{item.price}</span></h4>
                                                        <button className='btn2'>Up to {item.discountPercentage}%off</button><br></br>
                                                        <button className='btn1'>{item.rating}</button><br></br>
                                                        <button className='btn3'>view all</button>
                                                    </Card.Body>
                                                </Card>

                                            </>

                                        )
                                    })

                                }

                            </div>
                            {/* <div >{product.id}</div>
                            <div >{product.brand}</div>
                            <div >{product.category}</div>
                            <div >{product.stock}</div>*/}
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default Home;