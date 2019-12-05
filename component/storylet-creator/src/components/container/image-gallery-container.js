import React, { useState, useEffect, useRef } from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

import '../../style/container/image-gallery-container.css'
import {faTimes,faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
    const fairytale = [
        {
            src: "./images/fairytale/001-spell book.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/002-magic wand.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/003-mortar.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/004-axe.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/005-sports and competition.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/006-gem.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/007-coffin.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/008-ritual.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/009-magic dust.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/010-moon.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/011-broom.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/012-potion.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/013-spell book.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/014-crown.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/015-crown.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/016-diploma.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/017-shield.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/018-viking helmet.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/019-heart.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/020-chest.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/021-ring.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/022-skull.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/023-magic hat.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/024-stump.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/025-compass.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/026-map.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/027-key.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/028-flag.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/029-excalibur.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/030-amulet.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/031-tower.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/032-fairy.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/033-magic mirror.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/034-cauldron.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/035-musketeer.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/036-mushroom.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/037-cup.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/038-cave.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/039-shooting star.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/040-ghost.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/041-apple.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/042-crosier.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/043-candlestick.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/044-frog.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/045-magic ball.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/046-shoe.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/047-book.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/048-quill.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/049-sword.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/fairytale/050-rainbow.png",
            width: 1,
            height: 1
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
    const landscapes = [
        {
            src: "./images/landscapes/aurora-borealis.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/bamboo.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/beach.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/bogs.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/bridge.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/cabin.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/canyon.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/cave.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/cityscape.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/cliff.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/desert.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/desert-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/farmland.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/fiord.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/forest.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/forest-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/forest-2.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/glacier.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/glacier-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/hill.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/iceberg.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/island.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/lake.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/landscape.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/lighthouse.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/machair.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/marsh.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/megalith.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/mountains.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/mountains-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/mountains-2.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/ocean.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/pier.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/prairie.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/rainforest.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/rainforest-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/road.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/ruins.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/sandstone.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/savannah.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/sea-bottom.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/sea-cave.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/shrubland.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/sunset.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/taiga.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/tundra.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/village.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/volcano.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/waterfalls.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/landscapes/woodland.png",
            width: 1,
            height: 1
        }
    ];
    const nautical_sailor = [
        {
            src: "./images/nautical-sailor/001-radar.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/002-oxygen-tank-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/003-fishes.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/004-porthole.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/005-windrose.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/006-yatch-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/007-hook-2.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/008-shirt.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/009-windsurf.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/010-placeholder.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/011-hook-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/012-map.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/013-pearl.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/014-anchor.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/015-buoy.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/016-submarine.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/017-seagull.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/018-message-in-a-bottle.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/019-kayak.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/020-hook.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/021-bell.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/022-barrel.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/023-boat.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/024-aqualung.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/025-binoculars.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/026-skull-and-bones.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/027-sailboat.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/028-lifesaver.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/029-dolphin.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/030-surfboard.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/031-shark.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/032-lighthouse.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/033-yatch.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/034-life-jacket.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/035-oxygen-tank.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/036-paddles.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/037-snorkel.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/038-sun.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/039-ship.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/040-boat-engine.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/041-whale.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/042-fish.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/043-captain.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/044-telescope.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/045-starfish.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/046-sailor-cap.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/047-compass.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/048-pipe.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/049-fishing-rod.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/nautical-sailor/050-helm.png",
            width: 1,
            height: 1
        }
    ];
    const number_characters = [
        {
            src: "./images/number-characters/Personaggio-piu.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio-meno.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio-per.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio-diviso.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 00.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 01.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 02.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 03.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 04.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 05.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 06.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 07.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 08.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 09.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/number-characters/Personaggio 10.png",
            width: 1,
            height: 1
        }
    ];
    const speech_bubbles = [
        {
            src: "./images/speech-bubbles/chat.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-1.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-2.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-3.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-4.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-5.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-6.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-7.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-8.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-9.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-10.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-11.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-12.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-13.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-14.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-15.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-16.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-17.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-18.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-19.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-20.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-21.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-22.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-23.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-24.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-25.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-26.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/chat-27.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/thinking.png",
            width: 1,
            height: 1
        },
        {
            src: "./images/speech-bubbles/thinking-1.png",
            width: 1,
            height: 1
        },

    ];

    const xxx = [
        {
            src: "./images/xxx/xxx",
            width: 1,
            height: 1
        },
    ];

    const galleries = [nature, fairytale, fantastic_characters, number_characters, speech_bubbles, landscapes, nautical_sailor];
    const [selectedGallery, setSelectedGallery] = useState(nature);

    const full = useRef(false);

    useEffect(()=>{
        if(isOpened)
            full.current.style.display = 'block';
        else
            full.current.style.display = 'none';
    }, [isOpened]);

    function hideImageGallery() {
        full.current.style.display = 'none';
    }

    function selectGallery(e) {
        setSelectedGallery(galleries[parseInt(e.currentTarget.value)]);
    }

    return (
        <>
            <div id="image-gallery-full" ref={full} onClick={closeGallery}>
                <div id="image-gallery">
                    <FontAwesomeIcon id="image-gallery-close" icon={faTimes} className="icon" />
                    <div id="image-gallery-header">
                        <select id="select-package" className="form-control col-md-4 col-sm-4" onChange={selectGallery}>
                            <option value="0">Natura</option>
                            <option value="1">Oggetti Fiaba</option>
                            <option value="2">Personaggi Fantastici</option>
                            <option value="3">Personaggi Numerici</option>
                            <option value="4">Fumetti</option>
                            <option value="5">Paesaggio</option>
                            <option value="6">Marinaio Nautico</option>
                        </select>
                        <FontAwesomeIcon id="image-gallery-search" icon={faSearch} className="icon" />
                        <input id="search-images" placeholder="Cerca ..." className="form-control col-md-4 col-sm-4"/>
                    </div>
                    <div id="image-gallery-body">
                        <Gallery photos={selectedGallery} />
                    </div>
                </div>
            </div>
        </>
    )
};