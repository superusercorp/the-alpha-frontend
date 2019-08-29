import * as React from "react";

class StoryDetail extends React.Component {
    state = {
        articleTitle: this.props.location.state,
      }
    render() {
        // const { articleTitle } = this.state.articleTitle;
        const articleTitle = Object.values(this.props.location.state)
        console.log("values " + articleTitle) 
        // console.log(articleTitle)
        return (
            <div class="section">
                <div class="container">
                    <div>
                        {articleTitle}
            </div>
                </div>
            </div>
        );
    }
}

export default StoryDetail; 