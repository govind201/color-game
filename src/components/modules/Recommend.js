// import React from 'react';
// // import AudioFeatures from '../../utils/AudioFeautures';
// import Playlist from './userTop/Playlist';
// // import TopTracks from './userTop/TopTracks';
// import useIsMounted from '../../utils/useIsMounted';
// import Login from '../pages/Login';
// // import TopGenre from './userTop/topGenre';

// const topTracksReducer = (state, action) => {
//   switch (action.type) {
//     case 'medium_term':
//       return {
//         ...state,
//         shortTerm: [action.val.map((item) => item.id)],
//       };

//     case 'short_term':
//       return {
//         ...state,
//         mediumTerm: [action.val.map((item) => item.id)],
//       };
//       case 'long_term':
//         return {
//           ...state,
//           longTerm: [action.val.map((item => item.id))]
//         }

//     default:
//       return state;
//   }
// };
// const Recommend = ({ token, userId }) => {
//   const [topTracks, topTracksDispatch] = React.useReducer(topTracksReducer, {
//     shortTerm: [],
//     mediumTerm: [],
//     longTerm: []
//   });
//   const [dataLoaded, setDataLoaded] = React.useState(false)
//   const isMounted = useIsMounted();
//   //Effect for topTracks
//   React.useEffect(() => {
//     if(topTracks.longTerm.length  === 1 && topTracks.mediumTerm.length === 1  && topTracks.shortTerm.length === 1 ) {
//       return;
//     }
//     fetch(
//       'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term',
//       { headers: { Authorization: 'Bearer ' + token } }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (isMounted())
//           return topTracksDispatch({ type: 'short_term', val: data.items });
//       })
//       .catch((error) => console.log(error));
//     fetch(
//       'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term',
//       { headers: { Authorization: 'Bearer ' + token } }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (isMounted())
//           return topTracksDispatch({ type: 'medium_term', val: data.items });
//       })
//       .catch((error) => console.log(error));

//     fetch(
//       'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term',
//       { headers: { Authorization: 'Bearer ' + token } }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (isMounted())
//           return topTracksDispatch({ type: 'long_term', val: data.items });
//       })
//       .catch((error) => console.log(error));
      
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [token, isMounted]);

//   //Effect to check if data loaded
//   React.useEffect(()=>{
//     if(topTracks.longTerm.length  === 1 && topTracks.mediumTerm.length === 1  && topTracks.shortTerm.length === 1 ) {
//        setDataLoaded(true)
//     }
//        console.log("useEffect for data loaded called",  topTracks)
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[ topTracks.longTerm.length, topTracks.mediumTerm.length, topTracks.shortTerm.length])

//   return (
//     <div className="get-rec">
//       {!token && <Login />}
//       {dataLoaded && (  
//  <div> 
//         {/* <AudioFeatures
//           token={token}
//           topTracksShortTerm={topTracks.shortTerm}
//           topTracksMediumTerm={topTracks.mediumTerm}
//           topTracksLongTerm={topTracks.longTerm}
//         /> */}
//       <Playlist userId = {userId} token={token} topTracksShortTerm = {topTracks.shortTerm}/>
//       </div>
//       )}
//     </div>
//   );
// };

// export default Recommend;
