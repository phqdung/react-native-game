import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  getHeight,
  getWidth,
  makeid,
  screenHeight,
  screenWidth,
  shuffle,
} from '../utils/common';
import images from '../utils/images';
import Card from './Card';

const genCardSource = () => {
  const cards = [];
  for (let i = 0; i <= 23; i++) {
    let index = (i % 10) + 1;
    if (i > 19) {
      index = (i % 2) + 1;
    }

    cards.push({
      id: makeid(5),
      tag: `card${index}`,
      image: images[`card${index}`],
      imageDown: images.card0,
      isUp: false,
      isDelete: false,
    });
  }
  return cards;
};

const cardSource = genCardSource();
shuffle(cardSource);

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevCard: null,
    };
    this.mounted = true;

    this.setPrevCard = this.setPrevCard.bind(this);
    this.handleCheckCard = this.handleCheckCard.bind(this);
  }

  setPrevCard(card) {
    this.setState({prevCard: card});
  }

  handleCheckCard(currentCard) {
    if (this.state.prevCard == null) {
      this.setPrevCard(currentCard);
    } else {
      var that = this;

      if (currentCard.state.tag !== this.state.prevCard.state.tag) {
        setTimeout(() => {
          if (currentCard && that && that.mounted) {
            currentCard.handleClose();
            that.state.prevCard.handleClose();
            that.setPrevCard(null);
          }
        }, 300);
      } else {
        setTimeout(() => {
          if (that && currentCard && that.mounted && currentCard) {
            currentCard.removeCard();
            that.state.prevCard.removeCard();
            that.setPrevCard(null);
          }
        }, 300);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {cardSource.map(card => {
          return (
            <Card
              key={card.id}
              style={styles.card}
              data={card}
              onCheckCard={this.handleCheckCard}
            />
          );
        })}
      </View>
    );
  }

  componentWillUnmount() {
    this.mounted = false;
  }
}

const gutterW = getWidth(3);
const gutterH = getHeight(8);
const timerH = getHeight(80);
const cardWidth = (screenWidth - 18 * gutterW) / 8;
const cardHeight = (screenHeight - timerH - 8 * gutterH) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: gutterW,
    paddingVertical: gutterH,
  },
  card: {
    width: cardWidth,
    height: cardHeight,
    marginHorizontal: gutterW,
    marginVertical: gutterH,
  },
});
