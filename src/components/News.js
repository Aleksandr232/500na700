import Carousel from 'react-elastic-carousel';

import img from '../assets/img/unsplash-qw-qjru4ruy.png'
import img1 from '../assets/img/unsplash-qw-qjru4ruy-2.png'
import img2 from '../assets/img/unsplash-qw-qjru4ruy-4.png'
import img3 from '../assets/img/unsplash-qw-qjru4ruy-3.png'
import img4 from '../assets/img/unsplash-qw-qjru4ruy-1.png'
import img5 from '../assets/img/unsplash-qw-qjru4ruy-5.png'


const News=()=>{
  const images = [img, img1, img2, img3, img4, img5];

    return(
        <>
            <div className="text-wrapper-14">Новости</div>
        <div className='news'> 
        <div className="element-5">
          <img className="unsplash-qw" alt="Unsplash qw" src={img} />
          <div className="frame-3">
            <div className="text-wrapper-15">Заголовок</div>
            <div className="text-wrapper-16">
              ОписаниОписание Описание&nbsp;&nbsp;Описание Описание Описание&nbsp;&nbsp;Описаниее
            </div>
          </div>
        </div>
        <div className="element-6">
          <img className="unsplash-qw" alt="Unsplash qw" src={img4} />
          <div className="frame-3">
            <div className="text-wrapper-15">Заголовок</div>
            <div className="text-wrapper-16">
              ОписаниОписание Описание&nbsp;&nbsp;Описание Описание Описание&nbsp;&nbsp;Описаниее
            </div>
          </div>
        </div>
        <div className="element-7">
          <img className="unsplash-qw" alt="Unsplash qw" src={img1} />
          <div className="frame-3">
            <div className="text-wrapper-15">Заголовок</div>
            <div className="text-wrapper-16">
              ОписаниОписание Описание&nbsp;&nbsp;Описание Описание Описание&nbsp;&nbsp;Описаниее
            </div>
          </div>
        </div>
        <div className="element-8">
          <img className="unsplash-qw" alt="Unsplash qw" src={img3} />
          <div className="frame-3">
            <div className="text-wrapper-15">Заголовок</div>
            <div className="text-wrapper-16">
              ОписаниОписание Описание&nbsp;&nbsp;Описание Описание Описание&nbsp;&nbsp;Описаниее
            </div>
          </div>
        </div>
        <div className="element-9">
          <img className="unsplash-qw" alt="Unsplash qw" src={img2} />
          <div className="frame-3">
            <div className="text-wrapper-15">Заголовок</div>
            <div className="text-wrapper-16">
              ОписаниОписание Описание&nbsp;&nbsp;Описание Описание Описание&nbsp;&nbsp;Описаниее
            </div>
          </div>
        </div>
        <div className="element-10">
          <img className="unsplash-qw" alt="Unsplash qw" src={img5} />
          <div className="frame-3">
            <div className="text-wrapper-15">Заголовок</div>
            <div className="text-wrapper-16">
              ОписаниОписание Описание&nbsp;&nbsp;Описание Описание Описание&nbsp;&nbsp;Описаниее
            </div>
          </div>
        </div>
        </div> 
        <div className='carousel'>
        <Carousel itemsToShow={1}>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <img className="unsplash-qw" alt="Unsplash qw" src={image} />
            <div className="frame-3">
              <div className="text-wrapper-15">Заголовок</div>
              <div className="text-wrapper-16">
                Описание Описание&nbsp;&nbsp;Описание Описание Описание&nbsp;&nbsp;Описаниее
              </div>
            </div>
          </div>
        ))}
      </Carousel>
        </div>
        </>
    )
}

export default News;