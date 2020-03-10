import React, { useState, useEffect, useRef } from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

import '../../style/container/image-gallery-container.css'
import '../../style/container/background-gallery-container.css'
import {faTimes,faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function BackgroundGalleryContainer({isOpened, closeGallery}) {

    const backgrounds = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/forest.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/sky.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/anchor-156720_960_720.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/astronaut-background-cartoon-cosmonaut.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/astronaut-cartoon-earth-exploration.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/atmosphere-vehicle-space-circle-outer-space-earth-1405991-pxhere.com.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/beach-4496830_960_720.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-background-nature.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-livingroom.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-nature-lake.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-nature_2.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/country-32248_960_720.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/forest.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/globe-308991_960_720.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/kitchen-294596_960_720.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/mare-molo.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-2679131_1280.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-2829157_1280.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-4407819_960_720.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/night-rocket-sky-astronomy-blue-bright-1574183-pxhere.com.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/ocean-background-4090017_960_720.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/playground-2108649_960_720.png",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/seascape-backdrop.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/sunset.JPG",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/the-house-in-the-field.jpg",
            width: 1.5,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "backgrounds/tree-sky-air-balloon-hot-air-balloon-wind-1210393-pxhere.com.jpg",
            width: 1.5,
            height: 1
        }
    ];

    const galleries = [ backgrounds ];

    const [selectedGallery, setSelectedGallery] = useState(backgrounds);

    const full = useRef(false);

    useEffect(()=>{
        if(isOpened)
            full.current.style.display = 'block';
        else
            full.current.style.display = 'none';
    }, [isOpened]);

    function selectGallery(e) {
        setSelectedGallery(galleries[parseInt(e.currentTarget.value)]);
    }

    return (
        <div id="image-gallery-full" className="background-gallery" ref={full} onClick={closeGallery}>
            <div id="image-gallery">
                <FontAwesomeIcon id="image-gallery-close" icon={faTimes} className="icon" />
                <div id="image-gallery-header">
                    <span>Sfondi</span>
                    <select defaultValue={'6'} id="select-package" className="form-control col-md-4 col-sm-4" onChange={selectGallery}>
                        <option value="0">Sfondi</option>
                    </select>
                    <FontAwesomeIcon id="image-gallery-search" icon={faSearch} className="icon" />
                    <input id="search-bg-images" className="search-bg-images" placeholder="Cerca ..." className="form-control col-md-4 col-sm-4"/>
                </div>
                <div id="image-gallery-body">
                    <Gallery photos={selectedGallery} />
                </div>
            </div>
        </div>
    )
};