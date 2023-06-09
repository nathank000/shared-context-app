//imports
import React, { useContext } from 'react';
import StepsContext from '../StepsContext';
import {Utils} from '../functions/componentFunctions';
import { Tab, Col, Nav, Row } from "react-bootstrap";
import '../css/MainAppView.css';

//function
function MainAppView() {
    const { step, setStep, userRegion } = useContext(StepsContext);

    //return
    return (
        <div id="MainAppView_holder">
            {step === 8 && (
            <>
            <div class="">
                {/* <!-- Nav tabs --> */}
                <div class="card">
                    <div class="card-header">
                    <ul class="nav nav-tabs justify-content-center" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home" role="tab">
                            <i class="now-ui-icons objects_umbrella-13"></i> Home
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#profile" role="tab">
                            <i class="now-ui-icons shopping_cart-simple"></i> Profile
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#messages" role="tab">
                            <i class="now-ui-icons shopping_shop"></i> Messages
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#settings" role="tab">
                            <i class="now-ui-icons ui-2_settings-90"></i> Settings
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div class="card-body">
                    {/* <!-- Tab panes --> */}
                    <div class="tab-content text-center">
                        <div class="tab-pane active" id="home" role="tabpanel">
                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                        </div>
                        <div class="tab-pane" id="profile" role="tabpanel">
                        <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                        </div>
                        <div class="tab-pane" id="messages" role="tabpanel">
                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                        </div>
                        <div class="tab-pane" id="settings" role="tabpanel">
                        <p>
                            "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </>
            )}
        </div>
    )
}
    
//export
export default MainAppView;