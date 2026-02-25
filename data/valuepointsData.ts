import { MdLocalFlorist, MdEmojiPeople, MdOutlineAccessTime } from 'react-icons/md'
import { GiCookingPot } from 'react-icons/gi'
import { FaTruck } from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'

type ValuePoint = {
  id: string
  title: string
  description: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const valuePointsData:ValuePoint[] = [
  {
    id: 'fresh',
    title: 'Fresh ingredients',
    description: 'We showcase vibrant, seasonal produce and locally-sourced goods in every dish.',
    Icon: MdLocalFlorist,
  },
  {
    id: 'friendly',
    title: 'Friendly staff',
    description: 'Service with a smile — our team makes dining warm, attentive, and easy.',
    Icon: MdEmojiPeople,
  },
  {
    id: 'authentic',
    title: 'Authentic recipes',
    description: 'Recipes inspired by tradition and refined by our chef for modern palates.',
    Icon: GiCookingPot,
  },
  {
    id: 'fast',
    title: 'Fast service',
    description: 'Efficient kitchen and front-of-house coordination for reliable, timely service.',
    Icon: MdOutlineAccessTime,
  },
  {
    id: 'local',
    title: 'Locally sourced',
    description: 'We prioritize nearby farms and producers to support local suppliers.',
    Icon: FaTruck,
  },
  {
    id: 'sustainable',
    title: 'Sustainable practices',
    description: 'Thoughtful packaging and waste reduction are part of our restaurant mindset.',
    Icon: FiRepeat,
  },
]