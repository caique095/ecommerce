import productList from '../../pages/productList/productList.json';
import List from '../../pages/productList/list/list'
import Slide from '../../components/slideProductPage/slideProductPage';

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'; 

function CardSlider () {
    const settings: SwiperProps = {
        spaceBetween: 50,
        navigation: true,
        pagination: true && {
            clickable: true,
        },
        draggable: true,
        loop: true,
        breakpoints: {
            300: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            800: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            }
        }
    };

    let produtosRecomendados = [...productList];
    produtosRecomendados = produtosRecomendados.sort(() => 0.5 - Math.random()).splice(0,8);

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