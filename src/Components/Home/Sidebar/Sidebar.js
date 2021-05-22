import React, { useEffect, useState } from 'react';
import { Avatar, Paper } from '@material-ui/core';
import { useContextData } from '../../ContextProvider/ContextProvider';
import PopularAuthor from './PopularAuthor';

const Sidebar = () => {
   const {allUsers, allArticles} = useContextData()
   const newArray = allUsers.slice()
   const [sortedAuthor, setSortedAuthor] = useState(null)
   useEffect(() => {
      if (allUsers && newArray) {
         const sorted = newArray.sort((a, b) => {
            if (a.posts.length < b.posts.length) return 1
            if (a.posts.length > b.posts.length) return -1
            return 0
         })
         setSortedAuthor(sorted)
      }
   }, [allUsers])

   return (
      <Paper className="HomeSidebar">
         <h5>Most Popular Author</h5>
         {
            sortedAuthor && sortedAuthor.map(user => <PopularAuthor 
               author={user} 
               allArticles={allArticles} 
               />)
         }
      </Paper>
   );
};

export default Sidebar;