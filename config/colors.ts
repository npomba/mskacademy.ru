import colors from '@/styles/themes/default/Colors.module.sass'
import { TypeGeneralColorsKeys, TypeColor } from '@/types/index'

type TypeColors = {
  [key in TypeGeneralColorsKeys]: TypeColor
}

export default colors as TypeColors
