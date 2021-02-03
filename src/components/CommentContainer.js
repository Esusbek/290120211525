import React from 'react';
import {Comment} from './Comment.js'
import {CommentForm} from './CommentForm.js'


export class CommentContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numComment: 3,
            comments: [{name: 'test1', date: '01.01.01', text: 'test comment 1'},
            {name: 'test2', date: '01.01.01', text: 'test comment 2'},
            {name: 'test3', date: '01.01.01', text: 'test comment 3'}]
        }
    }
    render () {
        return (
            <CommentForm onComment={this.onComment.bind(this)}>
                {this.state.comments.map((o,index) => <Comment key={index} name={o.name} date={o.date} text={o.text}></Comment>)}
            </CommentForm>
        )
    }

    onComment = ({text}) => {
        this.setState({
            numComment: this.state.numComment+1,
            comments: [...this.state.comments,
                {name: 'test123', date: '01.01.01', text}
            ]
        })
    }
}