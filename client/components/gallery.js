import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import { read } from '../api/image'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {
    const [images, setImages] = useState([]);

    const [showModal, setshowModal] = useState(false);
    const [imgSrc, setimgSrc] = useState('');

    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = async () => {
        const { data, error } = await read(images.length);
        if (error) {
            console.log(error);
            return;
        }
        setImages([...images, ...data]);
        // console.log(data)
    }

    const openModalWithImage = (value) => {
        setimgSrc(value);
        setshowModal(true);
        console.log(value);
    }

    const closeModalWithImage = (value) => {
        setshowModal(false);
        setimgSrc('');
    }

    return (
        <InfiniteScroll
            dataLength={images.length}
            hasMore={true}
        >
            <div className={showModal ? "modal column" : "modal hide"}
            >
                <div className="column">
                    <div>
                        <img src={imgSrc.imageUrl} />
                    </div>
                    <div className="close">
                        <div>
                            {imgSrc.description}

                            {imgSrc.user}
                        </div>
                        <button onClick={() => closeModalWithImage()}> Close </button>
                    </div>
                </div>
            </div>

            <div className="gallery">
                {
                    images.map((image, index) => {
                        return (
                            <div className="image" key={index} onClick={() => openModalWithImage(image)}>

                                <LazyLoadImage
                                    key={index}
                                    effect="blur"
                                    src={image.imageUrl}
                                    style={{ width: '100%' }}
                                    height="500px" />
                            </div>


                        )
                    })
                }
            </div >
        </InfiniteScroll >

    )
}

export default Gallery