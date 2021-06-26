import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };

    console.log(this.props.style);

    this.handlePress = this.handlePress.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  handlePress() {
    if (!this.state.isUp) {
      this.setState({isUp: !this.state.isUp});
    }
    this.props.onCheckCard(this);
  }

  removeCard() {
    this.setState({isDelete: true});
  }

  handleClose() {
    if (this.state.isUp) {
      this.setState({isUp: false});
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress} style={this.props.style}>
        <Image
          style={[styles.image, this.state.isDelete ? styles.hidden : null]}
          source={this.state.isUp ? this.state.image : this.state.imageDown}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  hidden: {
    opacity: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
