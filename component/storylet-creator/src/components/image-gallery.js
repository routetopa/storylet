import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {translate} from "./helpers";
import { Button, Select, Modal, Row, Col, Popover } from 'antd';
import { CheckOutlined, BgColorsOutlined } from '@ant-design/icons';
import { SketchPicker } from 'react-color';
import { AntUpload } from "./CustomFormInput/AntUpload";

import '../style/image-gallery.css'

export default function ImageGallery({isOpened, closeGallery, type}) {
    const ln = useSelector(state => state.selectedLanguage);

    const bg1 = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/forest.png",
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/sky.png",
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/anchor-156720_960_720.png",
            _id:'156720_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/astronaut-background-cartoon-cosmonaut.jpg",
            _id:'cosmonaut'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/astronaut-cartoon-earth-exploration.jpg",
            _id:'exploration'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/atmosphere-vehicle-space-circle-outer-space-earth-1405991-pxhere.com.png",
            _id:'1405991'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/beach-4496830_960_720.png",
            _id:'4496830_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-background-nature.jpg",
            _id:'nature'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-livingroom.png",
            _id:'livingroom'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-nature-lake.jpg",
            _id:'lake'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-nature_2.jpg",
            _id:'nature_2'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/country-32248_960_720.png",
            _id:'32248_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/forest.jpg",
            _id:'forestforest'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/globe-308991_960_720.png",
            _id:'308991_960_720'

        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/kitchen-294596_960_720.png",
            _id:'294596_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/mare-molo.jpg",
            _id:'mare-molo'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature.jpg",
            _id:'naturecccc'
        },
    ];
    const bg2 = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-2679131_1280.jpg",
            _id:'2679131_1280'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-2829157_1280.png",
            _id:'2829157_1280'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-4407819_960_720.png",
            _id:'4407819_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/night-rocket-sky-astronomy-blue-bright-1574183-pxhere.com.jpg",
            _id:'1574183'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/ocean-background-4090017_960_720.jpg",
            _id:'4090017_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/playground-2108649_960_720.png",
            _id:'2108649_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/seascape-backdrop.jpg",
            _id:'seascape-backdrop.'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/sunset.JPG",
            _id:'sunset'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/the-house-in-the-field.jpg",
            _id:'house-in-the-fie'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/tree-sky-air-balloon-hot-air-balloon-wind-1210393-pxhere.com.jpg",
            _id:'1210393'
        }
    ];

    const fantastic_characters = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/001-centaur.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/002-kraken.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/003-dinosaur.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/004-tree-1.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/005-hand.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/006-echidna.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/007-robot.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/008-mushroom.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/009-harpy.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/010-phoenix.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/011-dragon-1.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/012-devil.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/013-troll.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/014-alien.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/015-minotaur.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/016-madre-monte.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/017-satyr.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/018-karakasakozou.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/019-pirate.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/020-werewolf.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/021-scarecrow.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/022-valkyrie.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/023-curupira.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/024-loch-ness-monster.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/025-tree.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/026-cerberus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/027-gryphon.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/028-mermaid.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/029-vampire.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/030-goblin.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/031-yeti.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/032-leprechaun.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/033-medusa.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/034-chimera.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/035-elf.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/036-hydra.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/037-cyclops.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/038-pegasus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/039-narwhal.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/040-woodcutter.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/041-zombie.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/042-dragon.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/043-frankenstein.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/044-witch.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/045-fairy.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/046-genie.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/047-pinocchio.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/048-ghost.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/049-wizard.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/050-unicorn.png"
        },
        // {
        //     path: window.STATIC.IMAGE_BASE_PATH + "storylet-prof.png"
        // }
    ];
    const sea_life = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/001-octopus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/002-crab.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/003-oyster.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/004-dolphin.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/005-starfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/006-flounder.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/007-shark.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/008-whale.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/009-fish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/010-swordfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/011-turtle.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/012-jellyfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/013-seahorse.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/014-puffer-fish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/015-sea-cow.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/016-orca.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/017-squid.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/018-coral.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/019-manta-ray.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/020-lobster.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/021-clam.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/022-seaweed.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/023-tuna.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/024-stingray.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/025-seal.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/026-eel.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/027-seagull.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/028-shrimp.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/029-anglerfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/030-beluga.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/031-walrus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/032-narwhal.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/033-diver.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/034-penguin.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/035-hammerhead-fish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/036-hermit-crab.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/037-clownfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/038-surgeon-fish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/039-angelfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/040-sunfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/041-sea-anemone.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/042-coral-1.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/043-fish-1.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/044-fish-2.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/045-cod.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/046-cuttlefish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/047-nautilus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/048-puffin.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/049-mussel.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/050-sea-urchin.png"
        }
    ];
    const education = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/agenda.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/apple.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/award.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/award-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/award-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/backpack.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/bag.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/bell.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/blackboard.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/blackboard-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/book.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/book-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/book-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/book-3.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/book-4.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/book-5.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/building.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/bulb.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/calculator.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/calculator-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/calculator-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/calendar.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/chat.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/chat.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/counting.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/counting-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/diploma.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/earth-globe.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/eraser.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/files.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/filing-cabinet.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/football.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/glasses.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/graduate.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/ink.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/lamp.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/laptop.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/letters.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/magnifying-glass.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/math.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/megaphone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/mouse.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/music.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/note.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/notebook.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/paper.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/pen.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/pen-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/pencil.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/pencil-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/pencils.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/pencils-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/pendrive.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/pipette.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/printer.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/puzzle.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/ranking.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/rocket.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/rugby.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/school.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/school-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/school-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/school-bus.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/science.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/scissors.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/stapler.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/student.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/tablet.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/tack.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/test.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/test-tube.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/test-tube-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/test-tube-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/test-tube-3.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/time.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/trophy.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/watercolor.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "169148-education/svg/watercolor-1.svg"
        }
    ];
    const video_camera = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/001-photo camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/002-memory card.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/003-video files.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/004-film roll.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/005-play button.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/006-panorama.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/007-video camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/008-vhs.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/009-video camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/010-film strip.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/011-full battery.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/012-pause button.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/013-flash.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/014-portrait.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/015-security camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/016-pocket camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/017-security camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/018-soft box.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/019-flash.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/020-ratio.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/021-super eight.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/022-film roll.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/023-jpg.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/024-action camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/025-webcam.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/026-auto flash.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/027-low battery.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/028-smartphone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/029-focus.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/030-image.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/031-aperture.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/032-no camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/033-eye.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/034-video camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/035-tripod.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/036-landscape.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/037-laptop.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/038-dvd.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/039-aperture.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/040-video microphone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/041-video camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/042-flash off.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/043-stop button.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/044-record button.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/045-camera.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/046-monitor.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/047-raw file.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "656390-video-camera/svg/048-camera.svg"
        }
    ];
    const warfare = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/001-crown.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/002-bunker.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/003-enlist.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/004-canon-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/005-revolver-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/006-shooting-target-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/007-catapult.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/008-pistol.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/009-aim.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/010-drone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/011-shooting-target.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/012-smoke-grenade.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/013-helmet-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/014-machine-gun-3.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/015-explosion-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/016-chemical-weapon.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/017-bomb-9.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/018-tent.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/019-remote-control.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/020-supplies-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/021-axe-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/022-viking-helmet.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/023-armour.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/024-shield-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/025-shield.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/026-crossbow.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/027-archery.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/028-axe.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/029-sword-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/030-sword.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/031-walkie-talkie.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/032-map.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/033-hazmat.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/034-bomb-8.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/035-check-point.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/036-revolver.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/037-machine-gun-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/038-flame-thrower.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/039-canon-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/040-ship-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/041-barbed-wire.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/042-machine-gun-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/043-bullets.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/044-uzi.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/045-jeep-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/046-machine-gun.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/047-helmet-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/048-launcher.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/049-bazooka.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/050-army-helicopter.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/051-truck-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/052-jeep.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/053-truck.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/054-hammer.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/055-bomb-7.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/056-ship.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/057-bomb-6.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/058-mine-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/059-mine.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/060-bomb-5.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/061-plane-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/062-explosion.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/063-bullet-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/064-military-helicopter.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/065-canon.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/066-gun.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/067-plane.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/068-molotov-cocktail.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/069-knife.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/070-beret.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/071-bomb-4.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/072-compass.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/073-grenade-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/074-grenade.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/075-target.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/076-submarine.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/077-helmet.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/078-bullet.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/079-bomb-3.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/080-rank-3.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/081-jet-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/082-rank-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/083-binoculars.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/084-tank-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/085-tank.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/086-bomb-2.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/087-radio.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/088-supplies.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/089-bomb-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/090-medal.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/091-bullet-proof-vest.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/092-jet-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/093-jet.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/094-dog-tag.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/095-rank-1.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/096-rank.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/097-gas-mask.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/098-radar.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/099-bomb.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "942338-warfare/svg/100-first-aid-kit.svg"
        }
    ];
    const home_stuff = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/001-coffee machine.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/002-coffee cup.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/003-bed.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/004-garbage bin.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/005-phone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/006-desk.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/007-television.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/008-toilet.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/009-hair dryer.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/009-hair dryer.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/011-armchair.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/012-furniture and household.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/013-fence.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/014-fireplace.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/015-mirror.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/016-washing machine.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/017-sink.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/018-fridge.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/019-hammer.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/020-window.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/021-door key.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/022-seat.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/023-fan.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/024-shower.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/025-roller.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/026-cutlery.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/027-alarm clock.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/028-teapot.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/029-plugging.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/030-closet.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/031-microwave.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/032-bathtub.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/033-coat stand.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/034-grill.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/035-blender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/036-lamp.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/037-apron.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/038-mixer.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/039-kitchen pack.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/040-chest.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/041-bookshelf.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/042-cradle.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/043-bed.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/044-iron.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/045-appliances.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/046-rice cooker.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/047-sewing machine.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/048-toaster.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/049-vacuum cleaner.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "1851952-home-stuff/svg/050-automation.svg"
        }
    ];
    const music = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/001-guitar.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/002-guitar.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/003-tambourine.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/004-record.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/005-metronome.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/006-recorder.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/007-record.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/008-gramophone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/009-shehnai.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/010-instrument.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/011-radio.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/012-microphone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/013-keyboard.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/014-record.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/015-score.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/016-cassette.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/017-cassette.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/018-ocarina.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/019-drum.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/020-accordion.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/021-recorder.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/022-saxophone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/023-maracas.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/024-chimes.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/025-cymbals.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/026-stereo.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/027-piano.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/028-mandolin.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/029-disk.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/030-oscilloscope.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/031-banjo.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/032-speaker.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/033-harp.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/034-violin.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/035-glockenspiel.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/036-drum.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/037-mobile.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/038-gong.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/039-xylophone.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "2735389-music/svg/040-microphone.svg"
        }
    ];
    const gender_identity = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/001-third gender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/002-girlfriend.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/003-gay.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/004-heterosexual.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/005-biphobia.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/006-genderless.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/007-rainbow flag.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/008-epicene.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/009-man.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/010-woman.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/011-woman.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/012-transgender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/013-hermaphrodite.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/014-transgender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/015-transgender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/016-intersex.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/017-genderqueer.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/018-cisgender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/019-cisgender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/020-heterosexual.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/021-aliagender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/022-man.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/023-equality.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/024-worldwide.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/025-gender expression.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/026-tolerance.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/027-lgbtq.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/028-homophobia.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/029-pansexual.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/030-intergender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/031-male gender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/032-bisexual.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/033-travesti.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/034-tshirt.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/035-transgender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/036-lesbian.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/xxxxxxxxxxxxx"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/038-neutrois.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/039-transgender.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/040-woman.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/041-man.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/042-rainbow.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/043-heterosexual.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/044-demiboy.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/045-broken heart.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/046-demigirl.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/047-genderless.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/048-genderqueer.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/049-androgyne.svg"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "3100882-gender-identity/svg/050-third gender.svg"
        }
    ];

    const [images, setImages] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState([]);
    const [selectedColor, setSelectedColor] = useState('#fafafa');
    const [selectedImg, setSelectedImg] = useState({});
    const [uploadedImg, setUploadedImg] = useState(null);

    // useEffect(()=>{
        // alert('pippo')
    // }, []);

    useEffect(()=>{
        if(!type)
            return;
        const uploads = [];

        if(window.RESOURCES && window.RESOURCES.IMAGES)
            for(let i=0; i<window.RESOURCES.IMAGES.length; i++)
                if(window.RESOURCES.IMAGES[i].type === type)
                    uploads.push(window.RESOURCES.IMAGES[i]);

        images[0] = uploads;
        if(type === 'background') {
            images[1] = bg1;
            images[2] = bg2;
        } else if(type === 'image') {
            images[1] = fantastic_characters;
            images[2] = sea_life;
            images[3] = education;
            images[4] = video_camera;
            images[5] = warfare;
            images[6] = home_stuff;
            images[7] = music;
            images[8] = gender_identity;
        }

        setImages(images);
        setSelectedGallery(uploads.length ? images[0] :  images[1]);
    }, [type]);

    function selectGallery(idx) {
        setSelectedGallery(images[idx]);
    }

    const getOptions = () => {
        let options = [];
        if(hasUploads())
            options.push(<Option key={0} value="0">{translate('optionUploads', ln)}</Option>)
        if(type === 'background') {
            options.push(<Option key={1} value="1">{translate('optionBG1', ln)}</Option>)
            options.push(<Option key={2} value="2">{translate('optionBG2', ln)}</Option>)
        } else if(type === 'image') {
            options.push(<Option key={1} value="1">{translate('fantasticCharacters', ln)}</Option>)
            options.push(<Option key={2} value="2">{translate('seaLife', ln)}</Option>)
            options.push(<Option key={3} value="3">{translate('education', ln)}</Option>)
            options.push(<Option key={4} value="4">{translate('video_camera', ln)}</Option>)
            options.push(<Option key={5} value="5">{translate('warfare', ln)}</Option>)
            options.push(<Option key={6} value="6">{translate('home_stuff', ln)}</Option>)
            options.push(<Option key={7} value="7">{translate('music', ln)}</Option>)
            options.push(<Option key={8} value="8">{translate('gender_identity', ln)}</Option>)
        }
        return options;
    };

    const hasUploads = () => {
        return images[0] && images[0].length;
    };

    const { Option } = Select;

    const isSelected = (id) => {
        if(selectedImg._id)
            return selectedImg._id === id;
        return selectedImg.path === id;
    };

    const handleItemClick = (item) => {
        setSelectedImg(item);
    };

    const handleChangeComplete = (color) => {
        setSelectedColor('rgba('+color.rgb.r+','+color.rgb.g+','+color.rgb.b+','+color.rgb.a+')');
    };

    const onUploadChange = ({fileList}) => {
        setUploadedImg(fileList);
    };

    return (
        <Modal title={type==='image' ? translate('selectImage', ln) : translate('selectBackground', ln)}
            visible={isOpened} width={'60vw'}
            bodyStyle={{maxHeight:'60vh', overflowX:'auto', backgroundColor:'transparent', padding:8}}
            onOk={() => closeGallery(selectedImg, selectedColor, type, uploadedImg)}
            onCancel={() => closeGallery({_id:'@close'})}

            footer={[
                <Select key="select" defaultValue={hasUploads() ? "0" : "1"} onChange={selectGallery}>
                    {getOptions()}
                </Select>,
                <Button key="cancel" onClick={() => closeGallery({_id:'@close'})}>{translate('buttonCancel', ln)}</Button>,
                <Button key="ok" type="primary" onClick={() => closeGallery(selectedImg, selectedColor, type, uploadedImg)}>{translate('buttonOk', ln)}</Button>
            ]}
        >
            <Row className={'ant-image-grid'} gutter={[8, 8]}>
                <Col key={'@upload'} span={8}>
                    <div className={'upload' + (isSelected('@upload') ? ' selected' : '')}
                         onClick={()=>handleItemClick({_id:'@upload'})}
                    >
                        <AntUpload max={1} onChange={onUploadChange} />
                        <CheckOutlined className={'check'} />
                    </div>
                </Col>

                {type === 'background' ? <Col key={'@color'} span={8}>
                    <Popover content={(<SketchPicker color={selectedColor} onChangeComplete={handleChangeComplete}/>)}
                             trigger="click">
                        <div className={'select-color' + (isSelected('@color') ? ' selected' : '')}
                             onClick={() => handleItemClick({_id: '@color'})}
                             style={{backgroundColor: selectedColor}}
                        >
                            <div className={'select-color-label'}>
                                <BgColorsOutlined/>
                                <div>{translate('selectColor', ln)}</div>
                            </div>
                            <CheckOutlined className={'check'}/>
                        </div>
                    </Popover>
                </Col> : ''}
                {selectedGallery.map(function(item, idx){
                    return (
                        <Col key={idx} span={8}>
                            <div className={'img-preview' + (isSelected(item._id || item.path) ? ' selected' : '')}
                                 style={{backgroundImage: 'url("' + item.path + '")'}}
                                 onClick={()=>handleItemClick(item)}
                            >
                                {item.name ? <div className={'name'}>{item.name}</div> : ''}
                                <CheckOutlined className={'check'} />
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Modal>
    )
};