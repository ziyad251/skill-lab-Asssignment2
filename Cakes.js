
import React from 'react';
import CakeCard from '../components/CakeCard';

const cakesData = [
    { id: 1, name: 'Chocolate Cake', price: 'rupees 230', image: 'https://tse4.mm.bing.net/th?id=OIP.zJ4OwfLZrL9qABqx-HSYWwHaHa&pid=Api&P=0&h=180' },
    { id: 2, name: 'Vanilla Cake', price: 'rupees 410', image: 'https://tse3.mm.bing.net/th?id=OIP.ZIQ1S_VWCELnbWiGuuPZpgHaKX&pid=Api&P=0&h=180' },
    { id: 3, name: 'mango cake', price: 'rupees 520', image: 'https://th.bing.com/th/id/OIP.-71vW38GES83LMKKwiQkdQHaJQ?w=206&h=258&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 4, name: 'donut cake', price: 'rupees 390', image: 'https://th.bing.com/th/id/OIP.6mATrVlibmwvitWM50g5zAHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, name: 'fruit cake', price: 'rupees 360', image: 'https://th.bing.com/th/id/OIP.s57DgaRT89NjusSLjdHeoAHaJ5?w=146&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 6, name: 'birthday cake', price: 'rupees 340', image: 'https://th.bing.com/th/id/OIP.16bnL83Q32DahXXHe5tz9gHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 7, name: 'wedding cake', price: 'rupees 700', image: 'https://th.bing.com/th/id/OIP.5mc4fyYZ9CCoN6HsMmL6rAHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 8, name: 'strawberry cake', price: 'rupees 490', image: 'https://th.bing.com/th/id/OIP.AYPqM2dNyWb0W7ep8fPbWgHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 9, name: 'Red velvet cake', price: 'rupees 499', image: 'https://th.bing.com/th/id/OIP.eTMmurDUib1lt9EXnYYbZQHaJs?w=147&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 10, name: 'Carrot cake', price: 'rupees 399', image: 'https://th.bing.com/th/id/OIP.Tc9dexQAjgQoumk3H3UTQwHaLG?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 11, name: 'Cheese cake', price: 'rupees 299', image: 'https://th.bing.com/th/id/OIP._-sbrGe9S4wlfgBfy962xAHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 12, name: 'banana cake', price: 'rupees 199', image: 'https://th.bing.com/th/id/OIP.zh-3s5HfPTZtPJawaPVwqAHaLK?w=186&h=343&c=7&r=0&o=5&dpr=1.3&pid=1.7' },

]
function Cakes() {
    return (
        <div className="cakes">
            <h2>Our Cakes</h2>
            <div className="cakes-grid">
                {cakesData.map((cake) => (
                    <CakeCard key={cake.id} cake={cake} />
                ))}
            </div>
        </div>
    );
}

export default Cakes;
