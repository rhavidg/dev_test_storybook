import { ComponentMeta, ComponentStory } from "@storybook/react"
import CardMedia from "../Assets/CardMedia.png"
import CustomLayerCard from "../Components/CustomLayerCard/CustomLayerCard"

export default {
  title: "Custom Layer Card",
  component: CustomLayerCard
} as ComponentMeta<any>

const Template: ComponentStory<any> = (args) => <CustomLayerCard {...args} />

export const Unselected = Template.bind({})

export const Selected = Template.bind({})

export const Hover = Template.bind({})

Unselected.args = {
  text: "Flood zone 3",
  img: CardMedia,
}

Hover.args = {
  text: "Flood zone 3",
  img: CardMedia,
}
Hover.parameters = {pseudo: {hover: true}}

Selected.args = {
  text: "Flood zone 3",
  img: CardMedia,
  border: "1px",
  boxShadow: "0px 0px 0px 2px",
  checked: true
}
