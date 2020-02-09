import React, { Component } from "react";
import { Card as Base, CardHeader, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./ListCard.module.scss";

class ListCard extends Component {
  render() {
    const { cardHeader, cardItems } = this.props;

    return (
      <Base classes={{ root: styles.listCard }}>
        <CardHeader classes={{ root: styles.headerSpace }} title={cardHeader} />
        <CardContent classes={{ root: styles.itemSpace }} component="ul">
          {cardItems.map(item => (
            <li className={styles.listItem} key={item.key}>
              -{item}
            </li>
          ))}
        </CardContent>
      </Base>
    );
  }
}

ListCard.propTypes = {
  cardHeader: PropTypes.string,
  cardItems: PropTypes.arrayOf(PropTypes.string)
};

ListCard.defaultProps = {};

export default ListCard;
