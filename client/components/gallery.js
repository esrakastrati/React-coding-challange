import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import { read } from '../api/image'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [hasMore, sethasMore] = useState(true);
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

        if (!data.length) {
            sethasMore(false);
        }
    }

    const openModalWithImage = (value) => {
        setimgSrc(value);
        setshowModal(true);

        // console.log(value);
    }

    const closeModalWithImage = (value) => {
        setshowModal(false);
        setimgSrc('');
    }

    return (
        <InfiniteScroll
            dataLength={images.length}
            hasMore={hasMore}
            endMessage={
                <p style={{ textAlign: 'center', color: '#444' }}>
                    <b>You have seen it all :) </b>
                </p>
            }

            next={fetchImages}
        >
            {/* Modal div, open via clicink on the image */}

            <div className={showModal ? "modal column" : " hide"}
            >
                <div className="column">
                    <div className="username">
                        {imgSrc.user}
                        <span className="close" onClick={() => closeModalWithImage()}>&times;</span>
                    </div>
                    <div>
                        <img src={imgSrc.imageUrl} />
                    </div>
                    <div >
                        <div className="description">
                            {imgSrc.description}

                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery containing multiple images*/}
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
            </div>
        </InfiniteScroll>

    )
}

export default Gallery