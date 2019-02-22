import gearIcon from '../../images/gear.svg'
import transmissionIcon from '../../images/transmission.svg'
import seatIcon from '../../images/seat.svg'
import carBodyIcon from '../../images/car-body.svg'
import powerIcon from '../../images/power.svg'
import otherIcon from '../../images/other.svg'

const pagesData = [
  {
    id: 0,
    name: 'Двигатель',
    icon: gearIcon,
    options: [
      'opt01', 'opt02', 'opt03', 'opt04'
    ]
  },
  {
    id: 1,
    name: 'Трансмиссия',
    icon: transmissionIcon,
    options: [
      'opt11', 'opt12', 'opt13', 'opt14'
    ]
  },
  {
    id: 2,
    name: 'Кузов',
    icon: carBodyIcon,
    options: [
      'opt21', 'opt22', 'opt23', 'opt24'
    ]
  },
  {
    id: 3,
    name: 'Салон',
    icon: seatIcon,
    options: [
      'opt31', 'opt32', 'opt33', 'opt34'
    ]
  },
  {
    id: 4,
    name: 'Some options',
    icon: powerIcon,
    options: [
      'opt41', 'opt42', 'opt43', 'opt44'
    ]
  },
  {
    id: 5,
    name: 'Other options',
    icon: otherIcon,
    options: [
      'opt51', 'opt52', 'opt53', 'opt54'
    ]
  },
]

export default pagesData;