import productList from '../../pages/productList/productList.json';
import List from '../../pages/productList/list/list'
import Slide from '../../components/slideProductPage/slideProductPage';

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'; 

function CardSlider () {
    const settings: SwiperProps = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        pagination:true,
        draggable: true,
        loop: true,
    };

    let produtosRecomendados = [...productList];
    produtosRecomendados = produtosRecomendados.sort(() => 0.5 - Math.random()).splice(0,4);

    return(
        <Slide settings={settings}>
            {produtosRecomendados.map(item => (
                <SwiperSlide>
                    <List key={item.nome} {...item} />
                </SwiperSlide>
            ))}
        </Slide>
    );
}

export default CardSlider;