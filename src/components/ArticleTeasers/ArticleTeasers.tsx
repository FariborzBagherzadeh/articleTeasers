import React, { Component } from "react";
import { ArticleTeaser } from "../ArticleTeaser/ArticleTeaser";

// Check props type
type MyProps = {
  number: number;
  image: string;
  isLoading: boolean;
};

export default class ArticleTeasers extends Component<MyProps> {
  render() {
    return (
      <div className="ab-testing">
        <h2>article teasers:</h2>
        <ul className="article-teasers-list">
          {this.props.isLoading
            ? "Loading..."
            : [...Array(this.props.number)].map((e, i) => (
                <ArticleTeaser image={this.props.image} key={i} />
              ))}
        </ul>
      </div>
    );
  }
}
