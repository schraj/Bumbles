import React from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight, Alert, Picker } from 'react-native'
import { Images } from '../Themes'
import SectionColorPicker from '../Components/SectionColorPicker'

// Styles
import styles from './Styles/FilterScreenStyles'

export default class FilterScreen extends React.Component {
  _onImageClick({ nativeEvent: { locationX, locationY } }) {
    Alert.alert('pos:' + locationY);
    // 50, 90, 140, 175, 208, 262, 295, 327, 350 
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h1, styles.title]}>
              Bumbles
            </Text>
            <Text style={[styles.h5, styles.subTitle]}>
              Bumblebee Identification Guide
            </Text>
          </View>
          <TouchableHighlight>
            <Image source={Images.bumblebeeWhole} style={styles.bumblebeeImage} >
              <View style={[styles.centered, styles.bodyPartControlTree]}>
                <SectionColorPicker bodyPart="Face" colorValues={['None', 'Yellow', 'Black']} controlHeight={50} />
                <SectionColorPicker bodyPart="Front of Thorax" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={40} />
                <SectionColorPicker bodyPart="Central Thorax" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={50} />
                <SectionColorPicker bodyPart="Rear Thorax" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={30} />
                <SectionColorPicker bodyPart="T1" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={40} />
                <SectionColorPicker bodyPart="T2" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={50} />
                <SectionColorPicker bodyPart="T3" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={38} />
                <SectionColorPicker bodyPart="T4" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={30} />
                <SectionColorPicker bodyPart="T5" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={28} />
                <SectionColorPicker bodyPart="T6" colorValues={['None', 'Yellow', 'Black', 'Red']} controlHeight={30} />
              </View>
            </Image>
          </TouchableHighlight>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Click on a section above to add a color.
            </Text>

          </View>

        </ScrollView>
      </View>
    )
  }
}
