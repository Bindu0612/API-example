import React, { Component } from 'react';

class Userdetails extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoaded: false,
      error: null,
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

  // componentDidMount() {
  //   fetch("https://api.github.com/users")
  //     .then((res) => {
  //       console.log(res.json())
  //       const users =  res.json();
  //       this.setState({ users })
  //     })
    
         
        
      //   (error) => {
      //     this.setState({
      //       isLoaded: true,
      //       error
      //     });
      //   }
      // )
  // }




  // render() {
  //   const { error, isLoaded, users } = this.state;
  //   console.log(this.state.users);
  //   return (
  //     <div>

  //       {!this.state.isLoaded && <h1>Loading...</h1>}

  //      <img src={this.state.user.avatar_url} className="materialboxed" />
  //       <h2>UserName-{this.state.user.name}</h2> 


 
  //       {users.map(item => (<div className="materialboxed">
  //               <img src={this.state.users.avatar_url} className="materialboxed" />
  //                       <h2>UserName-{this.state.users.name}</h2>
  //           </div>))} 

            
  //     </div>
  //   )
  // }



  fetchUsers() {
  fetch("https://api.github.com/users")
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        users: data,
        isLoaded: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoaded: false }));
  }

  componentDidMount(){
    this.fetchUsers();
  }

  render() {
    const { isLoaded, users, error } = this.state;
    return (
      <React.Fragment>
        <h1>Hello, These are my Users : </h1>
        
        {error ? <p>{error.message}</p> : null}
       
        {!isLoaded ? (
          users.map(user => {
            const { login, id, avatar_url } = user;
            return (
              <div key={id}>
                <h5>My Name Is :  {login} </h5>
                <img src={avatar_url} className="materialboxed"/>
                <hr />
              </div>
            );
          })
        // If there is a delay in data, let's let the user know it's loading
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default Userdetails;