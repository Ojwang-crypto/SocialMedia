import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Title from '../../components/Title/Title';
import style from './style';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import { scaleFontSize } from '../../assets/styles/scalling';
import globalStyle from '../../assets/styles/globalStyle'

const Home = () => {
  const userStories = [
    {
      firstName: 'Collins',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Oliver',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Caroline',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Frank',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Kevin',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Verah',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Ojwang',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Wochester, MA',
      likes: 1000,
      comments: 10,
      bookmarks: 20,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston, MA',
      likes: 150,
      comments: 15,
      bookmarks: 84,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Collins',
      lastName: 'Ojwang',
      location: 'Nairobi, Kenya',
      likes: 5000,
      comments: 200,
      bookmarks: 2358,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Nata',
      lastName: 'vandasha',
      location: 'England, MA',
      likes: 111,
      comments: 250,
      bookmarks: 12,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setuserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoryRenderedData] = useState([]);
  const [isLoadinguserStories, setisLoadinguserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setuserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadinguserPosts, setisLoadinguserPosts] = useState(false);


  const pagination = (database, currentPage, pageSize) => {
    //console.log('currentPage', currentPage)
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setisLoadinguserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoryRenderedData(getInitialData);
    setisLoadinguserStories(false);
  }, []);

  useEffect(() => {
    setisLoadinguserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setisLoadinguserPosts(false);

  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title={'Let’s Explore'} />
              <TouchableOpacity style={style.messageIcon}>
                <FontAwesomeIcon icon={faEnvelope} size={scaleFontSize(20)} color="#898DAE" />
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadinguserStories) {
                    return;
                  }
                  setisLoadinguserStories(true);
                  const contentToApend = pagination(
                    userStories,
                    userStoriesCurrentPage + 1,
                    userStoriesPageSize,
                  );
                  if (contentToApend.length > 0) {
                    setuserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    setUserStoryRenderedData(prev => [
                      ...prev,
                      ...contentToApend,
                    ]);
                  }
                  setisLoadinguserStories(false);
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={userStoriesRenderedData}
                renderItem={({ item }) => (
                  <UserStory
                    key={'userStory' + item.id}
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />
                )}
              />
            </View>
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoadinguserPosts) {
            return;
          }
          setisLoadinguserPosts(true);
          const contentToApend = pagination(
            userPosts,
            userPostsCurrentPage + 1,
            userPostsPageSize,
          );
          if (contentToApend.length > 0) {
            setuserPostsCurrentPage(userPostsCurrentPage + 1);
            setUserPostsRenderedData(prev => [...prev, ...contentToApend]);
          }
          setisLoadinguserPosts(false);
        }}
        showsVerticalScrollIndicator={false}
        data={userPostsRenderedData}
        renderItem={({ item }) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
    
  );
};
export default Home;
