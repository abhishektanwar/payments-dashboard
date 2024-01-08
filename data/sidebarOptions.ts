import { ChartBar, ClipboardText, House, IconProps, Lightning, Money, NavigationArrow, Palette, SpeakerHigh, SquaresFour, Tag, Truck, Users } from "phosphor-react"

interface Option {
  name: string,
  icon: React.ComponentType<IconProps>,
  active: boolean
}

const options: Option[] = [
  {
    name: 'Home',
    icon: House,
    active: false
  },
  {
    name: 'Orders',
    icon: ClipboardText,
    active: false
  },
  {
    name: 'Products',
    icon: SquaresFour,
    active: false
  },
  {
    name: 'Delivery',
    icon: Truck,
    active: false
  },
  {
    name: 'Marketing',
    icon: SpeakerHigh,
    active: false
  },
  {
    name: 'Analytics',
    icon: ChartBar,
    active: false
  },
  {
    name: 'Payments',
    icon: Money,
    active: true
  },
  {
    name: 'Tools',
    icon: NavigationArrow,
    active: false
  },
  {
    name: 'Discounts',
    icon: Tag,
    active: false
  },
  {
    name: 'Audience',
    icon: Users,
    active: false
  },
  {
    name: 'Appearence',
    icon: Palette,
    active: false
  },
  {
    name: 'Plugins',
    icon: Lightning,
    active: false
  },
]

export default options;