import colors from '@/styles/themes/default/Colors.module.sass'
import { TypeGeneralColorsKeys, TypeGeneralColor } from '@/types/index'

type TypeGeneralColors = {
  [key in TypeGeneralColorsKeys]: TypeGeneralColor
}

export default colors as TypeGeneralColors
