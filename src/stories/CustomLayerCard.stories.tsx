import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardMedia from '../../images/CardMedia.png'
import CustomLayerCard from '../components/customLayerCard/CustomLayerCard';

export default {
    title: 'Custom Layer Card',
    component: CustomLayerCard,
   
} as ComponentMeta<any>

const Template: ComponentStory<any> = (args) => <CustomLayerCard {...args} />;




export const Unselected = Template.bind({})

export const Selected = Template.bind({})

export const Hover = Template.bind({})

Unselected.args = {
    text: 'Flood zone 3',
    img: CardMedia,
    border: '1px solid #EFEFEF',
}

Hover.args = {
    text: 'Flood zone 3',
    img: CardMedia,
    border: '0px',
    boxShadow: '0px 0px 0px 2px'
}

Selected.args = {
    text: 'Flood zone 3',
    img: CardMedia,
    border: '1px',
    boxShadow: '0px 0px 0px 2px'
}

