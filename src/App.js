import React, { useRef, useState } from 'react'
import './Style/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import { ContextDataProvider, useContextData } from './Components/ContextProvider/ContextProvider';
import Signup from './Components/SignupAndSignin/Signup/Signup';
import Signin from './Components/SignupAndSignin/Signin/Signin';
import ActivateAccount from './Components/ActivateAccount/ActivateAccount';
import CreateProfile from './Components/CreateProfile/CreateProfile';
import CreateArticle from './Components/CreateArticle/CreateArticle';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import EditArticle from './Components/EditArticle/EditArticle';
import Bookmark from './Components/Bookmarks/Bookmarks';
import PopularArticlePage from './Components/Home/PopularArticle/PopularArticlePage';
import ArticleAuthorProfile from './Components/Profile/ArticleAuthorProfile'
import EditProfile from './Components/EditProfile/EditProfile';
import Footer from './Components/Footer/Footer';
import PopularAuthorPage from './Components/Home/Sidebar/PopularAuthorPage';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import PasswordReset from './Components/PasswordReset/PasswordReset';

function App() {
  const [headerFooter, setHeaderFooter] = useState(true)

  return (
    <ContextDataProvider>
      <Router>
        {headerFooter && <Header />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home/:filter/page=:pageNo">
            <Home />
          </Route>
          <Route path="/user/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/login">
            <Signin setHeaderFooter={setHeaderFooter} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/user/profile">
            <Profile />
          </Route>
          <Route path="/article-author/profile/:authorId">
            <ArticleAuthorProfile />
          </Route>
          <Route path="/create/profile">
            <CreateProfile />
          </Route>
          <Route path="/edit/profile">
            <EditProfile />
          </Route>
          <Route path="/create/article">
            <CreateArticle />
          </Route>
          <Route path="/bookmarks">
            <Bookmark />
          </Route>
          <Route path="/popular-article">
            <PopularArticlePage />
          </Route>
          <Route path="/popular-author">
            <PopularAuthorPage />
          </Route>
          <Route path="/article/edit/:editArticleId">
            <EditArticle />
          </Route>
          <Route path="/article/details/:articleId">
            <ArticleDetails />
          </Route>
          <Route path="/password/reset">
            <PasswordReset />
          </Route>
          <Route path="/set/new/password/:resetToken">
            <PasswordReset />
          </Route>
          <Route path="/account/activate/:userToken">
            <ActivateAccount setHeaderFooter={setHeaderFooter} />
          </Route>
        </Switch>
        {
          headerFooter && <Footer />
        }
      </Router>
    </ContextDataProvider>
  );
}

export default App;
