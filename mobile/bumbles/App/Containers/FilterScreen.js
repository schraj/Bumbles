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
                <SectionColorPicker bodyPart="Head" colorValues={['None', 'Yellow', 'Black']} />
                <SectionColorPicker bodyPart="T1" colorValues={['None', 'Yellow', 'Black', 'Red']} />
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
