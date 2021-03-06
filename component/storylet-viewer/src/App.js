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
    const [currentStoryMetadata, setCurrentStoryMetadata] = useState(null);

    const navigate_link = async (storylet_id) =>
    {
        let response = await fetch(window.API_ENDPOINT.GET_STORYLET+'/'+storylet_id, {method: 'GET'});
        let data = await response.json();

        setParentStory(currentStory);
        setCurrentStory(JSON.parse(data.data.story));
        setSlideSize('medium');
    };

    useEffect(() => {
        setCurrentStory(JSON.parse(window.STORY.DATA.story));
        setCurrentStoryMetadata(JSON.parse(window.STORY.DATA.metadata));
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

    const export_HTML = () =>
    {
        let html = document.documentElement.cloneNode(true);
        html.getElementsByTagName('div')[0].innerHTML="";
        while(html.getElementsByTagName('style').length)
            html.getElementsByTagName('style')[0].remove()
        html = html.outerHTML;
        let iframe = document.createElement('iframe');
        iframe.setAttribute("style", "width:100%;height:100%;min-height:720px;padding:0;margin:0;border:0;");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("srcdoc", html);

        let temp = document.createElement("input")
        document.getElementsByTagName("body")[0].appendChild(temp);
        temp.value = iframe.outerHTML;
        temp.select();
        document.execCommand("copy");
        document.getElementsByTagName("body")[0].removeChild(temp);
    }

    const print_impress_story = () =>
    {
        // debugger
        let steps;
        if(!currentStoryMetadata.viewer || currentStoryMetadata.viewer.template === "linear") {
            steps = currentStory.map((slide, idx) => {
                return (
                    <Step key={idx} duration={1500} data={{x: idx === 0 ? 0 : ((screen_width-off)*idx)}}>
                        <Slide key={idx} parameters={slide} size={slideSize} navigateLink={navigate_link}/>
                    </Step>
                )
            })
        }
        else if(currentStoryMetadata.viewer.template === "snail") {
            steps = currentStory.map((slide, idx) => {
                if(idx < 13)
                    return (
                        <Step key={idx} duration={1500} data={{
                            x: [-1000,0,1100,1900,2100,1800,1000,-100,-1200,-2000,-2300,0,3000][idx],
                            y: [-1500,-1500,-1200,-400,700,1800,2600,2900,2600,1800,700,700,1500][idx],
                            rotate: [0,0,30,60,90,120,150,180,210,240,270,720,0][idx],
                            scale: [1,1,1,1,1,1,1,1,1,1,1,1,0.1][idx]
                        }}>
                            <Slide key={idx} parameters={slide} size="snail" navigateLink={navigate_link}/>
                        </Step>
                    )
            });
            steps = steps.filter(function (el) {
                return el != null;
            });
        }
        else if(currentStoryMetadata.viewer.template === "cube") {
            steps = currentStory.map((slide, idx) => {
                if(idx < 6 )
                    return (
                        <Step key={idx} duration={1500} data={{x: [0,350,0,0,-350,0][idx], y: [0,0,350,-350,0,0][idx], z: [350,0,0,0,0,-350][idx], rotateX: [0,0,-90,90,0,0][idx], rotateY: [0,90,0,0,-90,-180][idx]}}>
                            <Slide key={idx} parameters={slide} size="cube" navigateLink={navigate_link}/>
                        </Step>
                    )
            });
            steps = steps.filter(function (el) {
                return el != null;
            });
        }
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
            <div onClick={()=>export_HTML()} id="btn_embed" data-balloon="Copia HTML" data-balloon-pos="right">
                <img src="https://image.flaticon.com/icons/svg/272/272352.svg"/>
            </div>
            {parentStory && print_parent_story() }
            {currentStory && print_impress_story() }
        </>
    )
}

export default App;
