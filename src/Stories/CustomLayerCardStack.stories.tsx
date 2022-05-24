import { ComponentMeta, ComponentStory } from "@storybook/react"
import CardMedia from "../Assets/CardMedia.png"
import CustomLayerCard from "../Components/CustomLayerCard/CustomLayerCard"
import CustomLayerCardStack from "../Components/CustomLayerCardStack/CustomLayerCardStack"

interface CardProps {
  text: string,
  img: string,
  checked: boolean
}

export default {
  title: "Custom Layer Card Stack",
  component: CustomLayerCardStack,
  argTypes: {
    breadcrumbs: {
      control: "array"
    }
  }
} as ComponentMeta<any>

const Template: ComponentStory<any> = (args) => (
  <CustomLayerCardStack>
    {args.cards.map((card: CardProps) => {
      return <CustomLayerCard checked={card.checked} text={card.text} img={card.img} />
    })}
  </CustomLayerCardStack>
)
export const AllStates = Template.bind({})

AllStates.args = {
  cards: [
    {
      text: "Card Unselected",
      img: CardMedia,
      checked: false,
    },
    {
      text: "Card Hover",
      img: CardMedia,
      checked: true,
    },
    {
      text: "Card Selected",
      img: CardMedia,
      checked: true,
    }
  ]
}
