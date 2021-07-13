import { RNCamera } from 'react-native-camera';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default class OCRScreen extends React.Component {
  state = {
    canDetectText: true,
    textBlocks: [],
  };
  textRecognized = (object) => {
    const { textBlocks } = object;
    this.setState({ textBlocks });
  };

  renderCamera() {
    const { canDetectText } = this.state;
    return (
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{ flex: 1 }}
        trackingEnabled
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onTextRecognized={canDetectText ? this.textRecognized : null}>
        {!!canDetectText && this.renderTextBlocks()}
      </RNCamera>
    );
  }

  renderTextBlocks = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.textBlocks.map(this.renderTextBlock)}
    </View>
  );
  render() {
    return <View style={styles.container}>{this.renderCamera()}</View>;
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
  });
  