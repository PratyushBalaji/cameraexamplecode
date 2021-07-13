import * as React from "react"
import {Button, Text} from "react-native"


import RNTextDetector from "react-native-text-detector";
 
export class TextDetectionComponent extends PureComponent {
 
  detectText = async () => {
    try {
      const options = {
        quality: 0.8,
        base64: true,
        skipProcessing: true,
      };
      uri="../assets/business card.jpg"
    //   const { uri } = await this.camera.takePictureAsync(options);
      const visionResp = await RNTextDetector.detectFromUri(uri);
      console.log('visionResp', visionResp);
    } catch (e) {
      console.warn(e);
    }
  };
  render(){
      return(
          <Button title="Click Here!" onPress={()=>{this.detectText()}}></Button>

      )
  }
 
}