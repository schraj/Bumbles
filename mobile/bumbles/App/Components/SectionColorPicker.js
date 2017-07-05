import React, { PropTypes } from 'react'
import { View, Text, Picker } from 'react-native'
import styles from './Styles/SectionColorPickerStyles'

export default class SectionColorPicker extends React.Component {
  static defaultProps = { defaultValue: 'None'}

  static propTypes = {
    bodyPart: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    colorValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    controlHeight: PropTypes.number.isRequired,
  }

  render() {
    const { bodyPart, defaultValue, colorValues, controlHeight } = this.props;
    return (
      <View style={[styles.centered, styles.bodyPartControl, {height:controlHeight}]}>
        <Text style={[styles.bodyPartLabel, styles.h6]}>{bodyPart}</Text>
        <Picker style={styles.picker}
          selectedValue={defaultValue}
        >
          {
            colorValues.map(v => {
              return <Picker.Item label={v} value={v} />
            })
          }
        </Picker>
      </View>
    )
  }
}
