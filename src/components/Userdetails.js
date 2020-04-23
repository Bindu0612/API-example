import React, { Component } from 'react';

class Userdetails extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
      isLoaded: false,
      user: {
        "login": "mojombo",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Tom Preston-Werner",
        "company": null,
        "blog": "http://tom.preston-werner.com",
        "location": "San Francisco",
        "email": null,
        "hireable": null,
        "bio": null,
        "public_repos": 61,
        "public_gists": 62,
        "followers": 21923,
        "following": 11,
        "created_at": "2007-10-20T05:24:19Z",
        "updated_at": "2020-04-09T02:14:24Z"
      }
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((res) => {
        console.log(res.json())
        return res.json()
      })
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }




  render() {
    return (
      <>

        {!this.state.isLoaded && <h1>Loading...</h1>}
        <img src={this.state.user.avatar_url} className="materialboxed" />
        <h2>UserName-{this.state.user.name}</h2>
      </>
    )
  }
}

export default Userdetails;