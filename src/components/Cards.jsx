import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";



function Cards(){

    let products = [
        {
          "id": 1,
          "check":false,
          "img": "https://avatars.mds.yandex.net/i?id=1e1c83c7612b9b8cd926609135fd2c31d233633b-4546420-images-thumbs&n=13",
          "quantity":"мастер донер",
          "price": "быстро вкусно не дорого",
          "text_one": "0 KZT ₸₸₸₸ 😃8.2",
          "text": "30-40 мин"
        },
        {
          "id": 2,
          "check":false,
          "img": "https://avatars.mds.yandex.net/i?id=d95c5b96250a4be4129cafc11bbd4fb5e388f016-12633480-images-thumbs&n=13",
          "quantity":"Донер на Сатпаева 3",
          "price": "Вкуснейший донер 🌯",
          "text_one": "0 KZT ₸₸₸₸ 😃8.4",
          "text": "30-40 мин"
        },
        {
          "id": 3,
          "check":false,
          "img": "https://avatars.mds.yandex.net/i?id=54278302f3c755b9ab107471324646d73e58d1d2-10686310-images-thumbs&n=13",
          "quantity":'Degirmen Gagarina',
          "price": "Все самое вкусное: сладкое, торты, кексы и лукумы - ждут вас в Degirmen-e",
          "text_one": "0 KZT ₸₸₸₸ 😃8.2",
          "text": "40-50 мин"
        },
        {
          "id": 4,
          "check":false,
          "img": "https://avatars.mds.yandex.net/i?id=be059e1e873f3504be7dc939e7f99283f0eba100-11932091-images-thumbs&n=13",
          "quantity":"Чебуречная №1",
          "price": "Вкусные и свежие чебуреки 🌯",
          "text_one": "0 KZT ₸₸₸₸ 😃8.2",
          "text": "30-40 мин"
        },
        ]
        const [search,setSearch] = useState("");
        const [cards, setCards] = useState(products)
        useEffect(()=>{
          setCards(products.filter(p=>p.quantity.toLowerCase().includes(search.toLowerCase())))
        },[search])
    return(
    <div className="products">
      <div className="search">
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div>
        {cards.map((p) => <Card product = {p}/>)}
    </div>
)

}

export default Cards;