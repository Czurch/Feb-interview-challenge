import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';
import ItemList from '../list-card/ItemList';

class ListCard extends Component {

  render() {
    return (
      <Base>
        <div>
          <h1>{this.props.cardHeader}</h1>
          <ItemList cardItems={this.props.cardItems} />
        </div>
        <div>
          
        </div>
      </Base>
    );
  }
}

ListCard.propTypes = {
  cardHeader: PropTypes.string,
  cardItems: PropTypes.arrayOf(PropTypes.string)
};

ListCard.defaultProps = {
  cardHeader: 'Header',
  cardItems: ['item 1', 'item 2', 'item 3']
};

export default ListCard;
