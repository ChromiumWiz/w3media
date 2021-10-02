import styled from 'styled-components';

import {Button} from 'react-bootstrap';

export const RoundButton = styled(Button)`
&&&{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #1A8CD8 !important;
    border: none !important;
    box-shadow: 0px 0px 25px 1px #888;

    hover, 
    focus,
    active {
        box-shadow: 0px 0px 25px 3px #888;
    }
}
`;

export const NavButton = styled(RoundButton)`
&&&{
    width: 30px;
}
`;