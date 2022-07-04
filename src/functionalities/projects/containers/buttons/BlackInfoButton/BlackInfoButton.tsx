import React from 'react';
import BlackBoxButton from '../../../../../components/Buttons/BlackBoxButton';

type Props = {
    userId?: string
}

const BlackInfoButtonProject = ({ userId }: Props) => {
    //TODO hook for getting the project count

    return (
        <BlackBoxButton text1="-" text2="Projects" />
    );
};

export default BlackInfoButtonProject;
