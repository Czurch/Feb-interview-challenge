import React, { Component } from "react";
import classNames from "classnames";
import { Card as Base, CardHeader, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./ListCard.module.scss";

class ListCard extends Component {
  render() {
    const { theme, cardHeader, cardItems } = this.props;

    return (
      <Base
        classes={{
          root: classNames(styles.listCard, { [styles.dark]: theme === "dark" })
        }}
      >
        <CardHeader
          title={cardHeader}
          classes={{
            root: classNames(styles.headerSpace, {
              [styles.dark]: theme === "dark"
            }),
            title: classNames(styles.headerTitle, {
              [styles.dark]: theme === "dark"
            })
          }}
        />
        <CardContent
          classes={{
            root: classNames(styles.itemSpace, {
              [styles.dark]: theme === "dark"
            })
          }}
          component="ul"
        >
          {cardItems.map(item => (
            <li className={styles.listItem} key={item.key}>
              - {item}
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
