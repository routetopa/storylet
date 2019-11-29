import React, { useEffect, useRef } from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

import '../../style/container/image-gallery-container.css'

export default function ImageGalleryContainer({isOpened, closeGallery}) {

    const nature = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
            width: 4,
            height: 3
        }
    ];

    const fantastic_characters = [
        {
            src: "./images/fantastic-characters/001-centaur.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/002-kraken.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/003-dinosaur.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/004-tree-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/005-hand.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/006-echidna.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/007-robot.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/008-mushroom.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/009-harpy.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/010-phoenix.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/011-dragon-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/012-devil.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/013-troll.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/014-alien.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/015-minotaur.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/016-madre-monte.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/017-satyr.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/018-karakasakozou.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/019-pirate.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/020-werewolf.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/021-scarecrow.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/022-valkyrie.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/023-curupira.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/024-loch-ness-monster.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/025-tree.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/026-cerberus.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/027-gryphon.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/028-mermaid.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/029-vampire.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/030-goblin.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/031-yeti.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/032-leprechaun.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/033-medusa.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/034-chimera.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/035-elf.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/036-hydra.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/037-cyclops.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/038-pegasus.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/039-narwhal.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/040-woodcutter.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/041-zombie.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/042-dragon.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/043-frankenstein.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/044-witch.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/045-fairy.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/046-genie.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/047-pinocchio.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/048-ghost.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/049-wizard.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fantastic-characters/050-unicorn.png",
            width: 1,
            height: 1
        }
    ];

    const full = useRef(false);

    useEffect(()=>{
        if(isOpened)
            full.current.style.display = 'block';
        else
            full.current.style.display = 'none';
    }, [isOpened]);



    return (
        <>
            <div id="image-gallery-full" ref={full} onClick={closeGallery}>
                <div id="image-gallery">
                    <Gallery photos={nature} />
                </div>
            </div>
        </>
    )
};