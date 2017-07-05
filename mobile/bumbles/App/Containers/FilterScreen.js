import React from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight, Alert, Picker } from 'react-native'
import { Images } from '../Themes'
import SectionColorPicker from '../Components/SectionColorPicker'
import { filter, getBodyPartIndex } from '../Services/FilterService'

// Styles
import styles from './Styles/FilterScreenStyles'

export default class FilterScreen extends React.Component {
  _attributeArray = [null, null, null, null, null, null, null, null, null, null];
  _filteredBeeArray = [];

  _onImageChange({ nativeEvent: { locationX, locationY } }) {
    Alert.alert('pos:' + locationY);
    // 50, 90, 140, 175, 208, 262, 295, 327, 350 
  }

  onColorChange(color, bodyPartCode) {
    let chosenColor = color !== 'Not Chosen' ? color : null;
    const bodyPartIndex = getBodyPartIndex(bodyPartCode);
    this._attributeArray[bodyPartIndex] = chosenColor;
    this._filteredBeeArray = filter(this._attributeArray);
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
                <SectionColorPicker bodyPart="Face" bodyPartCode="Face" controlHeight={50} onColorChange={this.onColorChange} />
                <SectionColorPicker bodyPart="Front of Thorax" bodyPartCode="FT" controlHeight={40} onColorChange={this.onColorChange}/>
                <SectionColorPicker bodyPart="Central Thorax" bodyPartCode="CT" controlHeight={50} onColorChange={this.onColorChange} />
                <SectionColorPicker bodyPart="Rear Thorax" bodyPartCode="RT" controlHeight={30} onColorChange={this.onColorChange} />
                <SectionColorPicker bodyPart="T1" bodyPartCode="T1" controlHeight={40} onColorChange={this.onColorChange} />
                <SectionColorPicker bodyPart="T2" bodyPartCode="T2" controlHeight={50} onColorChange={this.onColorChange} />
                <SectionColorPicker bodyPart="T3" bodyPartCode="T3" controlHeight={38} onColorChange={this.onColorChange} />
                <SectionColorPicker bodyPart="T4" bodyPartCode="T4" controlHeight={30} onColorChange={this.onColorChange} />
                <SectionColorPicker bodyPart="T5" bodyPartCode="T5" controlHeight={28} onColorChange={this.onColorChange} />
                <SectionColorPicker bodyPart="T6" bodyPartCode="T6" controlHeight={30} onColorChange={this.onColorChange} />
              </View>
            </Image>
          </TouchableHighlight>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Click on a section above to add a color.
            </Text>

            {
              this._filteredBeeArray.length > 0 && this._filteredBeeArray.map(b => {
                return <Text style={styles.sectionText}>
                          test
                       </Text>
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}
