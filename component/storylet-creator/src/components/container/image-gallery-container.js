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
    const xxx = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "xxx/xxx",
            width: 1,
            height: 1
        },
    ];

    const australia = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/001-australia.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/002-beach.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/003-calendar.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/004-bbq.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/005-kiwi.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/006-t-shirt.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/007-koala.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/008-vegemite.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/009-sailboat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/010-ostrich.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/011-flip-flops.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/012-boomerang.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/013-backpack.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/014-globe.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/015-jeep.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/016-placeholder.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/017-tarantula.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/018-wine.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/019-kangaroo.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/020-hat.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/021-surfboard.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/022-travelling.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/023-platypus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/024-smartphone.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/025-boomerangs.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/026-shark.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/027-hat-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/028-uluru.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/029-melbourne.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/030-placeholder-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/031-beers.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/032-sidney-harbour-bridge.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/033-location.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/034-sword.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/035-time.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/036-signage.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/037-heart.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/038-opera-house.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/039-turtle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/040-kayak.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/041-tan-tan.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/042-cricket.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/043-sheep.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/044-letter.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/045-australia-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/046-monitor.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/047-crocodile.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/048-skateboard.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/049-bird.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "australia/050-tram.png",
            width: 1,
            height: 1
        }
    ];
    const banking = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/001-money.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/002-bandit.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/003-bank.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/004-bitcoin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/005-calculator.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/006-currency.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/007-computer.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/008-computer-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/009-credit-card.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/010-credit-card-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/011-credit-card-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/012-deposit.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/013-diamond.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/014-bill.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/015-archives.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/016-gold-ingots.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/017-dollar-symbol.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/018-manager.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/019-map.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/020-business.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/021-money-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/022-money-bag.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/023-money-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/024-money-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/025-dollar-symbol-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/026-euro.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/027-money-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/028-wallet.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/029-money-5.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/030-business-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/031-payment.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/032-money-6.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/033-money-7.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/034-money-8.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/035-safe-box.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "banking/036-policeman.png",
            width: 1,
            height: 1
        }
    ];
    const car = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/001-bus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/002-bus-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/003-bus-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/004-car.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/005-car-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/006-car-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/007-car-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/008-convertible.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/009-convertible-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/010-car-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/011-car-5.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/012-car-6.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/013-car-7.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/014-car-8.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/015-car-9.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/016-convertible-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/017-car-10.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/018-car-11.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/019-car-12.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/020-truck.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/021-car-13.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/022-car-14.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/023-car-15.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/024-car-16.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/025-car-17.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/026-car-18.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/027-car-19.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/028-convertible-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/029-car-20.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/030-car-21.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/031-car-22.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/032-truck-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/033-truck-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/034-truck-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/035-truck-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "car/036-truck-5.png",
            width: 1,
            height: 1
        }
    ];
    const coffee_shop = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/001-books.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/002-coffee-bag.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/003-coffee-bag-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/004-coffee-beans.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/005-coffee-beans-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/006-coffee.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/007-coffee-cups.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/008-coffee-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/009-coffee-machine.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/010-coffee-machine-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/011-coffee-machine-2.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/012-coffee-machine-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/013-coffee-machine-4.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/014-coffee-maker.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/015-coffee-maker-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/016-coffee-maker-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/017-coffee-shop.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/018-coffee-shop-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/019-coffee-pot.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/020-filter.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/021-french-press.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/022-grinder.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/023-grinder-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/024-grinder-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/025-grinder-3.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/026-hot-coffee.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/027-hot-coffee-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/028-hot-coffee-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/029-paper-cup.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/030-ice-coffee.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/031-kettle.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/032-latte.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/033-menu.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/034-pitcher.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/035-sugar.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "coffee-shop/036-sugar-1.png",
            width: 1,
            height: 1
        }
    ];
    const fairytale = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/001-spell book.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/002-magic wand.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/003-mortar.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/004-axe.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/005-sports and competition.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/006-gem.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/007-coffin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/008-ritual.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/009-magic dust.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/010-moon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/011-broom.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/012-potion.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/013-spell book.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/014-crown.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/015-crown.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/016-diploma.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/017-shield.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/018-viking helmet.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/019-heart.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/020-chest.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/021-ring.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/022-skull.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/023-magic hat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/024-stump.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/025-compass.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/026-map.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/027-key.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/028-flag.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/029-excalibur.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/030-amulet.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/031-tower.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/032-fairy.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/033-magic mirror.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/034-cauldron.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/035-musketeer.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/036-mushroom.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/037-cup.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/038-cave.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/039-shooting star.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/040-ghost.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/041-apple.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/042-crosier.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/043-candlestick.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/044-frog.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/045-magic ball.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/046-shoe.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/047-book.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/048-quill.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/049-sword.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fairytale/050-rainbow.png",
            width: 1,
            height: 1
        }
    ];
    const family_life = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/001-mother-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/002-father-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/003-school.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/004-park.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/005-beach-ball.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/006-groceries.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/007-house-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/008-tree.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/009-diaper.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/010-fish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/011-key.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/012-dinner.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/013-beach-umbrella.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/014-photo-album.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/015-mug-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/016-makeup.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/017-portfolio.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/018-pacifier.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/019-pipe.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/020-plant.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/021-mug.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/022-rug.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/023-roller-skate.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/024-home-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/025-home-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/026-home.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/027-tree-house.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/028-car.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/029-exam.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/030-food.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/031-clapperboard.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/032-sofa.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/033-feeding-bottle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/034-ultrasound.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/035-stroller.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/036-picture.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/037-wedding-rings.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/038-bicycle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/039-cake.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/040-grandmother.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/041-grandfather.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/042-pregnant.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/043-house.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/044-baby.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/045-cat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/046-dog.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/047-girl.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/048-boy.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/049-mother.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "family-life/050-father.png",
            width: 1,
            height: 1
        }
    ];
    const fantastic_characters = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/001-centaur.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/002-kraken.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/003-dinosaur.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/004-tree-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/005-hand.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/006-echidna.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/007-robot.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/008-mushroom.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/009-harpy.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/010-phoenix.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/011-dragon-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/012-devil.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/013-troll.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/014-alien.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/015-minotaur.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/016-madre-monte.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/017-satyr.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/018-karakasakozou.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/019-pirate.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/020-werewolf.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/021-scarecrow.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/022-valkyrie.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/023-curupira.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/024-loch-ness-monster.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/025-tree.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/026-cerberus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/027-gryphon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/028-mermaid.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/029-vampire.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/030-goblin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/031-yeti.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/032-leprechaun.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/033-medusa.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/034-chimera.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/035-elf.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/036-hydra.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/037-cyclops.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/038-pegasus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/039-narwhal.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/040-woodcutter.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/041-zombie.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/042-dragon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/043-frankenstein.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/044-witch.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/045-fairy.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/046-genie.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/047-pinocchio.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/048-ghost.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/049-wizard.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/050-unicorn.png",
            width: 1,
            height: 1
        },
        // {
        //     src: window.STATIC.IMAGE_BASE_PATH + "storylet-prof.png",
        //     width: 0.8,
        //     height: 1
        // },
    ];
    const fishing = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/001-anchor.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/002-bait.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/003-hook.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/004-binoculars.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/005-steering-wheel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/006-boot.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/007-fishes.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/008-camping-chair.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/009-cauldron.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/010-fish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/011-boat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/012-fisherman.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/013-fishing-boat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/014-fishing-boat-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/015-fishing-net.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/016-fishing-net-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/017-fishing-reel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/018-fishing-rod.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/019-fishing-vest.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/020-flippers.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/021-bait-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/022-hook-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/023-inflatable-boat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/024-lifesaver.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/025-life-vest.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/026-oil-lamp.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/027-oxygen-tank.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/028-paddles.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/029-pier.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/030-radar.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/031-sailboat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/032-scale.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/033-diving-mask.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/034-fish-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/035-swiss-army-knife.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/036-thermo.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/001-scale.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/002-sailor.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/003-porthole.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/004-map.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/005-lobster.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/006-lighthouse.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/007-lifesaver.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/008-life-vest.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/009-knife.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/010-fish-10.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/011-toolbox.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/012-fishing-rod-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/013-fishing-rod-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/014-fishing-rod-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/015-fishing-rod.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/016-pin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/017-fish-9.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/018-fisherman.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/019-fishing-net.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/020-fish-8.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/021-fishing.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/022-fish-7.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/023-fish-6.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/024-fish-5.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/025-fish-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/026-fish-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/027-fish-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/028-fish-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/029-fish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/030-crab.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/031-bonfire-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/032-bonfire.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/033-chair.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/034-kayak.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/035-boots.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/036-helm.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/037-sailboat-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/038-sailboat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/039-boat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "fishing/040-anchor.png",
            width: 1,
            height: 1
        }
    ];
    const housing = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/001-house.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/002-house-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/003-house-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/004-mansion.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/005-house-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/006-house-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/007-house-5.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/008-house-6.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/009-house-7.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/010-house-8.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/011-house-9.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/012-house-10.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/013-house-11.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/014-mansion-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/015-house-12.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/016-mansion-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/017-house-13.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/018-house-14.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/019-house-15.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/020-house-16.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/021-house-17.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/022-house-18.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/023-house-19.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/024-mansion-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/025-house-20.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/026-mansion-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/027-house-21.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/028-mansion-5.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/029-house-22.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/030-house-23.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/031-house-24.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/032-teepee.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/033-house-25.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/034-barn.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/035-mansion-6.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/036-house-26.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/037-house-27.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/038-house-28.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/039-house-29.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "housing/040-house-30.png",
            width: 1,
            height: 1
        }
    ];
    const july_amusement_park = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/001-hot air balloon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/002-balloons.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/003-vending machine.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/004-bottles.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/005-cup.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/006-bumper car.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/007-bumper boats.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/008-cannon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/009-carousel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/010-car.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/011-castle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/012-castle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/013-circus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/014-clown.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/015-duck shooting.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/016-elephant.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/017-family.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/018-ferris wheel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/019-firework.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/020-gumball machine.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/021-whack a mole.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/022-hot dog.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/023-magician.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/024-mascot.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/025-popcorn.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/026-roller coaster.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/027-ship.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/028-shooting.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/029-slider.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/030-slide.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/031-Cotton.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/032-swing.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/033-teddy bear.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/034-ticket.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/035-ticket office.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "july-amusement-park/036-unicycle.png",
            width: 1,
            height: 1
        }
    ];
    const kitchen_utensils = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/001-steak.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/002-chicken.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/003-vegetables.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/004-fryer.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/005-spoon.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/006-milk.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/007-rolling-pin.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/008-flour.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/009-egg.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/010-matches.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/011-pizza-cutter.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/012-pastry-bag.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/013-cocktail-glass.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/014-brush.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/015-oven.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/016-spatula.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/017-sauces.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/018-ladle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/019-chef.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/020-teapot.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/021-timer.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/022-tap.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/023-refrigerator.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/024-grater.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/025-opener.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/026-kitchen-board.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/027-strainer.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/028-fork.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/029-extractor-hood.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/030-scale.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/031-squeezer.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/032-apron.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/033-mixer-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/034-knifes.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/035-toaster.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/036-cup.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/037-pan.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/038-coffee-machine.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/039-grill.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/040-recipe-book.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/041-cooking-pot.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/042-salt-and-pepper.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/043-dishes.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/044-mixer.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/045-kitchen-utensils.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/046-microwave.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/047-knife.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/048-mitten.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/049-blender.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "kitchen-utensils/050-stove.png",
            width: 1,
            height: 1
        }
    ];
    const landmarks_and_monuments = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/001-eiffel-tower.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/002-big-ben.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/003-obelisk.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/004-washington.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/005-taj-mahal.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/006-tower-bridge.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/007-arc-de-triomphe.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/008-gherkin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/009-colosseum.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/010-pisa.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/011-forbidden-city.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/012-notre-dame.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/013-lotus-temple.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/014-burj-al-arab.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/015-london-eye.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/016-mumbai.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/017-sydney-opera-house.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/018-louvre.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/019-christ-the-redeemer.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/020-buddha.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/021-itsukushima-shrine.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/022-cathedral-of-saint-basil.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/023-stonehenge.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/024-mosque.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/025-berlin.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/026-atomium.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/027-statue-of-liberty.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/028-golden-gate.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/029-aztec-pyramid.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "landmarks-and-monuments/030-world-trade-center.png",
            width: 1,
            height: 1
        }
    ];
    const landscapes = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/aurora-borealis.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/bamboo.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/bay.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/beach.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/beach-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/bogs.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/bridge.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/bridge-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/bridge-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/building.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/building-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/cabin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/canyon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/castle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/cave.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/cityscape.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/cityscape-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/cityscape-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/cityscape-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/cityscape-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/cliff.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/desert.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/desert-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/desert-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/desert-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/desert-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/factory.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/farm.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/farm-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/farmland.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/fiord.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/forest.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/forest-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/forest-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/forest-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/forest-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/forest-5.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/glacier.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/glacier-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/hill.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/iceberg.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/iceberg-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/island.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/lake.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/landscape.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/lighthouse.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/lighthouse-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/machair.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/marsh.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/megalith.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/mountains.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/mountains-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/mountains-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/mountains-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/mountains-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/ocean.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/park.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/pier.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/prairie.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/rainforest.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/rainforest-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/road.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/ruins.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/ruins-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/sandstone.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/savannah.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/sea.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/sea-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/sea-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/sea-bottom.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/sea-cave.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/shrubland.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/sunset.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/taiga.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/temple.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/tundra.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/village.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/volcano.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/waterfalls.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "landscapes/woodland.png",
            width: 1,
            height: 1
        }
    ];
    const nautical_sailor = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/001-radar.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/002-oxygen-tank-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/003-fishes.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/004-porthole.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/005-windrose.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/006-yatch-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/007-hook-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/008-shirt.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/009-windsurf.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/010-placeholder.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/011-hook-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/012-map.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/013-pearl.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/014-anchor.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/015-buoy.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/016-submarine.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/017-seagull.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/018-message-in-a-bottle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/019-kayak.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/020-hook.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/021-bell.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/022-barrel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/023-boat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/024-aqualung.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/025-binoculars.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/026-skull-and-bones.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/027-sailboat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/028-lifesaver.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/029-dolphin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/030-surfboard.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/031-shark.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/032-lighthouse.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/033-yatch.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/034-life-jacket.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/035-oxygen-tank.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/036-paddles.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/037-snorkel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/038-sun.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/039-ship.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/040-boat-engine.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/041-whale.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/042-fish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/043-captain.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/044-telescope.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/045-starfish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/046-sailor-cap.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/047-compass.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/048-pipe.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/049-fishing-rod.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "nautical-sailor/050-helm.png",
            width: 1,
            height: 1
        }
    ];
    const number_characters = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio-piu.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio-meno.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio-per.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio-diviso.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 00.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 01.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 02.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 03.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 04.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 05.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 06.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 07.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 08.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 09.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "number-characters/Personaggio 10.png",
            width: 1,
            height: 1
        }
    ]; // roberto
    const sea_life = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/001-octopus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/002-crab.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/003-oyster.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/004-dolphin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/005-starfish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/006-flounder.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/007-shark.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/008-whale.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/009-fish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/010-swordfish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/011-turtle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/012-jellyfish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/013-seahorse.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/014-puffer-fish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/015-sea-cow.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/016-orca.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/017-squid.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/018-coral.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/019-manta-ray.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/020-lobster.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/021-clam.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/022-seaweed.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/023-tuna.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/024-stingray.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/025-seal.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/026-eel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/027-seagull.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/028-shrimp.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/029-anglerfish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/030-beluga.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/031-walrus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/032-narwhal.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/033-diver.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/034-penguin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/035-hammerhead-fish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/036-hermit-crab.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/037-clownfish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/038-surgeon-fish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/039-angelfish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/040-sunfish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/041-sea-anemone.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/042-coral-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/043-fish-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/044-fish-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/045-cod.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/046-cuttlefish.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/047-nautilus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/048-puffin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/049-mussel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "sea-life/050-sea-urchin.png",
            width: 1,
            height: 1
        }
    ];
    const space_and_cosmic = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/001-alien.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/002-astronaut.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/003-astronaut-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/004-astronaut-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/005-earth.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/006-meteor.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/007-meteor-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/008-moon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/009-moon-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/010-planets.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/011-moon-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/012-moon-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/013-observatory.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/014-robot.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/015-rocket.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/016-rocket-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/017-rocket-launch.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/018-rocket-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/019-parachute.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/020-rocket-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/021-satellite.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/022-satellite-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/023-satellite-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/024-saturn.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/025-saturn-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/026-solar-system.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/027-star.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/028-meteor-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/029-meteor-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/030-stars.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/031-car.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/032-telescope.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/033-ufo.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/034-ufo-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/035-abduction.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "space-and-cosmic/036-ufo-2.png",
            width: 1,
            height: 1
        }
    ];
    const speech_bubbles = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-5.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-6.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-7.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-8.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-9.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-10.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-11.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-12.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-13.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-14.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-15.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-16.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-17.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-18.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-19.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-20.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-21.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-22.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-23.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-24.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-25.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-26.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/chat-27.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/thinking.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "speech-bubbles/thinking-1.png",
            width: 1,
            height: 1
        },

    ];
    const summer = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/001-ball.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/002-air-balloon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/003-bikini.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/004-towel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/005-cap.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/006-caravan.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/007-castle.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/008-coconut.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/009-sun-cream.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/010-deck-chair.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/011-diving-mask.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/012-fan.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/013-flip-flop.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/014-float.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/015-stand.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/016-hammock.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/017-pamela.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/018-life-preserver.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/019-ice-cream.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/020-cold-drink.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/021-pants.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/022-pineapple.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/023-pinwheel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/024-swimsuit.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/025-ocean.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/026-beach.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/027-scallop.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/028-sleeveless.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/029-clock.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/030-sun.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/031-sunflower.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/032-sunglasses.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/033-surfboard.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/034-swimsuit-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/035-caravan-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "summer/036-watermelon.png",
            width: 1,
            height: 1
        }
    ];
    const travel_people = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/001-backpack.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/002-passport.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/003-photo-camera.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/004-pin.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/005-palm-tree.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/006-swim.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/007-credit-card.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/008-calendar.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/009-sleep.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/010-compass.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/011-bus.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/012-ship.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/013-sunglasses.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/014-airplane.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/015-swimwear.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/016-train.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/017-map.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/018-pyramid.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/019-key.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/020-room-service.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/021-smartphone.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/022-woman.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/023-soft-drink.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/024-woman-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/025-reception.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/026-sun-umbrella.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/027-boat.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/028-man.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/029-woman-2.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/030-shower.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/031-woman-3.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/032-man-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/033-woman-4.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/034-man-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/035-traveler.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/036-snorkel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/037-woman-5.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/038-hotel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/039-sand-castle.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/040-man-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/041-money.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/042-bonfire.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/043-man-4.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/044-woman-6.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/045-search.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/046-girl.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/047-shopper.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/048-woman-7.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/049-worldwide.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "travel-people/050-taxi.png",
            width: 1,
            height: 1
        }
    ];
    const weather = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/001-windy-2.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/002-windy-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/003-windy.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/004-wind.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/005-wind-sign.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/006-thermometer-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/007-sunset.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/008-sunrise.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/009-sun-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/010-sun.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/011-storm-5.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/012-storm-4.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/013-storm-3.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/014-snowy-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/015-rain-4.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/016-rain-3.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/017-snowy-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/018-snowy.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/019-snowflake.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/020-snow.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/021-rain-2.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/022-rain-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/023-rain.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/024-temperature-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/025-lightning.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/026-hurricane.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/027-humidity.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/028-storm-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/029-storm-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/030-storm.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/031-half-moon-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/032-half-moon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/033-hail-2.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/034-hail-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/035-hail.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/036-full-moon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/037-thermometer-2.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/038-foggy-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/039-foggy-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/040-foggy.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/041-fog.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/042-thermometer-1.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/043-temperature.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/044-cloudy-2.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/045-cloudy-1.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/046-cloudy.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/047-cloud.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/048-night.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/049-thermometer.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "weather/050-barometer.png",
            width: 1,
            height: 1
        }
    ];
    const wild_west = [
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/001-beer.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/002-arrows.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/003-beer.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/004-bullets.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/005-cooking.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/006-cactus.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/007-coffin.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/008-boot.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/009-wanted.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/010-harmonica.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/011-gallow.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/012-Gold Ingots.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/013-gun.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/014-native american.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/015-money bag.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/016-mountain.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/017-wagon.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/018-map.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/019-poker.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/020-railway.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/021-explosive.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/022-saloon.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/023-bandit.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/024-tipi.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/025-water tower.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/026-sign.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/027-saloon.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/028-wheel.png",
            width: 1,
            height: 1
        },
        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/029-whip.png",
            width: 1,
            height: 1
        },

        {
            src: window.STATIC.IMAGE_BASE_PATH + "wild-west/030-whiskey.png",
            width: 1,
            height: 1
        }
    ];

    const galleries = [
        australia, banking, car, coffee_shop, fairytale,
        family_life, fantastic_characters, fishing, housing, july_amusement_park,
        kitchen_utensils, landmarks_and_monuments, landscapes, nautical_sailor, number_characters,
        sea_life, space_and_cosmic, speech_bubbles, summer, travel_people,
        weather, wild_west
    ];

    const [selectedGallery, setSelectedGallery] = useState(fantastic_characters);

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
        <div id="image-gallery-full" ref={full} onClick={closeGallery}>
            <div id="image-gallery">
                <FontAwesomeIcon id="image-gallery-close" icon={faTimes} className="icon" />
                <div id="image-gallery-header">
                    <select defaultValue={'6'} id="select-package" className="form-control col-md-4 col-sm-4" onChange={selectGallery}>
                        <option value="0">Australia</option>
                        <option value="1">Banca</option>
                        <option value="2">Macchina</option>
                        <option value="3">Bar</option>
                        <option value="4">Favola</option>
                        <option value="5">Famiglia</option>
                        <option value="6">Personaggi Fantastici</option>
                        <option value="7">Pesca</option>
                        <option value="8">Case</option>
                        <option value="9">Parco giochi</option>
                        <option value="10">Cucina</option>
                        <option value="11">Monumenti</option>
                        <option value="12">Paesaggi</option>
                        <option value="13">Nautica</option>
                        <option value="14">Numeri</option>
                        <option value="15">Mare</option>
                        <option value="16">Spazio</option>
                        <option value="17">Fumetto</option>
                        <option value="18">Estate</option>
                        <option value="19">Viaggiare</option>
                        <option value="20">Meteo</option>
                        <option value="21">Wild West</option>
                    </select>
                    <FontAwesomeIcon id="image-gallery-search" icon={faSearch} className="icon" />
                    <input id="search-images" placeholder="Cerca ..." className="form-control col-md-4 col-sm-4"/>
                </div>
                <div id="image-gallery-body">
                    <Gallery photos={selectedGallery} />
                </div>
            </div>
        </div>
    )
};