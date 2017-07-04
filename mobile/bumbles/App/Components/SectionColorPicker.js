import React, { PropTypes } from 'react'
import { View, Text, Picker } from 'react-native'
import styles from './Styles/SectionColorPickerStyles'

export default class SectionColorPicker extends React.Component {
  static defaultProps = { defaultValue: 'None'}

  static propTypes = {
    bodyPart: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    colorValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    const { bodyPart, defaultValue, colorValues } = this.props;
    let testValue = 'None';
    return (
      <View style={[styles.centered, styles.bodyPartControl]}>
        <Text style={styles.bodyPartLabel}>{bodyPart}</Text>
        <Picker style={styles.picker}
          selectedValue={testValue}
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
