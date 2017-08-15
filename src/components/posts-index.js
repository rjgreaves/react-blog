/**
 * Created by reube on 28/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

/// Data
///categories
// :
// "Drake, Drizzy"
// content
//     :
//     "Kalipari Flows"
// id
//     :
//     118950
// title
//     :
//     "It's the boy but I'm still the man"

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, (post) => {
            return (
            <tr key={post.id}>
                <td>{ post.title }</td>
                <td>{ post.content }</td>
                <td>
                    { post.categories }
                </td>
            </tr>
            )
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts Index</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Categories</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderPosts()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);