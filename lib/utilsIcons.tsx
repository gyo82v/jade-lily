import {FaPepperHot, FaLeaf, FaUtensils, FaRegStar, FaStar, FaStarHalfAlt, FaFire, FaChartLine} from 'react-icons/fa';
import {GiGrapes, GiFrenchFries, GiCarrot, GiWineGlass, GiGlassShot, GiChocolateBar} from 'react-icons/gi';
import { FiRefreshCw } from 'react-icons/fi';

export function renderStars(rating:number){
    let stars = []

    for(let i = 1; i <= 5; i++){
        if(rating >=i){
            stars.push(<FaStar key={i} className="text-yellow-500" />)
        }else if(rating >= i -0.5){
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />)
        }else{
            stars.push(<FaRegStar key={i} className="text-yellow-500" />)
        }            
    }

    const ratingText = `${rating} out of 5 stars`

    return(
        <div>
            <div aria-hidden={true} className="flex items-center">{stars}</div>
            <span className="sr-only">{ratingText}</span>
        </div>
    )
}

export function renderIcon(filter?:string){
   return filter === "Spicy" ? <FaPepperHot /> :
          filter === "Fruits" ? <GiGrapes /> :
          filter === "Choco" ? <GiChocolateBar /> :
          filter === "Alchool" ? <GiWineGlass /> :
          filter === "No-alchool" ? <GiGlassShot /> :
          filter === "Special" ? <FaRegStar /> :
          filter === "Regular" ? <FaUtensils /> :
          filter === "Vegetarian" ? <FaLeaf /> :
          filter === "Salad" ? <GiCarrot /> :
          filter === "Starter" ? <GiFrenchFries /> : <FiRefreshCw />
}

export function renderPopularityIcon(popularity:number){
   return popularity > 1 ? <FaFire aria-hidden={true} title='Very popular' /> :
                           <FaChartLine aria-hidden={true} title='Popular' />                   
}