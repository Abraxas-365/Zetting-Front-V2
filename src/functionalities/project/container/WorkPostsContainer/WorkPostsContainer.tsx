import React from 'react';
import MasonrryList from '../../../../components/Lists/MasonryList';
import { COLORS } from '../../../../themes/colors/ZettingColors';
import WorkOffersCard from '../../../../components/Cards/WorkOffersCard';

const data = [
    {
        id: "0",
        category: "Food & Restaurant",
        description: "Lorem ipsum dolor sit amet, consectetueradipiscing elit, seddiam nonummy nibheuismod tincidunt utlaoreet dolore magnaaliquam erat volutpat.",
        type: 'Freelancer',
    },
    {
        id: "1",
        category: "Clothing",
        description: "Lorem ipsum dolor sitamet, consectetueradipiscing elit, seddiam nonummy nibheuismod tincidunt utlaoreet dolore .",
        type: 'Internship'
    },
    {
        id: "3",
        category: "Bakery",
        description: "Lorem ipsum dolor sitamet, consectetueradipiscing elit, seddiam nonummy nibheuismod tincidunt utlaoreet dolore .",
        type: 'Part-time'
    },
    {
        id: "4",
        category: "Dentist",
        description: "test",
        type: 'Freelancer'
    },
    {
        id: "5",
        category: "Food & Restaurant",
        description: "Lorem ipsum dolor sit amet, consectetueradipiscing elit, seddiam nonummy nibheuismod tincidunt utlaoreet dolore magnaaliquam erat volutpat.",
        type: 'Freelancer',
    },
    {
        id: "6",
        category: "Clothing",
        description: "Lorem ipsum dolor sitamet, consectetueradipiscing elit, seddiam nonummy nibheuismod tincidunt utlaoreet dolore .",
        type: 'Internship'
    },
    {
        id: "7",
        category: "Bakery",
        description: "Lorem ipsum dolor sitamet, consectetueradipiscing elit, seddiam nonummy nibheuismod tincidunt utlaoreet dolore .",
        type: 'Part-time'
    },
    {
        id: "8",
        category: "Dentist",
        description: "test",
        type: 'Freelancer'
    },

]

const WorkPostsContainer = () => {
    return (
        <MasonrryList
            style={{ backgroundColor: COLORS.blue, alignSelf: 'stretch', marginTop: 10 }}
            data={data}
            keyExtractor={(item): string => item.id}
            contentContainerStyle={{
                backgroundColor: COLORS.blue,
            }}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <WorkOffersCard pin={item} />}
        />
    );
};

export default WorkPostsContainer;
