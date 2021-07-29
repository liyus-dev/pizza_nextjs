import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const pizzas =[
        {
            id: '1',
            name :'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'A delicous cheese pizza made with our finest tomato sauce',
            toppings:['mozarella cheese'],
            image: 'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            price: 9.99,
        },
        {
            id: '2',
            name :'Meat Feast',
            slug: 'meat-feast',
            description: 'A Wide selection of succulent meats for only the mightest of meat lovers',
            toppings:['ham','bacon', 'pepperoni', 'sausage'],
            image: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            price: 15.99,
        },
        {
            id: '3',
            name :'Supreme',
            slug: 'supreme',
            description: 'A Succculent supreme for only the finest of pizza fans',
            toppings:['olives','pineapple','ham' , 'pepperoni'],
            image: 'https://images.unsplash.com/photo-1590083745251-4fdb0b285c6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80',
            price: 12.99,
        },
        {
            id: '4',
            name :'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
            toppings:['pepperoni'],
            description: 'The absolute classsic. The king of pizzas. Bow to this delicious pepperoni',
            image: 'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80',
            price: 14.99,
        },
        {
            id: '5',
            name :'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
            description: 'somebody smokin this succulent pizza is filled with sausage goodness',
            toppings:['sausage', 'tomato', 'olive'],
            image: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            price: 9.99,
        },
        {
            id: '6',
            name :'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
            description: 'for the abosulte mad who loves a morning breakfast on a pizza',
            toppings:['sausage', 'egg'],
            image: 'https://images.unsplash.com/photo-1600346019001-8d56d1b51d59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            price: 13.99,
        },
    ]

    const [keyword, setKeyword] = useState('');
    
    const filteredPizzas = pizzas.filter(
        pizza =>
        pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
    )

    const onInputChange = (e) =>{
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }

    return (
        <div>
            <div className={styles.searchWrappper}>
                <input placeholder="Search for pizza or topping" className={styles.searchBar} onChange={onInputChange} />
            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1 ?
                (
                    <div className={styles.nopeContainer}>There is no pizza or Topping with that</div>
                )
                :
                (
                filteredPizzas.map(pizza =>{
                    return(
                        <div className={styles.pizzaItem} key={pizza.id}>
                            <Link href={`/${pizza.slug}`}><a className={styles.pizzaImageBox}>
                                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                            </a></Link>
                            <div className={styles.pizzaText}>
                                <p className={styles.pizzaHeader}>{pizza.name}</p>
                                <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                                <p className={styles.pizzaPrice}>{pizza.price}</p>
                            </div>
                        </div>
                    )
                    })
                )}
            </div>
        </div>
    )
}
