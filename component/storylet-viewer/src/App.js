import React, {useState, useEffect} from 'react';
import { Impress, Step } from 'react-impressjs';
import Slide from "./component/Slide";
import './App.css'

function App()
{
    const off          = window.innerWidth*0.4;
    const screen_width = window.innerWidth;

    const [slideSize, setSlideSize]       = useState('full');
    const [parentStory, setParentStory]   = useState(null);
    const [currentStory, setCurrentStory] = useState(null);

    const navigate_link = async (storylet_id) =>
    {
        let response = await fetch(window.API_ENDPOINT.GET_STORYLET+'/'+storylet_id, {method: 'GET'});
        let data = await response.json();

        setParentStory(currentStory);
        setCurrentStory(JSON.parse(data.data.story));
        setSlideSize('medium');
    };

    useEffect(() => {
        setCurrentStory(window.STORY.DATA);
    }, []);

    const print_parent_story = () =>
    {
        let slides = parentStory.map((slide, idx) =>
            <Slide key={idx} parameters={slide} size={'small'} isParent={true} />
        );

        return (
            <div className={'parentStory'} onClick={back_to_parent_story}>
                <div className={'contentParentStory'}>
                    {slides}
                </div>
                <div onClick={close_parent_story} className={'closeParentStory'}>CLOSE</div>
            </div>
        )
    };

    const print_impress_story = () =>
    {
        let steps = currentStory.map((slide, idx) => {
            return (
                <Step key={idx} duration={1500} data={{x: idx === 0 ? 0 : ((screen_width-off)*idx)}}>
                    <Slide key={idx} parameters={slide} size={slideSize} navigateLink={navigate_link}/>
                </Step>
            )
        });

        return <Impress progress={true} fallbackMessage={<p>Error</p>} hint={false}>{steps}</Impress>;
    };

    const close_parent_story = () =>
    {
        setParentStory(null);
        setSlideSize('full');
    };

    const back_to_parent_story = () =>
    {
        setCurrentStory(parentStory);
        close_parent_story();
    };

    return (
        <>
            {parentStory && print_parent_story() }
            {currentStory && print_impress_story() }
        </>
    )
}

export default App;
