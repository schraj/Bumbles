import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  centered: {
    alignItems: 'center'
  },
  bodyPartControl: {
    flex: 1,
    flexDirection: 'row'
  },
  bodyPartLabel: {
    width: 40,
    color: Colors.black
  },
  picker: {
    width: 120,
    color: Colors.black
  }
})
