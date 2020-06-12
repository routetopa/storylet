import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Components
import Text from './slide-components/text'
import Image from './slide-components/image'

// Style
import SlideStyle from '../style/slide'

// Actions
import componentSelected from '../reducer/actions/select-component'

// const shouldSlideNotRender = (prevProps, nextProps) => {
//     return false; //always rerender
// };

function Slide({parameters, isEditable, onClick, isSettingVisible, selected})
{
    const dispatch = useDispatch();

    // const selectedComponent = useSelector(state => state.selectedComponent);

    return (
        <SlideStyle selected={selected} id={"slide_"+parameters.id} isSettingVisible={isSettingVisible} background={parameters.background} backgroundColor={parameters.backgroundColor} isEditable={isEditable} onClick={onClick}>
            {(() => {
                if (!parameters.components) return null;
                return parameters.components.map((c, idx) => {
                    switch (c.type) {
                        case 'text'  :
                            return (
                                <Text key={idx} isEditable={isEditable} component={c}
                                      // onClick={(isEditable && (!selectedComponent || selectedComponent.index !== c.index)) ? () => {dispatch(componentSelected(c))} : null}
                                      onClick={isEditable ? () => {dispatch(componentSelected(c))} : null}
                                />
                            );
                        case 'image' :
                            return (
                                <Image key={idx} isEditable={isEditable} component={c}
                                       // onClick={(isEditable && (!selectedComponent || selectedComponent.index !== c.index)) ? () => {dispatch(componentSelected(c))} : null}
                                       onClick={isEditable ? () => {dispatch(componentSelected(c))} : null}
                                />
                            );
                        // default : break;
                    }
                    // return null;
                })
            }
            )()}
            {console.log('render slide')}
            {isEditable ? "" : (<div className={"pageCount"}>{parameters.index+1}</div>)}
            {
                // isEditable ?
                // <iframe /*style="width:100%;height:100%;min-height:482px;padding:0;margin:0;border:0;"*/
                //         style={{position: 'absolute', top: 0, width: 511, height: 511}}
                //         frameBorder="0"
                //         scrolling="no"
                //         srcDoc="<script src=&quot;https://deep.routetopa.eu/deep2/COMPONENTS/datalets/leafletjs-datalet/../lib/vendors/webcomponents_lite_polyfill/webcomponents-lite.js&quot;></script><style>html,body{margin:0;padding:0;height: 100%}</style><script type=&quot;module&quot; src=&quot;https://deep.routetopa.eu/deep2/COMPONENTS/datalets/leafletjs-datalet/leafletjs-datalet.js&quot; ></script><leafletjs-datalet data-url=&quot;http://ckan.routetopa.eu:8080/api/3/action/datastore_search?resource_id=36a25e65-b3ff-405a-9e15-3dea59d93da2&amp;amp;limit=99999&quot; selectedfields=&quot;[{&amp;quot;field&amp;quot;:&amp;quot;Latitude&amp;quot;,&amp;quot;value&amp;quot;:&amp;quot;Latitudine&amp;quot;,&amp;quot;index&amp;quot;:6},{&amp;quot;field&amp;quot;:&amp;quot;Longitude&amp;quot;,&amp;quot;value&amp;quot;:&amp;quot;Longitudine&amp;quot;,&amp;quot;index&amp;quot;:7},{&amp;quot;field&amp;quot;:&amp;quot;BalloonContent&amp;quot;,&amp;quot;value&amp;quot;:&amp;quot;NOMESCIEN&amp;quot;,&amp;quot;index&amp;quot;:8},{&amp;quot;field&amp;quot;:&amp;quot;BalloonContent&amp;quot;,&amp;quot;value&amp;quot;:&amp;quot;NOMEVOLGA&amp;quot;,&amp;quot;index&amp;quot;:9},{&amp;quot;field&amp;quot;:&amp;quot;BalloonContent&amp;quot;,&amp;quot;value&amp;quot;:&amp;quot;FOTO&amp;quot;,&amp;quot;index&amp;quot;:4},null,null,null,null,null,null,null,null]&quot; filters=&quot;[]&quot; aggregators=&quot;[]&quot; orders=&quot;[]&quot; export_menu=&quot;0&quot; layer=&quot;OpenStreetMap&quot; datalettitle=&quot;Alberi&quot; description=&quot;&quot; data=&quot;[{&amp;quot;name&amp;quot;:&amp;quot;Latitudine&amp;quot;,&amp;quot;data&amp;quot;:[40.8761,40.8747,40.8614,40.8611,40.8667,40.9508,40.95,41.0125,41.4282,41.0983,41.1575,41.1608,41.0892,41.0892,40.9694,40.8347,40.8492,40.8333,40.8333,40.8333,40.8331,40.8331,40.8667,40.8669,40.8667,40.8892,40.8897,40.8555,40.6372,40.8139,40.6992,40.6961,40.6371,40.7017,40.5331,40.6444,40.6489,40.6489,40.6284,40.6288,40.6283,40.619,40.6193,40.6191,40.6361,40.6208,41.1442,41.0751,41.0755,41.0842,41.1641,40.8521,40.7468,40.7473,40.889,40.8857,40.8849,40.889,40.8885,40.9931,40.6908,40.6842,40.6842,40.6372,40.6292,40.7061,40.6781,40.6789,40.9489,41.1861,41.1906,41.0944,41.1675,40.9242,40.9518,41.3381,41.3267,41.4456,40.9735,40.6059,40.6056,40.6586,40.6586,40.6586,40.6586,40.6548,40.6626,40.0733,41.0968,41.2242,41.2442,41.1911,41.1541,41.2394,41.0019,41.3564,41.1442,41.3825,41.1715,41.2099,41.4063,40.217,40.2158,40.6428,40.6393,40.6237,41.0204,41.1442,41.3342]},{&amp;quot;name&amp;quot;:&amp;quot;Longitudine&amp;quot;,&amp;quot;data&amp;quot;:[14.7667,14.7667,14.7333,14.7497,14.7528,14.8475,15.1667,14.8128,15.0719,14.3158,14.5394,14.6425,14.3414,14.3411,14.5375,14.2514,14.2478,14.2353,14.2336,14.2381,14.2375,14.2372,14.2481,14.2481,14.2483,14.2556,14.2781,14.2547,14.4017,14.5725,14.7033,14.7039,14.4105,14.7075,15.3742,14.8736,14.9008,14.9008,14.4189,14.4168,14.416,14.4319,14.4314,14.4314,14.41,14.4243,14.5735,14.3321,14.3324,14.3358,14.6506,15.2532,14.4854,14.4899,14.8206,14.8147,14.8194,14.8234,14.8166,15.4711,14.4728,14.4889,14.4892,14.4014,14.4194,14.8015,14.7536,14.7536,14.7453,15.0147,15.0164,14.9987,15.0008,14.6303,14.6173,14.3195,14.3347,13.9591,14.2063,14.3379,14.3306,14.4914,14.4914,14.4914,14.4914,14.4252,14.4486,15.6087,14.2209,14.3536,14.3367,15.0291,15.6337,14.3198,14.0031,14.3707,14.5735,14.6877,15.4549,15.4523,14.4369,15.0429,15.0464,14.5499,14.5449,14.5662,15.0178,14.5735,14.7281]},{&amp;quot;name&amp;quot;:&amp;quot;NOMESCIEN&amp;quot;,&amp;quot;data&amp;quot;:[&amp;quot;Fagus sylvatica&amp;quot;,&amp;quot;Quercus cerris&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Tilia vulgaris&amp;quot;,&amp;quot;Tilia vulgaris&amp;quot;,&amp;quot;Tilia cordata&amp;quot;,&amp;quot;Tilia cordata&amp;quot;,&amp;quot;Platanus occidentalis&amp;quot;,&amp;quot;Fraxinus excelsior&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Tilia cordata&amp;quot;,&amp;quot;Cinnamomun camphora&amp;quot;,&amp;quot;Cedrus libani&amp;quot;,&amp;quot;Olea europaea&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Cedrus libani&amp;quot;,&amp;quot;Eucalyptus camaldulensis&amp;quot;,&amp;quot;Jubaea chilensis&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Cedrus libani&amp;quot;,&amp;quot;Cinnamomun camphora&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Cinnamomun camphora&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Podocarpus macrophyllus&amp;quot;,&amp;quot;Pinus pinea&amp;quot;,&amp;quot;Platanus orientalis L.&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Sophora japonica&amp;quot;,&amp;quot;Pinus pinea&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Prunus avium&amp;quot;,&amp;quot;Olea europaea&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Tilia platyphyllos&amp;quot;,&amp;quot;Quercus pubescens&amp;quot;,&amp;quot;Taxus baccata&amp;quot;,&amp;quot;Cedrus deodara&amp;quot;,&amp;quot;Quercus petraea&amp;quot;,&amp;quot;Liriodendron tulipifera&amp;quot;,&amp;quot;Araucaria araucana&amp;quot;,&amp;quot;Casuarina equisetifolia&amp;quot;,&amp;quot;Taxus baccata&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Quercus Ilex&amp;quot;,&amp;quot;Winstaria sinensis&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Quercus robur&amp;quot;,&amp;quot;Castanea sativa&amp;quot;,&amp;quot;Platanus occidentalis&amp;quot;,&amp;quot;Carpinus betulus&amp;quot;,&amp;quot;Quercus pubescens&amp;quot;,&amp;quot;Quercus pubescens&amp;quot;,&amp;quot;Quercus ilex&amp;quot;,&amp;quot;Pinus halepensis&amp;quot;,&amp;quot;Taxux baccata&amp;quot;,&amp;quot;Quercus ilex&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Pinus halepensis&amp;quot;,&amp;quot;Pinus halepensis&amp;quot;,&amp;quot;Tilia vulgaris&amp;quot;,&amp;quot;Quercus cerris&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Cupressus sempervirens&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Quercus ilex&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Magnolia grandiflora&amp;quot;,&amp;quot;Olea europaea&amp;quot;,&amp;quot;Morus nigra&amp;quot;,&amp;quot;Fagus sylvatica&amp;quot;,&amp;quot;Fagus sylvatica&amp;quot;,&amp;quot;Fagus sylvatica&amp;quot;,&amp;quot;Fagus sylvatica&amp;quot;,&amp;quot;Eucaliptus globosus&amp;quot;,&amp;quot;Tilia cordata&amp;quot;,&amp;quot;Quercus suber&amp;quot;,&amp;quot;Broussonetia papyrifera&amp;quot;,&amp;quot;Laurus nobilis&amp;quot;,&amp;quot;Fraxinus excelsior&amp;quot;,&amp;quot;Quercus pubescens&amp;quot;,&amp;quot;Morus alba&amp;quot;,&amp;quot;Quercus cerris&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Platanus acerifolia&amp;quot;,&amp;quot;Quercus petrea&amp;quot;,&amp;quot;Olea europaea&amp;quot;,&amp;quot;Tilia cordata&amp;quot;,&amp;quot;Cedrus deodora&amp;quot;,&amp;quot;Fagus sylvatica&amp;quot;,&amp;quot;Olea europaea&amp;quot;,&amp;quot;Olea europaea&amp;quot;,&amp;quot;Tilia cordata&amp;quot;,&amp;quot;Platanus orientalis&amp;quot;,&amp;quot;Tilia cordata&amp;quot;,&amp;quot;Quercus pubescens&amp;quot;,&amp;quot;Quercus petrea&amp;quot;,&amp;quot;Morus alba&amp;quot;]},{&amp;quot;name&amp;quot;:&amp;quot;NOMEVOLGA&amp;quot;,&amp;quot;data&amp;quot;:[&amp;quot;Faggio&amp;quot;,&amp;quot;Cerro&amp;quot;,&amp;quot;Platano comune&amp;quot;,&amp;quot;Tiglio intermedio&amp;quot;,&amp;quot;Tiglio intermedio&amp;quot;,&amp;quot;Tiglio selvatico&amp;quot;,&amp;quot;Tiglio selvatico&amp;quot;,&amp;quot;Platano occidentale&amp;quot;,&amp;quot;Frassino maggiore&amp;quot;,&amp;quot;Platano comune&amp;quot;,&amp;quot;Platano comune&amp;quot;,&amp;quot;Tiglio selvatico&amp;quot;,&amp;quot;Albero della canfora&amp;quot;,&amp;quot;Cedro del Libano&amp;quot;,&amp;quot;Olivo&amp;quot;,&amp;quot;Platano comune&amp;quot;,&amp;quot;Cedro del Libano&amp;quot;,&amp;quot;Eucalitto rostrato&amp;quot;,&amp;quot;Palma gigante del Cile&amp;quot;,&amp;quot;Platano orientale&amp;quot;,&amp;quot;Platano orientale&amp;quot;,&amp;quot;Platano orientale&amp;quot;,&amp;quot;Cedro del Libano&amp;quot;,&amp;quot;Albero della canfora&amp;quot;,&amp;quot;Platano orientale&amp;quot;,&amp;quot;Albero della canfora&amp;quot;,&amp;quot;Platano orientale&amp;quot;,&amp;quot;Podocarpo&amp;quot;,&amp;quot;Pino domestico&amp;quot;,&amp;quot;Platano orientale&amp;quot;,&amp;quot;Platano orientale&amp;quot;,&amp;quot;Sofora&amp;quot;,&amp;quot;Pino domestico&amp;quot;,&amp;quot;Platano orientale&amp;quot;,&amp;quot;Ciliegio selvatico&amp;quot;,&amp;quot;Olivo&amp;quot;,&amp;quot;Cipresso comune&amp;quot;,&amp;quot;Cipresso comune&amp;quot;,&amp;quot;Cipresso&amp;quot;,&amp;quot;Cipresso&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Tiglio nostrale&amp;quot;,&amp;quot;Roverella&amp;quot;,&amp;quot;Tasso&amp;quot;,&amp;quot;Cedro dell&amp;amp;#39;Himalaya&amp;quot;,&amp;quot;Rovere&amp;quot;,&amp;quot;Albero dei tulipani&amp;quot;,&amp;quot;Auracaria del Cile&amp;quot;,&amp;quot;Casuarina&amp;quot;,&amp;quot;Tasso&amp;quot;,&amp;quot;Cipresso comune&amp;quot;,&amp;quot;Leccio&amp;quot;,&amp;quot;Glicine&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Quercia&amp;quot;,&amp;quot;Castagno&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Carpino&amp;quot;,&amp;quot;Roverella&amp;quot;,&amp;quot;Roverella&amp;quot;,&amp;quot;Leccio&amp;quot;,&amp;quot;Pino di Aleppo&amp;quot;,&amp;quot;Tasso&amp;quot;,&amp;quot;Leccio&amp;quot;,&amp;quot;Cipresso&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Pino di Aleppo&amp;quot;,&amp;quot;Pino di Aleppo&amp;quot;,&amp;quot;Tiglio&amp;quot;,&amp;quot;Cerro&amp;quot;,&amp;quot;Cipresso&amp;quot;,&amp;quot;Cipresso&amp;quot;,&amp;quot;Cipresso&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Leccio&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Magnolia&amp;quot;,&amp;quot;Olivo&amp;quot;,&amp;quot;Gelso&amp;quot;,&amp;quot;Faggio&amp;quot;,&amp;quot;Faggio&amp;quot;,&amp;quot;Faggio&amp;quot;,&amp;quot;Faggio&amp;quot;,&amp;quot;Eucalipto&amp;quot;,&amp;quot;Tiglio&amp;quot;,&amp;quot;Sughera&amp;quot;,&amp;quot;Gelso da carta&amp;quot;,&amp;quot;Alloro&amp;quot;,&amp;quot;Frassino&amp;quot;,&amp;quot;Roverella&amp;quot;,&amp;quot;Gelso&amp;quot;,&amp;quot;Cerro&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Rovere&amp;quot;,&amp;quot;Olivo&amp;quot;,&amp;quot;Tiglio&amp;quot;,&amp;quot;Cedro&amp;quot;,&amp;quot;Faggio&amp;quot;,&amp;quot;Olivo&amp;quot;,&amp;quot;Olivo&amp;quot;,&amp;quot;Tiglio&amp;quot;,&amp;quot;Platano&amp;quot;,&amp;quot;Tiglio&amp;quot;,&amp;quot;Quercia&amp;quot;,&amp;quot;Rovere&amp;quot;,&amp;quot;Gelso&amp;quot;]},{&amp;quot;name&amp;quot;:&amp;quot;FOTO&amp;quot;,&amp;quot;data&amp;quot;:[&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/01.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/02.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/03.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/04.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/05.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/06.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/07.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/08.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/09.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/10.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/11.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/12.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/13.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/14.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/15.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/16.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/17.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/18.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/19.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/20.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/21.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/22.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/23.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/24.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/25.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/26.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/27.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/28.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/29.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/30.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/31.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/32.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/44.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/33.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/34.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/35.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/36.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/37.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/38.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/39.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/40.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/41.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/42.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/43.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/45.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/46.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/47.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/48.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/49.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/50.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/51.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/52.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/53.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/54.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/55.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/56.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/57.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/58.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/59.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/60.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/61.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/62.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/63.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/64.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/65.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/66.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/67.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/68.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/69.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/70.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/71.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/72.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/73.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/74.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/75.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/76.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/77.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/78.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/79.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/80.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/81.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/82.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/83.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/84.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/85.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/86.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/87.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/88.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/89.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/90.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/91.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/92.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/93.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/94.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/95.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/96.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/97.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/98.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/99.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/100.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/101.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/102.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/103.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/104.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/105.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/106.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/107.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/108.jpg&amp;quot;,&amp;quot;http://agricoltura.regione.campania.it/foreste/monum/img/109.jpg&amp;quot;]}]&quot; hide_export=&quot;&quot; hide_fullscreen=&quot;&quot; hide_share=&quot;&quot;></leafletjs-datalet>">
                // </iframe> : ''
            }
        </SlideStyle>
    )
}

// export default React.memo(Slide, shouldSlideNotRender)
export default Slide

