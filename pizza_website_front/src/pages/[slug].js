import React from 'react'
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Pizza({pizza, otherPizzas}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizaaWrapperLeft}>
                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage}/>
            </div>
            <div className={styles.pizzaWrapperRight}>
                <div className={styles.pizzaInfo}>
                    <p className={styles.pizzaTitle}>{pizza.name}</p>
                    <p className={styles.pizzaDescription}>{pizza.description}</p>
                    <p className={styles.pizzaPrice}>{pizza.price}</p>
                    <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                </div>
                <div className={styles.otherPizzasWrapper}>
                    {otherPizzas.map(otherpizza =>{
                        return(
                            <div className={styles.otherPizzas} key={otherpizza.id}>
                               <Link href={"/" + otherpizza.slug}><a>
                                <img src={otherpizza.image} alt={otherpizza.name} />
                                <p>{otherpizza.name}</p>
                               </a></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () =>{
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
    const paths = pizzas.map(pizza => ({
        params: {slug: `${pizza.slug}`}
    }));
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) => {
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
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return{
        props:{
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random - Math.random()).slice(0, 3),
        }
    }

}