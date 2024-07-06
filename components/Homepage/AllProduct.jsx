import React from 'react';
import Boostrapcard from './Bootstrapcard';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllProduct = () => {
    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            padding: '20px',
            margin: '20px 0',
        },
        
        h1: {
            fontSize: '20px',
            fontWeight: '700',
            marginLeft: '20px',
            color: "red",
        },
        myP: {
          fontSize: '16px',
          fontWeight: '400',
          marginLeft: '20px',
        },
        container: {
            padding: '20px',
        }
    };

    const groceries = [
        {
            id: 1,
            title: 'Fresh Tomatoes - Full Basket',
            imgUrl: 'https://247foods.ng/public/uploads/1599648694-h-250-tomato-one-basket.jpg',
            description: 'Fresh Tomatoes - Full Basket (Local)',
            price: 2499.99,
        },
        {
            id: 2,
            title: 'Full Goat - Big Size',
            imgUrl: 'https://247foods.ng/public/uploads/1649775112-h-250-full.jpg',
            description: 'Full Goat - Big Size (Slaughtered) - (Local Market)',
            price: 1399.99,
        },
        {
            id: 3,
            title: 'Asa Fish, Big Fish Size',
            imgUrl: 'https://247foods.ng/public/uploads/1646823527-h-250-Untitled%20design%20(1).png',
            description: 'Asa Fish, Big Fish Size - 12 dozens',
            price: 1799.99,
        },
        {
            id: 4,
            title: 'Oloyin / Honey Beans',
            imgUrl: 'https://247foods.ng/public/uploads/1627037298-h-250-newbeans.jpg',
            description: 'Oloyin / Honey Beans (Cleaned ) - 3.1kg (1 Paint)',
            price: 1599.99,
        },
        {
            id: 5,
            title: 'Dry Roasted Ukwa',
            imgUrl: 'https://247foods.ng/public/uploads/1652953162-h-250-20220519_101914_0000.png',
            description: 'Dry Roasted Ukwa - Derica',
            price: 1499.99,
        },
    ];

    const needs = [
        {
            id: 1,
            title: 'Fresh Tomatoes - Full Basket',
            imgUrl: 'https://247foods.ng/public/uploads/1594475012-h-250-Letuce.jpg',
            description: 'Fresh Tomatoes - Full Basket (Local Market)',
            price: 2499.99,
        },
        {
            id: 2,
            title: 'Full Goat - Big Size',
            imgUrl: 'https://247foods.ng/public/uploads/1599230836-h-250-oranges-12-pieces.jpg',
            description: 'Full Goat (Slaughtered) - (Local)',
            price: 1399.99,
        },
        {
            id: 3,
            title: 'Asa Fish, Big Fish Size',
            imgUrl: 'https://247foods.ng/public/uploads/1594480211-h-250-Lime-Half-Paint-Tin.jpg',
            description: 'Asa Fish, Big Fish Size - 12 dozens',
            price: 1799.99,
        },
        {
            id: 4,
            title: 'Oloyin / Honey Beans',
            imgUrl: 'https://247foods.ng/public/uploads/1637141177-h-250-apples.jpg',
            description: 'Oloyin / Honey Beans (Cleaned ) - 3.1kg (1 Paint)',
            price: 1599.99,
        },
        {
            id: 5,
            title: 'Dry Roasted Ukwa',
            imgUrl: 'https://247foods.ng/public/uploads/1595600681-h-250-fresh%20carrots.jpg',
            description: 'Dry Roasted Ukwa - Derica',
            price: 1499.99,
        },
    ];

    return (
            
        <div style={styles.container}>
        
            <h1 style={styles.h1}>Top Selling</h1>
            <div style={styles.grid}>
                {groceries.map((grocery) => (
                    <Boostrapcard
                        key={grocery.id}
                        title={grocery.title}
                        imgUrl={grocery.imgUrl}
                        description={grocery.description}
                        price={grocery.price}
                    />
                ))}
            </div>
            <h1 style={styles.h1}>Fruits & Vegetables</h1>
            <p style={styles.myP}>Buy farm fresh fruits and vegetables online at the best prices</p>
            <div style={styles.grid}>
                {needs.map((need) => (
                    <Boostrapcard
                        key={need.id}
                        title={need.title}
                        imgUrl={need.imgUrl}
                        description={need.description}
                        price={need.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProduct;
