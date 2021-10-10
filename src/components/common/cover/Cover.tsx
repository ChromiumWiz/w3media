import React from 'react';
import {SCoverProps} from './types';
import {CoverWrapper, CoverImage} from './styles';

const Cover:React.FC<SCoverProps> = ({image}) => {

    return (
        <CoverWrapper>
            <CoverImage src={image}/>
        </CoverWrapper>
    );

}

export default Cover;